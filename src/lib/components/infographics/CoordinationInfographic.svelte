<script lang="ts">
	/**
	 * Иллюстративная реконструкция растровых инфографик контура координации
	 * (static/images/contours/coordination-01..05.webp) как HTML/SVG.
	 * Тексты — сгенерированные сообщения Paraglide (семейство inf_coord_*);
	 * локаль выбирает только runtime Paraglide. Цифры — исходные демо-значения;
	 * неразборчивые фрагменты растра помечены как нечитаемые, значения не выдумываются.
	 */
	import { m } from '#lib/paraglide/messages.js';
	import NetworkIcon from '@lucide/svelte/icons/network';
	import GaugeIcon from '@lucide/svelte/icons/gauge';
	import SlidersHorizontalIcon from '@lucide/svelte/icons/sliders-horizontal';
	import AccessibleIcon from '@lucide/svelte/icons/accessibility';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import LockOpenIcon from '@lucide/svelte/icons/lock-open';
	import LayoutDashboardIcon from '@lucide/svelte/icons/layout-dashboard';
	import FlameIcon from '@lucide/svelte/icons/flame';
	import TrendingUpIcon from '@lucide/svelte/icons/trending-up';
	import GlobeIcon from '@lucide/svelte/icons/globe';
	import FunnelIcon from '@lucide/svelte/icons/funnel';
	import UserCheckIcon from '@lucide/svelte/icons/user-check';
	import SmartphoneIcon from '@lucide/svelte/icons/smartphone';
	import ZapIcon from '@lucide/svelte/icons/zap';
	import CalendarCheckIcon from '@lucide/svelte/icons/calendar-check';
	import type { Component } from 'svelte';

	/**
	 * Типизированный dispatch по сгенерированным сообщениям Paraglide (ключи
	 * inf_coord_*). Выбор локали остаётся внутри runtime Paraglide.
	 */
	type InfCoordMessageKey = Extract<keyof typeof m, `inf_coord_${string}`>;
	function t(key: InfCoordMessageKey): string {
		return m[key]();
	}

	let { variant, title }: { variant: number; title: string } = $props();

	const v2Parts = [
		{ label: t('inf_coord_v2_iq_label'), value: t('inf_coord_v2_iq_value'), fill: 'bg-primary' },
		{
			label: t('inf_coord_v2_eq_label'),
			value: t('inf_coord_v2_eq_value'),
			fill: 'bg-primary/70'
		},
		{ label: t('inf_coord_v2_sq_label'), value: t('inf_coord_v2_sq_value'), fill: 'bg-primary/40' }
	];
	// Доли шкалы 0..5, детерминированно из значений исходника.
	const share = (value: string) => Math.round((Number(value.replace(',', '.')) / 5) * 100);
	// Серый сегмент пончика в источнике без подписи: остаток показан как форма,
	// без заявленной категории и процента.
	const v3Slices = [
		{ key: 'done', label: t('inf_coord_v3_done_label'), value: 86, cls: 'stroke-primary' },
		{
			key: 'overdue',
			label: t('inf_coord_v3_overdue_label'),
			value: 7,
			cls: 'stroke-destructive'
		},
		{ key: 'unlabeled', label: '', value: 7, cls: 'stroke-muted' }
	];
	const donutR = 15.9155; // окружность ≈ 100 единиц длины
	const v4Stats = [
		{ label: t('inf_coord_v4_c_all_label'), value: t('inf_coord_v4_c_all_value'), accent: true },
		{ label: t('inf_coord_v4_c_econ_label'), value: t('inf_coord_v4_c_econ_value') },
		{ label: t('inf_coord_v4_c_social_label'), value: t('inf_coord_v4_c_social_value') },
		{ label: t('inf_coord_v4_c_infra_label'), value: t('inf_coord_v4_c_infra_value') }
	];
	type Feature = { icon: Component; title: string; desc: string };
	const featuresByVariant: Record<number, Feature[]> = {
		1: [
			{ icon: NetworkIcon, title: t('inf_coord_v1_f1_title'), desc: t('inf_coord_v1_f1_desc') },
			{ icon: GaugeIcon, title: t('inf_coord_v1_f2_title'), desc: t('inf_coord_v1_f2_desc') },
			{
				icon: SlidersHorizontalIcon,
				title: t('inf_coord_v1_f3_title'),
				desc: t('inf_coord_v1_f3_desc')
			}
		],
		2: [
			{ icon: AccessibleIcon, title: t('inf_coord_v2_f1_title'), desc: t('inf_coord_v2_f1_desc') },
			{ icon: EyeIcon, title: t('inf_coord_v2_f2_title'), desc: t('inf_coord_v2_f2_desc') },
			{ icon: LockOpenIcon, title: t('inf_coord_v2_f3_title'), desc: t('inf_coord_v2_f3_desc') }
		],
		3: [
			{
				icon: LayoutDashboardIcon,
				title: t('inf_coord_v3_f1_title'),
				desc: t('inf_coord_v3_f1_desc')
			},
			{ icon: FlameIcon, title: t('inf_coord_v3_f2_title'), desc: t('inf_coord_v3_f2_desc') },
			{
				icon: TrendingUpIcon,
				title: t('inf_coord_v3_f3_title'),
				desc: t('inf_coord_v3_f3_desc')
			}
		],
		4: [
			{ icon: GlobeIcon, title: t('inf_coord_v4_f1_title'), desc: t('inf_coord_v4_f1_desc') },
			{ icon: FunnelIcon, title: t('inf_coord_v4_f2_title'), desc: t('inf_coord_v4_f2_desc') },
			{ icon: UserCheckIcon, title: t('inf_coord_v4_f3_title'), desc: t('inf_coord_v4_f3_desc') }
		],
		5: [
			{ icon: SmartphoneIcon, title: t('inf_coord_v5_f1_title'), desc: t('inf_coord_v5_f1_desc') },
			{ icon: ZapIcon, title: t('inf_coord_v5_f2_title'), desc: t('inf_coord_v5_f2_desc') },
			{
				icon: CalendarCheckIcon,
				title: t('inf_coord_v5_f3_title'),
				desc: t('inf_coord_v5_f3_desc')
			}
		]
	};
	const features = $derived(featuresByVariant[variant] ?? []);
