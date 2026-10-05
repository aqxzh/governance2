<script lang="ts">
	import { onMount, tick, untrack } from 'svelte';
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import * as Tabs from '#lib/components/ui/tabs/index.js';
	import * as Collapsible from '#lib/components/ui/collapsible/index.js';
	import type { Contour } from '#lib/contours.js';
	import { storyGroups, storyGroupForHash } from '#lib/story.js';
	import { m } from '#lib/paraglide/messages.js';
	import { localizeHref } from '#lib/paraglide/runtime.js';
	import SolutionsRegistry from './SolutionsRegistry.svelte';
	import SimulatorGallery from './SimulatorGallery.svelte';
	import AdvisorDemo from './AdvisorDemo.svelte';
	import StoryExample from './StoryExample.svelte';
	import ContourVideo from './ContourVideo.svelte';
	import MediaIllustration from './MediaIllustration.svelte';
	import media from '#lib/full-media.json';
	let { contour }: { contour: Contour } = $props();
	const groups = $derived(storyGroups[contour.id]);
	// Route identity is keyed by the parent; initialise once, then retain user selection.
	let active = $state(untrack(() => storyGroups[contour.id][0].id));
	let archives = $state<Record<string, boolean>>({});
	onMount(() => {
		const sync = async () => {
			const group = storyGroupForHash(contour.id, window.location.hash.slice(1));
			if (group) {
				active = group;
				const hash = window.location.hash.slice(1);
				if (/^module-\d+$/.test(hash)) archives[group] = true;
				await tick();
				(
					document.getElementById(hash) ?? document.getElementById('topic-' + group)
				)?.scrollIntoView({ block: 'start' });
			}
		};
		void sync();
		window.addEventListener('hashchange', sync);
		return () => window.removeEventListener('hashchange', sync);
	});
	function change(value: string) {
		void goto(
			// eslint-disable-next-line svelte/no-navigation-without-resolve -- Paraglide localizes a resolved Kit route.
			localizeHref(resolve('/[section]', { section: contour.id })) + page.url.search + '#' + value,
			{ replaceState: true, noScroll: true, keepFocus: true }
		);
	}
</script>

<div class="site-container space-y-8 px-5 py-8 sm:px-7 sm:py-10">
	<Button href={localizeHref(resolve('/'))} variant="ghost">{m.back_home()}</Button>
	<header class="max-w-4xl space-y-5">
		<p class="section-eyebrow">GOVERNANCE.KZ</p>
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">{contour.title()}</h1>
		<p class="text-base leading-relaxed text-muted-foreground sm:text-lg">
			{contour.description()}
		</p>
	</header>
	<p class="max-w-4xl text-sm leading-relaxed text-muted-foreground">{m.demo_notice()}</p>
	<Tabs.Root bind:value={active} onValueChange={change}>
		<Tabs.List
			data-story-tabs
			variant="line"
			aria-label={contour.title()}
			class={'grid h-auto w-full grid-cols-1 gap-1 group-data-[orientation=horizontal]/tabs:h-auto ' +
				(groups.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3')}
			>{#each groups as group (group.id)}<Tabs.Trigger
					value={group.id}
					class="h-auto min-h-11 min-w-0 flex-1 basis-40 px-3 py-3 whitespace-normal"
					>{group.title()}</Tabs.Trigger
				>{/each}</Tabs.List
		>
		{#each groups as group (group.id)}
			<Tabs.Content
				value={group.id}
				id={'topic-' + group.id}
				data-story-panel
				class="mt-8 scroll-mt-6 space-y-8"
			>
				{#if group.id !== 'advisor'}<span id={group.id} aria-hidden="true"></span>{/if}
				{#if group.id !== 'advisor'}<header class="max-w-4xl space-y-3">
						<h2 class="text-2xl font-bold tracking-tight">{group.title()}</h2>
						<p class="text-base leading-relaxed text-muted-foreground">{group.description()}</p>
					</header>{/if}
				{#if group.id === 'research'}<StoryExample kind="research" />
				{:else if group.id === 'people'}<StoryExample kind="people" />
				{:else if group.id === 'functions'}<StoryExample kind="functions" />
				{:else if group.id === 'advisor'}<AdvisorDemo />
				{:else if group.id === 'supply'}<Card.Root
						><Card.Content class="space-y-5"
							><ContourVideo
								src="/videos/almaty.mp4"
								title={m.story_supply()}
								image={group.sources[0].image}
								poster={group.sources[0].image}
								posterClass="max-h-96"
							/><Button
								href={localizeHref(resolve('/[section]', { section: 'foodflow' }))}
								class="h-auto min-h-11 whitespace-normal">{m.foodflow_link()}</Button
							></Card.Content
						></Card.Root
					>
				{:else if group.id === 'scenarios'}<div class="grid gap-5 sm:grid-cols-2">
						{#each [group.sources[0], group.sources[1]] as source, i (source.id)}<Card.Root
								><Card.Header
									><h3 class="text-xl font-semibold">
										{i === 0 ? m.story_market() : m.story_organisation()}
									</h3>
									<p class="text-sm leading-relaxed text-muted-foreground">
										{source.description()}
									</p></Card.Header
								><Card.Content
									><MediaIllustration
										image={source.image}
										title={source.title()}
										description={source.description()}
									/></Card.Content
								></Card.Root
							>{/each}
					</div>
				{:else if group.id === 'data'}
					<div class="grid gap-5 sm:grid-cols-2">
						{#each group.sources as source (source.id)}<Card.Root
								><Card.Header
									><h3 class="text-xl font-semibold">{source.title()}</h3>
									<p class="text-sm leading-relaxed text-muted-foreground">
										{source.description()}
									</p></Card.Header
								><Card.Content
									><MediaIllustration
										image={source.image}
										title={source.title()}
										description={source.description()}
									/></Card.Content
								></Card.Root
							>{/each}
					</div>
				{:else if group.id === 'bots'}<div class="space-y-5">
						<h3 class="text-xl font-semibold">{m.exec_coordination()}</h3>
						<p class="max-w-3xl rounded-lg bg-muted p-4 text-sm leading-relaxed">
							{m.exec_robot()}
						</p>
						<p class="max-w-3xl rounded-lg bg-muted p-4 text-sm leading-relaxed">
							{m.exec_ivanov()}
						</p>
						<MediaIllustration image={media.exec} title={m.exec_title()} />
					</div>
				{/if}
				<Collapsible.Root
					open={archives[group.id] ?? false}
					onOpenChange={(value) => (archives[group.id] = value)}
					><Collapsible.Trigger
						>{#snippet child({ props })}<Button
								{...props}
								variant="outline"
								class="h-auto min-h-11 whitespace-normal">{m.story_materials()}</Button
							>{/snippet}</Collapsible.Trigger
					><Collapsible.Content
						forceMount
						data-static-collapsible
						class="mt-6 space-y-8 data-[state=closed]:hidden"
					>
						<p class="text-sm leading-relaxed text-muted-foreground">{m.demo_notice()}</p>
						<SolutionsRegistry rows={group.sources} title={group.title()} />
						{#if group.presentations.length}<SimulatorGallery indices={group.presentations} />{/if}
						{#if contour.video && (group.id === 'functions' || group.id === 'bots')}<ContourVideo
								src={contour.video}
								title={contour.title()}
								image={contour.image}
							/>{/if}
					</Collapsible.Content></Collapsible.Root
				>
			</Tabs.Content>
		{/each}
	</Tabs.Root>
</div>
