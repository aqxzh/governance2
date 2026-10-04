<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import * as Collapsible from '#lib/components/ui/collapsible/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import { localizeHref, getLocale } from '#lib/paraglide/runtime.js';
	import { processSteps, schemes, securityPrinciples } from '#lib/remaining.js';
	import media from '#lib/full-media.json';
	import ContentSection from './ContentSection.svelte';
	import MediaIllustration from './MediaIllustration.svelte';
	import ContourVideo from './ContourVideo.svelte';
	const assessmentMetrics = [
		{ label: m.assessment_engagement, value: () => '87%' },
		{ label: m.assessment_stress, value: () => '12%' },
		{ label: m.assessment_emotion, value: m.assessment_stable }
	];
	const execMetrics = [
		{ label: m.exec_marketing, value: '92%' },
		{ label: m.exec_sales, value: '88%' },
		{ label: m.exec_development, value: '95%' },
		{ label: m.exec_load, value: '70%' }
	];
</script>

<ContentSection
	id="process"
	eyebrow={m.process_eyebrow()}
	title={m.process_title()}
	description={m.process_description()}
>
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
<ContentSection
	id="infographics"
	eyebrow={m.philosophy_eyebrow()}
	title={m.philosophy_title()}
	description={m.philosophy_description()}
>
	<div class="grid gap-6 sm:grid-cols-2">
		{#each [{ title: m.philosophy_before, image: media.before }, { title: m.philosophy_after, image: media.after }] as item (item.image.src)}<Card.Root
				><Card.Header><h3 class="text-xl font-semibold">{item.title()}</h3></Card.Header
				><Card.Content><MediaIllustration image={item.image} title={item.title()} /></Card.Content
				></Card.Root
			>{/each}
	</div>
	<Collapsible.Root
		><Collapsible.Trigger
			>{#snippet child({ props })}<Button
					{...props}
					variant="outline"
					class="h-auto min-h-11 whitespace-normal">{m.philosophy_scheme()}</Button
				>{/snippet}</Collapsible.Trigger
		><Collapsible.Content
			forceMount
			data-static-collapsible
			class="mt-6 grid gap-6 data-[state=closed]:hidden sm:grid-cols-2"
			>{#each schemes as scheme (scheme.image.src)}<Card.Root
					><Card.Header
						><h3 class="text-lg font-semibold">{scheme.title()}</h3>
						<p class="text-sm text-muted-foreground">{scheme.description()}</p></Card.Header
					><Card.Content
						><MediaIllustration
							image={scheme.image}
							title={scheme.title()}
							description={scheme.description()}
						/></Card.Content
					></Card.Root
				>{/each}</Collapsible.Content
		></Collapsible.Root
	>
</ContentSection>
<ContentSection
	id="strategy"
	eyebrow={m.strategy_eyebrow()}
	title={m.strategy_title()}
	description={m.strategy_description()}
>
	<blockquote class="max-w-3xl border-l-2 border-primary pl-5 text-xl leading-relaxed">
		{m.strategy_quote()}
	</blockquote>
	<div class="grid items-center gap-6 lg:grid-cols-2">
		<MediaIllustration image={media.strategy} title={m.strategy_vision()} />
		<div class="space-y-6">
			<Card.Root
				><Card.Header><h3 class="text-lg font-semibold">{m.strategy_technology()}</h3></Card.Header
				><Card.Content
					><p class="text-muted-foreground">{m.strategy_technology_desc()}</p></Card.Content
				></Card.Root
			><Card.Root
				><Card.Header><h3 class="text-lg font-semibold">{m.strategy_resources()}</h3></Card.Header
				><Card.Content
					><p class="text-muted-foreground">{m.strategy_resources_desc()}</p></Card.Content
				></Card.Root
			>
		</div>
	</div>
</ContentSection>
<ContentSection
	id="assessment"
	eyebrow={m.assessment_eyebrow()}
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
<ContentSection
	id="execassist"
	eyebrow={m.exec_eyebrow()}
	title={m.exec_title()}
	description={m.exec_description()}
>
	<p class="text-sm text-muted-foreground">{m.demo_notice()}</p>
	<div class="grid items-start gap-6 lg:grid-cols-2">
		<Card.Root
			><Card.Header
				><h3 class="text-xl font-semibold">{m.exec_signal()}</h3>
				<p class="text-sm text-muted-foreground">{m.exec_effectiveness()}</p></Card.Header
			><Card.Content class="space-y-4"
				>{#each execMetrics as metric (metric.label)}<div
						class="flex items-start justify-between gap-4 border-b pb-3"
					>
						<span class="min-w-0 text-sm">{metric.label()}</span><strong
							class="font-mono text-primary">{metric.value}</strong
						>
					</div>{/each}</Card.Content
			></Card.Root
		><Card.Root
			><Card.Header><h3 class="text-xl font-semibold">{m.exec_coordination()}</h3></Card.Header
			><Card.Content class="space-y-4"
				><p class="rounded-lg bg-muted p-4 text-sm leading-relaxed">{m.exec_robot()}</p>
				<p class="rounded-lg bg-muted p-4 text-sm leading-relaxed">{m.exec_ivanov()}</p>
				<Button
					href={localizeHref(resolve('/[section]', { section: 'simulator' })) + '#advisor'}
					class="h-auto min-h-11 whitespace-normal">{m.exec_demo()}</Button
				></Card.Content
			></Card.Root
		>
	</div>
	<MediaIllustration image={media.exec} previewImage={media.advisor} title={m.exec_title()} />
</ContentSection>
<ContentSection id="serviceflow" eyebrow={m.service_eyebrow()} title={m.service_title()}>
	<div class="grid gap-4 sm:grid-cols-3">
		{#each [m.service_barrier, m.service_document, m.service_time] as label (label)}<Card.Root
				><Card.Header><h3 class="text-lg font-semibold">{label()}</h3></Card.Header></Card.Root
			>{/each}
	</div>
	<MediaIllustration image={media.service} title={m.service_proactive()} /><Badge
		>{m.service_proactive()}</Badge
	>
</ContentSection>
<ContentSection id="security" eyebrow={m.security_eyebrow()} title={m.security_title()}>
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
		{#each securityPrinciples as principle (principle.title)}<Card.Root
				><Card.Header><h3 class="text-base font-semibold">{principle.title()}</h3></Card.Header
				><Card.Content
					><p class="text-sm leading-relaxed text-muted-foreground">
						{principle.description()}
					</p></Card.Content
				></Card.Root
			>{/each}
	</div>
	<figure class="space-y-4">
		<div class="grid items-center gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)]">
			<img
				src={asset(media.securitySymbol.src)}
				width={media.securitySymbol.width}
				height={media.securitySymbol.height}
				alt=""
				loading="lazy"
				class="mx-auto max-h-60 object-contain"
			/><img
				src={asset(media.securityMap.src)}
				width={media.securityMap.width}
				height={media.securityMap.height}
				alt=""
				loading="lazy"
				class="w-full object-contain"
			/>
			<div class="flex justify-center gap-4 sm:flex-col">
				{#each [media.security1, media.security2, media.security3] as image (image.src)}<img
						src={asset(image.src)}
						width={image.width}
						height={image.height}
						alt=""
						loading="lazy"
						class="mx-auto size-16 object-contain"
					/>{/each}
			</div>
		</div>
		<figcaption class="text-xs text-muted-foreground">{m.security_illustration()}</figcaption>
	</figure>
</ContentSection>
