import { m } from '#lib/paraglide/messages.js';
import data from '#lib/advisor-data.json';
export const { OBLASTS: regions, KZ_OUTER: mapOutline, KZ_CITIES: cities } = data;
export const regionLabels: Record<string, () => string> = {
	karaganda: m.region_karaganda,
	wko: m.region_wko,
	atyrau: m.region_atyrau,
	mangystau: m.region_mangystau,
	aktobe: m.region_aktobe,
	kostanay: m.region_kostanay,
	nko: m.region_nko,
	akmola: m.region_akmola,
	pavlodar: m.region_pavlodar,
	ekz: m.region_ekz,
	abay: m.region_abay,
	ulytau: m.region_ulytau,
	kyzylorda: m.region_kyzylorda,
	turkestan: m.region_turkestan,
	jambyl: m.region_jambyl,
	almaty: m.region_almaty,
	zhetisu: m.region_zhetisu
};
export const advisorMenus = [
	{
		id: 'digests',
		label: m.advisor_digests,
		items: [
			{ id: 'digest-today', label: m.advisor_menu_digest_today },
			{ id: 'digest-week', label: m.advisor_menu_digest_week },
			{ id: 'digest-critical', label: m.advisor_menu_digest_critical }
		]
	},
	{
		id: 'documents',
		label: m.advisor_documents,
		items: [
			{ id: 'doc-overdue', label: m.advisor_menu_doc_overdue },
			{ id: 'doc-priority', label: m.advisor_menu_doc_priority },
			{ id: 'doc-control', label: m.advisor_menu_doc_control }
		]
	},
	{
		id: 'social',
		label: m.advisor_social,
		items: [
			{ id: 'social-monitor', label: m.advisor_menu_social_monitor },
			{ id: 'social-sentiment', label: m.advisor_menu_social_sentiment }
		]
	}
];
export const digests = [
	{
		id: 1,
		date: '18.09.2026',
		title: m.advisor_digest_1_title,
		badge: m.advisor_digest_1_badge,
		items: [m.advisor_digest_1_1, m.advisor_digest_1_2, m.advisor_digest_1_3]
	},
	{
		id: 2,
		date: '17.09.2026',
		title: m.advisor_digest_2_title,
		badge: m.advisor_digest_2_badge,
		items: [m.advisor_digest_2_1, m.advisor_digest_2_2, m.advisor_digest_2_3]
	},
	{
		id: 3,
		date: '15.09.2026',
		title: m.advisor_digest_3_title,
		badge: m.advisor_digest_3_badge,
		items: [m.advisor_digest_3_1, m.advisor_digest_3_2, m.advisor_digest_3_3]
	}
];
export const chatModes = [
	{ id: 'deep', label: m.advisor_deep },
	{ id: 'web', label: m.advisor_web },
	{ id: 'debate', label: m.advisor_debate },
	{ id: 'chat', label: m.advisor_chat },
	{ id: 'docs', label: m.advisor_documents }
];
