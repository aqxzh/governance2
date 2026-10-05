import { m } from '#lib/paraglide/messages.js';
import food from '#lib/food-data.json';
export const { batches, periodRows, markdownSchedule, agentDecisions, journal } = food;
export type Batch = (typeof batches)[number];
export const productLabels: Record<string, () => string> = {
	'B-1042': m.food_product_1,
	'B-1043': m.food_product_2,
	'B-1051': m.food_product_3,
	'B-2018': m.food_product_4,
	'B-2022': m.food_product_5,
	'B-3015': m.food_product_6,
	'B-4001': m.food_product_7,
	'B-4004': m.food_product_8
};
export const groupLabels: Record<string, () => string> = {
	Молочка: m.food_group_1,
	'Мясо охлажд.': m.food_group_2,
	Овощи: m.food_group_3,
	Заморозка: m.food_group_4
};
export const agentReason: Record<string, () => string> = {
	Молочка: m.food_agent_1_reason,
	'Мясо охлажд.': m.food_agent_2_reason,
	Овощи: m.food_agent_3_reason,
	Заморозка: m.food_agent_4_reason
};
export const agentAdapt: Record<string, () => string> = {
	Молочка: m.food_agent_1_adapt,
	'Мясо охлажд.': m.food_agent_2_adapt,
	Овощи: m.food_agent_3_adapt,
	Заморозка: m.food_agent_4_adapt
};
export const agentVol: Record<string, () => string> = {
	Молочка: m.food_agent_1_vol,
	'Мясо охлажд.': m.food_agent_2_vol,
	Овощи: m.food_agent_3_vol,
	Заморозка: m.food_agent_4_vol
};
export const journalTexts = [
	m.food_journal_1,
	m.food_journal_2,
	m.food_journal_3,
	m.food_journal_4,
	m.food_journal_5,
	m.food_journal_6
];
export const constraints = [
	{ title: m.food_constraint_1_title, description: m.food_constraint_1_description },
	{ title: m.food_constraint_2_title, description: m.food_constraint_2_description },
	{ title: m.food_constraint_3_title, description: m.food_constraint_3_description },
	{ title: m.food_constraint_4_title, description: m.food_constraint_4_description }
];
export const reportTexts = [
	m.food_report_1,
	m.food_report_2,
	m.food_report_3,
	m.food_report_4,
	m.food_report_5
];
export const acceptanceTexts = [
	m.food_accept_1,
	m.food_accept_2,
	m.food_accept_3,
	m.food_accept_4,
	m.food_accept_5
];
export const memoryModes = [
	{ id: 'active', label: m.food_memory_active, description: m.food_memory_active_desc },
	{ id: 'off', label: m.food_memory_off, description: m.food_memory_off_desc },
	{ id: 'required', label: m.food_memory_required, description: m.food_memory_required_desc }
];
export function productName(b: Batch) {
	return productLabels[b.id]?.() ?? b.product;
}
export function groupName(group: string) {
	return groupLabels[group]?.() ?? group;
}
export function unitName(unit: string) {
	return unit === 'кг'
		? m.food_unit_kg()
		: unit === 'шт'
			? m.food_unit_piece()
			: unit === 'л'
				? m.food_unit_litre()
				: unit;
}
export function filterBatches(query: string, group: string) {
	const q = query.trim().toLocaleLowerCase();
	return batches.filter(
		(b) =>
			(group === 'all' || b.group === group) &&
			(!q || [b.id, b.product, productName(b)].some((v) => v.toLocaleLowerCase().includes(q)))
	);
}
export function fefoOrder() {
	return [...batches].sort((a, b) => a.daysLeft - b.daysLeft);
}
export function spoilTotal(rate: number) {
	return Math.round(periodRows.reduce((sum, r) => sum + r.spoil, 0) * (rate / 2.1));
}
