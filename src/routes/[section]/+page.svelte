<script lang="ts">
	import type { PageData } from './$types';
	import { contours } from '#lib/contours.js';
	import Seo from '#lib/components/site/Seo.svelte';
	import ContourPage from '#lib/components/site/ContourPage.svelte';
	import FoodFlow from '#lib/components/site/FoodFlow.svelte';
	import { m } from '#lib/paraglide/messages.js';
	let { data }: { data: PageData } = $props();
	const contour = $derived(contours.find((c) => c.id === data.section));
</script>

{#if contour}<Seo
		title={m.section_meta_title({ title: contour.title() })}
		description={contour.description()}
	/>
	<main id="main" tabindex="-1">
		{#key contour.id}<ContourPage {contour} />{/key}
	</main>{:else}<Seo
		title={m.section_meta_title({ title: m.food_title() })}
		description={m.food_description()}
	/>
	<main id="main" tabindex="-1"><FoodFlow /></main>{/if}
