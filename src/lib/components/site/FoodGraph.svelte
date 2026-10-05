<script lang="ts">
	import { m } from '#lib/paraglide/messages.js';
	const nodes = [
		{ x: 70, y: 60, label: () => 'Ферма Айдар', type: m.food_supplier },
		{ x: 70, y: 180, label: () => 'Мясокомб. Ет', type: m.food_supplier },
		{ x: 220, y: 110, label: m.food_product_1, type: m.food_product },
		{ x: 220, y: 210, label: m.food_product_4, type: m.food_product },
		{ x: 370, y: 70, label: () => 'ТТ-07 Самал', type: m.food_store },
		{ x: 370, y: 170, label: () => 'ТТ-03 Базар', type: m.food_store },
		{ x: 370, y: 250, label: () => 'ТТ-12 Орбита', type: m.food_store },
		{ x: 500, y: 120, label: m.food_household_a, type: m.food_household },
		{ x: 500, y: 210, label: m.food_household_b, type: m.food_household }
	];
	const edges = [
		[70, 60, 220, 110],
		[70, 180, 220, 210],
		[220, 110, 370, 70],
		[220, 210, 370, 170],
		[220, 110, 370, 250],
		[370, 70, 500, 120],
		[370, 170, 500, 210]
	];
</script>

<figure class="space-y-4">
	<svg
		viewBox="0 0 560 300"
		role="img"
		aria-label={m.food_graph_label()}
		class="w-full rounded-lg bg-muted"
		><title>{m.food_graph_label()}</title>{#each edges as [x1, y1, x2, y2], i (i)}<line
				x1={x1 + 14}
				{y1}
				x2={x2 - 14}
				{y2}
				class="stroke-border"
				stroke-width="2"
			/>{/each}{#each nodes as n, i (i)}<g
				><circle cx={n.x} cy={n.y} r="16" class="fill-primary/80" /><text
					x={n.x}
					y={n.y + 32}
					text-anchor="middle"
					font-size="11"
					class="fill-foreground">{n.label()}</text
				></g
			>{/each}<text x="125" y="70" font-size="10" class="fill-muted-foreground">09:00–18:00</text
		><text x="270" y="90" font-size="10" class="fill-muted-foreground">{m.food_daily()}</text><text
			x="415"
			y="282"
			font-size="10"
			class="fill-muted-foreground">{m.food_memory_nine()}</text
		></svg
	>
	<ul class="grid gap-2 text-sm sm:grid-cols-2">
		{#each nodes as n, i (i)}<li>{n.type()}: {n.label()}</li>{/each}
	</ul>
	<figcaption class="text-sm text-muted-foreground">{m.food_graph_edges()}</figcaption>
</figure>
