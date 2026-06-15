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
		'Diseño web profesional y responsive desde USD 600. Sitios modernos orientados a conversión, optimizados para móvil y Google. Para empresas de Antofagasta y todo Chile.';
	const canonical = `${SITE.url}/servicios/diseno-web/`;

	const faqLocal = [
		{
			q: '¿Qué diferencia hay entre diseño web y desarrollo web?',
			a: 'El diseño se enfoca en cómo se ve el sitio: colores, tipografía, layout, imágenes. El desarrollo es el código que lo hace funcionar. Trabajamos ambos, pero si quieres solo mejoras visuales, ofrecemos diseño web como servicio independiente.'
		},
		{
			q: '¿El sitio se verá bien en celular?',
			a: 'Sí, es obligatorio. Todos nuestros diseños son responsive: se adaptan perfectamente a smartphones, tablets y computadores. Además, optimizamos para velocidad de carga en conexiones móviles.'
		},
		{
			q: '¿Puedo hacer cambios después de entregado el sitio?',
			a: 'Totalmente. El proyecto incluye 2 revisiones durante el diseño y 30 días de soporte post-entrega. Para cambios continuos ofrece nuestro servicio de Mantención Web desde USD 50/mes.'
		},
		{
			q: '¿Cuánto demora tener mi sitio diseñado y publicado?',
			a: 'Entre 10 y 15 días hábiles desde la aprobación del contenido. Si es un rediseño de un sitio existente, es más rápido.'
		},
		{
			q: '¿El diseño ayuda en SEO?',
			a: 'Sí, indirectamente. Un buen diseño mejora la experiencia del usuario, reduce el bounce rate y aumenta el tiempo en página, lo que ayuda al posicionamiento. Además, implementamos estructura semántica y metadatos listos para Google.'
		},
		{
			q: '¿Qué incluye el precio de USD 600?',
			a: 'Incluye consultoría visual, moodboard, diseño de homepage + 3–4 páginas interiores, responsive design, integración básica de formularios y 30 días de soporte.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Diseño Web Profesional',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '600', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE.url}/servicios/` },
					{ '@type': 'ListItem', position: 3, name: 'Diseño Web', item: canonical }
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
	<title>Diseño Web Profesional desde USD 600 · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Diseño Web Profesional desde USD 600 · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios/' }, { label: 'Diseño Web' }]}
	eyebrow="Diseño Web"
	icon="palette"
	title="Tu sitio web a la medida de tu marca"
	subtitle="Diseño profesional, moderno y orientado a conversión. Responsive en todos los dispositivos, carga rápida y optimizado para Google. Desde USD 600, entrega en 10 días."
	price="USD 600"
	days="Entrega en 10 días"
	ctaPrimary={{ label: 'Solicitar diseño', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="Diseño web que convierte visitantes en clientes">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			El diseño web es la primera impresión de tu negocio en internet. Un buen diseño no solo se ve bonito: comunica profesionalismo, genera confianza y guía al visitante hacia la acción que quieres que realice: contactarte, comprar, registrarse o solicitar información.
		</p>
		<p>
			En CoreWerk diseñamos sitios que entienden el comportamiento del usuario. Cada elemento tiene propósito: desde la tipografía que facilita la lectura, hasta los colores que transmiten tu identidad de marca y los botones de llamado a la acción estratégicamente posicionados. Todo pensado para que el visitante tenga la mejor experiencia posible.
		</p>
		<p>
			Además, nuestros diseños son 100% responsive: se ven y funcionan perfectamente en computadores, tablets y celulares. Y los optimizamos para cargar rápido, que es crítico en Chile donde muchos clientes navegan desde conexiones móviles. Un sitio que carga en 3 segundos tiene 3 veces más conversiones que uno que tarda 10.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Tu sitio listo para operar" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'palette', title: 'Diseño a medida', desc: 'Creado especialmente para tu marca, no es un template genérico.' },
			{ icon: 'mobile', title: 'Responsive mobile', desc: 'Se adapta perfectamente a cualquier tamaño de pantalla.' },
			{ icon: 'zap', title: 'Carga ultra rápida', desc: 'Optimizado para milisegundos, incluso en redes 4G.' },
			{ icon: 'search', title: 'SEO base incluido', desc: 'Estructura semántica, títulos, metadatos listos para Google.' },
			{ icon: 'mail', title: 'Formularios integrados', desc: 'Captura de leads, contacto y conexión WhatsApp lista.' },
			{ icon: 'shield', title: 'Seguridad SSL', desc: 'Certificado de seguridad incluido, tu sitio en HTTPS.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si...">
	<CheckList
		cols={2}
		items={[
			'Necesitas un sitio web pero no sabes qué debe incluir exactamente.',
			'Tienes un sitio viejo y anticuado que debe verse moderno.',
			'Quieres mejorar la experiencia del usuario sin reconstruir todo.',
			'Buscas un diseño que se vea igual de bien en celular que en computador.',
			'Necesitas un sitio rápido, porque la velocidad afecta ventas.',
			'Quieres algo profesional sin pagar precios de grandes agencias.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De tu idea al sitio publicado" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio claro, sin sorpresas" align="center">
	<PreciosInterior highlight="Starter" />
</InteriorSection>

<InteriorSection eyebrow="Dudas frecuentes" title="Preguntas sobre diseño web" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Listo para un sitio web que convierte?"
	text="Cuéntanos sobre tu negocio y te presentamos un diseño tailored, con plazo y precio fijo. Tu sitio puede estar listo en 10 días."
	waMsg="Hola CoreWerk, quiero diseño web profesional para mi sitio (desde USD 600)."
/>
