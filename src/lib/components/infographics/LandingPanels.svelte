<script lang="ts">
	/**
	 * Иллюстративная реконструкция растровых панелей главной страницы
	 * (static/images/landing/{strategy,assessment,assessmentDetail,advisor,exec,service}.webp)
	 * как HTML/SVG. Тексты — ключи Paraglide inf_panels_* из messages/*.json.
	 * Все числа — демонстрационные значения
	 * исходников; пропорции схем иллюстративные, series не выдуманы.
	 */
	import { m } from '#lib/paraglide/messages.js';
	import BotIcon from '@lucide/svelte/icons/bot';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import FlagIcon from '@lucide/svelte/icons/flag';
	import FlameIcon from '@lucide/svelte/icons/flame';
	import InfoIcon from '@lucide/svelte/icons/info';
	import MicIcon from '@lucide/svelte/icons/mic';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import SmileIcon from '@lucide/svelte/icons/smile';
	import TriangleAlertIcon from '@lucide/svelte/icons/triangle-alert';
	import UserIcon from '@lucide/svelte/icons/user';

	type Variant = 'strategy' | 'assessment' | 'assessmentDetail' | 'service' | 'exec' | 'advisor';

	let { variant, title }: { variant: Variant; title: string } = $props();
	const id = $props.id();

	/* ---------- assessment: каркасная сетка лица (правая половина, зеркалится) ---------- */
	const faceHalf: [number, number][][] = [
		[
			[100, 30],
			[130, 46],
			[140, 78],
			[134, 108],
			[118, 136],
			[100, 150]
		],
		[
			[100, 44],
			[140, 78]
		],
		[
			[100, 64],
			[136, 96]
		],
		[
			[100, 84],
			[132, 116]
		],
		[
			[100, 104],
			[124, 128]
		],
		[
			[126, 64],
			[136, 92]
		],
		[
			[112, 30],
			[130, 58]
		]
	];
	const faceDots: [number, number][] = [
		[119, 86],
		[81, 86],
		[100, 96],
		[100, 118],
		[100, 142],
		[127, 104],
		[73, 104],
		[108, 64],
		[92, 64],
		[131, 90],
		[69, 90],
		[107, 132],
		[93, 132]
	];

	/* ---------- assessment: декоративная звуковая волна ---------- */
	const waveBars = Array.from({ length: 46 }, (_, i) => ({
		x: 4 + i * 5.5,
		h:
			5 +
			Math.round(23 * Math.abs(Math.sin(i * 0.9)) * (0.35 + 0.65 * Math.abs(Math.sin(i * 0.37))))
	}));

	/* ---------- strategy: изометрические слои ---------- */
	const ISO = 0.42; // сплющивание ромба (вид сверху)
	const isoTop = (cx: number, cy: number, w: number) =>
		`M ${cx - w} ${cy} L ${cx} ${cy - w * ISO} L ${cx + w} ${cy} L ${cx} ${cy + w * ISO} Z`;
	const isoSkirt = (cx: number, cy: number, w: number, t: number) =>
		`M ${cx - w} ${cy} L ${cx} ${cy + w * ISO} L ${cx + w} ${cy} L ${cx + w} ${cy + t} L ${cx} ${
			cy + w * ISO + t
		} L ${cx - w} ${cy + t} Z`;
	const strategyLayers = [
		{
			cy: 400,
			w: 430,
			t: 92,
			cls: 'fill-foreground',
			labelCls: 'fill-background',
			key: 'resources'
		},
		{
			cy: 302,
			w: 345,
			t: 72,
			cls: 'fill-muted-foreground',
			labelCls: 'fill-background',
			key: 'infra'
		}
	] as const;

	/* ---------- exec: полукруглый датчик, 70% дуги ---------- */
	const GAUGE_R = 80;
	const GAUGE_LEN = Math.PI * GAUGE_R;
	const gaugeDash = (0.7 * GAUGE_LEN).toFixed(1);
	const needleAngle = (180 - 0.7 * 180) * (Math.PI / 180); // 70% от левого конца
	const needleTip = {
		x: 100 + Math.cos(needleAngle) * 60,
		y: 100 - Math.sin(needleAngle) * 60
	};

	/* ---------- advisor: пончик 86 / 7 / 7 ---------- */
	const DONUT_R = 15.9155; // длина окружности ≈ 100
	const donutSlices = [
		{ value: 86, offset: 25, cls: 'stroke-primary' },
		{ value: 7, offset: 39, cls: 'stroke-destructive' },
		{ value: 7, offset: 32, cls: 'stroke-muted-foreground' }
	];

	/* ---------- service: октагональные предупреждения на зигзаге ---------- */
	const octagon = (cx: number, cy: number, r: number) =>
		Array.from({ length: 8 }, (_, i) => {
			const a = (Math.PI / 4) * i + Math.PI / 8;
			return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
		}).join(' ');
	const serviceBadges = [
		{ x: 205, y: 215, key: 'hidden', anchor: 'start', tx: 60 },
		{ x: 855, y: 245, key: 'doc', anchor: 'middle', tx: 855 },
		{ x: 1360, y: 240, key: 'time', anchor: 'end', tx: 1440 }
	] as const;
