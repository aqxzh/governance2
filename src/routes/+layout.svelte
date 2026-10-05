<script lang="ts">
	import { onMount } from 'svelte';
	import { asset, resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import SiteHeader from '#lib/components/site/SiteHeader.svelte';
	import SiteFooter from '#lib/components/site/SiteFooter.svelte';
	import { m } from '#lib/paraglide/messages.js';
	import { localizeHref } from '#lib/paraglide/runtime.js';
	import { storyRedirect } from '#lib/story-legacy.js';
	import './layout.css';
	let { children } = $props();
	onMount(() => {
		const redirect = () => {
			const url = new URL(window.location.href);
			const target = storyRedirect(url);
			if (!target) return;
			const { section, hash } = target;
			url.searchParams.delete('food');
			void goto(
				// eslint-disable-next-line svelte/no-navigation-without-resolve -- Paraglide localizes the resolved Kit route.
				localizeHref(resolve('/[section]', { section })) + url.search + (hash ? '#' + hash : ''),
				{
					replaceState: true
				}
			);
		};
		redirect();
		window.addEventListener('hashchange', redirect);
		// Update only an existing legacy root worker; never register one for new visitors.
		if ('serviceWorker' in navigator)
			void navigator.serviceWorker
				.getRegistration('/')
				.then((registration) => {
					if (registration?.active && new URL(registration.active.scriptURL).pathname === '/sw.js')
						return registration.update();
				})
				.catch(() => {});
		return () => window.removeEventListener('hashchange', redirect);
	});
</script>

<svelte:head><link rel="icon" type="image/svg+xml" href={asset('/favicon.svg')} /></svelte:head>
<SiteHeader />
{@render children()}
<noscript
	><p class="site-container px-5 py-4 text-sm text-muted-foreground">
		{m.legacy_notice()}
	</p></noscript
>
<SiteFooter />
