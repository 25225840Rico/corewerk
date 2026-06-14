<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		// Smooth scroll cinematográfico con Lenis. Se desactiva si el usuario
		// prefiere menos movimiento (accesibilidad) o en pantallas táctiles pequeñas.
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduce) return;

		let lenis: { raf: (t: number) => void; destroy: () => void; scrollTo: (t: unknown, o?: unknown) => void } | null = null;
		let rafId = 0;
		let cleanupAnchors: (() => void) | undefined;

		// Import dinámico: no bloquea el render inicial (Core Web Vitals).
		import('lenis').then(({ default: Lenis }) => {
			lenis = new Lenis({ duration: 1.1, smoothWheel: true });

			const raf = (time: number) => {
				lenis?.raf(time);
				rafId = requestAnimationFrame(raf);
			};
			rafId = requestAnimationFrame(raf);

			// Navegación suave a anclas internas (#id) de la misma página.
			const onClick = (e: MouseEvent) => {
				const target = (e.target as HTMLElement)?.closest('a');
				if (!target) return;
				const href = target.getAttribute('href') ?? '';
				if (href.startsWith('#') && href.length > 1) {
					const el = document.querySelector(href);
					if (el) {
						e.preventDefault();
						lenis?.scrollTo(el, { offset: -90 });
					}
				}
			};
			document.addEventListener('click', onClick);
			cleanupAnchors = () => document.removeEventListener('click', onClick);
		});

		return () => {
			cancelAnimationFrame(rafId);
			cleanupAnchors?.();
			lenis?.destroy();
		};
	});
</script>

{@render children()}
