<script lang="ts">
	import { onDestroy } from 'svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Input } from '#lib/components/ui/input/index.js';
	import { Label } from '#lib/components/ui/label/index.js';
	import { Textarea } from '#lib/components/ui/textarea/index.js';
	import { Checkbox } from '#lib/components/ui/checkbox/index.js';
	import * as Alert from '#lib/components/ui/alert/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import { validApplication, sendApplication } from '#lib/application.js';
	import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '#lib/site.js';
	const id = $props.id();
	let name = $state(''),
		phone = $state(''),
		question = $state(''),
		consent = $state(false);
	let status = $state<'idle' | 'sending' | 'received' | 'error' | 'invalid' | 'timeout'>('idle');
	let controller: AbortController | undefined;
	onDestroy(() => controller?.abort());
	async function submit(event: SubmitEvent) {
		event.preventDefault();
		if (status === 'sending' || status === 'received') return;
		const application = { name, phone, message: question };
		if (!validApplication(application, consent)) {
			status = 'invalid';
			return;
		}
		controller = new AbortController();
		status = 'sending';
		let timedOut = false;
		const timeout = setTimeout(() => {
			timedOut = true;
			controller?.abort();
		}, 15000);
		try {
			await sendApplication(application, controller.signal);
			status = 'received';
		} catch {
			if (timedOut) status = 'timeout';
			else if (!controller.signal.aborted) status = 'error';
		} finally {
			clearTimeout(timeout);
		}
	}
</script>

{#if status === 'received'}
	<Alert.Root role="status"><Alert.Description>{m.form_received()}</Alert.Description></Alert.Root>
{:else}
	<form onsubmit={submit} class="space-y-4" aria-busy={status === 'sending'}>
		<div class="space-y-2">
			<Label for={id + 'name'}>{m.form_name()}</Label><Input
				id={id + 'name'}
				name="name"
				autocomplete="name"
				required
				maxlength={128}
				bind:value={name}
				disabled={status === 'sending'}
			/>
		</div>
		<div class="space-y-2">
			<Label for={id + 'phone'}>{m.form_phone()}</Label><Input
				id={id + 'phone'}
				name="phone"
				type="tel"
				autocomplete="tel"
				required
				minlength={7}
				maxlength={32}
				bind:value={phone}
				disabled={status === 'sending'}
			/>
		</div>
		<div class="space-y-2">
			<Label for={id + 'question'}>{m.form_question()}</Label><Textarea
				id={id + 'question'}
				name="message"
				rows={3}
				maxlength={4000}
				bind:value={question}
				disabled={status === 'sending'}
			/>
		</div>
		<div class="flex items-start gap-3">
			<Checkbox id={id + 'consent'} bind:checked={consent} disabled={status === 'sending'} /><Label
				for={id + 'consent'}
				class="text-sm leading-relaxed">{m.form_consent()}</Label
			>
		</div>
		<Button
			type="submit"
			disabled={status === 'sending' || !consent}
			class="h-auto min-h-11 w-full whitespace-normal"
			>{status === 'sending' ? m.form_sending() : m.form_send()}</Button
		>
		{#if ['error', 'invalid', 'timeout'].includes(status)}<Alert.Root
				variant="destructive"
				role="alert"
				><Alert.Description
					>{status === 'invalid'
						? m.form_invalid()
						: status === 'timeout'
							? m.form_timeout()
							: m.form_error()}</Alert.Description
				></Alert.Root
			>{/if}
	</form>
{/if}
<div class="flex flex-wrap gap-3 text-sm">
	<Button
		variant="link"
		class="h-auto p-0 break-all whitespace-normal"
		href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</Button
	><Button variant="link" class="h-auto p-0" href={'tel:' + CONTACT_PHONE}
		>{CONTACT_PHONE_DISPLAY}</Button
	>
</div>
<noscript><p class="text-sm text-muted-foreground">{m.form_without_js()}</p></noscript>
