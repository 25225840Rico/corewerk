<script lang="ts">
	import HeroInterior from '$lib/components/interior/HeroInterior.svelte';
	import InteriorSection from '$lib/components/interior/InteriorSection.svelte';
	import FeatureGrid from '$lib/components/interior/FeatureGrid.svelte';
	import CheckList from '$lib/components/interior/CheckList.svelte';
	import ProcesoInterior from '$lib/components/interior/ProcesoInterior.svelte';
	import PreciosInterior from '$lib/components/interior/PreciosInterior.svelte';
	import FaqInterior from '$lib/components/interior/FaqInterior.svelte';
	import CTAInterior from '$lib/components/interior/CTAInterior.svelte';
	import { SITE } from '$lib/seo/site';

	const description =
		'Mantención web desde USD 50/mes. Actualizaciones, seguridad, monitoreo 24/7, respaldos. Tu sitio siempre funcional, rápido y seguro. Para empresas de Antofagasta y todo Chile.';
	const canonical = `${SITE.url}/servicios/mantencion-web/`;

	const faqLocal = [
		{
			q: '¿Realmente necesito mantención si mi sitio funciona bien?',
			a: 'Sí. Un sitio sin mantención se degrada: plugins desactualizados, vulnerabilidades de seguridad, cambios en Google que afectan SEO, hosting con problemas. Mantención previene catástrofes que podrían costar miles.'
		},
		{
			q: '¿Qué diferencia hay entre mantención básica y profesional?',
			a: 'Básica: parches de seguridad. Profesional: seguridad + monitoreo 24/7 + respaldos + optimización de velocidad + cambios de contenido + soporte prioritario. Incluye todo lo que tu sitio necesita.'
		},
		{
			q: '¿Qué pasa si mi sitio se cae?',
			a: 'Con nuestro servicio, te avisamos en menos de 5 minutos y lo reparamos de inmediato. Incluye monitoreo 24/7. Tenemos time-response de 2 horas para emergencias.'
		},
		{
			q: '¿Puedo cambiar contenido sin saber código?',
			a: 'Depende de cómo esté hecho el sitio. Si tiene CMS (WordPress, Webflow) sí, fácil. Si es código custom necesitas ayuda técnica. Eso lo cubre el plan de mantención.'
		},
		{
			q: '¿Mantienen respaldos?',
			a: 'Sí, respaldos automáticos diarios del sitio completo. Guardados en servidor externo. Si algo se daña, restauramos en minutos.'
		},
		{
			q: '¿Cuánto tiempo para cambios en contenido?',
			a: 'Cambios simples (texto, imagen): 24-48 horas. Cambios complejos (nueva funcionalidad) se presupuestan aparte. Tu plan de mantención cubre 1 hora de trabajo al mes en cambios menores.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Mantención Web Profesional',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '50', priceCurrency: 'USD', priceValidUntil: '2026-12-31' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE.url}/servicios/` },
					{ '@type': 'ListItem', position: 3, name: 'Mantención Web', item: canonical }
				]
			},
			{
				'@type': 'FAQPage',
				mainEntity: faqLocal.map((f) => ({
					'@type': 'Question',
					name: f.q,
					acceptedAnswer: { '@type': 'Answer', text: f.a }
				}))
			}
		]
	};
</script>

<svelte:head>
	<title>Mantención Web desde USD 50/mes · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Mantención Web desde USD 50/mes · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios/' }, { label: 'Mantención Web' }]}
	eyebrow="Mantención Web"
	icon="wrench"
	title="Tu sitio siempre actualizado, seguro y funcionando"
	subtitle="Actualizaciones de seguridad, monitoreo 24/7, respaldos automáticos, optimización. Previene caídas, ataques y problemas de rendimiento. Desde USD 50/mes."
	price="USD 50/mes"
	days="Disponible desde ahora"
	ctaPrimary={{ label: 'Contratar mantención', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="Mantención web: como servicio técnico de auto">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Un sitio web sin mantención es como un auto sin revisar: funciona al principio, pero con el tiempo se degrada. Plugins desactualizados abren vulnerabilidades, Google penaliza sitios lentos, y una caída puede costar ventas sin que puedas reaccionar.
		</p>
		<p>
			La mantención web es monitoreo y prevención continua. Actualizamos software, vigilamos seguridad, aseguramos que carga rápido, hacemos respaldos, y reaccionamos al instante si algo falla. Es la diferencia entre un sitio que vive y uno que solo sobrevive.
		</p>
		<p>
			En CoreWerk cuidamos la salud técnica de tu sitio: monitoreo 24/7, alertas inmediatas ante problemas, actualizaciones de seguridad, optimización de rendimiento, respaldos automáticos. Tu trabajo: foco en el negocio. Lo técnico, nosotros lo cuidamos.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Mantención completa incluida" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'shield', title: 'Actualizaciones de seguridad', desc: 'Parches, plugins actualizados, protección contra ataques.' },
			{ icon: 'server', title: 'Monitoreo 24/7', desc: 'Vigilamos tu sitio. Alerta inmediata si algo falla o carga lento.' },
			{ icon: 'database', title: 'Respaldos automáticos', desc: 'Copias diarias en servidor externo. Recuperación en minutos si algo se daña.' },
			{ icon: 'zap', title: 'Optimización', desc: 'Mejoramos velocidad de carga, caché, compresión de imágenes.' },
			{ icon: 'file', title: 'Cambios mensuales', desc: 'Incluye 1 hora de trabajo técnico: cambios de texto, imágenes, etc.' },
			{ icon: 'chat', title: 'Soporte prioritario', desc: 'WhatsApp directo para emergencias. Respuesta en menos de 1 hora.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si...">
	<CheckList
		cols={2}
		items={[
			'Tienes un sitio web que necesita seguir funcionando sin interrupciones.',
			'No entiendes de código y necesitas alguien que cuide lo técnico.',
			'Necesitas cambios ocasionales de contenido sin aprender a hacerlo.',
			'Quieres estar protegido contra ataques de hackers y malware.',
			'Ya entregaste inversión en tu sitio y quiere protegerla.',
			'Buscas respaldos automáticos y recuperación rápida ante emergencias.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="Monitoreo y mantenimiento continuo" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Mantención profesional asequible" align="center">
	<PreciosInterior highlight="Starter" />
</InteriorSection>

<InteriorSection eyebrow="Dudas frecuentes" title="Preguntas sobre mantención web" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Tu sitio necesita alguien que lo cuide?"
	text="Hacemos una auditoría técnica gratuita de tu sitio actual: seguridad, velocidad, respaldos. Te mostramos qué riesgos tiene y cómo mantención previene problemas costosos."
	waMsg="Hola CoreWerk, necesito mantención web para mi sitio (desde USD 50/mes)."
/>
