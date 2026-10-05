<script lang="ts">
	import * as m from '#lib/paraglide/messages.js';
	import * as Card from '#lib/components/ui/card/index.js';
	let { variant, title }: { variant: string; title: string } = $props();
	const steps = [
		{
			id: 1,
			text: m.inf_diagram_step_1,
			ref: m.inf_diagram_ref_1,
			number: m.inf_diagram_number_1,
			role: m.inf_diagram_citizen
		},
		{
			id: 2,
			text: m.inf_diagram_step_2,
			ref: m.inf_diagram_ref_2,
			number: m.inf_diagram_number_2,
			role: m.inf_diagram_reception
		},
		{
			id: 3,
			text: m.inf_diagram_step_3,
			ref: m.inf_diagram_ref_3,
			number: m.inf_diagram_number_3,
			role: m.inf_diagram_reception
		},
		{
			id: 4,
			text: m.inf_diagram_step_4,
			ref: m.inf_diagram_ref_4,
			number: m.inf_diagram_number_4,
			role: m.inf_diagram_systems
		},
		{
			id: 5,
			text: m.inf_diagram_step_5,
			ref: m.inf_diagram_ref_5,
			number: m.inf_diagram_number_5,
			role: m.inf_diagram_provider
		},
		{
			id: 6,
			text: m.inf_diagram_step_6,
			ref: m.inf_diagram_ref_6,
			number: m.inf_diagram_number_6,
			role: m.inf_diagram_provider
		},
		{
			id: 7,
			text: m.inf_diagram_step_7,
			ref: m.inf_diagram_ref_7,
			number: m.inf_diagram_number_7,
			role: m.inf_diagram_provider
		},
		{
			id: 8,
			text: m.inf_diagram_step_8,
			ref: m.inf_diagram_ref_8,
			number: m.inf_diagram_number_8,
			role: m.inf_diagram_systems
		},
		{
			id: 9,
			text: m.inf_diagram_step_9,
			ref: m.inf_diagram_ref_9,
			number: m.inf_diagram_number_9,
			role: m.inf_diagram_systems
		},
		{
			id: 10,
			text: m.inf_diagram_step_10,
			ref: m.inf_diagram_ref_10,
			number: m.inf_diagram_number_10,
			role: m.inf_diagram_provider
		},
		{
			id: 11,
			text: m.inf_diagram_step_11,
			ref: m.inf_diagram_ref_11,
			number: m.inf_diagram_number_11,
			role: m.inf_diagram_provider
		},
		{
			id: 12,
			text: m.inf_diagram_step_12,
			ref: m.inf_diagram_ref_12,
			number: m.inf_diagram_number_12,
			role: m.inf_diagram_provider
		},
		{
			id: 13,
			text: m.inf_diagram_step_13,
			ref: m.inf_diagram_ref_13,
			number: m.inf_diagram_number_13,
			role: m.inf_diagram_provider
		},
		{
			id: 14,
			text: m.inf_diagram_step_14,
			ref: m.inf_diagram_ref_14,
			number: m.inf_diagram_number_14,
			role: m.inf_diagram_provider
		},
		{
			id: 15,
			text: m.inf_diagram_step_15,
			ref: m.inf_diagram_ref_15,
			number: m.inf_diagram_number_15,
			role: m.inf_diagram_citizen
		},
		{
			id: 16,
			text: m.inf_diagram_step_16,
			ref: m.inf_diagram_ref_16,
			number: m.inf_diagram_number_16,
			role: m.inf_diagram_provider
		},
		{
			id: 17,
			text: m.inf_diagram_step_17,
			ref: m.inf_diagram_ref_17,
			number: m.inf_diagram_number_17,
			role: m.inf_diagram_external
		}
	];
	const edges = [
		[1, 2],
		[2, 3],
		[3, 4],
		[3, 5],
		[4, 5],
		[5, 6],
		[6, 7],
		[6, 8],
		[8, 9],
		[9, 7],
		[10, 11],
		[11, 12],
		[12, 13],
		[12, 14],
		[13, 15],
		[14, 15],
		[15, 16],
		[16, 17]
	];
	let visible = $derived(steps.filter((s) => (variant === 'scheme1' ? s.id <= 9 : s.id >= 10)));
