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
		'Plataforma de blog en 12 días, desde USD 700. Publica artículos, categorías, búsqueda integrada y diseño editorial profesional. Para marcas que generan contenido en Antofagasta y Chile.';
	const canonical = `${SITE.url}/sitios/blog/`;

	const faqLocal = [
		{
			q: '¿Tengo que escribir todo el contenido yo?',
			a: 'El blog es la plataforma; tú publicas el contenido. Podemos ayudarte con estrategia de temas y planificación. Si quieres redacción, eso es un servicio adicional que coordinamos por separado.'
		},
		{
			q: '¿Qué tan importante es el blog para SEO?',
			a: 'Muy importante. Google ama el contenido fresco y relevante. Un blog consistente que publique 1-2 artículos por semana sobre tu rubro es la mejor forma de posicionarte en Google a largo plazo.'
		},
		{
			q: '¿Puedo monetizar el blog con publicidad?',
			a: 'Sí. Puedes integrar Google AdSense u otra red publicitaria. También es excelente para generar leads: cada artículo puede tener un CTA para descargar un recurso o solicitar consulta.'
		},
		{
			q: '¿Cuáles son las mejores prácticas para publicar?',
			a: 'Regularidad (1-2 veces por semana), contenido de 800-1.500 palabras, palabras clave naturales, títulos atractivos y siempre enlazar a tus servicios. Te damos una guía al entregar.'
		},
		{
			q: '¿Puedo combinar blog con corporativo o e-commerce?',
			a: 'Sí, es muy recomendado. Un sitio corporativo + blog genera mucho más tráfico y autoridad. El e-commerce + blog ayuda a clientes a encontrarte por problemas antes de comprar.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Plataforma de Blog',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '700', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Sitios Web', item: `${SITE.url}/sitios/` },
					{ '@type': 'ListItem', position: 3, name: 'Blog', item: canonical }
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
	<title>Blog desde USD 700 · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Blog desde USD 700 · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Sitios Web', href: '/sitios/' }, { label: 'Blog' }]}
	eyebrow="Blog"
	icon="file"
	title="Tu voz y tu autoridad en línea"
	subtitle="Plataforma de artículos con categorías, búsqueda integrada y diseño editorial. Publica contenido que atrae clientes, mejora tu SEO y te posiciona como experto."
	price="USD 700"
	days="Entrega en 12 días"
	ctaPrimary={{ label: 'Quiero mi blog', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="La herramienta más poderosa para SEO y autoridad">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Un blog es un sitio web donde publicas artículos sobre temas relacionados con tu negocio. No es
			una moda pasada: es la herramienta más poderosa que existe para que Google te encuentre y para
			demostrar que sabes de lo que hablas. Cada artículo que publiques es una puerta más por la que
			clientes potenciales pueden llegar a ti.
		</p>
		<p>
			Por ejemplo: si vendes servicios de fontanería, un artículo sobre "cómo detectar una fuga de agua"
			o "cómo limpiar las cañerías" atrae a gente que no sabe que te necesita todavía. Cuando leen tu
			contenido gratuito y útil, confían en ti y te contactan. Lo mismo aplica a cualquier rubro: educación,
			marketing, abogacía, salud, tecnología.
		</p>
		<p>
			Nuestro blog incluye todo: editor de artículos fácil, categorías automáticas, búsqueda integrada,
			diseño editorial que no distrae del contenido, optimización SEO en cada artículo y integración de
			CTAs para captar leads. Publicar artículos consistentemente es la mejor inversión a largo plazo para
			tu negocio.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Todo para publicar como profesional" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'file', title: 'Editor intuitivo', desc: 'Redacta artículos sin conocer HTML ni código, con formatos, imágenes y estilos.' },
			{ icon: 'layers', title: 'Categorías y etiquetas', desc: 'Organiza tu contenido automáticamente en temas para que lectores encuentren lo que buscan.' },
			{ icon: 'search', title: 'Buscador integrado', desc: 'Los lectores encuentran artículos por palabra clave. También mejora tu SEO interno.' },
			{ icon: 'zap', title: 'SEO optimizado', desc: 'Cada artículo está optimizado para Google: estructura, palabras clave, metadatos.' },
			{ icon: 'users', title: 'Comentarios + sociales', desc: 'Lectores pueden comentar y compartir en redes. Aumenta engagement y visibilidad.' },
			{ icon: 'shield', title: 'SSL + Dominio', desc: 'Certificado de seguridad y dominio incluidos el primer año.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si tu negocio necesita">
	<CheckList
		cols={2}
		items={[
			'Posicionarse en Google por búsquedas relacionadas a tu rubro.',
			'Generar confianza mostrando que entiendes el problema del cliente.',
			'Atraer visitantes "fríos" que se convierten en clientes a mediano plazo.',
			'Aumentar el número de páginas indexadas en Google para mejor visibilidad.',
			'Una estrategia de contenido para complementar tu presencia en redes sociales.',
			'Demostrar expertise y diferenciarte como líder de opinión en tu industria.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De la idea a tu blog publicado" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior highlight="Profesional" />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Listo para que Google te encuentre?"
	text="Cuéntanos sobre tu negocio y los temas que quieres cubrir. Te entregaremos un blog profesional, optimizado para SEO y listo para empezar a publicar. Entrega en 12 días."
	waMsg="Hola CoreWerk, quiero un Blog (desde USD 700)."
/>
