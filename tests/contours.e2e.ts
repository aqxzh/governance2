import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const ids = ['simulator', 'diagnostics', 'coordination'] as const;
const counts = [6, 7, 5];

for (const locale of ['ru', 'kk', 'en']) {
	test(`${locale}: three localized tabs show the full register and correct counts`, async ({
		page
	}) => {
		await page.goto(`/${locale}/`);
		await expect(page.getByRole('tab')).toHaveCount(3);
		await page.locator('[role="tab"][data-value="coordination"]').click();
		for (let index = 0; index < ids.length; index++) {
			const id = ids[index];
			const tab = page.locator(`[role="tab"][data-value="${id}"]`);
			await expect(tab).toContainText(String(counts[index]));
			await tab.click();
			await expect(tab).toHaveAttribute('aria-selected', 'true');
			await expect(page.getByRole('tabpanel')).toHaveCount(1);
			await expect(page.getByRole('tabpanel').locator('[data-solution-id]:visible')).toHaveCount(
				counts[index]
			);
			await expect(page).toHaveURL(new RegExp(`/${locale}/#${id}$`));
		}
	});
}

test('direct hash entry, keyboard tabs and language switching keep the selected contour', async ({
	page
}) => {
	await page.goto('/ru/?source=preview#diagnostics');
	const diagnostic = page.locator('[role="tab"][data-value="diagnostics"]');
	await expect(diagnostic).toHaveAttribute('aria-selected', 'true');
	await diagnostic.focus();
	await page.keyboard.press('ArrowRight');
	await expect(page.locator('[role="tab"][data-value="coordination"]')).toHaveAttribute(
		'aria-selected',
		'true'
	);
	await page.locator('header [data-language-trigger]').click();
	await page.getByRole('menuitem', { name: 'English', exact: true }).click();
	await expect(page).toHaveURL(/\/en\/\?source=preview#coordination$/);
	await expect(page.locator('[role="tab"][data-value="coordination"]')).toHaveAttribute(
		'aria-selected',
		'true'
	);
	await page.reload();
	await expect(page.locator('[role="tab"][data-value="coordination"]')).toHaveAttribute(
		'aria-selected',
		'true'
	);
});

for (const id of ids) {
	test(`${id}: every solution opens its own local illustration and restores focus`, async ({
		page
	}) => {
		await page.goto('/ru/');
		await page.locator(`[role="tab"][data-value="${id}"]`).click();
		const rows = page.getByRole('tabpanel').locator('[data-solution-id]:visible');
		for (let index = 0; index < (await rows.count()); index++) {
			const trigger = rows.nth(index).getByRole('button');
			const title = (await trigger.textContent())!.trim();
			await trigger.click();
			const dialog = page.getByRole('dialog', { name: title, exact: true });
			await expect(dialog).toBeVisible();
			const image = dialog.getByRole('img');
			await expect(image).toHaveJSProperty('complete', true);
			expect(
				await image.evaluate((element: HTMLImageElement) => element.naturalWidth)
			).toBeGreaterThan(0);
			await page.keyboard.press('Escape');
			await expect(dialog).not.toBeVisible();
			await expect(trigger).toBeFocused();
		}
	});
}

test('contour videos load only on request, play locally and stop on close', async ({ page }) => {
	const requested: string[] = [];
	page.on('request', (request) => requested.push(request.url()));
	await page.goto('/ru/');
	for (const id of ['diagnostics', 'coordination']) {
		await page.locator(`[role="tab"][data-value="${id}"]`).click();
		expect(requested.some((url) => url.endsWith(`/videos/${id}.mp4`))).toBe(false);
		await page.getByRole('button', { name: 'Смотреть видео', exact: true }).click();
		const dialog = page.getByRole('dialog');
		const video = dialog.locator('video');
		await expect(video).toHaveAttribute('src', `/videos/${id}.mp4`);
		await expect
			.poll(() =>
				video.evaluate((element: HTMLVideoElement) => !element.paused && element.readyState >= 2)
			)
			.toBe(true);
		await page.keyboard.press('Escape');
		await expect(video).toHaveCount(0);
	}
});

test('failed video has a readable illustration fallback', async ({ page }) => {
	await page.route('**/videos/diagnostics.mp4', (route) => route.abort());
	await page.goto('/en/#diagnostics');
	await page.getByRole('button', { name: 'Watch video', exact: true }).click();
	const dialog = page.getByRole('dialog');
	await expect(dialog.getByRole('alert')).toContainText('video is unavailable');
	await expect(dialog.getByRole('img')).toHaveJSProperty('complete', true);
	await expect(dialog).toContainText('remain in Russian');
});

test('contours reflow without overflow and pass automatic AA checks', async ({ page }) => {
	test.setTimeout(90_000);
	for (const locale of ['ru', 'kk', 'en']) {
		await page.goto(`/${locale}/`);
		for (const width of [320, 390, 768, 1440]) {
			await page.setViewportSize({ width, height: 900 });
			for (const id of ids) {
				await page.locator(`[role="tab"][data-value="${id}"]`).click();
				expect(
					await page.evaluate(() => document.documentElement.scrollWidth),
					`${locale}/${id}/${width}`
				).toBeLessThanOrEqual(width);
			}
		}
		for (const id of ids) {
			await page.locator(`[role="tab"][data-value="${id}"]`).click();
			const results = await new AxeBuilder({ page })
				.withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
				.analyze();
			expect(results.violations, `${locale}/${id}`).toEqual([]);
		}
	}
});

test.describe('no JavaScript', () => {
	test.use({ javaScriptEnabled: false });
	test('all three registers are readable in static HTML', async ({ page }) => {
		await page.goto('/en/');
		await expect(page.locator('[data-contour-panel]:visible')).toHaveCount(3);
		await expect(page.locator('[data-solution-id]:visible')).toHaveCount(18);
		await expect(page.getByRole('heading', { name: 'Diagnostics', exact: true })).toBeVisible();
		await expect(page.getByRole('heading', { name: 'Coordination', exact: true })).toBeVisible();
	});
});
