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
		'Automatización de procesos empresariales con IA: cotizaciones, reportes, recordatorios y onboarding. Elimina el trabajo manual desde USD 800, entrega en 15 días. CoreWerk Chile.';
	const canonical = `${SITE.url}/inteligencia-artificial/automatizacion/`;

	const faqLocal = [
		{
			q: '¿Qué procesos son automatizables con IA?',
			a: 'Los más comunes son: generación y envío de cotizaciones, reportes periódicos en PDF, recordatorios de vencimiento, notificaciones de estado de pedidos, onboarding de clientes o empleados, validaciones de formularios y sincronización de datos entre sistemas. Si un proceso tiene pasos repetitivos con reglas claras, es automatizable.'
		},
		{
			q: '¿Necesito reemplazar mis sistemas actuales?',
			a: 'No. La automatización se conecta a los sistemas que ya usas: tu correo, WhatsApp, Google Sheets, CRM, ERP o base de datos. No necesitas comprar software nuevo ni migrar datos. La IA actúa como un conector inteligente entre tus herramientas actuales.'
		},
		{
			q: '¿Qué pasa si el proceso automatizado falla?',
			a: 'Todos los flujos incluyen alertas de error. Si algo falla, recibes una notificación inmediata con el detalle del problema para que puedas intervenir. También implementamos reintentos automáticos para errores transitorios.'
		},
		{
			q: '¿Cuánto tiempo ahorra la automatización en la práctica?',
			a: 'Depende del proceso. Una automatización de cotizaciones que hoy toma 2 horas puede ejecutarse en 3 minutos. Los reportes semanales que toman medio día de trabajo pueden generarse y enviarse solos en el momento que programes. En promedio, nuestros clientes recuperan entre 5 y 15 horas semanales de trabajo manual.'
		},
		{
			q: '¿Cuánto demora implementar la automatización?',
			a: 'Los procesos más simples se automatizan en 10 días. Procesos complejos con múltiples integraciones toman hasta 25 días. En todos los casos definimos el plazo exacto en la propuesta antes de empezar.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Automatización de Procesos con IA',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '800', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Inteligencia Artificial', item: `${SITE.url}/inteligencia-artificial/` },
					{ '@type': 'ListItem', position: 3, name: 'Automatización', item: canonical }
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
	<title>Automatización de Procesos con IA desde USD 800 · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Automatización de Procesos con IA desde USD 800 · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	ai={true}
	breadcrumbs={[
		{ label: 'Inicio', href: '/' },
		{ label: 'Inteligencia Artificial', href: '/inteligencia-artificial/' },
		{ label: 'Automatización' }
	]}
	eyebrow="Automatización de Procesos"
	icon="automation"
	title="Elimina el trabajo manual que frena tu operación"
	subtitle="Automatizamos los procesos repetitivos que consumen el tiempo de tu equipo: cotizaciones, reportes, recordatorios y onboarding, integrados a WhatsApp, email y tus sistemas actuales."
	price="USD 800"
	days="Entrega en 15 días"
	ctaPrimary={{ label: 'Automatizar mi proceso', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<!-- Qué es -->
<InteriorSection ai={true} eyebrow="Qué es" title="Cada hora de trabajo manual que ahorras es una hora que tu equipo dedica a lo importante">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			La automatización de procesos consiste en traspasar a sistemas inteligentes las tareas que
			hoy hace tu equipo de forma manual y repetitiva. No se trata de reemplazar personas, sino
			de liberar su tiempo para que puedan dedicarse a las actividades que realmente requieren
			criterio humano, creatividad y relación con los clientes.
		</p>
		<p>
			Los procesos más comunes que automatizamos en empresas chilenas son: generación de cotizaciones
			a partir de formularios web, envío de reportes de KPIs por WhatsApp o correo en días y horarios
			definidos, recordatorios automáticos de vencimientos de contratos o pagos, onboarding digital
			de clientes nuevos, y sincronización de datos entre sistemas que hoy se hace manualmente con
			planillas de Excel.
		</p>
		<p>
			En CoreWerk analizamos primero el proceso actual (cómo se hace hoy, cuánto tarda, dónde
			ocurren los errores), luego diseñamos el flujo automatizado y lo implementamos con integración
			a las herramientas que ya usas. No necesitas cambiar de sistema ni comprar software adicional.
			La automatización trabaja sobre lo que tienes.
		</p>
	</div>
</InteriorSection>

<!-- Qué incluye -->
<InteriorSection ai={true} eyebrow="Qué incluye" title="Todo para dejar el proceso funcionando solo" align="center">
	<FeatureGrid
		ai={true}
		cols={3}
		items={[
			{ icon: 'search', title: 'Diagnóstico del proceso', desc: 'Mapeamos el flujo actual, identificamos cuellos de botella y definimos el alcance exacto de la automatización.' },
			{ icon: 'layers', title: 'Flujo automatizado', desc: 'Construimos el proceso automatizado con lógica condicional, manejo de errores y reintentos automáticos.' },
			{ icon: 'send', title: 'Integración email + WhatsApp', desc: 'El proceso se conecta a los canales que tus clientes y equipo ya usan, sin necesidad de apps nuevas.' },
			{ icon: 'zap', title: 'Ejecución en tiempo real o programada', desc: 'Puedes automatizar tareas al instante (cuando ocurre un evento) o en horarios fijos definidos por ti.' },
			{ icon: 'file', title: 'Manual de uso', desc: 'Documentación clara de cómo funciona el proceso, cómo intervenir y cómo ajustar reglas.' },
			{ icon: 'shield', title: '60 días de soporte', desc: 'Ajustamos y monitoreamos el proceso durante los primeros 60 días para garantizar que funciona como esperado.' }
		]}
	/>
</InteriorSection>

<!-- Para quién -->
<InteriorSection ai={true} eyebrow="Para quién" title="Ideal si te identificas con esto">
	<CheckList
		ai={true}
		cols={2}
		items={[
			'Tu equipo pierde horas semanales preparando y enviando cotizaciones manualmente.',
			'Generas reportes en Excel que copias y pegas en correos a gerencia cada semana.',
			'Los clientes no reciben recordatorios automáticos y se te olvidan fechas importantes.',
			'El proceso de onboarding de clientes nuevos depende de que alguien lo haga a mano.',
			'Tienes datos en dos o más sistemas que no se sincronizan solos y requieren actualización manual.',
			'Buscas reducir errores humanos en procesos críticos de tu operación.'
		]}
	/>
</InteriorSection>

<!-- Proceso -->
<InteriorSection ai={true} eyebrow="Cómo trabajamos" title="Del proceso manual al proceso automatizado" align="center">
	<ProcesoInterior ai={true} />
</InteriorSection>

<!-- Precios -->
<InteriorSection id="precios" ai={true} eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior ai={true} highlight="Starter" />
</InteriorSection>

<!-- FAQ -->
<InteriorSection ai={true} eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	ai={true}
	title="¿Qué proceso te gustaría dejar de hacer a mano?"
	text="Cuéntanos el flujo que más tiempo les consume y en 48 horas te mostramos cómo lo automatizaríamos, con costo y plazo exacto. Sin compromiso."
	waMsg="Hola CoreWerk, quiero automatizar un proceso de mi empresa (desde USD 800)."
/>
