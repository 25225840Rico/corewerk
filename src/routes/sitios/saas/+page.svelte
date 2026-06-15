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
		'Aplicación web SaaS en 45 días, desde USD 3.000. Con autenticación, panel de usuario, suscripciones y lógica de negocio a medida. Para emprendedores tech en Antofagasta y Chile.';
	const canonical = `${SITE.url}/sitios/saas/`;

	const faqLocal = [
		{
			q: '¿Qué es SaaS?',
			a: 'SaaS (Software as a Service) es una aplicación web que los usuarios pagan para usar. No descargan nada: entran con usuario y contraseña, y usan tu software desde el navegador. Ejemplos: Figma, Slack, Notion.'
		},
		{
			q: '¿Cuánto tiempo toma desarrollar una SaaS?',
			a: 'Depende de complejidad. Un MVP (producto mínimo viable) con funcionalidades básicas toma 30-45 días. Proyectos más complejos pueden tomar 2-3 meses. Definimos el alcance exacto en la propuesta.'
		},
		{
			q: '¿Incluye suscripciones recurrentes?',
			a: 'Sí. Integramos Stripe, Mercado Pago o tu proveedor preferido para cobrar suscripciones mensuales o anuales. Panel de facturación, cancelaciones y reintentos automáticos incluidos.'
		},
		{
			q: '¿Qué pasa con el escalamiento cuando crece?',
			a: 'La arquitectura está diseñada para crecer. Usando bases de datos modernas y servidores escalables, tu SaaS puede pasar de 100 a 100.000 usuarios sin cambios arquitectónicos.'
		},
		{
			q: '¿Puedo hacer cambios después de lanzar?',
			a: 'Por supuesto. La mayoría de SaaS evolucionan con feedback de usuarios. Incluimos 60 días de soporte y fácil iteración. Después puedes contratar horas de desarrollo según necesites.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Aplicación Web SaaS',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '3000', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Sitios Web', item: `${SITE.url}/sitios/` },
					{ '@type': 'ListItem', position: 3, name: 'SaaS / App Web', item: canonical }
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
	<title>SaaS desde USD 3.000 · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="SaaS desde USD 3.000 · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Sitios Web', href: '/sitios/' }, { label: 'SaaS / App Web' }]}
	eyebrow="SaaS / App Web"
	icon="dashboard"
	title="Tu idea convertida en software que genera ingresos"
	subtitle="Aplicación web con autenticación, panel de usuario, suscripciones y lógica de negocio personalizada. Del MVP a la plataforma escalable lista para miles de usuarios."
	price="USD 3.000"
	days="Entrega en 45 días"
	ctaPrimary={{ label: 'Quiero desarrollar mi SaaS', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="Software que tus usuarios pagan para usar">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Una aplicación SaaS es software que los usuarios usan a través del navegador, pagando una suscripción
			mensual o anual. Es como Figma, Slack o Notion: entran con usuario y contraseña, usan la herramienta
			online y pagan. Para ti, significa ingresos recurrentes predecibles y escalables sin depender de
			proyectos únicos.
		</p>
		<p>
			A diferencia de un sitio web estático, una SaaS es una aplicación completa: usuarios se registran,
			acceden a un panel personalizado, interactúan con datos, pagan por acceso y tú recibes reportes en
			tiempo real. Puede resolver un problema específico de tu mercado, o ser una herramienta horizontal que
			cualquiera puede usar.
		</p>
		<p>
			En CoreWerk desarrollamos SaaS desde cero: arquitectura escalable, diseño de UX para usuarios casuales,
			integración de pagos recurrentes, autenticación segura y todo listo para que lances tu MVP (producto
			mínimo viable) y empieces a cobrar desde el primer mes. Después crece con feedback de tus usuarios.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Todo para lanzar tu aplicación web" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'code', title: 'Desarrollo full stack', desc: 'Backend, frontend, base de datos y servidor todo integrado y escalable.' },
			{ icon: 'users', title: 'Autenticación segura', desc: 'Registro, login, recuperación de contraseña con encriptación de nivel empresa.' },
			{ icon: 'dashboard', title: 'Panel de usuario', desc: 'Interfaz intuitiva donde tus usuarios interactúan con datos y funcionalidades.' },
			{ icon: 'cart', title: 'Suscripciones', desc: 'Cobros recurrentes integrados (Stripe, Mercado Pago), facturas automáticas.' },
			{ icon: 'server', title: 'Infraestructura sólida', desc: 'Servidor escalable, respaldos automáticos, SSL incluido, uptime 99.9%.' },
			{ icon: 'shield', title: 'Seguridad y compliance', desc: 'Encriptación de datos, backups frecuentes, HTTPS en todo, políticas de privacidad.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si tienes una idea de software que">
	<CheckList
		cols={2}
		items={[
			'Resuelve un problema específico de tu mercado o industria.',
			'Puede cobrar una suscripción mensual o anual a múltiples usuarios.',
			'Genera datos, reportes o valor ongoing para el usuario.',
			'Necesita estar online 24/7 y ser accesible desde cualquier dispositivo.',
			'Puede crecer de 10 a 10.000 usuarios sin cambios arquitectónicos.',
			'Quieres ingresos recurrentes predecibles, no proyectos puntuales.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De la idea a tu SaaS publicada" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior highlight="Enterprise" />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Tienes una idea de software?"
	text="Cuéntanos qué problema resuelve, quiénes son tus usuarios y cómo piensas cobrar. Haremos un diagnóstico y te presentaremos una propuesta con alcance, plazo y precio. Tu SaaS puede estar lista en 45 días."
	waMsg="Hola CoreWerk, quiero desarrollar una SaaS / App Web (desde USD 3.000)."
/>
