<script lang="ts">
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import { m } from '#lib/paraglide/messages.js';

	const contours = [
		{ id: 'simulator', number: '01', title: m.nav_simulator, description: m.simulator_description },
		{
			id: 'diagnostics',
			number: '02',
			title: m.nav_diagnostics,
			description: m.diagnostics_description
		},
		{
			id: 'coordination',
			number: '03',
			title: m.nav_coordination,
			description: m.coordination_description
		}
	] as const;
</script>

<section aria-labelledby="contours-title" class="site-container px-5 py-12 sm:px-7 sm:py-14">
	<p class="mb-4 section-eyebrow">{m.contours_eyebrow()}</p>
	<h2
		id="contours-title"
		class="mb-4 text-2xl leading-tight font-bold tracking-tight text-balance sm:text-3xl"
	>
		{m.contours_title()}
	</h2>
	<p class="mb-7 max-w-2xl text-sm leading-relaxed text-muted-foreground">
		{m.reference_description()}
	</p>
	<div class="grid gap-5 lg:grid-cols-3">
		{#each contours as contour (contour.id)}
			<Card.Root id={contour.id} class="scroll-mt-6 gap-4 rounded-sm py-5 shadow-none">
				<Card.Header class="gap-2 px-5">
					<span class="font-mono text-xs text-primary">{contour.number}</span>
					<Card.Title><h3 class="text-lg font-semibold">{contour.title()}</h3></Card.Title>
				</Card.Header>
				<Card.Content class="flex-1 px-5"
					><p class="text-sm leading-relaxed text-muted-foreground">
						{contour.description()}
					</p></Card.Content
				>
				<Card.Footer class="px-5">
					<Button
						href={'http://localhost:8443/#' + contour.id}
						variant="link"
						class="h-auto min-h-9 gap-2 p-0 text-sm whitespace-normal"
					>
						{m.reference_link()}
						<ArrowUpRightIcon aria-hidden="true" />
					</Button>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</section>
