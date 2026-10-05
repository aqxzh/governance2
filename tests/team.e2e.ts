import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const copy = {
	ru: {
		title: 'Те, кто превращают сложное в рабочее.',
		phases: ['Диагностика', 'Проектирование', 'Люди', 'Инженерия'],
		owner: 'Руководитель внедрения'
	},
	kk: {
		title: 'Күрделіні жұмыс істейтін жүйеге айналдыратын мамандар.',
		phases: ['Диагностика', 'Жобалау', 'Адамдар', 'Инженерия'],
		owner: 'Енгізу жетекшісі'
	},
	en: {
		title: 'The people who turn complexity into working systems.',
		phases: ['Diagnosis', 'Design', 'People', 'Engineering'],
		owner: 'Implementation lead'
	}
};

for (const locale of ['ru', 'kk', 'en'] as const) {
	test(`${locale}: team follows contours and contains four stages, owner and principles`, async ({
		page
	}) => {
		const errors: string[] = [];
		page.on('pageerror', (error) => errors.push(error.message));
		await page.goto(`/${locale}/#team`);
		const team = page.getByRole('region', { name: copy[locale].title, exact: true });
		await expect(team).toBeVisible();
		await expect(team.locator('[data-team-stage]')).toHaveCount(4);
		for (let index = 0; index < 4; index++) {
			await expect(team.locator('[data-team-stage]').nth(index)).toHaveAttribute(
				'data-team-stage',
				`0${index + 1}`
			);
			await expect(
				team.getByRole('heading', { name: copy[locale].phases[index], exact: true })
			).toBeVisible();
		}
		await expect(
			team.getByRole('heading', { name: copy[locale].owner, exact: true })
		).toBeVisible();
		await expect(team.locator('[data-team-owner]')).toHaveCount(1);
		await expect(team.locator('[data-team-principle]')).toHaveCount(3);
		await expect(team.locator('button, a')).toHaveCount(0);
		expect(
			await page.evaluate(
				() =>
					document
						.querySelector('#contours')!
						.compareDocumentPosition(document.querySelector('#team')!) &
					Node.DOCUMENT_POSITION_FOLLOWING
			)
		).toBeTruthy();
		await page.evaluate(() => document.fonts.ready);
		const violations = await new AxeBuilder({ page })
			.include('#team')
			.withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
			.analyze();
		expect(violations.violations).toEqual([]);
		expect(errors).toEqual([]);
	});
}

test('team reflows at every supported width with no clipped text or hidden animation', async ({
	page
}) => {
	test.setTimeout(60_000);
	await page.emulateMedia({ reducedMotion: 'reduce' });
	for (const locale of ['ru', 'kk', 'en']) {
		await page.goto(`/${locale}/#team`);
		await page.evaluate(() => document.fonts.ready);
		for (const width of [320, 390, 768, 1024, 1440]) {
			await page.setViewportSize({ width, height: 900 });
			const dimensions = await page.locator('#team').evaluate((section) => {
				const cards = Array.from(
					section.querySelectorAll('[data-team-stage], [data-team-owner], [data-team-principle]')
				);
				return {
					pageWidth: document.documentElement.scrollWidth,
					cards: cards.map((card) => ({
						clipped: card.scrollWidth > card.clientWidth + 1,
						opacity: getComputedStyle(card).opacity,
						animations: card.getAnimations().length
					}))
				};
			});
			expect(dimensions.pageWidth, `${locale}/${width}`).toBeLessThanOrEqual(width);
			expect(
				dimensions.cards.some((card) => card.clipped),
				`${locale}/${width}`
			).toBe(false);
			expect(dimensions.cards.every((card) => card.opacity === '1' && card.animations === 0)).toBe(
				true
			);
		}
	}
});

test('language menu retains the team anchor', async ({ page }) => {
	await page.goto('/ru/#team');
	await page.locator('header [data-language-trigger]').click();
	await page.getByRole('menuitem', { name: 'English', exact: true }).click();
	await expect(page).toHaveURL(/\/en\/#team$/);
	await expect(page.locator('#team h2')).toHaveText(copy.en.title);
});

test.describe('team without JavaScript', () => {
	test.use({ javaScriptEnabled: false });
	for (const locale of ['ru', 'kk', 'en'] as const) {
		test(`${locale}: full content is visible before hydration`, async ({ page }) => {
			await page.goto(`/${locale}/#team`);
			await expect(page.locator('#team h2')).toHaveText(copy[locale].title);
			await expect(page.locator('[data-team-stage]:visible')).toHaveCount(4);
			await expect(page.locator('[data-team-owner]:visible')).toHaveCount(1);
			await expect(page.locator('[data-team-principle]:visible')).toHaveCount(3);
		});
	}
});
