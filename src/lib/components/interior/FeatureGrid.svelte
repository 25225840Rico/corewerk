<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';

	interface Feature {
		title: string;
		desc?: string;
		icon?: string;
	}

	let {
		items = [],
		cols = 3,
		ai = false
	}: {
		items?: Feature[];
		cols?: 2 | 3 | 4;
		ai?: boolean;
	} = $props();

	const colClass: Record<number, string> = {
		2: 'sm:grid-cols-2',
		3: 'sm:grid-cols-2 lg:grid-cols-3',
		4: 'sm:grid-cols-2 lg:grid-cols-4'
	};
	const card = $derived(ai ? 'glass-card-ai' : 'glass-card');
	const accentText = $derived(ai ? 'text-accentAI' : 'text-accent');
</script>

<div class="grid grid-cols-1 gap-4 {colClass[cols]}">
	{#each items as item, i}
		<div class="{card} reveal flex flex-col p-6" use:reveal style="transition-delay: {i * 70}ms">
			{#if item.icon}
				<span class="mb-4 inline-flex {accentText}">
					<Icon name={item.icon} class="h-7 w-7" />
				</span>
			{/if}
			<h3 class="text-base font-semibold text-ink">{item.title}</h3>
			{#if item.desc}
				<p class="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
			{/if}
		</div>
	{/each}
</div>
