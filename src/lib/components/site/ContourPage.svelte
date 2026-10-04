<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import type { Contour } from '#lib/contours.js';
	import { m } from '#lib/paraglide/messages.js';
	import { localizeHref } from '#lib/paraglide/runtime.js';
	import ContourVideo from './ContourVideo.svelte';
	import SolutionsRegistry from './SolutionsRegistry.svelte';
	import SimulatorGallery from './SimulatorGallery.svelte';
	let { contour }: { contour: Contour } = $props();
</script>

<div class="site-container space-y-8 px-5 py-8 sm:px-7 sm:py-10">
	<Button href={localizeHref(resolve('/'))} variant="outline">{m.back_home()}</Button>
	<Card.Root class="relative isolate overflow-hidden"
		><img
			src={asset(contour.image.src)}
			width={contour.image.width}
			height={contour.image.height}
			alt=""
			aria-hidden="true"
			class="absolute inset-0 -z-10 size-full object-cover"
		/>
		<div class="absolute inset-0 -z-10 bg-hero-surface/85" aria-hidden="true"></div>
		<Card.Content class="space-y-5 py-10 sm:py-14"
			><p class="font-mono text-xs text-hero-muted-foreground">{contour.number} / GOVERNANCE.KZ</p>
			<h1 class="max-w-4xl text-3xl font-bold tracking-tight text-hero-foreground sm:text-5xl">
				{contour.title()}
			</h1>
			<p class="max-w-3xl text-base leading-relaxed text-hero-muted-foreground sm:text-lg">
				{contour.description()}
			</p>
			{#if contour.video}<ContourVideo
					src={contour.video}
					title={contour.title()}
					image={contour.image}
				/>{/if}</Card.Content
		></Card.Root
	>
	{#if contour.id === 'simulator'}<SimulatorGallery />{/if}
	<SolutionsRegistry rows={contour.rows} title={contour.title()} />
</div>
