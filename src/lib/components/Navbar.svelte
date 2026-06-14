<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import Icon from '$lib/Icon.svelte';
	import { WA_LINK } from '$lib/seo/site';

	let scrolled = $state(false);
	let open = $state(false);

	const navLinks = [
		{ label: 'Servicios', href: '#servicios' },
		{ label: 'Industrias', href: '#industrias' },
		{ label: 'Cómo trabajamos', href: '#proceso' },
		{ label: 'Precios', href: '#precios' },
		{ label: 'Contacto', href: '#contacto' }
	];

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed inset-x-0 top-0 z-40 transition-all duration-300 {scrolled
		? 'border-b border-line bg-white/90 shadow-card backdrop-blur'
		: 'border-b border-transparent bg-transparent'}"
>
	<div class="container-w flex items-center justify-between py-3.5">
		<!-- Logo -->
		<a
			href="#inicio"
			class="text-xl font-extrabold tracking-tight transition-opacity duration-120 hover:opacity-80 {scrolled
				? 'text-primary'
				: 'text-white'}"
		>
			Core<span class="text-accent">·</span>Werk
		</a>

		<!-- Desktop nav -->
		<nav class="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-sm font-medium transition-colors duration-120 {scrolled
						? 'text-muted hover:text-primary'
						: 'text-white/80 hover:text-white'}"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<!-- Desktop CTA -->
		<div class="hidden lg:block">
			<a href={WA_LINK} target="_blank" rel="noopener" class="btn-accent px-4 py-2 text-sm">
				Cotizar gratis
			</a>
		</div>

		<!-- Mobile hamburger -->
		<button
			class="rounded p-1 lg:hidden {scrolled ? 'text-primary' : 'text-white'}"
			onclick={() => (open = !open)}
			aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
			aria-expanded={open}
		>
			{#if open}
				<Icon name="close" class="h-6 w-6" label="Cerrar menú" />
			{:else}
				<Icon name="menu" class="h-6 w-6" label="Abrir menú" />
			{/if}
		</button>
	</div>

	<!-- Mobile dropdown -->
	{#if open}
		<div transition:slide={{ duration: 300 }} class="border-t border-line bg-white lg:hidden">
			<nav class="container-w flex flex-col py-2" aria-label="Menú móvil">
				{#each navLinks as link}
					<a
						href={link.href}
						class="border-b border-line py-3 text-muted transition-colors duration-120 hover:text-primary"
						onclick={() => (open = false)}
					>
						{link.label}
					</a>
				{/each}
				<div class="py-4">
					<a
						href={WA_LINK}
						target="_blank"
						rel="noopener"
						class="btn-accent block w-full text-center"
						onclick={() => (open = false)}
					>
						Cotizar gratis
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>
