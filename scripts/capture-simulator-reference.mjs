// Optional historical capture: requires a separately authorised archived React server.
import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
const base = process.env.REFERENCE_URL;
if (!base)
	throw new Error(
		'Set REFERENCE_URL explicitly for an separately authorised historical reference server. React is no longer the current application.'
	);
const output = process.env.OUTPUT_DIR ?? 'static/images/simulator';
await mkdir(output, { recursive: true });
await mkdir('.artifacts/reference', { recursive: true });
const browser = await chromium.launch({ args: ['--no-sandbox'] });
try {
	const page = await browser.newPage({
		viewport: { width: 1600, height: 1000 },
		reducedMotion: 'reduce'
	});
	await page.goto(base + '/#simulator', { waitUntil: 'networkidle' });
	await page.waitForTimeout(3500);
	const frames = await page.evaluate(() =>
		Array.from(document.querySelectorAll('div[style]'))
			.filter(
				(e) =>
					e instanceof HTMLElement &&
					e.style.borderRadius === '18px' &&
					e.style.backgroundColor === 'rgb(0, 0, 0)' &&
					e.style.position === 'relative'
			)
			.map((e, i) => {
				e.setAttribute('data-capture-slide', String(i + 1));
				return { index: i + 1, width: e.clientWidth, height: e.clientHeight, text: e.innerText };
			})
	);
	if (frames.length !== 6) throw Error('Reference must contain six presentation canvases');
	for (const frame of frames) {
		const target = page.locator(`[data-capture-slide="${frame.index}"]`);
		await target.evaluate((e) => e.scrollIntoView({ block: 'start' }));
		await page.waitForTimeout(1400);
		const clip = await target.evaluate((e) => {
			const b = e.getBoundingClientRect();
			return { x: b.x + scrollX, y: b.y + scrollY, width: b.width, height: b.height };
		});
		const png = `.artifacts/reference/module-${frame.index}.png`;
		await page.screenshot({ path: png, fullPage: true, clip });
		execFileSync('magick', [
			png,
			'-resize',
			'1170x',
			'-strip',
			'-quality',
			'88',
			`${output}/module-${frame.index}.webp`
		]);
	}
	await writeFile('.artifacts/reference/simulator-text.json', JSON.stringify(frames, null, 2));
} finally {
	await browser.close();
}
