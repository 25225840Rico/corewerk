<script lang="ts">
	import HeroInterior from '$lib/components/interior/HeroInterior.svelte';
	import InteriorSection from '$lib/components/interior/InteriorSection.svelte';
	import CTAInterior from '$lib/components/interior/CTAInterior.svelte';
	import Icon from '$lib/Icon.svelte';
	import { contact, projectTypes, WA_LINK } from '$lib/data';
	import { SITE } from '$lib/seo/site';

	const description =
		'Contacta a CoreWerk por WhatsApp, email o teléfono. Estudio de diseño y IA con base en Antofagasta. Respuesta rápida y atención sin tecnicismos para tu proyecto web o automatización en Chile.';
	const canonical = `${SITE.url}/contacto/`;

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'ContactPage',
				name: 'Contacto — CoreWerk',
				description,
				url: canonical
			},
			{
				'@type': 'Organization',
				name: 'CoreWerk',
				url: SITE.url,
				contactPoint: [
					{
						'@type': 'ContactPoint',
						telephone: SITE.telephone,
						contactType: 'Customer Service',
						areaServed: 'CL'
					},
					{
						'@type': 'ContactPoint',
						email: SITE.email,
						contactType: 'Customer Service',
						areaServed: 'CL'
					}
				]
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Contacto', item: canonical }
				]
			}
		]
	};
</script>

<svelte:head>
	<title>Contacto — CoreWerk Chile</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Contacto — CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Contacto' }]}
	eyebrow="Contacto"
	icon="mail"
	title="Conversemos"
	subtitle="Responder consultas es lo que mejor hacemos. Escríbenos por WhatsApp, email o teléfono. Promesa: te responderemos sin tecnicismos y sin demora."
	ctaPrimary={{ label: 'Escribir por WhatsApp', href: WA_LINK, external: true }}
/>

<InteriorSection eyebrow="Canales de contacto" title="Elige cómo prefieres hablar" align="center">
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<a href={WA_LINK} target="_blank" rel="noopener noreferrer" class="glass-card group flex flex-col p-6 transition-all hover:border-accent/50">
			<span class="mb-4 inline-flex text-accent">
				<Icon name="whatsapp" class="h-8 w-8" />
			</span>
			<h3 class="text-lg font-semibold text-ink transition-colors group-hover:text-accent">WhatsApp</h3>
			<p class="mt-2 text-sm text-muted leading-relaxed">Mensajes instantáneos, respuesta rápida. Así es fácil conversar.</p>
			<div class="mt-5 border-t border-white/10 pt-4">
				<p class="font-mono font-bold text-accent">{contact.whatsappLabel}</p>
			</div>
		</a>

		<a href={`mailto:${contact.email}`} class="glass-card group flex flex-col p-6 transition-all hover:border-accent/50">
			<span class="mb-4 inline-flex text-accent">
				<Icon name="mail" class="h-8 w-8" />
			</span>
			<h3 class="text-lg font-semibold text-ink transition-colors group-hover:text-accent">Email</h3>
			<p class="mt-2 text-sm text-muted leading-relaxed">Para consultas detalladas o si prefieres email, cuéntanos con calma.</p>
			<div class="mt-5 border-t border-white/10 pt-4">
				<p class="font-mono text-sm font-bold text-accent">{contact.email}</p>
			</div>
		</a>

		<div class="glass-card flex flex-col p-6">
			<span class="mb-4 inline-flex text-accent">
				<Icon name="map" class="h-8 w-8" />
			</span>
			<h3 class="text-lg font-semibold text-ink">Ubicación</h3>
			<p class="mt-2 text-sm text-muted leading-relaxed">Estamos en {contact.city}, pero trabajamos 100% remoto en todo Chile.</p>
			<div class="mt-5 border-t border-white/10 pt-4">
				<p class="font-bold text-ink">{contact.city}</p>
				<p class="text-xs text-muted">Operamos de forma remota</p>
			</div>
		</div>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Tipos de proyecto" title="¿Qué necesitas?" align="center">
	<div class="max-w-3xl">
		<div class="flex flex-wrap justify-center gap-3">
			{#each projectTypes as type}
				<div class="inline-flex items-center border border-accent/30 bg-accent/5 px-4 py-2 text-sm font-medium text-accent transition-colors hover:border-accent/60 hover:bg-accent/10">
					{type}
				</div>
			{/each}
		</div>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Respuesta rápida" title="¿Cuándo te respondemos?">
	<div class="max-w-2xl border border-accent/20 bg-gradient-to-r from-accent/10 to-accentAI/10 p-8">
		<div class="flex gap-4">
			<span class="flex-shrink-0 text-accent">
				<Icon name="zap" class="h-8 w-8" />
			</span>
			<div>
				<h3 class="font-semibold text-ink">Respuesta en máximo 24 horas hábiles</h3>
				<p class="mt-2 text-sm text-muted leading-relaxed">
					Si escribes por WhatsApp entre 9:00 y 18:00 (lunes a viernes, hora de Chile), probablemente te respondamos en menos de 2 horas. Fuera de ese horario, el primer día hábil a las mañana.
				</p>
			</div>
		</div>
	</div>
</InteriorSection>

<CTAInterior
	title="¿Listo para comenzar?"
	text="No necesitas tener todo claro. Escríbenos lo que tienes en mente y en la primera conversación definimos juntos qué es lo que tu negocio necesita realmente."
	waMsg="Hola CoreWerk, tengo una consulta sobre mis opciones."
/>
