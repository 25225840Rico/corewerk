<script lang="ts">
	import { processSteps } from '$lib/data';

	interface Step {
		n: string;
		title: string;
		desc: string;
	}

	let {
		steps = processSteps,
		ai = false
	}: {
		steps?: Step[];
		ai?: boolean;
	} = $props();

	const accentText = $derived(ai ? 'text-accentAI' : 'text-accent');
	const card = $derived(ai ? 'glass-card-ai' : 'glass-card');
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
	{#each steps as step}
		<div class="{card} flex flex-col p-6">
			<span class="text-3xl font-black {accentText}">{step.n}</span>
			<h3 class="mt-4 text-base font-semibold text-ink">{step.title}</h3>
			<p class="mt-2 text-sm text-muted leading-relaxed">{step.desc}</p>
		</div>
	{/each}
</div>
