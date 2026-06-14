<script lang="ts">
	// Componente SEO reutilizable: meta tags, Open Graph, Twitter, canonical,
	// hreflang y JSON-LD. Usado por la landing y todas las subpáginas.
	import { SITE } from '$lib/seo/site';

	let {
		title,
		description,
		path = '/',
		image = `${SITE.url}/og/default.jpg`,
		type = 'website',
		jsonLd = null
	}: {
		title: string;
		description: string;
		path?: string;
		image?: string;
		type?: string;
		jsonLd?: unknown;
	} = $props();

	const fullTitle = `${title} | Konrad — Agencia Web Chile`;
	const canonical = `${SITE.url}${path}`;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />

	<!-- Señales de idioma -->
	<link rel="alternate" hreflang="es-CL" href={canonical} />
	<link rel="alternate" hreflang="es" href={canonical} />
	<link rel="alternate" hreflang="x-default" href={canonical} />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content={type} />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="Konrad" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	{#if jsonLd}
		{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}
	{/if}
</svelte:head>
