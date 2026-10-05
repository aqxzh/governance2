<script lang="ts">
	/**
	 * Иллюстративная реконструкция «агентных» презентаций симулятора:
	 * - variant 'negotiation' — «LLM говорит с LLM» (module-6 / simulator-06,
	 *   источник: src/simulator/slides/llm-to-llm/index.tsx + вложенные PNG):
	 *   две карточки агентов (запрос 9% / уступка 7%), три объясняющих блока,
	 *   реконструкции вложенных экранов (опрос, карта, журнал сделок) и
	 *   нарратив детерминированного ядра.
	 * - variant 'advisor' — исходный экран AI-советника (module-5 / simulator-05)
	 *   как статичный иллюстративный вид на общих данных #lib/advisor.js;
	 *   интерактивный макет остаётся только в разделе координации (AdvisorDemo).
	 * Никаких работающих ИИ/бэкендов и действующих контролов здесь нет.
	 * Тексты — сгенерированные сообщения Paraglide (семейство inf_coord_*); локаль
	 * выбирает только runtime Paraglide; неразборчивые строки источника не переносятся.
	 */
	import { m } from '#lib/paraglide/messages.js';
	import { getLocale } from '#lib/paraglide/runtime.js';
	import {
		advisorMenus,
		chatModes,
		cities,
		digests,
		mapOutline,
		regionLabels,
		regions
	} from '#lib/advisor.js';
	import MessageCircleIcon from '@lucide/svelte/icons/message-circle';
	import CircleCheckIcon from '@lucide/svelte/icons/circle-check';
	import BarChart3Icon from '@lucide/svelte/icons/bar-chart-3';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
	import MinusIcon from '@lucide/svelte/icons/minus';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import XIcon from '@lucide/svelte/icons/x';

	/**
	 * Типизированный dispatch по сгенерированным сообщениям Paraglide (ключи
	 * inf_coord_*). Выбор локали остаётся внутри runtime Paraglide.
	 */
	type InfCoordMessageKey = Extract<keyof typeof m, `inf_coord_${string}`>;
	function t(key: InfCoordMessageKey): string {
		return m[key]();
	}

	const uid = $props.id();
	function localValue(value: string) {
		return value
			.replaceAll('кг', m.inf_market_unit_kg())
			.replaceAll('п.п.', m.inf_coord_unit_pp())
			.replace(/(\d+),(\d+)/g, (_match: string, whole: string, fraction: string) =>
				new Intl.NumberFormat(getLocale(), {
					useGrouping: false,
					minimumFractionDigits: fraction.length,
					maximumFractionDigits: fraction.length
				}).format(Number(`${whole}.${fraction}`))
			);
	}

	let {
		title,
		variant = 'negotiation'
	}: {
		title: string;
		variant?: 'advisor' | 'negotiation';
	} = $props();

	// Респонденты опроса: имена и наборы тегов перенесены с полноразмерного исходного PNG.
	const respondents: { nameKey: InfCoordMessageKey; tags: InfCoordMessageKey[] }[] = [
		{
			nameKey: 'inf_coord_ns_r1_name',
			tags: [
				'inf_coord_ns_tag_bental',
				'inf_coord_ns_tag_both',
				'inf_coord_ns_tag_doubt',
				'inf_coord_ns_tag_chilled_thighs',
				'inf_coord_ns_tag_disagree',
				'inf_coord_ns_tag_lower_price'
			]
		},
		{
			nameKey: 'inf_coord_ns_r2_name',
			tags: [
				'inf_coord_ns_tag_aitas',
				'inf_coord_ns_tag_quality_first',
				'inf_coord_ns_tag_rather_yes',
				'inf_coord_ns_tag_chilled_carcass',
				'inf_coord_ns_tag_agree',
				'inf_coord_ns_tag_best_quality'
			]
		},
		{
			nameKey: 'inf_coord_ns_r3_name',
			tags: [
				'inf_coord_ns_tag_aitas',
				'inf_coord_ns_tag_both',
				'inf_coord_ns_tag_doubt',
				'inf_coord_ns_tag_chilled_thighs',
				'inf_coord_ns_tag_disagree',
				'inf_coord_ns_tag_lower_price'
			]
		},
		{
			nameKey: 'inf_coord_ns_r4_name',
			tags: [
				'inf_coord_ns_tag_bental',
				'inf_coord_ns_tag_quality_first',
				'inf_coord_ns_tag_rather_yes',
				'inf_coord_ns_tag_chilled_carcass',
				'inf_coord_ns_tag_agree',
				'inf_coord_ns_tag_best_quality'
			]
		},
		{
			nameKey: 'inf_coord_ns_r5_name',
			tags: [
				'inf_coord_ns_tag_bental',
				'inf_coord_ns_tag_price_first',
				'inf_coord_ns_tag_hard_no',
				'inf_coord_ns_tag_frozen_thighs',
				'inf_coord_ns_tag_disagree',
				'inf_coord_ns_tag_best_quality'
			]
		}
	];
	const surveyAnswers: {
		qLabel: InfCoordMessageKey;
		qKey: InfCoordMessageKey;
		aKey: InfCoordMessageKey;
	}[] = [
		{ qLabel: 'inf_coord_ns_q1_label', qKey: 'inf_coord_ns_q1', aKey: 'inf_coord_ns_a1' },
		{ qLabel: 'inf_coord_ns_q2_label', qKey: 'inf_coord_ns_q2', aKey: 'inf_coord_ns_a2' },
		{ qLabel: 'inf_coord_ns_q3_label', qKey: 'inf_coord_ns_q3', aKey: 'inf_coord_ns_a3' },
		{ qLabel: 'inf_coord_ns_q4_label', qKey: 'inf_coord_ns_q4', aKey: 'inf_coord_ns_a4' },
		{ qLabel: 'inf_coord_ns_q5_label', qKey: 'inf_coord_ns_q5', aKey: 'inf_coord_ns_a5' }
	];
	// Журнал сделок: тексты перенесены с полноразмерного исходного PNG; время — данные.
	const dealLog: { textKey: InfCoordMessageKey; time: string }[] = [
		{ textKey: 'inf_coord_lg_e1', time: '59,3' },
		{ textKey: 'inf_coord_lg_e2', time: '59,3' },
		{ textKey: 'inf_coord_lg_e3', time: '72,7' },
		{ textKey: 'inf_coord_lg_e4', time: '84,7' },
		{ textKey: 'inf_coord_lg_e5', time: '111,5' },
		{ textKey: 'inf_coord_lg_e6', time: '111,5' },
		{ textKey: 'inf_coord_lg_e7', time: '123,7' },
		{ textKey: 'inf_coord_lg_e8', time: '123,7' },
		{ textKey: 'inf_coord_lg_e9', time: '150,6' },
		{ textKey: 'inf_coord_lg_e10', time: '150,6' },
		{ textKey: 'inf_coord_lg_e11', time: '163,0' },
		{ textKey: 'inf_coord_lg_e12', time: '174,7' },
		{ textKey: 'inf_coord_lg_e13', time: '186,9' },
		{ textKey: 'inf_coord_lg_e14', time: '186,9' }
	];
	// Магазин ST0111 из всплывающей карточки на карте (значения — исходные демо-данные).
	const storeRows = [
		{
			labelKey: 'inf_coord_mp_margin' as InfCoordMessageKey,
			base: '58 244 ₸',
			scen: '57 923 ₸',
			delta: '−321 ₸'
		},
		{
			labelKey: 'inf_coord_mp_revenue' as InfCoordMessageKey,
			base: '779 441 ₸',
			scen: '778 339 ₸',
			delta: '−1 102 ₸'
		},
		{
			labelKey: 'inf_coord_mp_sales' as InfCoordMessageKey,
			base: '356,9 кг',
			scen: '356,9 кг',
			delta: '0,0 кг'
		},
		{
			labelKey: 'inf_coord_mp_service' as InfCoordMessageKey,
			base: '80,69 %',
			scen: '80,57 %',
			delta: '−0,12 п.п.'
		}
	];
	const steps: { titleKey: InfCoordMessageKey; descKey: InfCoordMessageKey }[] = [
		{ titleKey: 'inf_coord_adv_step1_title', descKey: 'inf_coord_adv_step1_desc' },
		{ titleKey: 'inf_coord_adv_step2_title', descKey: 'inf_coord_adv_step2_desc' },
		{ titleKey: 'inf_coord_adv_step3_title', descKey: 'inf_coord_adv_step3_desc' },
		{ titleKey: 'inf_coord_adv_step4_title', descKey: 'inf_coord_adv_step4_desc' }
	];
	const narratives = ['inf_coord_llm_n1', 'inf_coord_llm_n2', 'inf_coord_llm_n3'] as const;

	// Диапазоны легенды карты; заливка — монохромная шкала semantic-токенов
	// вместо красно-оранжево-зелёной палитры исходного скриншота.
	function bucketClass(value: number) {
		if (value >= 200) return 'fill-primary';
		if (value >= 130) return 'fill-primary/75';
		if (value >= 80) return 'fill-primary/50';
		if (value >= 50) return 'fill-primary/30';
		return 'fill-muted';
	}
	const cityLabels: Record<string, InfCoordMessageKey> = {
		Астана: 'inf_coord_adv_city_astana',
		Алматы: 'inf_coord_adv_city_almaty',
		Шымкент: 'inf_coord_adv_city_shymkent'
	};
	const cityLabel = (name: string) => t(cityLabels[name] ?? 'inf_coord_adv_city_astana');
