<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';
	import { units, WA_LINK } from '$lib/data';

	let active = $state(0);
	const current = $derived(units[active]);
</script>

<section id="servicios" class="bg-surface-200 py-20 lg:py-28">
	<div class="container-w">
		<div class="reveal max-w-2xl" use:reveal>
			<span class="eyebrow">Servicios</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
				Cinco unidades, una sola dirección: su operación
			</h2>
			<p class="mt-4 text-lg text-muted">
				Desde su primera web hasta sistemas a medida e inteligencia artificial aplicada a la
				industria.
			</p>
		</div>

		<!-- Tabs -->
		<div class="reveal mt-10" use:reveal>
			<div class="no-scrollbar flex gap-2 overflow-x-auto pb-1" role="tablist">
				{#each units as unit, i}
					<button
						role="tab"
						aria-selected={active === i}
						onclick={() => (active = i)}
						class="flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors duration-120 {active ===
						i
							? 'border-primary bg-primary text-white'
							: 'border-line bg-white text-muted hover:text-primary'}"
					>
						<Icon name={unit.icon} class="h-4 w-4" />
						{unit.name}
					</button>
				{/each}
			</div>
		</div>

		<!-- Contenido del tab -->
		{#key active}
			<div class="mt-8" in:fade={{ duration: 220 }}>
				<div class="mb-6 max-w-2xl">
					<h3 class="text-xl font-bold text-primary">{current.headline}</h3>
					<p class="mt-2 text-muted">{current.desc}</p>
					<span
						class="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent"
					>
						{current.tag}
					</span>
				</div>

				<div class="grid gap-5 md:grid-cols-2">
					{#each current.services as svc}
						<div class="card p-6">
							<div class="flex items-start justify-between gap-4">
								<div
									class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-200 text-primary"
								>
									<Icon name={current.icon} class="h-5 w-5" />
								</div>
								<span
									class="shrink-0 rounded-full bg-primary/5 px-2.5 py-1 text-xs font-semibold text-primary"
								>
									{svc.price}
								</span>
							</div>
							<h4 class="mt-4 font-bold text-primary">{svc.name}</h4>
							<p class="mt-1.5 text-sm text-muted">{svc.desc}</p>
						</div>
					{/each}
				</div>

				<div class="mt-8">
					<a href={WA_LINK} target="_blank" rel="noopener" class="btn-accent">
						Necesito este servicio → WhatsApp
					</a>
				</div>
			</div>
		{/key}
	</div>
</section>
