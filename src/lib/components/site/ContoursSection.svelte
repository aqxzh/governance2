<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import { contours } from '#lib/contours.js';
	import { storyOrder, storyGroups } from '#lib/story.js';
	import { m } from '#lib/paraglide/messages.js';
	import { localizeHref } from '#lib/paraglide/runtime.js';
</script>

<section
	id="contours"
	aria-labelledby="contours-title"
	class="site-container space-y-7 px-5 py-12 sm:px-7 sm:py-14"
>
	<header class="space-y-3">
		<p class="section-eyebrow">{m.story_choose()}</p>
		<h2 id="contours-title" class="text-3xl font-bold tracking-tight">{m.contours_title()}</h2>
	</header>
	<div class="grid gap-5 lg:grid-cols-3">
		{#each storyOrder as id, i (id)}
			{@const contour = contours.find((c) => c.id === id)!}
			<Card.Root id={'contours-' + id} class="scroll-mt-6"
				><Card.Header
					><p class="font-mono text-xs text-primary">0{i + 1}</p>
					<h3 class="text-2xl font-semibold">{contour.title()}</h3>
					<p class="text-sm leading-relaxed text-muted-foreground">
						{contour.description()}
					</p></Card.Header
				><Card.Content class="flex flex-1 flex-col justify-between gap-6"
					><ul class="space-y-2 text-sm">
						{#each storyGroups[id] as group (group.id)}<li>{group.title()}</li>{/each}
					</ul>
					<Button
						href={localizeHref(resolve('/[section]', { section: id }))}
						variant="outline"
						class="h-auto min-h-11 whitespace-normal">{m.story_open()}</Button
					></Card.Content
				></Card.Root
			>
		{/each}
	</div>
</section>