</script>

<section class="space-y-6" aria-label={title}>
	<p class="sr-only">{t('inf_coord_caption')}</p>

	{#if variant === 'advisor'}
		<!-- Статичный иллюстративный вид исходного экрана AI-советника -->
		<div class="space-y-5">
			<p class="text-xs text-muted-foreground">{t('inf_coord_adv_caption')}</p>
			<div class="overflow-hidden rounded-xl border bg-card">
				<div class="flex flex-wrap items-start justify-between gap-3 border-b p-4">
					<div class="min-w-0 space-y-1">
						<p class="font-semibold">{t('inf_coord_adv_screen_title')}</p>
						<p class="text-sm text-muted-foreground">{t('inf_coord_adv_screen_sub')}</p>
					</div>
					<span class="rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground"
						>{t('inf_coord_adv_refresh')}</span
					>
				</div>
				<div class="grid items-start gap-4 p-4 lg:grid-cols-[200px_minmax(0,1fr)]">
					<div class="space-y-4 rounded-lg border bg-muted/40 p-3">
						<p class="text-xs text-muted-foreground">{t('inf_coord_adv_search')}</p>
						<p class="rounded bg-primary px-2 py-1.5 text-center text-xs text-primary-foreground">
							{t('inf_coord_adv_new_chat')}
						</p>
						{#each advisorMenus as menu (menu.id)}<div class="space-y-1">
								<p class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
									{menu.label()}
								</p>
								{#each menu.items as item, i (item.id)}<p
										class="rounded px-2 py-1 text-xs {i === 0
											? 'bg-secondary font-medium text-secondary-foreground'
											: 'text-muted-foreground'}"
									>
										◆ {item.label()}
									</p>{/each}
							</div>{/each}
					</div>
					<div class="min-w-0 space-y-4">
						<div class="grid gap-3 md:grid-cols-3">
							{#each digests as digest (digest.id)}<div class="rounded-lg border bg-muted/40 p-3">
									<p class="font-mono text-xs text-muted-foreground">{digest.date}</p>
									<p class="mt-1 text-sm font-semibold">{digest.title()}</p>
									<span
										class="mt-1 inline-block rounded-full border bg-card px-2 py-0.5 text-xs text-muted-foreground"
										>{digest.badge()}</span
									>
									<ul class="mt-2 list-disc space-y-1 pl-4 text-xs text-muted-foreground">
										{#each digest.items as item (item)}<li>{item()}</li>{/each}
									</ul>
								</div>{/each}
						</div>
						<div class="rounded-lg border p-3">
							<p class="text-sm font-semibold">{t('inf_coord_adv_map_title')}</p>
							<p class="text-xs text-muted-foreground">{t('inf_coord_adv_map_sub')}</p>
							<div class="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto]">
								<svg
									viewBox="-35 -10 830 440"
									role="img"
									aria-label={t('inf_coord_adv_map_aria')}
									class="w-full rounded-lg bg-muted/40"
								>
									<defs><clipPath id={uid + '-map-clip'}><path d={mapOutline} /></clipPath></defs>
									<g clip-path={`url(#${uid}-map-clip)`}>
										{#each regions as r (r.id)}<polygon
												points={r.points}
												class="{bucketClass(r.value)} stroke-background"
												stroke-width="2"><title>{regionLabels[r.id]()}: {r.value}</title></polygon
											>{/each}
									</g>
									{#each regions as r (r.id)}<text
											x={r.lx}
											y={r.id === 'almaty' ? r.ly - 40 : r.ly}
											text-anchor="middle"
											font-size="12"
											class={r.value >= 200
												? 'pointer-events-none fill-primary-foreground'
												: 'pointer-events-none fill-foreground'}>{regionLabels[r.id]()}</text
										><text
											x={r.lx}
											y={(r.id === 'almaty' ? r.ly - 40 : r.ly) + 15}
											text-anchor="middle"
											font-size="12"
											class={r.value >= 200
												? 'pointer-events-none fill-primary-foreground'
												: 'pointer-events-none fill-foreground'}>{r.value}</text
										>{/each}
									{#each cities as city (city.name)}<circle
											cx={city.x}
											cy={city.y}
											r="4"
											class="fill-primary stroke-background"
											stroke-width="1.5"
										/><text
											x={city.x + (city.capital ? 10 : 0)}
											y={city.y - 8}
											font-size="12"
											class="pointer-events-none fill-foreground"
											>{city.capital ? '★ ' : ''}{cityLabel(city.name)}</text
										>{/each}
									<text
										x="-5"
										y="210"
										font-size="11"
										class="fill-muted-foreground"
										transform="rotate(-90 -5 210)">{t('inf_coord_adv_sea')}</text
									>
									<text x="620" y="352" font-size="11" class="fill-muted-foreground"
										>{t('inf_coord_adv_balkhash')}</text
									>
									<text x="330" y="330" font-size="11" class="fill-muted-foreground"
										>{t('inf_coord_adv_aral')}</text
									>
								</svg>
								<div
									role="img"
									aria-label={t('inf_coord_adv_legend_aria')}
									class="space-y-2 text-xs"
								>
									<span
										class="inline-block rounded-md bg-primary px-2 py-1 text-xs text-primary-foreground"
										>{t('inf_coord_adv_export')}</span
									>
									<ul class="space-y-1.5">
										{#each [{ leg: 'inf_coord_adv_leg_1', cls: 'bg-primary' }, { leg: 'inf_coord_adv_leg_2', cls: 'bg-primary/75' }, { leg: 'inf_coord_adv_leg_3', cls: 'bg-primary/50' }, { leg: 'inf_coord_adv_leg_4', cls: 'bg-primary/30' }, { leg: 'inf_coord_adv_leg_5', cls: 'bg-muted' }] as const as item (item.leg)}<li
												class="flex items-center gap-2 text-muted-foreground"
											>
												<span aria-hidden="true" class="size-3 rounded {item.cls}"></span>
												{t(item.leg)}
											</li>{/each}
									</ul>
								</div>
							</div>
						</div>
						<div class="space-y-2">
							<div class="flex flex-wrap gap-2">
								{#each chatModes as mode, i (mode.id)}<span
										class="rounded-full px-3 py-1 text-xs {i === 3
											? 'bg-primary text-primary-foreground'
											: 'border text-muted-foreground'}">{mode.label()}</span
									>{/each}
							</div>
							<p
								class="flex items-center justify-between gap-3 rounded-full border px-4 py-2 text-sm text-muted-foreground"
							>
								{t('inf_coord_adv_input_ph')}
								<span
									aria-hidden="true"
									class="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground"
									>{m.inf_coord_adv_send()}</span
								>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="max-w-3xl space-y-3">
				<h4 class="text-lg font-semibold">{t('inf_coord_adv_cycle_title')}</h4>
				<p class="text-sm text-muted-foreground">{t('inf_coord_adv_cycle_intro')}</p>
				<ol class="space-y-3">
					{#each steps as step, i (step.titleKey)}<li class="flex items-start gap-3">
							<span
								aria-hidden="true"
								class="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground"
								>{i + 1}</span
							>
							<p class="text-sm leading-relaxed">
								<strong>{t(step.titleKey)}</strong> — {t(step.descKey)}
							</p>
						</li>{/each}
				</ol>
				<p class="rounded-lg bg-muted p-4 text-sm leading-relaxed text-muted-foreground">
					{t('inf_coord_adv_data_note')}
				</p>
			</div>
		</div>
	{:else}
		<!-- LLM говорит с LLM -->
		<div class="space-y-8">
			<div class="flex flex-wrap items-center justify-between gap-3">
				<p class="max-w-xl text-sm text-muted-foreground">{t('inf_coord_llm_subtitle')}</p>
				<span class="rounded-full bg-primary px-4 py-1.5 text-xs text-primary-foreground"
					>{t('inf_coord_llm_badge')}</span
				>
			</div>

			<div class="space-y-2">
				<div class="grid gap-4 md:grid-cols-2">
					<div class="rounded-xl border bg-card p-5 shadow-sm">
						<div class="flex items-center gap-3">
							<span aria-hidden="true" class="size-10 shrink-0 rounded-full bg-primary"></span>
							<span>
								<span class="block font-bold">{t('inf_coord_llm_buyer_name')}</span>
								<span class="block text-xs text-muted-foreground"
									>{t('inf_coord_llm_buyer_role')}</span
								>
							</span>
						</div>
						<p class="mt-4 rounded-lg bg-muted p-4 text-sm leading-relaxed">
							{t('inf_coord_llm_buyer_quote')}
						</p>
					</div>
					<div class="rounded-xl border bg-card p-5 shadow-sm">
						<div class="flex items-center gap-3">
							<span aria-hidden="true" class="size-10 shrink-0 rounded-full bg-foreground"></span>
							<span>
								<span class="block font-bold">{t('inf_coord_llm_supplier_name')}</span>
								<span class="block text-xs text-muted-foreground"
									>{t('inf_coord_llm_supplier_role')}</span
								>
							</span>
						</div>
						<p class="mt-4 rounded-lg bg-muted p-4 text-sm leading-relaxed">
							{t('inf_coord_llm_supplier_quote')}
						</p>
					</div>
				</div>
				<div class="flex flex-wrap items-center justify-center gap-3 text-xs">
					<span class="inline-flex items-center gap-1.5 font-medium text-primary">
						{t('inf_coord_llm_arrow_request')}<ArrowRightIcon aria-hidden="true" class="size-4" />
					</span>
					<span class="inline-flex items-center gap-1.5 font-medium">
						<ArrowLeftIcon aria-hidden="true" class="size-4" />{t('inf_coord_llm_arrow_reply')}
					</span>
				</div>
			</div>

			<ul class="grid gap-4 md:grid-cols-3">
				{#each [{ icon: MessageCircleIcon, title: t('inf_coord_llm_c1_title'), desc: t('inf_coord_llm_c1_desc') }, { icon: CircleCheckIcon, title: t('inf_coord_llm_c2_title'), desc: t('inf_coord_llm_c2_desc') }, { icon: BarChart3Icon, title: t('inf_coord_llm_c3_title'), desc: t('inf_coord_llm_c3_desc') }] as card (card.title)}<li
						class="rounded-xl border bg-card p-5 shadow-sm"
					>
						<span
							aria-hidden="true"
							class="mb-3 flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground"
						>
							<card.icon class="size-4.5" />
						</span>
						<p class="mt-1 font-semibold">{card.title}</p>
						<p class="mt-1 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
					</li>{/each}
			</ul>

			<div class="grid items-start gap-5 2xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
				<!-- Реконструкция вложенного скриншота: опрос респондентов -->
				<div class="overflow-hidden rounded-xl border bg-card">
					<div class="flex items-center justify-between gap-2 border-b bg-muted/40 px-3 py-2">
						<p class="text-xs font-semibold wrap-anywhere">{t('inf_coord_ns_window')}</p>
						<XIcon aria-hidden="true" class="size-3.5 shrink-0 text-muted-foreground" />
					</div>
					<div class="flex items-center justify-between gap-2 border-b px-3 py-1.5 text-xs">
						<span class="text-muted-foreground">{t('inf_coord_ns_tab_dashboard')}</span>
						<span class="border-b-2 border-primary pb-0.5 font-medium"
							>{t('inf_coord_ns_tab_data')}</span
						>
						<span class="ml-auto flex items-center gap-1 text-muted-foreground">
							<span aria-hidden="true" class="size-1.5 rounded-full bg-primary"></span>
							{t('inf_coord_ns_status')}
						</span>
					</div>
					<div class="grid gap-3 p-3 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
						<div class="min-w-0 space-y-2">
							<p class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
								{t('inf_coord_ns_researcher')}
							</p>
							<div class="grid grid-cols-3 gap-1.5 text-xs text-muted-foreground">
								<span>{t('inf_coord_ns_filter_income')}: {t('inf_coord_ns_filter_all')}</span>
								<span>{t('inf_coord_ns_filter_age')}: {t('inf_coord_ns_filter_all')}</span>
								<span>{t('inf_coord_ns_filter_channel')}: {t('inf_coord_ns_filter_all')}</span>
							</div>
							<p class="text-xs text-muted-foreground">{t('inf_coord_ns_shown')}</p>
							<ul class="space-y-2">
								{#each respondents as person, i (i)}<li class="rounded-lg border bg-muted/30 p-2">
										<p class="text-xs font-semibold">{t(person.nameKey)}</p>
										<div class="mt-1 flex flex-wrap gap-1">
											{#each person.tags as tag (tag)}<span
													class="rounded px-1.5 py-0.5 text-xs {tag === 'inf_coord_ns_tag_bental' ||
													tag === 'inf_coord_ns_tag_aitas'
														? 'bg-primary/15 text-primary'
														: 'bg-secondary text-secondary-foreground'}">{t(tag)}</span
												>{/each}
										</div>
									</li>{/each}
							</ul>
						</div>
						<div class="min-w-0 space-y-3">
							<p class="text-sm font-bold">{t('inf_coord_ns_r1_name')}</p>
							<p class="text-xs text-muted-foreground">{t('inf_coord_ns_profile_meta')}</p>
							<p class="rounded-lg bg-muted p-2 text-xs leading-relaxed">
								{t('inf_coord_ns_profile_text')}
							</p>
							<p class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
								▸ {t('inf_coord_ns_stores')}
							</p>
							{#each surveyAnswers as answer (answer.qKey)}<div class="space-y-1">
									<p class="text-xs tracking-wide text-muted-foreground uppercase">
										{t(answer.qLabel)}
									</p>
									<p class="text-xs font-semibold">{t(answer.qKey)}</p>
									<p class="rounded-lg bg-muted p-2 text-xs leading-relaxed">
										{t(answer.aKey)}
									</p>
									{#if answer.qKey === 'inf_coord_ns_q1'}
										<p class="flex items-center gap-1.5">
											<span class="rounded bg-primary/15 px-1.5 py-0.5 text-xs text-primary"
												>{t('inf_coord_ns_tag_bental')}</span
											>
											<span aria-hidden="true" class="h-1 w-24 rounded-full bg-primary/60"></span>
										</p>
									{:else if answer.qKey === 'inf_coord_ns_q2'}
										<p class="text-xs text-muted-foreground">
											<span class="mr-1 rounded bg-secondary px-1.5 py-0.5"
												>{t('inf_coord_ns_tag_both')}</span
											>
											{t('inf_coord_ns_ev_300')}
										</p>
									{:else if answer.qKey === 'inf_coord_ns_q3'}
										<p class="text-xs text-muted-foreground">{t('inf_coord_ns_proj_3')}</p>
										<p class="flex items-center gap-1.5">
											<span class="rounded bg-secondary px-1.5 py-0.5 text-xs"
												>{t('inf_coord_ns_tag_doubt')}</span
											>
											<span class="text-xs text-muted-foreground">{t('inf_coord_ns_ev_230')}</span>
										</p>
									{:else if answer.qKey === 'inf_coord_ns_q4'}
										<p class="flex items-center gap-1.5">
											<span class="rounded bg-secondary px-1.5 py-0.5 text-xs"
												>{t('inf_coord_ns_tag_chilled_thighs')}</span
											>
											<span aria-hidden="true" class="h-1 w-24 rounded-full bg-primary/60"></span>
										</p>
									{:else}
										<p class="text-xs text-muted-foreground">{t('inf_coord_ns_proj_5')}</p>
										<p class="flex items-center gap-1.5">
											<span class="rounded bg-secondary px-1.5 py-0.5 text-xs"
												>{t('inf_coord_ns_tag_disagree')}</span
											>
											<span class="text-xs text-muted-foreground">{t('inf_coord_ns_ev_127')}</span>
										</p>
									{/if}
								</div>{/each}
						</div>
					</div>
				</div>

				<!-- Реконструкция вложенного скриншота: карта города и карточка магазина -->
				<div class="overflow-hidden rounded-xl border bg-card">
					<div class="relative bg-muted/40 p-3">
						<div class="absolute top-2 left-2 space-y-1">
							<span
								class="flex size-6 items-center justify-center rounded border bg-card text-muted-foreground"
								><PlusIcon aria-hidden="true" class="size-3" /></span
							>
							<span
								class="flex size-6 items-center justify-center rounded border bg-card text-muted-foreground"
								><MinusIcon aria-hidden="true" class="size-3" /></span
							>
						</div>
						<div class="mx-auto w-fit rounded-lg border bg-card p-2.5 text-xs shadow-sm">
							<div class="flex gap-1.5">
								<span class="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground"
									>{t('inf_coord_mp_l_gradients')}</span
								>
								<span class="rounded-full border px-2 py-0.5 text-xs text-muted-foreground"
									>{t('inf_coord_mp_l_channels')}</span
								>
								<span class="rounded-full border px-2 py-0.5 text-xs text-muted-foreground"
									>{t('inf_coord_mp_l_icons')}</span
								>
							</div>
							<p class="mt-1.5 text-xs text-muted-foreground">{t('inf_coord_mp_metric')}</p>
							<svg viewBox="0 0 120 8" aria-hidden="true" class="mt-1 h-2 w-40">
								<defs>
									<linearGradient id={uid + '-scale'}>
										<stop offset="0" stop-color="var(--border)" />
										<stop offset="1" stop-color="var(--primary)" />
									</linearGradient>
								</defs>
								<rect width="120" height="8" rx="4" fill={'url(#' + uid + '-scale)'} />
							</svg>
							<p class="flex justify-between text-xs text-muted-foreground">
								<span>{t('inf_coord_mp_scale_min')}</span><span>{t('inf_coord_mp_scale_max')}</span>
							</p>
							<p class="text-xs text-muted-foreground">{t('inf_coord_mp_follow')}</p>
						</div>
						<svg
							viewBox="0 0 400 240"
							role="img"
							aria-label={t('inf_coord_mp_metric')}
							class="mt-3 h-56 w-full rounded-lg border bg-card"
						>
							{#each [[60, 50, 26], [140, 90, 34], [250, 60, 30], [90, 170, 30], [210, 160, 38], [320, 130, 28], [170, 210, 24], [300, 200, 22], [40, 110, 20], [360, 60, 18]] as zone (zone[0] + '-' + zone[1])}<circle
									cx={zone[0]}
									cy={zone[1]}
									r={zone[2]}
									class="fill-primary/15"
								/>{/each}
							{#each [[70, 55], [150, 95], [255, 65], [100, 175], [215, 165], [325, 135], [175, 215]] as marker (marker[0] + '-' + marker[1])}<circle
									cx={marker[0]}
									cy={marker[1]}
									r="5"
									class="fill-primary stroke-background"
									stroke-width="1.5"
								/>{/each}
						</svg>
						<div class="mt-3 min-w-0 rounded-lg border bg-card p-3 text-sm">
							<div class="flex items-center justify-between gap-2">
								<p class="font-bold">ST0111</p>
								<XIcon aria-hidden="true" class="size-3 text-muted-foreground" />
							</div>
							<p class="text-xs text-muted-foreground">{t('inf_coord_mp_tt_sub')}</p>
							<table class="mt-1.5 w-full text-left text-xs">
								<thead
									><tr class="text-muted-foreground"
										><th class="font-normal">{t('inf_coord_mp_metric')}</th><th class="font-normal"
											>{t('inf_coord_mp_h_base')}</th
										><th class="font-normal">{t('inf_coord_mp_h_scenario')}</th><th
											class="font-normal">{t('inf_coord_mp_h_delta')}</th
										></tr
									></thead
								>
								<tbody>
									{#each storeRows as row (row.labelKey)}<tr class="border-t">
											<th scope="row" class="py-0.5 font-medium">{t(row.labelKey)}</th>
											<td class="py-0.5 tabular-nums">{localValue(row.base)}</td>
											<td class="py-0.5 tabular-nums">{localValue(row.scen)}</td>
											<td class="py-0.5 text-destructive tabular-nums">{localValue(row.delta)}</td>
										</tr>{/each}
								</tbody>
							</table>
							<p class="mt-1.5 text-xs font-medium">{t('inf_coord_mp_chart_title')}</p>
							<div class="flex items-center gap-2 text-xs text-muted-foreground">
								<span class="flex items-center gap-1"
									><span aria-hidden="true" class="size-2 rounded-sm bg-primary"></span>{t(
										'inf_coord_mp_legend_base'
									)}</span
								>
								<span class="flex items-center gap-1"
									><span aria-hidden="true" class="size-2 rounded-sm bg-primary/40"></span>{t(
										'inf_coord_mp_legend_scenario'
									)}</span
								>
							</div>
							<svg viewBox="0 0 200 48" aria-hidden="true" class="h-12 w-full">
								{#each [40, 32, 24, 16, 8] as y (y)}<line
										x1="14"
										x2="198"
										y1={y}
										y2={y}
										class="stroke-border"
										stroke-width="0.5"
									/>{/each}
								<path
									d="M16 20 C28 12 36 36 48 34 S64 14 76 18 S92 34 104 30 S124 12 136 22 S156 38 168 30 S188 24 196 28"
									fill="none"
									class="stroke-primary"
									stroke-width="1.5"
								/>
							</svg>
						</div>
					</div>
					<div
						class="flex flex-wrap items-center gap-x-4 gap-y-1 border-t px-3 py-2 text-xs text-muted-foreground"
					>
						<span class="font-medium text-foreground">{t('inf_coord_mp_month')}</span>
						<span aria-hidden="true" class="hidden h-1 w-40 rounded-full bg-muted sm:block">
							<span class="block h-1 w-3 rounded-full bg-primary"></span>
						</span>
						<span>{t('inf_coord_mp_moved')}</span>
						<span class="rounded-full border px-2 py-0.5">0.5×</span>
						<span class="rounded-full bg-primary px-2 py-0.5 text-primary-foreground">1×</span>
						<span class="rounded-full border px-2 py-0.5">2×</span>
						<span>☐ {t('inf_coord_mp_repeat')}</span>
					</div>
					<p class="border-t px-3 py-1.5 text-xs wrap-anywhere text-muted-foreground">
						{t('inf_coord_mp_attribution')}
					</p>
				</div>

				<!-- Реконструкция вложенного скриншота: журнал переговоров -->
				<div class="overflow-hidden rounded-xl border bg-card">
					<div class="border-b bg-muted/40 p-2.5">
						<div class="flex items-center gap-2 rounded-lg border bg-card p-2 text-xs">
							<span aria-hidden="true" class="size-2 shrink-0 rounded-full bg-primary"></span>
							<p class="min-w-0 flex-1 font-medium wrap-anywhere">{t('inf_coord_lg_promo')}</p>
							<p class="shrink-0 text-xs text-muted-foreground">
								{t('inf_coord_lg_promo_status')}
							</p>
						</div>
					</div>
					<ul class="divide-y p-1 text-xs">
						{#each dealLog as entry (entry.textKey)}<li class="flex items-start gap-2 p-2">
								<span
									aria-hidden="true"
									class="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-foreground"
								></span>
								<div class="min-w-0 flex-1">
									<p class="wrap-anywhere">{t(entry.textKey)}</p>
									<p class="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
										<span aria-hidden="true">▸</span>{t('inf_coord_lg_details')}
									</p>
								</div>
								<p class="shrink-0 text-xs text-muted-foreground tabular-nums">
									{localValue(entry.time)}
									{m.inf_coord_unit_seconds()}
								</p>
							</li>{/each}
					</ul>
				</div>
			</div>
			<p class="text-xs text-muted-foreground">{t('inf_coord_llm_nested_caption')}</p>

			<div class="max-w-4xl space-y-4">
				{#each narratives as narrative (narrative)}<p class="text-sm leading-relaxed">
						{t(narrative)}
					</p>{/each}
				<p class="text-xs text-muted-foreground">{t('inf_coord_llm_footer')}</p>
			</div>
		</div>
	{/if}
</section>
