import { contours, type ContourId, type Solution } from '#lib/contours.js';
import { m } from '#lib/paraglide/messages.js';
const [sim, diagnostic, coordination] = contours;
export type StoryGroup = {
	id: string;
	title: () => string;
	description: () => string;
	sources: readonly Solution[];
	presentations: readonly number[];
};
export const storyOrder: readonly ContourId[] = ['diagnostics', 'simulator', 'coordination'];
export const storyGroups: Record<ContourId, readonly StoryGroup[]> = {
	diagnostics: [
		{
			id: 'functions',
			title: m.story_functions,
			description: m.story_functions_desc,
			sources: [diagnostic.rows[0], diagnostic.rows[1], diagnostic.rows[3]],
			presentations: []
		},
		{
			id: 'people',
			title: m.story_people,
			description: m.story_people_desc,
			sources: [diagnostic.rows[2], diagnostic.rows[4], coordination.rows[1], coordination.rows[3]],
			presentations: []
		},
		{
			id: 'data',
			title: m.story_data,
			description: m.story_data_desc,
			sources: [diagnostic.rows[5], diagnostic.rows[6]],
			presentations: []
		}
	],
	simulator: [
		{
			id: 'research',
			title: m.story_research,
			description: m.story_research_desc,
			sources: [sim.rows[0]],
			presentations: [0]
		},
		{
			id: 'scenarios',
			title: m.story_scenarios,
			description: m.story_scenarios_desc,
			sources: [sim.rows[2], coordination.rows[0], sim.rows[3], sim.rows[5]],
			presentations: [2, 3, 5]
		},
		{
			id: 'supply',
			title: m.story_supply,
			description: m.story_supply_desc,
			sources: [sim.rows[1]],
			presentations: [1]
		}
	],
	coordination: [
		{
			id: 'advisor',
			title: m.story_advisor,
			description: m.story_advisor_desc,
			sources: [sim.rows[4], coordination.rows[2]],
			presentations: [4]
		},
		{
			id: 'bots',
			title: m.story_bots,
			description: m.story_bots_desc,
			sources: [coordination.rows[4]],
			presentations: []
		}
	]
};
export const foodStoryTabs = [
	{ id: 'batches', label: m.story_food_batches },
	{ id: 'planning', label: m.story_food_planning },
	{ id: 'history', label: m.story_food_history }
];
export function foodStoryTab(hash: string) {
	return (
		{
			batches: 'batches',
			trace: 'batches',
			order: 'planning',
			agent: 'planning',
			planning: 'planning',
			graph: 'history',
			report: 'history',
			history: 'history'
		} as Record<string, string>
	)[hash];
}
export function storyGroupForHash(contour: ContourId, hash: string) {
	if (storyGroups[contour].some((g) => g.id === hash)) return hash;
	if (contour === 'simulator')
		return (
			{
				process: 'research',
				'module-1': 'research',
				'module-2': 'supply',
				'module-3': 'scenarios',
				'module-4': 'scenarios',
				'module-6': 'scenarios'
			} as Record<string, string>
		)[hash];
	return undefined;
}