</script>

<figure class="space-y-6" aria-label={title}>
	<p class="sr-only">{t('inf_coord_caption')}</p>

	{#if variant === 1}
		<!-- Участников симуляции: 38 — сеть подразделений вокруг центра с риском просрочки -->
		<div class="space-y-5">
			<div class="flex flex-wrap items-start justify-between gap-4">
				<p class="text-3xl font-bold tracking-tight text-primary">{t('inf_coord_v1_headline')}</p>
				<span
					class="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
				>
					<span aria-hidden="true" class="size-2 rounded-full bg-primary"></span>
					{t('inf_coord_v1_status')}
				</span>
			</div>
			<div
				class="rounded-xl border bg-muted/30 p-4"
				role="img"
				aria-label={t('inf_coord_v1_sat_aria')}
			>
				<div
					class="mx-auto w-fit max-w-full rounded-xl border-2 border-destructive/60 bg-card p-5 text-center shadow-md"
				>
					<p class="font-semibold">{t('inf_coord_v1_center')}</p>
					<p
						class="mt-2 inline-block rounded bg-destructive px-2.5 py-1 text-xs text-primary-foreground"
					>
						{t('inf_coord_v1_risk')}
					</p>
				</div>
				<div aria-hidden="true" class="mx-auto h-6 w-px bg-muted-foreground"></div>
				<div class="relative grid grid-cols-2 gap-6 pt-6 sm:grid-cols-4" data-coordination-network>
					<!-- Fixed card heights keep the schematic connectors aligned without JS. -->
					<svg
						viewBox="0 0 400 416"
						preserveAspectRatio="none"
						class="pointer-events-none absolute inset-0 h-full w-full text-muted-foreground sm:hidden"
						aria-hidden="true"
					>
						<path
							d="M200 0V324"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							vector-effect="non-scaling-stroke"
						/>
						{#each [12, 116, 220, 324] as y (y)}
							<path
								d="M100 {y + 12}V{y}H300V{y + 12}"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								vector-effect="non-scaling-stroke"
							/>
						{/each}
					</svg>
					<svg
						viewBox="0 0 800 208"
						preserveAspectRatio="none"
						class="pointer-events-none absolute inset-0 hidden h-full w-full text-muted-foreground sm:block"
						aria-hidden="true"
					>
						<path
							d="M400 0V116"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							vector-effect="non-scaling-stroke"
						/>
						{#each [12, 116] as y (y)}
							<path
								d="M100 {y + 12}V{y}H700V{y + 12}M300 {y}V{y + 12}M500 {y}V{y + 12}"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								vector-effect="non-scaling-stroke"
							/>
						{/each}
					</svg>
					{#each Array.from({ length: 8 }, (_, i) => i) as i (i)}
						<div
							aria-hidden="true"
							class="relative flex h-20 min-w-0 flex-col justify-center gap-2 rounded-lg border bg-card p-3 shadow-sm"
						>
							<!-- Source chips are unreadable; do not invent departments or values. -->
							<div class="h-1.5 w-3/4 rounded-full bg-muted"></div>
							<div class="flex gap-1.5">
								<span class="h-4 w-14 max-w-[55%] rounded bg-primary/80"></span>
								<span class="h-4 w-10 max-w-[35%] rounded bg-primary/50"></span>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<p class="text-xs text-muted-foreground">{t('inf_coord_v1_chips_unreadable')}</p>
		</div>
	{:else if variant === 2}
		<!-- Комплексная оценка: три составляющих → общая оценка -->
		<div class="space-y-5">
			<p class="text-3xl font-bold tracking-tight text-primary">{t('inf_coord_v2_headline')}</p>
			<div class="grid items-center gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
				<div class="space-y-3" role="img" aria-label={t('inf_coord_v2_bars_aria')}>
					{#each v2Parts as part (part.label)}<div class="rounded-xl border bg-card p-4 shadow-sm">
							<div class="flex items-baseline justify-between gap-3">
								<span class="text-sm font-medium">{part.label}</span>
								<span class="text-lg font-bold">{part.value}</span>
							</div>
							<div class="mt-2 h-2 overflow-hidden rounded-full bg-muted">
								<div
									class="h-full rounded-full {part.fill}"
									style="width: {share(part.value)}%"
								></div>
							</div>
						</div>{/each}
				</div>
				<svg aria-hidden="true" viewBox="0 0 40 120" class="hidden h-28 text-border lg:block">
					<path d="M0 18 C22 18 22 60 40 60" stroke="currentColor" fill="none" stroke-width="2" />
					<path d="M0 60 H40" stroke="currentColor" stroke-width="2" />
					<path d="M0 102 C22 102 22 60 40 60" stroke="currentColor" fill="none" stroke-width="2" />
				</svg>
				<div class="rounded-xl border bg-card p-5 shadow-md">
					<div class="flex flex-wrap items-center justify-between gap-3">
						<p class="text-xl font-bold">{t('inf_coord_v2_total')}</p>
						<span
							class="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
							>{t('inf_coord_v2_review')}</span
						>
					</div>
					<div class="mt-3 h-2 overflow-hidden rounded-full bg-muted">
						<div class="h-full w-[62%] rounded-full bg-primary"></div>
					</div>
				</div>
			</div>
		</div>
	{:else if variant === 3}
		<!-- Исполнено вовремя: пончик + динамика документооборота -->
		<div class="space-y-5">
			<p class="text-3xl font-bold tracking-tight">{t('inf_coord_v3_headline')}</p>
			<div
				class="grid items-center gap-6 rounded-xl border bg-muted/30 p-5 md:grid-cols-[auto_minmax(0,1fr)]"
			>
				<div class="mx-auto w-56 max-w-full">
					<div class="relative mx-auto w-44">
						<svg viewBox="0 0 42 42" aria-hidden="true" class="-rotate-90">
							{#each v3Slices as slice, i (slice.key)}<circle
									cx="21"
									cy="21"
									r={donutR}
									fill="none"
									stroke-width="6"
									class={slice.cls}
									stroke-dasharray="{slice.value} {100 - slice.value}"
									stroke-dashoffset={-v3Slices.slice(0, i).reduce((sum, s) => sum + s.value, 0)}
								></circle>{/each}
						</svg>
						<p
							role="img"
							aria-label="{title}. {t('inf_coord_v3_done_label')}: {t(
								'inf_coord_v3_done_value'
							)}, {t('inf_coord_v3_overdue_label')}: {t('inf_coord_v3_overdue_value')}, {t(
								'inf_coord_v3_other_label'
							)}"
							class="absolute inset-0 flex flex-col items-center justify-center text-center"
						>
							<span class="text-sm text-muted-foreground">{t('inf_coord_v3_done_label')}</span>
							<span class="text-2xl font-bold">{t('inf_coord_v3_done_value')}</span>
						</p>
					</div>
					<ul class="mt-2 space-y-1 text-xs text-muted-foreground">
						<li class="flex items-center gap-2">
							<span aria-hidden="true" class="size-2 rounded-full bg-destructive"></span>
							{t('inf_coord_v3_overdue_label')} · {t('inf_coord_v3_overdue_value')}
						</li>
						<li class="flex items-center gap-2">
							<span aria-hidden="true" class="size-2 rounded-full bg-muted"></span>
							{t('inf_coord_v3_other_label')}
						</li>
					</ul>
				</div>
				<div class="min-w-0 space-y-3">
					<span
						class="inline-block rounded-lg border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
						>{t('inf_coord_v3_scope')}</span
					>
					<svg
						viewBox="0 0 320 120"
						role="img"
						aria-label={t('inf_coord_v3_chart_aria')}
						class="h-40 w-full"
						preserveAspectRatio="none"
					>
						{#each [30, 60, 90] as y (y)}<line
								x1="0"
								x2="320"
								y1={y}
								y2={y}
								class="stroke-border"
								stroke-width="1"
							/>{/each}
						<path
							d="M0 95 C20 75 35 68 55 72 S90 92 110 88 C130 84 140 30 160 30 S190 78 210 74 C230 70 240 52 260 52 S290 78 305 72 L320 62 V120 H0 Z"
							class="fill-primary/15"
						/>
						<path
							d="M0 95 C20 75 35 68 55 72 S90 92 110 88 C130 84 140 30 160 30 S190 78 210 74 C230 70 240 52 260 52 S290 78 305 72 L320 62"
							fill="none"
							class="stroke-primary"
							stroke-width="2"
						/>
					</svg>
				</div>
			</div>
		</div>
	{:else if variant === 4}
		<!-- Оцифровано сотрудников: сводные показатели → карточка сотрудника -->
		<div class="space-y-5">
			<p class="text-3xl font-bold tracking-tight text-primary">{t('inf_coord_v4_headline')}</p>
			<div class="space-y-3" role="img" aria-label={t('inf_coord_v4_card_aria')}>
				<ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
					{#each v4Stats as stat (stat.label)}<li
							class="flex items-center gap-3 rounded-xl border bg-card p-3 shadow-sm"
						>
							<span
								aria-hidden="true"
								class="flex size-10 shrink-0 items-center justify-center rounded-lg {stat.accent
									? 'bg-primary text-primary-foreground'
									: 'bg-secondary text-secondary-foreground'}"
							>
								<GlobeIcon class="size-5" />
							</span>
							<span class="min-w-0">
								<span class="block text-xs text-muted-foreground">{stat.label}</span>
								<span class="block text-xl font-bold">{stat.value}</span>
							</span>
						</li>{/each}
				</ul>
				<svg
					aria-hidden="true"
					viewBox="0 0 600 36"
					class="mx-auto hidden h-9 w-full max-w-3xl text-border lg:block"
				>
					{#each [75, 225, 375, 525] as x (x)}<path
							d="M{x} 0 C{x} 24 300 12 300 36"
							stroke="currentColor"
							fill="none"
							stroke-width="2"
						/>{/each}
				</svg>
				<div class="mx-auto max-w-xl rounded-xl border bg-card p-5 shadow-md">
					<p class="text-xs tracking-wide text-muted-foreground uppercase">
						{t('inf_coord_v4_card_label')}
					</p>
					<p class="mt-1 text-xl font-bold">{t('inf_coord_v4_category')}</p>
					<div class="mt-3 flex flex-wrap gap-2">
						<span class="rounded-full border px-3 py-1 text-xs">{t('inf_coord_v4_region')}</span>
						<span class="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground"
							>{t('inf_coord_v4_sphere')}</span
						>
						<span class="rounded-full border px-3 py-1 text-xs">{t('inf_coord_v4_experience')}</span
						>
						<!-- Бейдж в растре нечитаем: подпись-заглушка вместо придуманной категории -->
						<span class="rounded-full border px-3 py-1 text-xs text-muted-foreground italic"
							>{t('inf_coord_v4_expertise')}</span
						>
					</div>
				</div>
			</div>
		</div>
	{:else if variant === 5}
		<!-- Оцифрованных функций ЦА: три мессенджер-бота -->
		<div class="space-y-5">
			<p class="text-3xl font-bold tracking-tight text-primary">{t('inf_coord_v5_headline')}</p>
			<ul class="grid gap-8 sm:grid-cols-3 sm:gap-4">
				{#each [{ label: t('inf_coord_v5_b1'), aria: t('inf_coord_v5_p1_aria'), kind: 'chat' }, { label: t('inf_coord_v5_b2'), aria: t('inf_coord_v5_p2_aria'), kind: 'list' }, { label: t('inf_coord_v5_b3'), aria: t('inf_coord_v5_p3_aria'), kind: 'calendar' }] as bot, i (bot.label)}<li
						class="flex flex-col items-center gap-3 text-center"
					>
						<span
							class="inline-block max-w-full rounded-xl border bg-card px-3 py-1.5 text-sm font-medium shadow-sm {i ===
							0
								? 'bg-primary text-primary-foreground'
								: i === 2
									? 'bg-secondary text-secondary-foreground'
									: ''}">{bot.label}</span
						>
						<svg
							viewBox="0 0 96 160"
							role="img"
							aria-label={bot.aria}
							class="h-44 w-auto text-primary"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						>
							<rect x="6" y="4" width="84" height="152" rx="14" />
							<line x1="38" y1="13" x2="58" y2="13" />
							{#if bot.kind === 'chat'}
								<rect x="16" y="28" width="44" height="10" rx="5" />
								<rect x="24" y="44" width="56" height="10" rx="5" />
								<rect x="16" y="60" width="36" height="10" rx="5" />
								<circle cx="24" cy="86" r="4" />
								<line x1="34" y1="86" x2="70" y2="86" />
								<circle cx="24" cy="98" r="4" />
								<line x1="34" y1="98" x2="62" y2="98" />
								<rect x="16" y="118" width="64" height="12" rx="6" />
							{:else if bot.kind === 'list'}
								<rect x="16" y="28" width="64" height="96" rx="6" />
								<circle cx="27" cy="44" r="4" />
								<line x1="37" y1="44" x2="72" y2="44" />
								<circle cx="27" cy="60" r="4" />
								<line x1="37" y1="60" x2="72" y2="60" />
								<circle cx="27" cy="76" r="4" />
								<line x1="37" y1="76" x2="72" y2="76" />
								<circle cx="27" cy="92" r="4" />
								<line x1="37" y1="92" x2="64" y2="92" />
							{:else}
								<rect x="20" y="40" width="56" height="52" rx="6" />
								<line x1="20" y1="54" x2="76" y2="54" />
								<line x1="34" y1="34" x2="34" y2="44" />
								<line x1="62" y1="34" x2="62" y2="44" />
								<path d="M38 66 l7 7 l14 -14" stroke-width="3" />
							{/if}
							<circle cx="48" cy="144" r="6" />
						</svg>
					</li>{/each}
			</ul>
		</div>
	{/if}

	<ul class="grid gap-4 border-t pt-5 sm:grid-cols-3">
		{#each features as feature (feature.title)}<li class="flex items-start gap-3">
				<span
					aria-hidden="true"
					class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
				>
					<feature.icon class="size-5" />
				</span>
				<span class="min-w-0">
					<span class="block font-semibold">{feature.title}</span>
					<span class="block text-sm leading-relaxed text-muted-foreground">{feature.desc}</span>
				</span>
			</li>{/each}
	</ul>

	<figcaption class="text-xs text-muted-foreground">{t('inf_coord_caption')}</figcaption>
</figure>
