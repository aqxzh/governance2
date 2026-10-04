import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import ru from '../messages/ru.json' with { type: 'json' };
import kk from '../messages/kk.json' with { type: 'json' };
import en from '../messages/en.json' with { type: 'json' };
const catalogs = { ru, kk, en };
const locales = ['ru', 'kk', 'en'] as const;
const sections = ['diagnostics', 'coordination', 'simulator', 'foodflow'] as const;
const titleKeys = {
	diagnostics: 'nav_diagnostics',
	coordination: 'nav_coordination',
	simulator: 'nav_simulator',
	foodflow: 'food_title'
} as const;
for (const locale of locales) {
	test(`${locale}: entire landing follows the source order and diagrams work`, async ({ page }) => {
		await page.goto(`/${locale}/`);
		const ids = await page
			.locator('main > section[id]')
			.evaluateAll((elements) => elements.map((e) => e.id));
		expect(ids).toEqual([
			'contours',
			'team',
			'process',
			'infographics',
			'strategy',
			'assessment',
			'execassist',
			'serviceflow',
			'security'
		]);
		const scheme = page
			.locator('#infographics')
			.getByRole('button', { name: catalogs[locale].philosophy_scheme, exact: true });
		await scheme.click();
		await expect(scheme).toHaveAttribute('aria-expanded', 'true');
		const preview = page
			.locator('#infographics [data-static-collapsible]')
			.getByRole('button')
			.first();
		await preview.click();
		await expect(page.getByRole('dialog')).toContainText(catalogs[locale].scheme_1_description);
		await page.keyboard.press('Escape');
		await expect(preview).toBeFocused();
		await page
			.locator('#process')
			.getByRole('button', { name: catalogs[locale].contour_video_cta, exact: true })
			.click();
		await expect(page.getByRole('dialog').locator('video')).toHaveAttribute(
			'src',
			'/videos/process.mp4'
		);
		await page.keyboard.press('Escape');
	});
	for (const section of sections)
		test(`${locale}/${section}: localized static route, SEO and clean hydration`, async ({
			page
		}) => {
			const errors: string[] = [];
			page.on('pageerror', (e) => errors.push(e.message));
			page.on('console', (m) => {
				if (m.type() === 'error' || /hydration_mismatch|hydration_attribute_changed/.test(m.text()))
					errors.push(m.text());
			});
			const response = await page.goto(`/${locale}/${section}/`);
			expect(response?.status()).toBe(200);
			await expect(page.locator('html')).toHaveAttribute('lang', locale);
			await expect(page.getByRole('heading', { level: 1 })).toHaveText(
				catalogs[locale][titleKeys[section]]
			);
			await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
				'href',
				`https://governance.kz/${locale}/${section}/`
			);
			await expect(page.locator('a[href*="localhost:8443"]')).toHaveCount(0);
			if (section === 'simulator')
				await expect(page.locator('section[id^="module-"]')).toHaveCount(6);
			if (section === 'foodflow') await expect(page.getByRole('tab')).toHaveCount(6);
			await page.waitForTimeout(150);
			expect(errors).toEqual([]);
		});
	test(`${locale}: FoodFlow filters, FEFO, trace, parameters, memory and approvals`, async ({
		page
	}) => {
		const c = catalogs[locale];
		await page.goto(`/${locale}/foodflow/`);
		const panel = page.getByRole('tabpanel');
		await expect(panel.locator('tbody tr')).toHaveCount(8);
		await page.getByLabel(c.food_search, { exact: true }).fill('B-1043');
		await expect(panel.locator('tbody tr')).toHaveCount(1);
		await panel.getByRole('button', { name: 'B-1043', exact: true }).click();
		await expect(panel).toContainText('D-1');
		await page.getByLabel(c.food_search, { exact: true }).fill('');
		await page.getByLabel(c.food_group, { exact: true }).selectOption('Молочка');
		await expect(panel.locator('tbody tr')).toHaveCount(3);
		await page.getByLabel(c.food_group, { exact: true }).selectOption('all');
		await page.getByRole('tab', { name: c.food_tab_trace, exact: true }).click();
		await panel.getByRole('button', { name: 'B-4004', exact: true }).click();
		await expect(panel).toContainText(c.food_product_8);
		await expect(panel).toContainText('B-4004');
		await page.getByRole('tab', { name: c.food_tab_order, exact: true }).click();
		const before = await panel.locator('[data-spoil-total]').textContent();
		const slider = panel.getByRole('slider');
		await slider.focus();
		await slider.press('ArrowRight');
		await expect(panel.locator('[data-spoil-total]')).not.toHaveText(before!);
		await panel
			.getByRole('button', { name: c.food_days.replace('{count}', '3'), exact: true })
			.click();
		await expect(page.locator('[data-food-settings]')).toContainText('3');
		await page.getByRole('tab', { name: c.food_tab_graph, exact: true }).click();
		const memory = panel.getByRole('button', { name: c.food_memory_off, exact: true });
		await memory.click();
		await expect(memory).toHaveAttribute('aria-pressed', 'true');
		await page.getByRole('tab', { name: c.food_tab_agent, exact: true }).click();
		const decision = panel.locator('[data-food-decision="Молочка"]');
		await decision.getByRole('button', { name: c.food_approve, exact: true }).click();
		await expect(
			decision.getByRole('button', { name: c.food_approved, exact: true })
		).toHaveAttribute('aria-pressed', 'true');
		await decision.getByRole('button').click();
		await expect(decision.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
		await page.getByRole('tab', { name: c.food_tab_report, exact: true }).click();
		await expect(panel).toContainText(c.food_journal_1);
		await page.reload();
		await expect(page.getByRole('tab', { name: c.food_tab_report, exact: true })).toHaveAttribute(
			'aria-selected',
			'true'
		);
	});
	test(`${locale}: all FoodFlow states and advisor pass automated AA checks`, async ({ page }) => {
		test.setTimeout(120000);
		await page.goto(`/${locale}/foodflow/`);
		for (const tab of await page.getByRole('tab').all()) {
			await tab.click();
			const result = await new AxeBuilder({ page })
				.withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
				.analyze();
			expect(result.violations).toEqual([]);
		}
		await page.goto(`/${locale}/simulator/#advisor`);
		const result = await new AxeBuilder({ page })
			.include('#advisor')
			.withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
			.analyze();
		expect(result.violations).toEqual([]);
	});
}
test('old entry points redirect locally, preserving locale and unrelated query', async ({
	page
}) => {
	for (const [input, output] of [
		['/ru/?source=old#diagnostics', '/ru/diagnostics/?source=old'],
		['/en/#analytics', '/en/coordination/'],
		['/kk/#simulator', '/kk/simulator/'],
		['/?food=1&source=old', '/ru/foodflow/?source=old']
	]) {
		await page.goto(input);
		await expect(page).toHaveURL(new RegExp(output.replace(/[?]/g, '\\?') + '$'));
	}
});
test('nested language switch preserves path, query and FoodFlow tab', async ({ page }) => {
	await page.goto('/ru/foodflow/?source=case#agent');
	await page.locator('header [data-language-trigger]').click();
	await page.getByRole('menuitem', { name: 'English', exact: true }).click();
	await expect(page).toHaveURL(/\/en\/foodflow\/\?source=case#agent$/);
	await expect(page.getByRole('tab', { name: en.food_tab_agent, exact: true })).toHaveAttribute(
		'aria-selected',
		'true'
	);
});
test('advisor preserves menu, chat mode, demo messages and keyboard map access', async ({
	page
}) => {
	const posts: string[] = [];
	page.on('request', (r) => {
		if (r.method() === 'POST') posts.push(r.url());
	});
	await page.goto('/ru/simulator/#advisor');
	const advisor = page.locator('#advisor');
	const menu = advisor.getByRole('button', { name: ru.advisor_menu_doc_overdue, exact: true });
	await menu.click();
	await expect(menu).toHaveAttribute('aria-pressed', 'true');
	await advisor.getByLabel(ru.advisor_mode, { exact: true }).selectOption('deep');
	await advisor.getByLabel(ru.advisor_query, { exact: true }).fill('<script>alert(1)</script>');
	await advisor.getByRole('button', { name: ru.advisor_send, exact: true }).click();
	await expect(advisor.getByRole('log')).toContainText(ru.advisor_reply);
	await expect(advisor.getByRole('log')).toContainText('<script>alert(1)</script>');
	await expect(advisor.locator('script')).toHaveCount(0);
	const region = advisor.getByRole('button', { name: ru.region_karaganda + ': 167', exact: true });
	await region.focus();
	await region.press('Enter');
	await expect(advisor).toContainText('Қарағанды');
	await advisor.getByLabel(ru.advisor_region, { exact: true }).selectOption('almaty');
	await expect(advisor).toContainText('212');
	expect(posts).toEqual([]);
});
test('all four source simulator movies use local MP4 and close cleanly', async ({ page }) => {
	await page.goto('/ru/simulator/');
	for (const [number, file] of [
		[1, 'map1'],
		[2, 'almaty'],
		[5, 'advisor'],
		[6, 'map2']
	] as const) {
		await page
			.locator('#module-' + number)
			.getByRole('button', { name: ru.contour_video_cta, exact: true })
			.click();
		const video = page.getByRole('dialog').locator('video');
		await expect(video).toHaveAttribute('src', `/videos/${file}.mp4`);
		await expect
			.poll(() => video.evaluate((v: HTMLVideoElement) => v.readyState >= 2 && !v.paused))
			.toBe(true);
		await page.keyboard.press('Escape');
		await expect(page.getByRole('dialog')).toHaveCount(0);
	}
	await expect(page.locator('#module-2 a[href="/ru/foodflow/"]')).toBeVisible();
});
for (const status of ['success', 'error', 'false-success', 'timeout'] as const)
	test(`application ${status}: real integration, mocked delivery only`, async ({ page }) => {
		const posts: unknown[] = [];
		await page.route('https://formsubmit.co/ajax/**', async (route) => {
			posts.push(route.request().postDataJSON());
			if (status === 'timeout') {
				await new Promise((r) => setTimeout(r, 16000));
				await route.abort().catch(() => {});
				return;
			}
			await route.fulfill({
				status: status === 'error' ? 500 : 200,
				contentType: 'application/json',
				body: JSON.stringify({ success: status === 'success' ? 'true' : 'false' })
			});
		});
		await page.goto('/ru/');
		await page.getByRole('button', { name: ru.meeting_cta, exact: true }).first().click();
		const dialog = page.getByRole('dialog');
		await dialog.getByLabel(ru.form_name, { exact: true }).fill('Тест');
		await dialog.getByLabel(ru.form_phone, { exact: true }).fill('+7 777 123 45 67');
		await dialog.getByLabel(ru.form_question, { exact: true }).fill('Тест, не реальная заявка');
		await expect(dialog.getByRole('button', { name: ru.form_send, exact: true })).toBeDisabled();
		await dialog.getByRole('checkbox').check();
		await dialog.getByRole('button', { name: ru.form_send, exact: true }).click();
		if (status === 'success') {
			await expect(dialog).toContainText(ru.form_received);
			expect(posts).toHaveLength(1);
			expect(posts[0]).toMatchObject({
				Имя: 'Тест',
				Телефон: '+7 777 123 45 67',
				'Вопрос / тема встречи': 'Тест, не реальная заявка'
			});
		} else {
			await expect(dialog.getByRole('alert')).toContainText(
				status === 'timeout' ? ru.form_timeout : ru.form_error,
				{ timeout: 20000 }
			);
			await expect(dialog).not.toContainText(ru.form_received);
		}
	});
test('full routes and tabs have no page overflow at 320–1440px', async ({ page }) => {
	test.setTimeout(120000);
	for (const width of [320, 390, 768, 1440]) {
		await page.setViewportSize({ width, height: 900 });
		for (const locale of locales)
			for (const section of sections) {
				await page.goto(`/${locale}/${section}/`);
				if (section === 'foodflow')
					for (const tab of await page.getByRole('tab').all()) {
						await tab.click();
						expect(
							await page.evaluate(() => document.documentElement.scrollWidth),
							`${locale}/${section}/${width}`
						).toBeLessThanOrEqual(width);
					}
				else
					expect(
						await page.evaluate(() => document.documentElement.scrollWidth),
						`${locale}/${section}/${width}`
					).toBeLessThanOrEqual(width);
			}
	}
});
test('legacy worker retires only Governance caches and does not reload forms', async ({ page }) => {
	await page.goto('/ru/');
	await page.evaluate(async () => {
		await (await caches.open('governance-kz-v3')).put('/old', new Response('old'));
		await (await caches.open('unrelated-application')).put('/keep', new Response('keep'));
		await navigator.serviceWorker.register('/sw.js');
	});
	await expect
		.poll(() => page.evaluate(async () => (await caches.keys()).includes('governance-kz-v3')))
		.toBe(false);
	expect(
		await page.evaluate(async () => (await caches.keys()).includes('unrelated-application'))
	).toBe(true);
	await expect
		.poll(() =>
			page.evaluate(async () => (await navigator.serviceWorker.getRegistrations()).length)
		)
		.toBe(0);
	await expect(page).toHaveURL(/\/ru\/$/);
});
test.describe('complete static content without JavaScript', () => {
	test.use({ javaScriptEnabled: false });
	for (const locale of locales)
		test(`${locale}: sections, simulator text and FoodFlow data are in HTML`, async ({ page }) => {
			await page.goto(`/${locale}/`);
			await expect(page.locator('#security')).toBeVisible();
			await expect(page.locator('#infographics [data-static-collapsible]')).toBeVisible();
			await page.goto(`/${locale}/simulator/`);
			await expect(page.locator('section[id^="module-"]')).toHaveCount(6);
			await expect(page.locator('#module-6 [data-static-collapsible]')).toBeVisible();
			await page.goto(`/${locale}/foodflow/`);
			await expect(page.locator('[data-food-panel]:visible')).toHaveCount(6);
			await expect(page.locator('[data-food-decision]')).toHaveCount(4);
			await expect(page.locator('main')).toContainText(catalogs[locale].food_journal_6);
		});
});
