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
		'Plataforma de directorio en 35 días, desde USD 2.500. Sistema de listados con búsqueda, filtros y perfiles individuales. Monetizable con planes de visibilidad. Para Antofagasta y Chile.';
	const canonical = `${SITE.url}/sitios/directorio/`;

	const faqLocal = [
		{
			q: '¿Qué es un directorio?',
			a: 'Un directorio es una plataforma donde se listan empresas, profesionales o servicios de una categoría. Ejemplos: directorios de plomeros, psicólogos, restaurantes, abogados. Los usuarios buscan y filtran, y encuentran opciones verificadas.'
		},
		{
			q: '¿Cómo monetizo un directorio?',
			a: 'Hay varias modelos: premium listings (empresas pagan para aparecer destacadas), featured slots (primeros 3 de cada categoría), publicidad en la plataforma, o comisión por lead/transacción. Podemos implementar el modelo que mejor se ajuste a tu mercado.'
		},
		{
			q: '¿Puedo controlar quién aparece en mi directorio?',
			a: 'Sí. El directorio incluye un panel administrativo donde aprueban o rechazan nuevos listados. Esto garantiza que solo aparezcan empresas verificadas y de calidad.'
		},
		{
			q: '¿Cuántos listados puede tener?',
			a: 'Ilimitados. La plataforma está diseñada para crecer a miles o decenas de miles de listados sin degradar velocidad. La búsqueda y filtros son ultra rápidos.'
		},
		{
			q: '¿Puedo exportar datos de listados?',
			a: 'Sí. Incluimos un panel para descargar datos en CSV o integrar con APIs externas. Útil si quieres automatizar procesos o integrar con otras herramientas.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Plataforma de Directorio',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '2500', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Sitios Web', item: `${SITE.url}/sitios/` },
					{ '@type': 'ListItem', position: 3, name: 'Directorio', item: canonical }
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
	<title>Directorio desde USD 2.500 · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Directorio desde USD 2.500 · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Sitios Web', href: '/sitios/' }, { label: 'Directorio' }]}
	eyebrow="Directorio"
	icon="layers"
	title="Tu plataforma de listados monetizable"
	subtitle="Sistema de directorio con búsqueda por categoría, filtros inteligentes y perfiles individuales. Monetizable con planes premium, featured listings o publicidad."
	price="USD 2.500"
	days="Entrega en 35 días"
	ctaPrimary={{ label: 'Quiero mi directorio', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="Una plataforma que genera valor para ambos lados">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Un directorio es una plataforma donde se concentran negocios o profesionales de una categoría. Usuarios
			buscan lo que necesitan, filtran por ubicación, especialidad o precio, y encuentran opciones. Es un
			modelo de negocio que funciona porque crea valor doble: los clientes encuentran proveedores, y los
			proveedores encuentran clientes.
		</p>
		<p>
			Ejemplos de directorios exitosos: directorios de psicólogos y terapeutas, plomeros y electricistas,
			restaurantes con delivery, abogados especializados, diseñadores, inmobiliarias. En cada caso, hay un
			mercado que busca esa información de forma centralizada.
		</p>
		<p>
			En CoreWerk construimos directorios completamente funcionales: búsqueda instantánea, filtros por
			múltiples criterios, perfiles individuales verificados, panel administrativo para aprobar listados,
			y sistema de monetización integrado. Puedes empezar con modelo freemium (básico gratis, premium pago)
			y evolucionar según necesites.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Todo para lanzar tu directorio" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'search', title: 'Búsqueda inteligente', desc: 'Los usuarios encuentran al instante lo que buscan por múltiples criterios.' },
			{ icon: 'layers', title: 'Filtros avanzados', desc: 'Por categoría, ubicación, precio, rating, disponibilidad y atributos personalizados.' },
			{ icon: 'users', title: 'Perfiles empresariales', desc: 'Cada negocio tiene su página con fotos, descripción, horarios, contacto, reseñas.' },
			{ icon: 'dashboard', title: 'Panel administrativo', desc: 'Aprueba o rechaza listados, gestiona contenido, ve reportes de actividad.' },
			{ icon: 'star', title: 'Sistema de calificación', desc: 'Usuarios califican y comentan. Credibilidad y feedback para proveedores.' },
			{ icon: 'shield', title: 'Modelos de monetización', desc: 'Premium listings, featured slots, publicidad o comisión por transacción integrada.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si buscas">
	<CheckList
		cols={2}
		items={[
			'Crear una plataforma que conecte compradores y vendedores de tu rubro.',
			'Monetizar concentrando la información dispersa de tu mercado.',
			'Dar valor a usuarios buscadores y a proveedores simultáneamente.',
			'Una plataforma que crece sola con community-driven content.',
			'Ingresos recurrentes desde proveedores premium o publicidad.',
			'Entrar en un mercado local con presencia digital centralizada y confiable.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De la idea a tu directorio publicado" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior highlight="Enterprise" />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Tienes una idea de directorio?"
	text="Cuéntanos qué categoría o mercado es, cuántos proveedores hay y cómo piensas monetizar. Haremos un diagnóstico de viabilidad y te presentaremos una propuesta. Tu directorio puede estar listo en 35 días."
	waMsg="Hola CoreWerk, quiero una Plataforma de Directorio (desde USD 2.500)."
/>
