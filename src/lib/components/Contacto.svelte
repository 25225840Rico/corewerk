<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '$lib/Icon.svelte';
	import { contact, projectTypes } from '$lib/data';
	import { reveal } from '$lib/reveal';
	import { WA_LINK } from '$lib/seo/site';

	let name = $state('');
	let company = $state('');
	let email = $state('');
	let phone = $state('');
	let projectType = $state('');
	let message = $state('');

	let status = $state<'idle' | 'loading' | 'success'>('idle');
	let errors = $state<Record<string, string>>({});

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	function validate(): boolean {
		const next: Record<string, string> = {};
		if (!name.trim()) next.name = 'El nombre es obligatorio.';
		if (!email.trim()) next.email = 'El correo es obligatorio.';
		else if (!emailRegex.test(email.trim())) next.email = 'Ingresa un correo válido.';
		if (!message.trim()) next.message = 'El mensaje es obligatorio.';
		errors = next;
		return Object.keys(next).length === 0;
	}

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!validate()) return;
		status = 'loading';
		setTimeout(() => (status = 'success'), 1200);
	}

	const field =
		'w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-faint focus:border-accent2 focus:outline-none transition-colors duration-120';
</script>

<section id="contacto" class="bg-surface-200 py-20 lg:py-28">
	<div class="container-w">
		<div class="reveal mx-auto mb-12 max-w-2xl text-center" use:reveal>
			<span class="eyebrow">Contacto</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
				Hablemos de su operación
			</h2>
			<p class="mt-4 text-lg text-muted">
				Cuéntenos qué necesita y le respondemos dentro de 24 horas con una propuesta sin compromiso.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2" use:reveal>
			<!-- Formulario -->
			<div class="card p-8">
				{#if status === 'success'}
					<div
						transition:fade={{ duration: 300 }}
						class="rounded-xl border border-success/30 bg-success/10 p-4 font-medium text-success"
						role="alert"
					>
						¡Gracias! Le responderemos dentro de 24 horas.
					</div>
				{:else}
					<form onsubmit={handleSubmit} novalidate class="flex flex-col gap-5">
						<div>
							<label for="c-name" class="mb-1 block text-sm font-medium text-ink">
								Nombre <span class="text-accent">*</span>
							</label>
							<input id="c-name" type="text" bind:value={name} placeholder="Su nombre" class={field} />
							{#if errors.name}<p class="mt-1 text-sm text-danger">{errors.name}</p>{/if}
						</div>

						<div>
							<label for="c-company" class="mb-1 block text-sm font-medium text-ink">
								Empresa <span class="text-xs text-faint">(opcional)</span>
							</label>
							<input
								id="c-company"
								type="text"
								bind:value={company}
								placeholder="Nombre de su empresa"
								class={field}
							/>
						</div>

						<div>
							<label for="c-email" class="mb-1 block text-sm font-medium text-ink">
								Correo electrónico <span class="text-accent">*</span>
							</label>
							<input
								id="c-email"
								type="email"
								bind:value={email}
								placeholder="usted@empresa.cl"
								class={field}
							/>
							{#if errors.email}<p class="mt-1 text-sm text-danger">{errors.email}</p>{/if}
						</div>

						<div>
							<label for="c-phone" class="mb-1 block text-sm font-medium text-ink">
								Teléfono <span class="text-xs text-faint">(opcional)</span>
							</label>
							<input
								id="c-phone"
								type="tel"
								bind:value={phone}
								placeholder="+56 9 XXXX XXXX"
								class={field}
							/>
						</div>

						<div>
							<label for="c-type" class="mb-1 block text-sm font-medium text-ink">¿Qué necesita?</label>
							<select id="c-type" bind:value={projectType} class="{field} appearance-none">
								<option value="" disabled selected>Seleccione una opción…</option>
								{#each projectTypes as pt}
									<option value={pt}>{pt}</option>
								{/each}
							</select>
						</div>

						<div>
							<label for="c-message" class="mb-1 block text-sm font-medium text-ink">
								Mensaje <span class="text-accent">*</span>
							</label>
							<textarea
								id="c-message"
								rows={4}
								bind:value={message}
								placeholder="Cuéntenos sobre su proyecto u operación…"
								class="{field} resize-y"
							></textarea>
							{#if errors.message}<p class="mt-1 text-sm text-danger">{errors.message}</p>{/if}
						</div>

						<button
							type="submit"
							disabled={status === 'loading'}
							class="btn-accent w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-60"
						>
							{status === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
						</button>
					</form>
				{/if}
			</div>

			<!-- Datos + CTA WhatsApp -->
			<div class="flex flex-col gap-6">
				<div class="card flex flex-col gap-5 p-8">
					<h3 class="text-xl font-bold text-primary">Información de contacto</h3>

					<a
						href={contact.whatsapp}
						target="_blank"
						rel="noopener"
						class="flex items-center gap-3 text-sm text-ink transition-colors duration-120 hover:text-accent2"
					>
						<span class="text-accent2"><Icon name="zap" class="h-5 w-5" /></span>
						WhatsApp · {contact.whatsappLabel}
					</a>
					<a
						href={`mailto:${contact.email}`}
						class="flex items-center gap-3 text-sm text-ink transition-colors duration-120 hover:text-accent2"
					>
						<span class="text-accent2"><Icon name="mail" class="h-5 w-5" /></span>
						{contact.email}
					</a>
					<div class="flex items-center gap-3 text-sm text-ink">
						<span class="text-accent2"><Icon name="map" class="h-5 w-5" /></span>
						{contact.city}
					</div>
					<div class="flex items-center gap-3 text-sm text-ink">
						<span class="text-accent2"><Icon name="clock" class="h-5 w-5" /></span>
						{contact.hours}
					</div>
				</div>

				<!-- CTA directo a WhatsApp -->
				<div class="card flex flex-col gap-4 bg-primary p-8 text-white">
					<h3 class="text-xl font-bold">¿Prefiere hablar ahora?</h3>
					<p class="text-sm text-white/70">
						Escríbanos por WhatsApp y coordinamos un diagnóstico gratuito de su operación.
					</p>
					<a
						href={WA_LINK}
						target="_blank"
						rel="noopener"
						class="btn-accent w-full"
						style="background:#25D366;color:#fff;"
					>
						Escribir por WhatsApp
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
