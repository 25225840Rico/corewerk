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
		'Actualización de Contenido de tu sitio web por USD 30/vez. Cambios rápidos de texto e imágenes sin necesidad de contrato. Entrega en 24-48 horas. CoreWerk Antofagasta, Chile.';
	const canonical = `${SITE.url}/servicios-basicos/actualizacion-contenido/`;

	const faqLocal = [
		{
			q: '¿Qué cambios entran en "Actualización de Contenido"?',
			a: 'Hasta 3 cambios de texto o imagen por solicitud. Por ejemplo: actualizar un teléfono, cambiar una foto de portada, corregir un párrafo, agregar un aviso temporal, cambiar horarios. Cambios visuales simples que no requieren reescribir todo tu sitio.'
		},
		{
			q: '¿Cuánto tarda entregar los cambios?',
			a: 'Entre 24 a 48 horas hábiles. Recibimos tu solicitud, hacemos los cambios, te enviamos una vista previa para que apruebes, y luego publicamos. Sin demoras, sin complicaciones.'
		},
		{
			q: '¿Necesito un contrato o plan mensual?',
			a: 'No. Es completamente flexible. Pagas solo cuando necesitas un cambio. No es una suscripción: es un servicio puntual. Hoy haces un cambio, el mes que viene quizás no necesitas nada, el próximo mes haces otro. Tú decides.'
		},
		{
			q: '¿Qué pasa si me pides cambios que son muy grandes?',
			a: 'Los cambios mayores (rediseño de páginas, reescribir mucho contenido, cambios técnicos) se cotizan aparte como un proyecto. Pero los cambios sencillos y rápidos siempre entran en USD 30.'
		},
		{
			q: '¿Puedo pedir confirmación antes de que publiques?',
			a: 'Siempre. Te enviamos una captura o vista previa de los cambios para que apruebes antes de publicar. Solo publicamos cuando tú des el visto bueno.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Actualización de Contenido',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '30', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Servicios Básicos', item: `${SITE.url}/servicios-basicos/` },
					{ '@type': 'ListItem', position: 3, name: 'Actualización de Contenido', item: canonical }
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
	<title>Actualización de Contenido desde USD 30 · CoreWerk Chile</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Actualización de Contenido desde USD 30 · CoreWerk Chile" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios Básicos', href: '/servicios-basicos/' }, { label: 'Actualización de Contenido' }]}
	eyebrow="Actualización de Contenido"
	icon="file"
	title="Cambios rápidos sin complicaciones técnicas"
	subtitle="Actualiza texto, imágenes y datos en tu sitio sin necesidad de saber código. Cambios puntuales, sin contrato mensual, entrega en 24-48 horas."
	price="USD 30/vez"
	days="Entrega en 24-48 horas"
	ctaPrimary={{ label: 'Solicitar cambios', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver qué incluye', href: '#que-incluye' }}
/>

<InteriorSection eyebrow="Qué es" title="Cambios sin necesidad de plan mensual">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			A veces necesitas hacer cambios en tu sitio, pero no quieres suscribirse a un plan mensual. Un horario cambió, una foto necesita actualizarse, un teléfono se modificó, o quieres agregar una promoción temporal. Cambios pequeños y rápidos que cualquier propietario de negocio necesita.
		</p>
		<p>
			La actualización de contenido es exactamente eso: cambios puntuales, sin compromiso mensual. Pagas solo cuando lo necesitas, los recibes rápido, y tu sitio siempre tiene información fresca. Es ideal si tu negocio cambió algo pequeño, o si necesitas hacer ajustes ocasionalmente sin estar pagando mantención continua.
		</p>
		<p>
			El proceso es simple: nos mandas el cambio por WhatsApp, lo hacemos en 24-48 horas, te mostramos cómo quedó para que apruebes, y publicamos. Sin tecnicismos, sin código, sin que tengas que hacer nada. Solo cuéntales qué necesita cambiar.
		</p>
	</div>
</InteriorSection>

<InteriorSection id="que-incluye" eyebrow="Qué incluye" title="Todo lo que entra en USD 30" align="center">
	<CheckList
		cols={1}
		items={[
			'Hasta 3 cambios de texto o imagen por solicitud',
			'Actualización de datos: teléfonos, horarios, direcciones',
			'Cambios de contenido en cualquier página',
			'Entrega en 24-48 horas hábiles',
			'Vista previa para que apruebes antes de publicar',
			'Sin necesidad de contrato o plan mensual',
			'Confirmación por WhatsApp de los cambios'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si necesitas">
	<CheckList
		cols={2}
		items={[
			'Hacer cambios ocasionales sin comprometerte a un plan mensual.',
			'Actualizar un teléfono, horario o dirección rápidamente.',
			'Cambiar una foto o agregar una promoción temporal.',
			'Corregir un texto sin saber código ni FTP.',
			'Cambios pequeños pero sin necesidad de hacerlos tú mismo.',
			'Flexibilidad: pagar solo cuando lo necesites.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="Proceso rápido y simple" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior highlight="Starter" />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Necesitas actualizar algo en tu sitio?"
	text="Manda los cambios por WhatsApp y los hacemos en 24-48 horas. Simple, rápido y sin costos escondidos."
	waMsg="Hola CoreWerk, quiero solicitar una Actualización de Contenido (USD 30/vez)."
/>
