<script lang="ts">
	/**
	 * Market infographic family reconstructed from the React reference
	 * `src/simulator/slides/module-{1,2,3,4}` (demand / supply / portfolio /
	 * ecosystem). Text panels are HTML (shadcn Cards/Tables), numeric charts use
	 * MiniChart (LayerChart), maps are schematic SVG reconstructions — never the
	 * original screenshots. All controls from the source demo are rendered as
	 * non-interactive illustrative chips.
	 */
	import { m } from '#lib/paraglide/messages.js';
	import { asset } from '$app/paths';
	import { getLocale } from '#lib/paraglide/runtime.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import * as Table from '#lib/components/ui/table/index.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import MiniChart from './MiniChart.svelte';
	import PortfolioTrajectory from './PortfolioTrajectory.svelte';

	import ClockIcon from '@lucide/svelte/icons/clock';
	import FactoryIcon from '@lucide/svelte/icons/factory';
	import LightbulbIcon from '@lucide/svelte/icons/lightbulb';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import RouteIcon from '@lucide/svelte/icons/route';
	import SparklesIcon from '@lucide/svelte/icons/sparkles';
	import StoreIcon from '@lucide/svelte/icons/store';
	import TrendingDownIcon from '@lucide/svelte/icons/trending-down';
	import TrendingUpIcon from '@lucide/svelte/icons/trending-up';
	import TriangleAlertIcon from '@lucide/svelte/icons/triangle-alert';
	import TruckIcon from '@lucide/svelte/icons/truck';
	import WarehouseIcon from '@lucide/svelte/icons/warehouse';

	type Variant = 'demand' | 'supply' | 'portfolio' | 'ecosystem';

	let { variant, title }: { variant: Variant; title: string } = $props();

	const instanceId = $props.id();
	function monthShort(m: number) {
		return new Intl.DateTimeFormat(getLocale(), { month: 'short' }).format(new Date(2026, m, 1));
	}
</script>

{#snippet chip({
	label,
	active = false,
	muted = false
}: {
	label: string;
	active?: boolean;
	muted?: boolean;
})}
	<span
		class:inline-flex={true}
		class:items-center={true}
		class:gap-1.5={true}
		class:whitespace-normal={true}
		class:rounded-full={true}
		class:border={true}
		class:px-3={true}
		class:py-1={true}
		class:text-xs={true}
		class:bg-primary={active}
		class:text-primary-foreground={active}
		class:border-primary={active}
		class:bg-background={!active}
		class:text-muted-foreground={!active}
		class:border-border={!active}
		class:opacity-60={muted}>{label}</span
	>
{/snippet}

