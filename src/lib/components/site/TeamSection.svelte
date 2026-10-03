<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import * as Card from '#lib/components/ui/card/index.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import * as Separator from '#lib/components/ui/separator/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import { teamStages, teamOwner, teamPrinciples } from '#lib/team.js';
</script>

<section
	id="team"
	aria-labelledby="team-title"
	class="site-container border-t px-5 py-12 sm:px-7 sm:py-14"
>
	<p class="mb-4 section-eyebrow">{m.team_eyebrow()}</p>
	<h2
		id="team-title"
		class="mb-4 text-2xl leading-tight font-bold tracking-tight text-balance sm:text-3xl"
	>
		{m.team_title()}
	</h2>
	<p class="max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
		{m.team_description()}
	</p>

	<div
		class="my-7 flex flex-wrap items-center gap-3 font-mono text-xs tracking-wide text-muted-foreground uppercase"
	>
		<p>{m.team_input()}</p>
		<Separator.Root class="hidden min-w-8 flex-1 lg:block" />
		<ArrowRightIcon aria-hidden="true" class="hidden size-4 shrink-0 text-primary lg:block" />
		<p class="hidden lg:block">{m.team_output()}</p>
	</div>

	<ol class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
		{#each teamStages as stage (stage.number)}
			<li class="min-w-0">
				<Card.Root class="h-full" data-team-stage={stage.number}>
					<Card.Header>
						<div class="flex flex-wrap items-center gap-3">
							<Badge variant="outline" class="font-mono">{stage.number}</Badge>
							<Card.Title><h3 class="text-lg">{stage.phase()}</h3></Card.Title>
						</div>
						<p class="text-sm font-medium text-primary">{stage.role()}</p>
					</Card.Header>
					<Card.Content class="flex-1 space-y-4">
						<p class="text-sm leading-relaxed">{stage.description()}</p>
						<dl class="text-sm">
							<dt class="font-mono text-xs tracking-wide text-muted-foreground uppercase">
								{m.team_method_label()}
							</dt>
							<dd class="mt-2 leading-relaxed text-muted-foreground">{stage.method()}</dd>
						</dl>
					</Card.Content>
					<Card.Footer class="flex-col items-start gap-3">
						<Separator.Root />
						<dl class="text-sm">
							<dt class="font-mono text-xs tracking-wide text-muted-foreground uppercase">
								{m.team_artifact_label()}
							</dt>
							<dd class="mt-2 flex items-start gap-2 leading-relaxed">
								<ArrowRightIcon aria-hidden="true" class="mt-1 size-4 shrink-0 text-primary" />
								<span>{stage.artifact()}</span>
							</dd>
						</dl>
					</Card.Footer>
				</Card.Root>
			</li>
		{/each}
	</ol>

	<div aria-hidden="true" class="hidden h-6 grid-cols-4 gap-5 lg:grid">
		{#each teamStages as stage (stage.number)}<span class="mx-auto h-full border-l border-dashed"
			></span>{/each}
	</div>
	<Card.Root class="mt-5 lg:mt-0" data-team-owner>
		<Card.Content class="grid items-center gap-5 lg:grid-cols-3">
			<div class="flex items-center gap-3">
				<Badge variant="outline" class="font-mono">{teamOwner.number}</Badge>
				<Card.Title><h3 class="text-lg">{teamOwner.role()}</h3></Card.Title>
			</div>
			<p class="text-sm leading-relaxed text-muted-foreground">{teamOwner.description()}</p>
			<dl class="text-sm">
				<dt class="font-mono text-xs tracking-wide text-muted-foreground uppercase">
					{m.team_artifact_label()}
				</dt>
				<dd class="mt-2 leading-relaxed">{teamOwner.artifact()}</dd>
			</dl>
		</Card.Content>
	</Card.Root>

	<p class="mt-6 font-mono text-xs tracking-wide text-muted-foreground uppercase lg:hidden">
		{m.team_output()}
	</p>
	<ul class="mt-6 grid gap-4 sm:grid-cols-3">
		{#each teamPrinciples as principle, index (index)}
			<li class="min-w-0">
				<Card.Root class="h-full" data-team-principle>
					<Card.Content class="flex items-start gap-3">
						<span class="font-mono text-xs text-primary">{String(index + 1).padStart(2, '0')}</span>
						<p class="text-sm leading-relaxed font-medium">{principle()}</p>
					</Card.Content>
				</Card.Root>
			</li>
		{/each}
	</ul>
</section>
