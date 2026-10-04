import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const headings = {
	ru: 'Видеть систему целиком. Проверять решения до внедрения.',
	kk: 'Жүйені тұтас көру. Шешімдерді енгізуге дейін тексеру.',
	en: 'See the whole system. Test decisions before implementation.'
};

for (const locale of ['ru', 'kk', 'en'] as const) {
	test(`${locale}: translated content, SEO, local fonts and no browser errors`, async ({
		page
	}) => {
		const errors: string[] = [];
		page.on('pageerror', (error) => errors.push(error.message));
		page.on('console', (msg) => {
			if (
				msg.type() === 'error' ||
				/hydration_mismatch|hydration_attribute_changed/.test(msg.text())
			)
				errors.push(msg.text());
		});
		const response = await page.goto(`/${locale}/`);
		expect(response?.status()).toBe(200);
		await expect(page.locator('html')).toHaveAttribute('lang', locale);
		await expect(page.getByRole('heading', { level: 1 })).toHaveText(headings[locale]);
		await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
			'href',
			`https://governance.kz/${locale}/`
		);
		await page.locator('header [data-language-trigger]').click();
		await expect(
			page.getByRole('menuitem', {
				name: locale === 'ru' ? 'Русский' : locale === 'kk' ? 'Қазақша' : 'English',
				exact: true
			})
		).toHaveAttribute('aria-current', 'page');
		await page.keyboard.press('Escape');
		await page.evaluate(async () => {
			await document.fonts.load('400 16px "IBM Plex Sans Variable"', 'ӘҒҚҢӨҰҮҺІ');
			await document.fonts.ready;
		});
		expect(
			await page.evaluate(() =>
				document.fonts.check('400 16px "IBM Plex Sans Variable"', 'ӘҒҚҢӨҰҮҺІ')
			)
		).toBe(true);
		const hero = page.locator('img[fetchpriority="high"]');
		expect(
			await hero.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)
		).toBe(true);
		await expect(page.locator('video')).toHaveCount(1);
		await page.waitForTimeout(200);
		expect(errors).toEqual([]);
	});
}

test.describe('static HTML without JavaScript', () => {
	test.use({ javaScriptEnabled: false });
	for (const locale of ['ru', 'kk', 'en'] as const) {
		test(`${locale}: content and links work before hydration`, async ({ page }) => {
			await page.goto(`/${locale}/`);
			await expect(page.getByRole('heading', { level: 1 })).toHaveText(headings[locale]);
			await expect(page.locator('header a[aria-label]').first()).toHaveAttribute(
				'href',
				`/${locale}/`
			);
			await page.locator('header').getByRole('link', { name: 'English', exact: true }).click();
			await expect(page).toHaveURL(/\/en\/$/);
			await expect(page.getByRole('heading', { level: 1 })).toHaveText(headings.en);
		});
	}
});

test('shared palette and primitive radii stay consistent', async ({ page }) => {
	await page.goto('/ru/');
	const meeting = page.getByRole('button', { name: 'Записаться на встречу', exact: true }).first();
	const colors = await meeting.evaluate((button) => {
		const root = getComputedStyle(document.documentElement);
		const canvas = document.createElement('canvas');
		canvas.width = canvas.height = 1;
		const context = canvas.getContext('2d')!;
		const rgb = (color: string) => {
			context.clearRect(0, 0, 1, 1);
			context.fillStyle = color;
			context.fillRect(0, 0, 1, 1);
			return Array.from(context.getImageData(0, 0, 1, 1).data).slice(0, 3);
		};
		return {
			primary: rgb(root.getPropertyValue('--primary')),
			blue: rgb(root.getPropertyValue('--color-blue-700')),
			button: rgb(getComputedStyle(button).backgroundColor),
			meta: rgb(document.querySelector('meta[name="theme-color"]')!.getAttribute('content')!),
			border: root.getPropertyValue('--border').trim(),
			input: root.getPropertyValue('--input').trim(),
			radius: getComputedStyle(button).borderRadius
		};
	});
	expect(colors.primary).toEqual(colors.blue);
	expect(colors.button).not.toEqual(colors.primary); // Outline secondary CTA.
	colors.meta.forEach((value, index) =>
		expect(Math.abs(value - colors.primary[index])).toBeLessThanOrEqual(1)
	);
	expect(colors.input).toEqual(colors.border);
	expect(colors.radius).toBe('6px');
	const cardRadius = await page
		.locator('[data-slot="card"]')
		.first()
		.evaluate((card) => getComputedStyle(card).borderRadius);
	await meeting.click();
	const dialogRadius = await page
		.getByRole('dialog')
		.evaluate((dialog) => getComputedStyle(dialog).borderRadius);
	expect(cardRadius).toBe('12px');
	expect(dialogRadius).toBe(cardRadius);
});

