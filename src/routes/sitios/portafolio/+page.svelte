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
		'Portafolio profesional en 10 días, desde USD 600. Galería de proyectos, página sobre ti y contacto. Para creativos, diseñadores y profesionales que necesitan destacar en Antofagasta y Chile.';
	const canonical = `${SITE.url}/sitios/portafolio/`;

	const faqLocal = [
		{
			q: '¿Cuántos proyectos puedo mostrar?',
			a: 'Ilimitados. La galería crece con tu trabajo. Puedes organizarlos por categoría, fecha o cliente. Cada proyecto puede tener múltiples fotos, descripción y enlace al sitio vivo si existe.'
		},
		{
			q: '¿Puedo incluir un blog en el portafolio?',
			a: 'Sí, es un agregado común. Muchos creativos publican procesos, tips o reflexiones sobre diseño. Cuesta extra pero es muy efectivo para SEO y para que clientes vean tu pensamiento.'
		},
		{
			q: '¿Cómo muestro contactos o trabajos confidenciales?',
			a: 'Puedes mostrar solo algunos proyectos públicamente. Los demás los describes en el portafolio sin revelar cliente, o los guardas en una galería privada que compartes solo bajo solicitud.'
		},
		{
			q: '¿Es bueno para atraer clientes nuevos?',
			a: 'Muy bueno. Un portafolio bien hecho es tu mejor herramienta de venta. Clientes ven tu trabajo antes de cualquier cosa. Por eso el diseño tiene que brillar.'
		},
		{
			q: '¿Puedo vender servicios desde el portafolio?',
			a: 'Sí, puedes integrar un formulario de solicitud de presupuesto o WhatsApp directo. Muchos creativos usan el portafolio para generar consultas y cotizar desde ahí.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Portafolio Profesional',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '600', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Sitios Web', item: `${SITE.url}/sitios/` },
					{ '@type': 'ListItem', position: 3, name: 'Portafolio', item: canonical }
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
	<title>Portafolio desde USD 600 · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Portafolio desde USD 600 · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Sitios Web', href: '/sitios/' }, { label: 'Portafolio' }]}
	eyebrow="Portafolio"
	icon="palette"
	title="Tu trabajo merece ser visto con elegancia"
	subtitle="Galería profesional de proyectos, página sobre ti y contacto. La herramienta perfecta para que clientes vean tu talento y confíen en ti."
	price="USD 600"
	days="Entrega en 10 días"
	ctaPrimary={{ label: 'Quiero mi portafolio', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="Tu trabajo brillando en internet">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Un portafolio es la puerta de entrada para que tus clientes vean tu trabajo. No es un blog ni
			un sitio corporativo: es una galería limpia, elegante y rápida donde cada proyecto brilla. Diseñadores,
			fotógrafos, ilustradores, artistas, programadores y creativos en general necesitan un portafolio
			profesional para cerrar proyectos y cobrar bien.
		</p>
		<p>
			El nuestro está diseñado especialmente para creativos: galería visual que impacta, página "sobre mí"
			que cuenta quién eres y por qué eres diferente, y formulario de contacto o WhatsApp directo para
			que los clientes te escriban. Todo optimizado en velocidad y SEO, porque los creativos merecen que
			Google los encuentre cuando busquen servicios como los tuyos.
		</p>
		<p>
			Es la inversión más inteligente que puede hacer un profesional creativo. En 10 días tienes una
			presencia online que genera consultas, impresiona a potenciales clientes y te diferencia de la competencia.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Todo para que tu trabajo luzca" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'palette', title: 'Galería visual impactante', desc: 'Diseño limpio que deja que tu trabajo brille, sin distracciones.' },
			{ icon: 'phone', title: 'Mobile-first elegante', desc: 'Se ve increíble en celular, tablet y computador.' },
			{ icon: 'chat', title: 'Contacto directo', desc: 'Formulario o WhatsApp integrado para que clientes te escriban al instante.' },
			{ icon: 'search', title: 'SEO optimizado', desc: 'Estructura para que Google te encuentre cuando busquen tu tipo de trabajo.' },
			{ icon: 'zap', title: 'Carga ultra rápida', desc: 'Imágenes optimizadas, carga instantánea incluso con galerías pesadas.' },
			{ icon: 'shield', title: 'SSL + Dominio', desc: 'Certificado de seguridad y dominio incluidos el primer año.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="El portafolio es esencial si eres">
	<CheckList
		cols={2}
		items={[
			'Diseñador gráfico, UX/UI o web buscando impresionar a clientes nuevos.',
			'Fotógrafo o videógrafo que necesita mostrar tu estilo sin decir nada.',
			'Ilustrador, artista o creativo que vende por encargos o comisiones.',
			'Profesional independiente: freelancer, consultor o especialista en tu área.',
			'Agencia pequeña que busca atraer clientes de mayor escala.',
			'Creativo que quiere diferenciarse en tu mercado local con presencia digital sólida.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De la idea a tu portafolio publicado" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior highlight="Starter" />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Listo para que tu trabajo brille?"
	text="Envíanos tus mejores proyectos y te entregaremos un portafolio elegante, rápido y generador de clientes. Listo en 10 días."
	waMsg="Hola CoreWerk, quiero un Portafolio Profesional (desde USD 600)."
/>
