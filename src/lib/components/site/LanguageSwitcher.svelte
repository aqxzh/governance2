<script lang="ts">
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { Button } from '#lib/components/ui/button/index.js';
	import { languages } from '#lib/site.js';
	import { m } from '#lib/paraglide/messages.js';
	import { getLocale, localizeHref } from '#lib/paraglide/runtime.js';

	let { onNavigate }: { onNavigate?: () => void } = $props();
	const suffix = $derived(browser ? page.url.search + page.url.hash : '');
</script>

<nav aria-label={m.language_label()} class="flex shrink-0 items-center gap-0.5">
	{#each languages as language, index (language.locale)}
		{#if index > 0}<span aria-hidden="true" class="text-xs text-muted-foreground">·</span>{/if}
		<Button
			variant="ghost"
			size="icon-sm"
			class="size-6 font-mono text-[11px] aria-[current=page]:bg-accent aria-[current=page]:font-semibold aria-[current=page]:text-primary min-[360px]:size-7"
			href={localizeHref(page.url.pathname, { locale: language.locale }) + suffix}
			aria-label={language.name}
			aria-current={getLocale() === language.locale ? 'page' : undefined}
			hreflang={language.locale}
			lang={language.locale}
			data-sveltekit-reload
			onclick={onNavigate}
		>
			{language.label}
		</Button>
	{/each}
</nav>
