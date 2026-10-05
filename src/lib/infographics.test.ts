import { describe, it, expect } from 'vitest';
import { infographicFor } from './infographics.js';
import { contours } from './contours.js';
import media from './full-media.json';
import ru from '../../messages/ru.json';
import kk from '../../messages/kk.json';
import en from '../../messages/en.json';

describe('canonical localized infographic coverage', () => {
	it('covers every original contour image and simulator poster', () => {
		for (const contour of contours) {
			expect(infographicFor(contour.image.src)).not.toBeNull();
			for (const row of contour.rows) expect(infographicFor(row.image.src)).not.toBeNull();
		}
		for (let i = 1; i <= 6; i++)
			expect(infographicFor(`/images/simulator/module-${i}.webp`)).not.toBeNull();
	});
	it('covers every landing source without treating genuine photos as dashboards', () => {
		for (const image of Object.values(media))
			expect(infographicFor(image.src), image.src).not.toBeNull();
		expect(infographicFor('/images/team-main.webp')).toBeNull();
		expect(infographicFor('/images/infographics/portfolio-1.webp')).toBeNull();
		expect(infographicFor('/images/contours/diagnostics-99.webp')).toBeNull();
	});
	it('unifies both source sizes for every simulator illustration', () => {
		for (let i = 1; i <= 6; i++)
			expect(infographicFor(`/images/simulator/module-${i}.webp`)).toEqual(
				infographicFor(`/images/contours/simulator-${String(i).padStart(2, '0')}.webp`)
			);
	});
	it('keeps translated infographic messages complete and does not publish invented series', () => {
		const keys = Object.keys(ru).filter((k) => k.startsWith('inf_'));
		expect(keys.length).toBeGreaterThan(700);
		for (const locale of [kk, en])
			for (const key of keys) expect(locale[key as keyof typeof locale]).toBeTruthy();
		expect(ru.inf_market_demand_purch_caption).toMatch(/числ|точн|схем|иллюстра|форм/i);
	});
});
