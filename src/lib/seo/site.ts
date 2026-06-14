// Configuración global del sitio (una sola fuente de verdad para SEO).
export const SITE = {
	name: 'Konrad',
	url: 'https://konrad.cl',
	telephone: '+56912345678',
	email: 'hola@konrad.cl',
	city: 'Antofagasta',
	country: 'CL',
	// Atendemos todo Chile (posicionamiento nacional, ver Agente 6)
	areaServed: 'Chile'
};

// ⚠️ DATOS A REEMPLAZAR ANTES DE PRODUCCIÓN (actualmente ilustrativos):
// teléfono real, email real, y el aggregateRating del JSON-LD (reviews reales).
export const RATING_PLACEHOLDER = {
	ratingValue: '4.9',
	reviewCount: '23',
	isPlaceholder: true
};
