<script lang="ts">
	import SEO from '$lib/seo/SEO.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { SITE } from '$lib/seo/site';
	import type { BlogPost } from '$lib/content/types';

	let { data }: { data: { post: BlogPost } } = $props();
	const { post } = data;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'BlogPosting',
				headline: post.title,
				description: post.tldr,
				datePublished: post.date,
				author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
				publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
				mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/blog/${post.slug}` }
			},
			...(post.faqs.length > 0
				? [
						{
							'@type': 'FAQPage',
							mainEntity: post.faqs.map((f) => ({
								'@type': 'Question',
								name: f.q,
								acceptedAnswer: { '@type': 'Answer', text: f.a }
							}))
						}
					]
				: [])
		]
	};
</script>

<SEO
	title={post.title}
	description={post.description}
	path={`/blog/${post.slug}`}
	type="article"
	{jsonLd}
/>

<Navbar />

<main class="overflow-hidden">
	<article class="mx-auto max-w-3xl px-4 pb-20 pt-32 sm:px-6 lg:pt-40">
		<!-- Encabezado del artículo -->
		<header class="mb-10">
			<span class="eyebrow mb-4">
				{new Date(post.date).toLocaleDateString('es-CL', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})} · {post.readingMinutes} min de lectura
			</span>
			<h1 class="text-gradient mb-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
				{post.title}
			</h1>

			<!-- TLDR destacado (GEO: citable por IAs) -->
			<div class="glass rounded-2xl p-5">
				<p class="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">Resumen rápido</p>
				<p class="text-sm leading-relaxed text-ink/90">{post.tldr}</p>
			</div>
		</header>

		<!-- Cuerpo del artículo -->
		<div class="prose-konrad">
			{@html post.body}
		</div>

		<!-- FAQs al final del artículo -->
		{#if post.faqs.length > 0}
			<section class="mt-16">
				<h2 class="mb-8 text-2xl font-bold text-ink lg:text-3xl">Preguntas frecuentes</h2>
				<div class="glass divide-y divide-white/10 rounded-3xl px-6 sm:px-8">
					{#each post.faqs as f}
						<div class="py-6">
							<h3 class="mb-2 font-semibold text-ink">{f.q}</h3>
							<p class="text-muted">{f.a}</p>
						</div>
					{/each}
				</div>
			</section>
		{/if}

		<!-- CTA final -->
		<div class="mt-16 text-center">
			<div class="glass rounded-3xl p-8">
				<p class="mb-2 text-xl font-bold text-ink">¿Tienes un proyecto en mente?</p>
				<p class="mb-6 text-muted">Cuéntanos qué necesitas y te enviamos una propuesta en 24 horas.</p>
				<a href="/#contacto" class="btn-accent">Solicitar propuesta gratis</a>
			</div>
		</div>
	</article>
</main>

<Footer />

<style>
	:global(.prose-konrad h2) {
		color: var(--color-ink, #f1f5f9);
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 2.5rem;
		margin-bottom: 0.75rem;
		line-height: 1.25;
	}
	:global(.prose-konrad h3) {
		color: var(--color-ink, #f1f5f9);
		font-size: 1.25rem;
		font-weight: 600;
		margin-top: 2rem;
		margin-bottom: 0.5rem;
		line-height: 1.3;
	}
	:global(.prose-konrad p) {
		color: var(--color-muted, #94a3b8);
		line-height: 1.75;
		margin-bottom: 1rem;
	}
	:global(.prose-konrad ul) {
		list-style-type: disc;
		padding-left: 1.5rem;
		margin-bottom: 1rem;
	}
	:global(.prose-konrad ol) {
		list-style-type: decimal;
		padding-left: 1.5rem;
		margin-bottom: 1rem;
	}
	:global(.prose-konrad li) {
		color: var(--color-muted, #94a3b8);
		line-height: 1.75;
		margin-bottom: 0.25rem;
	}
	:global(.prose-konrad a) {
		color: var(--color-accent, #f59e0b);
		text-decoration: underline;
	}
	:global(.prose-konrad strong) {
		color: var(--color-ink, #f1f5f9);
		font-weight: 600;
	}
	:global(.prose-konrad blockquote) {
		border-left: 3px solid var(--color-accent, #f59e0b);
		padding-left: 1rem;
		margin-left: 0;
		font-style: italic;
	}
</style>
