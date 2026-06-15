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
		'Asistentes IA empresariales para RRHH, gestión documental y operaciones internas. Responden en lenguaje natural, integrados a Slack y email. Desde USD 2.000, entrega en 20 días. CoreWerk.';
	const canonical = `${SITE.url}/inteligencia-artificial/asistentes-empresariales/`;

	const faqLocal = [
		{
			q: '¿En qué se diferencia un asistente empresarial de un agente de atención al cliente?',
			a: 'El asistente empresarial está orientado a los procesos internos de la empresa: responde preguntas del equipo sobre políticas de RRHH, busca información en documentos internos y apoya operaciones. El agente de atención al cliente está orientado a la interacción con clientes externos.'
		},
		{
			q: '¿El asistente puede acceder a información confidencial de la empresa?',
			a: 'Sí, y de forma segura. El asistente solo accede a los documentos y sistemas que tú le autorizas, con control granular por departamento o rol. Los datos nunca se comparten con terceros ni se usan para entrenar modelos externos.'
		},
		{
			q: '¿Con qué herramientas internas se integra el asistente?',
			a: 'Integramos el asistente a Slack, Microsoft Teams, correo corporativo, Google Drive, SharePoint, sistemas de RRHH y cualquier base de datos interna. El canal y las integraciones se definen según las necesidades de tu empresa.'
		},
		{
			q: '¿Puede el asistente aprobar solicitudes o solo informar?',
			a: 'Puede hacer ambas cosas, según como se configure. Un asistente de RRHH puede informar sobre disponibilidad de vacaciones y también generar la solicitud formal para aprobación del jefe directo. Las acciones que puede ejecutar se definen en la etapa de diseño.'
		},
		{
			q: '¿Cuánto tiempo toma implementar el asistente?',
			a: 'Entre 20 y 25 días hábiles desde que recibimos la documentación interna y definimos el alcance. Esto incluye la fase de entrenamiento, pruebas con el equipo y ajustes antes del lanzamiento oficial.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Asistentes Empresariales con IA',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '2000', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Inteligencia Artificial', item: `${SITE.url}/inteligencia-artificial/` },
					{ '@type': 'ListItem', position: 3, name: 'Asistentes Empresariales', item: canonical }
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
	<title>Asistentes IA Empresariales desde USD 2.000 · CoreWerk Chile</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Asistentes IA Empresariales desde USD 2.000 · CoreWerk Chile" />
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
		{ label: 'Asistentes Empresariales' }
	]}
	eyebrow="Asistentes Empresariales"
	icon="users"
	title="IA que trabaja dentro de tu empresa, no solo hacia afuera"
	subtitle="Asistentes internos especializados en RRHH, documentos y operaciones. Responden preguntas del equipo, buscan información en segundos y gestionan solicitudes rutinarias para que tus áreas de soporte se enfoquen en lo estratégico."
	price="USD 2.000"
	days="Entrega en 20 días"
	ctaPrimary={{ label: 'Quiero un asistente interno', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<!-- Qué es -->
<InteriorSection ai={true} eyebrow="Qué es" title="El asistente que tu equipo necesita pero nadie tiene tiempo de ser">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Los equipos de RRHH, administración y operaciones en las empresas chilenas gastan una parte
			significativa de su tiempo respondiendo las mismas preguntas: ¿cuántos días de vacaciones me
			quedan?, ¿dónde está el contrato con el proveedor X?, ¿cuál es el procedimiento para solicitar
			un permiso?. Son consultas legítimas, pero rutinarias, que consumen horas de personas que
			deberían estar resolviendo problemas más complejos.
		</p>
		<p>
			Un asistente empresarial con IA cambia eso. Es un sistema entrenado con toda la documentación
			interna de tu empresa: reglamento de trabajo, beneficios, procedimientos, contratos, manuales
			operativos. Cuando un empleado hace una pregunta, obtiene una respuesta inmediata y precisa,
			con referencia al documento correspondiente, sin necesidad de esperar que alguien del área
			correspondiente esté disponible.
		</p>
		<p>
			A diferencia de un asistente de atención al cliente (que habla con personas externas), el
			asistente empresarial opera dentro de los canales internos de tu empresa: Slack, Microsoft
			Teams, correo corporativo. Accede solo a la información que le autorizas y mantiene la
			confidencialidad de los datos internos de forma segura.
		</p>
	</div>
</InteriorSection>

<!-- Qué incluye -->
<InteriorSection ai={true} eyebrow="Qué incluye" title="Un asistente para cada área crítica de tu empresa" align="center">
	<FeatureGrid
		ai={true}
		cols={3}
		items={[
			{ icon: 'users', title: 'Asistente de RRHH', desc: 'Responde dudas de empleados sobre vacaciones, permisos, beneficios y políticas. Genera solicitudes formales automáticamente.' },
			{ icon: 'file', title: 'Asistente de documentos', desc: 'Busca, resume y extrae datos de contratos, manuales e informes al instante. Con referencia al documento fuente.' },
			{ icon: 'dashboard', title: 'Asistente de operaciones', desc: 'Consulta el estado de procesos, genera alertas de KPIs y entrega reportes en lenguaje natural a quien corresponda.' },
			{ icon: 'layers', title: 'Integración a tus canales', desc: 'Disponible en Slack, Microsoft Teams, correo corporativo o cualquier canal interno que uses.' },
			{ icon: 'shield', title: 'Control de acceso por rol', desc: 'Define qué información puede ver cada cargo. El asistente respeta los permisos de acceso de tu empresa.' },
			{ icon: 'search', title: 'Búsqueda semántica', desc: 'Encuentra información por significado, no solo por palabras exactas. Entiende sinónimos y contexto.' }
		]}
	/>
</InteriorSection>

<!-- Para quién -->
<InteriorSection ai={true} eyebrow="Para quién" title="Ideal si te identificas con esto">
	<CheckList
		ai={true}
		cols={2}
		items={[
			'Tu equipo de RRHH pasa horas respondiendo consultas rutinarias de empleados en vez de trabajar en retención y desarrollo.',
			'Los empleados tardan demasiado en encontrar un documento interno porque no saben dónde está.',
			'Procesos como solicitudes de vacaciones, permisos o viáticos dependen de la memoria de alguien.',
			'Tienes una base de documentos grande que nadie consulta porque es difícil encontrar lo que buscas.',
			'Quieres estandarizar la comunicación interna sin depender de que cada jefe recuerde las políticas.',
			'Tienes más de 20 empleados y los tiempos de onboarding de nuevas personas son largos y costosos.'
		]}
	/>
</InteriorSection>

<!-- Proceso -->
<InteriorSection ai={true} eyebrow="Cómo trabajamos" title="Del diagnóstico al asistente en producción" align="center">
	<ProcesoInterior ai={true} />
</InteriorSection>

<!-- Precios -->
<InteriorSection id="precios" ai={true} eyebrow="Planes" title="Precio fijo, definido antes de empezar" align="center">
	<PreciosInterior ai={true} highlight="Profesional" />
</InteriorSection>

<!-- FAQ -->
<InteriorSection ai={true} eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	ai={true}
	title="¿Qué pregunta repite más tu equipo cada semana?"
	text="Cuéntanos el proceso interno que más tiempo consume y diseñamos un asistente que lo resuelva. Propuesta con alcance, plazo y precio fijo en 48 horas."
	waMsg="Hola CoreWerk, quiero un asistente empresarial con IA (desde USD 2.000)."
/>
