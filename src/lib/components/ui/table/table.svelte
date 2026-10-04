<script lang="ts">
	import { cn, type WithElementRef } from '#lib/utils.js';
	import type { HTMLTableAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		scrollLabel,
		...restProps
	}: WithElementRef<HTMLTableAttributes> & { scrollLabel?: string } = $props();
</script>

<!-- Named horizontal scroll regions intentionally receive keyboard focus in Safari. -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div
	data-slot="table-container"
	role={scrollLabel ? 'region' : undefined}
	aria-label={scrollLabel}
	tabindex={scrollLabel ? 0 : undefined}
	class="relative w-full overflow-x-auto focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
>
	<table
		bind:this={ref}
		data-slot="table"
		class={cn('w-full caption-bottom text-sm', className)}
		{...restProps}
	>
		{@render children?.()}
	</table>
</div>
