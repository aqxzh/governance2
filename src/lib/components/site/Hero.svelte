<script lang="ts">
	import { onMount } from 'svelte';
	import PlayIcon from '@lucide/svelte/icons/play';
	import PauseIcon from '@lucide/svelte/icons/pause';
	import MeetingDialog from './MeetingDialog.svelte';
	import { asset } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Dialog from '#lib/components/ui/dialog/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import { CONTACT_EMAIL } from '#lib/site.js';

	let backgroundPlaying = $state(false);

	onMount(() => {
		backgroundPlaying = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	});
</script>

<section
	aria-labelledby="hero-title"
	class="relative isolate site-container overflow-hidden bg-hero-surface"
>
	<div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
		<img
			src={asset('/images/graphs-poster.webp')}
			alt=""
			class="size-full scale-[1.12] object-cover blur-[2px]"
			width="1170"
			height="658"
		/>
		{#if backgroundPlaying}
			<video
				src={asset('/videos/graphs.mp4')}
				autoplay
				muted
				loop
				playsinline
				class="absolute inset-0 size-full scale-[1.12] object-cover blur-[2px]"
			></video>
		{/if}
		<div class="absolute inset-0 bg-hero-surface/75"></div>
		<div
			class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-background sm:h-24"
		></div>
	</div>

	<div class="px-5 pt-10 pb-16 sm:px-7 sm:pt-16 sm:pb-24">
		<p
			class="mb-7 font-mono text-[11px] leading-relaxed tracking-widest text-hero-foreground uppercase sm:mb-8 sm:text-xs"
		>
			{m.hero_eyebrow()}
		</p>
		<div class="grid items-start gap-7 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,516px)]">
			<div class="min-w-0">
				<h1
					id="hero-title"
					class="mb-5 text-[clamp(2rem,5vw,3.25rem)] leading-[1.07] font-bold tracking-tight text-balance text-hero-foreground sm:mb-6"
				>
					{m.hero_title()}
				</h1>
				<p class="max-w-xl text-base leading-relaxed text-hero-muted-foreground sm:text-lg">
					{m.hero_description()}
				</p>
			</div>
			<div class="flex min-w-0 flex-col gap-5 sm:gap-6">
				<img
					src={asset('/images/team-main.webp')}
					srcset={`${asset('/images/team-main-small.webp')} 516w, ${asset('/images/team-main.webp')} 1032w`}
					sizes="(min-width: 1024px) 516px, (min-width: 768px) 700px, calc(100vw - 40px)"
					alt={m.hero_image_alt()}
					width="1032"
					height="590"
					fetchpriority="high"
					class="w-full rounded-xl bg-muted object-cover"
				/>
				<div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
					<MeetingDialog />
					<Dialog.Root>
						<Dialog.Trigger>
							{#snippet child({ props })}
								<Button
									{...props}
									variant="outline"
									size="lg"
									class="h-auto min-h-11 whitespace-normal">{m.note_cta()}</Button
								>
							{/snippet}
						</Dialog.Trigger>
						<Dialog.Content closeLabel={m.close_label()}>
							<Dialog.Header>
								<Dialog.Title>{m.note_cta()}</Dialog.Title>
								<Dialog.Description>{m.note_description()}</Dialog.Description>
							</Dialog.Header>
							<Button
								href={`mailto:${CONTACT_EMAIL}`}
								class="h-auto min-h-11 px-4 py-3 whitespace-normal">{m.note_contact()}</Button
							>
						</Dialog.Content>
					</Dialog.Root>
				</div>
			</div>
		</div>
		<Button
			variant="ghost"
			size="sm"
			aria-pressed={backgroundPlaying}
			onclick={() => (backgroundPlaying = !backgroundPlaying)}
			class="mt-7 h-auto min-h-9 bg-hero-surface/60 text-xs whitespace-normal text-hero-muted-foreground hover:bg-hero-surface/80 hover:text-hero-foreground"
		>
			{#if backgroundPlaying}<PauseIcon aria-hidden="true" />{:else}<PlayIcon
					aria-hidden="true"
				/>{/if}
			{backgroundPlaying ? m.background_pause() : m.background_play()}
		</Button>
	</div>
</section>
