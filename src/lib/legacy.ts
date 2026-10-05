// Public React entry points. Namespaced Svelte register fragments are not legacy routes.
export function legacySection(
	url: URL
): 'simulator' | 'diagnostics' | 'coordination' | 'foodflow' | undefined {
	if (!/^\/(?:ru\/?|kk\/?|en\/?)?$/.test(url.pathname)) return;
	if (url.searchParams.get('food') === '1') return 'foodflow';
	const aliases: Record<string, 'simulator' | 'diagnostics' | 'coordination'> = {
		simulator: 'simulator',
		diagnostics: 'diagnostics',
		recruitment: 'diagnostics',
		coordination: 'coordination',
		analytics: 'coordination'
	};
	return aliases[url.hash.slice(1)];
}
