<script lang="ts">
	import { asset } from '$app/paths';
	import SiteHeader from '#lib/components/site/SiteHeader.svelte';
	import { m } from '#lib/paraglide/messages.js';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={asset('/favicon.svg')} />
</svelte:head>

<SiteHeader />
{@render children()}
<footer class="site-container border-t px-5 py-6 sm:px-7">
	<p class="max-w-3xl text-xs leading-relaxed text-muted-foreground">{m.preview_notice()}</p>
	<p class="mt-4 font-mono text-xs tracking-wide">GOVERNANCE.KZ</p>
</footer>
