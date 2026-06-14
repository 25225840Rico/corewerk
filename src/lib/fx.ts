// fx.ts — Svelte actions para micro-interacciones premium (client-only)
// REGLA: todo acceso a window/document está guardado.
// Si SSR, pointer:coarse o reduce-motion => no-op.

function prefersReducedMotion(): boolean {
	if (typeof window === 'undefined') return true;
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isCoarsePointer(): boolean {
	if (typeof window === 'undefined') return true;
	return window.matchMedia('(pointer: coarse)').matches;
}

// ─── magnetic ───────────────────────────────────────────────────────────────
// Desplaza el nodo hacia el cursor con lerp cuando está a ≤80px.
export function magnetic(node: HTMLElement, { strength = 8 }: { strength?: number } = {}) {
	if (typeof window === 'undefined') return {};
	if (prefersReducedMotion() || isCoarsePointer()) return {};

	let rafId: number;
	let targetX = 0;
	let targetY = 0;
	let currentX = 0;
	let currentY = 0;
	let active = false;

	function lerp(a: number, b: number, t: number) {
		return a + (b - a) * t;
	}

	function loop() {
		currentX = lerp(currentX, targetX, 0.12);
		currentY = lerp(currentY, targetY, 0.12);
		node.style.transform = `translate(${currentX}px, ${currentY}px)`;

		if (active || Math.abs(currentX) > 0.1 || Math.abs(currentY) > 0.1) {
			rafId = requestAnimationFrame(loop);
		}
	}

	function onMouseMove(e: MouseEvent) {
		const rect = node.getBoundingClientRect();
		const cx = rect.left + rect.width / 2;
		const cy = rect.top + rect.height / 2;
		const dx = e.clientX - cx;
		const dy = e.clientY - cy;
		const dist = Math.sqrt(dx * dx + dy * dy);
		const radius = 80;

		if (dist < radius) {
			const factor = (1 - dist / radius) * strength;
			targetX = (dx / dist) * factor;
			targetY = (dy / dist) * factor;
			if (!active) {
				active = true;
				rafId = requestAnimationFrame(loop);
			}
		} else {
			targetX = 0;
			targetY = 0;
		}
	}

	function onMouseLeave() {
		active = false;
		targetX = 0;
		targetY = 0;
		// Continue loop to animate back to 0
		rafId = requestAnimationFrame(loop);
	}

	window.addEventListener('mousemove', onMouseMove);
	node.addEventListener('mouseleave', onMouseLeave);

	return {
		destroy() {
			window.removeEventListener('mousemove', onMouseMove);
			node.removeEventListener('mouseleave', onMouseLeave);
			cancelAnimationFrame(rafId);
			node.style.transform = '';
		}
	};
}

// ─── tilt ────────────────────────────────────────────────────────────────────
// Tilt 3D de perspectiva al pasar el mouse sobre el nodo.
export function tilt(node: HTMLElement, { max = 8 }: { max?: number } = {}) {
	if (typeof window === 'undefined') return {};
	if (prefersReducedMotion() || isCoarsePointer()) return {};

	node.style.transition = 'transform 0.3s var(--ease-spring), box-shadow 0.3s var(--ease-spring)';
	node.style.willChange = 'transform';

	function onMouseMove(e: MouseEvent) {
		const rect = node.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const cx = rect.width / 2;
		const cy = rect.height / 2;
		const rotateX = ((y - cy) / cy) * -max;
		const rotateY = ((x - cx) / cx) * max;
		node.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
		node.style.transition = 'transform 0.08s linear';
	}

	function onMouseLeave() {
		node.style.transition = 'transform 0.4s var(--ease-spring)';
		node.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
	}

	node.addEventListener('mousemove', onMouseMove);
	node.addEventListener('mouseleave', onMouseLeave);

	return {
		destroy() {
			node.removeEventListener('mousemove', onMouseMove);
			node.removeEventListener('mouseleave', onMouseLeave);
			node.style.transform = '';
			node.style.transition = '';
			node.style.willChange = '';
		}
	};
}

// ─── splitChars ──────────────────────────────────────────────────────────────
// Divide el textContent del nodo en <span> por carácter para animarlos.
export function splitChars(node: HTMLElement) {
	if (typeof window === 'undefined') return {};

	const original = node.innerHTML;
	const text = node.textContent ?? '';

	// Preservar nodos hijos con clases (text-gradient, text-accent, etc.)
	// Iteramos childNodes y dividimos sólo los TextNodes
	const children = Array.from(node.childNodes);
	node.innerHTML = '';

	for (const child of children) {
		if (child.nodeType === Node.TEXT_NODE) {
			const chars = child.textContent ?? '';
			for (const char of chars) {
				const span = document.createElement('span');
				span.style.display = 'inline-block';
				span.innerHTML = char === ' ' ? '&nbsp;' : char;
				node.appendChild(span);
			}
		} else if (child.nodeType === Node.ELEMENT_NODE) {
			// Es un elemento (ej: <span class="text-accent">). Dividir su contenido.
			const el = child as HTMLElement;
			const elChars = el.textContent ?? '';
			for (const char of elChars) {
				const span = document.createElement('span');
				span.style.display = 'inline-block';
				// Heredar clases del elemento padre
				span.className = el.className;
				span.innerHTML = char === ' ' ? '&nbsp;' : char;
				node.appendChild(span);
			}
		}
	}

	return {
		destroy() {
			node.innerHTML = original;
		}
	};
}
