<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Dialog from '#lib/components/ui/dialog/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import ApplicationForm from './ApplicationForm.svelte';
	let { variant = 'default' }: { variant?: 'default' | 'outline' } = $props();
</script>

<Dialog.Root>
	<Dialog.Trigger
		>{#snippet child({ props })}<Button
				{...props}
				{variant}
				size="lg"
				class="h-auto min-h-11 whitespace-normal">{m.meeting_cta()}</Button
			>{/snippet}</Dialog.Trigger
	>
	<Dialog.Content closeLabel={m.close_label()} class="max-h-[90svh] overflow-y-auto">
		<Dialog.Header
			><Dialog.Title>{m.meeting_cta()}</Dialog.Title><Dialog.Description
				>{m.form_description()}</Dialog.Description
			></Dialog.Header
		>
		<ApplicationForm />
	</Dialog.Content>
</Dialog.Root>
