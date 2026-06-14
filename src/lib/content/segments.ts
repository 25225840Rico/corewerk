import type { SegmentContent } from '$lib/content/types';

// Registro de las 9 subpáginas de segmento. Rellenado por el Agente 2.
// Cada ruta src/routes/<slug>/+page.svelte importa su entrada por slug.
export const segmentPages: SegmentContent[] = [
	{
		slug: 'web-corporativa',
		segmentId: 'corporativo',
		badge: 'Especialistas en web corporativa',
		h1: 'Tu empresa merece una web que cierre negocios, no que los pierda',
		tldr: 'Konrad diseña y desarrolla páginas web corporativas en Chile desde UF 8, con diseño a medida, SEO técnico, formularios de cotización y hosting configurado. Entrega en 2 a 4 semanas e incluye 3 meses de soporte. Ideal para pymes, empresas de servicios y proveedores industriales.',
		subheadline: 'Sitios web profesionales que generan cotizaciones reales para empresas chilenas B2B.',
		metaTitle: 'Página web para empresa en Chile | Konrad',
		metaDescription:
			'Creamos páginas web corporativas en Chile desde UF 8. Diseño a medida, SEO, formulario de contacto y soporte incluido. Cotiza sin compromiso.',
		keywords: ['página web para empresa', 'sitio web corporativo Chile'],
		priceFrom: 'UF 8',
		recommendedPlan: 'Profesional',
		why: [
			{
				title: 'Primera impresión que convierte',
				desc: 'El 75% de los usuarios juzga la credibilidad de una empresa por su sitio web. Un diseño profesional genera confianza antes de que el cliente levante el teléfono.'
			},
			{
				title: 'Más cotizaciones, menos llamadas en frío',
				desc: 'Un formulario de contacto bien diseñado y un SEO correcto capturan leads calificados las 24 horas, sin que tengas que perseguir prospectos.'
			},
			{
				title: 'Posicionamiento en Google frente a tu competencia',
				desc: 'Las empresas con sitio optimizado aparecen en búsquedas locales y sectoriales. Si no estás ahí, el cliente llama a quien sí está.'
			}
		],
		includes: [
			'Diseño a medida adaptado a tu identidad corporativa',
			'Hasta 12 páginas: inicio, servicios, nosotros, equipo y contacto',
			'SEO técnico: velocidad, metadatos y sitemap',
			'Formulario de cotización con envío al correo',
			'Integración con WhatsApp Business',
			'Hosting y dominio configurados desde cero',
			'Versión móvil y desktop optimizadas',
			'3 meses de soporte post-entrega'
		],
		useCases: [
			{
				name: 'Empresa de transporte de carga',
				detail:
					'Una empresa transportista necesitaba mostrar su flota, cobertura nacional y formulario de cotización. Con su nueva web recibieron 3 veces más consultas en el primer mes.'
			},
			{
				name: 'Consultora de recursos humanos',
				detail:
					'Una consultora de RRHH quería posicionarse en Google para "consultoría laboral Santiago". Con un sitio optimizado y contenido claro, llegaron a primera página en 60 días.'
			},
			{
				name: 'Proveedor industrial minero',
				detail:
					'Un proveedor de equipos para minería necesitaba una web seria que abriera puertas en licitaciones. El nuevo sitio reflejó su experiencia y aumentó sus reuniones comerciales.'
			}
		],
		faqs: [
			{
				q: '¿Cuánto cuesta una página web para empresa en Chile?',
				a: 'Una web corporativa en Konrad parte desde UF 8 para sitios de hasta 5 páginas. Proyectos más completos con diseño a medida y e-commerce están en torno a UF 14. El precio final depende del alcance y funcionalidades requeridas.'
			},
			{
				q: '¿Cuánto demora el desarrollo de un sitio corporativo?',
				a: 'El plazo estándar es de 2 a 4 semanas desde el inicio del proyecto. Sitios más complejos con múltiples secciones o integraciones pueden tomar hasta 6 semanas. Siempre entregamos un plazo cerrado en la propuesta.'
			},
			{
				q: '¿El sitio web queda posicionado en Google?',
				a: 'Sí. Todos los sitios incluyen SEO técnico: velocidad optimizada, metadatos, sitemap y configuración en Google Search Console. Para resultados más rápidos, ofrecemos servicios de SEO de contenido como complemento.'
			},
			{
				q: '¿Puedo administrar el contenido del sitio yo mismo?',
				a: 'Sí. Configuramos el sitio con un panel de administración simple para que puedas actualizar textos, imágenes y páginas sin conocimientos técnicos. Te capacitamos al momento de la entrega.'
			},
			{
				q: '¿Incluyen hosting y dominio en el precio?',
				a: 'Configuramos y dejamos todo listo, pero el hosting y el dominio se contratan por tu cuenta (te recomendamos opciones económicas y confiables). El costo aproximado es de $5.000 a $15.000 CLP mensuales.'
			}
		]
	},
	{
		slug: 'tienda-online-ecommerce',
		segmentId: 'ecommerce',
		badge: 'Especialistas en tiendas online',
		h1: 'Vende online desde el primer día, sin complicaciones técnicas',
		tldr: 'Konrad crea tiendas online en Chile desde UF 14, con diseño a medida, integración de Webpay/Transbank, catálogo ilimitado y optimización SEO. Entrega en 3 a 6 semanas e incluye 3 meses de soporte. Ideal para tiendas retail, productores y mayoristas que quieren vender las 24 horas.',
		subheadline: 'Tiendas e-commerce diseñadas para vender en Chile, con pagos locales integrados desde el primer día.',
		metaTitle: 'Crear tienda online en Chile | E-commerce | Konrad',
		metaDescription:
			'Creamos tiendas online en Chile desde UF 14. Webpay/Transbank integrado, catálogo ilimitado, SEO y soporte incluido. Empieza a vender hoy.',
		keywords: ['crear tienda online Chile', 'ecommerce Chile'],
		priceFrom: 'UF 14',
		recommendedPlan: 'Profesional',
		why: [
			{
				title: 'Vende mientras duermes',
				desc: 'Una tienda online trabaja las 24 horas sin necesidad de personal adicional. Tus clientes compran a la hora que quieren, desde donde están.'
			},
			{
				title: 'Pagos chilenos sin complicaciones',
				desc: 'La integración nativa con Webpay, Transbank, Flow y Mercado Pago elimina la fricción del pago. Más facilidad de pago significa más ventas completadas.'
			},
			{
				title: 'Alcance más allá de tu local',
				desc: 'Con una tienda online llegas a clientes de todo Chile, no solo a quienes pasan por tu puerta. Es la forma más eficiente de escalar tus ventas sin abrir nuevas sucursales.'
			}
		],
		includes: [
			'Diseño a medida alineado con tu marca',
			'Catálogo de productos ilimitado con variantes',
			'Integración con Webpay, Flow o Mercado Pago',
			'Carrito de compras y proceso de pago optimizado',
			'Gestión de stock e inventario',
			'SEO técnico para posicionamiento en Google',
			'Panel de administración simple para subir productos',
			'3 meses de soporte post-lanzamiento'
		],
		useCases: [
			{
				name: 'Tienda de camping y outdoor',
				detail:
					'Un emprendedor de Concepción vendía solo en ferias locales. Con su tienda online llegó a clientes de Santiago, Valparaíso y el norte del país en el primer mes de operación.'
			},
			{
				name: 'Productora de alimentos artesanales',
				detail:
					'Una productora de mermeladas caseras en La Serena quería vender por internet sin complicaciones. Con catálogo simple y despacho integrado, triplicó sus ventas en 90 días.'
			},
			{
				name: 'Mayorista de insumos para gastronomía',
				detail:
					'Un distribuidor de insumos necesitaba un portal B2B para pedidos recurrentes. Implementamos listas de precios por cliente y pedidos mínimos, automatizando su proceso de ventas.'
			}
		],
		faqs: [
			{
				q: '¿Cuánto cuesta crear una tienda online en Chile?',
				a: 'Una tienda e-commerce en Konrad parte desde UF 14 con diseño a medida, catálogo ilimitado y Webpay integrado. Proyectos con funciones avanzadas como marketplace o B2B pueden llegar a UF 25 o más. Siempre entregamos precio cerrado.'
			},
			{
				q: '¿Cuánto demora crear una tienda online?',
				a: 'El plazo habitual es de 3 a 6 semanas dependiendo del número de productos y funcionalidades. Tiendas simples con hasta 50 productos están listas en 3 semanas. Te entregamos un plazo exacto al aceptar la propuesta.'
			},
			{
				q: '¿Incluyen la integración con Webpay o Transbank?',
				a: 'Sí. Integramos Webpay Plus de Transbank, Flow y Mercado Pago sin costo adicional. Solo necesitas tener tu contrato con la pasarela activo, o te orientamos para activarlo. Las comisiones son directamente del proveedor de pagos.'
			},
			{
				q: '¿Puedo administrar los productos y el inventario yo mismo?',
				a: 'Sí. El panel de administración es simple e intuitivo: puedes agregar productos, actualizar precios, gestionar stock y revisar pedidos sin conocimientos técnicos. Te capacitamos al momento de la entrega.'
			},
			{
				q: '¿La tienda funciona bien en celular?',
				a: 'Sí. Todas nuestras tiendas son mobile-first, lo que significa que están diseñadas primero para móvil. Más del 70% de las compras online en Chile se hacen desde el celular, por lo que esto es fundamental.'
			}
		]
	},
	{
		slug: 'blog-web-de-contenido',
		segmentId: 'blog',
		badge: 'Especialistas en blogs y contenido',
		h1: 'Convierte tu conocimiento en tráfico, autoridad e ingresos',
		tldr: 'Konrad crea blogs y webs de contenido en Chile desde UF 5, con diseño profesional, SEO técnico, categorías optimizadas y herramientas de monetización. Entrega en 2 a 3 semanas e incluye 1 mes de soporte. Ideal para creadores de contenido, consultoras y medios independientes.',
		subheadline: 'Plataformas de contenido diseñadas para posicionar en Google y generar ingresos desde el primer artículo.',
		metaTitle: 'Crear blog profesional en Chile | Web de contenidos | Konrad',
		metaDescription:
			'Diseñamos blogs profesionales en Chile desde UF 5. SEO técnico, categorías, newsletter y monetización incluidos. Posiciona en Google desde el primer día.',
		keywords: ['crear blog profesional', 'web de contenidos'],
		priceFrom: 'UF 5',
		recommendedPlan: 'Básico',
		why: [
			{
				title: 'El contenido es el activo más rentable a largo plazo',
				desc: 'Un artículo bien posicionado genera tráfico orgánico durante años sin costo adicional. El blog es la inversión de marketing con mejor retorno a largo plazo.'
			},
			{
				title: 'Autoridad que convierte lectores en clientes',
				desc: 'Publicar sobre tu área de expertise posiciona a tu marca como referente. Los lectores que te conocen a través del contenido tienen mayor tasa de conversión que cualquier anuncio.'
			},
			{
				title: 'Múltiples fuentes de ingreso desde tu plataforma',
				desc: 'Un blog profesional permite monetizar con publicidad, productos digitales, afiliados, newsletter de pago y consultoría. Tu contenido trabaja por ti incluso cuando no estás.'
			}
		],
		includes: [
			'Diseño editorial profesional adaptado a tu nicho',
			'Sistema de categorías y etiquetas optimizado para SEO',
			'Velocidad de carga optimizada (Core Web Vitals)',
			'Integración con plataforma de newsletter (Mailchimp o similar)',
			'Sistema de comentarios moderados',
			'Bloques de suscripción y captación de leads',
			'Panel de administración para publicar artículos fácilmente',
			'Configuración de Google Analytics y Search Console'
		],
		useCases: [
			{
				name: 'Consultora de finanzas personales',
				detail:
					'Una asesora financiera de Santiago quería posicionarse como referente. Con un blog técnicamente optimizado y 20 artículos iniciales, alcanzó 5.000 visitas mensuales en 4 meses.'
			},
			{
				name: 'Blog de gastronomía y recetas',
				detail:
					'Un cocinero aficionado de Valparaíso monetizó su pasión con un blog de recetas chilenas. Hoy genera ingresos por publicidad y venta de un ebook de cocina.'
			},
			{
				name: 'Medio independiente de tecnología',
				detail:
					'Un periodista lanzó un medio digital de tecnología con estructura editorial completa. Con SEO desde el primer día, compite con medios establecidos en búsquedas clave del sector.'
			}
		],
		faqs: [
			{
				q: '¿Cuánto cuesta crear un blog profesional en Chile?',
				a: 'Un blog en Konrad parte desde UF 5 con diseño profesional, SEO técnico y panel de administración. Si necesitas funciones adicionales como newsletter de pago o membresía, el precio ajusta según el alcance.'
			},
			{
				q: '¿Cuánto demora lanzar un blog?',
				a: 'Un blog bien estructurado tarda entre 2 y 3 semanas en estar listo. Esto incluye diseño, configuración técnica, migración de contenido existente si lo hay, y pruebas antes del lanzamiento.'
			},
			{
				q: '¿El blog queda optimizado para posicionar en Google?',
				a: 'Sí. Configuramos metadatos, estructura de URLs amigables, velocidad de carga y datos estructurados. También orientamos sobre estrategia de contenido para que tus artículos lleguen al público correcto.'
			},
			{
				q: '¿Puedo migrar contenido de otro blog o WordPress?',
				a: 'Sí. Migramos tus artículos existentes sin perder el posicionamiento en Google. Mantenemos las URLs o hacemos redirecciones correctas para que Google no pierda el rastro de tu contenido.'
			},
			{
				q: '¿Puedo monetizar el blog desde el principio?',
				a: 'Sí. Integramos bloques publicitarios (AdSense), formularios de afiliados y botones de donación o pago según tu modelo de negocio. La monetización se configura junto con el diseño.'
			}
		]
	},
	{
		slug: 'plataforma-saas-aplicacion-web',
		segmentId: 'saas',
		badge: 'Especialistas en SaaS y plataformas web',
		h1: 'Tu idea de producto merece una plataforma que la haga real',
		tldr: 'Konrad desarrolla plataformas SaaS y aplicaciones web en Chile desde UF 25, con diseño de producto, autenticación de usuarios, panel de administración, integraciones a medida y arquitectura escalable. Entrega en 6 a 12 semanas e incluye 6 meses de soporte. Ideal para startups y empresas que digitalizan procesos.',
		subheadline: 'Desarrollo de plataformas web a medida para startups y empresas que necesitan escalar con tecnología propia.',
		metaTitle: 'Desarrollo plataforma web y SaaS en Chile | Konrad',
		metaDescription:
			'Desarrollamos plataformas SaaS y aplicaciones web en Chile desde UF 25. Login, panel de usuario, APIs e integraciones a medida. Arquitectura escalable.',
		keywords: ['desarrollo plataforma web', 'crear SaaS Chile'],
		priceFrom: 'UF 25',
		recommendedPlan: 'Premium',
		why: [
			{
				title: 'Tu proceso interno merece una herramienta a medida',
				desc: 'Las soluciones genéricas siempre tienen limitaciones. Una plataforma propia se adapta exactamente a tu flujo de trabajo, eliminando fricción y automatizando lo repetitivo.'
			},
			{
				title: 'Un SaaS es un negocio escalable con ingresos recurrentes',
				desc: 'Si tienes un problema que otros también enfrentan, una plataforma web te permite monetizarlo con suscripciones. Es el modelo de negocio con mejor valuación en el mercado actual.'
			},
			{
				title: 'Control total sobre tu tecnología y datos',
				desc: 'Con desarrollo propio no dependes de terceros que cambien precios, cierren el servicio o restrinjan funciones. Tu plataforma es tuya, y escala según tu ritmo de crecimiento.'
			}
		],
		includes: [
			'Diseño de producto UX/UI orientado a conversión',
			'Sistema de autenticación y gestión de usuarios',
			'Panel de administración y dashboard de datos',
			'Arquitectura backend escalable y segura',
			'Integraciones con APIs externas (pagos, correo, ERP)',
			'Base de datos diseñada para tu modelo de negocio',
			'Entorno de pruebas y producción separados',
			'6 meses de soporte y mantención'
		],
		useCases: [
			{
				name: 'Plataforma de gestión para clínicas',
				detail:
					'Una startup de salud en Santiago necesitaba un sistema de agendamiento y ficha clínica digital. Desarrollamos su MVP en 10 semanas y hoy opera en 8 clínicas del país.'
			},
			{
				name: 'SaaS de control de flota vehicular',
				detail:
					'Una empresa logística de Antofagasta necesitaba rastrear su flota y generar informes automáticos. La plataforma redujo sus costos operativos en un 30% en el primer trimestre.'
			},
			{
				name: 'Plataforma de e-learning para profesionales',
				detail:
					'Un instituto de capacitación quería vender cursos online con certificación. Construimos su plataforma con videos, evaluaciones y emisión de certificados PDF automáticos.'
			}
		],
		faqs: [
			{
				q: '¿Cuánto cuesta desarrollar una plataforma SaaS en Chile?',
				a: 'El desarrollo de una plataforma web parte desde UF 25 para un MVP funcional con autenticación, panel de usuario y funciones base. Proyectos complejos con integraciones múltiples pueden superar UF 50. Siempre definimos un alcance y precio cerrado antes de comenzar.'
			},
			{
				q: '¿Cuánto demora construir una aplicación web?',
				a: 'Un MVP sólido toma entre 6 y 12 semanas. La duración depende de la complejidad de los flujos, el número de integraciones y las validaciones requeridas. Trabajamos en sprints con entregas parciales para que veas progreso cada semana.'
			},
			{
				q: '¿Qué tecnologías usan para desarrollar plataformas?',
				a: 'Usamos tecnologías modernas y de alto rendimiento: SvelteKit para el frontend, bases de datos relacionales o NoSQL según el caso, y servicios en la nube (Vercel, AWS o equivalente). La elección siempre se ajusta a los requisitos del proyecto.'
			},
			{
				q: '¿Pueden escalar la plataforma cuando crezca mi negocio?',
				a: 'Sí. Diseñamos la arquitectura desde el inicio pensando en el crecimiento. Usamos servicios cloud que escalan automáticamente y escribimos código modular que facilita agregar nuevas funciones sin reescribir desde cero.'
			},
			{
				q: '¿Qué pasa si necesito cambios o nuevas funciones después del lanzamiento?',
				a: 'El plan Premium incluye 6 meses de soporte y mantención. Para cambios mayores o nuevas funcionalidades, cotizamos por separado con prioridad como cliente existente. Muchos proyectos evolucionan en fases, y eso está previsto.'
			}
		]
	},
	{
		slug: 'portafolio-profesional',
		segmentId: 'portafolio',
		badge: 'Especialistas en portafolios profesionales',
		h1: 'Muestra tu trabajo al mundo. Consigue más clientes o el trabajo ideal',
		tldr: 'Konrad diseña portafolios web profesionales en Chile desde UF 4, con galería de proyectos, biografía, formulario de contacto y SEO optimizado. Entrega en 1 a 2 semanas e incluye 1 mes de soporte. Ideal para diseñadores, fotógrafos, arquitectos y freelancers de cualquier industria.',
		subheadline: 'Portafolios web únicos que muestran tu talento y convierten visitas en clientes o entrevistas de trabajo.',
		metaTitle: 'Página web portafolio en Chile | Para freelancers | Konrad',
		metaDescription:
			'Diseñamos portafolios web profesionales en Chile desde UF 4. Galería de proyectos, SEO y contacto incluido. Perfectos para freelancers y creativos.',
		keywords: ['página web portafolio', 'web para freelance Chile'],
		priceFrom: 'UF 4',
		recommendedPlan: 'Básico',
		why: [
			{
				title: 'Tu trabajo habla mejor que cualquier currículum',
				desc: 'Un portafolio web muestra en segundos lo que eres capaz de hacer. Los clientes y empleadores toman decisiones antes de contactarte, y un buen portafolio inclina la balanza a tu favor.'
			},
			{
				title: 'Disponible para clientes de todo Chile y el mundo',
				desc: 'A diferencia de las redes sociales, tu portafolio es tuyo. Sin algoritmos que decidan quién te ve, sin plataformas que cambien sus reglas. Tu URL, tu marca, tus reglas.'
			},
			{
				title: 'Posiciona tu nombre en Google',
				desc: 'Un portafolio bien estructurado aparece en búsquedas de tu especialidad. "Fotógrafo de bodas en Valparaíso" o "Arquitecto en Santiago" pueden traerte clientes sin publicidad pagada.'
			}
		],
		includes: [
			'Diseño personal único alineado con tu estilo',
			'Galería de proyectos con categorías y filtros',
			'Página de presentación (sobre mí, experiencia)',
			'Formulario de contacto directo',
			'Integración con Instagram o Behance',
			'Versión móvil impecable',
			'SEO con tu nombre y especialidad',
			'1 mes de soporte post-entrega'
		],
		useCases: [
			{
				name: 'Fotógrafa de matrimonios',
				detail:
					'Una fotógrafa de Viña del Mar quería dejar de depender de Instagram. Con su portafolio web, ahora recibe consultas directas desde Google y cerró 4 matrimonios en los primeros 2 meses.'
			},
			{
				name: 'Diseñador gráfico freelance',
				detail:
					'Un diseñador de Santiago necesitaba mostrar su trabajo a agencias internacionales. Con un portafolio en inglés/español y proyectos bien presentados, consiguió su primer cliente en el extranjero.'
			},
			{
				name: 'Arquitecta independiente',
				detail:
					'Una arquitecta de Temuco quería mostrar sus proyectos de vivienda sustentable. Su portafolio con galería de renders y proyectos ejecutados la posicionó como referente en su ciudad.'
			}
		],
		faqs: [
			{
				q: '¿Cuánto cuesta una página web de portafolio en Chile?',
				a: 'Un portafolio web profesional en Konrad parte desde UF 4 con hasta 5 páginas, galería de proyectos y formulario de contacto. Para portafolios con tienda integrada o funciones especiales, el precio ajusta al alcance.'
			},
			{
				q: '¿Cuánto demora tener mi portafolio listo?',
				a: 'Un portafolio estándar está listo en 1 a 2 semanas. Es el proyecto más ágil que hacemos porque el diseño es limpio y enfocado en mostrar tu trabajo. Solo necesitamos tus imágenes y textos para comenzar.'
			},
			{
				q: '¿Puedo actualizar mis proyectos yo mismo?',
				a: 'Sí. El panel de administración te permite agregar, editar o eliminar proyectos sin ayuda técnica. También puedes actualizar tu bio y datos de contacto cuando quieras.'
			},
			{
				q: '¿El portafolio posiciona en Google con mi nombre y especialidad?',
				a: 'Sí. Configuramos el SEO con tu nombre, especialidad y ciudad para que aparezcas en búsquedas relevantes. Esto es especialmente útil para crecer sin depender de publicidad pagada.'
			},
			{
				q: '¿Pueden integrar mi portafolio con mis redes sociales?',
				a: 'Sí. Conectamos tu portafolio con Instagram para mostrar tus publicaciones recientes, y con Behance, LinkedIn o cualquier red que uses. También integramos botones de contacto por WhatsApp.'
			}
		]
	},
	{
		slug: 'portal-noticias-media',
		segmentId: 'noticias',
		badge: 'Especialistas en portales de noticias',
		h1: 'Publica, crece y monetiza tu medio digital sin límites técnicos',
		tldr: 'Konrad construye portales de noticias y medios digitales en Chile desde UF 10, con estructura editorial completa, buscador interno, categorías, publicidad integrada y SEO de noticias. Entrega en 3 a 5 semanas e incluye 3 meses de soporte. Ideal para medios locales, revistas digitales y portales informativos.',
		subheadline: 'Portales editoriales diseñados para publicar rápido, crecer en Google News y monetizar tu audiencia.',
		metaTitle: 'Crear portal de noticias en Chile | Medios digitales | Konrad',
		metaDescription:
			'Construimos portales de noticias en Chile desde UF 10. Estructura editorial, buscador, publicidad y Google News incluidos. Lanza tu medio digital hoy.',
		keywords: ['crear portal de noticias', 'web para medio digital'],
		priceFrom: 'UF 10',
		recommendedPlan: 'Profesional',
		why: [
			{
				title: 'La audiencia local es tuya si llegas primero',
				desc: 'Los medios locales independientes son escasos y tienen alta fidelidad. Un portal bien estructurado puede convertirse en la referencia informativa de tu ciudad o sector.'
			},
			{
				title: 'Google News multiplica tu alcance orgánico',
				desc: 'Los portales indexados en Google News y con datos estructurados de artículo reciben tráfico masivo sin publicidad. La configuración técnica correcta hace toda la diferencia.'
			},
			{
				title: 'Monetización diversificada desde el día uno',
				desc: 'Publicidad programática, banners patrocinados, newsletter de pago y contenido patrocinado son fuentes de ingreso reales para un medio digital bien estructurado.'
			}
		],
		includes: [
			'Diseño editorial profesional con portada dinámica',
			'Sistema de categorías, etiquetas y buscador interno',
			'Fichas de autor con biografía y artículos',
			'Datos estructurados para Google News (Article Schema)',
			'Integración de publicidad programática (AdSense u otro)',
			'Feed RSS y sitemap de noticias',
			'Panel de redacción para múltiples autores',
			'3 meses de soporte y ajustes editoriales'
		],
		useCases: [
			{
				name: 'Portal de noticias regional',
				detail:
					'Un periodista de Rancagua lanzó un portal de noticias locales con 3 periodistas. En 3 meses alcanzó 15.000 visitas mensuales y comenzó a monetizar con publicidad local.'
			},
			{
				name: 'Revista digital de tecnología',
				detail:
					'Un equipo editorial independiente quería un medio de tecnología moderno y rápido. Con estructura técnica correcta, aparecen en Google News y compiten con medios de mayor trayectoria.'
			},
			{
				name: 'Medio especializado en gastronomía',
				detail:
					'Un chef y periodista gastronómico lanzó una revista digital de restaurantes y recetas. Su portal genera ingresos por contenido patrocinado de restaurantes y marcas de alimentos.'
			}
		],
		faqs: [
			{
				q: '¿Cuánto cuesta crear un portal de noticias en Chile?',
				a: 'Un portal de noticias en Konrad parte desde UF 10 con diseño editorial completo, categorías y publicidad integrada. Para medios con múltiples periodistas, suscripciones o funciones avanzadas, el precio ajusta según el alcance.'
			},
			{
				q: '¿Cuánto demora lanzar un portal de noticias?',
				a: 'Un portal editorial completo tarda entre 3 y 5 semanas. Esto incluye diseño, configuración del sistema de gestión de contenidos, importación de artículos previos y pruebas de velocidad y SEO.'
			},
			{
				q: '¿El portal puede indexarse en Google News?',
				a: 'Sí. Configuramos los datos estructurados de noticias, el sitemap específico para Google News y las directrices técnicas requeridas por Google. La indexación depende también de la calidad del contenido publicado.'
			},
			{
				q: '¿Cuántos periodistas o autores pueden publicar en el portal?',
				a: 'El sistema no tiene límite de usuarios. Configuramos roles diferenciados: editor, redactor y colaborador, con niveles de permiso distintos para cada uno. Ideal para equipos de cualquier tamaño.'
			},
			{
				q: '¿Puedo monetizar con publicidad desde el primer día?',
				a: 'Sí. Integramos bloques publicitarios para Google AdSense, banners de patrocinadores y espacios para publicidad local. También podemos configurar sistemas de newsletter de pago si quieres diversificar ingresos.'
			}
		]
	},
	{
		slug: 'directorio-marketplace',
		segmentId: 'directorio',
		badge: 'Especialistas en directorios y marketplaces',
		h1: 'Conecta proveedores con clientes. Construye el hub de tu industria',
		tldr: 'Konrad desarrolla directorios online y marketplaces en Chile desde UF 18, con registro de proveedores, perfil de negocio, buscador con filtros, sistema de contacto y panel de administración. Entrega en 4 a 8 semanas e incluye 3 meses de soporte. Ideal para cámaras de comercio, asociaciones y agregadores de servicios.',
		subheadline: 'Plataformas de directorio y marketplace que conectan oferta con demanda en cualquier industria chilena.',
		metaTitle: 'Crear directorio online y marketplace en Chile | Konrad',
		metaDescription:
			'Desarrollamos directorios online y marketplaces en Chile desde UF 18. Registro de proveedores, buscador con filtros y panel de admin. Lanza tu plataforma.',
		keywords: ['crear directorio online', 'marketplace Chile'],
		priceFrom: 'UF 18',
		recommendedPlan: 'Premium',
		why: [
			{
				title: 'El modelo de directorio es escalable sin inventario',
				desc: 'A diferencia de una tienda, un directorio no requiere que gestiones productos ni stock. El valor lo generan los listados de terceros, y tú capturas la comisión o suscripción.'
			},
			{
				title: 'Crea el punto de referencia de tu industria',
				desc: 'El primer directorio serio de una industria o ciudad captura toda la demanda. Los usuarios buscan "proveedores de X en Y" y el directorio más completo gana la primera posición.'
			},
			{
				title: 'Múltiples modelos de monetización',
				desc: 'Puedes cobrar por listado destacado, suscripción mensual a proveedores, comisión por lead generado o publicidad. El directorio bien ejecutado genera ingresos recurrentes.'
			}
		],
		includes: [
			'Diseño de plataforma orientada a la búsqueda y conversión',
			'Sistema de registro y perfil de proveedor/negocio',
			'Buscador con filtros múltiples (categoría, ciudad, precio)',
			'Sistema de contacto entre usuario y proveedor',
			'Panel de administración para moderar listados',
			'Listados destacados y planes de visibilidad',
			'SEO de directorio (páginas por categoría y ciudad)',
			'3 meses de soporte post-lanzamiento'
		],
		useCases: [
			{
				name: 'Directorio de proveedores para minería',
				detail:
					'Una asociación minera del norte de Chile necesitaba un directorio de proveedores certificados. La plataforma tiene más de 120 proveedores registrados y genera ingresos por planes de visibilidad.'
			},
			{
				name: 'Marketplace de servicios para el hogar',
				detail:
					'Un emprendedor de Santiago lanzó un directorio de gasfiteres, electricistas y pintores. Con SEO local por comuna, capta clientes que buscan servicios específicos en su sector.'
			},
			{
				name: 'Directorio de profesionales de la salud',
				detail:
					'Una asociación médica quería un directorio de especialistas para derivación de pacientes. La plataforma tiene buscador por especialidad, ciudad y previsión, facilitando la búsqueda de médicos.'
			}
		],
		faqs: [
			{
				q: '¿Cuánto cuesta desarrollar un directorio o marketplace en Chile?',
				a: 'Un directorio online en Konrad parte desde UF 18 con registro de proveedores, buscador con filtros y panel de administración. Marketplaces con transacciones integradas o funciones avanzadas pueden partir desde UF 28.'
			},
			{
				q: '¿Cuánto demora construir un directorio online?',
				a: 'Un directorio funcional tarda entre 4 y 8 semanas según la complejidad. Plataformas con pagos integrados o lógica de matching avanzada requieren más tiempo. Trabajamos en fases con entregas parciales.'
			},
			{
				q: '¿Los proveedores pueden registrarse solos en el directorio?',
				a: 'Sí. Configuramos un flujo de registro para proveedores con validación manual o automática según tu criterio. Pueden crear su perfil, subir imágenes, describir sus servicios y gestionar su información.'
			},
			{
				q: '¿Cómo puedo monetizar el directorio?',
				a: 'Implementamos los modelos que elijas: cobro por listado básico y destacado, suscripción mensual, pago por lead o publicidad. Todo se gestiona desde el panel de administración sin conocimientos técnicos.'
			},
			{
				q: '¿El directorio posiciona en Google para búsquedas de proveedores?',
				a: 'Sí. Diseñamos la estructura de URLs para que cada categoría y ciudad tenga su propia página optimizada. Esto genera tráfico orgánico masivo de personas buscando proveedores específicos en Chile.'
			}
		]
	},
	{
		slug: 'comunidad-foro-membership',
		segmentId: 'comunidad',
		badge: 'Especialistas en comunidades y foros',
		h1: 'Crea el espacio donde tu comunidad vive, debate y crece',
		tldr: 'Konrad desarrolla plataformas de comunidad, foros y membership sites en Chile desde UF 15, con sistema de registro, perfiles de usuario, publicaciones, moderación y acceso por membresía. Entrega en 4 a 7 semanas e incluye 3 meses de soporte. Ideal para asociaciones, clubes y grupos de interés.',
		subheadline: 'Plataformas de comunidad privada con foro, perfiles y membresía para organizaciones y grupos de interés.',
		metaTitle: 'Crear foro online y comunidad web en Chile | Konrad',
		metaDescription:
			'Desarrollamos comunidades online, foros y membership sites en Chile desde UF 15. Perfiles, debates, moderación y membresía incluidos. Lanza tu comunidad.',
		keywords: ['crear foro online', 'web de comunidad'],
		priceFrom: 'UF 15',
		recommendedPlan: 'Premium',
		why: [
			{
				title: 'La comunidad es el activo más difícil de replicar',
				desc: 'Un foro o comunidad activa crea un efecto de red que ningún competidor puede copiar fácilmente. Las relaciones entre miembros retienen a los usuarios mejor que cualquier contenido.'
			},
			{
				title: 'Ingresos recurrentes con membresías',
				desc: 'Una comunidad con acceso por suscripción genera ingresos predecibles cada mes. El modelo membership es uno de los más estables para creadores, consultores y organizaciones.'
			},
			{
				title: 'Control total frente a las redes sociales',
				desc: 'Los grupos de Facebook o WhatsApp dependen de plataformas que cambian sus reglas. Tu comunidad propia te da control sobre los datos, la experiencia y las reglas del juego.'
			}
		],
		includes: [
			'Diseño de plataforma comunitaria con identidad propia',
			'Sistema de registro y perfiles de usuario',
			'Foro con categorías, hilos y respuestas',
			'Sistema de membresía (acceso libre o de pago)',
			'Moderación de contenido y gestión de miembros',
			'Notificaciones por correo de actividad reciente',
			'Integración de pagos para membresías (Transbank/Flow)',
			'3 meses de soporte post-lanzamiento'
		],
		useCases: [
			{
				name: 'Comunidad de emprendedores tecnológicos',
				detail:
					'Una organización de emprendedores tech de Santiago lanzó su comunidad privada con foro de preguntas y respuestas. Los miembros pagan una membresía mensual y tienen acceso a recursos exclusivos y networking.'
			},
			{
				name: 'Club de lectura con acceso por suscripción',
				detail:
					'Una escritora lanzó un club de lectura online con comentarios de libros, debates y recomendaciones. Sus suscriptores pagan mensualmente y la comunidad tiene más de 300 miembros activos.'
			},
			{
				name: 'Foro técnico de profesionales de la construcción',
				detail:
					'Una asociación de constructores necesitaba un espacio para compartir normativas, dudas y proyectos. El foro técnico concentra la conversación del sector y refuerza el valor de la membresía asociativa.'
			}
		],
		faqs: [
			{
				q: '¿Cuánto cuesta crear una plataforma de comunidad o foro en Chile?',
				a: 'Una comunidad online en Konrad parte desde UF 15 con foro, perfiles de usuario y membresía básica. Plataformas con sistema de pago, múltiples niveles de acceso o integraciones avanzadas ajustan precio según alcance.'
			},
			{
				q: '¿Cuánto demora lanzar una comunidad online?',
				a: 'El plazo habitual es de 4 a 7 semanas. Esto incluye diseño de la plataforma, configuración del sistema de membresías, flujos de registro y moderación, y pruebas con usuarios iniciales antes del lanzamiento.'
			},
			{
				q: '¿Puedo cobrar membresías con pagos chilenos?',
				a: 'Sí. Integramos Webpay de Transbank o Flow para suscripciones recurrentes en pesos o UF. Los miembros pagan mensual o anualmente y el sistema gestiona accesos automáticamente según el estado de su pago.'
			},
			{
				q: '¿Puedo moderar el contenido y gestionar los miembros?',
				a: 'Sí. El panel de moderación te permite aprobar publicaciones, eliminar contenido inapropiado, gestionar roles de miembro y moderador, y enviar comunicaciones a toda la comunidad.'
			},
			{
				q: '¿La comunidad puede tener niveles de acceso diferenciados?',
				a: 'Sí. Configuramos niveles como visitante, miembro gratuito y miembro premium, cada uno con acceso a distintas secciones o contenidos. Esto permite ofrecer un plan freemium para crecer la comunidad antes de monetizar.'
			}
		]
	},
	{
		slug: 'web-institucional-educativa',
		segmentId: 'institucional',
		badge: 'Especialistas en web institucional y educativa',
		h1: 'Una web que representa la seriedad y misión de tu institución',
		tldr: 'Konrad diseña webs institucionales y educativas en Chile desde UF 7, con estructura formal, accesibilidad web, gestión de trámites online, calendario de eventos y SEO. Entrega en 2 a 4 semanas e incluye 3 meses de soporte. Ideal para colegios, municipios, ONGs, fundaciones e instituciones públicas.',
		subheadline: 'Sitios web institucionales accesibles, serios y funcionales para colegios, ONGs y organismos públicos chilenos.',
		metaTitle: 'Web institucional y educativa en Chile | Konrad',
		metaDescription:
			'Creamos páginas web institucionales y educativas en Chile desde UF 7. Accesibilidad, trámites online, calendario y SEO incluidos. Colegios, ONGs y municipios.',
		keywords: ['web para colegio', 'página web institucional'],
		priceFrom: 'UF 7',
		recommendedPlan: 'Profesional',
		why: [
			{
				title: 'Credibilidad y transparencia que la ciudadanía exige',
				desc: 'Las instituciones con web formal y actualizada generan más confianza en sus comunidades. Un sitio claro reduce llamadas, consultas repetitivas y malentendidos.'
			},
			{
				title: 'Trámites online que ahorran tiempo a todos',
				desc: 'Formularios de matrícula, solicitudes de certificados o inscripciones digitales reducen las filas presenciales y liberan tiempo del personal administrativo.'
			},
			{
				title: 'Accesibilidad como obligación y como valor',
				desc: 'Las instituciones públicas y educativas tienen responsabilidad de garantizar acceso a personas con discapacidad. Construimos con estándares WCAG 2.1 AA desde el inicio.'
			}
		],
		includes: [
			'Diseño formal adaptado a la identidad institucional',
			'Estructura de navegación clara para distintas audiencias',
			'Sección de noticias y comunicados institucionales',
			'Calendario de eventos y actividades',
			'Formularios de trámite y contacto',
			'Accesibilidad web (WCAG 2.1 AA)',
			'SEO semántico para búsquedas del sector',
			'3 meses de soporte post-entrega'
		],
		useCases: [
			{
				name: 'Colegio con matrícula online',
				detail:
					'Un colegio particular subvencionado de Temuco necesitaba mostrar su proyecto educativo y recibir solicitudes de matrícula en línea. El nuevo sitio redujo las consultas telefónicas a la mitad.'
			},
			{
				name: 'Fundación social sin fines de lucro',
				detail:
					'Una fundación de Santiago que apoya a adultos mayores necesitaba una web que reflejara su misión y captara donaciones. Con su sitio renovado, las donaciones online aumentaron un 60% en el primer trimestre.'
			},
			{
				name: 'Municipalidad con trámites digitales',
				detail:
					'Una municipalidad de la Región de Los Lagos quería digitalizar solicitudes de permisos y certificados. Implementamos formularios conectados al correo de cada departamento, reduciendo los tiempos de respuesta.'
			}
		],
		faqs: [
			{
				q: '¿Cuánto cuesta una página web para un colegio o institución?',
				a: 'Una web institucional en Konrad parte desde UF 7 con diseño formal, sección de noticias, eventos y formularios de contacto. Colegios con matrícula online o municipalidades con trámites digitales pueden ajustar a partir de UF 10.'
			},
			{
				q: '¿Cuánto demora el desarrollo de un sitio institucional?',
				a: 'El plazo estándar es de 2 a 4 semanas. Si el proyecto incluye formularios de trámites complejos o migración de contenido desde un sitio anterior, puede extenderse hasta 6 semanas.'
			},
			{
				q: '¿El sitio cumple con estándares de accesibilidad web?',
				a: 'Sí. Construimos con pautas WCAG 2.1 nivel AA: contraste de colores adecuado, etiquetas en formularios, compatibilidad con lectores de pantalla y navegación por teclado. Es una obligación legal para muchas instituciones públicas.'
			},
			{
				q: '¿Pueden integrarse formularios de matrícula o solicitudes online?',
				a: 'Sí. Diseñamos formularios que envían las solicitudes directamente al correo del departamento correspondiente, o las almacenan en una base de datos que el personal puede revisar desde el panel de administración.'
			},
			{
				q: '¿Varios funcionarios o directivos pueden actualizar el sitio?',
				a: 'Sí. Configuramos roles de usuario para que distintos departamentos puedan publicar noticias o actualizar su información sin depender del área de tecnología. Se puede controlar quién puede editar qué sección.'
			}
		]
	}
];

export function getSegment(slug: string): SegmentContent | undefined {
	return segmentPages.find((s) => s.slug === slug);
}
