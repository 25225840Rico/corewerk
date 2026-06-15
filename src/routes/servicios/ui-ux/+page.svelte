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
		'Diseño UI/UX profesional desde USD 800. Interfaces intuitivas, atractivas y que convierten. Investigación de usuario, wireframes, prototipos interactivos. Para empresas de Antofagasta y todo Chile.';
	const canonical = `${SITE.url}/servicios/ui-ux/`;

	const faqLocal = [
		{
			q: '¿Cuál es la diferencia entre UI y UX?',
			a: 'UI (User Interface) es cómo se ve: colores, botones, tipografía. UX (User Experience) es cómo se siente: facilidad de navegación, lógica de flujos, eliminación de fricción. Un buen diseño combina ambos.'
		},
		{
			q: '¿Incluye la investigación de usuario?',
			a: 'Sí. Hacemos entrevistas, encuestas y análisis del comportamiento de tu audiencia. Así diseñamos basándonos en datos reales, no en suposiciones.'
		},
		{
			q: '¿El diseño viene con código listo para desarrollar?',
			a: 'Sí. Entregamos diseños en Figma con variables, componentes y especificaciones técnicas. Un desarrollador puede tomar ese archivo y codificar sin necesidad de preguntar.'
		},
		{
			q: '¿Puedo aplicar el diseño a mi sitio actual?',
			a: 'Totalmente. El servicio de UI/UX es independiente. Diseñamos la interfaz y luego, si quieres, te ayudamos a implementarla con nuestro servicio de Desarrollo Web.'
		},
		{
			q: '¿Cuánto demora un proyecto de UI/UX?',
			a: 'Entre 10 y 20 días dependiendo del alcance. Incluye investigación (3-5 días), wireframing, diseño visual, prototipo interactivo y reuniones de feedback con ajustes.'
		},
		{
			q: '¿Incluye prototipos interactivos?',
			a: 'Sí, entregamos un prototipo completo en Figma donde puedes navegar y ver cómo funcionan las interacciones. Esto ayuda a que el cliente vea antes de que se codifique.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Diseño UI/UX Profesional',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '800', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE.url}/servicios/` },
					{ '@type': 'ListItem', position: 3, name: 'Diseño UI/UX', item: canonical }
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
	<title>Diseño UI/UX desde USD 800 · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Diseño UI/UX desde USD 800 · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios/' }, { label: 'Diseño UI/UX' }]}
	eyebrow="Diseño UI/UX"
	icon="star"
	title="Interfaces que tus usuarios aman usar"
	subtitle="Diseño basado en investigación de usuario, wireframes, prototipos interactivos. Interfaces intuitivas que guían naturalmente hacia la conversión. Desde USD 800, entrega en 10 días."
	price="USD 800"
	days="Entrega en 10 días"
	ctaPrimary={{ label: 'Solicitar diseño', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="Diseño centrado en quien lo usa">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			UI/UX es el arte de crear interfaces que no solo se ven bonitas, sino que funcionan intuitivamente. UI es lo visual (colores, botones, iconos). UX es la experiencia completa: cómo navega el usuario, cómo logra su objetivo, qué siente usando tu sitio.
		</p>
		<p>
			Un buen diseño UI/UX es invisible. El usuario hace clic, llena un formulario, compra algo sin pensar en ello. No se confunde, no abandona por frustración. En cambio, un mal diseño hace que el visitante se pierda, no encuentre lo que busca y se vaya a la competencia.
		</p>
		<p>
			En CoreWerk diseñamos investigando primero: quién es tu usuario, qué necesita, dónde se frustra. Luego creamos wireframes (esquemas del layout), diseño visual (colores y formas), y un prototipo interactivo donde puedes ver y navegar antes de que se codifique. Así evitamos sorpresas en desarrollo.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Diseño completo listo para implementar" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'users', title: 'Investigación de usuario', desc: 'Entrevistas y análisis para entender necesidades reales.' },
			{ icon: 'layers', title: 'Wireframes', desc: 'Esquemas de estructura antes de entrar en visual.' },
			{ icon: 'palette', title: 'Diseño visual', desc: 'Sistema de colores, tipografía y componentes consistentes.' },
			{ icon: 'mouse', title: 'Prototipo interactivo', desc: 'Navega el diseño completo en Figma antes de codificar.' },
			{ icon: 'file', title: 'Especificaciones técnicas', desc: 'Todo documentado para que el desarrollador implemente sin dudas.' },
			{ icon: 'check', title: 'Revisiones ilimitadas', desc: 'Ajustes hasta que estés 100% conforme con el resultado.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si...">
	<CheckList
		cols={2}
		items={[
			'Tienes un proyecto web o app y quieres diseño profesional antes de codificar.',
			'Tu sitio actual tiene problemas de usabilidad: usuarios se pierden o no completan compras.',
			'Necesitas rediseñar una interfaz existente para mejorar conversiones.',
			'Quieres un sistema de diseño consistente para mantener a largo plazo.',
			'Buscas separar la fase de diseño de la de desarrollo para ir paso a paso.',
			'Necesitas prototipos para validar ideas con usuarios antes de invertir en código.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De la investigación al prototipo listo" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Inversión en interfaz que convierte" align="center">
	<PreciosInterior highlight="Profesional" />
</InteriorSection>

<InteriorSection eyebrow="Dudas frecuentes" title="Preguntas sobre UI/UX" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Listo para un diseño que tus usuarios amen?"
	text="Conversamos sobre tu producto o sitio, qué funciona y qué no. Luego diseñamos basándonos en datos reales de tu audiencia, con prototipos que puedes navegar."
	waMsg="Hola CoreWerk, necesito diseño UI/UX profesional para mi sitio (desde USD 800)."
/>
