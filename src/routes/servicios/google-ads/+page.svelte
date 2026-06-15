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
		'Google Ads desde USD 500/mes. Campañas de pago que traen clientes desde el primer día. Search, Display, Shopping. Para empresas de Antofagasta y todo Chile.';
	const canonical = `${SITE.url}/servicios/google-ads/`;

	const faqLocal = [
		{
			q: '¿Qué es Google Ads exactamente?',
			a: 'Es un sistema de publicidad pagada de Google. Tú estableces un presupuesto diario, Google muestra tus anuncios a gente que busca lo que ofreces, y pagas solo cuando hacen clic. Sin clics, sin costo.'
		},
		{
			q: '¿Es caro Google Ads?',
			a: 'Depende del rubro. Una clínica en Antofagasta podría gastar USD 15-30/día. Una tienda online podría invertir USD 50-100/día. Tú controlas el presupuesto diario: si no generan clientes, pausas las campañas.'
		},
		{
			q: '¿Cuándo veo resultados?',
			a: 'Desde el primer día. Los anuncios empiezan a mostrar inmediatamente. En 2-3 días tienes suficientes datos para optimizar y mejorar resultados.'
		},
		{
			q: '¿Qué diferencia hay entre Search Ads, Display y Shopping?',
			a: 'Search: anuncios en resultados de búsqueda cuando alguien busca. Display: banners en webs de terceros. Shopping: anuncios de productos con foto y precio. Recomendamos combinar según tu objetivo.'
		},
		{
			q: '¿Cómo sé que genera ROI positivo?',
			a: 'Te configuramos Google Analytics y conversion tracking. Ves cuántos clics cuesta un cliente. Si una venta tiene margen de USD 200 y cada cliente cuesta USD 40 en anuncios, el ROI es 5x.'
		},
		{
			q: '¿Incluye el servicio gestión y optimización?',
			a: 'Sí, completamente. Nosotros creamos las campañas, escribimos los anuncios, hacemos ajustes diarios de pujas, probamos nuevas palabras clave. Tú solo pagas los clics y recibe reportes mensuales.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Google Ads Profesional',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '500', priceCurrency: 'USD', priceValidUntil: '2026-12-31' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE.url}/servicios/` },
					{ '@type': 'ListItem', position: 3, name: 'Google Ads', item: canonical }
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
	<title>Google Ads desde USD 500/mes · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Google Ads desde USD 500/mes · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios/' }, { label: 'Google Ads' }]}
	eyebrow="Google Ads"
	icon="megaphone"
	title="Clientes listos a comprar desde el primer día"
	subtitle="Campañas de publicidad pagada en Google Search, Display y Shopping. Tráfico inmediato, ROI medible, gestión profesional incluida. Desde USD 500/mes."
	price="USD 500/mes"
	days="Primeros clientes en 24 horas"
	ctaPrimary={{ label: 'Activar campañas', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="Publicidad en Google que trae clientes ahora">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Google Ads es publicidad pagada. Tu negocio compite en subastas de Google: cuando alguien busca una palabra relacionada a lo que ofreces, tu anuncio aparece en primeras posiciones. Pagas solo cuando hacen clic, no por aparición.
		</p>
		<p>
			A diferencia del SEO que toma meses, Google Ads trae clientes desde el primer día. Es perfecto para lanzamientos, promociones, o cuando necesitas urgencia: "Quiero 10 clientes este mes". Google Ads los trae, si tu presupuesto lo permite.
		</p>
		<p>
			En CoreWerk gestionamos todo: investigamos palabras clave, creamos anuncios atractivos, optimizamos pujas, hacemos pruebas A/B de mensajes, ajustamos diariamente y te reportamos ROI. Tú solo autorizas el presupuesto diario y recibimos clientes calificados.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Campañas completas optimizadas" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'search', title: 'Search Ads', desc: 'Anuncios en resultados de búsqueda cuando buscan tu servicio.' },
			{ icon: 'palette', title: 'Display Ads', desc: 'Banners y anuncios visuales en webs de terceros.' },
			{ icon: 'shopping', title: 'Google Shopping', desc: 'Si tienes e-commerce, anuncios de productos con foto y precio.' },
			{ icon: 'dashboard', title: 'Gestión profesional', desc: 'Nosotros administramos, optimizamos y escalamos la inversión.' },
			{ icon: 'zap', title: 'Pruebas y ajustes', desc: 'A/B testing continuo para maximizar conversión.' },
			{ icon: 'chart', title: 'Reportes claros', desc: 'Conversiones, costo por cliente, ROI y recomendaciones.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si...">
	<CheckList
		cols={2}
		items={[
			'Necesitas clientes ahora, no puedes esperar 3 meses como el SEO.',
			'Estás lanzando un producto o servicio nuevo y quieres visibilidad inmediata.',
			'Tienes presupuesto de marketing y quieres máximo retorno por peso invertido.',
			'Ya tienes Google Analytics funcionando o podemos integrarlo fácilmente.',
			'Tu landing page o sitio web convierte bien, solo necesita más tráfico.',
			'Quieres que profesionales gestionen tus campañas, no hacerlo por tu cuenta.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="Configuración y optimización continua" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Publicidad con ROI garantizado" align="center">
	<PreciosInterior />
</InteriorSection>

<InteriorSection eyebrow="Dudas frecuentes" title="Preguntas sobre Google Ads" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Listo para clientes desde el primer día?"
	text="Te presentamos una estrategia de Google Ads con presupuesto estimado, palabras clave objetivo y proyección de clientes por mes. Sin riesgos ni sorpresas."
	waMsg="Hola CoreWerk, quiero campañas Google Ads profesionales (desde USD 500/mes)."
/>
