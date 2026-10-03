<script lang="ts">
	import { page } from '$app/state';
	import { m } from '#lib/paraglide/messages.js';
	import { getLocale, deLocalizeUrl, localizeHref } from '#lib/paraglide/runtime.js';
	import { SITE_ORIGIN, THEME_COLOR, languages } from '#lib/site.js';

	const canonical = $derived(
		new URL(localizeHref(deLocalizeUrl(page.url).pathname), SITE_ORIGIN).href
	);
</script>

<svelte:head>
	<title>{m.meta_title()}</title>
	<meta name="description" content={m.meta_description()} />
	<link rel="canonical" href={canonical} />
	{#each languages as language (language.locale)}
		<link
			rel="alternate"
			hreflang={language.locale}
			href={new URL(
				localizeHref(deLocalizeUrl(page.url).pathname, { locale: language.locale }),
				SITE_ORIGIN
			).href}
		/>
	{/each}
	<link
		rel="alternate"
		hreflang="x-default"
		href={new URL(localizeHref(deLocalizeUrl(page.url).pathname, { locale: 'ru' }), SITE_ORIGIN)
			.href}
	/>
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Governance.kz" />
	<meta property="og:title" content={m.meta_title()} />
	<meta property="og:description" content={m.meta_description()} />
	<meta property="og:url" content={canonical} />
	<meta
		property="og:locale"
		content={getLocale() === 'kk' ? 'kk_KZ' : getLocale() === 'ru' ? 'ru_KZ' : 'en_US'}
	/>
	<meta property="og:image" content={SITE_ORIGIN + '/images/team-main.webp'} />
	<meta property="og:image:alt" content={m.hero_image_alt()} />
	<meta name="theme-color" content={THEME_COLOR} />
</svelte:head>
