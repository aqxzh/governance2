<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Input } from '#lib/components/ui/input/index.js';
	import { Label } from '#lib/components/ui/label/index.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import { Slider } from '#lib/components/ui/slider/index.js';
	import * as NativeSelect from '#lib/components/ui/native-select/index.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import * as Table from '#lib/components/ui/table/index.js';
	import * as Tabs from '#lib/components/ui/tabs/index.js';
	import { m } from '#lib/paraglide/messages.js';
	import { localizeHref, getLocale } from '#lib/paraglide/runtime.js';
	import {
		batches,
		periodRows,
		markdownSchedule,
		agentDecisions,
		journal,
		memoryModes,
		productName,
		groupName,
		unitName,
		groupLabels,
		agentReason,
		agentAdapt,
		agentVol,
		journalTexts,
		constraints,
		reportTexts,
		acceptanceTexts,
		filterBatches,
		fefoOrder,
		spoilTotal
	} from '#lib/food.js';
	import { foodStoryTabs as foodTabs, foodStoryTab } from '#lib/story.js';
	import FoodGraph from './FoodGraph.svelte';
	import FoodErosion from './FoodErosion.svelte';
	const id = $props.id();
	let tab = $state('batches'),
		query = $state(''),
		group = $state('all'),
		horizon = $state('30'),
		selectedBatch = $state('B-1042'),
		step = $state('7'),
		memory = $state('active');
	let spoil = $state([2.1]);
	let approved = $state(['Овощи']);
	const filtered = $derived(filterBatches(query, group));
	const batch = $derived(batches.find((b) => b.id === selectedBatch) ?? batches[0]);
	const rate = $derived(spoil[0] ?? 2.1);
	const fefo = fefoOrder();
	const money = (n: number) =>
		new Intl.NumberFormat(
			getLocale() === 'kk' ? 'kk-KZ' : getLocale() === 'ru' ? 'ru-KZ' : 'en-US'
		).format(n) + ' ₸';
	const scheduleActions = [
		m.food_markdown_action_0,
		m.food_markdown_action_1,
		m.food_markdown_action_2,
		m.food_markdown_action_3,
		m.food_markdown_action_4
	];
	const movements = [
		{ group: 'Молочка', incoming: 2280, outgoing: 1940, remaining: 1460, percent: 72 },
		{ group: 'Мясо охлажд.', incoming: 640, outgoing: 520, remaining: 556, percent: 46 },
		{ group: 'Овощи', incoming: 410, outgoing: 330, remaining: 285, percent: 58 },
		{ group: 'Заморозка', incoming: 1500, outgoing: 210, remaining: 1500, percent: 18 }
	];
	onMount(() => {
		const sync = async () => {
			const hash = window.location.hash.slice(1);
			const next = foodStoryTab(hash);
			if (next) {
				tab = next;
				await tick();
				if (['trace', 'order', 'agent', 'graph', 'report'].includes(hash))
					document.getElementById('food-' + hash)?.scrollIntoView({ block: 'start' });
			}
		};
		void sync();
		window.addEventListener('hashchange', sync);
		return () => window.removeEventListener('hashchange', sync);
	});
	function changeTab(value: string) {
		if (browser) {
			void goto(
				// eslint-disable-next-line svelte/no-navigation-without-resolve -- Paraglide localizes the resolved Kit route.
				localizeHref(resolve('/[section]', { section: 'foodflow' })) +
					page.url.search +
					'#' +
					value,
				{ replaceState: true, noScroll: true, keepFocus: true }
			);
		}
	}
</script>

