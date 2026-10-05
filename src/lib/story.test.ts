import { describe, it, expect } from 'vitest';
import { contours } from '#lib/contours.js';
import {
	storyGroups,
	storyOrder,
	foodStoryTabs,
	foodStoryTab,
	storyGroupForHash
} from '#lib/story.js';
import { storyRedirect } from '#lib/story-legacy.js';
describe('story architecture', () => {
	it('assigns every source solution to exactly one canonical group', () => {
		const source = contours
			.flatMap((c) => c.rows)
			.map((r) => r.id)
			.sort();
		const mapped = Object.values(storyGroups)
			.flatMap((gs) => gs.flatMap((g) => g.sources.map((r) => r.id)))
			.sort();
		expect(mapped).toEqual(source);
		expect(new Set(mapped).size).toBe(18);
	});
	it('has a task order and no duplicate presentations', () => {
		expect(storyOrder).toEqual(['diagnostics', 'simulator', 'coordination']);
		expect(Object.values(storyGroups).map((g) => g.length)).toEqual([3, 3, 2]);
		const presentations = Object.values(storyGroups)
			.flatMap((gs) => gs.flatMap((g) => g.presentations))
			.sort();
		expect(presentations).toEqual([0, 1, 2, 3, 4, 5]);
		expect(storyGroups.coordination[0].presentations).toEqual([4]);
	});
	it('groups all six food views into three meaningful modes', () => {
		expect(foodStoryTabs).toHaveLength(3);
		for (const [old, next] of [
			['trace', 'batches'],
			['agent', 'planning'],
			['order', 'planning'],
			['graph', 'history'],
			['report', 'history']
		])
			expect(foodStoryTab(old)).toBe(next);
		expect(foodStoryTab('bogus')).toBeUndefined();
	});
	it('preserves old entry meanings without putting advisor back in modelling', () => {
		expect(
			storyRedirect(new URL('https://governance.kz/en/simulator/?source=old#module-5'))
		).toEqual({ section: 'coordination', hash: 'advisor' });
		expect(storyRedirect(new URL('https://governance.kz/kk/#process'))).toEqual({
			section: 'simulator',
			hash: 'research'
		});
		expect(storyRedirect(new URL('https://governance.kz/ru/#assessment'))).toEqual({
			section: 'diagnostics',
			hash: 'people'
		});
		expect(storyRedirect(new URL('https://governance.kz/ru/#team'))).toBeUndefined();
		expect(storyGroupForHash('simulator', 'module-6')).toBe('scenarios');
	});
});
