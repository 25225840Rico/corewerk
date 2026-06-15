<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from '$lib/Icon.svelte';

	interface QA {
		q: string;
		a: string;
	}

	let {
		items = []
	}: {
		items?: QA[];
	} = $props();

	let openIndex = $state<number | null>(null);

	function toggle(i: number) {
		openIndex = openIndex === i ? null : i;
	}
</script>

<div class="mx-auto max-w-3xl space-y-1">
	{#each items as faq, i}
		<div class="border border-white/10 bg-white/[0.04] transition-colors hover:border-white/20">
			<button
				id={`faqb-${i}`}
				type="button"
				class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-150 hover:bg-white/5"
				aria-expanded={openIndex === i}
				aria-controls={`faqp-${i}`}
				onclick={() => toggle(i)}
			>
				<span class="text-base font-normal leading-tight text-ink">{faq.q}</span>
				<div
					class="h-5 w-5 shrink-0 transition-transform duration-200 {openIndex === i ? 'rotate-90' : ''}"
					aria-hidden="true"
				>
					<Icon name="arrow" class="h-5 w-5" />
					<span class="sr-only">{openIndex === i ? 'Cerrar' : 'Abrir'}</span>
				</div>
			</button>
			{#if openIndex === i}
				<div
					id={`faqp-${i}`}
					role="region"
					aria-labelledby={`faqb-${i}`}
					transition:slide={{ duration: 200 }}
					class="border-t border-white/10 px-6 py-4"
				>
					<p class="text-base leading-relaxed text-muted">{faq.a}</p>
				</div>
			{/if}
		</div>
	{/each}
</div>
