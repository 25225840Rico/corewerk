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
		'Desarrollo web profesional desde USD 900. Sitios completamente personalizados, e-commerce, plataformas SaaS y aplicaciones web escalables. Para empresas de Antofagasta y todo Chile.';
	const canonical = `${SITE.url}/servicios/desarrollo-web/`;

	const faqLocal = [
		{
			q: '¿Cuál es la diferencia entre un sitio web hecho con templates vs. desarrollo personalizado?',
			a: 'Los templates son genéricos y limitados. El desarrollo personalizado es código único escrito para tu negocio específico, con funcionalidades exactas que necesitas y sin limitaciones.'
		},
		{
			q: '¿Puedo agregar funcionalidades después?',
			a: 'Sí, totalmente. El sitio está estructurado para crecer. Puedes agregar nuevas secciones, integraciones, automatizaciones y funcionalidades en el futuro sin tener que reconstruir.'
		},
		{
			q: '¿Qué tecnologías utilizan?',
			a: 'Usamos las herramientas más modernas: SvelteKit, TypeScript, bases de datos escalables, APIs REST. Todo elegido para rendimiento, seguridad y facilidad de mantenimiento a largo plazo.'
		},
		{
			q: '¿El sitio está optimizado para SEO?',
			a: 'Completamente. Todos nuestros proyectos incluyen server-side rendering, metadatos dinámicos, sitemap, robots.txt y estructura semántica para que Google entienda bien tu contenido.'
		},
		{
			q: '¿Cuánto demora un desarrollo web personalizado?',
			a: 'Entre 15 y 30 días depende de la complejidad. Un sitio corporativo típico toma 15–20 días. Un e-commerce con pagos integrados, 20–30 días.'
		},
		{
			q: '¿Incluye hosting y mantención?',
			a: 'Sí, el primer año de hosting incluye en el precio. Después puedes contratar nuestro plan de Mantención Web desde USD 50/mes para actualizaciones y soporte continuo.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Desarrollo Web Profesional',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '900', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE.url}/servicios/` },
					{ '@type': 'ListItem', position: 3, name: 'Desarrollo Web', item: canonical }
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
	<title>Desarrollo Web desde USD 900 · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Desarrollo Web desde USD 900 · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios/' }, { label: 'Desarrollo Web' }]}
	eyebrow="Desarrollo Web"
	icon="code"
	title="Código que escala con tu negocio"
	subtitle="Aplicaciones web personalizadas, e-commerce, plataformas SaaS. Desarrolladas desde cero con tecnología moderna, seguridad incluida y listas para crecer. Desde USD 900, entrega en 15 días."
	price="USD 900"
	days="Entrega en 15 días"
	ctaPrimary={{ label: 'Solicitar desarrollo', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="Desarrollo web personalizado que crece contigo">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Desarrollo web es crear un sitio desde cero usando código, en lugar de usar templates genéricos. Significa que tu sitio es 100% único, construido específicamente para tu negocio y sin limitaciones de funcionalidad.
		</p>
		<p>
			A diferencia de un sitio armado con herramientas no-code o templates, un desarrollo personalizado te permite agregar cualquier funcionalidad que necesites: pagos en línea, usuario logins, cálculos complejos, integraciones con tus sistemas existentes, reportes automáticos. Lo que imagines, lo podemos desarrollar.
		</p>
		<p>
			En CoreWerk usamos las tecnologías más modernas de la industria: SvelteKit para el frontend, TypeScript para tipo-seguridad, bases de datos escalables, APIs REST seguras. Todo pensado no solo para funcionar hoy, sino para que tu negocio crezca sin necesidad de reconstruir todo.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Desarrollo completo listo para operar" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'code', title: 'Código personalizado', desc: 'Escrito desde cero para tu caso específico, sin límites.' },
			{ icon: 'dashboard', title: 'Panel de administración', desc: 'Gestiona contenido, usuarios y operaciones sin código.' },
			{ icon: 'zap', title: 'Rendimiento máximo', desc: 'Optimizado para velocidad, incluso con miles de usuarios.' },
			{ icon: 'shield', title: 'Seguridad enterprise', desc: 'Encriptación, autenticación segura y protección contra ataques.' },
			{ icon: 'layers', title: 'Integraciones', desc: 'Conectamos con tu CRM, ERP, pasarelas de pago y más.' },
			{ icon: 'server', title: 'Infraestructura robusta', desc: 'Hosting empresarial, respaldos automáticos y redundancia.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si...">
	<CheckList
		cols={2}
		items={[
			'Necesitas un e-commerce con carrito, pagos y gestión de inventario.',
			'Quieres una plataforma SaaS o aplicación web con usuarios logins.',
			'Tienes requisitos de negocio muy específicos que templates no cubren.',
			'Necesitas integración con tus sistemas existentes (ERP, CRM, etc.).',
			'Buscas escalabilidad: tu negocio crecerá y el sitio debe crecer con él.',
			'Requieres un sistema de administración completo para gestionar sin ayuda técnica.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="Desarrollo iterativo con versiones tempranas" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Inversión clara, retorno medible" align="center">
	<PreciosInterior highlight="Profesional" />
</InteriorSection>

<InteriorSection eyebrow="Dudas frecuentes" title="Preguntas sobre desarrollo web" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Necesitas una aplicación web personalizada?"
	text="Cuéntanos qué funcionalidades necesitas y te presentamos una propuesta con arquitectura, plazo y precio fijo. Incluye reuniones semanales de avance."
	waMsg="Hola CoreWerk, necesito desarrollo web personalizado para mi negocio (desde USD 900)."
/>
