<script lang="ts">
	import HeroInterior from '$lib/components/interior/HeroInterior.svelte';
	import InteriorSection from '$lib/components/interior/InteriorSection.svelte';
	import CTAInterior from '$lib/components/interior/CTAInterior.svelte';
	import Icon from '$lib/Icon.svelte';
	import { SITE } from '$lib/seo/site';

	const description =
		'Blog de CoreWerk: guías sobre desarrollo web, inteligencia artificial y automatización para pymes chilenas. Aprende estrategias de transformación digital.';
	const canonical = `${SITE.url}/blog/`;

	const upcomingTopics = [
		{
			icon: 'globe',
			title: 'Sitios Web que Venden',
			desc: 'Estructura, copywriting y elementos que convierten visitantes en clientes. Incluye checklist para auditar tu sitio actual.'
		},
		{
			icon: 'brain',
			title: 'IA para Pymes',
			desc: 'Cómo los agentes IA reducen carga operativa y generan ROI en 30 días. Casos reales de empresas en Chile.'
		},
		{
			icon: 'layers',
			title: 'Automatización sin Código',
			desc: 'Elimina procesos manuales repetitivos. Flujos de cotizaciones, reportes y recordatorios integrados a tu operación.'
		},
		{
			icon: 'zap',
			title: 'Estrategia Digital para 2025',
			desc: 'Qué inversionistas en tech esperan, cómo posicionarse ante cambios en IA y nuevos canales de venta online.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Blog',
				name: 'Blog de CoreWerk',
				description,
				url: canonical,
				inLanguage: 'es_CL'
			},
			{
				'@type': 'WebPage',
				name: 'Blog — CoreWerk',
				description,
				url: canonical
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Blog', item: canonical }
				]
			}
		]
	};
</script>

<svelte:head>
	<title>Blog · Ideas sobre Web e IA — CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="noindex, follow" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Blog · Ideas sobre Web e IA — CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Blog' }]}
	eyebrow="Blog"
	icon="file"
	title="Ideas sobre web e IA para tu negocio"
	subtitle="Guías prácticas, estrategias y casos reales sobre sitios web, agentes IA y automatización. Para emprendedores y pymes que quieren crecer sin tecnicismos."
/>

<InteriorSection eyebrow="Próximamente" title="Temas que publicaremos pronto" align="center">
	<div class="max-w-4xl">
		<div class="mb-8 border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-8">
			<div class="flex gap-3">
				<span class="text-accent">
					<Icon name="file" class="h-7 w-7" />
				</span>
				<div>
					<h3 class="font-semibold text-ink">Estamos preparando contenido valioso para ti</h3>
					<p class="mt-2 text-sm text-muted leading-relaxed">
						Pronto publicaremos guías detalladas, casos de estudio y estrategias sobre transformación digital, IA y growth para pymes chilenas. Suscríbete por WhatsApp para recibir notificaciones cuando lancemos nuevos artículos.
					</p>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			{#each upcomingTopics as topic}
				<div class="glass-card flex flex-col p-6">
					<span class="mb-4 inline-flex text-accent">
						<Icon name={topic.icon} class="h-6 w-6" />
					</span>
					<h3 class="text-base font-semibold text-ink">{topic.title}</h3>
					<p class="mt-2 flex-grow text-sm text-muted leading-relaxed">{topic.desc}</p>
					<div class="mt-5 border-t border-white/10 pt-4">
						<span class="text-xs font-semibold text-accent">Próximamente</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</InteriorSection>

<CTAInterior
	title="Mientras tanto, conversemos"
	text="¿Tienes dudas sobre IA, automatización o tu estrategia digital? Escríbenos por WhatsApp y respondemos sin esperar a que publiquemos un artículo. Respondemos rápido y sin tecnicismos."
	waMsg="Hola CoreWerk, tengo una pregunta sobre web e IA para mi negocio."
/>
