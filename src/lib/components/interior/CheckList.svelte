<script lang="ts">
	import Icon from '$lib/Icon.svelte';

	let {
		items = [],
		cols = 1,
		ai = false
	}: {
		items?: string[];
		cols?: 1 | 2;
		ai?: boolean;
	} = $props();

	const grid = $derived(cols === 2 ? 'grid gap-3 sm:grid-cols-2' : 'space-y-3');
	const accentText = $derived(ai ? 'text-accentAI' : 'text-accent');
</script>

<ul class={grid}>
	{#each items as item}
		<li class="flex gap-3 text-sm text-ink leading-relaxed">
			<Icon name="check" class="mt-0.5 h-5 w-5 shrink-0 {accentText}" />
			<span>{item}</span>
		</li>
	{/each}
</ul>
