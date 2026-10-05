<script lang="ts">
	import { m } from '#lib/paraglide/messages.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import BarChartIcon from '@lucide/svelte/icons/chart-column';
	import BrainIcon from '@lucide/svelte/icons/brain';
	import CircleCheckIcon from '@lucide/svelte/icons/circle-check';
	import CrosshairIcon from '@lucide/svelte/icons/crosshair';
	import CpuIcon from '@lucide/svelte/icons/cpu';
	import DumbbellIcon from '@lucide/svelte/icons/dumbbell';
	import LayersIcon from '@lucide/svelte/icons/layers';
	import LightbulbIcon from '@lucide/svelte/icons/lightbulb';
	import LinkIcon from '@lucide/svelte/icons/link';
	import MapIcon from '@lucide/svelte/icons/map';
	import MessageCircleIcon from '@lucide/svelte/icons/message-circle';
	import RefreshCwIcon from '@lucide/svelte/icons/refresh-cw';
	import ScaleIcon from '@lucide/svelte/icons/scale';
	import ScanFaceIcon from '@lucide/svelte/icons/scan-face';
	import ScissorsIcon from '@lucide/svelte/icons/scissors';
	import SearchIcon from '@lucide/svelte/icons/search';
	import ShieldCheckIcon from '@lucide/svelte/icons/shield-check';
	import ShieldOffIcon from '@lucide/svelte/icons/shield-off';
	import StarIcon from '@lucide/svelte/icons/star';
	import TableIcon from '@lucide/svelte/icons/table-2';
	import TargetIcon from '@lucide/svelte/icons/target';
	import TriangleAlertIcon from '@lucide/svelte/icons/triangle-alert';
	import UserIcon from '@lucide/svelte/icons/user';

	type Variant = 1 | 2 | 3 | 4 | 5 | 6 | 7;

	let { variant, title }: { variant: Variant; title: string } = $props();

	// Deterministic PRNG so SSR and client markup match exactly (no hydration drift).
	function seeded(seed: number): () => number {
		let s = seed % 2147483647;
		if (s <= 0) s += 2147483646;
		return () => {
			s = (s * 16807) % 2147483647;
			return (s - 1) / 2147483646;
		};
	}

	// --- Variant 1: illustrative function-network silhouette -------------------
	// Cluster placement echoes the source composition; it is NOT measured data.
	type Cluster = { cx: number; cy: number; r: number };
	const clusters: Cluster[] = [
		{ cx: 150, cy: 120, r: 62 },
		{ cx: 82, cy: 258, r: 56 },
		{ cx: 212, cy: 322, r: 52 },
		{ cx: 322, cy: 178, r: 56 },
		{ cx: 302, cy: 424, r: 44 },
		{ cx: 92, cy: 402, r: 40 },
		{ cx: 432, cy: 332, r: 54 },
		{ cx: 512, cy: 108, r: 62 },
		{ cx: 686, cy: 148, r: 70 },
		{ cx: 766, cy: 298, r: 52 },
		{ cx: 652, cy: 384, r: 44 },
		{ cx: 806, cy: 422, r: 38 },
		{ cx: 462, cy: 38, r: 34 },
		{ cx: 846, cy: 78, r: 38 }
	];
	const clusterLinks: [number, number][] = [
		[0, 3],
		[0, 1],
		[1, 2],
		[2, 4],
		[3, 4],
		[3, 6],
		[6, 11],
		[4, 10],
		[10, 11],
		[7, 8],
		[8, 9],
		[9, 10],
		[7, 12],
		[8, 13]
	];
	type Dot = { x: number; y: number; s: number };
	const clusterDots: Dot[] = clusters.flatMap((c, i) => {
		const rnd = seeded(1013 + i * 77);
		return Array.from({ length: Math.round(c.r * 0.55) }, () => {
			const a = rnd() * Math.PI * 2;
			const rr = Math.sqrt(rnd()) * c.r;
			return {
				x: Math.round((c.cx + Math.cos(a) * rr) * 10) / 10,
				y: Math.round((c.cy + Math.sin(a) * rr * 0.85) * 10) / 10,
				s: Math.round((1.4 + rnd() * 1.8) * 10) / 10
			};
		});
	});

	// --- Variant 3: pentagon radar (all five axes at maximum, as in source) ----
	const RADAR_CX = 210;
	const RADAR_CY = 190;
	const RADAR_R = 128;
	function radarPoint(i: number, r: number): string {
		const a = ((-90 + i * 72) * Math.PI) / 180;
		return `${Math.round((RADAR_CX + Math.cos(a) * r) * 10) / 10},${Math.round((RADAR_CY + Math.sin(a) * r) * 10) / 10}`;
	}
	const radarRings = [1, 2, 3, 4, 5].map((k) =>
		[0, 1, 2, 3, 4].map((i) => radarPoint(i, (RADAR_R * k) / 5)).join(' ')
	);
	const radarPolygon = [0, 1, 2, 3, 4].map((i) => radarPoint(i, RADAR_R)).join(' ');

	// Labels render in a wrapping HTML legend, not at clipped SVG edges.
	// Calls in the template are recomputed with the other translated copy.

	// --- Variant 4: donut, single source value 87.6% ----------------------------
	const DONUT_R = 48;
	const DONUT_C = 2 * Math.PI * DONUT_R;
	const DONUT_VALUE = 0.876;

	// --- Variant 5: illustrative heat grid + decaying bar strip -----------------
	const HEAT_COLS = 14;
	const HEAT_ROWS = 9;
	const CELL = 26;
	type HeatCell = { x: number; y: number; fill: string };
	const heatCells: HeatCell[] = (() => {
		const rnd = seeded(2024);
		const hotX = 9;
		const hotY = 4;
		const cells: HeatCell[] = [];
		for (let ry = 0; ry < HEAT_ROWS; ry++) {
			for (let rx = 0; rx < HEAT_COLS; rx++) {
				const d = Math.hypot(rx - hotX, ry - hotY) + rnd() * 0.5;
				const fill =
					d < 1.2
						? 'var(--destructive)'
						: d < 2.4
							? 'color-mix(in oklch, var(--destructive) 70%, var(--background))'
							: d < 3.4
								? 'color-mix(in oklch, var(--primary) 25%, var(--background))'
								: d < 4.6
									? 'color-mix(in oklch, var(--primary) 40%, var(--background))'
									: d < 6
										? 'color-mix(in oklch, var(--primary) 60%, var(--background))'
										: 'var(--primary)';
				cells.push({ x: rx * CELL, y: ry * CELL, fill });
			}
		}
		return cells;
	})();
	const HEAT_W = HEAT_COLS * CELL;
	const HEAT_H = HEAT_ROWS * CELL;
	const HOT_X = 9 * CELL + CELL / 2;
	const HOT_Y = 4 * CELL + CELL / 2;
	const ageBars: { x: number; h: number }[] = (() => {
		const rnd = seeded(303);
		return Array.from({ length: 14 }, (_, i) => ({
			x: i * 26,
			h: Math.max(8, Math.round(64 - i * 4.2 + (rnd() - 0.5) * 6))
		}));
	})();

	// --- Variant 6: risk gauge, 15 of 100 ---------------------------------------
	const GAUGE_R = 66;
	const GAUGE_C = 2 * Math.PI * GAUGE_R;
	const GAUGE_VALUE = 0.15;

	// --- Variant 7: reconciliation counts ---------------------------------------
	const MATCHED = '177 036';
	const INVALID = '112 086';
	const ROW_LEFT_1 = '30700';
	const ROW_RIGHT_1 = '2025';
	const ROW_LEFT_2 = '25004';
	const ROW_RIGHT_2 = 'IIN/BIN';
