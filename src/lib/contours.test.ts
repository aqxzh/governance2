import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
import { contours } from './contours.js';
import media from '../../docs/contour-media.json';

describe('contour register', () => {
	it('preserves the source order and 6/7/5 solution counts', () => {
		expect(contours.map((contour) => contour.id)).toEqual([
			'simulator',
			'diagnostics',
			'coordination'
		]);
		expect(contours.map((contour) => contour.rows.length)).toEqual([6, 7, 5]);
	});
	it('has unique IDs and sequential source numbering', () => {
		const rows = contours.flatMap((contour) => contour.rows);
		expect(new Set(rows.map((row) => row.id)).size).toBe(18);
		for (const contour of contours) {
			expect(contour.rows.map((row) => row.number)).toEqual(
				contour.rows.map((_, index) => String(index + 1).padStart(2, '0'))
			);
		}
	});
	it('has nonempty translated text and complete local image metadata', () => {
		for (const contour of contours) {
			for (const item of [contour, ...contour.rows]) {
				expect(item.title()).not.toBe('');
				expect(item.description()).not.toBe('');
				expect(item.image.width).toBeGreaterThan(0);
				expect(item.image.height).toBeGreaterThan(0);
				expect(existsSync(new URL('../../static' + item.image.src, import.meta.url))).toBe(true);
				expect(media.find((entry) => entry.path === item.image.src)).toMatchObject({
					width: item.image.width,
					height: item.image.height
				});
			}
		}
	});
	it('uses browser-compatible H.264/AAC videos only for the two video contours', () => {
		expect(contours.filter((contour) => contour.video).map((contour) => contour.id)).toEqual([
			'diagnostics',
			'coordination'
		]);
		for (const contour of contours) {
			if (!contour.video) continue;
			expect(existsSync(new URL('../../static' + contour.video, import.meta.url))).toBe(true);
			expect(media.find((entry) => entry.path === contour.video)?.codecs).toEqual(['h264', 'aac']);
		}
	});
});
