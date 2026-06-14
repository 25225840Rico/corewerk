<script lang="ts">
	import { slide } from 'svelte/transition';
	import { faqs } from '$lib/data';
	import { reveal } from '$lib/reveal';

	let openIndex = $state<number | null>(0);

	function toggle(i: number) {
		openIndex = openIndex === i ? null : i;
	}
</script>

<section id="faq" class="py-20 lg:py-28">
	<div class="container-w">
		<div class="reveal mx-auto mb-12 max-w-2xl text-center" use:reveal>
			<span class="eyebrow">Dudas comunes</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
				Preguntas frecuentes
			</h2>
			<p class="mt-4 text-lg text-muted">
				Lo que las empresas industriales suelen preguntar antes de empezar.
			</p>
		</div>

		<div class="reveal mx-auto max-w-3xl" use:reveal>
			<div class="card divide-y divide-line p-2 sm:p-3">
				{#each faqs as faq, i}
					<div>
						<button
							type="button"
							class="flex w-full items-center justify-between gap-4 rounded-xl px-4 py-5 text-left transition-colors duration-120 hover:text-accent2"
							aria-expanded={openIndex === i}
							aria-controls={`faq-panel-${i}`}
							onclick={() => toggle(i)}
						>
							<span class="font-semibold leading-snug text-primary">{faq.q}</span>
							<span
								class="shrink-0 text-accent2 transition-transform duration-300 {openIndex === i
									? 'rotate-45'
									: ''}"
								aria-hidden="true"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="h-5 w-5"
								>
									<line x1="12" y1="5" x2="12" y2="19" />
									<line x1="5" y1="12" x2="19" y2="12" />
								</svg>
							</span>
						</button>

						{#if openIndex === i}
							<div id={`faq-panel-${i}`} role="region" transition:slide={{ duration: 300 }}>
								<p class="px-4 pb-5 pr-10 leading-relaxed text-muted">{faq.a}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
