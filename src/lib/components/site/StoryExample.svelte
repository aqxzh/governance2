<script lang="ts">
	import { Badge } from '#lib/components/ui/badge/index.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import { getLocale } from '#lib/paraglide/runtime.js';
	import { processSteps } from '#lib/remaining.js';
	import media from '#lib/full-media.json';
	import ContentSection from './ContentSection.svelte';
	import MediaIllustration from './MediaIllustration.svelte';
	import ContourVideo from './ContourVideo.svelte';
	let { kind }: { kind: 'research' | 'people' | 'functions' } = $props();
	const assessmentMetrics = [
		{ label: m.assessment_engagement, value: () => '87%' },
		{ label: m.assessment_stress, value: () => '12%' },
		{ label: m.assessment_emotion, value: m.assessment_stable }
	];
</script>

{#if kind === 'research'}
	<ContentSection nested id="process" eyebrow="" title={m.process_description()}>
		<Badge variant="secondary">{m.process_demo_badge()}</Badge>
		<ContourVideo
			src="/videos/process.mp4"
			title={m.process_title()}
			image={media.process}
			poster={media.process}
			posterClass="aspect-[3/1]"
		/>
		<div class="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each processSteps as step (step.number)}<Card.Root
					><Card.Header
						><p class="font-mono text-xs text-primary">{step.number}</p>
						<h3 class="text-lg font-semibold">{step.title()}</h3></Card.Header
					><Card.Content
						><p class="text-sm leading-relaxed text-muted-foreground">
							{step.description()}
						</p></Card.Content
					></Card.Root
				>{/each}
		</div>
		{#if getLocale() !== 'ru'}<p class="text-sm text-muted-foreground">
				{m.media_language_notice()}
			</p>{/if}
	</ContentSection>
{:else if kind === 'people'}
	<ContentSection
		nested
		id="assessment"
		eyebrow=""
		title={m.assessment_title()}
		description={m.assessment_description()}
	>
		<p class="text-sm text-muted-foreground">{m.demo_notice()}</p>
		<MediaIllustration
			image={media.assessment}
			previewImage={media.assessmentDetail}
			title={m.assessment_example()}
		/>
		<div class="grid gap-4 sm:grid-cols-3">
			{#each assessmentMetrics as metric (metric.label)}<Card.Root
					><Card.Header><p class="text-sm text-muted-foreground">{metric.label()}</p></Card.Header
					><Card.Content><p class="text-2xl font-semibold">{metric.value()}</p></Card.Content
					></Card.Root
				>{/each}
		</div>
	</ContentSection>
{:else}
	<ContentSection nested id="serviceflow" eyebrow="" title={m.service_title()}>
		<div class="grid gap-4 sm:grid-cols-3">
			{#each [m.service_barrier, m.service_document, m.service_time] as label (label)}<Card.Root
					><Card.Header><h3 class="text-lg font-semibold">{label()}</h3></Card.Header></Card.Root
				>{/each}
		</div>
		<MediaIllustration image={media.service} title={m.service_proactive()} /><Badge
			>{m.service_proactive()}</Badge
		>
	</ContentSection>
{/if}
