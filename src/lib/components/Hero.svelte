<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';
	import { heroPills, WA_LINK } from '$lib/data';

	const stats = [
		{ value: '7 días', label: 'Entrega promedio' },
		{ value: '5', label: 'Unidades de negocio' },
		{ value: '24h', label: 'Primera respuesta' }
	];

	const deco = ['globe', 'automation', 'cpu', 'dashboard'];
</script>

<section id="inicio" class="relative overflow-hidden bg-primary text-white">
	<!-- Patrón de puntos + glows -->
	<div class="dot-pattern absolute inset-0 opacity-60" aria-hidden="true"></div>
	<div
		class="pointer-events-none absolute inset-0"
		style="background:
			radial-gradient(40rem 30rem at 85% -10%, rgba(245,158,11,0.18), transparent 60%),
			radial-gradient(40rem 30rem at 0% 110%, rgba(14,165,233,0.16), transparent 60%);"
		aria-hidden="true"
	></div>

	<div class="container-w relative grid items-center gap-12 py-28 lg:grid-cols-12 lg:py-36">
		<!-- Columna texto -->
		<div class="lg:col-span-7">
			<span class="reveal chip border-accent/40 bg-accent/10 text-accent" use:reveal>
				<Icon name="map" class="h-3.5 w-3.5" /> Antofagasta · Norte de Chile
			</span>

			<h1
				class="reveal mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
				use:reveal
			>
				Tecnología que <span class="text-accent">trabaja en faena</span>
			</h1>

			<p class="reveal mt-6 max-w-xl text-lg text-white/70" use:reveal>
				Automatización, sitios web, IA y sistemas digitales para empresas de minería, transporte y
				servicios industriales.
			</p>

			<div class="reveal mt-8 flex flex-wrap gap-3" use:reveal>
				<a href="#servicios" class="btn-accent">Ver servicios →</a>
				<a href={WA_LINK} target="_blank" rel="noopener" class="btn-ghost-light">
					<Icon name="zap" class="h-4 w-4" /> WhatsApp directo
				</a>
			</div>

			<!-- Stats -->
			<div class="reveal mt-12 grid max-w-lg grid-cols-3 gap-6" use:reveal>
				{#each stats as s}
					<div>
						<div class="text-2xl font-extrabold text-white sm:text-3xl">{s.value}</div>
						<div class="mt-1 text-xs text-white/55">{s.label}</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Columna decorativa: grid de íconos -->
		<div class="reveal hidden lg:col-span-5 lg:block" use:reveal>
			<div class="grid grid-cols-2 gap-4">
				{#each deco as d, i}
					<div
						class="float-tile flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur"
						style="animation-delay: {i * 0.6}s;"
					>
						<Icon name={d} class="h-12 w-12 text-accent2" />
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Pills de industrias -->
	<div class="container-w relative pb-12">
		<div class="no-scrollbar flex gap-2.5 overflow-x-auto pb-1">
			{#each heroPills as pill}
				<span
					class="whitespace-nowrap rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-sm text-white/75"
				>
					{pill}
				</span>
			{/each}
		</div>
	</div>
</section>

<style>
	.float-tile {
		animation: float 6s ease-in-out infinite;
	}
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-8px);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.float-tile {
			animation: none;
		}
	}
</style>
