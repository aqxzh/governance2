import { describe, expect, it } from 'vitest';
import ru from '../../messages/ru.json';
import kk from '../../messages/kk.json';
import en from '../../messages/en.json';
import { m } from './paraglide/messages.js';
import {
	deLocalizeUrl,
	extractLocaleFromUrl,
	localizeHref,
	localizeUrl
} from './paraglide/runtime.js';
import { languages, SITE_ORIGIN } from './site.js';

const catalogs = { ru, kk, en };

describe('translation catalogs', () => {
	it.each(languages)('$locale has every source key and no blank messages', ({ locale }) => {
		const sourceKeys = Object.keys(ru)
			.filter((key) => key !== '$schema')
			.sort();
		const catalog = catalogs[locale];
		expect(
			Object.keys(catalog)
				.filter((key) => key !== '$schema')
				.sort()
		).toEqual(sourceKeys);
		for (const key of sourceKeys) {
			expect(catalog[key as keyof typeof catalog].trim(), `${locale}: ${key}`).not.toBe('');
		}
	});
	it('compiled messages actually differ across languages', () => {
		const headings = languages.map(({ locale }) => m.hero_title({}, { locale }));
		expect(new Set(headings).size).toBe(3);
		expect(headings[0]).toBe(ru.hero_title);
		expect(headings[1]).toBe(kk.hero_title);
		expect(headings[2]).toBe(en.hero_title);
	});
	it('uses kk for Kazakh and KZ as the user-facing label', () => {
		expect(languages.find(({ locale }) => locale === 'kk')?.label).toBe('KZ');
		expect(kk.hero_title).toMatch(/[ӘҒҚҢӨҰҮҺІәғқңөұүһі]/u);
	});
});

describe('Paraglide URL strategy', () => {
	it.each(languages)('localizes the root for $locale', ({ locale }) => {
		expect(localizeHref('/', { locale })).toBe(`/${locale}/`);
		const url = localizeUrl(SITE_ORIGIN + '/', { locale });
		expect(url.href).toBe(`${SITE_ORIGIN}/${locale}/`);
		expect(extractLocaleFromUrl(url)).toBe(locale);
		expect(deLocalizeUrl(url).pathname).toBe('/');
	});
	it.each(['https://governance.kz', 'http://localhost:5174', 'http://127.0.0.1:4173'])(
		'handles the root and locale detection on %s',
		(origin) => {
			for (const { locale } of languages) {
				expect(localizeUrl(origin + '/', { locale }).href).toBe(`${origin}/${locale}/`);
				expect(extractLocaleFromUrl(origin + `/${locale}/`)).toBe(locale);
			}
		}
	);
	it('preserves a nested page when switching languages', () => {
		expect(localizeHref('/ru/diagnostics/', { locale: 'kk' })).toBe('/kk/diagnostics/');
		expect(localizeHref('/kk/simulator/', { locale: 'en' })).toBe('/en/simulator/');
	});
});
