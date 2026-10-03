<script lang="ts">
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
	import { asset } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Dialog from '#lib/components/ui/dialog/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import { getLocale } from '#lib/paraglide/runtime.js';
	import type { Solution } from '#lib/contours.js';

	let { solution }: { solution: Solution } = $props();
</script>

<Dialog.Root>
	<Dialog.Trigger>
		{#snippet child({ props })}
			<Button
				{...props}
				variant="link"
				class="h-auto min-h-11 justify-start p-0 text-left whitespace-normal"
			>
				{solution.title()}<ArrowUpRightIcon aria-hidden="true" />
			</Button>
		{/snippet}
	</Dialog.Trigger>
	<Dialog.Content closeLabel={m.close_label()} class="max-h-[90svh] overflow-y-auto sm:max-w-6xl">
		<Dialog.Header>
			<Dialog.Title>{solution.title()}</Dialog.Title>
			<Dialog.Description>{solution.description()}</Dialog.Description>
		</Dialog.Header>
		<img
			src={asset(solution.image.src)}
			alt={m.solution_image_alt({ title: solution.title() })}
			width={solution.image.width}
			height={solution.image.height}
			class="max-h-[64svh] w-full rounded-lg bg-muted object-contain"
		/>
		{#if getLocale() !== 'ru'}
			<p class="text-sm text-muted-foreground">{m.media_language_notice()}</p>
		{/if}
	</Dialog.Content>
</Dialog.Root>
