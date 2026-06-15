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
		'Plataforma de comunidad en 30 días, desde USD 2.000. Con registro, perfiles, foros, chats y contenido exclusivo. Para marcas que construyen membresía en Antofagasta y Chile.';
	const canonical = `${SITE.url}/sitios/comunidad/`;

	const faqLocal = [
		{
			q: '¿Qué es una comunidad online?',
			a: 'Es un espacio privado donde tus miembros o clientes interactúan entre sí y con tu marca. Pueden ser foros de discusión, chats en tiempo real, acceso a contenido exclusivo o eventos privados. El resultado es lealtad y engagement profundo.'
		},
		{
			q: '¿Puedo cobrar por acceso a la comunidad?',
			a: 'Sí. Puedes usar modelo de membresía: acceso gratuito + features básicas, o suscripción paga para acceso completo. Integramos pagos recurrentes y gestión de suscripciones automáticamente.'
		},
		{
			q: '¿Cómo gestiono los miembros?',
			a: 'Incluye un panel administrativo donde invitas miembros, apruebas solicitudes, asignas roles (admin, moderador, miembro), y ves estadísticas de actividad y engagement.'
		},
		{
			q: '¿Puedo monetizar sin cobrar a usuarios?',
			a: 'Sí. Modelos alternativos: publicidad dentro de la comunidad, patrocinadores, eventos pagos, productos relacionados. Diseñamos el modelo que mejor se ajuste a tu marca.'
		},
		{
			q: '¿Qué herramientas de interacción incluyen?',
			a: 'Foros temáticos, chats en tiempo real, canales privados, notificaciones personalizadas, perfiles de usuarios con avatar e información, reacciones a posts y sistema de calificación.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Plataforma de Comunidad',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '2000', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Sitios Web', item: `${SITE.url}/sitios/` },
					{ '@type': 'ListItem', position: 3, name: 'Comunidad', item: canonical }
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
	<title>Comunidad desde USD 2.000 · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Comunidad desde USD 2.000 · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Sitios Web', href: '/sitios/' }, { label: 'Comunidad' }]}
	eyebrow="Comunidad"
	icon="users"
	title="El centro digital de tu comunidad"
	subtitle="Plataforma con registro, perfiles, foros o chats internos y contenido exclusivo. Genera lealtad, conexión y monetización desde el primer miembro."
	price="USD 2.000"
	days="Entrega en 30 días"
	ctaPrimary={{ label: 'Quiero mi comunidad', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="Un espacio privado donde tu comunidad se une">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Una comunidad online es un espacio privado donde tus clientes, usuarios o fans se reúnen,
			interactúan entre sí y contigo. Puede ser una comunidad de aprendizaje (alumnos de tu curso),
			una membresía (clientes pagos que acceden a contenido exclusivo), o un círculo cercano de
			tus mejores clientes.
		</p>
		<p>
			El valor de una comunidad es profundo: creas conexiones más allá de transacciones puntuales.
			Tus miembros se conocen entre sí, comparten experiencias, resuelven dudas mutuamente. Tú estás
			en el centro moderando, creando contenido exclusivo, organizando eventos. El resultado es lealtad
			extrema, retención de clientes y oportunidades de monetización que no existen en medios masivos.
		</p>
		<p>
			En CoreWerk construimos comunidades completamente funcionales: sistema de registro y perfiles,
			foros o canales temáticos, chat en tiempo real, acceso a contenido exclusivo, notificaciones,
			y panel administrativo para moderar y ver estadísticas. Diseñamos la experiencia para que sea
			adictiva: los miembros querrán volver todos los días.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Todo para construir una comunidad vibrante" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'users', title: 'Sistema de membresía', desc: 'Registro, perfiles personalizables, avatar, rol de usuario y niveles de acceso.' },
			{ icon: 'chat', title: 'Foros y chats', desc: 'Discusiones temáticas, chats en tiempo real, canales privados, menciones y reacciones.' },
			{ icon: 'file', title: 'Contenido exclusivo', desc: 'Biblioteca de recursos, documentos, videos y archivos solo para miembros.' },
			{ icon: 'bell', title: 'Notificaciones inteligentes', desc: 'Alertas personalizadas de nuevos posts, respuestas y eventos sin spam.' },
			{ icon: 'search', title: 'Búsqueda en comunidad', desc: 'Los miembros encuentran conversations, documentos y respuestas rápidamente.' },
			{ icon: 'shield', title: 'Panel administrativo', desc: 'Moderar posts, gestionar miembros, ver estadísticas y crear contenido destacado.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si buscas construir">
	<CheckList
		cols={2}
		items={[
			'Una comunidad de alumnos alrededor de tu curso, programa o servicio.',
			'Una membresía paga que accede a contenido exclusivo, eventos o networking.',
			'Un círculo cercano de tus mejores clientes con valor diferenciado.',
			'Un espacio de fidelización que reduce churn y aumenta lifetime value.',
			'Una base de datos activa y comprometida sin depender de redes sociales.',
			'Una plataforma que crece sola: los miembros traen a otros miembros.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De la idea a tu comunidad publicada" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior highlight="Profesional" />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Tienes una base de personas para agrupar?"
	text="Cuéntanos quiénes son tus miembros potenciales, qué valor quieres ofrecer y cómo piensas moderar. Te haremos una propuesta con diseño, features y plan de lanzamiento. Tu comunidad puede estar lista en 30 días."
	waMsg="Hola CoreWerk, quiero una Plataforma de Comunidad (desde USD 2.000)."
/>
