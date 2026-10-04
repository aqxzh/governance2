<script lang="ts">
	import { onMount, tick } from 'svelte';
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { asset, resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import * as Tabs from '#lib/components/ui/tabs/index.js';
	import { contours } from '#lib/contours.js';
	import { m } from '#lib/paraglide/messages.js';
	import { localizeHref } from '#lib/paraglide/runtime.js';
	import SolutionsRegistry from './SolutionsRegistry.svelte';
	import ContourVideo from './ContourVideo.svelte';

	let active = $state('simulator');
	onMount(() => {
		const syncHash = async () => {
			const id = window.location.hash.slice(1).replace(/^contours-/, '');
			if (!contours.some((contour) => contour.id === id)) return;
			active = id;
			await tick();
			document.getElementById('contours-' + id)?.scrollIntoView({ block: 'start' });
		};
		void syncHash();
		window.addEventListener('hashchange', syncHash);
		return () => window.removeEventListener('hashchange', syncHash);
	});
</script>

<section
	id="contours"
	aria-labelledby="contours-title"
	class="site-container px-5 py-12 sm:px-7 sm:py-14"
>
	<p class="mb-4 section-eyebrow">{m.contours_eyebrow()}</p>
	<h2
		id="contours-title"
		class="mb-7 text-2xl leading-tight font-bold tracking-tight text-balance sm:text-3xl"
	>
		{m.contours_title()}
	</h2>
	<Tabs.Root
		bind:value={active}
		onValueChange={(value) => {
			if (browser) {
				// eslint-disable-next-line svelte/no-navigation-without-resolve -- Paraglide localizes the resolved Kit root.
				void goto(localizeHref(resolve('/')) + page.url.search + '#contours-' + value, {
					replaceState: true,
					noScroll: true,
					keepFocus: true
				});
			}
		}}
	>
		<Tabs.List
			variant="line"
			aria-label={m.contours_title()}
			class="w-full items-stretch gap-2 group-data-[orientation=horizontal]/tabs:h-auto"
			data-contour-tabs
		>
			{#each contours as contour (contour.id)}
				<Tabs.Trigger
					value={contour.id}
					aria-label={contour.title() + ' · ' + m.solutions_count({ count: contour.rows.length })}
					class="h-auto min-w-0 flex-col items-start gap-2 px-1 py-3 whitespace-normal sm:px-2"
				>
					<span
						class="flex max-w-full flex-col items-start gap-1 sm:flex-row sm:items-baseline sm:gap-x-2"
					>
						<span class="font-mono text-xs text-primary">{contour.number}</span>
						<span class="min-w-0 text-xs sm:text-sm">
							{#if contour.id === 'simulator'}
								<span class="sm:hidden">{m.simulator_tab_label()}</span>
								<span class="hidden sm:inline">{contour.title()}</span>
							{:else}
								{contour.title()}
							{/if}
						</span>
					</span>
					<span class="text-xs text-muted-foreground"
						>{m.solutions_count({ count: contour.rows.length })}</span
					>
				</Tabs.Trigger>
			{/each}
		</Tabs.List>
		{#each contours as contour (contour.id)}
			<Tabs.Content
				value={contour.id}
				id={'contours-' + contour.id}
				class="mt-6 scroll-mt-6 space-y-6"
				data-contour-panel
			>
				<Card.Root class="relative isolate gap-0">
					<img
						src={asset(contour.image.src)}
						alt=""
						aria-hidden="true"
						loading="lazy"
						width={contour.image.width}
						height={contour.image.height}
						class="absolute inset-0 -z-10 size-full object-cover"
					/>
					<div
						aria-hidden="true"
						class="absolute inset-0 -z-10 bg-linear-to-r from-hero-surface/90 to-hero-surface/75"
					></div>
					<Card.Content
						class="flex min-h-72 flex-col items-start justify-center gap-4 py-8 sm:min-h-80 sm:py-10"
					>
						<h3
							class="max-w-2xl text-2xl font-semibold tracking-tight text-hero-foreground sm:text-3xl"
						>
							{contour.title()}
						</h3>
						<p class="max-w-2xl text-sm leading-relaxed text-hero-muted-foreground sm:text-base">
							{contour.description()}
						</p>
						{#if contour.video}
							<ContourVideo src={contour.video} title={contour.title()} image={contour.image} />
						{:else}
							<Button
								href={localizeHref(resolve('/[section]', { section: 'simulator' }))}
								size="lg"
								class="h-auto min-h-11 whitespace-normal"
								>{m.simulator_demo_cta()}<ArrowUpRightIcon aria-hidden="true" /></Button
							>
						{/if}
					</Card.Content>
				</Card.Root>
				<SolutionsRegistry rows={contour.rows} title={contour.title()} />
				<div
					class="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm text-muted-foreground"
				>
					<p>{contour.description()}</p>
					<Button
						href={localizeHref(resolve('/[section]', { section: contour.id }))}
						variant="link"
						class="h-auto min-h-11 p-0 whitespace-normal"
						>{m.open_contour()}<ArrowUpRightIcon aria-hidden="true" /></Button
					>
				</div>
			</Tabs.Content>
		{/each}
	</Tabs.Root>
</section>
