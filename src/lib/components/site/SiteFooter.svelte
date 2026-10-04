<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import { localizeHref } from '#lib/paraglide/runtime.js';
	import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '#lib/site.js';
	import MeetingDialog from './MeetingDialog.svelte';
</script>

<footer class="site-container">
	<section
		aria-labelledby="contact-title"
		class="dark flex flex-col items-start justify-between gap-8 bg-background px-5 py-12 text-foreground sm:px-7 sm:py-14 md:flex-row md:items-center"
	>
		<div class="min-w-0 space-y-4">
			<p class="section-eyebrow">{m.contact_eyebrow()}</p>
			<h2 id="contact-title" class="max-w-lg text-2xl font-bold tracking-tight sm:text-3xl">
				{m.contact_title()}
			</h2>
			<div class="flex flex-wrap gap-x-8 gap-y-4">
				<div>
					<p class="text-xs text-muted-foreground">{m.contact_email()}</p>
					<Button
						variant="link"
						href={'mailto:' + CONTACT_EMAIL}
						class="h-auto p-0 break-all whitespace-normal text-foreground">{CONTACT_EMAIL}</Button
					>
				</div>
				<div>
					<p class="text-xs text-muted-foreground">{m.contact_phone()}</p>
					<Button variant="link" href={'tel:' + CONTACT_PHONE} class="h-auto p-0 text-foreground"
						>{CONTACT_PHONE_DISPLAY}</Button
					>
				</div>
			</div>
		</div>
		<MeetingDialog />
	</section>
	<div class="flex flex-wrap items-center justify-between gap-4 border-t px-5 py-6 sm:px-7">
		<p class="font-mono text-xs tracking-wide">GOVERNANCE.KZ</p>
		<Button
			href={localizeHref(resolve('/[section]', { section: 'foodflow' }))}
			variant="link"
			class="h-auto p-0">{m.foodflow_link()}</Button
		>
		<p class="w-full text-xs text-muted-foreground">{m.footer_draft()}</p>
	</div>
</footer>
