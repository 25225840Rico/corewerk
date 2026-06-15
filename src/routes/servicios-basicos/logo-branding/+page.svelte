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
		'Diseño de logo y branding profesional en 5 días. Identidad visual completa con paleta de colores, tipografías y manual de uso. USD 150. CoreWerk Antofagasta, Chile.';
	const canonical = `${SITE.url}/servicios-basicos/logo-branding/`;

	const faqLocal = [
		{
			q: '¿Qué incluye exactamente el servicio de Logo y Branding?',
			a: 'Incluye el diseño del logo en alta resolución (PNG y SVG), una paleta de colores corporativa definida, selección de tipografías, y un manual básico de uso del logo. Entrega completa en 5 días hábiles.'
		},
		{
			q: '¿Cuántas revisiones o iteraciones incluye?',
			a: 'El servicio incluye 2 rondas de revisiones para que el logo sea exactamente como lo imaginas. Si necesitas cambios mayores después, podemos coordinar un ajuste adicional.'
		},
		{
			q: '¿Puedo usar el logo en redes sociales, impresos y otros lugares?',
			a: 'Sí. Recibes los archivos en los formatos que necesitas: PNG (fondo transparente), JPG, SVG (vectorial) e incluso en escala de grises. Podrás usarlo en donde quieras: web, impresos, ropa, etc.'
		},
		{
			q: '¿Qué pasa si no me gusta el primer diseño?',
			a: 'En la primera ronda presentamos al menos 2 conceptos diferentes. Eliges cuál te gusta más y refinamos desde ahí. El objetivo es que el logo represente realmente tu marca.'
		},
		{
			q: '¿Incluye branding más allá del logo?',
			a: 'Sí. El servicio incluye la definición de tu paleta de colores corporativos y la selección de tipografías que usarás en tu marca. También entregaremos un documento con los códigos de color y las normas básicas de uso.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Logo y Branding',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '150', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Servicios Básicos', item: `${SITE.url}/servicios-basicos/` },
					{ '@type': 'ListItem', position: 3, name: 'Logo y Branding', item: canonical }
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
	<title>Logo y Branding profesional desde USD 150 · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Logo y Branding profesional desde USD 150 · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios Básicos', href: '/servicios-basicos/' }, { label: 'Logo y Branding' }]}
	eyebrow="Logo y Branding"
	icon="palette"
	title="Tu identidad visual en 5 días"
	subtitle="Diseño de logo profesional, paleta de colores corporativa y manual de marca. Todo lo que necesitas para que tu negocio tenga una identidad visual fuerte y coherente."
	price="USD 150"
	days="Entrega en 5 días"
	ctaPrimary={{ label: 'Quiero mi logo', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver incluye', href: '#que-incluye' }}
/>

<InteriorSection eyebrow="Qué es" title="Tu marca necesita una cara reconocible">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Un logo no es solo un dibujo bonito. Es la cara de tu negocio, el símbolo que tus clientes reconocen y recuerdan. Un buen logo comunica en un vistazo quién eres, qué haces y por qué deberían confiar en ti.
		</p>
		<p>
			El branding va más allá del logo: es el conjunto de decisiones sobre cómo tu marca se ve y se siente. Colores que te representan, tipografías que reflejan tu personalidad, un estilo visual coherente en todo lo que haces. Cuando alguien ve un post tuyo en redes o una imagen en tu sitio, debería saber al instante que es tuyo.
		</p>
		<p>
			En CoreWerk diseñamos tu logo y tu identidad visual pensando en lo que te hace diferente. Escuchamos tu visión, estudiamos tu competencia, y creamos un logo que no solo es bello sino estratégico. Recibirás archivos de alta calidad listos para usar en cualquier lado: web, impresos, ropa, redes sociales.
		</p>
	</div>
</InteriorSection>

<InteriorSection id="que-incluye" eyebrow="Qué incluye" title="Identidad visual completa" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'palette', title: 'Logo en alta resolución', desc: 'PNG, SVG, JPG y escala de grises.' },
			{ icon: 'palette', title: 'Paleta de colores', desc: 'Colores corporativos con códigos HEX y RGB.' },
			{ icon: 'file', title: 'Tipografías seleccionadas', desc: 'Fuentes para web e impresos.' },
			{ icon: 'file', title: 'Manual de uso básico', desc: 'Normas y criterios para usar el logo.' },
			{ icon: 'check', title: '2 rondas de revisión', desc: 'Ajustes hasta que sea perfecto.' },
			{ icon: 'zap', title: 'Entrega en 5 días', desc: 'Listo para empezar a usar.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si">
	<CheckList
		cols={2}
		items={[
			'Estás lanzando un negocio o rediseñando tu marca.',
			'Necesitas un logo profesional sin gastar miles de dólares.',
			'Quieres coherencia visual en web, redes y materiales impresos.',
			'Ya tienes sitio web pero la identidad visual no está clara.',
			'Necesitas archivos listos para usar en todas partes: digital e impreso.',
			'Quieres algo listo en menos de una semana.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De la conversación al logo final" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior highlight="Starter" />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Listo para tener un logo profesional?"
	text="Cuéntanos sobre tu negocio y tu visión. En 5 días entregaremos tu identidad visual completa, lista para usar en cualquier lado."
	waMsg="Hola CoreWerk, quiero diseñar mi Logo y Branding (USD 150)."
/>
