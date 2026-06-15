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
		'Sitio institucional en 15 días, desde USD 800. Secciones de noticias, documentos descargables, equipo directivo y agenda de eventos. Para municipios y organizaciones sin fines de lucro en Chile.';
	const canonical = `${SITE.url}/sitios/institucional/`;

	const faqLocal = [
		{
			q: '¿Qué diferencia hay entre corporativo e institucional?',
			a: 'Un sitio institucional es más formal y enfocado en transparencia. Incluye noticias, documentos públicos, equipo directivo, actas, presupuestos y eventos. Un corporativo vende servicios. Ambos son profesionales, pero el institucional prioriza información y accesibilidad.'
		},
		{
			q: '¿Puedo publicar noticias y documentos?',
			a: 'Sí. Incluye un editor de noticias para publicar actualizaciones, sección de descargas para documentos PDF (presupuestos, actas, decretos), calendario de eventos y galería de fotos de actividades.'
		},
		{
			q: '¿Es accesible para personas con discapacidad?',
			a: 'Sí. Diseñamos siguiendo estándares WCAG: contraste adecuado, navegación por teclado, lectores de pantalla compatibles, texto alternativo en imágenes. La accesibilidad es un derecho.'
		},
		{
			q: '¿Puedo integrar un formulario de trámites?',
			a: 'Sí. Podemos agregar formularios de solicitudes, reclamos, o consultas que se envíen a los responsables. También integramos con sistemas de turnos o trámites si los tienes.'
		},
		{
			q: '¿Es seguro para datos sensibles?',
			a: 'Sí. Todo está encriptado, backups automáticos, SSL incluido. No almacenamos datos sensibles en bases públicas. Para información clasificada, tenemos opciones de acceso restringido con login.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Sitio Institucional',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '800', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Sitios Web', item: `${SITE.url}/sitios/` },
					{ '@type': 'ListItem', position: 3, name: 'Institucional', item: canonical }
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
	<title>Sitio Institucional desde USD 800 · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Sitio Institucional desde USD 800 · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Sitios Web', href: '/sitios/' }, { label: 'Institucional' }]}
	eyebrow="Sitio Institucional"
	icon="briefcase"
	title="Transparencia y accesibilidad para tu institución"
	subtitle="Secciones de noticias, documentos descargables, equipo directivo y agenda de eventos. Diseño formal, accesible y seguro para municipios y organizaciones sin fines de lucro."
	price="USD 800"
	days="Entrega en 15 días"
	ctaPrimary={{ label: 'Quiero mi sitio institucional', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="Un sitio serio y transparente para tu institución">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Un sitio institucional es diferente a un sitio corporativo. No se trata de vender, sino de comunicar
			y ser transparente. Es la plataforma digital de tu municipio, fundación, ONG, asociación gremial o
			institución pública. Sirve para que la comunidad conozca tu gestión, acceda a documentos, vea noticias
			y sepa cómo contactarte.
		</p>
		<p>
			Incluye secciones clave: noticias y comunicados, documentos descargables (actas, presupuestos, decretos,
			memorias), directorio del equipo, calendario de eventos y reuniones, galería de fotos, formularios para
			consultas o reclamos, y en algunos casos, acceso restringido para miembros. Todo con un diseño formal,
			accesible para personas con discapacidad, y muy seguro.
		</p>
		<p>
			En CoreWerk diseñamos sitios institucionales que transmiten seriedad y confianza. Sabemos que la
			accesibilidad es crítica (personas mayores, con discapacidad visual o auditiva), que la información
			debe ser fácil de encontrar, y que los datos sensibles deben estar protegidos. Cada sitio que hacemos
			cumple con estándares de seguridad y usabilidad.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Todo para una institución transparente" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'file', title: 'Gestor de noticias', desc: 'Publica comunicados, actas y actualizaciones sin conocer HTML.' },
			{ icon: 'download', title: 'Centro de descargas', desc: 'Organiza documentos por categoría (presupuestos, memorias, actas, leyes).' },
			{ icon: 'briefcase', title: 'Directorio de equipo', desc: 'Presenta tu directiva con foto, cargo y área de responsabilidad.' },
			{ icon: 'calendar', title: 'Calendario de eventos', desc: 'Publica reuniones, sesiones públicas y actividades de tu institución.' },
			{ icon: 'shield', title: 'Acceso restringido', desc: 'Áreas privadas con login para documentos clasificados o miembros internos.' },
			{ icon: 'globe', title: 'Accesibilidad WCAG', desc: 'Diseño para personas con discapacidad visual, auditiva o motor.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal para instituciones que necesitan">
	<CheckList
		cols={2}
		items={[
			'Una presencia web formal y transparente que inspire confianza ciudadana.',
			'Publicar noticias, actas y documentos de forma centralizada y accesible.',
			'Cumplir con regulaciones de transparencia y gobierno abierto.',
			'Un sitio accesible para personas mayores y con discapacidad.',
			'Gestionar formularios de consultas, reclamos o solicitudes de información.',
			'Diferenciarse del sitio anterior con diseño moderno y navegación intuitiva.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De la idea a tu sitio institucional publicado" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior highlight="Profesional" />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Necesitas un sitio institucional sólido?"
	text="Cuéntanos sobre tu institución: qué documentos necesitas publicar, cuál es tu equipo y qué regulaciones debes cumplir. Te entregaremos una propuesta adaptada a tu contexto. Listo en 15 días."
	waMsg="Hola CoreWerk, quiero un Sitio Institucional (desde USD 800)."
/>
