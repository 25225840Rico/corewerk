<script lang="ts">
	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
	import { magnetic, splitChars } from '$lib/fx';
	import { heroPills } from '$lib/data';

	let heroText: HTMLElement;
	let heroSection: HTMLElement;
	let heroBg: HTMLElement;

	onMount(async () => {
		// ── Animación headline letra por letra con GSAP ──────────────────
		if (typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			try {
				const { gsap } = await import('gsap');
				// splitChars ya habrá dividido el h1 en spans vía use:splitChars
				if (heroText) {
					const spans = heroText.querySelectorAll('span');
					if (spans.length > 0) {
						gsap.fromTo(
							spans,
							{ y: -40, opacity: 0 },
							{
								y: 0,
								opacity: 1,
								stagger: 0.03,
								duration: 0.7,
								ease: 'power4.out',
								clearProps: 'transform'
							}
						);
					}
				}
			} catch {
				// GSAP falla: el texto queda visible (sin animación)
				if (heroText) {
					const spans = heroText.querySelectorAll('span');
					spans.forEach((s) => {
						(s as HTMLElement).style.opacity = '1';
					});
				}
			}
		}

		// ── Parallax sutil en scroll (60fps, solo transform) ─────────────
		if (typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !window.matchMedia('(pointer: coarse)').matches) {
			let ticking = false;

			function onScroll() {
				if (!ticking) {
					requestAnimationFrame(() => {
						const scrollY = window.scrollY;
						if (heroSection) {
							// Bloque de texto: mueve a 0.6x del scroll
							const content = heroSection.querySelector<HTMLElement>('.hero-content');
							if (content) {
								content.style.transform = `translateY(${scrollY * 0.18}px)`;
							}
						}
						if (heroBg) {
							// Elemento de fondo: mueve a 0.3x del scroll
							heroBg.style.transform = `translateY(${scrollY * 0.08}px)`;
						}
						ticking = false;
					});
					ticking = true;
				}
			}

			window.addEventListener('scroll', onScroll, { passive: true });

			return () => {
				window.removeEventListener('scroll', onScroll);
			};
		}
	});
</script>

<section
	bind:this={heroSection}
	id="inicio"
	class="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28"
>
	<!-- Dot pattern sutil sobre la escena -->
	<div
		bind:this={heroBg}
		class="dot-pattern pointer-events-none absolute inset-0 opacity-20"
		style="will-change: transform;"
		aria-hidden="true"
	></div>

	<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Main content -->
		<div class="hero-content max-w-3xl" use:reveal style="will-change: transform;">
			<!-- Headline animado letra por letra -->
			<h1
				bind:this={heroText}
				use:splitChars
				class="mb-6 text-[52px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-7xl lg:text-[96px]"
			>
				<span class="text-gradient">Creamos el sitio web</span><br />
				<span class="text-gradient">que </span><span class="text-accent">tu negocio necesita</span>
			</h1>

			<!-- Subheadline: 18px, weight 400, line-height 1.7, text-muted -->
			<p class="mb-8 max-w-2xl text-lg font-normal leading-[1.7] text-muted">
				Desde tiendas online hasta plataformas institucionales. Diseñamos, desarrollamos y mejoramos
				sitios web para cualquier tipo de proyecto — rápidos, modernos y hechos para convertir.
			</p>

			<!-- CTAs: máx 2 (Hick's Law). CTA primario ámbar es el ÚNICO ámbar de relleno. -->
			<div class="mb-6 flex flex-wrap gap-4">
				<!-- CTA primario: ámbar + magnetic -->
				<a href="#contacto" class="btn-accent" use:magnetic={{ strength: 8 }}>
					Quiero una web nueva
				</a>
				<!-- CTA secundario: vidrio (Von Restorff: no compite con el ámbar) -->
				<a href="#diagnostico" class="btn-glass">
					Mejorar mi web actual
				</a>
			</div>

			<!-- Indicadores de credibilidad -->
			<p class="text-sm text-faint">
				9 tipos de proyectos · +30 sitios entregados · Respuesta en 24 h
			</p>
		</div>

		<!-- Pills row -->
		<div class="mt-12" use:reveal>
			<div class="flex gap-3 overflow-x-auto no-scrollbar pb-2 sm:flex-wrap">
				{#each heroPills as pill}
					<span
						class="glass whitespace-nowrap rounded-full px-4 py-2 text-sm text-ink/90 transition-colors duration-120 hover:text-ink"
						style="transition-timing-function: var(--ease-spring);"
					>
						{pill}
					</span>
				{/each}
			</div>
		</div>
	</div>
</section>
