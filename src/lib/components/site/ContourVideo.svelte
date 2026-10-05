<script lang="ts">
	import PlayIcon from '@lucide/svelte/icons/play';
	import { asset } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Dialog from '#lib/components/ui/dialog/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import { getLocale } from '#lib/paraglide/runtime.js';
	import type { ContourImage } from '#lib/contours.js';
	import { infographicFor } from '#lib/infographics.js';
	import InfographicRenderer from '../infographics/InfographicRenderer.svelte';

	let {
		src,
		title,
		image,
		poster,
		posterClass = ''
	}: {
		src: string;
		title: string;
		image: ContourImage;
		poster?: ContourImage;
		posterClass?: string;
	} = $props();
	let videoFailed = $state(false);
</script>

<Dialog.Root
	onOpenChange={(open) => {
		if (open) videoFailed = false;
	}}
>
	{#if poster && infographicFor(poster.src)}<InfographicRenderer image={poster} {title} />{/if}
	<Dialog.Trigger>
		{#snippet child({ props })}
			<Button
				{...props}
				size="lg"
				variant={poster && !infographicFor(poster.src) ? 'ghost' : 'outline'}
				class={poster
					? 'h-auto min-h-11 w-full min-w-0 flex-col p-0 whitespace-normal'
					: 'h-auto min-h-11 whitespace-normal'}
			>
				{#if poster && !infographicFor(poster.src)}<img
						src={asset(poster.src)}
						alt=""
						width={poster.width}
						height={poster.height}
						loading="lazy"
						class={'w-full rounded-lg object-contain ' + posterClass}
					/>{/if}
				<span class="flex min-h-11 items-center gap-2"
					><PlayIcon aria-hidden="true" />{m.contour_video_cta()}</span
				>
			</Button>
		{/snippet}
	</Dialog.Trigger>
	<Dialog.Content closeLabel={m.close_label()} class="max-h-[90svh] overflow-y-auto sm:max-w-5xl">
		<Dialog.Header>
			<Dialog.Title>{title}</Dialog.Title>
			<Dialog.Description>{m.contour_video_description()}</Dialog.Description>
		</Dialog.Header>
		{#if videoFailed}
			<p role="alert" class="text-sm text-muted-foreground">{m.video_error()}</p>
			<InfographicRenderer {image} {title} />
		{:else}
			<video
				src={asset(src)}
				controls
				autoplay
				muted
				playsinline
				preload="metadata"
				class="max-h-[60svh] w-full rounded-lg bg-hero-surface"
				onerror={() => (videoFailed = true)}
			></video>
		{/if}
		{#if !videoFailed && getLocale() !== 'ru'}
			<p class="text-sm text-muted-foreground">{m.media_language_notice()}</p>
		{/if}
	</Dialog.Content>
</Dialog.Root>