test('languages preserve the anchor and survive refresh and browser history', async ({ page }) => {
	await page.goto('/ru/');
	await page.locator('header [data-language-trigger]').click();
	await page.getByRole('menuitem', { name: 'Қазақша', exact: true }).click();
	await expect(page).toHaveURL(/\/kk\/$/);
	await expect(page.getByRole('heading', { level: 1 })).toHaveText(headings.kk);
	await page.reload();
	await expect(page.getByRole('heading', { level: 1 })).toHaveText(headings.kk);
	await page.goBack();
	await expect(page.getByRole('heading', { level: 1 })).toHaveText(headings.ru);
	await page.goto('/ru/?source=preview#contours-diagnostics');
	await page.locator('header [data-language-trigger]').click();
	await page.getByRole('menuitem', { name: 'English', exact: true }).click();
	await expect(page).toHaveURL(/\/en\/\?source=preview#contours-diagnostics$/);
	await expect(page.getByRole('heading', { level: 1 })).toHaveText(headings.en);
});

test('globe menu supports keyboard, focus return and accessible language links', async ({
	page
}) => {
	await page.goto('/ru/');
	const trigger = page.getByRole('button', { name: 'Язык сайта', exact: true });
	await expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
	await trigger.focus();
	await trigger.press('Enter');
	const menu = page.getByRole('menu');
	await expect(menu).toBeVisible();
	await expect(menu.getByRole('menuitem')).toHaveCount(3);
	await page.keyboard.press('End');
	await expect(menu.getByRole('menuitem', { name: 'English', exact: true })).toBeFocused();
	const violations = await new AxeBuilder({ page })
		.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
		.analyze();
	expect(violations.violations).toEqual([]);
	await page.keyboard.press('Escape');
	await expect(menu).not.toBeVisible();
	await expect(trigger).toBeFocused();
});

test('meeting Dialog closes on Escape and restores focus without sending data', async ({
	page
}) => {
	const posts: string[] = [];
	page.on('request', (request) => {
		if (request.method() === 'POST') posts.push(request.url());
	});
	await page.goto('/ru/');
	const trigger = page.getByRole('button', { name: 'Записаться на встречу' }).first();
	await trigger.click();
	const dialog = page.getByRole('dialog', { name: 'Записаться на встречу' });
	await expect(dialog).toBeVisible();
	await expect(dialog.getByRole('link', { name: 'akbota.akylbek07@gmail.com' })).toHaveAttribute(
		'href',
		'mailto:akbota.akylbek07@gmail.com'
	);
	await expect(dialog).toContainText('FormSubmit');
	await expect(
		dialog.getByRole('button', { name: 'Отправить заявку', exact: true })
	).toBeDisabled();
	await page.keyboard.press('Escape');
	await expect(dialog).not.toBeVisible();
	await expect(trigger).toBeFocused();
	expect(posts).toEqual([]);
});

test('the missing PDF is communicated honestly', async ({ page }) => {
	await page.goto('/en/');
	await page.getByRole('button', { name: 'Analytical brief', exact: true }).click();
	const dialog = page.getByRole('dialog', { name: 'Analytical brief' });
	await expect(dialog).toContainText('has not been provided');
	await expect(dialog.locator('[download]')).toHaveCount(0);
	await dialog.getByRole('button', { name: 'Close', exact: true }).click();
	await expect(dialog).not.toBeVisible();
});

test('background video autoplays muted and can be stopped and restarted', async ({ page }) => {
	await page.emulateMedia({ reducedMotion: 'no-preference' });
	await page.goto('/en/');
	const video = page.locator('video');
	await expect(video).toHaveCount(1);
	await expect
		.poll(() =>
			video.evaluate(
				(element: HTMLVideoElement) => element.muted && !element.paused && element.readyState >= 2
			)
		)
		.toBe(true);
	await page.getByRole('button', { name: 'Pause background video' }).click();
	await expect(video).toHaveCount(0);
	await page.getByRole('button', { name: 'Play background video' }).click();
	await expect(video).toHaveCount(1);
	await expect
		.poll(() => video.evaluate((element: HTMLVideoElement) => element.muted && !element.paused))
		.toBe(true);
});

test('background video remains opt-in with reduced motion enabled', async ({ page }) => {
	await page.emulateMedia({ reducedMotion: 'reduce' });
	await page.goto('/en/');
	await expect(page.locator('video')).toHaveCount(0);
	await page.getByRole('button', { name: 'Play background video' }).click();
	await expect(page.locator('video')).toHaveCount(1);
	await expect(page.getByRole('button', { name: 'Pause background video' })).toHaveAttribute(
		'aria-pressed',
		'true'
	);
	await page.getByRole('button', { name: 'Pause background video' }).click();
	await expect(page.locator('video')).toHaveCount(0);
});

test('mobile Sheet has translated labels, keyboard close and working anchors', async ({
	page,
	isMobile
}) => {
	test.skip(!isMobile, 'Sheet is only visible on narrow screens');
	await page.goto('/kk/');
	const trigger = page.getByRole('button', { name: 'Мәзірді ашу' });
	await trigger.click();
	const sheet = page.getByRole('dialog', { name: 'Навигация' });
	await expect(sheet).toBeVisible();
	await expect(sheet.getByRole('button', { name: 'Жабу', exact: true })).toBeVisible();
	await page.keyboard.press('Escape');
	await expect(sheet).not.toBeVisible();
	await expect(trigger).toBeFocused();
	await trigger.click();
	await sheet.getByRole('link', { name: /Диагностика/ }).click();
	await expect(sheet).not.toBeVisible();
	await expect(page).toHaveURL(/\/kk\/diagnostics\/$/);
});

test('no horizontal overflow across supported widths and languages', async ({ page }) => {
	for (const width of [320, 390, 768, 1440]) {
		await page.setViewportSize({ width, height: 900 });
		for (const locale of ['ru', 'kk', 'en']) {
			await page.goto(`/${locale}/`);
			await page.evaluate(() => document.fonts.ready);
			expect(
				await page.evaluate(() => document.documentElement.scrollWidth),
				`${locale}, ${width}px`
			).toBeLessThanOrEqual(width);
		}
	}
});

test('root entry works and unknown routes return a real 404', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { level: 1 })).toHaveText(headings.ru);
	const response = await page.goto('/ru/not-a-page/');
	expect(response?.status()).toBe(404);
});

test('automated WCAG AA checks pass on the home page and open meeting Dialog', async ({ page }) => {
	await page.goto('/ru/');
	await page.evaluate(() => document.fonts.ready);
	expect(
		(await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze())
			.violations
	).toEqual([]);
	await page.getByRole('button', { name: 'Записаться на встречу' }).first().click();
	expect(
		(await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze())
			.violations
	).toEqual([]);
});

test('finished local site retains draft disclosures but no React dependencies', async ({
	page
}) => {
	await page.goto('/en/');
	await expect(page.locator('footer')).toContainText(/draft/i);
	await expect(page.locator('a[href*="localhost:8443"]')).toHaveCount(0);
	await expect(page.locator('#security')).toBeVisible();
	await expect(page.locator('footer a[href="/en/foodflow/"]')).toHaveCount(0);
	await expect(page.locator('#contours-simulator a')).toHaveAttribute('href', '/en/simulator/');
});