</script>

{#snippet person(x: number, y: number)}
	<g transform={`translate(${x} ${y})`} fill="none" stroke="currentColor" stroke-width="3">
		<circle cy="-12" r="9" /><path d="M-18 22v-8a18 18 0 0 1 36 0v8z" />
	</g>
{/snippet}
{#snippet profiles()}
	<g fill="none" stroke="currentColor" stroke-width="2">
		{#each [0, 1, 2, 3] as n (n)}
			<g transform={`translate(${30 + n * 17} ${65 + n * 12})`}
				><rect width="65" height="90" rx="5" /><circle cx="20" cy="25" r="8" /><path
					d="M8 45q12-20 24 0M40 20h16M40 30h16M10 60h45M10 72h45"
				/></g
			>
		{/each}
	</g>
{/snippet}
<figure class="space-y-4 text-foreground">
	{#if title}<h3 class="text-lg font-semibold">{title}</h3>{/if}
	{#if variant === 'scheme1' || variant === 'scheme2'}
		<p class="text-lg font-semibold">{m.inf_diagram_service()}</p>
		<p class="text-sm text-muted-foreground">{m.inf_diagram_meta()}</p>
		<p class="text-sm text-muted-foreground">{m.inf_diagram_source()}</p>
		<p class="text-sm text-muted-foreground">{m.inf_diagram_legend()}</p>
		{#if variant === 'scheme2'}<p class="font-medium">{m.inf_diagram_branch()}</p>
			<p class="text-sm">
				{m.inf_diagram_yes()} → {m.inf_diagram_number_10()} · {m.inf_diagram_no()} → {m.inf_diagram_number_13()}
			</p>{/if}
		<ol class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
			{#each visible as step (step.id)}
				<li class="min-w-0">
					<Card.Root class="h-full"
						><Card.Content class="space-y-3">
							<p class="text-sm text-muted-foreground">{step.role()}</p>
							<Card.Title class="text-base leading-relaxed"
								><span class="text-primary">{step.number()}.</span> {step.text()}</Card.Title
							>
							{#if step.id === 6 || step.id === 12}<p class="text-sm text-muted-foreground">
									{m.inf_diagram_gap()}
								</p>{/if}
							{#if step.ref()}<p class="text-sm text-muted-foreground">{step.ref()}</p>{/if}
							<div class="flex flex-wrap items-center gap-2 text-sm">
								{#each edges.filter(([from]) => from === step.id) as edge (edge[1])}
									<svg viewBox="0 0 40 16" class="h-4 w-10 text-primary" aria-hidden="true"
										><path
											d="M1 8h35m-7-6 7 6-7 6"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										/></svg
									>
									{#if step.id === 6 || step.id === 12}<span
											>{edge[1] === 7 || edge[1] === 14
												? m.inf_diagram_no()
												: m.inf_diagram_yes()}</span
										>{/if}
									<span>{steps[edge[1] - 1].number()}</span>
								{/each}
							</div>
						</Card.Content></Card.Root
					>
				</li>
			{/each}
		</ol>
	{:else if variant === 'process'}
		<svg
			viewBox="0 0 800 500"
			class="w-full text-primary"
			role="img"
			aria-label={m.inf_diagram_process_aria()}
		>
			<g fill="none" stroke="currentColor" stroke-width="2">
				{#each [65, 145, 225, 305, 385] as y (y)}<rect
						x="25"
						y={y - 25}
						width="95"
						height="55"
						rx="8"
					/><path
						d={`M120 ${y} C240 ${y} 230 250 335 250 M455 250 C590 250 540 ${y} 620 ${y}`}
					/>{/each}
				<circle cx="395" cy="250" r="62" /><rect
					x="362"
					y="223"
					width="66"
					height="50"
					rx="16"
				/><circle cx="380" cy="245" r="4" /><circle cx="410" cy="245" r="4" /><path
					d="M385 260h20M395 223v-15"
				/>
				<rect x="525" y="160" width="16" height="180" rx="5" />
				<ellipse cx="70" cy="145" rx="26" ry="10" /><path
					d="M44 145v23q26 20 52 0v-23M55 245v-18m15 18v-30m15 30v-23M48 78h42m-42 10h42"
				/>
				<circle cx="70" cy="305" r="10" /><path d="M52 325q18-20 36 0" /><circle
					cx="70"
					cy="385"
					r="17"
				/>
				{#each [65, 145, 225, 305, 385] as y, i (y)}
					{@render person(650, y)}{#if i === 1 || i === 3}{@render person(
							690,
							y
						)}{/if}{#if i === 3}{@render person(730, y)}{/if}
					<path d={`M750 ${y - 10}h25m-25 10h18m-12 20 5 5 10-13`} />
				{/each}
				<path d="M70 420v40h650v-40M300 460v-30h190v30" stroke-dasharray="5 5" />
			</g>
		</svg>
	{:else if variant === 'securityMap'}
		<svg
			viewBox="0 0 800 300"
			class="w-full text-primary"
			role="img"
			aria-label={m.inf_diagram_security_aria()}
		>
			{@render profiles()}
			<g fill="none" stroke="currentColor" stroke-width="3"
				><path
					d="M155 150h100m-12-10 12 10-12 10M290 55h240l-95 140v60l-50 25v-85zM530 150h80v-90h65m-65 90h65m-65 0v90h65"
					stroke-linejoin="round"
				/></g
			>
			{@render person(715, 60)}{@render person(715, 150)}{@render person(715, 240)}
		</svg>
		<ul class="flex flex-wrap gap-3 text-sm">
			{#each [m.inf_diagram_skills, m.inf_diagram_experience, m.inf_diagram_languages, m.inf_diagram_soft, m.inf_diagram_certificates, m.inf_diagram_projects, m.inf_diagram_recommendations, m.inf_diagram_location] as label (label)}<li
					class="rounded-md border border-border bg-muted px-3 py-2"
				>
					{label()}
				</li>{/each}
		</ul>
		<p class="text-sm text-muted-foreground">{m.inf_diagram_filter_gap()}</p>
	{:else if variant === 'securitySymbol'}
		<svg
			viewBox="0 0 200 230"
			class="mx-auto w-full max-w-64 text-primary"
			role="img"
			aria-label={title}>{@render profiles()}</svg
		>
	{:else if ['security1', 'security2', 'security3'].includes(variant)}
		<svg
			viewBox="0 0 120 120"
			class="mx-auto w-full max-w-48 text-primary"
			role="img"
			aria-label={title}
		>
			<g fill="none" stroke="currentColor" stroke-width="3"
				><circle cx="55" cy="55" r="50" /><circle cx="55" cy="55" r="41" />{@render person(55, 53)}
				{#if variant === 'security1'}<circle cx="95" cy="95" r="20" /><path
						d="m84 94 8 8 15-18"
					/>{:else if variant === 'security2'}<rect
						x="75"
						y="78"
						width="42"
						height="32"
						rx="4"
					/><circle cx="86" cy="88" r="4" /><path
						d="M81 100q5-12 10 0m8-13h12m-12 9h12"
					/>{:else}<path d="M76 78h40v27H94l-10 10v-10h-8zM84 87h23m-23 9h15" />{/if}</g
			>
		</svg>
	{:else}
		<svg viewBox="0 0 600 160" class="w-full text-primary" role="img" aria-label={title}
			><g fill="none" stroke="currentColor" stroke-width="2"
				><path d="M70 80h460" />{#each [70, 220, 380, 530] as x (x)}<circle
						cx={x}
						cy="80"
						r="32"
					/>{/each}<path d="m520 70 10 10-10 10" /></g
			></svg
		>
	{/if}
	{#if title}<figcaption class="text-sm text-muted-foreground">
			{m.inf_diagram_caption()}
		</figcaption>{/if}
</figure>
