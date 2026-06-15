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
		'Consultoría e implementación de IA para empresas en Chile. Diagnóstico, hoja de ruta y acompañamiento en la adopción de inteligencia artificial. Desde USD 500. CoreWerk Antofagasta.';
	const canonical = `${SITE.url}/inteligencia-artificial/consultoria-ia/`;

	const faqLocal = [
		{
			q: '¿Qué incluye la consultoría de IA?',
			a: 'Incluye un diagnóstico del estado digital actual de tu empresa, identificación de los 3 procesos con mayor potencial de automatización con IA, evaluación de herramientas disponibles versus las necesidades reales, y una hoja de ruta priorizada de implementación con presupuesto estimado para cada iniciativa.'
		},
		{
			q: '¿Necesito saber de tecnología para hacer la consultoría?',
			a: 'No. La consultoría está diseñada para líderes de negocio, no para técnicos. Usamos lenguaje claro, ejemplos concretos del rubro de tu empresa y entregamos un plan accionable que cualquier persona del equipo puede entender y ejecutar.'
		},
		{
			q: '¿La consultoría incluye la implementación?',
			a: 'La consultoría es la fase de diagnóstico y planificación. La implementación de los agentes o automatizaciones que se definan en la hoja de ruta se cotiza por separado. Sin embargo, muchos clientes contratan ambas fases con CoreWerk para mantener continuidad.'
		},
		{
			q: '¿Cuánto tiempo dura el proceso de consultoría?',
			a: 'La consultoría toma entre 1 y 3 semanas según el tamaño y complejidad de la empresa. Incluye sesiones de levantamiento de información, análisis del estado actual y presentación del informe y hoja de ruta.'
		},
		{
			q: '¿Trabajan con empresas de cualquier rubro?',
			a: 'Sí. Hemos trabajado con empresas de retail, servicios, salud, construcción, logística, inmobiliaria y educación, entre otros. Los principios de automatización con IA aplican a cualquier rubro donde existan procesos repetitivos y datos estructurados.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Consultoría e Implementación IA',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '500', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Inteligencia Artificial', item: `${SITE.url}/inteligencia-artificial/` },
					{ '@type': 'ListItem', position: 3, name: 'Consultoría IA', item: canonical }
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
	<title>Consultoría e Implementación IA desde USD 500 · CoreWerk Chile</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Consultoría e Implementación IA desde USD 500 · CoreWerk Chile" />
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
		{ label: 'Consultoría IA' }
	]}
	eyebrow="Consultoría IA"
	icon="spark"
	title="Antes de implementar IA, asegúrate de implementar la correcta"
	subtitle="Diagnóstico honesto del estado digital de tu empresa, identificación de las oportunidades reales de IA y una hoja de ruta concreta para adoptar inteligencia artificial sin desperdiciar presupuesto en proyectos que no generan valor."
	price="USD 500"
	days="Entrega en 2 semanas"
	ctaPrimary={{ label: 'Agendar consultoría', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<!-- Qué es -->
<InteriorSection ai={true} eyebrow="Qué es" title="El mapa antes de emprender el viaje">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			La consultoría de IA existe porque la inteligencia artificial no es un botón que se aprieta:
			es una transformación que, si se hace sin planificación, cuesta el doble y tarda el triple.
			Muchas empresas en Chile empiezan a implementar IA motivadas por el entusiasmo del momento,
			sin antes entender qué procesos tienen mayor potencial, qué datos necesitan y qué capacidades
			del equipo deben desarrollar.
		</p>
		<p>
			En CoreWerk hacemos primero lo que la mayoría salta: sentarnos contigo a entender tu operación
			real, mapear los procesos actuales, identificar dónde la IA genera valor real versus donde
			es solo una moda, y construir una hoja de ruta con prioridades claras, plazos realistas y
			presupuesto estimado para cada iniciativa. El resultado es un documento accionable, no un
			informe de 80 páginas que nadie lee.
		</p>
		<p>
			La consultoría incluye además una evaluación honesta: si en algún proceso la automatización
			no tiene sentido económico para el tamaño de tu empresa, te lo decimos. Preferimos que
			inviertas bien tu presupuesto en las iniciativas que sí generan retorno, aunque sean menos
			que las que podrías esperar.
		</p>
	</div>
</InteriorSection>

<!-- Qué incluye -->
<InteriorSection ai={true} eyebrow="Qué incluye" title="Diagnóstico completo y plan de acción concreto" align="center">
	<FeatureGrid
		ai={true}
		cols={3}
		items={[
			{ icon: 'search', title: 'Diagnóstico digital', desc: 'Evaluamos el estado actual de tu operación: procesos, herramientas, datos disponibles y capacidades del equipo.' },
			{ icon: 'brain', title: 'Mapa de oportunidades IA', desc: 'Identificamos los 3 a 5 procesos con mayor potencial de automatización y calculamos el impacto estimado de cada uno.' },
			{ icon: 'layers', title: 'Evaluación de herramientas', desc: 'Analizamos qué soluciones existen en el mercado para tu caso específico: cuáles convienen y cuáles no.' },
			{ icon: 'rocket', title: 'Hoja de ruta priorizada', desc: 'Plan de implementación con fases, plazos y presupuesto estimado para cada iniciativa, ordenado por impacto.' },
			{ icon: 'users', title: 'Taller con el equipo', desc: 'Sesión de trabajo con los responsables de cada área para validar el diagnóstico y resolver dudas.' },
			{ icon: 'star', title: 'Informe ejecutivo', desc: 'Documento en español, sin tecnicismos, para presentar a directivos y tomar decisiones con información clara.' }
		]}
	/>
</InteriorSection>

<!-- Para quién -->
<InteriorSection ai={true} eyebrow="Para quién" title="Ideal si te identificas con esto">
	<CheckList
		ai={true}
		cols={2}
		items={[
			'Quieres incorporar IA a tu empresa pero no sabes por dónde empezar ni qué soluciones son reales.',
			'Escuchaste sobre agentes IA, chatbots y automatización, pero no sabes cuál aplica a tu negocio.',
			'Ya intentaste una implementación de IA que no funcionó y quieres entender por qué y cómo hacerlo bien.',
			'Tienes presupuesto para invertir en tecnología y quieres asegurarte de que genere retorno real.',
			'Tu directorio o socios te están presionando para digitalizar y necesitas un plan fundamentado.',
			'Quieres comparar opciones de proveedores de IA con criterios técnicos y de negocio claros.'
		]}
	/>
</InteriorSection>

<!-- Proceso -->
<InteriorSection ai={true} eyebrow="Cómo trabajamos" title="Del primer contacto al plan de acción" align="center">
	<ProcesoInterior
		ai={true}
		steps={[
			{ n: '1', title: 'Levantamiento', desc: 'Sesiones de trabajo con los líderes de cada área para mapear procesos actuales, datos disponibles y dolores operativos.' },
			{ n: '2', title: 'Análisis', desc: 'Evaluamos cada proceso identificado contra criterios de viabilidad técnica, costo y retorno estimado con IA.' },
			{ n: '3', title: 'Hoja de ruta', desc: 'Construimos el plan de implementación priorizado con iniciativas, plazos, presupuesto y quick wins identificados.' },
			{ n: '4', title: 'Presentación', desc: 'Presentamos el informe ejecutivo, resolvemos dudas y definimos los próximos pasos de implementación.' }
		]}
	/>
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
	title="¿Sabes qué proceso de tu empresa debería automatizarse primero?"
	text="Si no tienes claridad, eso es exactamente lo que resuelve la consultoría. Conversemos 30 minutos y te decimos si tiene sentido para tu empresa, sin compromiso."
	waMsg="Hola CoreWerk, quiero agendar una consultoría de IA para mi empresa (desde USD 500)."
/>
