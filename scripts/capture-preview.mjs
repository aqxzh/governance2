import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.PREVIEW_URL ?? 'http://127.0.0.1:5174';
const directory = '.artifacts/preview';
await mkdir(directory, { recursive: true });
const browser = await chromium.launch({ args: ['--no-sandbox'] });
const results = [];
try {
	for (const width of [390, 768, 1440]) {
		for (const locale of ['ru', 'kk', 'en']) {
			const page = await browser.newPage({
				viewport: { width, height: 900 },
				reducedMotion: 'reduce'
			});
			const errors = [];
			page.on('pageerror', (error) => errors.push(error.message));
			page.on('console', (message) => {
				if (
					message.type() === 'error' ||
					/hydration_mismatch|hydration_attribute_changed/.test(message.text())
				)
					errors.push(message.text());
			});
			await page.goto(`${base}/${locale}/`, { waitUntil: 'networkidle' });
			await page.evaluate(() => document.fonts.ready);
			await page.screenshot({ path: `${directory}/${locale}-${width}.png`, fullPage: true });
			if (locale === 'ru') await page.screenshot({ path: `${directory}/hero-${width}.png` });
			if (locale === 'ru' && width !== 768) {
				if (width === 390) await page.locator('header button[aria-haspopup="dialog"]').click();
				else await page.getByRole('button', { name: 'Записаться на встречу', exact: true }).click();
				await page.getByRole('dialog').waitFor();
				await page.screenshot({
					path: `${directory}/${width === 390 ? 'sheet' : 'dialog'}-${width}.png`
				});
				await page.keyboard.press('Escape');
				await page.getByRole('dialog').waitFor({ state: 'hidden' });
			}
			results.push({
				locale,
				width,
				errors,
				...(await page.evaluate(() => ({
					heading: document.querySelector('h1')?.textContent,
					scrollWidth: document.documentElement.scrollWidth,
					height: document.body.scrollHeight
				})))
			});
			await page.close();
		}
	}
	await writeFile(`${directory}/manifest.json`, JSON.stringify(results, null, 2));
	console.log(`Saved ${results.length} locale/viewport captures in ${directory}`);
} finally {
	await browser.close();
}
