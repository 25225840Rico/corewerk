<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';

	let {
		eyebrow = '',
		title = '',
		lead = '',
		icon = '',
		ai = false,
		align = 'left',
		id = '',
		children
	}: {
		eyebrow?: string;
		title?: string;
		lead?: string;
		icon?: string;
		ai?: boolean;
		align?: 'left' | 'center';
		id?: string;
		children?: Snippet;
	} = $props();
</script>

<section {id} class="{ai ? 'bg-ai-section' : ''} scroll-mt-20 py-16 lg:py-20">
	<div class="container-w">
		{#if eyebrow || title || lead}
			<div
				class="reveal mb-12 {align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}"
				use:reveal
			>
				{#if eyebrow}
					<span class="eyebrow" class:!text-accentAI={ai}>
						{#if icon}<Icon name={icon} class="h-4 w-4" />{/if}
						{eyebrow}
					</span>
				{/if}
				{#if title}
					<h2 class="mt-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">{title}</h2>
				{/if}
				{#if lead}
					<p class="mt-5 text-base text-muted leading-relaxed">{lead}</p>
				{/if}
			</div>
		{/if}

		{#if children}
			<div class="reveal" use:reveal>
				{@render children()}
			</div>
		{/if}
	</div>
</section>
