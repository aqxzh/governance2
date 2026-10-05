import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
const sections = ['simulator', 'diagnostics', 'coordination', 'foodflow'] as const;
export function entries() {
	return sections.map((section) => ({ section }));
}
export const load: PageLoad = ({ params }) => {
	if (!sections.some((section) => section === params.section)) error(404, 'Not found');
	return { section: params.section as (typeof sections)[number] };
};