</script>

{#snippet feature(t: string, d: string, Icon: typeof LayersIcon)}
	<Card.Root class="h-full">
		<Card.Content class="flex items-start gap-3">
			<span
				class="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
			>
				<Icon class="size-5" aria-hidden="true" />
			</span>
			<div class="min-w-0">
				<Card.Title class="text-base">{t}</Card.Title>
				<Card.Description class="mt-1">{d}</Card.Description>
			</div>
		</Card.Content>
	</Card.Root>
{/snippet}

<section class="flex flex-col gap-6" aria-label={title}>
	{#if variant === 1}
		<p class="text-2xl font-bold tracking-tight">{m.inf_diagnostics_01_headline()}</p>
		<div class="grid items-center gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
			<svg
				viewBox="0 0 900 470"
				class="w-full rounded-lg border bg-muted/40"
				role="img"
				aria-label={m.inf_diagnostics_01_chart_title()}
			>
				{#each clusterLinks as [a, b] (`${a}-${b}`)}
					<line
						x1={clusters[a].cx}
						y1={clusters[a].cy}
						x2={clusters[b].cx}
						y2={clusters[b].cy}
						class="stroke-border"
						stroke-width="1"
					/>
				{/each}
				{#each clusterDots as dot, di (di)}
					<circle cx={dot.x} cy={dot.y} r={dot.s} class="fill-muted-foreground/55" />
				{/each}
				{#each clusters as c, ci (ci)}
					<circle
						cx={c.cx}
						cy={c.cy}
						r={Math.min(5, c.r * 0.09)}
						class="fill-muted-foreground/70"
					/>
				{/each}
				<g>
					<circle
						cx="584"
						cy="239"
						r="88"
						class="fill-none stroke-destructive/15"
						stroke-width="10"
					/>
					<circle
						cx="584"
						cy="239"
						r="60"
						class="fill-none stroke-destructive/30"
						stroke-width="8"
					/>
					<circle
						cx="584"
						cy="239"
						r="36"
						class="fill-none stroke-destructive/55"
						stroke-width="6"
					/>
					<circle cx="572" cy="232" r="15" class="fill-destructive" />
					<circle cx="598" cy="247" r="15" class="fill-destructive" />
					<line x1="612" y1="252" x2="896" y2="344" class="stroke-destructive" stroke-width="2" />
				</g>
			</svg>
			<Card.Root class="border-destructive/40">
				<Card.Content>
					<Card.Title class="text-base">{m.inf_diagnostics_01_collision_label()}</Card.Title>
					<Card.Description class="mt-1">
						{m.inf_diagnostics_01_collision_text()}
					</Card.Description>
				</Card.Content>
			</Card.Root>
		</div>
	{:else if variant === 2}
		<p class="text-2xl font-bold tracking-tight">{m.inf_diagnostics_02_headline()}</p>
		<div class="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
			<div>
				<p class="sr-only">{m.inf_diagnostics_02_chart_title()}</p>
				<!-- Decorative workload silhouette; agency labels unreadable in source, see gap note. -->
				<div class="grid auto-rows-[52px] grid-cols-6 gap-2" aria-hidden="true">
					<div
						class="col-span-2 row-span-2 flex items-center justify-center rounded-md bg-primary/85 font-semibold text-primary-foreground"
					>
						{m.inf_diagnostics_02_block_msh()}
					</div>
					<div class="col-span-2 rounded-md bg-muted"></div>
					<div class="col-span-2 rounded-md bg-muted/70"></div>
					<div class="col-span-2 rounded-md bg-muted"></div>
					<div class="col-span-1 rounded-md bg-muted/60"></div>
					<div class="col-span-1 rounded-md bg-accent"></div>
					<div class="col-span-2 rounded-md bg-muted/80"></div>
					<div class="col-span-2 rounded-md bg-muted"></div>
					<div class="col-span-2 rounded-md bg-muted/70"></div>
					<div class="col-span-1 rounded-md bg-muted"></div>
					<div class="col-span-2 rounded-md bg-muted/60"></div>
					<div class="col-span-1 rounded-md bg-accent"></div>
					<div class="col-span-1 rounded-md bg-muted/80"></div>
					<div class="col-span-1 rounded-md bg-muted"></div>
					<div class="col-span-2 rounded-md bg-muted/70"></div>
					<div class="col-span-1 rounded-md bg-muted/60"></div>
					<div class="col-span-1 rounded-md bg-muted"></div>
					<div class="col-span-1 rounded-md bg-muted/60"></div>
					<div class="col-span-2 rounded-md bg-muted/80"></div>
					<div class="col-span-1 rounded-md bg-muted"></div>
					<div class="col-span-1 rounded-md bg-muted/70"></div>
					<div class="col-span-1 rounded-md bg-muted/50"></div>
				</div>
				<p class="mt-2 text-xs text-muted-foreground italic">
					{m.inf_diagnostics_02_gap_note()}
				</p>
			</div>
			<Card.Root class="border-primary/40">
				<Card.Content>
					<Card.Title class="text-base">{m.inf_diagnostics_02_profile_title()}</Card.Title>
					<ul class="mt-2 space-y-1 text-sm">
						<li>{m.inf_diagnostics_02_profile_fte()}</li>
						<li>{m.inf_diagnostics_02_profile_overtime()}</li>
						<li>{m.inf_diagnostics_02_profile_overdue()}</li>
					</ul>
				</Card.Content>
			</Card.Root>
		</div>
	{:else if variant === 3}
		<p class="text-2xl font-bold tracking-tight">{m.inf_diagnostics_03_headline()}</p>
		<div class="grid items-center gap-6 lg:grid-cols-2">
			<div class="flex flex-col gap-4">
				<div class="flex items-start gap-3">
					<span
						class="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"
					>
						<UserIcon class="size-5" aria-hidden="true" />
					</span>
					<p
						class="max-w-xs rounded-2xl rounded-tl-sm bg-primary px-4 py-3 text-sm text-primary-foreground"
					>
						{m.inf_diagnostics_03_prompt()}
					</p>
				</div>
				<p
					class="ml-10 max-w-xs self-end rounded-2xl rounded-tr-sm border bg-card px-4 py-3 text-sm shadow-sm sm:self-start"
				>
					{m.inf_diagnostics_03_response()}
				</p>
			</div>
			<div class="relative mx-auto w-full max-w-[440px] pt-14">
				<p
					class="absolute top-0 right-0 z-10 flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
				>
					<StarIcon class="size-4" aria-hidden="true" />
					{m.inf_diagnostics_03_candidate_badge()}
				</p>
				<svg
					viewBox="0 0 420 400"
					class="w-full"
					role="img"
					aria-label={m.inf_diagnostics_03_radar_title()}
				>
					{#each radarRings as ring, k (k)}
						<polygon
							points={ring}
							class="fill-none stroke-border"
							stroke-width={k === 4 ? 1.5 : 1}
						/>
					{/each}
					{#each [0, 1, 2, 3, 4] as i (i)}
						{@const [ax, ay] = radarPoint(i, RADAR_R).split(',').map(Number)}
						<line
							x1={RADAR_CX}
							y1={RADAR_CY}
							x2={ax}
							y2={ay}
							class="stroke-border"
							stroke-width="1"
						/>
					{/each}
					<polygon
						points={radarPolygon}
						class="fill-primary/15 stroke-primary"
						stroke-width="2.5"
					/>
					{#each [0, 1, 2, 3, 4] as i (i)}
						{@const [x, y] = radarPoint(i, RADAR_R + 20)
							.split(',')
							.map(Number)}
						<text {x} {y} text-anchor="middle" class="fill-foreground" font-size="14">{i + 1}</text>
					{/each}
				</svg>
				<ol
					class="grid list-inside list-decimal gap-2 text-sm text-muted-foreground sm:grid-cols-2"
				>
					{#each [m.inf_diagnostics_03_axis_experience(), m.inf_diagnostics_03_axis_education(), m.inf_diagnostics_03_axis_age(), m.inf_diagnostics_03_axis_category(), m.inf_diagnostics_03_axis_skills()] as label, i (i)}
						<li class="min-w-0 break-words">{label}</li>
					{/each}
				</ol>
			</div>
		</div>
	{:else if variant === 4}
		<p class="text-2xl font-bold tracking-tight">{m.inf_diagnostics_04_headline()}</p>
		<p class="sr-only">{m.inf_diagnostics_04_flow_title()}</p>
		<div class="flex flex-col items-center gap-4 xl:flex-row xl:gap-6">
			<div class="flex flex-col items-center gap-2">
				<svg
					viewBox="0 0 120 120"
					class="size-32"
					role="img"
					aria-label={`${m.inf_diagnostics_04_current_label()} — 87.6%`}
				>
					<circle cx="60" cy="60" r={DONUT_R} class="fill-none stroke-muted" stroke-width="15" />
					<circle
						cx="60"
						cy="60"
						r={DONUT_R}
						class="fill-none stroke-muted-foreground"
						stroke-width="15"
						stroke-linecap="butt"
						stroke-dasharray={`${(DONUT_C * DONUT_VALUE).toFixed(1)} ${DONUT_C.toFixed(1)}`}
						transform="rotate(-90 60 60)"
					/>
					<text
						x="60"
						y="66"
						text-anchor="middle"
						class="fill-current text-lg font-bold text-foreground"
					>
						87.6%
					</text>
				</svg>
				<div class="text-center">
					<p class="text-sm font-medium">{m.inf_diagnostics_04_current_label()}</p>
					<p class="mt-1 text-xs text-muted-foreground">{m.inf_diagnostics_04_barriers_label()}</p>
				</div>
			</div>
			<ArrowRightIcon
				class="size-8 shrink-0 rotate-90 text-muted-foreground xl:rotate-0"
				aria-hidden="true"
			/>
			<Card.Root class="w-full max-w-56 shrink-0 border-border xl:w-auto">
				<Card.Content class="flex items-center gap-3">
					<span
						class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground"
					>
						<CpuIcon class="size-5" aria-hidden="true" />
					</span>
					<Card.Title class="text-base">{m.inf_diagnostics_04_cube_label()}</Card.Title>
				</Card.Content>
			</Card.Root>
			<ArrowRightIcon
				class="size-8 shrink-0 rotate-90 text-muted-foreground xl:rotate-0"
				aria-hidden="true"
			/>
			<div class="w-full max-w-64 rounded-lg bg-primary p-4 text-primary-foreground">
				<div class="flex items-center gap-2">
					<CircleCheckIcon class="size-6 shrink-0" aria-hidden="true" />
					<p class="font-semibold">{m.inf_diagnostics_04_result_title()}</p>
				</div>
				<p class="mt-2 text-sm opacity-90">{m.inf_diagnostics_04_result_text()}</p>
			</div>
		</div>
	{:else if variant === 5}
		<p class="text-2xl font-bold tracking-tight">{m.inf_diagnostics_05_headline()}</p>
		<div class="flex flex-col gap-6">
			<div class="relative mx-auto w-full max-w-2xl">
				<p
					class="absolute top-2 right-2 z-10 rounded-lg border bg-card/95 px-3 py-1.5 text-sm font-semibold shadow-sm"
				>
					{m.inf_diagnostics_05_callout()}
				</p>
				<p class="sr-only">{m.inf_diagnostics_05_heatmap_title()}</p>
				<!-- Decorative heat pattern; axes/values unreadable in source, see gap note. -->
				<svg
					viewBox={`0 0 ${HEAT_W} ${HEAT_H}`}
					class="w-full rounded-lg border"
					aria-hidden="true"
				>
					{#each heatCells as cell, hi (hi)}
						<rect x={cell.x} y={cell.y} width={CELL} height={CELL} fill={cell.fill} />
					{/each}
					<circle cx={HOT_X} cy={HOT_Y} r="14" class="fill-background/90" />
					<circle cx={HOT_X} cy={HOT_Y} r="5" class="fill-foreground" />
				</svg>
			</div>
			<div class="mx-auto w-full max-w-md">
				<p class="sr-only">{m.inf_diagnostics_05_bars_title()}</p>
				<!-- Decorative bar strip; age-group labels unreadable in source, see gap note. -->
				<svg viewBox="0 0 364 72" class="w-full" aria-hidden="true">
					{#each ageBars as bar, bi (bi)}
						<rect
							x={bar.x}
							y={70 - bar.h}
							width="18"
							height={bar.h}
							rx="9"
							class="fill-primary/80"
						/>
					{/each}
				</svg>
				<p class="mt-2 text-center text-xs text-muted-foreground italic">
					{m.inf_diagnostics_05_gap_note()}
				</p>
			</div>
		</div>
	{:else if variant === 6}
		<p class="text-2xl font-bold tracking-tight">{m.inf_diagnostics_06_headline()}</p>
		<div
			class="grid items-center justify-items-center gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
		>
			<Card.Root class="w-full max-w-64">
				<Card.Content class="flex items-center gap-3">
					<span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
						<ScanFaceIcon class="size-5" aria-hidden="true" />
					</span>
					<div>
						<p class="text-xs text-muted-foreground">{m.inf_diagnostics_06_check_record_label()}</p>
						<p class="font-semibold">{m.inf_diagnostics_06_check_record_value()}</p>
					</div>
				</Card.Content>
			</Card.Root>
			<div class="flex flex-col items-center">
				<svg
					viewBox="0 0 220 150"
					class="w-56"
					role="img"
					aria-label={m.inf_diagnostics_06_gauge_aria()}
				>
					<circle cx="110" cy="75" r={GAUGE_R} class="fill-none stroke-muted" stroke-width="13" />
					<circle
						cx="110"
						cy="75"
						r={GAUGE_R}
						class="fill-none stroke-primary"
						stroke-width="13"
						stroke-linecap="round"
						stroke-dasharray={`${(GAUGE_C * GAUGE_VALUE).toFixed(1)} ${GAUGE_C.toFixed(1)}`}
						transform="rotate(-215 110 75)"
					/>
					<text
						x="110"
						y="78"
						text-anchor="middle"
						class="fill-current text-4xl font-bold text-foreground"
					>
						15
					</text>
					<text
						x="110"
						y="102"
						text-anchor="middle"
						class="fill-current text-base text-muted-foreground"
					>
						100
					</text>
				</svg>
				<p class="-mt-2 font-semibold text-primary">{m.inf_diagnostics_06_gauge_label()}</p>
			</div>
			<div class="flex w-full max-w-64 flex-col gap-4">
				<Card.Root>
					<Card.Content class="flex items-center gap-3">
						<span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
							<ShieldCheckIcon class="size-5" aria-hidden="true" />
						</span>
						<div>
							<p class="text-xs text-muted-foreground">
								{m.inf_diagnostics_06_check_capacity_label()}
							</p>
							<p class="font-semibold">{m.inf_diagnostics_06_check_capacity_value()}</p>
						</div>
					</Card.Content>
				</Card.Root>
				<Card.Root>
					<Card.Content class="flex items-center gap-3">
						<span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
							<UserIcon class="size-5" aria-hidden="true" />
						</span>
						<div>
							<p class="text-xs text-muted-foreground">
								{m.inf_diagnostics_06_check_affiliation_label()}
							</p>
							<p class="font-semibold">{m.inf_diagnostics_06_check_affiliation_value()}</p>
						</div>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	{:else if variant === 7}
		<p class="text-2xl font-bold tracking-tight">{m.inf_diagnostics_07_headline()}</p>
		<Card.Root>
			<Card.Content class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:divide-x sm:divide-border">
				<div class="text-center">
					<p class="text-4xl font-bold text-primary tabular-nums sm:text-5xl">{MATCHED}</p>
					<p class="mt-1 text-sm text-muted-foreground">{m.inf_diagnostics_07_matched_label()}</p>
				</div>
				<div class="text-center">
					<p class="text-4xl font-bold text-destructive tabular-nums sm:text-5xl">{INVALID}</p>
					<p class="mt-1 text-sm text-muted-foreground">{m.inf_diagnostics_07_invalid_label()}</p>
				</div>
			</Card.Content>
		</Card.Root>
		<p class="sr-only">{m.inf_diagnostics_07_recon_title()}</p>
		<div class="grid grid-cols-1 items-stretch gap-3 md:grid-cols-[72px_minmax(0,1fr)_72px]">
			<!-- Decorative record stacks flanking the reconciliation panel, as in the source. -->
			<div class="hidden flex-col justify-between gap-2 md:flex" aria-hidden="true">
				<span class="h-3 rounded-full bg-primary/30"></span>
				<span class="h-3 w-4/5 rounded-full bg-primary/20"></span>
				<span class="h-3 w-3/5 rounded-full bg-primary/30"></span>
				<span class="h-3 w-2/3 rounded-full bg-primary/20"></span>
			</div>
			<Card.Root>
				<Card.Content class="flex flex-col gap-4">
					<div
						class="flex items-center gap-3"
						role="img"
						aria-label={m.inf_diagnostics_07_row_matched_aria()}
					>
						<span
							class="min-w-20 rounded-md bg-primary/10 px-3 py-1.5 text-center font-semibold tabular-nums"
						>
							{ROW_LEFT_1}
						</span>
						<span class="relative min-w-0 flex-1">
							<span class="block h-0.5 w-full bg-primary"></span>
							<CircleCheckIcon
								class="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 fill-card text-primary"
								aria-hidden="true"
							/>
						</span>
						<span class="min-w-20 rounded-md bg-primary/10 px-3 py-1.5 text-center font-semibold">
							{ROW_RIGHT_1}
						</span>
					</div>
					<div
						class="flex items-center gap-3"
						role="img"
						aria-label={m.inf_diagnostics_07_row_conflict_aria()}
					>
						<span
							class="min-w-20 rounded-md bg-destructive/10 px-3 py-1.5 text-center font-semibold tabular-nums"
						>
							{ROW_LEFT_2}
						</span>
						<span class="relative min-w-0 flex-1">
							<span class="block border-t-2 border-dashed border-destructive"></span>
							<TriangleAlertIcon
								class="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 fill-card text-destructive"
								aria-hidden="true"
							/>
						</span>
						<span
							class="min-w-20 rounded-md bg-destructive/10 px-3 py-1.5 text-center font-semibold"
						>
							{ROW_RIGHT_2}
						</span>
					</div>
				</Card.Content>
			</Card.Root>
			<div class="hidden flex-col justify-between gap-2 md:flex" aria-hidden="true">
				<span class="h-3 rounded-full bg-primary/30"></span>
				<span class="ml-auto h-3 w-4/5 rounded-full bg-primary/20"></span>
				<span class="ml-auto h-3 w-3/5 rounded-full bg-primary/30"></span>
				<span class="h-3 w-2/3 rounded-full bg-primary/20"></span>
			</div>
		</div>
	{/if}

	<div class="grid gap-4 sm:grid-cols-3">
		{#if variant === 1}
			{@render feature(m.inf_diagnostics_01_f1_title(), m.inf_diagnostics_01_f1_text(), LayersIcon)}
			{@render feature(
				m.inf_diagnostics_01_f2_title(),
				m.inf_diagnostics_01_f2_text(),
				ScissorsIcon
			)}
			{@render feature(
				m.inf_diagnostics_01_f3_title(),
				m.inf_diagnostics_01_f3_text(),
				LightbulbIcon
			)}
		{:else if variant === 2}
			{@render feature(m.inf_diagnostics_02_f1_title(), m.inf_diagnostics_02_f1_text(), MapIcon)}
			{@render feature(
				m.inf_diagnostics_02_f2_title(),
				m.inf_diagnostics_02_f2_text(),
				DumbbellIcon
			)}
			{@render feature(m.inf_diagnostics_02_f3_title(), m.inf_diagnostics_02_f3_text(), ScaleIcon)}
		{:else if variant === 3}
			{@render feature(
				m.inf_diagnostics_03_f1_title(),
				m.inf_diagnostics_03_f1_text(),
				MessageCircleIcon
			)}
			{@render feature(
				m.inf_diagnostics_03_f2_title(),
				m.inf_diagnostics_03_f2_text(),
				CrosshairIcon
			)}
			{@render feature(m.inf_diagnostics_03_f3_title(), m.inf_diagnostics_03_f3_text(), StarIcon)}
		{:else if variant === 4}
			{@render feature(
				m.inf_diagnostics_04_f1_title(),
				m.inf_diagnostics_04_f1_text(),
				RefreshCwIcon
			)}
			{@render feature(
				m.inf_diagnostics_04_f2_title(),
				m.inf_diagnostics_04_f2_text(),
				ShieldOffIcon
			)}
			{@render feature(m.inf_diagnostics_04_f3_title(), m.inf_diagnostics_04_f3_text(), CpuIcon)}
		{:else if variant === 5}
			{@render feature(m.inf_diagnostics_05_f1_title(), m.inf_diagnostics_05_f1_text(), BrainIcon)}
			{@render feature(m.inf_diagnostics_05_f2_title(), m.inf_diagnostics_05_f2_text(), TableIcon)}
			{@render feature(m.inf_diagnostics_05_f3_title(), m.inf_diagnostics_05_f3_text(), TargetIcon)}
		{:else if variant === 6}
			{@render feature(
				m.inf_diagnostics_06_f1_title(),
				m.inf_diagnostics_06_f1_text(),
				ScanFaceIcon
			)}
			{@render feature(
				m.inf_diagnostics_06_f2_title(),
				m.inf_diagnostics_06_f2_text(),
				TriangleAlertIcon
			)}
			{@render feature(
				m.inf_diagnostics_06_f3_title(),
				m.inf_diagnostics_06_f3_text(),
				ShieldCheckIcon
			)}
		{:else if variant === 7}
			{@render feature(m.inf_diagnostics_07_f1_title(), m.inf_diagnostics_07_f1_text(), LinkIcon)}
			{@render feature(m.inf_diagnostics_07_f2_title(), m.inf_diagnostics_07_f2_text(), SearchIcon)}
			{@render feature(
				m.inf_diagnostics_07_f3_title(),
				m.inf_diagnostics_07_f3_text(),
				BarChartIcon
			)}
		{/if}
	</div>

	<p class="text-xs text-muted-foreground">{m.inf_diagnostics_demo_note()}</p>
</section>
