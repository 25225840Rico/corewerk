// Configuración global del sitio (una sola fuente de verdad para SEO).
export const SITE = {
	name: 'CoreWerk',
	url: 'https://corewerk.cl',
	// ⚠️ PLACEHOLDER — reemplazar por el número real antes de producción.
	telephone: '+56900000000',
	whatsapp: '56900000000',
	email: 'contacto@corewerk.cl',
	city: 'Antofagasta',
	country: 'CL',
	region: 'Norte de Chile',
	areaServed: 'Chile'
};

// Mensaje pre-cargado para los enlaces de WhatsApp.
export const WA_TEXT = encodeURIComponent('Hola CoreWerk, quiero información sobre sus servicios');
export const WA_LINK = `https://wa.me/${SITE.whatsapp}?text=${WA_TEXT}`;
