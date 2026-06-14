<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';
	import { cases } from '$lib/data';
</script>

<section id="casos" class="py-20 lg:py-28">
	<div class="container-w">
		<div class="reveal max-w-2xl" use:reveal>
			<span class="eyebrow">Casos de uso</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
				Resultados concretos en faena
			</h2>
			<p class="mt-4 text-lg text-muted">
				Ejemplos representativos del impacto que genera digitalizar la operación.
			</p>
		</div>

		<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each cases as c, i}
				<div class="reveal card card-hover p-6" style="transition-delay: {i * 60}ms;" use:reveal>
					<div class="flex items-center gap-3">
						<div
							class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-accent"
						>
							<Icon name={c.icon} class="h-5 w-5" />
						</div>
						<div>
							<div class="font-bold text-primary">{c.client}</div>
							<div class="flex items-center gap-1 text-xs text-faint">
								<Icon name="map" class="h-3 w-3" />
								{c.location}
							</div>
						</div>
					</div>
					<p class="mt-4 text-sm font-medium text-muted">{c.solution}</p>
					<p class="mt-3 border-t border-line pt-3 text-base font-semibold text-primary">
						“{c.result}”
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
