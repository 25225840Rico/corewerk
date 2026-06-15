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
		'Mantención Mensual de tu sitio web por USD 50/mes. Actualizaciones de seguridad, monitoreo 24/7, respaldos, cambios menores y soporte prioritario. CoreWerk Antofagasta, Chile.';
	const canonical = `${SITE.url}/servicios-basicos/mantencion-mensual/`;

	const faqLocal = [
		{
			q: '¿Qué es mantención y por qué la necesito?',
			a: 'Mantención es el cuidado continuo de tu sitio: actualizaciones de seguridad, monitoreo que verifica que funcione, respaldos para proteger tus datos, y ajustes técnicos. Sin mantención, tu sitio envejece, se vuelve vulnerable a ataques y termina fallando. Es como el servicio técnico de un auto: previene que se descomponga.'
		},
		{
			q: '¿Qué cambios incluye el plan mensual?',
			a: 'Incluye hasta 1 hora de cambios menores por mes: actualizar un texto, cambiar una imagen, ajustar colores, agregar un formulario simple. Cambios más grandes se cotízan aparte. Pero la mayoría de ajustes diarios entran sin problemas.'
		},
		{
			q: '¿24/7 significa que trabajan los fines de semana?',
			a: 'El monitoreo es automático y funciona 24/7. Si tu sitio falla un domingo, se genera una alerta. El soporte prioritario significa que tus mensajes se atienden primero, dentro del horario de atención. Las emergencias críticas se resuelven con urgencia.'
		},
		{
			q: '¿Cómo se hacen los respaldos?',
			a: 'Hacemos respaldos automáticos cada día. Se guardan en servidores seguros, separados del hosting. Si algo sale mal, recuperamos tu sitio completo en minutos, sin perder nada.'
		},
		{
			q: '¿Qué pasa si necesito más cambios en un mes?',
			a: 'Las horas adicionales se cobran aparte. Típicamente son USD 50 la hora. Pero si ves que necesitas más de 1 hora mensual, podemos aumentar el plan. Siempre es más barato que ir contratando proyectos puntuales.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Mantención Mensual',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '50', priceCurrency: 'USD', priceValidUntil: '2026-12-31' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Servicios Básicos', item: `${SITE.url}/servicios-basicos/` },
					{ '@type': 'ListItem', position: 3, name: 'Mantención Mensual', item: canonical }
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
	<title>Mantención Mensual de sitio web desde USD 50/mes · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Mantención Mensual de sitio web desde USD 50/mes · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios Básicos', href: '/servicios-basicos/' }, { label: 'Mantención Mensual' }]}
	eyebrow="Mantención Mensual"
	icon="wrench"
	title="Tu sitio siempre actualizado y funcionando"
	subtitle="Actualizaciones de seguridad, monitoreo 24/7, respaldos diarios, cambios mensuales y soporte prioritario. Tu sitio nunca envejece."
	price="USD 50/mes"
	days="Contrato flexible"
	ctaPrimary={{ label: 'Contratar ahora', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver incluye', href: '#que-incluye' }}
/>

<InteriorSection eyebrow="Qué es" title="La mantención que tu sitio necesita">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Un sitio web no es "termina y olvida". Los navegadores se actualizan, nuevas vulnerabilidades de seguridad aparecen, los plugins necesitan parches, y los clientes piden ajustes. Sin mantención, tu sitio envejece, se vuelve lento, se queda sin actualizaciones de seguridad y finalmente falla. Es como un auto: si no lo mantienes, termina en la taller de emergencia.
		</p>
		<p>
			La mantención mensual es el cuidado preventivo que evita problemas mayores. Actualizamos tu sitio antes de que algo se rompa. Monitoreamos 24/7 para detectar caídas antes de que afecten a tus clientes. Hacemos respaldos diarios para que nunca pierdas un dato importante. Y manejamos cambios pequeños sin que tengas que negociar cada proyecto.
		</p>
		<p>
			En CoreWerk sabemos que cambios van a llegar: un cliente pide actualizar un teléfono, el duño quiere cambiar un texto, hay que ajustar un formulario. Por USD 50 mensuales, esos cambios sencillos entran sin costo adicional. Y si algo se quiebra, nuestro equipo responde con prioridad.
		</p>
	</div>
</InteriorSection>

<InteriorSection id="que-incluye" eyebrow="Qué incluye" title="Soporte completo para tu sitio" align="center">
	<CheckList
		cols={1}
		items={[
			'Actualizaciones automáticas de seguridad y plugins',
			'Monitoreo 24/7 de disponibilidad del sitio',
			'Respaldo completo del sitio cada día',
			'Hasta 1 hora de cambios menores cada mes',
			'Soporte prioritario por WhatsApp',
			'Asesoría técnica cuando la necesites',
			'Reportes mensuales de salud del sitio',
			'Actualizaciones de navegadores y estándares web'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Mantención es esencial si">
	<CheckList
		cols={2}
		items={[
			'Tu sitio ya está en producción y recibe visitantes.',
			'No quieres sorpresas de seguridad o fallos inesperados.',
			'Necesitas hacer cambios ocasionales sin contratar proyectos.',
			'Quieres monitoreo y alertas en tiempo real.',
			'Temes perder datos o que se caiga tu sitio.',
			'Buscas tranquilidad a un costo bajo y predecible.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="Mantención paso a paso" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior highlight="Profesional" />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Listo para dejar la mantención en manos de expertos?"
	text="Desde hoy cubrimos todas las actualizaciones, monitoreo y cambios pequeños de tu sitio. Duerme tranquilo sabiendo que tu presencia digital está segura."
	waMsg="Hola CoreWerk, quiero contratar Mantención Mensual (USD 50/mes)."
/>
