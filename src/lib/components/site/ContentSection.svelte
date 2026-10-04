<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		id,
		eyebrow,
		title,
		description,
		children
	}: { id: string; eyebrow: string; title: string; description?: string; children: Snippet } =
		$props();
</script>

<section
	{id}
	aria-labelledby={id + '-title'}
	class="site-container scroll-mt-6 space-y-7 border-t px-5 py-12 sm:px-7 sm:py-14"
>
	<header class="space-y-4">
		<p class="section-eyebrow">{eyebrow}</p>
		<h2
			id={id + '-title'}
			class="text-2xl leading-tight font-bold tracking-tight text-balance sm:text-3xl"
		>
			{title}
		</h2>
		{#if description}<p
				class="max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg"
			>
				{description}
			</p>{/if}
	</header>
	{@render children()}
</section>
