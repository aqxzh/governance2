<svelte:options namespace="svg" />

<script lang="ts">
	type Shape = 'circle' | 'box' | 'diamond' | 'trapezoid' | 'pill' | 'arch';
	type Icon = 'person' | 'building' | 'document';
	let { state, title }: { state: 'before' | 'after'; title: string } = $props();
	const uid = $props.id();
	// Source silhouettes are illustrative, not measured organisational data.
	const nodes: { x: number; y: number; shape: Shape; angle?: number }[] = [
		{ x: 148, y: 168, shape: 'trapezoid', angle: 12 },
		{ x: 195, y: 136, shape: 'circle' },
		{ x: 219, y: 198, shape: 'box' },
		{ x: 248, y: 216, shape: 'circle' },
		{ x: 310, y: 181, shape: 'diamond', angle: 10 },
		{ x: 384, y: 151, shape: 'box', angle: -28 },
		{ x: 553, y: 123, shape: 'circle' },
		{ x: 561, y: 180, shape: 'diamond' },
		{ x: 628, y: 204, shape: 'box' },
		{ x: 581, y: 252, shape: 'circle' },
		{ x: 659, y: 271, shape: 'circle' },
		{ x: 667, y: 360, shape: 'trapezoid', angle: -8 },
		{ x: 566, y: 382, shape: 'arch' },
		{ x: 626, y: 439, shape: 'box' },
		{ x: 460, y: 461, shape: 'circle' },
		{ x: 352, y: 485, shape: 'trapezoid' },
		{ x: 204, y: 460, shape: 'pill', angle: -28 },
		{ x: 147, y: 421, shape: 'circle' },
		{ x: 176, y: 359, shape: 'box' },
		{ x: 154, y: 273, shape: 'trapezoid' },
		{ x: 42, y: 350, shape: 'circle' },
		{ x: 186, y: 236, shape: 'circle' },
		{ x: 265, y: 253, shape: 'circle' },
		{ x: 216, y: 310, shape: 'circle' },
		{ x: 269, y: 348, shape: 'circle' },
		{ x: 309, y: 392, shape: 'trapezoid', angle: -7 },
		{ x: 482, y: 355, shape: 'box', angle: 6 },
		{ x: 511, y: 364, shape: 'circle' },
		{ x: 415, y: 385, shape: 'circle' },
		{ x: 388, y: 329, shape: 'box', angle: -25 },
		{ x: 454, y: 306, shape: 'diamond', angle: -12 }
	];
	// Crossings have no junction dots; exact endpoints obscured in the raster are schematic.
	const links = [
		'M42 350 C12 230 91 191 186 236 S366 465 553 123',
		'M148 168 C26 16 40 274 154 273 S586 96 628 204',
		'M195 136 C287 8 287 255 310 181 S663 63 659 271',
		'M219 198 C179 75 425 37 553 123 S356 390 176 359',
		'M248 216 C460 1 336 533 460 461 S731 274 667 360',
		'M310 181 C437 6 481 33 511 142 S385 435 415 385',
		'M384 151 C183 48 675 57 628 204 S414 349 265 253',
		'M553 123 C752 5 752 224 659 271 S335 359 216 310',
		'M561 180 C716 34 745 288 667 360 S197 81 186 236',
		'M628 204 C648 342 734 415 696 464 S520 567 460 461',
		'M581 252 C416 210 489 503 352 485 S50 552 147 421',
		'M659 271 C643 401 690 476 511 364 S263 376 269 348',
		'M667 360 C751 346 770 272 708 226 S413 104 248 216',
		'M566 382 C377 178 355 271 388 329 S284 441 204 460',
		'M626 439 C580 322 452 386 460 461 S263 559 204 460',
		'M460 461 C254 551 393 133 384 151 S194 457 176 359',
		'M352 485 C277 385 421 429 309 392 S270 451 269 348',
		'M204 460 C102 457 60 206 154 273 S585 432 626 439',
		'M147 421 C39 384 1 314 42 350 S312 494 482 355',
		'M176 359 C108 265 288 249 216 310 S467 221 454 306',
		'M154 273 C36 317 61 185 148 168 S429 307 511 364',
		'M186 236 C140 413 366 199 265 253 S644 321 566 382',
		'M265 253 C379 84 451 211 310 181 S243 445 309 392',
		'M216 310 C324 255 393 366 415 385 S737 421 581 252',
		'M269 348 C215 508 519 405 482 355 S96 309 42 350',
		'M309 392 C415 227 534 218 454 306 S641 393 667 360',
		'M482 355 C483 83 340 302 388 329 S328 183 248 216',
		'M511 364 C538 451 627 266 581 252 S599 154 561 180',
		'M415 385 C354 287 583 371 566 382 S492 484 460 461',
		'M388 329 C148 90 136 521 204 460',
		'M454 306 C284 222 701 479 626 439'
	];
	const highlights = [
		'M195 136 C281 80 310 181 310 181',
		'M265 253 C321 112 289 361 216 310',
		'M154 273 C15 411 85 474 204 460',
		'M561 180 C395 137 392 219 454 306',
		'M581 252 C526 505 372 303 415 385 S517 523 626 532 C665 549 627 451 626 439',
		'M269 348 C441 516 501 302 482 355',
		'M265 253 C375 290 412 360 511 364 S627 368 626 439'
	];
	// Preserve the source tree: leader, staff, 2 managers, 6 organisations and 4/3/3/4/4/3 leaves.
	const organisations = [
		{ x: 42, leaves: ['person', 'building', 'document', 'document'] },
		{ x: 160, leaves: ['person', 'building', 'document'] },
		{ x: 278, leaves: ['person', 'building', 'document'] },
		{ x: 402, leaves: ['person', 'building', 'document', 'document'] },
		{ x: 520, leaves: ['person', 'building', 'document', 'document'] },
		{ x: 638, leaves: ['person', 'building', 'document'] }
	] satisfies { x: number; leaves: Icon[] }[];
	const leafYs = [350, 397, 444, 491];
	const reportingLinks = [
		'M388 114 V174 M388 152 H426',
		'M206 194 V174 H562 V194',
		'M206 240 V260 M86 292 V260 H322 V292 M204 260 V292',
		'M562 240 V260 M446 292 V260 H682 V292 M564 260 V292'
	];
