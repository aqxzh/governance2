import { expect, test } from '@playwright/test';

for (const locale of ['ru', 'kk', 'en']) {
	test(`${locale}: strategy labels and coordination network remain readable`, async ({ page }) => {
		await page.goto(`/${locale}/`);
		await page.locator('button[aria-controls="strategy"]').click();
		const strategy = page.locator('#strategy [data-infographic-source]');
		const labels = strategy.locator('figure > div > ul > li');
		await expect(labels).toHaveCount(3);
		for (const label of await labels.all()) {
			expect(await label.evaluate((e) => e.scrollWidth <= e.clientWidth)).toBe(true);
		}
		// Translated layer labels must not shrink or clip inside the SVG.
		await expect(strategy.locator('svg text')).toHaveCount(0);

		await page.goto(`/${locale}/simulator/#scenarios`);
		const network = page.locator('[data-coordination-network]:visible');
		await expect(network).toBeVisible();
		await expect(network.locator(':scope > div')).toHaveCount(8);
		expect(await network.locator('svg:visible path').count()).toBeGreaterThan(1);
	});
}

test('portfolio numeric chart stays inside its own panel after hydration', async ({ page }) => {
	await page.goto('/ru/simulator/#scenarios');
	const chart = page.locator('[data-chart]:visible').first();
	await expect(chart.locator('.lc-layout-svg')).toBeVisible();
	await expect
		.poll(async () =>
			chart.evaluate((container) => {
				const svg = container.querySelector('.lc-layout-svg');
				if (!svg) return false;
				const a = container.getBoundingClientRect();
				const b = svg.getBoundingClientRect();
				return b.top >= a.top - 1 && b.left >= a.left - 1 && b.right <= a.right + 1;
			})
		)
		.toBe(true);
});

test('without JavaScript portfolio retains numeric table without detached chart marks', async ({
	browser
}) => {
	const context = await browser.newContext({ javaScriptEnabled: false });
	try {
		const page = await context.newPage();
		await page.goto('/ru/simulator/');
		const chart = page.locator('[data-chart]').first();
		await expect(chart).toHaveCount(1);
		await expect(chart.locator('.lc-layout-svg')).toHaveCount(0);
		const table = chart.locator('..').locator('..').locator('table');
		await expect(table).toContainText('320');
		await expect(table).toContainText('240');
		await expect(table).toContainText('180');
		expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
			true
		);
	} finally {
		await context.close();
	}
});
