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
		'Marketing B2B desde USD 600/mes. Estrategia de lead generation, LinkedIn, contenido, email marketing. Para empresas que venden a otras empresas en Chile.';
	const canonical = `${SITE.url}/servicios/marketing-b2b/`;

	const faqLocal = [
		{
			q: '¿Qué diferencia hay entre B2B y B2C marketing?',
			a: 'B2C vende a consumidores finales (rápido, emocional). B2B vende a empresas (lento, racional, múltiples decisores). Los canales, mensajes y ciclos de venta son completamente distintos.'
		},
		{
			q: '¿LinkedIn es realmente efectivo para B2B?',
			a: 'Sí, es el canal más importante. Es donde están los decision makers. Una estrategia de LinkedIn bien hecha genera leads de calidad que cierran en vendas altas.'
		},
		{
			q: '¿Cuántos leads por mes podemos generar?',
			a: 'Depende del rubro, precio de tu servicio y competencia. Una gestora contable podría generar 8-12 leads/mes. Un software B2B podría generar 5-8. Los reportamos mensualmente.'
		},
		{
			q: '¿Incluye contenido y artículos?',
			a: 'Sí. Creamos contenido que atrae a tu audiencia ideal: casos de éxito, guías técnicas, comparativas. Lo publicamos en LinkedIn, tu blog y otros canales B2B.'
		},
		{
			q: '¿Qué pasa si no generamos leads?',
			a: 'Ajustamos estrategia. Probamos distintos ángulos, públicos, mensajes. Los primeros 2-3 meses son de optimización. Si a los 3 meses no vemos movimiento, revisamos qué está mal.'
		},
		{
			q: '¿Se necesita un equipo de ventas para cerrar los leads?',
			a: 'Generamos leads calificados. Tu equipo de ventas tiene que cerrarlos. Si no tienes vendedor, podemos recomendar modelos alternativos como webinars de cierre o consultoría pre-venta.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Marketing B2B Profesional',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '600', priceCurrency: 'USD', priceValidUntil: '2026-12-31' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE.url}/servicios/` },
					{ '@type': 'ListItem', position: 3, name: 'Marketing B2B', item: canonical }
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
	<title>Marketing B2B desde USD 600/mes · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Marketing B2B desde USD 600/mes · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios/' }, { label: 'Marketing B2B' }]}
	eyebrow="Marketing B2B"
	icon="megaphone"
	title="Estrategia de marketing para empresas que venden a empresas"
	subtitle="Lead generation, LinkedIn, contenido, email marketing y automatización. Clientes calificados, ciclos de venta más cortos, presencia de marca. Desde USD 600/mes."
	price="USD 600/mes"
	days="Primeros leads en 4-6 semanas"
	ctaPrimary={{ label: 'Activar estrategia', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="Marketing dirigido a empresas, no consumidores">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Marketing B2B (empresa a empresa) es distinto a B2C. Aquí la venta toma más tiempo, hay múltiples decisores y el proceso es más racional. No puedes vender con un "cómpralo ahora": necesitas generar confianza, educar, demostrar valor.
		</p>
		<p>
			LinkedIn es el canal rey del B2B. Ahi están los gerentes, directores y decisores. Una estrategia bien hecha de LinkedIn + contenido + email trae leads calificados que tu equipo de ventas cierra en contratos grandes.
		</p>
		<p>
			En CoreWerk diseñamos tu estrategia B2B: identificamos tu buyer persona, creamos contenido que atrae a decisores, optimizamos tu presencia en LinkedIn, automatizamos el follow-up y medimos todo. Tu trabajo: cerrar las oportunidades que generamos.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Estrategia B2B completa" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'users', title: 'Definición de Buyer Persona', desc: 'Mapeo detallado de quién toma decisiones en tu mercado.' },
			{ icon: 'linkedin', title: 'Estrategia LinkedIn', desc: 'Perfil optimizado, publicaciones, outreach y generación de contactos.' },
			{ icon: 'file', title: 'Contenido B2B', desc: 'Case studies, webinars, guías técnicas y white papers.' },
			{ icon: 'mail', title: 'Email Marketing', desc: 'Secuencias de nurture automáticas para calentar leads.' },
			{ icon: 'chart', title: 'Segmentación de leads', desc: 'Clasificamos leads por potencial y etapa de compra.' },
			{ icon: 'dashboard', title: 'Reportes de ROI', desc: 'Leads generados, tasa de cierre, valor de cliente promedio.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Ideal si...">
	<CheckList
		cols={2}
		items={[
			'Vendes servicios o software a otras empresas (B2B).',
			'Tu ciclo de venta es largo: 2-6 meses desde contacto hasta cierre.',
			'Necesitas leads calificados, no tráfico masivo de gente aleatoria.',
			'Ya tienes equipo de vendedores pero no tienen suficientes oportunidades.',
			'Tus competidores están en LinkedIn y tú aún no tienes presencia.',
			'Quieres posicionarte como experto en tu industria y atraer por inbound.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="Estrategia y ejecución diaria" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Retainer B2B con resultados medibles" align="center">
	<PreciosInterior />
</InteriorSection>

<InteriorSection eyebrow="Dudas frecuentes" title="Preguntas sobre marketing B2B" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Listo para generar leads B2B calificados?"
	text="Hagamos una sesión de diagnóstico donde analizamos tu mercado, competencia y oportunidades de posicionamiento. Te presentamos una estrategia con proyección de leads por mes."
	waMsg="Hola CoreWerk, necesito estrategia marketing B2B para mi empresa (desde USD 600/mes)."
/>
