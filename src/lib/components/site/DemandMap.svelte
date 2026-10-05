<script lang="ts">
	import * as Card from '#lib/components/ui/card/index.js';
	import * as NativeSelect from '#lib/components/ui/native-select/index.js';
	import { Label } from '#lib/components/ui/label/index.js';
	import { regions, regionLabels, mapOutline, cities } from '#lib/advisor.js';
	import { m } from '#lib/paraglide/messages.js';
	const id = $props.id();
	const shortNames: Record<string, () => string> = {
		wko: m.region_short_wko,
		nko: m.region_short_nko,
		ekz: m.region_short_ekz
	};
	let selected = $state('');
	const region = $derived(regions.find((r) => r.id === selected));
	const city = $derived(cities.find((c) => 'city-' + c.name === selected));
	function selectKey(event: KeyboardEvent, value: string) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			selected = value;
		}
	}
</script>

<Card.Root
	><Card.Header><h3 class="text-lg font-semibold">{m.advisor_map()}</h3></Card.Header><Card.Content
		class="space-y-4"
	>
		<svg
			viewBox="-15 -10 810 440"
			role="group"
			aria-label={m.advisor_map()}
			class="w-full rounded-lg bg-muted/40"
		>
			<defs><clipPath id={id + '-outline'}><path d={mapOutline} /></clipPath></defs>
			<g clip-path={'url(#' + id + '-outline)'}
				>{#each regions as r (r.id)}<polygon
						points={r.points}
						role="button"
						tabindex="0"
						aria-label={regionLabels[r.id]() + ': ' + r.value}
						aria-pressed={selected === r.id}
						class="cursor-pointer stroke-border outline-none hover:fill-primary/20 focus:fill-primary/20"
						class:fill-primary={selected === r.id}
						class:fill-muted={selected !== r.id}
						stroke-width="2"
						onmouseenter={() => (selected = r.id)}
						onfocus={() => (selected = r.id)}
						onclick={() => (selected = r.id)}
						onkeydown={(e) => selectKey(e, r.id)}
						><title>{regionLabels[r.id]()} · {r.value}</title></polygon
					>{/each}</g
			>
			{#each regions as r (r.id)}<text
					x={r.lx}
					y={r.id === 'almaty' ? r.ly - 40 : r.ly}
					text-anchor="middle"
					font-size="12"
					class={selected === r.id
						? 'pointer-events-none fill-primary-foreground'
						: 'pointer-events-none fill-muted-foreground'}
					>{shortNames[r.id]?.() ?? regionLabels[r.id]()}</text
				>{/each}
			<path d={mapOutline} fill="none" class="pointer-events-none stroke-border" stroke-width="2" />
			{#each cities as c (c.name)}<g
					><circle
						cx={c.x}
						cy={c.y}
						r="8"
						role="button"
						tabindex="0"
						aria-label={c.name + ': ' + c.value}
						aria-pressed={selected === 'city-' + c.name}
						class="cursor-pointer fill-primary stroke-background outline-none focus:stroke-foreground"
						stroke-width="3"
						onmouseenter={() => (selected = 'city-' + c.name)}
						onfocus={() => (selected = 'city-' + c.name)}
						onclick={() => (selected = 'city-' + c.name)}
						onkeydown={(e) => selectKey(e, 'city-' + c.name)}
					/><text
						x={c.x + 12}
						y={c.y + 4}
						font-size="15"
						class="pointer-events-none fill-foreground">{c.name}</text
					></g
				>{/each}
		</svg>
		<div class="space-y-2">
			<Label for={id + '-region'}>{m.advisor_region()}</Label><NativeSelect.Root
				id={id + '-region'}
				bind:value={selected}
				class="w-full"
				><option value="">{m.advisor_no_region()}</option>{#each regions as r (r.id)}<option
						value={r.id}>{regionLabels[r.id]()}</option
					>{/each}{#each cities as c (c.name)}<option value={'city-' + c.name}>{c.name}</option
					>{/each}</NativeSelect.Root
			>
		</div>
		<div aria-live="polite" class="min-h-20 rounded-lg bg-muted p-4 text-sm">
			{#if region}<p class="font-semibold">{regionLabels[region.id]()}</p>
				<p>{m.advisor_capital()}: {region.capital}</p>
				<p>{m.advisor_value()}: <strong>{region.value}</strong></p>{:else if city}<p
					class="font-semibold"
				>
					{city.name}
				</p>
				<p>{m.advisor_value()}: <strong>{city.value}</strong></p>{:else}<p
					class="text-muted-foreground"
				>
					{m.advisor_no_region()}
				</p>{/if}
		</div>
	</Card.Content></Card.Root
>
