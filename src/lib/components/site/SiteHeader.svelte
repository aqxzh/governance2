<script lang="ts">
	import MenuIcon from '@lucide/svelte/icons/menu';
	import { resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Sheet from '#lib/components/ui/sheet/index.js';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import { m } from '#lib/paraglide/messages.js';
	import { localizeHref } from '#lib/paraglide/runtime.js';

	let menuOpen = $state(false);
	const items = [
		{ id: 'simulator', number: '01', label: m.nav_simulator },
		{ id: 'diagnostics', number: '02', label: m.nav_diagnostics },
		{ id: 'coordination', number: '03', label: m.nav_coordination }
	] as const;
</script>

<a
	href="#main"
	class="fixed top-2 left-2 z-50 -translate-y-24 rounded-md bg-primary px-4 py-3 text-primary-foreground focus:translate-y-0"
	>{m.skip_content()}</a
>

<header
	class="flex min-h-20 items-center justify-between gap-2 bg-background px-3 py-4 sm:px-5 lg:px-7"
>
	<Button
		variant="link"
		href={localizeHref(resolve('/'))}
		aria-label={m.home_label()}
		class="h-auto gap-2 p-0 text-[13px] font-semibold text-foreground no-underline hover:no-underline sm:gap-3 sm:text-base"
	>
		<span aria-hidden="true" class="size-5 shrink-0 border-[3px] border-primary sm:size-6"></span>
		GOVERNANCE.KZ
	</Button>
	<div class="flex shrink-0 items-center gap-1 lg:gap-4">
		<nav aria-label={m.navigation_label()} class="hidden items-center gap-2 lg:flex">
			{#each items as item (item.id)}
				<Button variant="outline" href={localizeHref(resolve('/')) + '#' + item.id} class="gap-2">
					<span class="font-mono text-xs font-normal text-primary">{item.number}</span>
					{item.label()}
				</Button>
			{/each}
		</nav>
		<Sheet.Root bind:open={menuOpen}>
			<Sheet.Trigger>
				{#snippet child({ props })}
					<Button
						{...props}
						variant="ghost"
						size="icon"
						class="lg:hidden"
						aria-label={m.menu_open()}
					>
						<MenuIcon aria-hidden="true" />
					</Button>
				{/snippet}
			</Sheet.Trigger>
			<Sheet.Content closeLabel={m.close_label()} class="gap-7 p-6">
				<Sheet.Header class="p-0">
					<Sheet.Title>{m.menu_title()}</Sheet.Title>
					<Sheet.Description>{m.menu_description()}</Sheet.Description>
				</Sheet.Header>
				<nav aria-label={m.navigation_label()} class="flex flex-col gap-3">
					{#each items as item (item.id)}
						<Button
							variant="outline"
							href={localizeHref(resolve('/')) + '#' + item.id}
							onclick={() => (menuOpen = false)}
							size="lg"
							class="h-auto min-h-11 justify-start whitespace-normal"
						>
							<span class="font-mono text-xs text-primary">{item.number}</span>
							{item.label()}
						</Button>
					{/each}
				</nav>
			</Sheet.Content>
		</Sheet.Root>
		<LanguageSwitcher />
	</div>
</header>
