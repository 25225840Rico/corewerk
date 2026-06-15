<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';
	import { contact, waLink } from '$lib/data';

	let {
		title = '¿Conversamos?',
		text = 'Cuéntanos qué necesitas y te respondemos con una propuesta concreta, precio fijo y plazo cerrado. Sin compromiso.',
		waMsg = 'Hola CoreWerk, quiero información sobre sus servicios.',
		ai = false
	}: {
		title?: string;
		text?: string;
		waMsg?: string;
		ai?: boolean;
	} = $props();
</script>

<section class="{ai ? 'bg-ai-section' : 'bg-corewerk'} py-20 lg:py-24">
	<div class="container-w">
		<div class="reveal mx-auto max-w-3xl {ai ? 'glass-card-ai' : 'glass-card'} p-6 text-center sm:p-10 lg:p-14" use:reveal>
			<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
			<p class="mx-auto mt-5 max-w-xl text-base text-muted leading-relaxed">{text}</p>
			<div class="mt-10 flex flex-wrap justify-center gap-3">
				<a
					href={waLink(waMsg)}
					target="_blank"
					rel="noopener noreferrer"
					class={ai ? 'btn-ai' : 'btn-accent'}
				>
					<Icon name="whatsapp" class="h-4 w-4" />
					Escribir por WhatsApp
				</a>
				<a href={`mailto:${contact.email}`} class="btn-ghost">
					<Icon name="mail" class="h-4 w-4" />
					{contact.email}
				</a>
			</div>
		</div>
	</div>
</section>
