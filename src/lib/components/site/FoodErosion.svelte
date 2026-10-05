<script lang="ts">
	import { m } from '#lib/paraglide/messages.js';
</script>

<figure class="space-y-3">
	<svg
		viewBox="0 0 400 140"
		role="img"
		aria-label={m.food_erosion_description()}
		class="w-full rounded-lg border bg-muted"
		><title>{m.food_erosion_description()}</title><line
			x1="0"
			y1="40"
			x2="400"
			y2="40"
			class="stroke-border"
			stroke-dasharray="4 4"
		/><text x="8" y="30" font-size="11" class="fill-muted-foreground">{m.food_baseline()}</text
		><polyline
			points="0,40 90,40 130,86 170,78 220,62 280,50 340,44 400,42"
			fill="none"
			class="stroke-primary"
			stroke-width="2.5"
		/><circle cx="130" cy="86" r="4" class="fill-destructive" /><text
			x="138"
			y="99"
			font-size="12"
			class="fill-destructive">−6%</text
		></svg
	>
	<figcaption class="text-sm text-muted-foreground">
		{m.food_erosion_description()} · {m.food_erosion_note()}
	</figcaption>
</figure>
