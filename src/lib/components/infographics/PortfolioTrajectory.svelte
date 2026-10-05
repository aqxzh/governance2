<script lang="ts">
	import { m } from '#lib/paraglide/messages.js';

	// Strings supplied by the parent must describe copied illustrative geometry, not measured series.
	let { title, caption }: { title: string; caption: string } = $props();

	// Exact source path literals; placement retains the original nested SVG percentage boxes.
	const curves = [
		{
			category: 'rte',
			label: m.inf_market_portfolio_cat_rte,
			source: 'pa9e1bc0',
			d: 'M0.0340557 94.7496C88.0341 90.7496 148.034 58.7496 228.034 50.7496C308.034 42.7496 398.034 64.7496 508.034 48.7496C608.034 32.7496 728.034 4.74958 848.034 0.749584',
			top: 21.35,
			height: 52.81,
			expandTop: 0.8,
			expandBottom: 0.8,
			width: 848.059,
			viewHeight: 95.4988,
			strokeWidth: 1.5,
			opacity: 1
		},
		{
			category: 'sandwiches',
			label: m.inf_market_portfolio_cat_sandwiches,
			source: 'p4b14440',
			d: 'M0.0333357 70.6008C108.033 64.6008 188.033 28.6008 268.033 30.6008C368.033 32.6008 468.033 52.6008 568.033 36.6008C668.033 20.6008 768.033 2.60078 848.033 0.600781',
			top: 31.46,
			height: 39.33,
			expandTop: 0.86,
			expandBottom: 0.86,
			width: 848.048,
			viewHeight: 71.2008,
			strokeWidth: 1.20194,
			opacity: 0.8
		},
		{
			category: 'nuggets',
			label: m.inf_market_portfolio_cat_nuggets,
			source: 'p313b9f00',
			d: 'M0.0162365 58.6004C148.016 54.6004 288.016 34.6004 418.016 30.6004C548.016 26.6004 668.016 8.60038 848.016 0.600376',
			top: 43.82,
			height: 32.58,
			expandTop: 1.04,
			expandBottom: 1.04,
			width: 848.043,
			viewHeight: 59.2011,
			strokeWidth: 1.20194,
			opacity: 0.65
		},
		{
			category: 'salads',
			label: m.inf_market_portfolio_cat_salads,
			source: 'p25f30400',
			d: 'M0.0130915 42.5493C168.013 38.5493 348.013 22.5493 528.013 16.5493C658.013 12.5493 768.013 4.54931 848.013 0.549314',
			top: 44.94,
			height: 23.6,
			expandTop: 1.31,
			expandBottom: 1.31,
			width: 848.041,
			viewHeight: 43.0992,
			strokeWidth: 1.1,
			opacity: 0.45
		},
		{
			category: 'frozen',
			label: m.inf_market_portfolio_cat_frozen,
			source: 'p8027280',
			d: 'M0.0116995 42.548C188.012 38.548 388.012 22.548 568.012 18.548C688.012 15.548 778.012 6.54799 848.012 0.547991',
			top: 55.06,
			height: 23.59,
			expandTop: 1.3,
			expandBottom: 1.31,
			width: 848.059,
			viewHeight: 43.0979,
			strokeWidth: 1.1,
			opacity: 0.3
		}
	] as const;
	const ticks = [
		{ value: 400, y: 16 },
		{ value: 300, y: 52 },
		{ value: 200, y: 88 },
		{ value: 100, y: 124 },
		{ value: 0, y: 158 }
	];
	const years = [2025, 2026, 2027, 2028, 2029, 2030];
</script>

<figure class="min-w-0 space-y-3">
	<p class="text-sm font-semibold">{title}</p>
	<ul class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
		{#each curves as curve, i (curve.category)}
			<li class="flex items-center gap-2">
				<svg width="20" height="8" class="shrink-0 text-primary" aria-hidden="true"
					><path
						d="M0 4H20"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-dasharray={['none', '10 3', '3 3', '12 3 3 3', '1 4'][i]}
					/></svg
				>
				{curve.label()}
			</li>
		{/each}
	</ul>
	<div class="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-2">
		<div class="relative text-xs text-muted-foreground tabular-nums" aria-hidden="true">
			{#each ticks as tick (tick.value)}
				<span class="absolute right-0 -translate-y-1/2" style:top={`${(tick.y / 178) * 100}%`}
					>{tick.value}</span
				>
			{/each}
		</div>
		<svg
			viewBox="112 0 848 178"
			role="img"
			aria-label={title}
			class="block h-36 w-full overflow-visible"
			preserveAspectRatio="none"
		>
			<title>{title}</title>
			<desc>{caption}</desc>
			{#each ticks as tick (tick.value)}
				<path d={`M112 ${tick.y}H960`} fill="none" stroke="var(--border)" />
			{/each}
			{#each curves as curve, i (curve.category)}
				<svg
					x="112.008"
					y={(178 * curve.top) / 100 - (((178 * curve.height) / 100) * curve.expandTop) / 100}
					width="847.912"
					height={((178 * curve.height) / 100) * (1 + (curve.expandTop + curve.expandBottom) / 100)}
					viewBox={`0 0 ${curve.width} ${curve.viewHeight}`}
					preserveAspectRatio="none"
					fill="none"
				>
					<path
						d={curve.d}
						stroke="var(--primary)"
						stroke-width={Math.max(curve.strokeWidth, 1.5)}
						vector-effect="non-scaling-stroke"
						stroke-dasharray={['none', '10 3', '3 3', '12 3 3 3', '1 4'][i]}
					/>
				</svg>
			{/each}
		</svg>
		<div></div>
		<div class="flex justify-between text-xs text-muted-foreground tabular-nums">
			{#each years as year (year)}<span>{year}</span>{/each}
		</div>
	</div>
	<figcaption class="text-xs text-muted-foreground">{caption}</figcaption>
</figure>
