<script lang="ts">
	import { plans } from '$lib/data';
	import { WA_LINK } from '$lib/seo/site';
	import Icon from '$lib/Icon.svelte';

	let {
		highlight = '',
		ai = false
	}: {
		/** Nombre de plan a destacar visualmente (además del featured de data). */
		highlight?: string;
		/** Usa el botón verde-IA en lugar del ámbar. */
		ai?: boolean;
	} = $props();

	const btn = $derived(ai ? 'btn-ai' : 'btn-accent');
</script>

<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
	{#each plans as plan}
		<div
			class="glass-card flex flex-col p-8"
			class:border-accent={plan.featured || plan.name === highlight}
			class:border-2={plan.featured || plan.name === highlight}
		>
			{#if plan.badge}
				<div class="mb-4 inline-flex w-fit bg-accent px-3 py-1 text-xs font-bold text-primary">
					{plan.badge}
				</div>
			{/if}
			<h3 class="text-lg font-bold text-ink">{plan.name}</h3>
			<p class="mt-2 text-sm text-muted">{plan.headline}</p>
			<div class="mt-6">
				<p class="text-3xl font-bold text-accent">{plan.price}</p>
				<p class="mt-1 text-xs text-muted">{plan.priceNote}</p>
			</div>
			<ul class="mt-6 flex-grow space-y-3">
				{#each plan.features as feature}
					<li class="flex gap-3 text-sm text-ink">
						<Icon name="check" class="h-5 w-5 shrink-0 text-accentAI" />
						<span>{feature}</span>
					</li>
				{/each}
			</ul>
			<a href={WA_LINK} target="_blank" rel="noopener noreferrer" class="{btn} mt-8 w-full justify-center">
				{plan.cta}
			</a>
		</div>
	{/each}
</div>
