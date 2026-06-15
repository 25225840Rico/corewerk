<script lang="ts">
	import HeroInterior from '$lib/components/interior/HeroInterior.svelte';
	import InteriorSection from '$lib/components/interior/InteriorSection.svelte';
	import FeatureGrid from '$lib/components/interior/FeatureGrid.svelte';
	import CheckList from '$lib/components/interior/CheckList.svelte';
	import ProcesoInterior from '$lib/components/interior/ProcesoInterior.svelte';
	import PreciosInterior from '$lib/components/interior/PreciosInterior.svelte';
	import FaqInterior from '$lib/components/interior/FaqInterior.svelte';
	import CTAInterior from '$lib/components/interior/CTAInterior.svelte';
	import Icon from '$lib/Icon.svelte';
	import { aiAgents } from '$lib/data';
	import { SITE } from '$lib/seo/site';

	const description =
		'Agentes IA a medida para ventas, atención al cliente, RRHH, operaciones y documentos. Entrenados con tu negocio, integrados a WhatsApp y tus sistemas, desde USD 1.500. CoreWerk Chile.';
	const canonical = `${SITE.url}/inteligencia-artificial/agentes-a-medida/`;

	const faqLocal = [
		{
			q: '¿Cómo se entrena el agente con mi negocio?',
			a: 'Cargamos toda la información relevante de tu empresa: catálogo de productos, precios, políticas, preguntas frecuentes y flujos de atención. El agente aprende de estos documentos y se ajusta en sesiones de prueba reales antes de entrar en producción.'
		},
		{
			q: '¿Cuántos agentes distintos puedo tener?',
			a: 'Puedes tener tantos agentes como procesos quieras automatizar. Muchos clientes empiezan con un agente de ventas o atención y luego agregan agentes de RRHH u operaciones. Cada agente trabaja de forma independiente en su área.'
		},
		{
			q: '¿En qué canales funciona el agente?',
			a: 'Según el tipo de agente, lo integramos a WhatsApp Business, tu sitio web (widget de chat), email, Slack y sistemas internos como CRM o ERP. El canal se define en la propuesta según tu proceso.'
		},
		{
			q: '¿El agente puede hacer más de una cosa a la vez?',
			a: 'Sí. Un agente puede manejar cientos de conversaciones simultáneas sin perder contexto. Esta es una de sus ventajas fundamentales frente a los equipos humanos en procesos de alto volumen.'
		},
		{
			q: '¿Qué pasa cuando el agente no sabe responder algo?',
			a: 'El agente reconoce sus límites y escala automáticamente al equipo humano con el historial completo de la conversación, para que el agente humano no tenga que repetir las preguntas. Nunca inventa información.'
		},
		{
			q: '¿Cuánto tiempo toma implementar el agente?',
			a: 'Depende del tipo: agentes de ventas y atención al cliente se entregan en 15 días; agentes de RRHH, documentos y operaciones entre 20 y 25 días. En todos los casos el plazo es fijo y se define en la propuesta.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Agentes IA a Medida',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '1500', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Inteligencia Artificial', item: `${SITE.url}/inteligencia-artificial/` },
					{ '@type': 'ListItem', position: 3, name: 'Agentes a Medida', item: canonical }
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

	// 2 agentes con sample para burbujas de chat
	const agentesConSample = aiAgents.filter((a) => a.slug === 'ventas' || a.slug === 'atencion-cliente');
</script>

<svelte:head>
	<title>Agentes IA a Medida desde USD 1.500 · CoreWerk Chile</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Agentes IA a Medida desde USD 1.500 · CoreWerk Chile" />
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
		{ label: 'Agentes a Medida' }
	]}
	eyebrow="Agentes a Medida"
	icon="brain"
	title="Agentes IA entrenados con el ADN de tu empresa"
	subtitle="No son chatbots genéricos. Son agentes especializados en tu negocio: conocen tu catálogo, tus precios, tus políticas y tus procesos. Disponibles 24/7 en los canales que tus clientes ya usan."
	price="USD 1.500"
	days="Entrega en 15 días"
	ctaPrimary={{ label: 'Quiero mi agente IA', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<!-- Qué es -->
<InteriorSection ai={true} eyebrow="Qué es" title="Un colaborador digital que entiende tu negocio de verdad">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Un agente IA a medida es un sistema de inteligencia artificial entrenado específicamente con la
			información de tu empresa. A diferencia de las soluciones genéricas, este agente conoce tu
			catálogo, tus precios, tus objeciones frecuentes, tus políticas de atención y tus procesos
			internos. Cuando un cliente o empleado interactúa con él, lo hace como si hablara con alguien
			que lleva años en tu empresa.
		</p>
		<p>
			En CoreWerk diseñamos el agente desde cero según tu proceso específico. Lo integramos a los
			canales que ya usas (WhatsApp, tu sitio web, email, Slack) y a los sistemas que ya tienes
			(CRM, ERP, Google Sheets). El resultado es un agente funcional que trabaja en tu operación
			real, no en un entorno de prueba desconectado.
		</p>
		<p>
			Tenemos 6 tipos de agentes especializados, cada uno optimizado para el área que va a gestionar.
			El más adecuado depende del proceso que quieres automatizar, el volumen de interacciones y
			los sistemas con los que necesitas integrarte.
		</p>
	</div>
</InteriorSection>

<!-- Los 6 agentes con detalle -->
<InteriorSection ai={true} eyebrow="Nuestros 6 agentes" title="Especialistas en cada área de tu empresa" align="center">
	<div class="space-y-6">
		{#each aiAgents as agent}
			<div class="glass-card-ai p-6 lg:p-8">
				<div class="flex flex-col gap-6 lg:flex-row lg:items-start">
					<div class="shrink-0">
						<span class="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-accentAI">
							<Icon name={agent.icon} class="h-7 w-7" />
						</span>
					</div>
					<div class="flex-grow">
						<h3 class="text-lg font-bold text-ink">{agent.name}</h3>
						<div class="mt-1 flex flex-wrap items-center gap-3">
							<span class="text-sm font-bold text-accentAI">{agent.price}</span>
							<span class="text-xs text-muted">{agent.time}</span>
						</div>
						<p class="mt-2 text-sm text-muted">{agent.what}</p>

						<div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div>
								<p class="mb-2 text-xs font-semibold uppercase tracking-wider text-accentAI">Cómo funciona</p>
								<ul class="space-y-1">
									{#each agent.how as step}
										<li class="flex gap-2 text-sm text-muted">
											<span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accentAI"></span>
											{step}
										</li>
									{/each}
								</ul>
							</div>
							<div>
								<p class="mb-2 text-xs font-semibold uppercase tracking-wider text-accentAI">Integraciones</p>
								<div class="flex flex-wrap gap-2">
									{#each agent.integrations as intg}
										<span class="border border-white/10 bg-white/5 px-2 py-1 text-xs text-muted">{intg}</span>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</InteriorSection>

<!-- Ejemplos de conversación para 2 agentes -->
<InteriorSection ai={true} eyebrow="Demo real" title="Así conversa un agente IA con tus clientes" align="center">
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
		{#each agentesConSample as agent}
			<div class="glass-card-ai flex flex-col p-6">
				<div class="mb-4 flex items-center gap-3">
					<span class="inline-flex text-accentAI">
						<Icon name={agent.icon} class="h-5 w-5" />
					</span>
					<h3 class="text-sm font-semibold text-ink">{agent.name}</h3>
				</div>
				<div class="flex flex-col gap-3">
					{#each agent.sample as msg}
						<div class="flex {msg.role === 'user' ? 'justify-end' : 'justify-start'}">
							<div
								class="max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed
								{msg.role === 'user'
									? 'bg-white/10 text-ink'
									: 'bg-accentAI/20 text-ink border border-accentAI/30'}"
							>
								{msg.text}
							</div>
						</div>
					{/each}
				</div>
				<div class="mt-4 border-t border-white/10 pt-3">
					<p class="text-xs text-muted">Ejemplo real de conversación automatizada</p>
				</div>
			</div>
		{/each}
	</div>
</InteriorSection>

<!-- Qué incluye -->
<InteriorSection ai={true} eyebrow="Qué incluye" title="Todo para que tu agente funcione desde el primer día" align="center">
	<FeatureGrid
		ai={true}
		cols={3}
		items={[
			{ icon: 'brain', title: 'Entrenamiento personalizado', desc: 'El agente aprende de tus documentos, catálogos y flujos reales antes de salir en vivo.' },
			{ icon: 'layers', title: 'Integraciones incluidas', desc: 'Conectamos al agente con WhatsApp, tu sitio web, CRM, ERP o las herramientas que uses.' },
			{ icon: 'chat', title: 'Pruebas y ajustes', desc: 'Sesiones de prueba reales con tu equipo para afinar respuestas y flujos antes del lanzamiento.' },
			{ icon: 'users', title: 'Capacitación del equipo', desc: 'Formamos a las personas que van a gestionar y monitorear al agente, sin tecnicismos.' },
			{ icon: 'file', title: 'Documentación completa', desc: 'Manual de uso, instrucciones para actualizar el conocimiento y guía de gestión.' },
			{ icon: 'shield', title: 'Soporte post-entrega', desc: 'Soporte incluido según el plan: 30 días Starter, 60 días Profesional, 6 meses Enterprise.' }
		]}
	/>
</InteriorSection>

<!-- Para quién -->
<InteriorSection ai={true} eyebrow="Para quién" title="Ideal si te identificas con esto">
	<CheckList
		ai={true}
		cols={2}
		items={[
			'Recibes consultas repetitivas que consumen tiempo de tu equipo comercial o de atención.',
			'Pierdes ventas o clientes porque no puedes responder fuera del horario de oficina.',
			'Tienes procesos internos manuales que generan errores o cuellos de botella.',
			'Quieres que tu equipo de RRHH se enfoque en lo estratégico, no en responder las mismas dudas.',
			'Manejas gran volumen de documentos y perdes tiempo buscando información.',
			'Buscas diferenciarte de la competencia con tecnología que ya es estándar en empresas líderes.'
		]}
	/>
</InteriorSection>

<!-- Proceso -->
<InteriorSection ai={true} eyebrow="Cómo trabajamos" title="Del diagnóstico al agente en producción" align="center">
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
	title="¿Qué proceso quieres automatizar con IA?"
	text="Cuéntanos el área que más tiempo le consume a tu equipo y te proponemos el agente ideal con precio y plazo fijo. La consulta inicial es sin costo."
	waMsg="Hola CoreWerk, quiero un agente IA a medida para mi empresa (desde USD 1.500)."
/>
