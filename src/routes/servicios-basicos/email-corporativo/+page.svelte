<script lang="ts">
	import HeroInterior from '$lib/components/interior/HeroInterior.svelte';
	import InteriorSection from '$lib/components/interior/InteriorSection.svelte';
	import CheckList from '$lib/components/interior/CheckList.svelte';
	import ProcesoInterior from '$lib/components/interior/ProcesoInterior.svelte';
	import PreciosInterior from '$lib/components/interior/PreciosInterior.svelte';
	import FaqInterior from '$lib/components/interior/FaqInterior.svelte';
	import CTAInterior from '$lib/components/interior/CTAInterior.svelte';
	import { SITE } from '$lib/seo/site';

	const description =
		'Email corporativo @tudominio.cl desde USD 8/mes. Cuenta de correo profesional con acceso web y móvil, antispam y 30 GB de almacenamiento. CoreWerk Antofagasta, Chile.';
	const canonical = `${SITE.url}/servicios-basicos/email-corporativo/`;

	const faqLocal = [
		{
			q: '¿Qué es un email corporativo?',
			a: 'Es una cuenta de correo con tu propio dominio, como ventas@tuempresa.cl o contacto@tuempresa.cl. En lugar de gmail.com o outlook.com, el correo lleva el nombre de tu empresa, proyectando profesionalismo y confianza.'
		},
		{
			q: '¿Puedo acceder desde mi celular?',
			a: 'Sí, completamente. Tu correo funciona en web, en la app del celular (iOS y Android), en Outlook, Thunderbird y cualquier cliente de email. Sincroniza automáticamente en todos lados.'
		},
		{
			q: '¿Cuánto espacio de almacenamiento tengo?',
			a: 'Hasta 30 GB por cuenta. Es amplio: equivale a miles de correos con archivos adjuntos. Si necesitas más espacio podemos ampliarlo.'
		},
		{
			q: '¿Viene con protección contra spam?',
			a: 'Sí, antispam profesional incluido. Filtra automáticamente los correos no deseados, pero puedes configurar tus propias reglas y listas blancas.'
		},
		{
			q: '¿Puedo tener múltiples cuentas de correo?',
			a: 'Sí. Por USD 8/mes adicional puedes agregar otra cuenta de correo en el mismo dominio. Ideal para tener contacto@, ventas@, soporte@, etc., cada una con su propia bandeja.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'Email Corporativo',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '8', priceCurrency: 'USD', priceValidUntil: '2026-12-31' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Servicios Básicos', item: `${SITE.url}/servicios-basicos/` },
					{ '@type': 'ListItem', position: 3, name: 'Email Corporativo', item: canonical }
				]
			},
			{
				'@type': 'FAQPage',
				mainEntity: faqLocal.map((f) => ({
					'@type': 'Question',
					name: f.q,
					acceptedAnswer: { '@type': 'Answer', text: f.a }
				}))
			}
		]
	};
</script>

<svelte:head>
	<title>Email Corporativo @tudominio desde USD 8/mes · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Email Corporativo @tudominio desde USD 8/mes · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios Básicos', href: '/servicios-basicos/' }, { label: 'Email Corporativo' }]}
	eyebrow="Email Corporativo"
	icon="mail"
	title="Tu nombre en @tuempresa.cl desde el primer día"
	subtitle="Correo profesional con tu propio dominio. Acceso desde web, celular y cualquier cliente de email. Antispam y 30 GB de almacenamiento incluidos."
	price="USD 8/mes"
	days="Activación inmediata"
	ctaPrimary={{ label: 'Quiero mi email', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver incluye', href: '#que-incluye' }}
/>

<InteriorSection eyebrow="Qué es" title="Tu correo es tu tarjeta de presentación digital">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Cuando envías un correo desde tu gmail personal o desde una cuenta genérica, el cliente no sabe si eres tú o un empleado, si tu empresa aún existe o si es un proyecto abandonado. Un correo corporativo como ventas@tuempresa.cl comunica de inmediato que eres un negocio serio y establecido.
		</p>
		<p>
			Un email corporativo es mucho más que un correo bonito: es confianza, profesionalismo y credibilidad. Es la diferencia entre una consulta que se ignora y una que genera una venta. Clientes, proveedores y partners toman tus propuestas más en serio cuando vienen de una dirección profesional con tu dominio.
		</p>
		<p>
			En CoreWerk configuramos tu email en minutos, sin complicaciones. Recibes una cuenta lista para usar desde cualquier lado: web, Outlook, Gmail, tu celular. Todo sincronizado, con antispam profesional y espacio amplio para que no pierdas nunca un correo importante.
		</p>
	</div>
</InteriorSection>

<InteriorSection id="que-incluye" eyebrow="Qué incluye" title="Todo para tu correo profesional" align="center">
	<CheckList
		cols={1}
		items={[
			'Cuenta de correo @tudominio.cl o @tudominio.com (elige el dominio)',
			'Acceso web 24/7 desde navegador',
			'Acceso móvil en iOS y Android',
			'Sincronización con Outlook, Thunderbird y clientes de email',
			'Antispam profesional incluido',
			'Hasta 30 GB de almacenamiento',
			'Soporte de configuración inicial',
			'Facturación automática mensual'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Necesitas email corporativo si">
	<CheckList
		cols={2}
		items={[
			'Acabas de registrar tu dominio y necesitas correo profesional.',
			'Tus clientes reciben correos desde un gmail o cuenta personal tuya.',
			'Quieres tener múltiples cuentas: contacto@, ventas@, soporte@.',
			'Usas Outlook o Thunderbird y quieres sincronizar con tu dominio.',
			'Necesitas un correo confiable sin costo de hosting completo.',
			'Busca una solución simple, confiable y sin complicaciones técnicas.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De la idea al correo activo" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior highlight="Starter" />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Listo para tener un correo profesional?"
	text="Cuéntanos tu dominio y te activamos el email corporativo al instante. En minutos estarás recibiendo correos como contacto@tuempresa.cl."
	waMsg="Hola CoreWerk, quiero contratar Email Corporativo (USD 8/mes)."
/>
