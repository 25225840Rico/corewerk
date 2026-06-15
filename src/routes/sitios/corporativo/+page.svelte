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
		'Sitio corporativo profesional en 15 días, desde USD 900. Entre 5 y 8 páginas con identidad de marca, servicios, equipo y contacto. Transmite confianza a tus clientes de Antofagasta y todo Chile.';
	const canonical = `${SITE.url}/sitios/corporativo/`;

	const faqLocal = [
		{
			q: '¿Cuántas páginas incluye un sitio corporativo?',
			a: 'Entre 5 y 8 páginas según tu negocio: inicio, sobre nosotros, servicios/productos, equipo, blog (opcional), galería, contacto y políticas. Definimos la estructura exacta durante el diagnóstico.'
		},
		{
			q: '¿Puedo agregar más servicios después de lanzado?',
			a: 'Sí. El sitio se diseña para que puedas agregar páginas o contenido sin ayuda técnica. Si prefieres que nosotros hagamos los cambios, contrata nuestra mantención mensual (USD 50/mes) o actualización puntual (USD 30/vez).'
		},
		{
			q: '¿El sitio ayuda con Google Ads o SEO?',
			a: 'Sí. Entregamos el sitio optimizado para SEO: estructura HTML correcta, metadatos, velocidad de carga y mobile-first. Si quieres posicionamiento pagado o estrategia de contenido, ese es un servicio complementario de marketing digital.'
		},
		{
			q: '¿Necesitamos hacer cambios durante el desarrollo?',
			a: 'Es normal. El proyecto incluye 3 revisiones durante los 15 días. Después puedes contratar soporte continuo o solicitar cambios puntuales. Todo definido sin sorpresas.'
		},
		{
			q: '¿Qué pasa si necesitamos un e-commerce en el futuro?',
			a: 'Puedes partir con un sitio corporativo y migrar a e-commerce después. O si lo necesitas desde el inicio, recomendamos empezar directo con nuestro plan e-commerce (USD 1.200, 20 días).'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Sitio Corporativo Profesional',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '900', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Sitios Web', item: `${SITE.url}/sitios/` },
					{ '@type': 'ListItem', position: 3, name: 'Sitio Corporativo', item: canonical }
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
	<title>Sitio Corporativo desde USD 900 · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Sitio Corporativo desde USD 900 · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Sitios Web', href: '/sitios/' }, { label: 'Sitio Corporativo' }]}
	eyebrow="Sitio Corporativo"
	icon="building"
	title="Tu empresa presentada con profesionalismo"
	subtitle="Entre 5 y 8 páginas con identidad de marca, descripción clara de servicios, equipo y formulario de contacto. La presencia digital que transmite confianza y genera consultas."
	price="USD 900"
	days="Entrega en 15 días"
	ctaPrimary={{ label: 'Quiero mi sitio', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="El sitio web que convierte clientes">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Un sitio corporativo es la tarjeta de presentación digital de tu empresa. A diferencia de una
			landing page que busca una acción inmediata, un sitio corporativo te da espacio para contar
			la historia de tu negocio: quiénes sois, qué hacen, cómo lo hacen y por qué confían en ustedes.
		</p>
		<p>
			Típicamente tiene entre 5 y 8 páginas: una página de inicio que atrapa, secciones de servicios
			o productos con descripción detallada, una página "sobre nosotros" donde presentas el equipo
			y los valores, galería de trabajos o clientes, un blog para generar autoridad, y por supuesto
			un formulario de contacto o WhatsApp integrado para que los clientes sepan cómo llegar a ti.
		</p>
		<p>
			En CoreWerk diseñamos el sitio corporativo como una herramienta de negocio: estructura lógica,
			diseño que refleja tu marca, velocidad de carga optimizada y todo optimizado para que Google
			te encuentre. El resultado es un sitio que no solo se ve profesional, sino que genera consultas
			y convierte visitantes en clientes reales.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Todo lo necesario para presencia profesional" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'palette', title: 'Diseño a medida', desc: 'Identidad visual coherente en todas las páginas, alineado a tu marca.' },
			{ icon: 'phone', title: 'Responsive completo', desc: 'Se ve perfecto en celular, tablet y computador con navegación fluida.' },
			{ icon: 'chat', title: 'WhatsApp integrado', desc: 'Botón flotante y formularios directos para contacto inmediato.' },
			{ icon: 'search', title: 'SEO Básico', desc: 'Estructura, títulos, metadatos y velocidad listos para Google.' },
			{ icon: 'zap', title: 'Carga ultra rápida', desc: 'Optimizado para conexiones móviles lentas y buena experiencia de usuario.' },
			{ icon: 'shield', title: 'SSL + Dominio', desc: 'Certificado de seguridad y dominio incluidos el primer año.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si tu empresa necesita">
	<CheckList
		cols={2}
		items={[
			'Presencia profesional que transmita confianza y credibilidad.',
			'Mostrar tus servicios, productos o equipo de forma clara y organizada.',
			'Generar consultas y leads de manera consistente.',
			'Una base sólida para futura expansión (blog, e-commerce, agentes IA).',
			'Controlar tu propia presencia sin depender de redes sociales.',
			'Posicionar tu empresa como referente en tu rubro en Google.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De la idea a tu sitio publicado" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior highlight="Profesional" />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Listo para una presencia profesional?"
	text="Cuéntanos sobre tu empresa y te entregamos una propuesta con diseño, estructura, plazo y precio fijo. Tu sitio puede estar lista en 15 días."
	waMsg="Hola CoreWerk, quiero un Sitio Corporativo Profesional (desde USD 900)."
/>