{#snippet statRow({ label, value }: { label: string; value: string })}
	<div class="flex flex-wrap items-baseline justify-between gap-2 text-sm">
		<span class="text-muted-foreground">{label}</span>
		<span class="font-semibold tabular-nums">{value}</span>
	</div>
{/snippet}

{#snippet demoNote()}
	<p class="text-xs text-muted-foreground">{m.inf_market_demo_note()}</p>
{/snippet}

<section class="space-y-4 text-sm" aria-label={title}>
	<h3 class="text-lg font-semibold tracking-tight sm:text-xl">{title}</h3>

	{#if variant === 'demand'}
		{@render demand()}
	{:else if variant === 'supply'}
		{@render supply()}
	{:else if variant === 'portfolio'}
		{@render portfolio()}
	{:else}
		{@render ecosystem()}
	{/if}

	{@render demoNote()}
</section>

<!-- ==================== DEMAND (module 1) ===================== -->
{#snippet demand()}
	<p class="text-xs text-muted-foreground">{m.inf_market_schematic_note()}</p>
	<p class="max-w-prose text-muted-foreground">{m.inf_market_demand_subtitle()}</p>

	<!-- Source top-level tabs, reproduced as illustrative chips -->
	<div class="flex flex-wrap gap-2">
		{@render chip({ label: m.inf_market_demand_tab_map(), active: true })}
		{@render chip({ label: m.inf_market_demand_tab_demographics() })}
		{@render chip({ label: m.inf_market_demand_tab_stores() })}
		{@render chip({ label: m.inf_market_demand_tab_scenarios() })}
		{@render chip({ label: m.inf_market_demand_tab_competitors() })}
	</div>

	<div class="grid gap-4 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
		<!-- Demand map -->
		<Card.Root>
			<Card.Header class="flex-row flex-wrap items-center justify-between gap-2 space-y-0">
				<Card.Title class="text-base">{m.inf_market_demand_heat_title()}</Card.Title>
				<div class="flex gap-1">
					{@render chip({ label: m.inf_market_demand_toggle_map(), active: true })}
					{@render chip({ label: m.inf_market_demand_toggle_satellite() })}
				</div>
			</Card.Header>
			<Card.Content class="space-y-3">
				<svg
					viewBox="0 0 900 520"
					role="img"
					aria-label="{m.inf_market_demand_heat_title()} — {m.inf_market_city_astana()}"
					class="w-full rounded-lg border bg-muted/30"
				>
					<defs>
						<radialGradient id={instanceId + '-heat-red'}
							><stop offset="0%" stop-color="var(--primary)" stop-opacity="0.55" /><stop
								offset="100%"
								stop-color="var(--primary)"
								stop-opacity="0"
							/></radialGradient
						>
						<radialGradient id={instanceId + '-heat-purple'}
							><stop
								offset="0%"
								stop-color="color-mix(in oklab, var(--primary) 65%, transparent)"
								stop-opacity="0.45"
							/><stop
								offset="100%"
								stop-color="color-mix(in oklab, var(--primary) 65%, transparent)"
								stop-opacity="0"
							/></radialGradient
						>
						<radialGradient id={instanceId + '-heat-blue'}
							><stop
								offset="0%"
								stop-color="color-mix(in oklab, var(--primary) 35%, transparent)"
								stop-opacity="0.4"
							/><stop
								offset="100%"
								stop-color="color-mix(in oklab, var(--primary) 35%, transparent)"
								stop-opacity="0"
							/></radialGradient
						>
					</defs>
					<!-- river -->
					<path
						d="M20 430 C160 380 220 470 360 450 C480 435 520 470 640 455"
						fill="none"
						stroke="color-mix(in oklab, var(--primary) 25%, var(--background))"
						stroke-width="16"
						stroke-linecap="round"
						opacity="0.7"
					/>
					<!-- heat zones: hot NW band across Saryarka, purple core, blue east -->
					<ellipse cx="240" cy="180" rx="200" ry="120" fill={`url(#${instanceId}-heat-red)`} />
					<ellipse cx="420" cy="240" rx="180" ry="110" fill={`url(#${instanceId}-heat-red)`} />
					<ellipse cx="360" cy="300" rx="170" ry="100" fill={`url(#${instanceId}-heat-purple)`} />
					<ellipse cx="620" cy="330" rx="160" ry="100" fill={`url(#${instanceId}-heat-blue)`} />
					<ellipse cx="700" cy="170" rx="140" ry="90" fill={`url(#${instanceId}-heat-blue)`} />
					<!-- district labels -->
					<g class="fill-muted-foreground text-[15px]" style="letter-spacing:0.14em">
						<text x="230" y="95" text-anchor="middle"
							>{m.inf_market_demand_district_saryarka().toUpperCase()}</text
						>
						<text x="640" y="105" text-anchor="middle"
							>{m.inf_market_demand_district_almaty().toUpperCase()}</text
						>
						<text x="400" y="480" text-anchor="middle"
							>{m.inf_market_demand_district_yesil().toUpperCase()}</text
						>
					</g>
					<text x="450" y="255" text-anchor="middle" class="fill-foreground text-[24px] font-bold"
						>{m.inf_market_city_astana()}</text
					>
					<!-- stores: ours (blue pins), competitor (grey) -->
					{#each [{ x: 250, y: 165 }, { x: 350, y: 210 }, { x: 545, y: 190 }, { x: 640, y: 320 }, { x: 720, y: 400 }, { x: 485, y: 330 }, { x: 300, y: 300 }, { x: 585, y: 425 }, { x: 800, y: 300 }] as p (p.x)}
						<circle
							cx={p.x}
							cy={p.y}
							r="9"
							fill="var(--primary)"
							stroke="var(--background)"
							stroke-width="2.5"
						/>
					{/each}
					{#each [{ x: 155, y: 260 }, { x: 215, y: 355 }, { x: 330, y: 130 }, { x: 430, y: 400 }, { x: 560, y: 265 }, { x: 680, y: 235 }, { x: 770, y: 170 }, { x: 415, y: 305 }, { x: 830, y: 385 }] as p (p.x)}
						<circle
							cx={p.x}
							cy={p.y}
							r="8"
							fill="color-mix(in oklab, var(--primary) 25%, var(--background))"
							stroke="var(--background)"
							stroke-width="2.5"
						/>
					{/each}
				</svg>
				<p class="text-xs text-muted-foreground">{m.inf_market_demo_note()}</p>
			</Card.Content>
			<Card.Footer class="flex-col items-start gap-3 border-t pt-4 sm:flex-row sm:flex-wrap">
				<!-- heat legend -->
				<div class="min-w-44 flex-1">
					<p class="mb-1.5 font-medium">{m.inf_market_demand_heat_title()}</p>
					<div class="flex items-center gap-3">
						<div
							class="h-16 w-4 rounded"
							style="background: linear-gradient(180deg, var(--primary) 0%, color-mix(in oklab, var(--primary) 85%, transparent) 25%, color-mix(in oklab, var(--primary) 65%, transparent) 50%, color-mix(in oklab, var(--primary) 35%, transparent) 75%, color-mix(in oklab, var(--primary) 15%, transparent) 100%);"
						></div>
						<ul class="space-y-1 text-xs text-muted-foreground">
							<li>{m.inf_market_demand_heat_very_high()}</li>
							<li>{m.inf_market_demand_heat_high()}</li>
							<li>{m.inf_market_demand_heat_mid()}</li>
							<li>{m.inf_market_demand_heat_low()}</li>
						</ul>
					</div>
				</div>
				<!-- markers legend -->
				<ul class="min-w-44 flex-1 space-y-1.5 text-xs text-muted-foreground">
					<li class="flex items-center gap-2">
						<span class="size-2.5 rounded-full bg-primary"></span>{m.inf_market_demand_legend_our()}
					</li>
					<li class="flex items-center gap-2">
						<span class="size-2.5 rounded-full bg-primary"
						></span>{m.inf_market_demand_legend_competitor()}
					</li>
					<li class="flex items-center gap-2">
						<span class="size-2.5 rounded-full border bg-background"
						></span>{m.inf_market_demand_legend_zone()}
					</li>
				</ul>
			</Card.Footer>
		</Card.Root>

		<!-- Right column: assistant, insight, demographics -->
		<div class="space-y-4">
			<div class="flex items-start gap-3 rounded-xl border bg-muted/40 p-3">
				<SparklesIcon class="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
				<div>
					<p class="font-semibold">{m.inf_market_demand_ai_title()}</p>
					<p class="text-xs text-muted-foreground">{m.inf_market_demand_ai_hint()}</p>
				</div>
			</div>

			<Card.Root>
				<Card.Header class="flex-row items-start justify-between space-y-0">
					<Card.Title class="text-sm">{m.inf_market_demand_insight_kicker()}</Card.Title>
					<Badge variant="secondary" class="bg-primary/10 text-primary"
						>{m.inf_market_demand_insight_badge()}</Badge
					>
				</Card.Header>
				<Card.Content class="space-y-3 text-center">
					<TrendingUpIcon class="mx-auto size-5 text-primary" aria-hidden="true" />
					<p class="font-semibold">{m.inf_market_demand_insight_title()}</p>
					<p class="text-xs text-muted-foreground">{m.inf_market_demand_insight_text()}</p>
				</Card.Content>
				<Card.Footer class="flex-col gap-2 sm:flex-row">
					{@render chip({ label: m.inf_market_demand_insight_more() })}
					{@render chip({ label: m.inf_market_demand_insight_generate() })}
				</Card.Footer>
			</Card.Root>

			<!-- High demand potential popup (source map tooltip) -->
			<Card.Root class="border-primary/40 bg-primary/[0.04]">
				<Card.Header class="flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm">{m.inf_market_demand_popup_title()}</Card.Title>
					<span aria-hidden="true">›</span>
				</Card.Header>
				<Card.Content class="space-y-1.5">
					{@render statRow({ label: m.inf_market_demand_popup_population(), value: '52 300' })}
					{@render statRow({
						label: m.inf_market_demand_popup_income(),
						value: m.inf_market_demand_popup_income_value()
					})}
					{@render statRow({
						label: m.inf_market_demand_popup_index(),
						value: m.inf_market_demand_popup_index_value()
					})}
				</Card.Content>
			</Card.Root>

			<!-- Purchasing power by demographics -->
			<Card.Root>
				<Card.Header class="flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm">{m.inf_market_demand_purch_title()}</Card.Title>
					<span class="rounded-md border px-2 py-1 text-xs text-muted-foreground"
						>{m.inf_market_demand_purch_filter()}</span
					>
				</Card.Header>
				<Card.Content class="space-y-3">
					<ul class="flex flex-wrap gap-3 text-xs text-muted-foreground">
						<li class="flex items-center gap-1.5">
							<span class="size-2 rounded-full" style="background:var(--primary)"
							></span>{m.inf_market_demand_income_low()}
						</li>
						<li class="flex items-center gap-1.5">
							<span class="size-2 rounded-full" style="background:var(--primary)"
							></span>{m.inf_market_demand_income_mid()}
						</li>
						<li class="flex items-center gap-1.5">
							<span class="size-2 rounded-full" style="background:var(--primary)"
							></span>{m.inf_market_demand_income_high()}
						</li>
					</ul>
					<figure>
						<svg
							viewBox="0 0 420 160"
							class="w-full"
							role="img"
							aria-label={m.inf_market_demand_purch_title()}
						>
							<title>{m.inf_market_demand_purch_title()}</title>
							<path
								d="M15 125 C90 120 100 55 175 45 S290 60 405 125"
								fill="none"
								stroke="var(--primary)"
								stroke-width="3"
							/>
							<path
								d="M15 110 C90 100 105 40 175 30 S300 50 405 110"
								fill="none"
								stroke="var(--primary)"
								stroke-width="3"
							/>
							<path
								d="M15 95 C90 80 110 20 175 18 S300 40 405 95"
								fill="none"
								stroke="var(--primary)"
								stroke-width="3"
							/>
						</svg>
						<ul class="flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
							{#each ['18–24', '25–34', '35–44', '45–54', '55+'] as age (age)}<li>{age}</li>{/each}
						</ul>
						<figcaption class="mt-2 text-xs text-muted-foreground">
							{m.inf_market_demand_purch_caption()}
						</figcaption>
					</figure>
					<p class="text-xs text-muted-foreground">{m.inf_market_demand_purch_caption()}</p>
				</Card.Content>
			</Card.Root>
		</div>
	</div>

	<div class="grid gap-4 lg:grid-cols-3">
		<!-- Demand flows -->
		<Card.Root>
			<Card.Header class="flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm">{m.inf_market_demand_flows_title()}</Card.Title>
				<span aria-hidden="true" class="text-muted-foreground">›</span>
			</Card.Header>
			<Card.Content class="space-y-3">
				<div class="grid grid-cols-[minmax(0,1fr)_auto] gap-x-3">
					<ul class="space-y-2 text-xs">
						<li class="flex items-center gap-2">
							<span class="size-2 rounded-full bg-primary"
							></span>{m.inf_market_demand_flow_src_residential()}
						</li>
						<li class="flex items-center gap-2">
							<span class="size-2 rounded-full bg-primary"
							></span>{m.inf_market_demand_flow_src_business()}
						</li>
						<li class="flex items-center gap-2">
							<span class="size-2 rounded-full bg-primary"
							></span>{m.inf_market_demand_flow_src_edu()}
						</li>
						<li class="flex items-center gap-2">
							<span class="size-2 rounded-full bg-primary"
							></span>{m.inf_market_demand_flow_src_tourists()}
						</li>
					</ul>
					<svg viewBox="0 0 60 90" aria-hidden="true" class="h-24 w-10" preserveAspectRatio="none">
						<path
							d="M0 12 C30 12 30 26 60 26"
							fill="none"
							stroke="var(--primary)"
							stroke-width="6"
							opacity="0.5"
						/>
						<path
							d="M0 26 C30 26 30 40 60 40"
							fill="none"
							stroke="color-mix(in oklab, var(--primary) 25%, var(--background))"
							stroke-width="6"
							opacity="0.6"
						/>
						<path
							d="M0 44 C30 44 30 58 60 58"
							fill="none"
							stroke="color-mix(in oklab, var(--primary) 25%, var(--background))"
							stroke-width="6"
							opacity="0.5"
						/>
						<path
							d="M0 58 C30 58 30 72 60 72"
							fill="none"
							stroke="color-mix(in oklab, var(--primary) 25%, var(--background))"
							stroke-width="6"
							opacity="0.6"
						/>
					</svg>
				</div>
				<div class="space-y-1.5 border-t pt-3 text-xs">
					{@render statRow({ label: m.inf_market_demand_flow_cat_frozen(), value: '42%' })}
					{@render statRow({ label: m.inf_market_demand_flow_cat_nuggets(), value: '24%' })}
					{@render statRow({ label: m.inf_market_demand_flow_cat_cold(), value: '18%' })}
					{@render statRow({ label: m.inf_market_demand_flow_cat_other(), value: '16%' })}
				</div>
			</Card.Content>
		</Card.Root>

		<!-- Top districts table -->
		<Card.Root>
			<Card.Header class="flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm">{m.inf_market_demand_top_title()}</Card.Title>
				<span aria-hidden="true" class="text-muted-foreground">›</span>
			</Card.Header>
			<Card.Content class="px-0">
				<Table.Root scrollLabel={m.inf_market_demand_top_title()}>
					<Table.Header>
						<Table.Row>
							<Table.Head class="pl-6">№</Table.Head>
							<Table.Head>{m.inf_market_demand_th_district()}</Table.Head>
							<Table.Head class="text-center">{m.inf_market_demand_th_index()}</Table.Head>
							<Table.Head class="pr-6 text-right">{m.inf_market_demand_th_forecast()}</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each [{ n: 1, d: m.inf_market_demand_district_yesil(), i: '9.1', f: '+18%' }, { n: 2, d: m.inf_market_demand_district_saryarka(), i: '8.4', f: '+12%' }, { n: 3, d: m.inf_market_demand_district_almaty(), i: '7.8', f: '+9%' }, { n: 4, d: m.inf_market_demand_district_baykonyr(), i: '6.9', f: '+6%' }] as r (r.n)}
							<Table.Row>
								<Table.Cell class="pl-6"
									><span
										class="inline-flex size-6 items-center justify-center rounded-full bg-muted text-xs font-semibold"
										>{r.n}</span
									></Table.Cell
								>
								<Table.Cell>{r.d}</Table.Cell>
								<Table.Cell class="text-center tabular-nums">{r.i}</Table.Cell>
								<Table.Cell class="pr-6 text-right font-semibold text-primary tabular-nums"
									>↑ {r.f}</Table.Cell
								>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>

		<!-- Seasonality -->
		<Card.Root>
			<Card.Header class="flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm">{m.inf_market_demand_season_title()}</Card.Title>
				<span class="rounded-md border px-2 py-1 text-xs text-muted-foreground"
					>{m.inf_market_demand_season_filter()}</span
				>
			</Card.Header>
			<Card.Content class="space-y-3">
				<p class="-mb-2 text-xs text-muted-foreground">
					{monthShort(7)}:
					<span class="font-semibold text-primary">{m.inf_market_demand_season_delta()}</span>
				</p>
				<div class="flex h-28 items-end gap-2" aria-hidden="true">
					{#each ['h-1/4', 'h-1/3', 'h-1/2', 'h-2/3', 'h-3/4', 'h-1/2', 'h-2/3', 'h-5/6', 'h-1/2', 'h-2/3', 'h-3/4', 'h-full'] as shape, i (i)}
						<span class="flex-1 rounded-t bg-primary/30 {shape}"></span>
					{/each}
				</div>
				<p class="text-xs text-muted-foreground">{m.inf_market_demand_season_caption()}</p>
			</Card.Content>
		</Card.Root>
	</div>
	<ul class="list-disc space-y-1 pl-5 text-muted-foreground">
		<li>{m.inf_market_demand_concept_consumers()}</li>
		<li>{m.inf_market_demand_concept_brands()}</li>
		<li>{m.inf_market_demand_concept_signals()}</li>
		<li>{m.inf_market_demand_concept_marketing()}</li>
	</ul>
{/snippet}

<!-- ==================== SUPPLY (module 2) ===================== -->
{#snippet supply()}
	<p class="text-xs text-muted-foreground">{m.inf_market_schematic_note()}</p>
	<p class="max-w-prose text-muted-foreground">{m.inf_market_supply_subtitle()}</p>
	<div class="flex flex-wrap gap-2">
		{@render chip({ label: m.inf_market_supply_chip_polygon() })}
		{@render chip({ label: m.inf_market_supply_chip_day(), active: true })}
	</div>

	<div class="grid gap-4 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
		<div class="space-y-4">
			<!-- Supply map schematic -->
			<Card.Root>
				<Card.Header class="flex-row flex-wrap items-center justify-between gap-2 space-y-0">
					<Card.Title class="text-base">{m.inf_market_supply_map_title()}</Card.Title>
					<div class="flex flex-wrap gap-2 text-xs text-muted-foreground">
						<span class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1"
							><FactoryIcon
								class="size-3.5"
								aria-hidden="true"
							/>{m.inf_market_supply_legend_factory()}</span
						>
						<span class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1"
							><WarehouseIcon
								class="size-3.5"
								aria-hidden="true"
							/>{m.inf_market_supply_legend_warehouses()}</span
						>
						<span class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1"
							><span class="size-2 rounded-full bg-[var(--primary)]"
							></span>{m.inf_market_supply_legend_stores()}</span
						>
						<span class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1"
							><RouteIcon
								class="size-3.5"
								aria-hidden="true"
							/>{m.inf_market_supply_legend_routes()}</span
						>
					</div>
				</Card.Header>
				<Card.Content class="space-y-3">
					<svg
						viewBox="0 0 900 520"
						role="img"
						aria-label="{m.inf_market_supply_map_title()} ({m.inf_market_city_almaty()})"
						class="w-full rounded-lg border bg-[var(--primary)]"
					>
						<!-- city boundary (schematic) -->
						<path
							d="M240 130 L340 100 L430 140 L560 120 L640 170 L660 270 L580 360 L470 420 L330 400 L250 320 L230 210 Z"
							fill="none"
							stroke="color-mix(in oklab, var(--primary) 25%, var(--background))"
							stroke-width="2"
							stroke-dasharray="7 5"
						/>
						<!-- routes factory -> warehouses -> stores -->
						<g
							stroke="var(--primary)"
							stroke-width="2.5"
							stroke-dasharray="5 5"
							fill="none"
							opacity="0.8"
						>
							<path d="M360 170 L330 240 L280 300" />
							<path d="M360 170 L420 260" />
							<path d="M360 170 L520 230" />
							<path d="M280 300 L360 330 L420 340" />
							<path d="M420 260 L480 300 L540 310" />
							<path d="M520 230 L560 290" />
						</g>
						<!-- factory -->
						<g transform="translate(348 148)">
							<rect
								x="-14"
								y="-14"
								width="28"
								height="28"
								rx="6"
								fill="color-mix(in oklab, var(--destructive) 10%, var(--background))"
								stroke="var(--destructive)"
								stroke-width="2"
							/>
							<path
								d="M-6 8 V-2 L-1 -6 V8 M3 8 V-4 L8 -8 V8"
								stroke="var(--destructive)"
								stroke-width="1.8"
								fill="none"
							/>
						</g>
						<!-- warehouses -->
						{#each [[280, 300], [420, 260], [520, 230]] as w (w[0])}
							<g transform="translate({w[0]} {w[1]})">
								<rect
									x="-11"
									y="-11"
									width="22"
									height="22"
									rx="5"
									fill="var(--muted)"
									stroke="var(--foreground)"
									stroke-width="2"
								/>
								<path
									d="M-5 5 V-2 H5 V5 M-5 -2 L0 -7 L5 -2"
									stroke="var(--foreground)"
									stroke-width="1.6"
									fill="none"
								/>
							</g>
						{/each}
						<!-- stores -->
						{#each [{ x: 360, y: 330 }, { x: 396, y: 352 }, { x: 420, y: 340 }, { x: 444, y: 362 }, { x: 462, y: 330 }, { x: 480, y: 300 }, { x: 505, y: 335 }, { x: 522, y: 365 }, { x: 540, y: 310 }, { x: 560, y: 290 }, { x: 578, y: 330 }, { x: 600, y: 300 }, { x: 615, y: 345 }, { x: 430, y: 315 }] as p (p.x)}
							<circle
								cx={p.x}
								cy={p.y}
								r="5"
								fill="var(--primary)"
								stroke="var(--background)"
								stroke-width="1.5"
							/>
						{/each}
						<!-- one remote store -->
						<circle
							cx="640"
							cy="440"
							r="6"
							fill="var(--primary)"
							stroke="var(--background)"
							stroke-width="1.5"
						/>
						<!-- geo labels (translated) -->
						<g class="fill-foreground text-[13px]">
							<text
								x="450"
								y="300"
								text-anchor="middle"
								class="fill-foreground text-[17px] font-semibold">{m.inf_market_city_almaty()}</text
							>
							<text x="245" y="345">{m.inf_market_geo_qaskeleng()}</text>
							<text x="500" y="130">{m.inf_market_geo_otegen()}</text>
							<text x="660" y="225">{m.inf_market_geo_belbulak()}</text>
							<text x="665" y="272">{m.inf_market_geo_besagash()}</text>
							<text x="655" y="330">{m.inf_market_geo_boskaynar()}</text>
							<text x="452" y="192">{m.inf_market_geo_karagash()}</text>
							<text x="120" y="255">{m.inf_market_geo_tuzdy()}</text>
						</g>
					</svg>
				</Card.Content>
			</Card.Root>

			<!-- KPI row -->
			<Card.Root>
				<Card.Content class="grid grid-cols-2 divide-y sm:grid-cols-4 sm:divide-x sm:divide-y-0">
					{#each [['80', m.inf_market_supply_kpi_trips()], ['2 004', m.inf_market_supply_kpi_km()], ['11,4', m.inf_market_supply_kpi_daily()], ['1 500 ' + m.inf_market_unit_kg(), m.inf_market_supply_kpi_capacity()]] as [v, l] (l)}
						<div class="px-4 py-4 text-center">
							<p class="text-xl font-bold tabular-nums">{v}</p>
							<p class="text-xs text-muted-foreground">{l}</p>
						</div>
					{/each}
				</Card.Content>
			</Card.Root>
		</div>

		<div class="space-y-4">
			<!-- Shelf-life card with timeline -->
			<Card.Root>
				<Card.Header class="flex-row items-start gap-3 space-y-0">
					<span
						class="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"
						><ClockIcon class="size-5" aria-hidden="true" /></span
					>
					<Card.Title class="text-base leading-snug">{m.inf_market_supply_shelf_title()}</Card.Title
					>
				</Card.Header>
				<Card.Content class="space-y-4">
					<p class="text-muted-foreground">{m.inf_market_supply_shelf_p1()}</p>
					<p class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
						{m.inf_market_supply_shelf_life()}
					</p>
					<!-- timeline reconstructed from exact source bar widths -->
					<div class="space-y-2">
						<div class="flex h-8 overflow-hidden rounded-lg">
							<div class="h-full rounded-l-md bg-[var(--primary)]" style="width: 9%"></div>
							<div class="h-full bg-[var(--primary)]" style="width: 36%"></div>
							<div class="h-full bg-[var(--primary)]" style="width: 3.7%"></div>
							<div class="h-full flex-1 rounded-r-md bg-muted"></div>
						</div>
						<div class="flex justify-between text-xs text-muted-foreground tabular-nums">
							{#each ['0', '1', '2', '3', '4', '5', '6', '7'] as d (d)}<span>{d}</span>{/each}
							<span>{m.inf_market_supply_day_word()}</span>
						</div>
						<div class="flex flex-wrap gap-x-6 gap-y-1 text-xs font-semibold">
							<span class="text-[var(--primary)]">{m.inf_market_supply_in_transit()}</span>
							<span class="text-[var(--primary)]">{m.inf_market_supply_sale()}</span>
							<span class="text-[var(--primary)]">{m.inf_market_supply_buffer()}</span>
							<span class="ml-auto font-normal text-muted-foreground"
								>{m.inf_market_supply_buffer_note()}</span
							>
						</div>
					</div>
					<div class="flex items-start gap-2.5 rounded-xl bg-primary/10 p-3">
						<span
							class="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"
							><svg
								viewBox="0 0 12 10"
								class="size-2.5 fill-none stroke-white stroke-[2]"
								aria-hidden="true"><path d="M1 5l3.5 3L11 1" /></svg
							></span
						>
						<p class="text-xs font-semibold">{m.inf_market_supply_rule()}</p>
					</div>
					<p class="text-xs text-muted-foreground">{m.inf_market_supply_fefo()}</p>
				</Card.Content>
			</Card.Root>

			<!-- Weekly metrics -->
			<Card.Root>
				<Card.Header class="pb-2"
					><Card.Title class="text-base">{m.inf_market_supply_metrics_title()}</Card.Title
					></Card.Header
				>
				<Card.Content class="grid grid-cols-2 gap-3">
					{#each [{ icon: TruckIcon, color: 'text-primary', t: m.inf_market_supply_metric_fill(), v: '105 %', s: m.inf_market_supply_metric_fill_sub() }, { icon: ClockIcon, color: 'text-primary', t: m.inf_market_supply_metric_spoil(), v: '10,44 %', s: m.inf_market_supply_metric_spoil_sub() }, { icon: TrendingDownIcon, color: 'text-destructive', t: m.inf_market_supply_metric_missed(), v: '5,12 %', s: m.inf_market_supply_metric_missed_sub() }, { icon: RouteIcon, color: 'text-primary', t: m.inf_market_supply_metric_cost(), v: '32,5 ₸/' + m.inf_market_unit_kg(), s: m.inf_market_supply_metric_cost_sub() }] as k (k.t)}
						<div class="flex items-start gap-3">
							<span class="grid size-9 shrink-0 place-items-center rounded-lg bg-muted {k.color}"
								><k.icon class="size-4.5" aria-hidden="true" /></span
							>
							<div>
								<p class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
									{k.t}
								</p>
								<p class="text-xl font-bold tabular-nums">{k.v}</p>
								<p class="text-xs text-muted-foreground">{k.s}</p>
							</div>
						</div>
					{/each}
				</Card.Content>
			</Card.Root>
		</div>
	</div>

	<!-- Self-balancing steps -->
	<Card.Root>
		<Card.Header class="pb-3"
			><Card.Title class="text-base">{m.inf_market_supply_balance_title()}</Card.Title></Card.Header
		>
		<Card.Content class="grid gap-4 sm:grid-cols-3">
			{#each [{ n: 1, t: m.inf_market_supply_step1_title(), s: m.inf_market_supply_step1_text() }, { n: 2, t: m.inf_market_supply_step2_title(), s: m.inf_market_supply_step2_text() }, { n: 3, t: m.inf_market_supply_step3_title(), s: m.inf_market_supply_step3_text() }] as st (st.n)}
				<div class="flex items-start gap-3">
					<span
						class="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary"
						>{st.n}</span
					>
					<div>
						<p class="font-semibold">{st.t}</p>
						<p class="text-xs text-muted-foreground">{st.s}</p>
					</div>
				</div>
			{/each}
		</Card.Content>
	</Card.Root>

	<!-- Scenario explanation from source speaker notes -->
	<div class="rounded-xl border bg-muted/30 p-4">
		<p class="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
			{m.inf_market_scenario_label()}
		</p>
		<div class="space-y-2 text-muted-foreground">
			<p>{m.inf_market_supply_scenario_p1()}</p>
			<p>{m.inf_market_supply_scenario_p2()}</p>
			<p>{m.inf_market_supply_scenario_p3()}</p>
			<p>{m.inf_market_supply_scenario_p4()}</p>
		</div>
	</div>
{/snippet}

<!-- ==================== PORTFOLIO (module 3) ===================== -->
{#snippet portfolio()}
	<p class="text-xs text-muted-foreground">{m.inf_market_portfolio_unlabelled_note()}</p>
	<p class="max-w-prose text-muted-foreground">{m.inf_market_portfolio_subtitle()}</p>

	<div class="flex flex-wrap items-center gap-2">
		{@render chip({ label: m.inf_market_portfolio_nav_products(), active: true })}
		{@render chip({ label: m.inf_market_portfolio_nav_market() })}
		{@render chip({ label: m.inf_market_portfolio_nav_experiments() })}
		{@render chip({ label: m.inf_market_portfolio_nav_portfolio() })}
		<span
			class="ml-auto inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs text-muted-foreground"
			>⌕&nbsp; {m.inf_market_portfolio_search_hint()}</span
		>
		{@render chip({ label: `＋ ${m.inf_market_portfolio_new()}`, active: true })}
	</div>

	<div class="flex flex-wrap gap-2">
		{@render chip({ label: `↗ ${m.inf_market_portfolio_chip_scenarios()}`, active: true })}
		{@render chip({ label: `⧉ ${m.inf_market_portfolio_chip_trends()}` })}
		{@render chip({ label: `⚙ ${m.inf_market_portfolio_chip_competitors()}` })}
		{@render chip({ label: `⊕ ${m.inf_market_portfolio_chip_new_products()}` })}
	</div>

	<!-- Events → AI → outcomes -->
	<Card.Root>
		<Card.Content class="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-4">
			<div class="space-y-3">
				<p class="font-semibold">{m.inf_market_portfolio_events_title()}</p>
				<ul class="space-y-2">
					{#each [{ t: m.inf_market_portfolio_event_prices(), icon: TrendingUpIcon, active: false }, { t: m.inf_market_portfolio_event_promos(), icon: TrendingUpIcon, active: false }, { t: m.inf_market_portfolio_event_demand(), icon: StoreIcon, active: true }, { t: m.inf_market_portfolio_event_player(), icon: SparklesIcon, active: false }, { t: m.inf_market_portfolio_event_macro(), icon: TrendingUpIcon, active: false }, { t: m.inf_market_portfolio_event_supply(), icon: TriangleAlertIcon, active: false }] as e (e.t)}
						<li
							class="flex items-center gap-3 rounded-lg border px-3 py-2 text-sm {e.active
								? 'border-primary/60 bg-primary/10 font-medium text-primary'
								: ''}"
						>
							<e.icon class="size-4 shrink-0" aria-hidden="true" />
							<span>{e.t}</span>
						</li>
					{/each}
				</ul>
			</div>

			<!-- AI confidence node (illustrative) -->
			<div class="flex flex-row items-center justify-center gap-3 md:flex-col">
				<span class="hidden md:block md:h-10 md:w-px md:bg-border" aria-hidden="true"></span>
				<div
					class="grid size-20 shrink-0 place-items-center rounded-full border-2 border-primary bg-card shadow-sm"
				>
					<div class="text-center">
						<p class="text-lg font-bold text-primary tabular-nums">87%</p>
						<p class="text-xs text-muted-foreground">{m.inf_market_portfolio_confidence()}</p>
					</div>
				</div>
				<span class="hidden md:block md:h-10 md:w-px md:bg-border" aria-hidden="true"></span>
			</div>

			<div class="space-y-3">
				<p class="font-semibold">{m.inf_market_portfolio_results_title()}</p>
				<ul class="space-y-2">
					{#each [{ t: m.inf_market_portfolio_result_revenue(), v: '68%', icon: TrendingUpIcon, color: 'text-primary', dim: false }, { t: m.inf_market_portfolio_result_share(), v: '54%', icon: SparklesIcon, color: 'text-primary', dim: true }, { t: m.inf_market_portfolio_result_niches(), v: '91%', icon: LightbulbIcon, color: 'text-muted-foreground', dim: false }, { t: m.inf_market_portfolio_result_risks(), v: '47%', icon: TriangleAlertIcon, color: 'text-primary', dim: true }, { t: m.inf_market_portfolio_result_recs(), v: '72%', icon: SparklesIcon, color: 'text-primary', dim: false }] as r (r.t)}
						<li
							class="flex items-center gap-3 rounded-lg border px-3 py-2 text-sm {r.t ===
							m.inf_market_portfolio_result_niches()
								? 'border-primary/60 bg-primary/10'
								: ''}"
						>
							<r.icon class="size-4 shrink-0 {r.color}" aria-hidden="true" />
							<span class="flex-1">{r.t}</span>
							<span
								class="rounded-md bg-muted px-1.5 py-0.5 text-xs font-bold tabular-nums {r.color}"
								>{r.v}</span
							>
						</li>
					{/each}
				</ul>
			</div>
		</Card.Content>
		<Card.Footer
			><p class="text-xs text-muted-foreground">{m.inf_market_portfolio_hint()}</p></Card.Footer
		>
	</Card.Root>

	<!-- Scenario comparison -->
	<Card.Root>
		<Card.Content class="grid gap-3 lg:grid-cols-[auto_repeat(3,minmax(0,1fr))] lg:items-stretch">
			<p class="self-center text-xs font-semibold tracking-wide text-muted-foreground uppercase">
				{m.inf_market_portfolio_scenarios_label()}
			</p>
			{#each [{ name: m.inf_market_portfolio_sc_optimistic(), rev: '+18%', mar: '24%', big: '35%', cls: 'border-primary bg-primary/10', bigCls: 'text-primary', dot: 'bg-primary' }, { name: m.inf_market_portfolio_sc_base(), rev: '+7%', mar: '19%', big: '50%', cls: 'border-primary bg-primary/10', bigCls: 'text-primary', dot: 'bg-primary' }, { name: m.inf_market_portfolio_sc_pessimistic(), rev: '−3%', mar: '13%', big: '15%', cls: 'border-primary bg-primary/10', bigCls: 'text-primary', dot: 'bg-primary' }] as sc (sc.name)}
				<div class="flex items-center gap-4 rounded-xl border p-3 {sc.cls}">
					<div class="min-w-0 flex-1">
						<p class="flex items-center gap-2 text-xs font-semibold">
							<span class="size-2 rounded-full {sc.dot}"></span>{sc.name}
						</p>
						<div class="mt-1 flex gap-4 text-xs text-muted-foreground">
							<span
								>{m.inf_market_portfolio_revenue()}<br /><b class="text-sm tabular-nums {sc.bigCls}"
									>{sc.rev}</b
								></span
							>
							<span
								>{m.inf_market_portfolio_margin()}<br /><b class="text-sm tabular-nums">{sc.mar}</b
								></span
							>
						</div>
					</div>
					<!-- Large value has no label in the source raster -->
					<p class="text-2xl font-bold tabular-nums {sc.bigCls}">{sc.big}</p>
				</div>
			{/each}
		</Card.Content>
	</Card.Root>

	<!-- Category forecast + concepts -->
	<div class="grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
		<Card.Root>
			<Card.Header class="flex-row flex-wrap items-center justify-between gap-2 space-y-0">
				<Card.Title class="text-sm">{m.inf_market_portfolio_forecast_title()}</Card.Title>
				<span class="rounded-md border px-2 py-1 text-xs text-muted-foreground"
					>{m.inf_market_portfolio_year_view()} ⌄</span
				>
			</Card.Header>
			<Card.Content class="space-y-3">
				<PortfolioTrajectory
					title={m.inf_market_portfolio_forecast_title()}
					caption={m.inf_market_portfolio_forecast_caption()}
				/>
				<p class="text-xs text-muted-foreground">{m.inf_market_portfolio_forecast_axis_note()}</p>
				<MiniChart
					class="w-full"
					chart={{
						kind: 'bars',
						caption: m.inf_market_portfolio_forecast_title(),
						tableLabel: m.inf_market_portfolio_forecast_table(),
						width: 460,
						height: 190,
						defaultColor: 'var(--primary)',
						yTicks: [0, 100, 200, 300, 400],
						yMax: 400,
						bars: [
							{ label: '2027 · ' + m.inf_market_portfolio_cat_rte(), value: 320 },
							{
								label: '2027 · ' + m.inf_market_portfolio_cat_sandwiches(),
								value: 240,
								color: 'var(--primary)'
							},
							{
								label: '2027 · ' + m.inf_market_portfolio_cat_nuggets(),
								value: 180,
								color: 'var(--primary)'
							}
						]
					}}
				/>
				<p class="text-xs text-muted-foreground">{m.inf_market_portfolio_forecast_caption()}</p>
			</Card.Content>
			<Card.Footer class="flex-col border-t pt-4">
				<p class="mb-2 self-start font-semibold">{m.inf_market_portfolio_concepts_title()}</p>
				<div class="grid w-full gap-3 sm:grid-cols-2 xl:grid-cols-4">
					{#each [{ t: m.inf_market_portfolio_cat_rte(), s: m.inf_market_portfolio_concept_rte_sub(), hl: true }, { t: m.inf_market_portfolio_cat_sandwiches(), s: m.inf_market_portfolio_concept_sandwiches_sub(), hl: false }, { t: m.inf_market_portfolio_cat_nuggets(), s: m.inf_market_portfolio_concept_nuggets_sub(), hl: false }, { t: m.inf_market_portfolio_concept_new(), s: '', hl: false, empty: true }] as c, i (c.t)}
						<div
							class="flex items-center gap-3 rounded-xl border p-3 {c.hl
								? 'border-primary ring-1 ring-primary'
								: ''} {c.empty ? 'justify-center border-dashed text-muted-foreground' : ''}"
						>
							<span
								class="grid size-11 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground {c.empty
									? 'border border-dashed'
									: ''}"
								aria-hidden="true"
							>
								{#if c.empty}＋{:else}<img
										src={asset('/images/infographics/portfolio-' + (i + 1) + '.webp')}
										alt=""
										loading="lazy"
										width="640"
										height="640"
										class="size-11 rounded-full object-cover"
									/>{/if}
							</span>
							<div class="min-w-0">
								<p class="font-semibold break-words">{c.t}</p>
								{#if c.s}<p
										class="text-xs {c.hl ? 'font-semibold text-primary' : 'text-muted-foreground'}"
									>
										{c.s}
									</p>{/if}
							</div>
						</div>
					{/each}
				</div>
				<p class="mt-2 self-start text-xs text-muted-foreground">{m.inf_market_demo_note()}</p>
			</Card.Footer>
		</Card.Root>

		<!-- AI assistant aside -->
		<Card.Root>
			<Card.Header class="flex-row items-start gap-2.5 space-y-0">
				<SparklesIcon class="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
				<div>
					<Card.Title class="text-sm">{m.inf_market_portfolio_ai_title()}</Card.Title>
					<Card.Description class="text-xs">{m.inf_market_portfolio_ai_sub()}</Card.Description>
				</div>
			</Card.Header>
			<Card.Content class="space-y-3">
				<div class="rounded-xl rounded-tr bg-primary/10 p-3 text-sm">
					{m.inf_market_portfolio_ai_question()}
				</div>
				<p class="text-xs text-muted-foreground">{m.inf_market_portfolio_ai_answer()}</p>
				<ol class="space-y-2">
					{#each [{ n: 1, t: m.inf_market_portfolio_cat_rte(), s: m.inf_market_portfolio_ai_item1() }, { n: 2, t: m.inf_market_portfolio_cat_sandwiches(), s: m.inf_market_portfolio_ai_item2() }, { n: 3, t: m.inf_market_portfolio_cat_nuggets(), s: m.inf_market_portfolio_ai_item3() }] as it (it.n)}
						<li class="flex items-center gap-2.5 rounded-xl border p-2.5">
							<span
								class="grid size-6 shrink-0 place-items-center rounded-lg bg-primary/10 text-xs font-bold text-primary"
								>{it.n}</span
							>
							<div class="min-w-0 flex-1">
								<p class="font-semibold">{it.t}</p>
								<p class="text-xs text-muted-foreground">{it.s}</p>
							</div>
							<span aria-hidden="true">→</span>
						</li>
					{/each}
				</ol>
				<div
					class="flex items-center justify-between rounded-xl border px-3 py-2 text-xs text-muted-foreground"
				>
					{m.inf_market_portfolio_input_hint()}
					<span
						class="ml-2 grid size-6 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground"
						aria-hidden="true">➤</span
					>
				</div>
				<div class="flex flex-wrap gap-2">
					{@render chip({ label: `↗ ${m.inf_market_portfolio_suggestion_price()}` })}
					{@render chip({ label: `◉ ${m.inf_market_portfolio_suggestion_ideas()}` })}
					{@render chip({ label: `◉ ${m.inf_market_portfolio_suggestion_compare()}` })}
				</div>
				{@render chip({ label: `◉ ${m.inf_market_portfolio_more_insights()} ⌄` })}
			</Card.Content>
		</Card.Root>
	</div>

	<!-- Source bullet list -->
	<div class="rounded-xl border bg-muted/30 p-4">
		<p class="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
			{m.inf_market_scenario_label()}
		</p>
		<ul class="list-disc space-y-1 pl-5 text-muted-foreground">
			<li>{m.inf_market_portfolio_note_prototypes()}</li>
			<li>{m.inf_market_portfolio_note_trends()}</li>
			<li>{m.inf_market_portfolio_note_product()}</li>
			<li>{m.inf_market_portfolio_note_benchmarks()}</li>
			<li>{m.inf_market_portfolio_note_costs()}</li>
		</ul>
	</div>
{/snippet}

<!-- ==================== ECOSYSTEM (module 4) ===================== -->
{#snippet ecosystem()}
	<p class="max-w-prose text-muted-foreground">{m.inf_market_ecosystem_subtitle()}</p>

	<!-- Filters (illustrative) -->
	<div class="flex flex-wrap gap-2">
		<span class="inline-flex items-center gap-2 rounded-lg border bg-background px-3 py-1.5 text-sm"
			>{m.inf_market_ecosystem_period()}:
			<b class="font-medium">{m.inf_market_ecosystem_period_value()}</b> ⌄</span
		>
		<span class="inline-flex items-center gap-2 rounded-lg border bg-background px-3 py-1.5 text-sm"
			><MapPinIcon class="size-3.5 text-primary" aria-hidden="true" /><b class="font-medium"
				>{m.inf_market_ecosystem_region_value()}</b
			> ⌄</span
		>
	</div>

	<!-- KPI cards -->
	<div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
		{#each [{ t: m.inf_market_ecosystem_kpi_market(), v: '$12.6 ' + m.inf_market_unit_billion(), d: '+7%' }, { t: m.inf_market_ecosystem_kpi_capital(), v: '$3.1 ' + m.inf_market_unit_billion(), d: '+18%' }, { t: m.inf_market_ecosystem_kpi_output(), v: '18.4 ' + m.inf_market_ecosystem_mln_t(), d: '+6%' }, { t: m.inf_market_ecosystem_kpi_population(), v: '12.8 ' + m.inf_market_unit_million(), d: '+4%' }] as k (k.t)}
			<Card.Root>
				<Card.Content class="flex items-center gap-3">
					<span
						class="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"
						><TrendingUpIcon class="size-5" aria-hidden="true" /></span
					>
					<div>
						<p class="text-xs text-muted-foreground">{k.t}</p>
						<p class="flex flex-wrap items-baseline gap-2">
							<span class="text-lg font-extrabold tabular-nums">{k.v}</span><span
								class="text-xs font-semibold text-primary">↗ {k.d}</span
							>
						</p>
						<p class="text-xs text-muted-foreground">{m.inf_market_ecosystem_vs_2023()}</p>
					</div>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>

	<div class="grid gap-4 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
		<!-- Balance map -->
		<Card.Root>
			<Card.Header class="flex-row items-center justify-between space-y-0">
				<div>
					<Card.Title class="text-base">{m.inf_market_ecosystem_balance_title()}</Card.Title>
					<Card.Description>{m.inf_market_ecosystem_balance_sub()}</Card.Description>
				</div>
				<span class="rounded-md border px-2 py-1 text-xs text-muted-foreground"
					>{m.inf_market_ecosystem_measure_production()} ⌄</span
				>
			</Card.Header>
			<Card.Content class="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
				<svg
					viewBox="0 0 600 340"
					role="img"
					aria-label={m.inf_market_ecosystem_map_note()}
					class="w-full rounded-lg border bg-primary/10"
				>
					<!-- schematic Kazakhstan-like silhouette; regions are not labelled in the source -->
					<path
						d="M60 120 C110 80 200 70 260 85 C310 60 370 60 420 75 C480 65 540 90 560 130 C585 170 570 210 540 235 C555 265 530 295 490 300 C440 315 380 300 330 310 C270 325 210 315 160 290 C110 270 70 230 60 185 Z"
						fill="color-mix(in oklab, var(--primary) 25%, var(--background))"
						stroke="var(--background)"
						stroke-width="2"
					/>
					<path
						d="M230 82 L240 310 M330 62 L330 308 M430 74 L445 302"
						stroke="var(--background)"
						stroke-width="1.5"
						opacity="0.8"
					/>
					<!-- Astana bubble with ring -->
					<circle
						cx="330"
						cy="150"
						r="22"
						fill="var(--primary)"
						stroke="var(--background)"
						stroke-width="3"
					/>
					<circle
						cx="330"
						cy="150"
						r="30"
						fill="none"
						stroke="var(--primary)"
						stroke-width="2"
						opacity="0.4"
					/>
					<text
						x="330"
						y="122"
						text-anchor="middle"
						class="fill-foreground text-[13px] font-semibold">{m.inf_market_city_astana()}</text
					>
					<!-- other region bubbles (surplus / deficit / balanced) -->
					{#each [{ x: 205, y: 175, r: 15, c: 'var(--primary)' }, { x: 255, y: 235, r: 13, c: 'color-mix(in oklab, var(--primary) 25%, var(--background))' }, { x: 145, y: 235, r: 10, c: 'var(--primary)' }, { x: 300, y: 270, r: 9, c: 'color-mix(in oklab, var(--primary) 25%, var(--background))' }, { x: 380, y: 210, r: 12, c: 'var(--primary)' }, { x: 420, y: 265, r: 10, c: 'color-mix(in oklab, var(--primary) 25%, var(--background))' }, { x: 470, y: 175, r: 8, c: 'var(--primary)' }, { x: 520, y: 210, r: 11, c: 'var(--primary)' }, { x: 545, y: 150, r: 7, c: 'var(--primary)' }, { x: 260, y: 130, r: 8, c: 'color-mix(in oklab, var(--primary) 25%, var(--background))' }, { x: 355, y: 235, r: 14, c: 'var(--primary)' }, { x: 500, y: 255, r: 15, c: 'var(--primary)' }] as b (b.x + '-' + b.y)}
						<circle cx={b.x} cy={b.y} r={b.r} fill={b.c} opacity="0.85" />
					{/each}
				</svg>
				<div class="space-y-2">
					<div class="rounded-xl border bg-card p-3 shadow-sm lg:w-52">
						<p class="mb-1.5 font-semibold">{m.inf_market_city_astana()}</p>
						<div class="space-y-1">
							{@render statRow({
								label: m.inf_market_ecosystem_production(),
								value: '2.4 ' + m.inf_market_ecosystem_mln_t()
							})}
							{@render statRow({
								label: m.inf_market_ecosystem_consumption(),
								value: '1.8 ' + m.inf_market_ecosystem_mln_t()
							})}
							{@render statRow({
								label: `↗ ${m.inf_market_ecosystem_balance()}`,
								value: '+0.6 ' + m.inf_market_ecosystem_mln_t()
							})}
						</div>
					</div>
					<ul class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
						<li class="flex items-center gap-1.5">
							<span class="size-2 rounded-full bg-[var(--primary)]"
							></span>{m.inf_market_ecosystem_legend_surplus()}
						</li>
						<li class="flex items-center gap-1.5">
							<span class="size-2 rounded-full bg-[var(--primary)]"
							></span>{m.inf_market_ecosystem_legend_deficit()}
						</li>
						<li class="flex items-center gap-1.5">
							<span
								class="bg-[color-mix(in oklab, var(--primary) 25%, var(--background))] size-2 rounded-full"
							></span>{m.inf_market_ecosystem_legend_balanced()}
						</li>
					</ul>
					<p class="text-xs text-muted-foreground">{m.inf_market_ecosystem_map_note()}</p>
				</div>
			</Card.Content>
		</Card.Root>

		<!-- Value flow -->
		<Card.Root>
			<Card.Header class="flex-row items-baseline justify-between space-y-0">
				<Card.Title class="text-xs font-semibold tracking-wide text-muted-foreground uppercase"
					>{m.inf_market_ecosystem_value_title()}</Card.Title
				>
				<span class="text-sm font-extrabold tabular-nums">$13.3 {m.inf_market_unit_billion()}</span>
			</Card.Header>
			<Card.Content class="space-y-4">
				{#each [{ t: m.inf_market_ecosystem_sector_agri(), v: '$5.2 ' + m.inf_market_unit_billion(), n: 39, c: 'var(--primary)', w: '39%' }, { t: m.inf_market_ecosystem_sector_processing(), v: '$3.6 ' + m.inf_market_unit_billion(), n: 27, c: 'var(--primary)', w: '27%' }, { t: m.inf_market_ecosystem_sector_logistics(), v: '$2.8 ' + m.inf_market_unit_billion(), n: 21, c: 'var(--primary)', w: '21%' }, { t: m.inf_market_ecosystem_sector_retail(), v: '$1.7 ' + m.inf_market_unit_billion(), n: 13, c: 'var(--primary)', w: '13%' }] as s (s.t)}
					<div class="space-y-1.5">
						<div class="flex items-baseline justify-between text-sm">
							<span class="text-muted-foreground">{s.t}</span>
							<span class="font-extrabold tabular-nums">{s.v}</span>
						</div>
						<div class="h-1 overflow-hidden rounded-full bg-muted">
							<div class="h-full rounded-full" style="width:{s.w}; background:{s.c}"></div>
						</div>
						<p class="text-xs text-muted-foreground">{m.inf_market_ecosystem_share({ n: s.n })}</p>
					</div>
				{/each}
			</Card.Content>
		</Card.Root>
	</div>

	<!-- Investments -->
	<Card.Root>
		<Card.Header class="flex-row flex-wrap items-start justify-between gap-3 space-y-0">
			<div>
				<Card.Title class="text-lg">{m.inf_market_ecosystem_invest_title()}</Card.Title>
				<Card.Description>{m.inf_market_ecosystem_invest_sub()}</Card.Description>
			</div>
			<span class="text-sm font-semibold whitespace-nowrap text-primary"
				>{m.inf_market_ecosystem_view_all()} →</span
			>
		</Card.Header>
		<Card.Content class="grid gap-3 md:grid-cols-3">
			{#each [{ t: m.inf_market_ecosystem_proj_indriver(), cat: m.inf_market_ecosystem_cat_logistics(), cc: 'bg-primary/10 text-primary', v: '$450 ' + m.inf_market_unit_million(), p: '24%' }, { t: m.inf_market_ecosystem_proj_dairy(), cat: m.inf_market_ecosystem_cat_processing(), cc: 'bg-primary/10 text-primary', v: '$320 ' + m.inf_market_unit_million(), p: '19%' }, { t: m.inf_market_ecosystem_proj_corridor(), cat: m.inf_market_ecosystem_cat_logistics(), cc: 'bg-primary/10 text-primary', v: '$280 ' + m.inf_market_unit_million(), p: '22%' }] as pr, i (pr.t)}
				<div class="flex items-center gap-3 rounded-xl border p-3">
					<img
						src={asset('/images/infographics/ecosystem-' + (i + 1) + '.webp')}
						alt=""
						loading="lazy"
						width="640"
						height="640"
						class="h-16 w-20 shrink-0 rounded-lg object-cover"
					/>
					<div class="min-w-0 flex-1">
						<p class="font-semibold break-words">{pr.t}</p>
						<span class="mt-0.5 inline-block rounded-full px-2 py-0.5 text-xs {pr.cc}"
							>{pr.cat}</span
						>
						<p class="mt-1"><b class="text-base font-extrabold tabular-nums">{pr.v}</b></p>
						<p class="text-xs text-muted-foreground">
							{m.inf_market_ecosystem_expected_return()} <b class="tabular-nums">{pr.p}</b>
						</p>
					</div>
					<span
						class="grid size-8 shrink-0 place-items-center rounded-full bg-muted"
						aria-hidden="true">→</span
					>
				</div>
			{/each}
		</Card.Content>
	</Card.Root>

	<!-- Source bullet list -->
	<div class="rounded-xl border bg-muted/30 p-4">
		<p class="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
			{m.inf_market_scenario_label()}
		</p>
		<ul class="list-disc space-y-1 pl-5 text-muted-foreground">
			<li>{m.inf_market_ecosystem_note_panel()}</li>
			<li>{m.inf_market_ecosystem_note_strategy()}</li>
			<li>{m.inf_market_ecosystem_note_sales()}</li>
			<li>{m.inf_market_ecosystem_note_financials()}</li>
			<li>{m.inf_market_ecosystem_note_shortlist()}</li>
			<li>{m.inf_market_ecosystem_note_capacity()}</li>
			<li>{m.inf_market_ecosystem_note_equipment()}</li>
		</ul>
	</div>
{/snippet}
