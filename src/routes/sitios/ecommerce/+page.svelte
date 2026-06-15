<script lang="ts">
	import HeroInterior from '$lib/components/interior/HeroInterior.svelte';
	import InteriorSection from '$lib/components/interior/InteriorSection.svelte';
	import FeatureGrid from '$lib/components/interior/FeatureGrid.svelte';
	import CheckList from '$lib/components/interior/CheckList.svelte';
	import ProcesoInterior from '$lib/components/interior/ProcesoInterior.svelte';
	import PreciosInterior from '$lib/components/interior/PreciosInterior.svelte';
	import FaqInterior from '$lib/components/interior/FaqInterior.svelte';
	import CTAInterior from '$lib/components/interior/CTAInterior.svelte';
	import { SITE } from '$lib/seo/site';

	const description =
		'E-commerce profesional en 20 días, desde USD 1.200. Catálogo de productos, carrito, pagos en línea y panel de administración. Tu tienda abierta 24/7 para clientes en Antofagasta y todo Chile.';
	const canonical = `${SITE.url}/sitios/ecommerce/`;

	const faqLocal = [
		{
			q: '¿Qué medios de pago incluyen?',
			a: 'Integramos los principales: Mercado Pago, Stripe, Khipu y transferencia bancaria. Cada pago llega directo a tu cuenta sin intermediarios que corten comisión.'
		},
		{
			q: '¿Cuántos productos puedo agregar?',
			a: 'Ilimitados. El panel de administración te permite agregar productos, fotos, descripciones y precios sin límite. Todo desde una interfaz simple, sin código.'
		},
		{
			q: '¿Cómo gestiono los pedidos?',
			a: 'Desde un panel único. Ves todos los pedidos en tiempo real, cambias estado (nuevo, procesando, enviado, entregado), imprimes etiquetas y recibos. También se sincronizan con WhatsApp y email.'
		},
		{
			q: '¿Necesito saber de logística o cobro?',
			a: 'No. Configuramos el sistema con los métodos de envío que uses (despacho propio, Starken, DHL, etc.) y los pagos quedan registrados. Luego administras según tu flujo actual.'
		},
		{
			q: '¿Puedo vender internacionalmente?',
			a: 'Sí, el e-commerce está pensado para operar en Chile, pero puede extenderse a otros países. Coordinaremos métodos de pago y envío internacionales si es tu caso.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: 'E-commerce Profesional',
				description,
				provider: { '@type': 'Organization', name: 'CoreWerk', url: SITE.url },
				areaServed: { '@type': 'Country', name: 'Chile' },
				offers: { '@type': 'Offer', price: '1200', priceCurrency: 'USD' }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Sitios Web', item: `${SITE.url}/sitios/` },
					{ '@type': 'ListItem', position: 3, name: 'E-commerce', item: canonical }
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
	<title>E-commerce desde USD 1.200 · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="E-commerce desde USD 1.200 · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Sitios Web', href: '/sitios/' }, { label: 'E-commerce' }]}
	eyebrow="E-commerce"
	icon="cart"
	title="Tu tienda abierta las 24 horas"
	subtitle="Catálogo de productos, carrito de compras, pagos en línea integrados y panel de administración. Vende mientras duermes, sin complicaciones."
	price="USD 1.200"
	days="Entrega en 20 días"
	ctaPrimary={{ label: 'Quiero vender online', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver precios', href: '#precios' }}
/>

<InteriorSection eyebrow="Qué es" title="Tu tienda online que vende sin parar">
	<div class="max-w-3xl space-y-4 text-base text-muted leading-relaxed">
		<p>
			Un e-commerce es una tienda virtual abierta 24/7 donde tus clientes pueden ver el catálogo,
			elegir productos, pagar en línea y recibir su pedido en casa. No necesitas estar disponible
			todo el tiempo: la plataforma recibe órdenes, cobra y te notifica para que despaches.
		</p>
		<p>
			Nuestro e-commerce incluye todo: catálogo ilimitado de productos con fotos y descripciones,
			carrito de compras intuitivo, integración con todos los medios de pago importantes de Chile
			(Mercado Pago, Stripe, Khipu, transferencia), cálculo automático de envíos, panel administrativo
			para gestionar pedidos en tiempo real y sincronización con WhatsApp para notificaciones al cliente.
		</p>
		<p>
			Es ideal para negocios de cualquier tamaño que quieran expandir sus ventas sin limitarse a horarios
			de atención. Desde pequeñas tiendas de ropa, productos digitales, servicios recurrentes hasta
			empresas medianas de retail, un e-commerce bien diseñado genera ventas automáticas que antes no tenías.
		</p>
	</div>
</InteriorSection>

<InteriorSection eyebrow="Qué incluye" title="Todo para vender desde el primer día" align="center">
	<FeatureGrid
		cols={3}
		items={[
			{ icon: 'cart', title: 'Catálogo ilimitado', desc: 'Agrega productos sin límite con fotos, descripciones, precios y opciones.' },
			{ icon: 'code', title: 'Carrito inteligente', desc: 'Carrito visual, descuentos por cantidad, cupones y envíos automáticos.' },
			{ icon: 'zap', title: 'Pagos integrados', desc: 'Mercado Pago, Stripe, Khipu, transferencia bancaria en un solo lugar.' },
			{ icon: 'dashboard', title: 'Panel administrativo', desc: 'Gestiona pedidos, cambios de estado, imprime etiquetas, reportes reales.' },
			{ icon: 'chat', title: 'Notificaciones WhatsApp', desc: 'Tu cliente y tú reciben confirmación de compra y seguimiento de pedido.' },
			{ icon: 'shield', title: 'SSL + Seguridad', desc: 'Certificado de seguridad, encriptación de pagos y dominio incluidos 1 año.' }
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Para quién" title="Perfecto para negocios que quieren vender online">
	<CheckList
		cols={2}
		items={[
			'Tiendas de ropa, accesorios o productos físicos que quieren expandir mercado.',
			'Emprendimientos digitales: libros, cursos, software o servicios por suscripción.',
			'Negocios con inventario que necesitan gestión automática de pedidos.',
			'Empresas que venden solo por WhatsApp y quieren facturar más sin aumentar carga de trabajo.',
			'Marcas que quieren presencia propia sin depender de Shopify o plataformas externas.',
			'Negocios que buscan aumentar ventas con presencia 24/7 incluso mientras duermen.'
		]}
	/>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De la idea a tu tienda publicada" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior highlight="Profesional" />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿Listo para vender online?"
	text="Cuéntanos sobre tu negocio y catálogo. Te entregaremos una propuesta con diseño de tienda, medios de pago, plazo y precio fijo. Tu e-commerce puede estar listo en 20 días."
	waMsg="Hola CoreWerk, quiero un E-commerce (desde USD 1.200)."
/>
