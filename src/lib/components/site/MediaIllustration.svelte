<script lang="ts">
	import { asset } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Dialog from '#lib/components/ui/dialog/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import { getLocale } from '#lib/paraglide/runtime.js';
	import type { ContourImage } from '#lib/contours.js';
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
</script>

<Dialog.Root>
	<Dialog.Trigger
		>{#snippet child({ props })}<Button
				{...props}
				variant="ghost"
				class="h-auto w-full min-w-0 p-0"
				aria-label={m.enlarge_image({ title })}
				><img
					src={asset(image.src)}
					alt={title}
					width={image.width}
					height={image.height}
					loading="lazy"
					class="w-full rounded-lg object-contain"
				/></Button
			>{/snippet}</Dialog.Trigger
	>
	<Dialog.Content closeLabel={m.close_label()} class="max-h-[90svh] overflow-y-auto sm:max-w-6xl">
		<Dialog.Header
			><Dialog.Title>{title}</Dialog.Title><Dialog.Description>{description}</Dialog.Description
			></Dialog.Header
		>
		<img
			src={asset(previewImage.src)}
			alt={title}
			width={previewImage.width}
			height={previewImage.height}
			class="max-h-[64svh] w-full object-contain"
		/>
		<Button
			href={asset(previewImage.src)}
			target="_blank"
			rel="noopener noreferrer"
			variant="outline"
			class="h-auto min-h-11 whitespace-normal">{m.original_image()}</Button
		>
		{#if getLocale() !== 'ru'}<p class="text-sm text-muted-foreground">
				{m.media_language_notice()}
			</p>{/if}
	</Dialog.Content>
</Dialog.Root>
