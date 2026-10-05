<script lang="ts">
	import { page } from '$app/state';
	import { asset } from '$app/paths';
	import { infographicFor } from '#lib/infographics.js';
	import type { ContourImage } from '#lib/contours.js';
	import SystemDiagram from '../site/SystemDiagram.svelte';
	import MarketInfographic from './MarketInfographic.svelte';
	import DiagnosticsInfographic from './DiagnosticsInfographic.svelte';
	import CoordinationInfographic from './CoordinationInfographic.svelte';
	import AgentInfographic from './AgentInfographic.svelte';
	import LandingPanels from './LandingPanels.svelte';
	import LandingDiagrams from './LandingDiagrams.svelte';
	let { image, title }: { image: ContourImage; title: string } = $props();
	const definition = $derived(infographicFor(image.src));
</script>

<div class="w-full min-w-0" data-infographic-source={image.src}>
	{#key page.url.pathname + image.src}
		{#if definition?.kind === 'system'}<SystemDiagram state={definition.variant} {title} />
		{:else if definition?.kind === 'market'}<MarketInfographic
				variant={definition.variant}
				{title}
			/>
		{:else if definition?.kind === 'diagnostics'}<DiagnosticsInfographic
				variant={definition.variant}
				{title}
			/>
		{:else if definition?.kind === 'coordination'}<CoordinationInfographic
				variant={definition.variant}
				{title}
			/>
		{:else if definition?.kind === 'agent'}<AgentInfographic variant={definition.variant} {title} />
		{:else if definition?.kind === 'panels'}<LandingPanels variant={definition.variant} {title} />
		{:else if definition?.kind === 'diagrams'}<LandingDiagrams
				variant={definition.variant}
				{title}
			/>
		{:else}<img
				src={asset(image.src)}
				alt={title}
				width={image.width}
				height={image.height}
				loading="lazy"
				class="w-full rounded-lg object-contain"
			/>{/if}
	{/key}
</div>
