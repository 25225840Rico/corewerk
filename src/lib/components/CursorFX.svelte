<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		// Guard: no-op en SSR (onMount ya garantiza browser), pero verificamos igual
		if (typeof window === 'undefined') return;

		// No activar en pointer:coarse (mobile/touch)
		if (window.matchMedia('(pointer: coarse)').matches) return;

		// No activar si reduce-motion
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		// Añadir clase al body para ocultar cursor nativo en desktop
		document.body.classList.add('cursor-fx-active');

		const dot = document.getElementById('cursor-fx-dot');
		if (!dot) return;

		let mouseX = -200;
		let mouseY = -200;
		let currentX = -200;
		let currentY = -200;
		let rafId: number;
		let isExpanded = false;

		function lerp(a: number, b: number, t: number) {
			return a + (b - a) * t;
		}

		function loop() {
			currentX = lerp(currentX, mouseX, 0.14);
			currentY = lerp(currentY, mouseY, 0.14);
			dot.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
			rafId = requestAnimationFrame(loop);
		}

		function onMouseMove(e: MouseEvent) {
			mouseX = e.clientX;
			mouseY = e.clientY;
		}

		function onMouseEnterInteractive(e: Event) {
			const target = e.currentTarget as HTMLElement;
			if (target.matches('a, button, [data-cursor]')) {
				isExpanded = true;
				dot.classList.add('cursor-fx-expanded');
			}
		}

		function onMouseLeaveInteractive() {
			isExpanded = false;
			dot.classList.remove('cursor-fx-expanded');
		}

		// Delegación de eventos para elementos interactivos
		function onMouseOver(e: MouseEvent) {
			const target = e.target as HTMLElement;
			const interactive = target.closest('a, button, [data-cursor]');
			if (interactive && !isExpanded) {
				isExpanded = true;
				dot.classList.add('cursor-fx-expanded');
			} else if (!interactive && isExpanded) {
				isExpanded = false;
				dot.classList.remove('cursor-fx-expanded');
			}
		}

		window.addEventListener('mousemove', onMouseMove, { passive: true });
		document.addEventListener('mouseover', onMouseOver, { passive: true });

		rafId = requestAnimationFrame(loop);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseover', onMouseOver);
			cancelAnimationFrame(rafId);
			document.body.classList.remove('cursor-fx-active');
		};
	});
</script>

<!-- Cursor dot: position fixed, pointer-events none, z-index alto -->
<div
	id="cursor-fx-dot"
	aria-hidden="true"
	class="cursor-fx"
></div>
