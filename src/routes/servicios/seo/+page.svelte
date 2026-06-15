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
		'SEO profesional desde USD 600/mes. Posicionamiento en Google para búsquedas de tu rubro. Auditoría técnica, palabras clave, contenido optimizado. Para empresas de Antofagasta y todo Chile.';
	const canonical = `${SITE.url}/servicios/seo/`;

	const faqLocal = [
		{
			q: '¿Cuánto demora ver resultados en SEO?',
			a: 'Entre 2 y 3 meses para empezar a ver movimiento. Google reindexea lentamente. Con trabajo consistente, a los 6 meses ya tienes palabras clave en primeras posiciones.'
		},
		{
			q: '¿Cuál es la diferencia entre SEO técnico y SEO de contenido?',
			a: 'SEO técnico es optimizar tu sitio (velocidad, estructura, móvil). SEO de contenido es crear artículos y páginas con palabras clave que la gente busca. Ambos son necesarios.'
		},
		{
			q: '¿Garantizan posición #1 en Google?',
			a: 'No, nadie honesto lo garantiza. Google cambia constantemente su algoritmo. Lo que sí garantizamos es trabajo consistente, mensurable y orientado a mejorar tu visibilidad en búsquedas de tu rubro.'
		},
		{
			q: '¿Qué herramientas usan para medir progreso?',
			a: 'Google Search Console, Google Analytics 4, Ahrefs y SEMrush. Reportes mensuales claros te muestran qué palabras clave crecen, qué páginas traen clientes y cuántas consultas generamos.'
		},
		{
			q: '¿El servicio es mensual obligatorio?',
			a: 'Recomendamos mínimo 3 meses para ver resultados. Pero sí, es mensual y puedes pausar en cualquier momento. No hay contrato de larga duración obligatoria.'
		},
		{
			q: '¿Cómo sé que el SEO funciona?',
			a: 'Te damos acceso a Google Search Console. Ves en tiempo real qué palabras clave rankean, cuántas impresiones y clics generas. Además conectamos Google Analytics para ver cuántos visitantes SEO se convierten en contactos.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'SEO Profesional',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '600', priceCurrency: 'USD', priceValidUntil: '2026-12-31' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE.url}/servicios/` },
					{ '@type': 'ListItem', position: 3, name: 'SEO', item: canonical }
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
	<title>SEO desde USD 600/mes · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="SEO desde USD 600/mes · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios/' }, { label: 'SEO' }]}
	eyebrow="SEO"
	icon="search"
	title="Aparecer en Google cuando te buscan"
	subtitle="Posicionamiento orgánico para palabras clave de tu rubro. Auditoría técnica, investigación de palabras clave, contenido optimizado, links y reportes mensuales. Desde USD 600/mes."
	price="USD 600/mes"
	days="Primeros resultados en 2-3 meses"
	ctaPrimary={{ label: 'Comenzar SEO', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="Posicionamiento en Google que genera clientes">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			SEO (Search Engine Optimization) es el arte de hacer que tu sitio aparezca en Google cuando alguien busca lo que ofreces. Es diferente a pagar por anuncios (Google Ads): el SEO es orgánico, sin costo por clic, y genera tráfico de larga duración.
		</p>
		<p>
			Cuando alguien en Antofagasta busca "dentista cerca de mí" o "gestoría contable profesional", Google muestra los sitios que considera más relevantes. SEO es optimizar tu sitio para que Google te considere la mejor respuesta para esa búsqueda.
		</p>
		<p>
			En CoreWerk hacemos una auditoría completa de tu sitio, identificamos palabras clave que tus clientes realmente buscan, optimizamos la estructura técnica, creamos contenido enfocado en esas búsquedas, y mejoramos la autoridad de tu dominio. Trabajamos con Google Search Console y herramientas profesionales para medir cada resultado.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Posicionamiento integral" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'search', title: 'Auditoría SEO completa', desc: 'Diagnóstico técnico, competidores y oportunidades en tu sector.' },
			{ icon: 'brain', title: 'Investigación de keywords', desc: 'Palabras clave que tus clientes realmente buscan.' },
			{ icon: 'file', title: 'Optimización de contenido', desc: 'Creamos y mejoramos artículos enfocados en posicionar.' },
			{ icon: 'zap', title: 'Optimización técnica', desc: 'Velocidad, mobile, estructura y metadatos para Google.' },
			{ icon: 'link', title: 'Link building', desc: 'Construcción de autoridad de dominio mediante enlaces de calidad.' },
			{ icon: 'dashboard', title: 'Reportes mensuales', desc: 'Métricas claras: qué rankea, tráfico, conversiones.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si...">
	<CheckList
		cols={2}
		items={[
			'Necesitas clientes locales en Antofagasta, Santiago o cualquier ciudad de Chile.',
			'Ya tienes un sitio pero casi no recibe visitas de Google.',
			'Buscas visibilidad a largo plazo sin depender de pagar por anuncios.',
			'Quieres que cuando busquen tu servicio, aparezcas en primeras posiciones.',
			'Tu competencia está posicionada y quieres recuperar territorio en Google.',
			'Tienes presupuesto para marketing pero quieres máximo ROI por peso invertido.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="Estrategia SEO paso a paso" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="SEO con retorno medible" align="center">
	<PreciosInterior />
</InteriorSection>

<InteriorSection eyebrow="Dudas frecuentes" title="Preguntas sobre SEO" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Listo para aparecer en Google?"
	text="Hacemos una auditoría SEO de tu sitio identificando oportunidades de posicionamiento. Te mostramos en qué palabras clave podrías rankear y qué inversión requiere."
	waMsg="Hola CoreWerk, quiero posicionar mi sitio en Google con SEO (desde USD 600/mes)."
/>
