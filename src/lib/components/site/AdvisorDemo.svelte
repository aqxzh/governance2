<script lang="ts">
	import { onDestroy } from 'svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Input } from '#lib/components/ui/input/index.js';
	import { Label } from '#lib/components/ui/label/index.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import * as NativeSelect from '#lib/components/ui/native-select/index.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import { advisorMenus, digests, chatModes } from '#lib/advisor.js';
	import { m } from '#lib/paraglide/messages.js';
	import DemandMap from './DemandMap.svelte';
	const id = $props.id();
	let activeItem = $state('digest-today'),
		chatInput = $state(''),
		chatMode = $state('chat'),
		pending = $state(false),
		refreshed = $state(false);
	let messages = $state<{ role: 'user' | 'bot'; text: string }[]>([]);
	let timer: ReturnType<typeof setTimeout> | undefined;
	onDestroy(() => {
		if (timer) clearTimeout(timer);
	});
	function send(event: SubmitEvent) {
		event.preventDefault();
		const text = chatInput.trim();
		if (!text || pending) return;
		messages = [...messages, { role: 'user', text }];
		chatInput = '';
		pending = true;
		timer = setTimeout(() => {
			messages = [...messages, { role: 'bot', text: m.advisor_reply() }];
			pending = false;
		}, 600);
	}
</script>

<section id="advisor" aria-labelledby="advisor-title" class="scroll-mt-6 space-y-6">
	<header class="flex flex-wrap items-center justify-between gap-4">
		<div class="min-w-0 space-y-2">
			<h2 id="advisor-title" class="text-2xl font-bold tracking-tight">{m.advisor_title()}</h2>
			<p class="max-w-3xl text-sm text-muted-foreground">{m.advisor_description()}</p>
		</div>
		<Button
			variant="outline"
			onclick={() => {
				activeItem = 'digest-today';
				refreshed = true;
			}}
			class="h-auto min-h-11 whitespace-normal">{m.advisor_refresh()}</Button
		>
	</header>
	{#if refreshed}<p role="status" class="text-sm text-muted-foreground">
			{m.advisor_refreshed()}
		</p>{/if}
	<div class="grid items-start gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
		<Card.Root
			><Card.Content class="space-y-5"
				>{#each advisorMenus as menu (menu.id)}<div class="space-y-2">
						<h3 class="text-xs font-semibold uppercase">{menu.label()}</h3>
						{#each menu.items as item (item.id)}<Button
								variant={activeItem === item.id ? 'secondary' : 'ghost'}
								onclick={() => (activeItem = item.id)}
								aria-pressed={activeItem === item.id}
								class="h-auto min-h-11 w-full justify-start text-left whitespace-normal"
								>{item.label()}</Button
							>{/each}
					</div>{/each}</Card.Content
			></Card.Root
		>
		<div class="min-w-0 space-y-5">
			<div class="grid gap-4 xl:grid-cols-3">
				{#each digests as digest (digest.id)}<Card.Root
						><Card.Header
							><p class="font-mono text-xs text-muted-foreground">{digest.date}</p>
							<h3 class="text-base font-semibold">{digest.title()}</h3>
							<Badge variant="secondary" class="h-auto whitespace-normal">{digest.badge()}</Badge
							></Card.Header
						><Card.Content
							><ul class="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
								{#each digest.items as item (item)}<li>{item()}</li>{/each}
							</ul></Card.Content
						></Card.Root
					>{/each}
			</div>
			<div class="grid items-start gap-5 xl:grid-cols-2">
				<DemandMap /><Card.Root
					><Card.Header><h3 class="text-lg font-semibold">{m.advisor_chat()}</h3></Card.Header
					><Card.Content class="space-y-4"
						><div
							role="log"
							aria-label={m.advisor_chat()}
							aria-live="polite"
							class="max-h-80 min-h-40 space-y-3 overflow-y-auto"
						>
							{#if messages.length === 0}<p class="text-sm text-muted-foreground">
									{m.advisor_empty()}
								</p>{/if}{#each messages as message, i (i)}<div class="rounded-lg bg-muted p-3">
									<p class="mb-1 text-xs font-semibold">
										{message.role === 'user' ? m.advisor_user() : m.advisor_bot()}
									</p>
									<p class="text-sm wrap-anywhere whitespace-pre-wrap">{message.text}</p>
								</div>{/each}{#if pending}<p role="status" class="text-sm text-muted-foreground">
									{m.advisor_wait()}
								</p>{/if}
						</div>
						<form onsubmit={send} class="space-y-3">
							<div class="space-y-2">
								<Label for={id + '-mode'}>{m.advisor_mode()}</Label><NativeSelect.Root
									id={id + '-mode'}
									bind:value={chatMode}
									class="w-full"
									>{#each chatModes as mode (mode.id)}<option value={mode.id}>{mode.label()}</option
										>{/each}</NativeSelect.Root
								>
							</div>
							<div class="space-y-2">
								<Label for={id + '-query'}>{m.advisor_query()}</Label><Input
									id={id + '-query'}
									bind:value={chatInput}
									maxlength={4000}
									required
									disabled={pending}
								/>
							</div>
							<Button
								type="submit"
								disabled={pending || !chatInput.trim()}
								class="h-auto min-h-11 whitespace-normal">{m.advisor_send()}</Button
							>
						</form></Card.Content
					></Card.Root
				>
			</div>
		</div>
	</div>
</section>