<div class="site-container min-w-0 space-y-7 px-5 py-8 sm:px-7 sm:py-10">
	<Button href={localizeHref(resolve('/'))} variant="outline">{m.back_home()}</Button>
	<header class="space-y-4">
		<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">{m.food_title()}</h1>
		<p class="max-w-4xl text-base leading-relaxed text-muted-foreground">{m.food_description()}</p>
		<p class="max-w-4xl text-sm leading-relaxed text-muted-foreground">{m.demo_notice()}</p>
		<p class="text-sm text-muted-foreground">{m.food_names_notice()}</p>
	</header>
	{#if tab === 'batches'}<div class="grid gap-4 sm:grid-cols-2">
			<div class="space-y-2">
				<Label for={id + '-search'}>{m.food_search()}</Label><Input
					id={id + '-search'}
					bind:value={query}
					type="search"
				/>
			</div>
			<div class="space-y-2">
				<Label for={id + '-group'}>{m.food_group()}</Label><NativeSelect.Root
					id={id + '-group'}
					bind:value={group}
					class="w-full"
					><option value="all">{m.food_all_groups()}</option
					>{#each Object.keys(groupLabels) as g (g)}<option value={g}>{groupName(g)}</option
						>{/each}</NativeSelect.Root
				>
			</div>
		</div>{/if}
	<div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
		{#each [{ label: m.food_kpi_stock, value: String(batches.reduce((sum, b) => sum + b.stock, 0)) }, { label: m.food_kpi_writeoff, value: '85 ' + m.food_unit_kg() }, { label: m.food_kpi_fefo, value: '96,4%' }, { label: m.food_kpi_shortage, value: '−6%' }] as metric (metric.label)}<Card.Root
				><Card.Header><p class="text-sm text-muted-foreground">{metric.label()}</p></Card.Header
				><Card.Content
					><p class="text-2xl font-semibold tabular-nums">{metric.value}</p></Card.Content
				></Card.Root
			>{/each}
	</div>
	<p class="text-xs text-muted-foreground">{m.food_mixed_stock_notice()}</p>
	<Tabs.Root bind:value={tab} onValueChange={changeTab}>
		<Tabs.List
			data-food-tabs
			aria-label={m.food_title()}
			class="grid h-auto w-full grid-cols-1 gap-1 group-data-[orientation=horizontal]/tabs:h-auto sm:grid-cols-3"
			>{#each foodTabs as item (item.id)}<Tabs.Trigger
					value={item.id}
					class="h-auto min-h-11 min-w-0 flex-1 basis-36 px-3 py-2 text-left whitespace-normal"
					>{item.label()}</Tabs.Trigger
				>{/each}</Tabs.List
		>
		<Tabs.Content value="batches" data-food-panel class="mt-6 space-y-10"
			><section id="food-batches" data-food-subsection="batches" class="scroll-mt-6 space-y-6">
				<div class="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
					<div class="min-w-0 space-y-4">
						<Card.Root
							><Card.Header
								><h2 class="text-xl font-semibold">{m.food_tab_batches()}</h2>
								<p class="text-sm text-muted-foreground">
									{m.food_total_batches({ count: filtered.length })}
								</p></Card.Header
							><Card.Content class="min-w-0"
								><Table.Root scrollLabel={m.food_tab_batches()}
									><Table.Caption>{m.food_tab_batches()}</Table.Caption><Table.Header
										><Table.Row
											>{#each [m.food_batch, m.food_product, m.food_group, m.food_purchase, m.food_stock, m.food_expiry] as label (label)}<Table.Head
													>{label()}</Table.Head
												>{/each}</Table.Row
										></Table.Header
									><Table.Body
										>{#each filtered as b (b.id)}<Table.Row
												class={b.id === selectedBatch ? 'bg-muted' : ''}
												><Table.Cell
													><Button
														variant="link"
														onclick={() => (selectedBatch = b.id)}
														aria-pressed={selectedBatch === b.id}
														class="h-auto p-0 font-mono">{b.id}</Button
													></Table.Cell
												><Table.Cell class="whitespace-normal">{productName(b)}</Table.Cell
												><Table.Cell>{groupName(b.group)}</Table.Cell><Table.Cell
													class="tabular-nums">{money(b.purchasePrice)}</Table.Cell
												><Table.Cell class="tabular-nums">{b.stock} {unitName(b.unit)}</Table.Cell
												><Table.Cell
													><Badge variant={b.daysLeft <= 1 ? 'destructive' : 'secondary'}
														>D-{b.daysLeft}</Badge
													>
													<p class="mt-1 text-xs text-muted-foreground">{b.expiry}</p></Table.Cell
												></Table.Row
											>{/each}{#if !filtered.length}<Table.Row
												><Table.Cell colspan={6}>{m.food_empty()}</Table.Cell></Table.Row
											>{/if}</Table.Body
									></Table.Root
								></Card.Content
							></Card.Root
						>
						<p class="text-sm leading-relaxed text-muted-foreground">{m.food_fefo_notice()}</p>
					</div>
					<div class="space-y-5">
						<Card.Root
							><Card.Header
								><h3 class="text-lg font-semibold">{m.food_batch_card({ id: batch.id })}</h3>
								<p>{productName(batch)}</p>
								<p class="text-sm text-muted-foreground">
									{groupName(batch.group)} · {batch.origin}
								</p></Card.Header
							><Card.Content class="space-y-4"
								><dl class="grid grid-cols-2 gap-4 text-sm">
									<div>
										<dt class="text-muted-foreground">{m.food_purchase()}</dt>
										<dd class="font-semibold">{money(batch.purchasePrice)}</dd>
									</div>
									<div>
										<dt class="text-muted-foreground">{m.food_stock()}</dt>
										<dd class="font-semibold">{batch.stock} {unitName(batch.unit)}</dd>
									</div>
									<div>
										<dt class="text-muted-foreground">{m.food_expiry()}</dt>
										<dd>{batch.expiry} · D-{batch.daysLeft}</dd>
									</div>
									<div>
										<dt class="text-muted-foreground">{m.food_route()}</dt>
										<dd>{batch.route.join(' → ')}</dd>
									</div>
								</dl>
								<h4 class="text-sm font-semibold">{m.food_fefo()}</h4>
								<div class="flex flex-wrap gap-2">
									{#each fefo.slice(0, 5) as b (b.id)}<Badge
											variant={b.id === batch.id ? 'default' : 'secondary'}>{b.id}</Badge
										>{/each}
								</div></Card.Content
							></Card.Root
						><Card.Root
							><Card.Header><h3 class="text-lg font-semibold">{m.food_markdown()}</h3></Card.Header
							><Card.Content class="space-y-3"
								>{#each markdownSchedule as row, i (row.window)}<div
										class="flex flex-wrap items-start justify-between gap-2 border-b pb-2 text-sm"
									>
										<strong class="font-mono">{row.window}</strong><span
											>{i === 4 ? m.food_writeoff() : row.price}</span
										><span class="text-muted-foreground">{scheduleActions[i]()}</span>
									</div>{/each}
								<p class="text-sm text-muted-foreground">
									{m.food_markdown_notice()}
								</p></Card.Content
							></Card.Root
						>
					</div>
				</div>
				<Card.Root
					><Card.Header><h3 class="text-lg font-semibold">{m.food_movement()}</h3></Card.Header
					><Card.Content class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
						>{#each movements as row (row.group)}<div class="space-y-2">
								<h4 class="font-semibold">{groupName(row.group)}</h4>
								<p class="text-sm text-muted-foreground">{m.food_movement_values(row)}</p>
								<div
									role="meter"
									aria-label={groupName(row.group)}
									aria-valuemin={0}
									aria-valuemax={100}
									aria-valuenow={row.percent}
									class="h-2 overflow-hidden rounded-full bg-muted"
								>
									<div class="h-full rounded-full bg-primary" style:width={row.percent + '%'}></div>
								</div>
								<p class="text-xs text-muted-foreground">{m.food_turnover(row)}</p>
							</div>{/each}</Card.Content
					></Card.Root
				>
			</section>
			<section id="food-trace" data-food-subsection="trace" class="scroll-mt-6 space-y-6">
				<header class="space-y-3">
					<h2 class="text-2xl font-bold tracking-tight">{m.food_trace_title()}</h2>
					<p class="max-w-4xl text-sm leading-relaxed text-muted-foreground">
						{m.food_trace_description()}
					</p>
				</header>
				<div class="grid items-start gap-6 lg:grid-cols-2">
					<Card.Root
						><Card.Header
							><h3 class="text-lg font-semibold">{m.food_trace_select()}</h3></Card.Header
						><Card.Content class="space-y-6"
							><div class="flex flex-wrap gap-2">
								{#each batches as b (b.id)}<Button
										variant={selectedBatch === b.id ? 'default' : 'outline'}
										onclick={() => (selectedBatch = b.id)}
										aria-pressed={selectedBatch === b.id}
										class="font-mono">{b.id}</Button
									>{/each}
							</div>
							<ol class="space-y-5">
								{#each batch.route as location, i (location)}<li class="flex gap-4">
										<Badge>{i + 1}</Badge>
										<div class="space-y-1">
											<p class="font-semibold">{location}</p>
											<p class="text-sm text-muted-foreground">
												{i === 0
													? m.food_origin() + ' · ' + money(batch.purchasePrice)
													: i === batch.route.length - 1
														? m.food_stock() +
															': ' +
															batch.stock +
															' ' +
															unitName(batch.unit) +
															' · ' +
															m.food_expiry() +
															': ' +
															batch.expiry
														: m.food_cold_chain()}
											</p>
										</div>
									</li>{/each}
							</ol></Card.Content
						></Card.Root
					><Card.Root
						><Card.Header
							><h3 class="text-lg font-semibold">{m.food_buyer_screen()}</h3>
							<p class="font-mono text-sm">{batch.id}</p></Card.Header
						><Card.Content class="space-y-4"
							><div class="flex flex-wrap items-center gap-4">
								<div
									class="grid size-24 place-items-center rounded-lg bg-muted p-3 text-center font-mono text-xs"
								>
									{m.food_qr_placeholder()}<br />{batch.id}
								</div>
								<div class="min-w-0 space-y-2">
									<h4 class="text-lg font-semibold">{productName(batch)}</h4>
									<p class="text-sm text-muted-foreground">{m.food_origin()}: {batch.origin}</p>
									<Badge variant="secondary">{m.food_freshness({ days: batch.daysLeft })}</Badge>
									<p class="text-sm">{m.food_expiry()}: {batch.expiry}</p>
								</div>
							</div>
							<p class="text-sm">{m.food_route()}: {batch.route.join(' → ')}</p>
							<p class="text-sm leading-relaxed text-muted-foreground">
								{m.food_trace_note()}
							</p></Card.Content
						></Card.Root
					>
				</div>
			</section></Tabs.Content
		>
		<Tabs.Content value="planning" data-food-panel class="mt-6 space-y-10"
			><section id="food-order" data-food-subsection="order" class="scroll-mt-6 space-y-6">
				<header class="space-y-3">
					<h2 class="text-2xl font-bold tracking-tight">{m.food_order_title()}</h2>
					<p class="max-w-4xl text-sm leading-relaxed text-muted-foreground">
						{m.food_order_description()}
					</p>
				</header>
				<div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
					<Card.Root
						><Card.Header><h3 class="text-lg font-semibold">{m.food_parameters()}</h3></Card.Header
						><Card.Content class="space-y-5">
							<div class="space-y-2">
								<Label for={id + '-horizon'}>{m.food_horizon()}</Label><NativeSelect.Root
									id={id + '-horizon'}
									bind:value={horizon}
									class="w-full"
									><option value="30">{m.food_days({ count: 30 })}</option><option value="60"
										>{m.food_days({ count: 60 })}</option
									></NativeSelect.Root
								>
							</div>
							<div class="space-y-2">
								<p class="text-sm font-semibold">
									{m.food_step()}: {m.food_days({ count: Number(step) })}
								</p>
								<div class="flex flex-wrap gap-2">
									{#each ['1', '3', '7'] as s (s)}<Button
											variant={step === s ? 'default' : 'outline'}
											onclick={() => (step = s)}
											aria-pressed={step === s}>{m.food_days({ count: Number(s) })}</Button
										>{/each}
								</div>
							</div>
							<div class="space-y-3">
								<Label for={id + '-spoil'}>{m.food_spoil_rate({ rate: rate.toFixed(1) })}</Label
								><Slider
									id={id + '-spoil'}
									type="multiple"
									min={0.5}
									max={5}
									step={0.1}
									bind:value={spoil}
									thumbLabel={m.food_spoil()}
									class="min-h-11"
								/>
							</div>
							<p class="text-sm text-muted-foreground">{m.food_perish_deliveries()}</p>
							<p class="text-sm text-muted-foreground">{m.food_frozen_deliveries()}</p>
							<p class="text-sm font-semibold" data-spoil-total>
								{m.food_spoil_total({ count: spoilTotal(rate) })}
							</p>
							<p class="text-sm text-muted-foreground">
								{m.food_kpi_writeoff()}: 85 {m.food_unit_kg()} · {m.food_unsold()}: {money(1900000)}
							</p></Card.Content
						></Card.Root
					><Card.Root class="min-w-0"
						><Card.Header
							><h3 class="text-lg font-semibold">{m.food_period_table()}</h3></Card.Header
						><Card.Content class="min-w-0"
							><Table.Root scrollLabel={m.food_period_table()}
								><Table.Caption>{m.food_period_table()}</Table.Caption><Table.Header
									><Table.Row
										>{#each [m.food_period, m.food_perish, m.food_frozen, m.food_demand, m.food_spoil, m.food_writeoff] as label (label)}<Table.Head
												>{label()}</Table.Head
											>{/each}</Table.Row
									></Table.Header
								><Table.Body
									>{#each periodRows as row, i (row.p)}<Table.Row
											><Table.Cell>{m.food_week({ count: i + 1 })}</Table.Cell><Table.Cell
												>{row.perish}</Table.Cell
											><Table.Cell>{row.frozen || '—'}</Table.Cell><Table.Cell
												>{row.demand}</Table.Cell
											><Table.Cell>{Math.round(row.spoil * (rate / 2.1))}</Table.Cell><Table.Cell
												>{row.writeoff}</Table.Cell
											></Table.Row
										>{/each}</Table.Body
								></Table.Root
							></Card.Content
						></Card.Root
					>
				</div>
				<div class="grid gap-6 lg:grid-cols-2">
					<Card.Root
						><Card.Header><h3 class="text-lg font-semibold">{m.food_constraints()}</h3></Card.Header
						><Card.Content class="grid gap-4 sm:grid-cols-2"
							>{#each constraints as c (c.title)}<div class="space-y-2 rounded-lg border p-4">
									<h4 class="text-sm font-semibold">{c.title()}</h4>
									<p class="text-sm text-muted-foreground">{c.description()}</p>
								</div>{/each}</Card.Content
						></Card.Root
					><Card.Root
						><Card.Header
							><h3 class="text-lg font-semibold">{m.food_erosion_title()}</h3></Card.Header
						><Card.Content><FoodErosion /></Card.Content></Card.Root
					>
				</div>
			</section>
			<section id="food-agent" data-food-subsection="agent" class="scroll-mt-6 space-y-6">
				<header class="space-y-3">
					<h2 class="text-2xl font-bold tracking-tight">{m.food_agent_title()}</h2>
					<p class="max-w-4xl text-sm leading-relaxed text-muted-foreground">
						{m.food_agent_description()}
					</p>
				</header>
				<div class="grid gap-6 lg:grid-cols-2">
					{#each agentDecisions as a (a.group)}<Card.Root data-food-decision={a.group}
							><Card.Header
								><div class="flex flex-wrap items-center justify-between gap-3">
									<h3 class="text-lg font-semibold">{groupName(a.group)}</h3>
									<Button
										variant={approved.includes(a.group) ? 'default' : 'outline'}
										aria-pressed={approved.includes(a.group)}
										onclick={() =>
											(approved = approved.includes(a.group)
												? approved.filter((g) => g !== a.group)
												: [...approved, a.group])}
										>{approved.includes(a.group) ? m.food_approved() : m.food_approve()}</Button
									>
								</div>
								<p class="font-mono text-sm">
									{agentVol[a.group]()} · {a.delta === 'план'
										? m.food_plan()
										: m.food_delta({ delta: a.delta.split(' ')[0] })}
								</p></Card.Header
							><Card.Content class="space-y-4"
								><div class="space-y-2 rounded-lg bg-muted p-4">
									<h4 class="text-sm font-semibold">{m.food_reason()}</h4>
									<p class="text-sm leading-relaxed">{agentReason[a.group]()}</p>
								</div>
								<div class="space-y-2">
									<h4 class="text-sm font-semibold">{m.food_adapt()}</h4>
									<p class="text-sm leading-relaxed text-muted-foreground">
										{agentAdapt[a.group]()}
									</p>
								</div>
								<p class="text-xs leading-relaxed text-muted-foreground">
									{m.food_core_formula()}
								</p></Card.Content
							></Card.Root
						>{/each}
				</div>
				<Card.Root
					><Card.Header
						><h3 class="text-lg font-semibold">{m.food_responsibility()}</h3></Card.Header
					><Card.Content class="grid gap-5 sm:grid-cols-2"
						><div class="space-y-2">
							<h4 class="font-semibold">{m.food_core()}</h4>
							<p class="text-sm text-muted-foreground">{m.food_core_tasks()}</p>
						</div>
						<div class="space-y-2">
							<h4 class="font-semibold">{m.food_agent()}</h4>
							<p class="text-sm text-muted-foreground">{m.food_agent_tasks()}</p>
						</div></Card.Content
					></Card.Root
				>
			</section></Tabs.Content
		>
		<Tabs.Content value="history" data-food-panel class="mt-6 space-y-10"
			><section id="food-graph" data-food-subsection="graph" class="scroll-mt-6 space-y-6">
				<header class="space-y-3">
					<h2 class="text-2xl font-bold tracking-tight">{m.food_graph_title()}</h2>
					<p class="max-w-4xl text-sm text-muted-foreground">{m.food_graph_description()}</p>
				</header>
				<div class="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
					<Card.Root
						><Card.Header><h3 class="text-lg font-semibold">{m.food_graph_label()}</h3></Card.Header
						><Card.Content><FoodGraph /></Card.Content></Card.Root
					><Card.Root
						><Card.Header><h3 class="text-lg font-semibold">{m.food_memory()}</h3></Card.Header
						><Card.Content class="space-y-4"
							>{#each memoryModes as mode (mode.id)}<div class="space-y-2">
									<Button
										variant={memory === mode.id ? 'default' : 'outline'}
										onclick={() => (memory = mode.id)}
										aria-pressed={memory === mode.id}
										class="h-auto min-h-11 w-full justify-start whitespace-normal"
										>{mode.label()}</Button
									>
									<p class="text-sm text-muted-foreground">{mode.description()}</p>
								</div>{/each}
							<p class="text-sm text-muted-foreground">{m.food_graph_demo()}</p></Card.Content
						></Card.Root
					>
				</div>
			</section>
			<section id="food-report" data-food-subsection="report" class="scroll-mt-6 space-y-6">
				<header class="space-y-3">
					<h2 class="text-2xl font-bold tracking-tight">{m.food_report_title()}</h2>
					<p class="max-w-4xl text-sm text-muted-foreground">{m.food_report_description()}</p>
				</header>
				<div class="grid gap-6 lg:grid-cols-2">
					<Card.Root
						><Card.Header><h3 class="text-lg font-semibold">{m.food_journal()}</h3></Card.Header
						><Card.Content
							><ol class="space-y-5">
								{#each journal as entry, i (entry.t)}<li
										class="space-y-2 border-l-2 border-primary pl-4"
									>
										<p class="font-mono text-xs text-muted-foreground">
											{entry.t} · {entry.who === 'ядро'
												? m.food_actor_core()
												: entry.who === 'агент'
													? m.food_actor_agent()
													: entry.who === 'граф'
														? m.food_tab_graph()
														: m.food_memory()}
										</p>
										<p class="text-sm leading-relaxed">{journalTexts[i]()}</p>
									</li>{/each}
							</ol></Card.Content
						></Card.Root
					>
					<div class="space-y-6">
						<Card.Root
							><Card.Header><h3 class="text-lg font-semibold">{m.food_reports()}</h3></Card.Header
							><Card.Content
								><ul class="list-disc space-y-3 pl-5 text-sm leading-relaxed">
									{#each reportTexts as text (text)}<li>{text()}</li>{/each}
								</ul></Card.Content
							></Card.Root
						><Card.Root
							><Card.Header
								><h3 class="text-lg font-semibold">{m.food_acceptance()}</h3></Card.Header
							><Card.Content class="space-y-4"
								><ol class="list-decimal space-y-3 pl-5 text-sm leading-relaxed">
									{#each acceptanceTexts as text (text)}<li>{text()}</li>{/each}
								</ol>
								<p class="text-sm text-muted-foreground">
									{m.food_acceptance_note()}
								</p></Card.Content
							></Card.Root
						>
					</div>
				</div>
			</section></Tabs.Content
		>
	</Tabs.Root>
	<p class="font-mono text-xs leading-relaxed text-muted-foreground" data-food-settings>
		{m.food_settings({
			step,
			spoil: rate.toFixed(1),
			memory: memoryModes.find((mode) => mode.id === memory)?.label() ?? memory,
			count: approved.length
		})}
	</p>
</div>
