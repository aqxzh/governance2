import { describe, it, expect, vi, afterEach } from 'vitest';
import { validApplication, sendApplication, APPLICATION_ENDPOINT } from '#lib/application.js';
import { legacySection } from '#lib/legacy.js';
import { batches, filterBatches, fefoOrder, spoilTotal, productName } from '#lib/food.js';
import { regions, digests, advisorMenus } from '#lib/advisor.js';
import { processSteps, schemes, securityPrinciples, presentationTexts } from '#lib/remaining.js';
afterEach(() => vi.unstubAllGlobals());
describe('full original scope', () => {
	it('preserves source data and process counts', () => {
		expect(processSteps).toHaveLength(4);
		expect(schemes).toHaveLength(2);
		expect(securityPrinciples).toHaveLength(5);
		expect(presentationTexts).toHaveLength(6);
		expect(batches).toHaveLength(8);
		expect(regions).toHaveLength(17);
		expect(digests).toHaveLength(3);
		expect(advisorMenus.flatMap((m) => m.items)).toHaveLength(8);
	});
	it('filters original IDs and localized products without mutating data', () => {
		expect(filterBatches('B-1043', 'all').map((b) => b.id)).toEqual(['B-1043']);
		expect(filterBatches(productName(batches[0]), 'all')).toContain(batches[0]);
		expect(filterBatches('not-a-product', 'all')).toEqual([]);
		expect(filterBatches('', 'Молочка')).toHaveLength(3);
		expect(batches[0].id).toBe('B-1042');
	});
	it('preserves FEFO and the original spoil calculation', () => {
		expect(
			fefoOrder()
				.slice(0, 3)
				.map((b) => b.id)
		).toEqual(['B-1043', 'B-2018', 'B-1042']);
		expect(spoilTotal(2.1)).toBe(194);
		expect(spoilTotal(4.2)).toBe(388);
	});
});
describe('legacy URLs', () => {
	for (const [suffix, section] of [
		['#simulator', 'simulator'],
		['#diagnostics', 'diagnostics'],
		['#recruitment', 'diagnostics'],
		['#analytics', 'coordination'],
		['#coordination', 'coordination'],
		['?food=1', 'foodflow']
	])
		it(suffix, () => {
			for (const prefix of ['/', '/ru/', '/kk/', '/en/'])
				expect(legacySection(new URL('https://governance.kz' + prefix + suffix))).toBe(section);
		});
	it('does not hijack content fragments or standalone pages', () => {
		for (const path of [
			'/#team',
			'/#contours-diagnostics',
			'/en/simulator/#advisor',
			'/foodflow/?food=1'
		])
			expect(legacySection(new URL('https://governance.kz' + path))).toBeUndefined();
	});
});
describe('application integration, strictly mocked', () => {
	const application = { name: ' Test ', phone: ' +7 (777) 123-45-67 ', message: ' Question ' };
	it('requires explicit consent and valid fields', () => {
		expect(validApplication(application, true)).toBe(true);
		expect(validApplication(application, false)).toBe(false);
		expect(validApplication({ ...application, name: ' ' }, true)).toBe(false);
		expect(validApplication({ ...application, phone: 'bad' }, true)).toBe(false);
		expect(validApplication({ ...application, phone: '123' }, true)).toBe(false);
		expect(validApplication({ ...application, message: 'x'.repeat(4001) }, true)).toBe(false);
	});
	it('sends only the source payload to the original recipient', async () => {
		const fetch = vi
			.fn()
			.mockResolvedValue(new Response(JSON.stringify({ success: 'true' }), { status: 200 }));
		vi.stubGlobal('fetch', fetch);
		await sendApplication(application);
		expect(fetch).toHaveBeenCalledTimes(1);
		const [url, init] = fetch.mock.calls[0];
		expect(url).toBe(APPLICATION_ENDPOINT);
		expect(JSON.parse(init.body)).toEqual({
			_subject: 'Новая заявка с сайта Governance.kz',
			_template: 'table',
			_captcha: 'false',
			Имя: 'Test',
			Телефон: '+7 (777) 123-45-67',
			'Вопрос / тема встречи': 'Question'
		});
	});
	for (const response of [
		new Response('{}', { status: 500 }),
		new Response('{"success":false}'),
		new Response('{}'),
		new Response('not JSON')
	])
		it('does not manufacture a successful submission', async () => {
			vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response));
			await expect(sendApplication(application)).rejects.toThrow();
		});
});
