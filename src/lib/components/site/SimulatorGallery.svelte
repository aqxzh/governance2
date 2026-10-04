<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import * as Collapsible from '#lib/components/ui/collapsible/index.js';
	import { contours } from '#lib/contours.js';
	import { presentationTexts } from '#lib/remaining.js';
	import { m } from '#lib/paraglide/messages.js';
	import { getLocale } from '#lib/paraglide/runtime.js';
	import MediaIllustration from './MediaIllustration.svelte';
	import ContourVideo from './ContourVideo.svelte';
	let { indices = [0] }: { indices: readonly number[] } = $props();
	const heights = [720, 901, 914, 931, 884, 953];
	const videos: Record<number, string> = {
		0: '/videos/map1.mp4',
		1: '/videos/almaty.mp4',
		4: '/videos/advisor.mp4',
		5: '/videos/map2.mp4'
	};
</script>

<div class="space-y-10">
	<p class="max-w-4xl text-sm leading-relaxed text-muted-foreground">{m.demo_notice()}</p>
	{#if getLocale() !== 'ru'}<p class="text-sm text-muted-foreground">
			{m.media_language_notice()}
		</p>{/if}
	{#each indices as i (i)}
		{@const slide = contours[0].rows[i]}
		<section
			id={'module-' + (i + 1)}
			aria-labelledby={'module-title-' + (i + 1)}
			class="scroll-mt-6 space-y-5"
		>
			<header class="space-y-3">
				<p class="font-mono text-xs text-primary">{slide.number}</p>
				<h2 id={'module-title-' + (i + 1)} class="text-2xl font-bold tracking-tight">
					{i === 5 ? m.story_agents() : slide.title()}
				</h2>
				<p class="max-w-4xl text-sm leading-relaxed text-muted-foreground">{slide.description()}</p>
			</header>
			<Card.Root
				><Card.Content class="space-y-4"
					>{#if videos[i]}<ContourVideo
							src={videos[i]}
							title={slide.title()}
							image={slide.image}
							poster={{
								src: '/images/simulator/module-' + (i + 1) + '.webp',
								width: 1170,
								height: heights[i]
							}}
						/>{:else}<MediaIllustration
							image={{
								src: '/images/simulator/module-' + (i + 1) + '.webp',
								width: 1170,
								height: heights[i]
							}}
							title={slide.title()}
							description={slide.description()}
						/>{/if}

					<Collapsible.Root
						><Collapsible.Trigger
							>{#snippet child({ props })}<Button
									{...props}
									variant="outline"
									class="h-auto min-h-11 whitespace-normal">{m.read_presentation()}</Button
								>{/snippet}</Collapsible.Trigger
						><Collapsible.Content
							forceMount
							data-static-collapsible
							class="mt-4 hidden data-[state=open]:block"
							><p class="text-sm leading-relaxed wrap-anywhere whitespace-pre-wrap">
								{presentationTexts[i]()}
							</p></Collapsible.Content
						></Collapsible.Root
					></Card.Content
				></Card.Root
			>
		</section>
	{/each}
</div>
