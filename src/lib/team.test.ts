import { describe, expect, it } from 'vitest';
import { teamStages, teamOwner, teamPrinciples } from './team.js';
import { m } from './paraglide/messages.js';

describe('team section', () => {
	it('preserves the four source stages and their order', () => {
		expect(teamStages.map((stage) => stage.number)).toEqual(['01', '02', '03', '04']);
		expect(teamStages.map((stage) => stage.phase())).toEqual([
			'Диагностика',
			'Проектирование',
			'Люди',
			'Инженерия'
		]);
		expect(teamStages.map((stage) => stage.role())).toEqual([
			'Аналитики управления',
			'Проектировщики услуг',
			'HR-эксперты',
			'Инженеры данных и ИИ'
		]);
		for (const stage of teamStages) {
			for (const text of [stage.description, stage.method, stage.artifact])
				expect(text().trim()).not.toBe('');
		}
	});
	it('keeps a single implementation owner and the three source principles', () => {
		expect(teamOwner.number).toBe('05');
		expect(teamOwner.role()).toBe('Руководитель внедрения');
		expect(teamOwner.artifact()).toBe('Отчёт пилота и решение о масштабировании');
		expect(teamPrinciples.map((principle) => principle())).toEqual([
			'Работаете напрямую с теми, кто делает',
			'Данные остаются в вашем контуре',
			'Решения остаются за людьми'
		]);
	});
	it('has actual localized headings for all three locales', () => {
		const headings = ['ru', 'kk', 'en'].map((locale) =>
			m.team_title({}, { locale: locale as 'ru' | 'kk' | 'en' })
		);
		expect(new Set(headings).size).toBe(3);
	});
});
