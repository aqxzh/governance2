<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import { localizeHref } from '#lib/paraglide/runtime.js';
</script>

<svelte:head
	><title>{page.status} — {m.error_title()} | Governance.kz</title><meta
		name="robots"
		content="noindex"
	/></svelte:head
>
<main id="main" tabindex="-1" class="site-container px-5 py-20 sm:px-7">
	<p class="mb-4 section-eyebrow">{page.status}</p>
	<h1 class="mb-4 text-3xl font-bold">{m.error_title()}</h1>
	<p class="mb-7 text-muted-foreground">{m.error_description()}</p>
	<Button href={localizeHref(resolve('/'))}>{m.back_home()}</Button>
</main>