</script>

<figure class="space-y-5" aria-label={title}>
	{#snippet scoreValue()}
		<p class="text-3xl font-bold tracking-tight sm:text-4xl">
			{m.inf_panels_assdetail_total_value()}
		</p>
	{/snippet}

	{#if variant === 'strategy'}
		<!-- strategy.webp: три опорных слоя + выноска -->
		<div
			class="rounded-xl bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] [background-size:22px_22px] p-4 sm:p-6"
		>
			<svg
				viewBox="0 0 1080 760"
				class="block h-auto w-full"
				role="img"
				aria-label={m.inf_panels_strategy_aria()}
			>
				<!-- стрелки слева -->
				{#each [{ y: 250 }, { y: 366 }, { y: 486 }] as arrow, i (i)}
					<g class="stroke-border" fill="none" stroke-width="3">
						<line x1={i === 2 ? 20 : 120} y1={arrow.y} x2={i === 2 ? 170 : 270} y2={arrow.y} />
						<polyline
							points="{i === 2 ? 158 : 258},{arrow.y - 8} {i === 2 ? 170 : 270},{arrow.y} {i === 2
								? 158
								: 258},{arrow.y + 8}"
							fill="none"
						/>
					</g>
				{/each}
				<!-- нижний и средний слои -->
				{#each strategyLayers as layer (layer.key)}
					<path class={layer.cls} d={isoSkirt(560, layer.cy + 140, layer.w, layer.t)} />
					<path
						d={isoSkirt(560, layer.cy + 140, layer.w, layer.t)}
						fill="var(--foreground)"
						opacity="0.15"
					/>
					<path class={layer.cls} d={isoTop(560, layer.cy + 140, layer.w)} />
					<text
						class={layer.labelCls}
						x="315"
						y={layer.cy + 140 + layer.w * ISO * 0.62 + layer.t * 0.45}
						font-size="34"
						font-weight="600"
						transform="rotate(19 315 {layer.cy + 140 + layer.w * ISO * 0.62 + layer.t * 0.45})"
					>
						{layer.key === 'resources'
							? m.inf_panels_strategy_layer_resources()
							: m.inf_panels_strategy_layer_infra()}
					</text>
				{/each}
				<!-- верхний белый слой с синим кантом -->
				<path class="fill-muted-foreground" d={isoSkirt(560, 350, 255, 55)} />
				<path class="fill-background" d={isoTop(560, 350, 255)} />
				<path
					d={isoTop(560, 346, 218)}
					fill="none"
					class="stroke-primary"
					stroke-width="7"
					stroke-linejoin="round"
				/>
				<rect
					x="570"
					y="18"
					width="420"
					height="112"
					rx="10"
					class="fill-card"
					stroke="var(--border)"
					stroke-width="2"
				/>
				<text
					x="780"
					y="78"
					text-anchor="middle"
					dominant-baseline="middle"
					class="fill-foreground"
					font-size="30"
					font-weight="600"
				>
					{m.inf_panels_strategy_layer_tech()}
				</text>
			</svg>
		</div>
	{:else if variant === 'assessment'}
		<!-- assessment.webp: окно анализа с сеткой лица и показателями -->
		<div class="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
			<div class="flex items-center gap-1.5 border-b border-border px-4 py-3" aria-hidden="true">
				<span class="size-2.5 rounded-full bg-muted-foreground/30"></span>
				<span class="size-2.5 rounded-full bg-muted-foreground/30"></span>
				<span class="size-2.5 rounded-full bg-muted-foreground/30"></span>
			</div>
			<div class="grid gap-5 bg-muted/50 p-4 sm:p-6 md:grid-cols-2">
				<div class="flex min-w-0 flex-col items-center justify-between gap-4">
					<svg
						viewBox="0 0 200 230"
						class="h-56 w-auto text-muted-foreground sm:h-64"
						role="img"
						aria-label={m.inf_panels_assessment_aria()}
					>
						<!-- уголки кадра -->
						<g class="stroke-current" stroke-width="2" fill="none">
							<path d="M28 32 v-14 h14 M172 32 v-14 h-14 M28 198 v14 h14 M172 198 v14 h-14" />
							<path d="M2 92 h12 M186 92 h12" />
						</g>
						<!-- сетка лица -->
						<g class="stroke-current" stroke-width="1.2" fill="none" opacity="0.85">
							{#each faceHalf as line, i (i)}
								<polyline points={line.map((p) => p.join(',')).join(' ')} />
								<polyline points={line.map(([x, y]) => `${200 - x},${y}`).join(' ')} />
							{/each}
							<line x1="100" y1="30" x2="100" y2="150" />
							<path d="M84 166 C60 172 38 184 26 202 M116 166 C140 172 162 184 174 202" />
							<line x1="26" y1="202" x2="174" y2="202" />
						</g>
						<g class="fill-current">
							{#each faceDots as dot, i (i)}<circle cx={dot[0]} cy={dot[1]} r="2.6" />{/each}
						</g>
					</svg>
					<svg
						viewBox="0 0 260 60"
						class="h-14 w-full max-w-72"
						role="img"
						aria-label={m.inf_panels_assessment_wave_aria()}
					>
						{#each waveBars as bar, i (i)}
							<rect
								x={bar.x}
								y={30 - bar.h}
								width="3"
								height={bar.h * 2}
								rx="1.5"
								class={i % 4 === 0 ? 'fill-foreground' : 'fill-muted-foreground'}
							/>
						{/each}
					</svg>
				</div>
				<div class="flex min-w-0 flex-col justify-center gap-4">
					<div class="rounded-xl border border-border bg-card p-4 shadow-sm">
						<p class="text-sm sm:text-base">
							{m.inf_panels_assessment_engagement_label()}
							<span class="font-bold">{m.inf_panels_assessment_engagement_value()}</span>
						</p>
						<div class="mt-3 h-2.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
							<div
								class="h-full rounded-full bg-gradient-to-r from-foreground to-muted-foreground"
								style="width: 87%"
							></div>
						</div>
					</div>
					<div class="rounded-xl border border-border bg-card p-4 shadow-sm">
						<p class="text-sm sm:text-base">
							{m.inf_panels_assessment_stress_label()}
							<span class="font-bold">{m.inf_panels_assessment_stress_value()}</span>
						</p>
						<div class="mt-3 h-2.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
							<div
								class="h-full rounded-full bg-gradient-to-r from-muted-foreground to-muted-foreground"
								style="width: 12%"
							></div>
						</div>
					</div>
					<div class="rounded-xl border border-border bg-card p-4 shadow-sm">
						<p class="text-sm sm:text-base">
							{m.inf_panels_assessment_emotion_label()}
							<span class="font-bold">{m.inf_panels_assessment_emotion_value()}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	{:else if variant === 'assessmentDetail'}
		<!-- assessmentDetail.webp: развернутый слайд оценки кандидата -->
		<div class="grid items-start gap-6 lg:grid-cols-2">
			<div class="space-y-4">
				<p class="font-mono text-xs tracking-widest text-muted-foreground uppercase">
					{m.inf_panels_assdetail_eyebrow()}
				</p>
				<p class="text-2xl font-bold tracking-tight sm:text-3xl">
					{m.inf_panels_assdetail_title()}
				</p>
				<p class="text-base text-muted-foreground sm:text-lg">
					{m.inf_panels_assdetail_subtitle()}
				</p>
				<div class="rounded-xl border border-border bg-card shadow-sm">
					<div class="flex items-center gap-2.5 border-b border-border px-5 py-4">
						<span class="size-3 shrink-0 rounded-full bg-destructive" aria-hidden="true"></span>
						<p class="text-sm font-semibold sm:text-base">
							{m.inf_panels_assdetail_record_label()}
						</p>
					</div>
					<blockquote class="px-5 py-5 text-base leading-relaxed sm:text-lg">
						{m.inf_panels_assdetail_question()}
					</blockquote>
				</div>
			</div>
			<div class="space-y-4">
				<div class="rounded-xl border border-border bg-card p-5 shadow-sm">
					<div class="flex flex-wrap items-center justify-between gap-3">
						<div class="space-y-2">
							<span
								class="inline-block rounded-full bg-muted-foreground/10 px-3 py-1 text-xs font-medium text-muted-foreground"
								>{m.inf_panels_review_badge()}</span
							>
							<p class="text-lg font-semibold">{m.inf_panels_assdetail_total_label()}</p>
						</div>
						{@render scoreValue()}
					</div>
				</div>
				<div class="space-y-5 rounded-xl border border-border bg-card p-5 shadow-sm">
					{#each [{ label: m.inf_panels_assdetail_iq_label(), badge: m.inf_panels_retry_badge(), badgeCls: 'bg-primary/10 text-primary', fill: 'bg-primary', percent: m.inf_panels_assdetail_iq_percent(), value: m.inf_panels_assdetail_iq_value() }, { label: m.inf_panels_assdetail_eq_label(), badge: m.inf_panels_review_badge(), badgeCls: 'bg-primary/10 text-primary', fill: 'bg-primary', percent: m.inf_panels_assdetail_eq_percent(), value: m.inf_panels_assdetail_eq_value() }, { label: m.inf_panels_assdetail_sq_label(), badge: m.inf_panels_review_badge(), badgeCls: 'bg-primary/10 text-primary', fill: 'bg-primary', percent: m.inf_panels_assdetail_sq_percent(), value: m.inf_panels_assdetail_sq_value() }] as row (row.label)}
						<div>
							<div class="flex flex-wrap items-center justify-between gap-2">
								<p class="text-sm font-medium sm:text-base">{row.label}</p>
								<span class="rounded-full px-3 py-0.5 text-xs font-medium {row.badgeCls}"
									>{row.badge}</span
								>
							</div>
							<div class="mt-2 h-2.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
								<div
									class="h-full rounded-full {row.fill}"
									style="width: {Number.parseInt(row.percent, 10)}%"
								></div>
							</div>
							<div class="mt-1.5 flex flex-wrap items-baseline justify-between gap-2">
								<p class="text-sm text-muted-foreground">{row.percent}</p>
								<p class="text-xl font-bold">{row.value}</p>
							</div>
						</div>
					{/each}
				</div>
				<div class="flex items-start gap-2.5 rounded-lg bg-muted p-4">
					<InfoIcon class="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
					<p class="text-sm leading-relaxed text-muted-foreground">
						{m.inf_panels_assdetail_algo_note()}
					</p>
				</div>
			</div>
		</div>
	{:else if variant === 'advisor'}
		<!-- advisor.webp: обзорный дашборд руководителя -->
		<div class="space-y-4">
			<div class="space-y-1">
				<p class="text-xl font-bold tracking-tight sm:text-2xl">{m.inf_panels_advisor_title()}</p>
				<p class="text-sm text-muted-foreground sm:text-base">{m.inf_panels_advisor_subtitle()}</p>
			</div>
			<div class="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
				<div class="overflow-hidden rounded-xl border border-border bg-card p-4 shadow-sm">
					<p class="text-xs text-muted-foreground sm:text-sm">
						{m.inf_panels_advisor_docs_all_label()}
					</p>
					<p class="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
						{m.inf_panels_advisor_docs_all_value()}
					</p>
				</div>
				<div
					class="overflow-hidden rounded-xl border border-b-4 border-border border-b-primary bg-card p-4 shadow-sm"
				>
					<p class="text-xs text-muted-foreground sm:text-sm">
						{m.inf_panels_advisor_ontime_label()}
					</p>
					<p class="mt-1 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						{m.inf_panels_advisor_ontime_value()}
						<span class="text-sm font-medium sm:text-base"
							>{m.inf_panels_advisor_ontime_share()}</span
						>
					</p>
				</div>
				<div
					class="overflow-hidden rounded-xl border border-b-4 border-border border-b-destructive bg-card p-4 shadow-sm"
				>
					<div class="flex items-center justify-between gap-2">
						<p class="text-xs text-muted-foreground sm:text-sm">
							{m.inf_panels_advisor_overdue_label()}
						</p>
						<FlameIcon class="size-4 shrink-0 text-destructive" aria-hidden="true" />
					</div>
					<p class="mt-1 text-2xl font-bold tracking-tight text-destructive sm:text-3xl">
						{m.inf_panels_advisor_overdue_value()}
						<span class="text-sm font-medium sm:text-base"
							>{m.inf_panels_advisor_overdue_share()}</span
						>
					</p>
				</div>
				<div
					class="overflow-hidden rounded-xl border border-b-4 border-border border-b-muted-foreground bg-card p-4 shadow-sm"
				>
					<div class="flex items-center justify-between gap-2">
						<p class="text-xs text-muted-foreground sm:text-sm">
							{m.inf_panels_advisor_urgent_label()}
						</p>
						<TriangleAlertIcon class="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
					</div>
					<p class="mt-1 text-2xl font-bold tracking-tight text-muted-foreground sm:text-3xl">
						{m.inf_panels_advisor_urgent_value()}
						<span class="text-sm font-medium sm:text-base"
							>{m.inf_panels_advisor_urgent_share()}</span
						>
					</p>
				</div>
			</div>
			<div class="grid gap-3 sm:gap-4 lg:grid-cols-2">
				<div class="rounded-xl border border-border bg-card p-4 shadow-sm">
					<p class="font-semibold">{m.inf_panels_advisor_depts()}</p>
				</div>
				<div class="rounded-xl border border-border bg-card p-4 shadow-sm">
					<p class="font-semibold">{m.inf_panels_advisor_execs()}</p>
				</div>
			</div>
			<div class="grid gap-3 sm:gap-4 lg:grid-cols-2">
				<div class="rounded-xl border border-border bg-card p-4 shadow-sm">
					<p class="mb-3 font-semibold">{m.inf_panels_advisor_flow_title()}</p>
					<svg
						viewBox="0 0 400 170"
						class="h-40 w-full"
						role="img"
						aria-label={m.inf_panels_advisor_flow_aria()}
					>
						<defs>
							<linearGradient id={`${id}-flow-fill`} x1="0" y1="0" x2="0" y2="1">
								<stop offset="0%" stop-color="var(--primary)" stop-opacity="0.45" />
								<stop offset="100%" stop-color="var(--primary)" stop-opacity="0" />
							</linearGradient>
						</defs>
						<path
							d="M0 158 C70 152 110 118 160 88 C205 61 235 44 268 62 C305 82 330 138 400 148 L400 170 L0 170 Z"
							fill={`url(#${id}-flow-fill)`}
						/>
						<path
							d="M0 158 C70 152 110 118 160 88 C205 61 235 44 268 62 C305 82 330 138 400 148"
							fill="none"
							class="stroke-primary"
							stroke-width="2.5"
						/>
					</svg>
				</div>
				<div class="rounded-xl border border-border bg-card p-4 shadow-sm">
					<p class="mb-3 font-semibold">{m.inf_panels_advisor_status_title()}</p>
					<svg
						viewBox="0 0 120 120"
						class="mx-auto h-52 w-52"
						role="img"
						aria-label={m.inf_panels_advisor_status_aria()}
					>
						<g transform="rotate(-90 60 60)">
							{#each donutSlices as slice (slice.offset)}
								<circle
									cx="60"
									cy="60"
									r={DONUT_R}
									fill="none"
									stroke-width="12"
									pathLength="100"
									class={slice.cls}
									stroke-dasharray="{slice.value} {100 - slice.value}"
									stroke-dashoffset={slice.offset}
								/>
							{/each}
						</g>
						<text
							x="60"
							y="57"
							text-anchor="middle"
							font-size="17"
							font-weight="700"
							class="fill-primary"
						>
							{m.inf_panels_advisor_status_center_value()}
						</text>
					</svg>
					<p class="text-center text-sm text-muted-foreground">
						{m.inf_panels_advisor_status_center_label()}
					</p>
				</div>
			</div>
		</div>
	{:else if variant === 'exec'}
		<!-- exec.webp: аналитика руководителя + мессенджер с роботом -->
		<div class="space-y-4">
			<div class="grid gap-4 lg:grid-cols-2">
				<div class="overflow-hidden rounded-xl border border-border bg-card shadow-md">
					<div class="h-8 bg-muted" aria-hidden="true"></div>
					<div class="space-y-4 p-4 sm:p-5">
						<p class="text-lg font-semibold">{m.inf_panels_exec_signal_title()}</p>
						<div class="rounded-lg border border-border bg-background p-4">
							<p class="mb-3 text-sm text-muted-foreground">{m.inf_panels_exec_eff_title()}</p>
							<div class="space-y-3">
								{#each [{ label: m.inf_panels_exec_marketing(), value: m.inf_panels_exec_marketing_value(), fill: 'bg-foreground' }, { label: m.inf_panels_exec_sales(), value: m.inf_panels_exec_sales_value(), fill: 'bg-foreground' }, { label: m.inf_panels_exec_dev(), value: m.inf_panels_exec_dev_value(), fill: 'bg-muted-foreground' }] as bar (bar.label)}
									<div>
										<div class="flex flex-wrap items-baseline justify-between gap-3 text-sm">
											<span>{bar.label}</span>
											<span class="font-bold">{bar.value}</span>
										</div>
										<div class="mt-1 h-3 rounded-sm bg-muted" aria-hidden="true">
											<div class="h-full rounded-sm {bar.fill}" style="width: {bar.value}"></div>
										</div>
									</div>
								{/each}
							</div>
						</div>
						<div class="rounded-lg border border-border bg-background p-4">
							<p class="mb-2 text-sm text-muted-foreground">{m.inf_panels_exec_load_title()}</p>
							<svg viewBox="0 0 200 112" class="mx-auto h-32 w-auto" aria-hidden="true">
								<defs>
									<linearGradient id={`${id}-gauge-arc`} x1="0" y1="0" x2="1" y2="0">
										<stop offset="0%" stop-color="var(--foreground)" />
										<stop offset="100%" stop-color="var(--muted-foreground)" />
									</linearGradient>
								</defs>
								<path
									d="M 20 100 A {GAUGE_R} {GAUGE_R} 0 0 1 180 100"
									fill="none"
									class="stroke-muted"
									stroke-width="14"
									stroke-linecap="round"
								/>
								<path
									d="M 20 100 A {GAUGE_R} {GAUGE_R} 0 0 1 180 100"
									fill="none"
									stroke={`url(#${id}-gauge-arc)`}
									stroke-width="14"
									stroke-linecap="round"
									stroke-dasharray="{gaugeDash} {GAUGE_LEN}"
								/>
								<line
									x1="100"
									y1="100"
									x2={needleTip.x}
									y2={needleTip.y}
									class="stroke-border"
									stroke-width="4"
									stroke-linecap="round"
								/>
								<circle cx="100" cy="100" r="6" class="fill-foreground" />
							</svg>
							<p class="text-right text-sm text-muted-foreground">
								{m.inf_panels_exec_load_optimal()}
							</p>
						</div>
					</div>
				</div>
				<div class="overflow-hidden rounded-xl border border-border bg-card shadow-md">
					<div class="h-8 bg-muted" aria-hidden="true"></div>
					<div class="flex h-[calc(100%-2rem)] flex-col gap-4 p-4 sm:p-5">
						<p class="text-lg font-semibold">{m.inf_panels_exec_coord_title()}</p>
						<div class="flex items-start gap-2.5">
							<span
								class="flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-background"
								aria-hidden="true"
							>
								<BotIcon class="size-5 text-muted-foreground" />
							</span>
							<div
								class="max-w-72 rounded-2xl rounded-tl-sm border border-border bg-background p-3"
							>
								<p class="text-xs font-bold">{m.inf_panels_exec_robot_name()}</p>
								<p class="mt-1 text-sm leading-relaxed">{m.inf_panels_exec_robot_msg()}</p>
							</div>
						</div>
						<div class="flex items-start justify-end gap-2.5">
							<div
								class="max-w-56 rounded-2xl rounded-tr-sm border border-border bg-secondary p-3 text-right"
							>
								<p class="text-xs font-bold">{m.inf_panels_exec_human_name()}</p>
								<p class="mt-1 text-sm leading-relaxed">{m.inf_panels_exec_human_msg()}</p>
							</div>
							<span
								class="flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-background"
								aria-hidden="true"
							>
								<UserIcon class="size-5 text-muted-foreground" />
							</span>
						</div>
						<div
							class="mt-auto flex items-center justify-between gap-3 rounded-full border border-border bg-background px-4 py-2 text-muted-foreground"
							aria-hidden="true"
						>
							<PlusIcon class="size-4" />
							<FileTextIcon class="size-4" />
							<span class="min-w-4 flex-1"></span>
							<SmileIcon class="size-4" />
							<MicIcon class="size-4" />
						</div>
					</div>
				</div>
			</div>
			<div class="rounded-xl bg-muted p-4">
				<p class="text-sm leading-relaxed text-muted-foreground">{m.inf_panels_exec_gap_note()}</p>
			</div>
		</div>
	{:else if variant === 'service'}
		<!-- service.webp: путь услуги с барьерами → проактивный формат -->
		<div class="space-y-2">
			<!-- мобильная версия: вертикальная последовательность -->
			<ul class="grid gap-3 sm:grid-cols-3">
				{#each [m.inf_panels_service_barrier_hidden(), m.inf_panels_service_barrier_doc(), m.inf_panels_service_barrier_time()] as barrier, i (i)}
					<li class="flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm">
						<span
							class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-destructive text-primary-foreground"
							aria-hidden="true"
						>
							<TriangleAlertIcon class="size-5" />
						</span>
						<span class="text-sm font-medium">{barrier}</span>
					</li>
				{/each}
			</ul>
			<svg
				viewBox="0 0 1716 300"
				class="hidden w-full sm:block"
				role="img"
				aria-label={m.inf_panels_service_aria_top()}
			>
				<path
					d="M0 240 L310 160 L520 232 L610 42 L700 112 L830 236 L1010 230 L1120 92 L1330 246 L1716 232"
					fill="none"
					class="stroke-border"
					stroke-width="24"
					stroke-linejoin="round"
				/>
				<path
					d="M0 240 L310 160 L520 232 L610 42 L700 112 L830 236 L1010 230 L1120 92 L1330 246 L1690 233"
					fill="none"
					class="stroke-background"
					stroke-width="16"
					stroke-linejoin="round"
				/>
				<polyline
					points="1680,214 1716,232 1680,250"
					fill="none"
					class="stroke-border"
					stroke-width="6"
					stroke-linejoin="round"
				/>
				{#each serviceBadges as badge (badge.key)}
					<polygon
						points={octagon(badge.x, badge.y, 46)}
						class="fill-destructive stroke-destructive"
						stroke-width="3"
					/>
					<g class="stroke-background" stroke-width="5" fill="none" stroke-linejoin="round">
						<path
							d="M {badge.x - 16} {badge.y + 13} L {badge.x} {badge.y - 17} L {badge.x +
								16} {badge.y + 13} Z"
						/>
						<line x1={badge.x} y1={badge.y - 6} x2={badge.x} y2={badge.y + 3} />
						<circle cx={badge.x} cy={badge.y + 9} r="0.5" fill="var(--background)" />
					</g>
				{/each}
			</svg>
			<!-- проактивный формат: прямая стрелка к флагу -->
			<div class="flex items-end gap-3 pt-2 sm:pt-4">
				<div class="relative min-w-0 flex-1 pb-1">
					<span class="absolute inset-x-0 -top-1 hidden text-center text-base font-bold sm:block"
						>{m.inf_panels_service_proactive()}</span
					>
					<div
						class="flex items-center"
						role="img"
						aria-label={m.inf_panels_service_proactive_aria()}
					>
						<div class="h-4 flex-1 rounded-l-full bg-foreground" aria-hidden="true"></div>
						<div
							class="h-0 w-0 border-y-[14px] border-l-[26px] border-y-transparent border-l-foreground"
							aria-hidden="true"
						></div>
					</div>
					<span class="block pt-1 text-sm font-bold sm:hidden"
						>{m.inf_panels_service_proactive()}</span
					>
				</div>
				<FlagIcon class="mb-1 size-9 shrink-0 text-foreground sm:size-11" aria-hidden="true" />
			</div>
			<p class="text-xs leading-relaxed text-muted-foreground">{m.inf_panels_service_gap_note()}</p>
		</div>
	{/if}

	<figcaption class="text-xs text-muted-foreground">{m.inf_panels_caption()}</figcaption>
</figure>