</script>

{#snippet icon(kind: Icon)}
	<g
		fill="none"
		stroke="currentColor"
		stroke-width="1.8"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		{#if kind === 'person'}<circle cx="10" cy="5" r="3" /><path
				d="M4 20v-4a6 6 0 0 1 12 0v4M1 20h18M10 13v7"
			/>
		{:else if kind === 'building'}<path
				d="M1 20h18M3 20V7h14v13M1 7l9-5 9 5M8 20v-5h4v5M6 10h1m6 0h1M6 13h1m6 0h1"
			/>
		{:else}<path d="M4 2h9l4 4v14H4zM13 2v5h4M7 10h7M7 13h7M7 16h5" />{/if}
	</g>
{/snippet}
{#snippet card(
	x: number,
	y: number,
	width: number,
	height: number,
	kind: Icon,
	tone: 'leader' | 'manager' | 'organisation' | 'leaf'
)}
	<g transform={`translate(${x} ${y})`}>
		<rect
			{width}
			{height}
			rx="4"
			class={tone === 'leader'
				? 'fill-primary stroke-primary'
				: tone === 'manager'
					? 'fill-primary/15 stroke-primary'
					: tone === 'organisation'
						? 'fill-muted stroke-muted-foreground'
						: 'fill-card stroke-muted-foreground'}
			stroke-width="2.4"
		/>
		<g
			class={tone === 'leader'
				? 'text-primary-foreground'
				: tone === 'manager'
					? 'text-primary'
					: 'text-muted-foreground'}
		>
			<g transform={`translate(9 ${(height - 22) / 2})`}>{@render icon(kind)}</g>
			<path
				d={`M36 ${height / 2} H${width - 12}`}
				fill="none"
				stroke="currentColor"
				stroke-width="2.8"
				stroke-linecap="round"
			/>
		</g>
	</g>
{/snippet}

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 760 570"
	width="760"
	height="570"
	class="block h-auto w-full"
	role="img"
	aria-labelledby={`${uid}-title`}
	focusable="false"
	data-system-diagram={state}
>
	<title id={`${uid}-title`}>{title}</title>
	<g aria-hidden="true">
		{#if state === 'before'}
			<g
				class="text-muted-foreground"
				fill="none"
				stroke="currentColor"
				stroke-width="2.4"
				stroke-linecap="round"
				stroke-linejoin="round"
				opacity="0.65"
				>{#each links as d (d)}<path {d} />{/each}</g
			>
			<g
				class="text-primary"
				fill="none"
				stroke="currentColor"
				stroke-width="2.4"
				stroke-linecap="round"
				opacity="0.7"
				>{#each highlights as d (d)}<path {d} />{/each}</g
			>
			{#each nodes as node, i (i)}
				<g transform={`translate(${node.x} ${node.y}) rotate(${node.angle ?? 0})`}>
					<g class="fill-muted stroke-muted-foreground" stroke-width="2.4" stroke-linejoin="round">
						{#if node.shape === 'circle'}<circle r="16" />
						{:else if node.shape === 'diamond'}<path d="M0-22 20 0 0 22-20 0Z" />
						{:else if node.shape === 'trapezoid'}<path d="M-19-14H16L23 14H-23Z" />
						{:else if node.shape === 'pill'}<rect x="-14" y="-36" width="28" height="72" rx="14" />
						{:else if node.shape === 'arch'}<path d="M-20 10a20 20 0 0 1 40 0Z" />
						{:else}<rect x="-23" y="-13" width="46" height="26" rx="3" />{/if}
					</g>
					<g
						class="text-muted-foreground"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					>
						{#if node.shape === 'circle' || node.shape === 'diamond'}<path d="M-5 0H5" />
						{:else if node.shape === 'arch'}<path d="M-7 4H7" />
						{:else if node.shape === 'pill'}<circle cy="-21" r="4" /><path
								d="M-6-7H6M-6 2H6M-6 11H3"
							/>
						{:else}<path d="M-10-3H10M-10 4H4" />{/if}
					</g>
				</g>
			{/each}
		{:else}
			<g
				class="text-muted-foreground"
				fill="none"
				stroke="currentColor"
				stroke-width="2.4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				{#each reportingLinks as d (d)}<path {d} />{/each}
				{#each organisations as org (org.x)}
					<path d={`M${org.x + 14} 332 V${leafYs[org.leaves.length - 1] + 16}`} />
					{#each org.leaves as kind, i (`${kind}-${i}`)}<path
							d={`M${org.x + 14} ${leafYs[i] + 16} H${org.x + 28}`}
						/>{/each}
				{/each}
			</g>
			{@render card(332, 68, 112, 46, 'person', 'leader')}
			{@render card(426, 132, 112, 40, 'person', 'leaf')}
			{@render card(154, 194, 104, 46, 'person', 'manager')}
			{@render card(510, 194, 104, 46, 'person', 'manager')}
			{#each organisations as org (org.x)}
				{@render card(org.x, 292, 88, 40, 'building', 'organisation')}
				{#each org.leaves as kind, i (i)}{@render card(
						org.x + 28,
						leafYs[i],
						76,
						32,
						kind,
						'leaf'
					)}{/each}
			{/each}
		{/if}
	</g>
</svg>
