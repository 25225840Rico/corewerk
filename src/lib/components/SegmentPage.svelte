<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Icon from '$lib/Icon.svelte';
	import SEO from '$lib/seo/SEO.svelte';
	import { SITE } from '$lib/seo/site';
	import { reveal } from '$lib/reveal';
	import type { SegmentContent } from '$lib/content/types';

	let { data }: { data: SegmentContent } = $props();
	const path = `/${data.slug}`;

	// JSON-LD: Service + FAQPage + BreadcrumbList (GEO + rich results)
	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: data.metaTitle,
				description: data.tldr,
				provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', priceCurrency: 'CLP', price: data.priceFrom }
			},
			{
				'@type': 'FAQPage',
				mainEntity: data.faqs.map((f) => ({
					'@type': 'Question',
					name: f.q,
					acceptedAnswer: { '@type': 'Answer', text: f.a }
				}))
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE.url },
					{ '@type': 'ListItem', position: 2, name: data.badge, item: `${SITE.url}${path}` }
				]
			}
		]
	};
</script>

<SEO
	title={data.metaTitle}
	description={data.metaDescription}
	{path}
	type="website"
	{jsonLd}
/>

<Navbar />

<main class="overflow-hidden">
	<!-- Hero del segmento -->
	<section class="relative px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
		<div class="mx-auto max-w-4xl text-center">
			<span class="eyebrow mb-5 justify-center" use:reveal>
				<span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
				{data.badge}
			</span>
			<h1
				class="text-gradient mb-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
				use:reveal
			>
				{data.h1}
			</h1>
			<p class="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-muted" use:reveal>
				{data.subheadline}
			</p>
			<!-- Párrafo TLDR-first (GEO: citable por IAs) -->
			<p
				class="glass mx-auto mb-8 max-w-2xl rounded-2xl p-5 text-left text-sm leading-relaxed text-ink/90"
				use:reveal
			>
				{data.tldr}
			</p>
			<div class="flex flex-wrap items-center justify-center gap-4" use:reveal>
				<a href="/#contacto" class="btn-accent">Cotiza tu proyecto</a>
				<a href={`https://wa.me/56912345678`} target="_blank" rel="noopener" class="btn-glass">
					<Icon name="whatsapp" class="h-5 w-5" /> Hablar por WhatsApp
				</a>
			</div>
		</div>
	</section>

	<!-- ¿Por qué necesitas este tipo de sitio? -->
	<section class="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-3xl font-bold text-ink lg:text-4xl" use:reveal>
				¿Por qué necesitas este tipo de sitio?
			</h2>
			<div class="grid gap-6 md:grid-cols-3">
				{#each data.why as item}
					<div class="glass glass-card rounded-2xl p-6" use:reveal>
						<h3 class="mb-2 text-lg font-semibold text-ink">{item.title}</h3>
						<p class="text-muted">{item.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Qué incluye Konrad -->
	<section class="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div class="mx-auto max-w-4xl">
			<div class="glass rounded-3xl p-8 lg:p-12">
				<span class="eyebrow mb-4">Qué incluye</span>
				<h2 class="mb-8 text-2xl font-bold text-ink lg:text-3xl">
					Todo lo que necesitas, en un solo lugar
				</h2>
				<ul class="grid gap-4 sm:grid-cols-2">
					{#each data.includes as inc}
						<li class="flex items-start gap-3">
							<Icon name="check" class="mt-0.5 h-5 w-5 shrink-0 text-accent" />
							<span class="text-ink/90">{inc}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>

	<!-- Casos de uso -->
	<section class="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-3xl font-bold text-ink lg:text-4xl" use:reveal>
				Casos de uso en tu sector
			</h2>
			<div class="grid gap-6 md:grid-cols-3">
				{#each data.useCases as uc}
					<div class="glass glass-card rounded-2xl p-6" use:reveal>
						<h3 class="mb-2 text-lg font-semibold text-accent">{uc.name}</h3>
						<p class="text-muted">{uc.detail}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Precios del segmento -->
	<section class="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div class="mx-auto max-w-3xl text-center">
			<div class="glass rounded-3xl p-10 shadow-glow" use:reveal>
				<span class="eyebrow mb-4 justify-center">Inversión</span>
				<p class="mb-2 text-muted">Proyectos de este tipo desde</p>
				<p class="mb-4 text-5xl font-extrabold text-ink">{data.priceFrom}</p>
				<p class="mb-8 text-muted">
					Plan recomendado: <span class="font-semibold text-accent">{data.recommendedPlan}</span>.
					Pago en etapas (50% inicio / 50% entrega). Factura disponible.
				</p>
				<a href="/#precios" class="btn-accent">Ver planes y precios</a>
			</div>
		</div>
	</section>

	<!-- FAQ específica (GEO) -->
	<section class="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div class="mx-auto max-w-3xl">
			<span class="eyebrow mb-4 justify-center w-full text-center" use:reveal>Preguntas frecuentes</span>
			<h2 class="mb-10 text-center text-3xl font-bold text-ink lg:text-4xl" use:reveal>
				Resolvemos tus dudas
			</h2>
			<div class="glass rounded-3xl divide-y divide-white/10 px-6 sm:px-8">
				{#each data.faqs as f}
					<div class="py-6" use:reveal>
						<h3 class="mb-2 font-semibold text-ink">{f.q}</h3>
						<p class="text-muted">{f.a}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA final -->
	<section class="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="mb-4 text-3xl font-bold text-ink lg:text-4xl" use:reveal>
				¿Listo para empezar tu proyecto?
			</h2>
			<p class="mb-8 text-lg text-muted" use:reveal>
				Cuéntanos qué necesitas y te enviamos una propuesta clara en 24 horas. Sin compromiso.
			</p>
			<div class="flex flex-wrap items-center justify-center gap-4" use:reveal>
				<a href={`/#contacto`} class="btn-accent">Solicitar propuesta gratis</a>
				<a href="/#diagnostico" class="btn-glass">Diagnóstico de mi web actual</a>
			</div>
		</div>
	</section>
</main>

<Footer />
