<script lang="ts">
	import HeroInterior from '$lib/components/interior/HeroInterior.svelte';
	import InteriorSection from '$lib/components/interior/InteriorSection.svelte';
	import CheckList from '$lib/components/interior/CheckList.svelte';
	import ProcesoInterior from '$lib/components/interior/ProcesoInterior.svelte';
	import PreciosInterior from '$lib/components/interior/PreciosInterior.svelte';
	import FaqInterior from '$lib/components/interior/FaqInterior.svelte';
	import CTAInterior from '$lib/components/interior/CTAInterior.svelte';
	import { SITE } from '$lib/seo/site';

	const description =
		'Hosting y Dominio desde USD 60/año. Servidor SSD de alto rendimiento, SSL gratuito, panel cPanel y respaldos diarios. Tu sitio siempre en línea y rápido. CoreWerk Antofagasta, Chile.';
	const canonical = `${SITE.url}/servicios-basicos/hosting-dominio/`;

	const faqLocal = [
		{
			q: '¿Qué es hosting y para qué sirve?',
			a: 'El hosting es el servidor donde vive tu sitio web. Es como el terreno donde construyes tu casa. Sin hosting, tu sitio no existe en internet. Nosotros ofrecemos hosting SSD de alto rendimiento, lo que significa que tu sitio carga rápido, incluso con muchos visitantes.'
		},
		{
			q: '¿Qué es un dominio?',
			a: 'Es el nombre de tu sitio web: tuempresa.cl o tuempresa.com. Es único en el mundo y es lo que tus clientes escriben en el navegador para encontrarte. Registramos y renovamos tu dominio automáticamente cada año.'
		},
		{
			q: '¿El hosting y dominio incluyen mi sitio web?',
			a: 'No. El hosting y dominio son el terreno y la dirección. Tu sitio web (diseño, desarrollo) es lo que construimos aparte. Pero todos nuestros sitios incluyen el primer año de hosting y dominio. A partir del segundo año pagas USD 60/año.'
		},
		{
			q: '¿Cómo sé que mi sitio está seguro?',
			a: 'Tu hosting incluye certificado SSL gratuito, que encripta la comunicación entre tu sitio y los visitantes. También incluyes respaldos automáticos diarios, así si algo falla podemos restaurar sin perder nada. Tu sitio está 100% protegido.'
		},
		{
			q: '¿Puedo elegir entre .cl, .com u otro dominio?',
			a: 'Sí. Ofrecemos dominios .cl, .com, .net, .info y otros. El precio puede variar según la extensión, pero la mayoría están incluidos en el plan. Consulta qué dominios disponibles tenemos para tu nombre.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Hosting y Dominio',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '60', priceCurrency: 'USD', priceValidUntil: '2026-12-31' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Servicios Básicos', item: `${SITE.url}/servicios-basicos/` },
					{ '@type': 'ListItem', position: 3, name: 'Hosting y Dominio', item: canonical }
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
	<title>Hosting y Dominio desde USD 60/año · CoreWerk Chile</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Hosting y Dominio desde USD 60/año · CoreWerk Chile" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios Básicos', href: '/servicios-basicos/' }, { label: 'Hosting y Dominio' }]}
	eyebrow="Hosting y Dominio"
	icon="globe"
	title="Tu sitio siempre en línea, rápido y seguro"
	subtitle="Hosting SSD de alto rendimiento, dominio incluido, SSL gratuito y respaldos automáticos diarios. Todo lo que necesitas para que tu sitio esté presente en internet 24/7."
	price="USD 60/año"
	days="Renovación automática"
	ctaPrimary={{ label: 'Contratar ahora', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver incluye', href: '#que-incluye' }}
/>

<InteriorSection eyebrow="Qué es" title="El fundamento de tu presencia en internet">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Sin hosting y dominio, tu sitio web no existe en internet. El hosting es el servidor donde vive tu sitio, donde se guardan todos tus archivos, imágenes y datos. El dominio es tu dirección en la web: tuempresa.cl. Juntos, hacen que tus clientes puedan encontrarte en cualquier momento.
		</p>
		<p>
			Pero no todos los hostings son iguales. Un hosting lento hace que tus visitantes se aburran esperando y se vayan. Un hosting inseguro puede poner en riesgo tu reputación y datos. Por eso ofrecemos hosting SSD de alto rendimiento, lo que significa que tu sitio carga en un segundo, incluso con miles de visitantes. También incluye protección 24/7, respaldos automáticos y soporte técnico siempre disponible.
		</p>
		<p>
			En CoreWerk no solo ofrecemos hosting: ofrecemos la base segura para que tu negocio funcione sin problemas. Tu sitio estará siempre activo, rápido y protegido. Eso es lo que mereces.
		</p>
	</div>
</InteriorSection>

<InteriorSection id="que-incluye" eyebrow="Qué incluye" title="Todo para tu sitio seguro y rápido" align="center">
	<CheckList
		cols={1}
		items={[
			'Dominio .cl o .com por 1 año (renovación automática)',
			'Hosting SSD de alto rendimiento',
			'Certificado SSL gratuito (conexión segura)',
			'Panel de administración cPanel',
			'Respaldos automáticos diarios de tu sitio',
			'Soporte técnico 24/7',
			'Carga ultra rápida en todo el país',
			'Sin limitaciones de tráfico'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Necesitas hosting si">
	<CheckList
		cols={2}
		items={[
			'Acabas de hacer tu primer sitio web.',
			'Tus clientes necesitan encontrarte en internet 24/7.',
			'Quieres que tu sitio cargue rápido en celular.',
			'Necesitas un dominio profesional con tu nombre.',
			'Buscas una solución confiable a bajo costo.',
			'Quieres dormir tranquilo sabiendo que tu sitio está seguro.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De la idea al hosting activo" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior highlight="Starter" />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Listo para tener tu sitio en internet?"
	text="Cuéntanos el dominio que quieres y activamos tu hosting al instante. Tu sitio estará en línea, rápido y seguro por USD 60 al año."
	waMsg="Hola CoreWerk, quiero contratar Hosting y Dominio (USD 60/año)."
/>
