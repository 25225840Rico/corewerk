<script lang="ts">
	import HeroInterior from '$lib/components/interior/HeroInterior.svelte';
	import InteriorSection from '$lib/components/interior/InteriorSection.svelte';
	import CTAInterior from '$lib/components/interior/CTAInterior.svelte';
	import Icon from '$lib/Icon.svelte';
	import { portfolioItems, testimonials, metrics } from '$lib/data';
	import { SITE } from '$lib/seo/site';

	const description =
		'Portafolio de proyectos reales desarrollados por CoreWerk: sitios web, landing pages, agentes IA y automatización. Soluciones que generan resultados para empresas en Chile.';
	const canonical = `${SITE.url}/portafolio/`;

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'CollectionPage',
				name: 'Portafolio de Proyectos — CoreWerk',
				description,
				url: canonical,
				hasPart: portfolioItems.map((p) => ({
					'@type': 'WebPage',
					name: p.title,
					url: `${canonical}#${p.title.toLowerCase().replace(/\s+/g, '-')}`
				}))
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Portafolio', item: canonical }
				]
			}
		]
	};
</script>

<svelte:head>
	<title>Portafolio · Proyectos Reales — CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Portafolio · Proyectos Reales — CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Portafolio' }]}
	eyebrow="Portafolio"
	icon="palette"
	title="Proyectos y demos reales"
	subtitle="Estos son algunos de los proyectos que hemos entregado: sitios web, landing pages, agentes IA y automatizaciones que generan resultados medibles para nuestros clientes en Chile."
	ctaPrimary={{ label: 'Ver tu proyecto aquí', href: 'https://wa.me/56900000000', external: true }}
/>

<InteriorSection eyebrow="Proyectos" title="Soluciones que funcionan" align="center">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each portfolioItems as item}
			<div class="glass-card group flex flex-col p-6">
				<div class="mb-4 flex items-start justify-between">
					<span class="inline-flex text-accent">
						<Icon name={item.icon} class="h-6 w-6" />
					</span>
					{#if item.live}
						<span class="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
							<span class="h-2 w-2 animate-pulse rounded-full bg-accent"></span>
							LIVE
						</span>
					{/if}
				</div>
				<h3 class="text-base font-semibold text-ink transition-colors group-hover:text-accent">
					{item.title}
				</h3>
				<p class="mt-2 flex-grow text-sm text-muted leading-relaxed">{item.category}</p>
				<div class="mt-5 border-t border-white/10 pt-4">
					<span class="text-xs font-semibold text-accent">Ver proyecto</span>
				</div>
			</div>
		{/each}
	</div>
</InteriorSection>

<InteriorSection eyebrow="Lo que dicen" title="Testimonios de clientes" align="center">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each testimonials as testimonial}
			<div class="glass-card flex flex-col p-6">
				<div class="mb-4 flex gap-1 text-accent">
					{#each Array(5) as _}
						<span>
							<Icon name="star" class="h-4 w-4 fill-accent" />
						</span>
					{/each}
				</div>
				<p class="mb-4 flex-grow text-sm text-muted leading-relaxed italic">"{testimonial.text}"</p>
				<div class="border-t border-white/10 pt-4">
					<p class="font-semibold text-ink">{testimonial.name}</p>
					<p class="text-xs text-muted">{testimonial.company}</p>
					<p class="text-xs text-muted">{testimonial.city}</p>
				</div>
			</div>
		{/each}
	</div>
</InteriorSection>

<InteriorSection eyebrow="Números" title="Nuestro impacto en números" align="center">
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{#each metrics as metric}
			<div class="flex flex-col items-center">
				<p class="text-center text-4xl font-bold text-accent">
					{metric.prefix}{metric.value}{metric.suffix}
				</p>
				<p class="mt-2 text-center text-sm text-muted">{metric.label}</p>
			</div>
		{/each}
	</div>
</InteriorSection>

<CTAInterior
	title="¿Listo para que tu negocio esté aquí?"
	text="Cuéntanos sobre tu idea. Nuestro equipo diseña la solución correcta para tus objetivos y te hace una propuesta con precio y plazo fijo. Rápido, sin tecnicismos."
	waMsg="Hola CoreWerk, quiero que desarrollen un proyecto para mi negocio."
/>
