<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';
	import { industries } from '$lib/data';
</script>

<section id="industrias" class="py-20 lg:py-28">
	<div class="container-w">
		<div class="reveal max-w-2xl" use:reveal>
			<span class="eyebrow">Industrias</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
				Conocemos el lenguaje de su faena
			</h2>
			<p class="mt-4 text-lg text-muted">
				Soluciones digitales pensadas para los rubros que mueven el norte de Chile.
			</p>
		</div>

		<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each industries as ind, i}
				<a
					href="#servicios"
					class="reveal card card-hover group relative overflow-hidden p-6"
					style="transition-delay: {i * 60}ms;"
					use:reveal
				>
					<div
						class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-120 group-hover:opacity-100"
						style="background: radial-gradient(80% 60% at 50% 0%, rgba(14,165,233,0.08), transparent 70%);"
						aria-hidden="true"
					></div>
					<div
						class="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-accent2"
					>
						<Icon name={ind.icon} class="h-6 w-6" />
					</div>
					<h3 class="relative mt-5 text-lg font-bold text-primary">{ind.name}</h3>
					<p class="relative mt-2 text-sm text-muted">{ind.desc}</p>
					<div class="relative mt-5 flex items-center justify-between">
						<span class="text-xs font-medium text-faint">{ind.services} soluciones</span>
						<span class="text-sm font-semibold text-accent2">Ver soluciones →</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
