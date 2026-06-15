<script lang="ts">
	import HeroInterior from '$lib/components/interior/HeroInterior.svelte';
	import InteriorSection from '$lib/components/interior/InteriorSection.svelte';
	import FeatureGrid from '$lib/components/interior/FeatureGrid.svelte';
	import ProcesoInterior from '$lib/components/interior/ProcesoInterior.svelte';
	import CTAInterior from '$lib/components/interior/CTAInterior.svelte';
	import { metrics } from '$lib/data';
	import { SITE } from '$lib/seo/site';

	const description =
		'Conoce CoreWerk: estudio de diseño, desarrollo web e inteligencia artificial con base en Antofagasta. Trabajamos de forma remota con clientes en todo Chile, especializados en IA y transformación digital para pymes.';
	const canonical = `${SITE.url}/nosotros/`;

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'AboutPage',
				name: 'Acerca de CoreWerk',
				description,
				url: canonical
			},
			{
				'@type': 'Organization',
				name: 'CoreWerk',
				url: SITE.url,
				logo: `${SITE.url}/logo.svg`,
				foundingDate: '2024',
				areaServed: { '@type': 'Country', name: 'Chile' },
				contactPoint: {
					'@type': 'ContactPoint',
					telephone: SITE.telephone,
					contactType: 'Customer Service',
					areaServed: 'CL'
				}
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Nosotros', item: canonical }
				]
			}
		]
	};
</script>

<svelte:head>
	<title>CoreWerk: estudio de IA y desarrollo web en Chile</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Nosotros · Acerca de CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Nosotros' }]}
	eyebrow="Nosotros"
	icon="users"
	title="CoreWerk: especialistas en IA y transformación digital"
	subtitle="CoreWerk es un estudio joven, ágil y especializado en inteligencia artificial y desarrollo web. Diseñamos y ejecutamos proyectos que convierten las limitaciones de las pymes en oportunidades de crecimiento."
	ctaPrimary={{ label: 'Hablemos de tu proyecto', href: 'https://wa.me/56900000000', external: true }}
/>

<InteriorSection eyebrow="Quiénes somos" title="Un equipo pequeño con grandes resultados">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			CoreWerk nació en 2024 como respuesta a una necesidad real: las pymes de Chile necesitan soluciones digitales modernas y accesibles, pero con un equipo que entienda sus limitaciones de presupuesto y tiempo.
		</p>
		<p>
			Somos un estudio de diseño, desarrollo web e inteligencia artificial con base en Antofagasta, operando de forma 100% remota en todo Chile. Trabajamos con empresas de todos los tamaños—desde emprendedores solitarios hasta medianas empresas—y nos especializamos en proyectos donde la IA y la automatización generan un impacto real en la operación.
		</p>
		<p>
			No somos una agencia tradicional. No inventamos clientes históricos ni años de trayectoria falsa. Somos nuevos, rápidos y especializados. Eso significa que entendemos la urgencia de tu negocio, no tenemos capas de burocracia y nos movemos con velocidad de startup sin perder la calidad de quienes saben lo que hacen.
		</p>
		<p>
			Cada proyecto que tocamos tiene un objetivo claro: mejorar tu flujo de trabajo, captar más clientes o reducir costos operativos. El resto es ruido. Trabajamos con precio fijo, plazo cerrado y comunicación directa. Sin sorpresas, sin tecnicismos innecesarios.
		</p>
		<p>
			En un mundo donde la IA cambia las reglas cada 3 meses, ser joven y especializado es una ventaja. Nos actualizamos constantemente y experimentamos con herramientas nuevas antes de aplicarlas a proyectos reales. Eso nos permite recomendarte la tecnología correcta, no la de moda.
		</p>
		<p>
			Nuestro éxito se mide en el tuyo. Si tu negocio crece, nosotros crecemos. Si tu agente IA no genera leads, no lo entregamos. Si tu sitio web no se ve bien en celular, volvemos a hacerlo.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Por qué elegirnos" title="Lo que nos diferencia" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'code', title: 'Precio fijo, sin sorpresas', desc: 'Sabes exactamente qué pagas antes de firmar. Cero letras chicas, cero cambios de alcance a mitad del proyecto.' },
			{ icon: 'clock', title: 'Plazos cerrados', desc: 'Te damos una fecha de entrega y la cumplimos. Si terminamos antes, aún mejor. La fiabilidad es nuestro estándar.' },
			{ icon: 'brain', title: 'Especialistas en IA', desc: 'Mientras otros estudios aún aprenden, nosotros ya implementamos agentes IA funcionales en clientes reales.' },
			{ icon: 'chat', title: 'Soporte cercano', desc: 'Trabajamos por WhatsApp, respondemos rápido y te explicamos todo en términos reales, no en jerga técnica.' },
			{ icon: 'zap', title: 'Sin tecnicismos', desc: 'Diseñamos para que tú y tu equipo lo usen sin necesidad de capacitación intensiva. Simple y directo.' },
			{ icon: 'globe', title: 'Trabajo remoto a todo Chile', desc: 'No importa si estás en Arica o Punta Arenas. Trabajamos 100% remoto y atendemos como si fuéramos vecinos.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="Proceso transparente de 4 pasos" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection eyebrow="Números" title="Nuestro impacto" align="center">
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{#each metrics as metric}
			<div class="flex flex-col items-center">
				<p class="text-center text-4xl font-bold text-accent">
					{metric.prefix}{metric.value}{metric.suffix}
				</p>
				<p class="mt-2 text-center text-sm text-muted">{metric.label}</p>
			</div>
		{/each}
	</div>
</InteriorSection>

<CTAInterior
	title="¿Listo para transformar tu negocio?"
	text="No importa si tienes una idea vaga o ya sabes exactamente qué necesitas. Conversemos sin compromiso sobre tu proyecto y cómo podemos ayudarte a crecer con IA y transformación digital."
	waMsg="Hola CoreWerk, me gustaría conocer más sobre el equipo y cómo pueden ayudarme."
/>
