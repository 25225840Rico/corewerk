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
		'Chatbots para WhatsApp que responden, cotizan y agendan las 24 horas. Sin persona. Sin costo por mensaje. Desde USD 600, entrega en 10 días. CoreWerk Chile.';
	const canonical = `${SITE.url}/inteligencia-artificial/chatbots/`;

	const faqLocal = [
		{
			q: '¿El chatbot funciona con mi número de WhatsApp actual?',
			a: 'Sí, integramos el chatbot a tu número de WhatsApp Business existente. No necesitas cambiar de número ni perder tus conversaciones actuales. Configuramos la API oficial de WhatsApp para que funcione en paralelo con tu uso normal.'
		},
		{
			q: '¿Cuántos mensajes puede manejar el chatbot al mismo tiempo?',
			a: 'El chatbot puede manejar cientos de conversaciones simultáneas sin degradar la calidad de las respuestas. No hay límite de mensajes incluido en la tarifa mensual de API de WhatsApp.'
		},
		{
			q: '¿Puedo ver todas las conversaciones que tiene el chatbot?',
			a: 'Sí. Incluimos un panel de conversaciones donde puedes ver todo el historial de chats, intervenir manualmente cuando lo desees y analizar las preguntas más frecuentes para mejorar el flujo.'
		},
		{
			q: '¿Qué pasa cuando el chatbot no sabe responder?',
			a: 'El chatbot detecta las preguntas fuera de su flujo y las escala automáticamente a un agente humano. Recibes una notificación inmediata con el contexto de la conversación para que puedas continuar sin fricciones.'
		},
		{
			q: '¿El chatbot puede enviar imágenes, PDFs o documentos?',
			a: 'Sí. WhatsApp Business permite enviar archivos adjuntos, catálogos en PDF, imágenes de productos y listas de servicios. Configuramos los documentos que necesites compartir con los clientes.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Chatbot WhatsApp 24/7',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '600', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Inteligencia Artificial', item: `${SITE.url}/inteligencia-artificial/` },
					{ '@type': 'ListItem', position: 3, name: 'Chatbots WhatsApp', item: canonical }
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
	<title>Chatbot WhatsApp 24/7 desde USD 600 · CoreWerk Chile</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Chatbot WhatsApp 24/7 desde USD 600 · CoreWerk Chile" />
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
		{ label: 'Chatbots WhatsApp' }
	]}
	eyebrow="Chatbots WhatsApp"
	icon="chat"
	title="Tu empresa responde WhatsApp a las 3 AM sin que nadie trabaje"
	subtitle="Chatbot inteligente conectado a tu WhatsApp Business que responde consultas, cotiza servicios y agenda citas de forma automática. Sin costo por mensaje, sin persona de guardia."
	price="USD 600"
	days="Entrega en 10 días"
	ctaPrimary={{ label: 'Quiero mi chatbot', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<!-- Qué es -->
<InteriorSection ai={true} eyebrow="Qué es" title="Tu canal de ventas más activo, automatizado">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			WhatsApp es el canal de comunicación más usado en Chile: el 90% de la población tiene la app
			instalada y la revisa múltiples veces al día. Cuando un cliente potencial te escribe por
			WhatsApp a las 11 de la noche preguntando por tus servicios, tiene dos posibilidades: encontrar
			una respuesta inmediata o esperar hasta mañana cuando tu competencia ya le respondió.
		</p>
		<p>
			Un chatbot de WhatsApp resuelve ese problema de forma permanente. No es un simple menú
			numerado que molesta a los usuarios. Es un flujo conversacional diseñado específicamente
			para tu negocio, que entiende las preguntas más comunes de tus clientes, responde con
			información precisa sobre tus servicios y precios, y cuando la situación lo requiere,
			escala al equipo humano con el contexto completo.
		</p>
		<p>
			En CoreWerk construimos el chatbot a partir de las conversaciones reales de tu empresa.
			Analizamos las preguntas que más se repiten, los cuellos de botella en el flujo de atención
			y las oportunidades de venta que se pierden por demora en la respuesta. El resultado es
			un chatbot que no parece un bot: parece alguien que conoce tu negocio.
		</p>
	</div>
</InteriorSection>

<!-- Qué incluye -->
<InteriorSection ai={true} eyebrow="Qué incluye" title="Todo configurado y listo para funcionar" align="center">
	<FeatureGrid
		ai={true}
		cols={3}
		items={[
			{ icon: 'chat', title: 'Flujo conversacional a medida', desc: 'Diseñamos el árbol de conversación según tus procesos reales de venta y atención.' },
			{ icon: 'send', title: 'Integración WhatsApp Business', desc: 'Conexión a la API oficial de WhatsApp Business en tu número actual.' },
			{ icon: 'dashboard', title: 'Panel de conversaciones', desc: 'Visualiza, filtra y exporta todas las conversaciones desde un panel simple.' },
			{ icon: 'users', title: 'Escalado a humano', desc: 'Cuando el bot no puede resolver, el agente humano recibe el chat con todo el historial.' },
			{ icon: 'zap', title: 'Respuesta inmediata 24/7', desc: 'Responde en segundos a cualquier hora del día, incluyendo fines de semana y festivos.' },
			{ icon: 'shield', title: '30 días de soporte', desc: 'Ajustamos el flujo durante el primer mes según los problemas que detectemos en producción.' }
		]}
	/>
</InteriorSection>

<!-- Para quién -->
<InteriorSection ai={true} eyebrow="Para quién" title="Ideal si te identificas con esto">
	<CheckList
		ai={true}
		cols={2}
		items={[
			'Pierdes consultas porque no puedes responder WhatsApp fuera del horario de oficina.',
			'Tu equipo pierde horas respondiendo las mismas preguntas de precio, disponibilidad y horarios.',
			'Quieres agendar citas o reuniones sin coordinar manualmente cada una.',
			'Tienes campañas de Google Ads o redes y necesitas convertir más de los que ya escriben.',
			'Vendes servicios con varios pasos de cotización que hoy haces a mano.',
			'Atienes clientes en más de una ciudad y no puedes cubrir todos los horarios.'
		]}
	/>
</InteriorSection>

<!-- Proceso -->
<InteriorSection ai={true} eyebrow="Cómo trabajamos" title="Del brief al chatbot en producción" align="center">
	<ProcesoInterior ai={true} />
</InteriorSection>

<!-- Precios -->
<InteriorSection id="precios" ai={true} eyebrow="Planes" title="Precio fijo, definido antes de empezar" align="center">
	<PreciosInterior ai={true} highlight="Starter" />
</InteriorSection>

<!-- FAQ -->
<InteriorSection ai={true} eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	ai={true}
	title="¿Cuántas consultas pierdes cada semana fuera de horario?"
	text="Cuéntanos cómo atienden hoy por WhatsApp y te mostramos un flujo conversacional a medida en menos de 48 horas. Sin compromiso."
	waMsg="Hola CoreWerk, quiero un chatbot para WhatsApp (desde USD 600)."
/>
