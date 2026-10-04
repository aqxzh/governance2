<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import * as Collapsible from '#lib/components/ui/collapsible/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import { localizeHref } from '#lib/paraglide/runtime.js';
	import { schemes, securityPrinciples } from '#lib/remaining.js';
	import media from '#lib/full-media.json';
	import ContentSection from './ContentSection.svelte';
	import MediaIllustration from './MediaIllustration.svelte';
	import ContoursSection from './ContoursSection.svelte';
	import TeamSection from './TeamSection.svelte';
</script>

<ContentSection
	id="infographics"
	eyebrow={m.philosophy_before() + ' → ' + m.philosophy_after()}
	title={m.story_problem()}
	description={m.story_problem_desc()}
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
<ContoursSection />
<ContentSection
	id="example"
	eyebrow={m.story_research()}
	title={m.story_example()}
	description={m.story_example_desc()}
>
	<div class="grid items-center gap-6 md:grid-cols-2">
		<img
			src={asset(media.process.src)}
			width={media.process.width}
			height={media.process.height}
			alt={m.process_description()}
			loading="lazy"
			class="w-full rounded-lg object-contain"
		/>
		<div class="space-y-5">
			<p class="text-sm leading-relaxed text-muted-foreground">{m.demo_notice()}</p>
			<Button
				href={localizeHref(resolve('/[section]', { section: 'simulator' })) + '#research'}
				class="h-auto min-h-11 whitespace-normal">{m.story_method()}</Button
			>
		</div>
	</div>
</ContentSection>
<TeamSection />
<ContentSection id="security" eyebrow={m.security_title()} title={m.story_trust()}>
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

	<Collapsible.Root
		><Collapsible.Trigger
			>{#snippet child({ props })}<Button
					{...props}
					variant="outline"
					class="h-auto min-h-11 whitespace-normal">{m.strategy_title()}</Button
				>{/snippet}</Collapsible.Trigger
		><Collapsible.Content
			forceMount
			data-static-collapsible
			id="strategy"
			class="mt-6 space-y-6 data-[state=closed]:hidden"
		>
			<figure class="space-y-4">
				<div
					class="grid items-center gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)]"
				>
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
			<p class="text-sm leading-relaxed text-muted-foreground">{m.strategy_description()}</p>
			<blockquote class="border-l-2 border-primary pl-5 text-lg">{m.strategy_quote()}</blockquote>
			<MediaIllustration image={media.strategy} title={m.strategy_vision()} />
			<div class="grid gap-5 sm:grid-cols-2">
				<div>
					<h3 class="font-semibold">{m.strategy_technology()}</h3>
					<p class="mt-2 text-sm text-muted-foreground">{m.strategy_technology_desc()}</p>
				</div>
				<div>
					<h3 class="font-semibold">{m.strategy_resources()}</h3>
					<p class="mt-2 text-sm text-muted-foreground">{m.strategy_resources_desc()}</p>
				</div>
			</div></Collapsible.Content
		></Collapsible.Root
	>
</ContentSection>
