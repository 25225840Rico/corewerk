<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { processSteps } from '$lib/data';
</script>

<section id="proceso" class="py-20 lg:py-28">
	<div class="container-w">
		<div class="reveal max-w-2xl" use:reveal>
			<span class="eyebrow">Cómo trabajamos</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
				De la operación al resultado, en cuatro pasos
			</h2>
			<p class="mt-4 text-lg text-muted">
				Un proceso claro, con precio fijo y avances visibles desde la primera semana.
			</p>
		</div>

		<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each processSteps as step, i}
				<div class="reveal relative" style="transition-delay: {i * 80}ms;" use:reveal>
					<div class="card h-full p-6">
						<div
							class="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-lg font-extrabold text-primary"
						>
							{step.n}
						</div>
						<h3 class="mt-5 text-lg font-bold text-primary">{step.title}</h3>
						<p class="mt-2 text-sm text-muted">{step.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
