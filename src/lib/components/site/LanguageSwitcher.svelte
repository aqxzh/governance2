<script lang="ts">
	import GlobeIcon from '@lucide/svelte/icons/globe';
	import CheckIcon from '@lucide/svelte/icons/check';
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as DropdownMenu from '#lib/components/ui/dropdown-menu/index.js';
	import { languages } from '#lib/site.js';
	import { m } from '#lib/paraglide/messages.js';
	import { getLocale, localizeHref } from '#lib/paraglide/runtime.js';

	const suffix = $derived(browser ? page.url.search + page.url.hash : '');
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -- Paraglide resolves virtual locale paths, not Kit route IDs. -->
<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button
				{...props}
				variant="ghost"
				size="icon"
				aria-label={m.language_label()}
				title={m.language_label()}
				data-language-trigger
			>
				<GlobeIcon aria-hidden="true" />
			</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end" class="min-w-48">
		<DropdownMenu.Label>{m.language_label()}</DropdownMenu.Label>
		<DropdownMenu.Separator />
		{#each languages as language (language.locale)}
			<DropdownMenu.Item>
				{#snippet child({ props })}
					<a
						{...props}
						href={localizeHref(page.url.pathname, {
							locale: language.locale
						}) + suffix}
						aria-current={getLocale() === language.locale ? 'page' : undefined}
						hreflang={language.locale}
						lang={language.locale}
						data-sveltekit-reload
					>
						<span>{language.name}</span>
						<span aria-hidden="true" class="ml-auto font-mono text-xs text-muted-foreground"
							>{language.label}</span
						>
						{#if getLocale() === language.locale}
							<CheckIcon aria-hidden="true" class="text-primary" />
						{/if}
					</a>
				{/snippet}
			</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>

<noscript>
	<nav aria-label={m.language_label()} class="flex items-center gap-2 text-xs">
		{#each languages as language (language.locale)}
			<a
				href={localizeHref(page.url.pathname, { locale: language.locale })}
				aria-label={language.name}
				aria-current={getLocale() === language.locale ? 'page' : undefined}
				hreflang={language.locale}
				lang={language.locale}
				class="min-h-6 content-center aria-[current=page]:text-primary">{language.label}</a
			>
		{/each}
	</nav>
</noscript>
<!-- eslint-enable svelte/no-navigation-without-resolve -->
