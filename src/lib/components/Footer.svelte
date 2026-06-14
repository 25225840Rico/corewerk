<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { contact } from '$lib/data';
	import { units } from '$lib/data';

	const year = new Date().getFullYear();
</script>

<footer class="bg-primary text-white">
	<div class="container-w py-16">
		<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Marca -->
			<div>
				<p class="text-xl font-extrabold">Core<span class="text-accent">·</span>Werk</p>
				<p class="mt-2 text-sm text-white/60">Tecnología que trabaja en faena.</p>
				<p class="mt-4 text-xs text-white/45">
					Unidad tecnológica de CoreService<br />Antofagasta, Chile
				</p>
				<div class="mt-5 flex gap-4">
					<a
						href="https://www.linkedin.com/company/corewerk"
						target="_blank"
						rel="noopener"
						aria-label="LinkedIn de CoreWerk"
						class="text-white/60 transition-colors duration-120 hover:text-accent"
					>
						<Icon name="linkedin" class="h-5 w-5" label="LinkedIn" />
					</a>
				</div>
			</div>

			<!-- Servicios -->
			<div>
				<h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Servicios</h3>
				<ul class="mt-4 space-y-2 text-sm text-white/65">
					{#each units as u}
						<li>
							<a href="#servicios" class="transition-colors duration-120 hover:text-white">{u.name}</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Empresa -->
			<div>
				<h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Empresa</h3>
				<ul class="mt-4 space-y-2 text-sm text-white/65">
					<li><a href="#industrias" class="transition-colors duration-120 hover:text-white">Industrias</a></li>
					<li><a href="#proceso" class="transition-colors duration-120 hover:text-white">Cómo trabajamos</a></li>
					<li><a href="#casos" class="transition-colors duration-120 hover:text-white">Casos</a></li>
					<li><a href="#precios" class="transition-colors duration-120 hover:text-white">Precios</a></li>
				</ul>
			</div>

			<!-- Contacto -->
			<div>
				<h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Contacto</h3>
				<ul class="mt-4 space-y-3 text-sm text-white/65">
					<li>
						<a
							href={`mailto:${contact.email}`}
							class="flex items-center gap-2 transition-colors duration-120 hover:text-accent"
						>
							<Icon name="mail" class="h-4 w-4 shrink-0" /> {contact.email}
						</a>
					</li>
					<li>
						<a
							href={contact.whatsapp}
							target="_blank"
							rel="noopener"
							class="flex items-center gap-2 transition-colors duration-120 hover:text-accent"
						>
							<Icon name="zap" class="h-4 w-4 shrink-0" /> {contact.whatsappLabel}
						</a>
					</li>
					<li class="flex items-center gap-2">
						<Icon name="map" class="h-4 w-4 shrink-0" /> {contact.city}
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/45">
			© {year} CoreWerk · Antofagasta, Chile · Todos los derechos reservados
		</div>
	</div>
</footer>
