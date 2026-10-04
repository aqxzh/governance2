import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
const base = process.env.PREVIEW_URL ?? 'http://127.0.0.1:5174';
const directory = '.artifacts/preview/fullsite';
await mkdir(directory, { recursive: true });
const browser = await chromium.launch({ args: ['--no-sandbox'] });
const results = [];
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
			await page.goto(`${base}/${locale}/`, { waitUntil: 'networkidle' });
			await page.evaluate(() => document.fonts.ready);
			// CDP full-page clips can paint an offscreen fixed skip-link inside the image. Capture-only mask.
			await page.addStyleTag({
				content: 'a[href="#main"].fixed { visibility:hidden !important; }'
			});
			await page.screenshot({ path: `${directory}/home-${locale}-${width}.png` });
			for (const id of [
				'process',
				'infographics',
				'strategy',
				'assessment',
				'execassist',
				'serviceflow',
				'security'
			]) {
				const target = page.locator('#' + id);
				await target.evaluate((e) => e.scrollIntoView({ block: 'start' }));
				await page.waitForTimeout(150);
				const clip = await target.evaluate((e) => {
					const b = e.getBoundingClientRect();
					return { x: b.x + scrollX, y: b.y + scrollY, width: b.width, height: b.height };
				});
				await page.screenshot({
					path: `${directory}/${id}-${locale}-${width}.png`,
					fullPage: true,
					clip
				});
			}
			await page
				.getByRole('button', {
					name:
						locale === 'ru'
							? 'Записаться на встречу'
							: locale === 'kk'
								? 'Кездесуге жазылу'
								: 'Request a meeting',
					exact: true
				})
				.first()
				.click();
			await page.getByRole('dialog').waitFor();
			await page.screenshot({ path: `${directory}/form-${locale}-${width}.png` });
			await page.keyboard.press('Escape');
			for (const section of ['diagnostics', 'coordination', 'simulator', 'foodflow']) {
				await page.goto(`${base}/${locale}/${section}/`, { waitUntil: 'networkidle' });
				await page.addStyleTag({
					content: 'a[href="#main"].fixed { visibility:hidden !important; }'
				});
				if (section === 'foodflow')
					for (const tab of await page.getByRole('tab').all()) {
						await tab.click();
						const value = await tab.getAttribute('data-value');
						const panel = page.getByRole('tabpanel');
						await panel.evaluate((e) => e.scrollIntoView({ block: 'start' }));
						const clip = await panel.evaluate((e) => {
							const b = e.getBoundingClientRect();
							return { x: b.x + scrollX, y: b.y + scrollY, width: b.width, height: b.height };
						});
						await page.screenshot({
							path: `${directory}/food-${value}-${locale}-${width}.png`,
							fullPage: true,
							clip
						});
						results.push({
							locale,
							width,
							section,
							value,
							overflow: await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)
						});
					}
				else await page.screenshot({ path: `${directory}/${section}-${locale}-${width}.png` });
				if (section === 'simulator') {
					await page.locator('#advisor').evaluate((e) => e.scrollIntoView({ block: 'start' }));
					await page.screenshot({ path: `${directory}/advisor-${locale}-${width}.png` });
				}
				results.push({
					locale,
					width,
					section,
					overflow: await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)
				});
			}
			results.push({ locale, width, errors });
			await page.close();
		}
	await writeFile(`${directory}/manifest.json`, JSON.stringify(results, null, 2));
	if (results.some((r) => r.overflow || r.errors?.length))
		throw Error('Capture found overflow or browser errors');
	console.log('Full-site screenshots saved; no browser errors or overflow.');
} finally {
	await browser.close();
}
