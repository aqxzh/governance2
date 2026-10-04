import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import ru from '../messages/ru.json' with { type: 'json' };
const areas = ['diagnostics', 'simulator', 'coordination'] as const;
const groups = {
	diagnostics: ['functions', 'people', 'data'],
	simulator: ['research', 'scenarios', 'supply'],
	coordination: ['advisor', 'bots']
};
for (const locale of ['ru', 'kk', 'en']) {
	test(`${locale}: home has three visible task cards, not a duplicate register`, async ({
		page
	}) => {
		await page.goto(`/${locale}/`);
		await expect(page.getByRole('tab')).toHaveCount(0);
		await expect(page.locator('#contours [data-slot="card"]')).toHaveCount(3);
		await expect(page.locator('[data-solution-id]')).toHaveCount(0);
		for (const area of areas)
			await expect(page.locator(`#contours-${area} a`)).toHaveAttribute(
				'href',
				`/${locale}/${area}/`
			);
	});
	for (const area of areas)
		test(`${locale}/${area}: task tabs preserve hash, refresh and clean AA`, async ({ page }) => {
			await page.goto(`/${locale}/${area}/#${groups[area][0]}`);
			await expect(page.getByRole('tab')).toHaveCount(groups[area].length);
			for (const id of groups[area]) {
				const tab = page.locator(`[role="tab"][data-value="${id}"]`);
				await tab.click();
				await expect(tab).toHaveAttribute('aria-selected', 'true');
				await expect(page.getByRole('tabpanel')).toHaveCount(1);
				await expect(page).toHaveURL(new RegExp(`#${id}$`));
				const result = await new AxeBuilder({ page })
					.withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
					.analyze();
				expect(result.violations).toEqual([]);
			}
			await page.reload();
			await expect(
				page.locator(`[role="tab"][data-value="${groups[area].at(-1)}"]`)
			).toHaveAttribute('aria-selected', 'true');
		});
}
test('keyboard and language preserve the task, query and history', async ({ page }) => {
	await page.goto('/ru/simulator/?source=story#research');
	const tab = page.locator('[role="tab"][data-value="research"]');
	await tab.focus();
	await tab.press('ArrowRight');
	await expect(page.locator('[role="tab"][data-value="scenarios"]')).toHaveAttribute(
		'aria-selected',
		'true'
	);
	await page.locator('header [data-language-trigger]').click();
	await page.getByRole('menuitem', { name: 'English', exact: true }).click();
	await expect(page).toHaveURL(/\/en\/simulator\/\?source=story#scenarios$/);
	await expect(page.locator('[role="tab"][data-value="scenarios"]')).toHaveAttribute(
		'aria-selected',
		'true'
	);
});
for (const area of areas)
	test(`${area}: every preserved source illustration opens and restores focus`, async ({
		page
	}) => {
		await page.goto(`/ru/${area}/`);
		for (const id of groups[area]) {
			await page.locator(`[role="tab"][data-value="${id}"]`).click();
			const panel = page.getByRole('tabpanel');
			await panel.getByRole('button', { name: ru.story_materials, exact: true }).click();
			const rows = panel.locator('[data-solution-id]:visible');
			for (const row of await rows.all()) {
				const trigger = row.getByRole('button');
				await trigger.click();
				const dialog = page.getByRole('dialog');
				const infographic = dialog.locator('[data-infographic-source]');
				await expect(infographic).toBeVisible();
				await expect(
					infographic.locator('img[src*="/images/contours/"], img[src*="/images/simulator/"]')
				).toHaveCount(0);
				expect((await infographic.innerText()).trim().length).toBeGreaterThan(30);
				const accessibility = await new AxeBuilder({ page })
					.include('[role="dialog"]')
					.withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
					.analyze();
				expect(accessibility.violations).toEqual([]);
				expect(
					await dialog.evaluate((e) => {
						e.scrollTop = e.scrollHeight;
						return e.scrollHeight <= e.clientHeight || e.scrollTop > 0;
					})
				).toBe(true);
				await page.keyboard.press('Escape');
				await expect(trigger).toBeFocused();
			}
		}
	});
test('source videos are lazy, local, and removed on close', async ({ page }) => {
	for (const [area, group] of [
		['diagnostics', 'functions'],
		['coordination', 'bots']
	]) {
		const requests: string[] = [];
		page.on('request', (r) => requests.push(r.url()));
		await page.goto(`/ru/${area}/#${group}`);
		expect(requests.some((u) => u.endsWith(`/videos/${area}.mp4`))).toBe(false);
		const panel = page.getByRole('tabpanel');
		await panel.getByRole('button', { name: ru.story_materials, exact: true }).click();
		await panel.getByRole('button', { name: ru.contour_video_cta, exact: true }).click();
		const video = page.getByRole('dialog').locator('video');
		await expect(video).toHaveAttribute('src', `/videos/${area}.mp4`);
		await expect
			.poll(() => video.evaluate((v: HTMLVideoElement) => v.readyState >= 2 && !v.paused))
			.toBe(true);
		await page.keyboard.press('Escape');
		await expect(video).toHaveCount(0);
	}
});
test('legacy module bookmarks reveal their source and survive refresh', async ({ page }) => {
	for (const index of [1, 2, 3, 4, 6]) {
		await page.goto(`/ru/simulator/#module-${index}`);
		await expect(page.locator(`#module-${index}`)).toBeVisible();
		await page.reload();
		await expect(page.locator(`#module-${index}`)).toBeVisible();
	}
});

test('navigation remounts a new task area rather than leaving an empty panel', async ({ page }) => {
	await page.setViewportSize({ width: 1440, height: 900 });
	await page.goto('/ru/diagnostics/#people');
	await page.locator('header nav a[href="/ru/simulator/"]').click();
	await expect(page.getByRole('tabpanel')).toContainText(ru.story_research);
	await page.locator('header nav a[href="/ru/coordination/"]').click();
	await expect(page.locator('#advisor')).toBeVisible();
});
test.describe('static without JavaScript', () => {
	test.use({ javaScriptEnabled: false });
	test('all reorganised groups and source materials remain readable', async ({ page }) => {
		let count = 0;
		for (const area of areas) {
			await page.goto(`/en/${area}/`);
			await expect(page.locator('[data-story-panel]:visible')).toHaveCount(groups[area].length);
			count += (await page.locator('[data-solution-id]:visible').count()) / 1;
		}
		expect(count).toBe(18);
	});
});
