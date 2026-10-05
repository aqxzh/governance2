import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
const base = process.env.PREVIEW_URL ?? 'http://127.0.0.1:5174';
const out = '.artifacts/preview/infographics';
await mkdir(out, { recursive: true });
const groups = {
	diagnostics: ['functions', 'people', 'data'],
	simulator: ['research', 'scenarios', 'supply'],
	coordination: ['advisor', 'bots']
};
const browser = await chromium.launch({ args: ['--no-sandbox'] });
const results = [];
const capture = async (page, element, name) => {
	await element.evaluate((e) => e.scrollIntoView({ block: 'start' }));
	await page.waitForTimeout(70);
	const clip = await element.evaluate((e) => {
		const b = e.getBoundingClientRect();
		return { x: b.x + scrollX, y: b.y + scrollY, width: b.width, height: b.height };
	});
	if (await element.evaluate((e) => Boolean(e.closest('[role="dialog"]'))))
		await page.screenshot({ path: `${out}/${name}.png` });
	else await page.screenshot({ path: `${out}/${name}.png`, fullPage: true, clip });
};
try {
	for (const width of [390, 768, 1440])
		for (const locale of ['ru', 'kk', 'en']) {
			const page = await browser.newPage({
				viewport: { width, height: 900 },
				reducedMotion: 'reduce'
			});
			const errors = [];
			page.on('pageerror', (e) => errors.push(e.message));
			page.on('console', (m) => {
				if (m.type() === 'error' || /hydration_mismatch|hydration_attribute_changed/.test(m.text()))
					errors.push(m.text());
			});
			const load = async (path) => {
				await page.goto(base + path, { waitUntil: 'networkidle', timeout: 60000 });
				await page.evaluate(() => document.fonts.ready);
				await page.addStyleTag({ content: 'a[href="#main"].fixed{visibility:hidden!important}' });
			};
			const check = async (where) => {
				const info = await page.evaluate(() => {
					const ids = [...document.querySelectorAll('[id]')].map((e) => e.id);
					const raster = [...document.images]
						.filter((e) => /\/images\/(contours|simulator|landing)\//.test(e.src))
						.map((e) => e.src);
					return {
						overflow: document.documentElement.scrollWidth > innerWidth,
						duplicates: ids.filter((id, i) => ids.indexOf(id) !== i),
						raster
					};
				});
				results.push({ locale, width, where, ...info });
			};
			await load(`/${locale}/`);
			await capture(page, page.locator('#infographics'), `before-after-${locale}-${width}`);

			// Open source diagrams and strategy using the associated content IDs, independent of locale copy.
			for (const id of ['strategy']) {
				await page.locator(`button[aria-controls="${id}"]`).click();
				await capture(page, page.locator('#' + id), `${id}-${locale}-${width}`);
			}
			await page.locator('#infographics button[aria-expanded]').first().click();
			for (const [i, element] of (
				await page.locator('#infographics [data-infographic-source]').all()
			).entries())
				await capture(page, element, `scheme-${i + 1}-${locale}-${width}`);
			await check('home');
			for (const [area, topics] of Object.entries(groups)) {
				await load(`/${locale}/${area}/`);
				for (const topic of topics) {
					await page.locator(`[role="tab"][data-value="${topic}"]`).click();
					const panel = page.getByRole('tabpanel');
					for (const element of await panel.locator('[data-infographic-source]:visible').all()) {
						const slug = (await element.getAttribute('data-infographic-source'))
							.split('/')
							.at(-1)
							.replace('.webp', '');
						await capture(page, element, `${area}-${topic}-${slug}-${locale}-${width}`);
					}

					// The source-material trigger is the direct trigger preceding data-static-collapsible.
					const archive = panel.locator('[data-static-collapsible]').first();
					const control = await archive.getAttribute('id');
					const trigger = page.locator(`button[aria-controls="${control}"]`);
					if ((await trigger.count()) && (await trigger.getAttribute('aria-expanded')) === 'false')
						await trigger.click();
					const rows = panel.locator('[data-solution-id]:visible');
					for (const row of await rows.all()) {
						const id = await row.getAttribute('data-solution-id');
						await row.getByRole('button').click();
						const dialog = page.getByRole('dialog');
						await capture(
							page,
							dialog.locator('[data-infographic-source]'),
							`${id}-modal-${locale}-${width}`
						);
						await check(`${id}-modal`);
						const readable = await dialog.evaluate((e) => {
							e.scrollTop = e.scrollHeight;
							return e.scrollHeight <= e.clientHeight || e.scrollTop > 0;
						});
						if (!readable) throw Error(`${id}: dialog content cannot be scrolled`);
						await page.screenshot({ path: `${out}/${id}-modal-end-${locale}-${width}.png` });
						await page.keyboard.press('Escape');
					}
					for (const element of await panel
						.locator('[id^="module-"] [data-infographic-source]:visible')
						.all()) {
						const slug = (await element.getAttribute('data-infographic-source'))
							.split('/')
							.at(-1)
							.replace('.webp', '');
						await capture(page, element, `${slug}-source-${locale}-${width}`);
					}
					await check(area + '-' + topic);
				}
			}

			results.push({ locale, width, errors });
			await page.close();
		}
	// Locale switch must update generated copy even if the route component is reused.
	const page = await browser.newPage({
		viewport: { width: 1440, height: 900 },
		reducedMotion: 'reduce'
	});
	await page.goto(base + '/ru/diagnostics/#data', { waitUntil: 'domcontentloaded' });
	await page.goto(base + '/en/diagnostics/#data', { waitUntil: 'domcontentloaded' });
	results.push({
		localeSwitch: true,
		text: await page.locator('[data-infographic-source]').first().innerText()
	});
	await page.close();
	const noJS = await browser.newPage({ javaScriptEnabled: false, reducedMotion: 'reduce' });
	await noJS.goto(base + '/en/simulator/', { waitUntil: 'domcontentloaded' });
	results.push({
		noJS: true,
		count: await noJS.locator('[data-infographic-source]').count(),
		chartTable: await noJS.locator('table').filter({ hasText: '320' }).count()
	});
	await noJS.close();
	await writeFile(out + '/manifest.json', JSON.stringify(results, null, 2));
	if (
		results.some(
			(r) =>
				r.overflow ||
				r.duplicates?.length ||
				r.raster?.length ||
				r.errors?.length ||
				(r.noJS && r.chartTable === 0)
		)
	)
		throw Error('Infographic capture detected overflow, duplicate IDs, raster or browser error');
	console.log(
		'All variants/locales/widths and source dialogs captured; no raster dashboards, duplicates, overflow or browser errors.'
	);
} finally {
	await browser.close();
}
