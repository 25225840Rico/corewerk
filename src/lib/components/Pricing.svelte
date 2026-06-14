<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';
	import { plans, WA_LINK } from '$lib/data';

	// Toggle: distingue proyectos (pago único) de servicios recurrentes (retainer).
	let billing = $state<'unico' | 'mensual'>('unico');

	const note = $derived(
		billing === 'unico'
			? 'Proyectos con precio cerrado y pago único o en cuotas.'
			: 'Los servicios de Marketing Digital y soporte continuo se cobran como retainer mensual desde USD 400/mes.'
	);
</script>

<section id="precios" class="bg-surface-200 py-20 lg:py-28">
	<div class="container-w">
		<div class="reveal mx-auto max-w-2xl text-center" use:reveal>
			<span class="eyebrow">Precios</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
				Planes claros, sin letra chica
			</h2>
			<p class="mt-4 text-lg text-muted">
				Tres formas de empezar su transformación digital. Aplica a todas las unidades.
			</p>
		</div>

		<!-- Toggle -->
		<div class="reveal mt-8 flex flex-col items-center gap-3" use:reveal>
			<div class="inline-flex rounded-xl border border-line bg-white p-1">
				<button
					onclick={() => (billing = 'unico')}
					class="rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-120 {billing ===
					'unico'
						? 'bg-primary text-white'
						: 'text-muted hover:text-primary'}"
				>
					Proyecto único
				</button>
				<button
					onclick={() => (billing = 'mensual')}
					class="rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-120 {billing ===
					'mensual'
						? 'bg-primary text-white'
						: 'text-muted hover:text-primary'}"
				>
					Retainer mensual
				</button>
			</div>
			<p class="text-sm text-muted">{note}</p>
		</div>

		<!-- Planes -->
		<div class="mt-12 grid items-start gap-6 lg:grid-cols-3">
			{#each plans as plan, i}
				<div
					class="reveal card relative flex h-full flex-col p-7 {plan.featured
						? 'border-accent shadow-card-lg ring-1 ring-accent'
						: ''}"
					style="transition-delay: {i * 70}ms;"
					use:reveal
				>
					{#if plan.badge}
						<span
							class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary"
						>
							{plan.badge}
						</span>
					{/if}

					<h3 class="text-lg font-extrabold text-primary">{plan.name}</h3>
					<p class="mt-1 text-sm text-muted">{plan.headline}</p>

					<div class="mt-5 flex items-baseline gap-1.5">
						<span class="text-xs font-medium text-faint">Desde</span>
						<span class="text-3xl font-extrabold text-primary">{plan.price}</span>
					</div>
					<span class="mt-1 text-xs text-faint">{plan.priceNote}</span>

					<ul class="mt-6 flex-1 space-y-3">
						{#each plan.features as f}
							<li class="flex gap-2.5 text-sm text-ink">
								<Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-success" />
								<span>{f}</span>
							</li>
						{/each}
					</ul>

					<p class="mt-6 text-xs text-faint">
						<span class="font-semibold text-muted">Ideal para:</span> {plan.ideal}
					</p>

					<a
						href={WA_LINK}
						target="_blank"
						rel="noopener"
						class="mt-5 {plan.featured ? 'btn-accent' : 'btn-outline'} w-full"
					>
						{plan.cta}
					</a>
				</div>
			{/each}
		</div>

		<div class="reveal mt-10 text-center" use:reveal>
			<p class="text-muted">
				¿No sabe qué plan necesita?
				<a
					href={WA_LINK}
					target="_blank"
					rel="noopener"
					class="font-semibold text-accent2 hover:underline"
				>
					Diagnóstico gratuito en 24 horas →
				</a>
			</p>
		</div>
	</div>
</section>
