<script lang="ts">
	/**
	 * Small LayerChart-based chart used inside infographic panels.
	 * Always renders an accessible, no-JS readable data table below the figure:
	 * the SVG chart is a visual duplication of the same values, never the only
	 * carrier of data.
	 */
	import { Area, Axis, Bars, Chart, Svg } from 'layerchart';
	import { m } from '#lib/paraglide/messages.js';
	import { ChartContainer, type ChartConfig } from '#lib/components/ui/chart/index.js';

	type BarsChart = {
		kind: 'bars';
		caption: string;
		tableLabel: string;
		/** Horizontal bars: label is the x category, value is the y value. */
		bars: { label: string; value: number; color?: string; highlighted?: boolean }[];
		defaultColor?: string;
		highlightColor?: string;
		yTicks?: number[];
		yMax?: number;
		width?: number;
		height?: number;
	};

	type AreaSeries = {
		label: string;
		color: string;
		/** One value per entry of `xLabels` (x is the zero-based index). */
		rows: number[];
	};

	type AreasChart = {
		kind: 'areas';
		caption: string;
		tableLabel: string;
		xLabels: string[];
		series: AreaSeries[];
		yTicks?: number[];
		yMax: number;
		width?: number;
		height?: number;
	};

	let {
		chart,
		class: className = ''
	}: {
		chart: BarsChart | AreasChart;
		class?: string;
	} = $props();

	let measuredWidth = $state(0);
	const width = $derived(measuredWidth || chart.width || 560);
	const height = $derived(chart.height ?? 190);

	const config: ChartConfig = $derived.by(() => {
		const c: ChartConfig = {};
		if (chart.kind === 'areas') {
			for (const s of chart.series) c[s.label] = { label: s.label, color: s.color };
		} else {
			c.value = { label: chart.caption };
		}
		return c;
	});

	// Bars data
	const barData = $derived(
		chart.kind === 'bars'
			? chart.bars.map((b) => ({
					x: b.label,
					y: b.value,
					fill:
						b.color ??
						(b.highlighted
							? (chart.highlightColor ?? 'var(--primary)')
							: (chart.defaultColor ??
								'color-mix(in oklab, var(--primary) 25%, var(--background))'))
				}))
			: []
	);

	// Areas data (one point list per series)
	const areaPoints = $derived(
		chart.kind === 'areas'
			? chart.series.map((s) => ({
					color: s.color,
					points: s.rows.map((v, i) => ({ x: i, y: v }))
				}))
			: []
	);

	const yDomain = $derived([
		0,
		chart.kind === 'areas' ? chart.yMax : (chart.yMax ?? Math.max(...barData.map((d) => d.y), 1))
	] as [number, number]);
</script>

<figure class={className}>
	<div class="w-full min-w-0" bind:clientWidth={measuredWidth} style:height={`${height}px`}>
		<ChartContainer {config} class="aspect-auto h-full w-full justify-start">
			<Chart
				data={chart.kind === 'bars' ? barData : areaPoints.flatMap((s) => s.points)}
				x="x"
				y="y"
				valueAxis="y"
				bandPadding={chart.kind === 'bars' ? 0.25 : undefined}
				{yDomain}
				ssr
				{width}
				{height}
				padding={{ top: 12, right: 12, bottom: 40, left: 40 }}
				role="img"
				aria-label={chart.caption}
			>
				<Svg
					viewBox={`0 0 ${width} ${height}`}
					title={chart.caption}
					role="img"
					aria-label={chart.caption}
				>
					<Axis placement="left" grid ticks={chart.yTicks} />
					<Axis
						placement="bottom"
						tickMarks={false}
						format={(value) =>
							chart.kind === 'bars'
								? String(chart.bars.findIndex((b) => b.label === String(value)) + 1)
								: String(chart.xLabels[Number(value)] ?? value)}
					/>
					{#if chart.kind === 'bars'}
						<Bars fill="var(--primary)" radius={3} />
					{:else}
						{#each areaPoints as s (s.color)}
							<Area
								data={s.points}
								y1="y"
								fill={s.color}
								stroke={s.color}
								fillOpacity={0.1}
								line={{ stroke: s.color, strokeWidth: 2 }}
							/>
						{/each}
					{/if}
				</Svg>
			</Chart>
		</ChartContainer>
	</div>
	<!-- No-JS / screen-reader fallback: the same numbers as a plain table -->
	<table class="mt-2 w-full text-left text-xs text-muted-foreground">
		<caption class="sr-only">{chart.tableLabel}</caption>
		<thead
			><tr
				><th scope="col">{m.inf_market_chart_category()}</th>
				{#if chart.kind === 'areas'}{#each chart.series as s (s.label)}<th scope="col">{s.label}</th
						>{/each}
				{:else}<th scope="col">{m.inf_market_chart_value()}</th>{/if}</tr
			></thead
		>
		<tbody>
			{#if chart.kind === 'areas'}
				{#each chart.xLabels as label, i (label)}
					<tr class="border-t">
						<th scope="row" class="py-0.5 pr-2 font-normal">{label}</th>
						{#each chart.series as s (s.label)}
							<td class="py-0.5 pr-2 tabular-nums">{s.rows[i]}</td>
						{/each}
					</tr>
				{/each}
			{:else}
				{#each chart.bars as b, i (b.label)}
					<tr class="border-t">
						<th scope="row" class="py-0.5 pr-2 font-normal">{i + 1}. {b.label}</th>
						<td class="py-0.5 pr-2 tabular-nums">{b.value}</td>
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
	<figcaption class="sr-only">{chart.caption}</figcaption>
</figure>
