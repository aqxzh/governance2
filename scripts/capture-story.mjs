import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
const base = process.env.PREVIEW_URL ?? 'http://127.0.0.1:5174';
const out = '.artifacts/preview/story';
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ args: ['--no-sandbox'] });
const records = [];
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
				if (m.type() === 'error' || /hydration_mismatch/.test(m.text())) errors.push(m.text());
			});
			const load = async (path) => {
				await page.goto(base + path, { waitUntil: 'networkidle' });
				await page.evaluate(() => document.fonts.ready);
				await page.addStyleTag({ content: 'a[href="#main"].fixed{visibility:hidden!important}' });
			};
			await load('/' + locale + '/');
			await page.screenshot({ path: `${out}/home-${locale}-${width}.png`, fullPage: true });
			records.push({
				locale,
				width,
				area: 'home',
				overflow: await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)
			});
			for (const area of ['diagnostics', 'simulator', 'coordination', 'foodflow']) {
				await load('/' + locale + '/' + area + '/');
				await page.screenshot({ path: `${out}/${area}-${locale}-${width}.png` });
				for (const tab of await page.getByRole('tab').all()) {
					await tab.click();
					const value = await tab.getAttribute('data-value');
					const panel = page.getByRole('tabpanel');
					await panel.evaluate((e) => e.scrollIntoView({ block: 'start' }));
					await page.waitForTimeout(120);
					const clip = await panel.evaluate((e) => {
						const b = e.getBoundingClientRect();
						return { x: b.x + scrollX, y: b.y + scrollY, width: b.width, height: b.height };
					});
					await page.screenshot({
						path: `${out}/${area}-${value}-${locale}-${width}.png`,
						fullPage: true,
						clip
					});
					records.push({
						locale,
						width,
						area,
						tab: value,
						overflow: await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)
					});
				}
			}
			records.push({ locale, width, errors });
			await page.close();
		}
	await writeFile(out + '/manifest.json', JSON.stringify(records, null, 2));
	if (records.some((r) => r.overflow || r.errors?.length))
		throw Error('Capture detected errors/overflow');
	console.log('Story captures: no browser errors or page overflow.');
} finally {
	await browser.close();
}
