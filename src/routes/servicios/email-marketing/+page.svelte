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
		'Email marketing desde USD 400/mes. Campañas segmentadas, automatización, nurture. Comunica con tus clientes directamente y aumenta retención. Para empresas de Antofagasta y todo Chile.';
	const canonical = `${SITE.url}/servicios/email-marketing/`;

	const faqLocal = [
		{
			q: '¿El email marketing funciona en 2025?',
			a: 'Absolutamente. Email tiene el ROI más alto de todos los canales: por cada USD 1 invertido, retornan USD 40. Porque es directo, sin intermediarios, solo tú y tu cliente.'
		},
		{
			q: '¿De dónde sacamos los emails de nuestros clientes?',
			a: 'De donde ya están: tu base de datos actual, tu CRM, suscriptores de tu blog, o los que dejaron sus datos en tu sitio. Si no tienes base, podemos construir una con lead magnets y landing pages.'
		},
		{
			q: '¿Es spam enviar tantos emails?',
			a: 'No si los hagas bien. Emails personalizados, con contenido que importa al usuario, con frecuencia que él consintió. Eso es email marketing. Los usuarios aman recibir contenido que les sirve.'
		},
		{
			q: '¿Qué diferencia hay entre newsletters y email de ventas?',
			a: 'Newsletter: contenido informativo, educativo, sin vender directo. Email de ventas: promociones, descuentos, llamados a la compra. Usamos ambos en equilibrio para mantener engagement sin spam.'
		},
		{
			q: '¿Cómo medimos el éxito del email marketing?',
			a: 'Open rate (qué % abre), click rate (qué % hace clic), conversion rate (qué % compra), unsubscribe rate (qué % se desuscribe). Te reportamos mensualmente con análisis y recomendaciones.'
		},
		{
			q: '¿Necesito una base de datos grande?',
			a: 'No. Podemos empezar con 500 contactos. Mientras más segmentada sea la base (por interés, histórico de compra, etc.), mejores resultados. Calidad sobre cantidad siempre.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Email Marketing Profesional',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '400', priceCurrency: 'USD', priceValidUntil: '2026-12-31' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE.url}/servicios/` },
					{ '@type': 'ListItem', position: 3, name: 'Email Marketing', item: canonical }
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
	<title>Email Marketing desde USD 400/mes · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Email Marketing desde USD 400/mes · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios/' }, { label: 'Email Marketing' }]}
	eyebrow="Email Marketing"
	icon="mail"
	title="Comunica directo con tus clientes, sin intermediarios"
	subtitle="Campañas segmentadas, automatización, personalizacion. Aumenta retención, recompra y recomendaciones. ROI más alto de todos los canales. Desde USD 400/mes."
	price="USD 400/mes"
	days="Primeras campañas en 7 días"
	ctaPrimary={{ label: 'Activar email', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="Email como herramienta de comunicación estratégica">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Email marketing no es enviar newsletters al azar. Es comunicación estratégica, segmentada y automatizada hacia clientes que ya te conocen. El mejor ROI de marketing: por cada USD 1 invertido, retornan USD 40 en ventas.
		</p>
		<p>
			Diferencia de otros canales: email es tuyo. No depende de algoritmos de redes sociales, no necesitas pagar para llegar a tu audiencia, y el mensaje llega directamente a la bandeja de entrada del cliente. Es el canal más controlado y confiable.
		</p>
		<p>
			En CoreWerk configuramos tu plataforma de email, segmentamos tu base de clientes, creamos campañas personalizadas, automatizamos follow-ups y medimos cada resultado. Tu equipo recibe reportes claros de open rates, clicks y conversiones.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Email marketing completo" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'mail', title: 'Plataforma configurada', desc: 'Seleccionamos y configuramos la mejor herramienta para tu escala.' },
			{ icon: 'users', title: 'Segmentación de base', desc: 'Organizamos tus contactos por interés, comportamiento e histórico de compra.' },
			{ icon: 'file', title: 'Creación de campañas', desc: 'Escribimos y diseñamos emails atractivos, mobile-friendly.' },
			{ icon: 'zap', title: 'Automatización', desc: 'Secuencias automáticas por acciones: compra, inscripción, abandono de carrito.' },
			{ icon: 'chart', title: 'A/B Testing', desc: 'Probamos asuntos, textos y llamados para mejorar resultados.' },
			{ icon: 'dashboard', title: 'Reportes semanales', desc: 'Open rate, click rate, conversiones y recomendaciones de mejora.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si...">
	<CheckList
		cols={2}
		items={[
			'Ya tienes clientes pero no les comunicas regularmente.',
			'Quieres vender más a clientes existentes sin adquirir nuevos.',
			'Necesitas aumentar retención y frecuencia de compra.',
			'Tienes un e-commerce con carritos abandonados que nunca recuperas.',
			'Quieres una herramienta de comunicación que no dependa de redes sociales.',
			'Buscas automatizar mensajes según el comportamiento del cliente.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="Implementación paso a paso" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Email marketing con alto retorno" align="center">
	<PreciosInterior />
</InteriorSection>

<InteriorSection eyebrow="Dudas frecuentes" title="Preguntas sobre email marketing" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Listo para comunicar directo con tus clientes?"
	text="Revisamos tu base de datos actual y diseñamos una estrategia de email adaptada a tu negocio. Incluye segmentación, primeras campañas y medición de resultados."
	waMsg="Hola CoreWerk, necesito email marketing profesional (desde USD 400/mes)."
/>
