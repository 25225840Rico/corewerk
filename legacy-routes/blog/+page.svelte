<script lang="ts">
	import SEO from '$lib/seo/SEO.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { blogPosts } from '$lib/content/blog';
</script>

<SEO
	title="Blog"
	description="Artículos sobre diseño web, SEO, e-commerce y desarrollo digital en Chile. Consejos prácticos para empresas y emprendedores."
	path="/blog"
/>

<Navbar />

<main class="overflow-hidden">
	<section class="px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
		<div class="mx-auto max-w-4xl">
			<div class="mb-12 text-center">
				<span class="eyebrow mb-5 justify-center">
					<span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
					Recursos y conocimiento
				</span>
				<h1 class="text-gradient mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
					Blog Konrad
				</h1>
				<p class="mx-auto max-w-2xl text-lg leading-relaxed text-muted">
					Artículos prácticos sobre diseño web, SEO, e-commerce y desarrollo digital para empresas chilenas.
				</p>
			</div>

			{#if blogPosts.length === 0}
				<div class="glass rounded-3xl p-12 text-center">
					<p class="mb-2 text-2xl font-bold text-ink">Pronto publicaremos contenido</p>
					<p class="text-muted">
						Estamos preparando artículos sobre diseño web, SEO y estrategia digital para tu empresa.
						Vuelve pronto o escríbenos si tienes alguna consulta.
					</p>
					<div class="mt-8">
						<a href="/#contacto" class="btn-accent">Habla con nosotros</a>
					</div>
				</div>
			{:else}
				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each blogPosts as post}
						<a
							href={`/blog/${post.slug}`}
							class="glass glass-card flex flex-col rounded-2xl p-6 transition-transform hover:-translate-y-1"
						>
							<span class="eyebrow mb-3 text-xs">
								{new Date(post.date).toLocaleDateString('es-CL', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})} · {post.readingMinutes} min de lectura
							</span>
							<h2 class="mb-2 text-lg font-bold leading-snug text-ink">{post.title}</h2>
							<p class="flex-1 text-sm leading-relaxed text-muted">{post.description}</p>
							<span class="mt-4 text-sm font-semibold text-accent">Leer artículo →</span>
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</section>
</main>

<Footer />
