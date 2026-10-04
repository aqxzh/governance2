<script lang="ts">
	import { asset } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Dialog from '#lib/components/ui/dialog/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import { getLocale } from '#lib/paraglide/runtime.js';
	import { infographicFor } from '#lib/infographics.js';
	import type { ContourImage } from '#lib/contours.js';
	import InfographicRenderer from '../infographics/InfographicRenderer.svelte';
	let {
		image,
		previewImage = image,
		title,
		description = m.illustration_label()
	}: {
		image: ContourImage;
		previewImage?: ContourImage;
		title: string;
		description?: string;
	} = $props();
	const reconstructed = $derived(!!infographicFor(image.src));
</script>

<Dialog.Root>
	{#if reconstructed}<InfographicRenderer {image} {title} />{/if}
	<Dialog.Trigger
		>{#snippet child({ props })}<Button
				{...props}
				variant={reconstructed ? 'outline' : 'ghost'}
				class={reconstructed ? 'h-auto min-h-11 whitespace-normal' : 'h-auto w-full min-w-0 p-0'}
				aria-label={m.enlarge_image({ title })}
			>
				{#if reconstructed}{m.enlarge_image({ title })}{:else}<img
						src={asset(image.src)}
						alt={title}
						width={image.width}
						height={image.height}
						loading="lazy"
						class="w-full rounded-lg object-contain"
					/>{/if}
			</Button>{/snippet}</Dialog.Trigger
	>
	<Dialog.Content closeLabel={m.close_label()} class="max-h-[90svh] overflow-y-auto sm:max-w-6xl">
		<Dialog.Header
			><Dialog.Title>{title}</Dialog.Title><Dialog.Description>{description}</Dialog.Description
			></Dialog.Header
		>
		<InfographicRenderer image={previewImage} {title} />
		<Button
			href={asset(previewImage.src)}
			target="_blank"
			rel="noopener noreferrer"
			variant="outline"
			class="h-auto min-h-11 whitespace-normal">{m.original_image()}</Button
		>
		{#if !infographicFor(previewImage.src) && getLocale() !== 'ru'}<p
				class="text-sm text-muted-foreground"
			>
				{m.media_language_notice()}
			</p>{/if}
	</Dialog.Content>
</Dialog.Root>
