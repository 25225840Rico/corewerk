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
		'Diseñamos tu landing page profesional en 7 días, desde USD 400. Una página enfocada en convertir visitantes en clientes, con formulario y WhatsApp integrado. Para empresas de Antofagasta y todo Chile.';
	const canonical = `${SITE.url}/sitios/landing-page/`;

	const faqLocal = [
		{
			q: '¿Qué es exactamente una landing page?',
			a: 'Es una página única diseñada con un solo objetivo: convertir al visitante en un contacto o cliente. A diferencia de un sitio completo, elimina distracciones y guía al usuario hacia una acción concreta, como escribir por WhatsApp o dejar sus datos.'
		},
		{
			q: '¿En cuánto tiempo está lista mi landing page?',
			a: 'La entregamos en 7 días hábiles desde que recibimos tus contenidos y aprobamos el diseño inicial. Para campañas urgentes podemos coordinar plazos más rápidos.'
		},
		{
			q: '¿La landing funciona bien en celular?',
			a: 'Sí. Todas nuestras landing pages son responsive y están optimizadas para cargar rápido en conexiones móviles, donde ocurre la mayoría de las conversiones.'
		},
		{
			q: '¿Incluye dominio y hosting?',
			a: 'El primer año de dominio y hosting está incluido. A partir del segundo año el servicio tiene un costo de USD 60/año que puedes contratar con nosotros.'
		},
		{
			q: '¿Puedo pedir cambios después de la entrega?',
			a: 'Sí. El proyecto incluye 1 revisión durante el desarrollo y 30 días de soporte post-entrega. Para cambios continuos ofrecemos mantención mensual desde USD 50/mes.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Landing Page Profesional',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '400', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Sitios Web', item: `${SITE.url}/sitios/` },
					{ '@type': 'ListItem', position: 3, name: 'Landing Page', item: canonical }
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
	<title>Landing Page Profesional desde USD 400 · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Landing Page Profesional desde USD 400 · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Sitios Web', href: '/sitios/' }, { label: 'Landing Page' }]}
	eyebrow="Landing Page"
	icon="rocket"
	title="Una página que convierte visitantes en clientes"
	subtitle="Ideal para campañas, lanzamientos y servicios concretos. Diseño profesional, carga rápida y formulario integrado para captar clientes desde el primer día."
	price="USD 400"
	days="Entrega en 7 días"
	ctaPrimary={{ label: 'Quiero mi landing', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="La herramienta más rápida para captar clientes">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Una landing page es una página web única, diseñada con un solo propósito: convertir al
			visitante en un contacto o en una venta. A diferencia de un sitio completo con muchas
			secciones, la landing elimina las distracciones y concentra toda la atención del usuario en
			una sola acción clara, como escribirte por WhatsApp, llamarte o dejar sus datos.
		</p>
		<p>
			Es la solución ideal cuando necesitas resultados rápidos: el lanzamiento de un producto, una
			campaña de Google Ads o redes sociales, o la promoción de un servicio específico. Como se
			enfoca en un único objetivo, suele tener tasas de conversión mucho más altas que una página
			de inicio tradicional.
		</p>
		<p>
			En CoreWerk diseñamos tu landing con una estructura probada de conversión: un titular potente,
			beneficios claros, prueba social y llamados a la acción visibles en todo momento. Todo
			optimizado para cargar rápido y verse perfecto en el celular, que es donde ocurre la mayoría
			de las conversiones en Chile.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Todo lo necesario para empezar a convertir" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'palette', title: 'Diseño profesional', desc: 'Diseño a medida alineado a tu marca, con estructura orientada a conversión.' },
			{ icon: 'phone', title: 'Responsive mobile', desc: 'Se ve y funciona perfecto en celular, tablet y computador.' },
			{ icon: 'chat', title: 'WhatsApp + formulario', desc: 'Botón directo a WhatsApp y formulario de contacto integrado.' },
			{ icon: 'zap', title: 'Carga ultra rápida', desc: 'Optimizada para cargar en segundos, incluso en redes móviles.' },
			{ icon: 'search', title: 'SEO básico', desc: 'Estructura, títulos y metadatos listos para Google.' },
			{ icon: 'shield', title: 'SSL + dominio 1 año', desc: 'Certificado de seguridad y dominio incluidos el primer año.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si te identificas con esto">
	<CheckList
		cols={2}
		items={[
			'Vas a lanzar una campaña de Google Ads o redes y necesitas dónde aterrizar a los clientes.',
			'Ofreces un servicio concreto y quieres generar consultas por WhatsApp.',
			'Estás lanzando un producto o promoción y necesitas presencia rápida.',
			'Quieres una primera presencia digital profesional sin invertir en un sitio completo.',
			'Necesitas medir y mejorar cuántos visitantes se transforman en clientes.',
			'Buscas algo listo en una semana, no en meses.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De la idea a tu landing publicada" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior highlight="Starter" />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Listo para captar más clientes?"
	text="Cuéntanos sobre tu negocio y te entregamos una propuesta con diseño, plazo y precio fijo. Tu landing puede estar lista en 7 días."
	waMsg="Hola CoreWerk, quiero una Landing Page Profesional (desde USD 400)."
/>
