import { legacySection } from '#lib/legacy.js';
export function storyRedirect(
	url: URL
):
	{ section: 'simulator' | 'diagnostics' | 'coordination' | 'foodflow'; hash: string } | undefined {
	const path = url.pathname.replace(/^\/(ru|kk|en)(?=\/|$)/, '').replace(/\/$/, '') || '/';
	const hash = url.hash.slice(1);
	if (path === '/simulator' && ['advisor', 'module-5'].includes(hash))
		return { section: 'coordination', hash: 'advisor' };
	if (path !== '/') return;
	const moved: Record<
		string,
		{ section: 'simulator' | 'diagnostics' | 'coordination'; hash: string }
	> = {
		process: { section: 'simulator', hash: 'research' },
		assessment: { section: 'diagnostics', hash: 'people' },
		execassist: { section: 'coordination', hash: 'advisor' },
		serviceflow: { section: 'diagnostics', hash: 'functions' }
	};
	if (moved[hash]) return moved[hash];
	const section = legacySection(url);
	if (section) return { section, hash: '' };
}
