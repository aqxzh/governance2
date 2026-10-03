<script lang="ts">
	import * as Table from '#lib/components/ui/table/index.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import SolutionPreview from './SolutionPreview.svelte';
	import { m } from '#lib/paraglide/messages.js';
	import type { Solution } from '#lib/contours.js';

	let { rows, title }: { rows: readonly Solution[]; title: string } = $props();
</script>

<div class="hidden md:block">
	<Table.Root class="table-fixed">
		<Table.Caption class="sr-only">{m.registry_caption({ title })}</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head scope="col" class="w-12">{m.registry_number()}</Table.Head>
				<Table.Head scope="col" class="w-1/4">{m.registry_solution()}</Table.Head>
				<Table.Head scope="col">{m.registry_description()}</Table.Head>
				<Table.Head scope="col" class="w-1/5">{m.registry_feature()}</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each rows as solution (solution.id)}
				<Table.Row data-solution-id={solution.id}>
					<Table.Cell class="align-top font-mono text-xs text-primary">{solution.number}</Table.Cell
					>
					<Table.Cell class="align-top whitespace-normal"><SolutionPreview {solution} /></Table.Cell
					>
					<Table.Cell class="py-4 align-top leading-relaxed whitespace-normal text-muted-foreground"
						>{solution.description()}</Table.Cell
					>
					<Table.Cell class="py-4 align-top leading-relaxed whitespace-normal text-muted-foreground"
						>{solution.feature()}</Table.Cell
					>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>

<div class="grid gap-4 md:hidden" aria-label={m.registry_caption({ title })}>
	{#each rows as solution (solution.id)}
		<Card.Root data-solution-id={solution.id}>
			<Card.Header>
				<span class="font-mono text-xs text-primary">{solution.number}</span>
				<Card.Title><h4><SolutionPreview {solution} /></h4></Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm leading-relaxed text-muted-foreground">{solution.description()}</p>
				<dl class="mt-4 text-sm">
					<dt class="font-medium">{m.registry_feature()}</dt>
					<dd class="mt-1 leading-relaxed text-muted-foreground">{solution.feature()}</dd>
				</dl>
			</Card.Content>
		</Card.Root>
	{/each}
</div>
