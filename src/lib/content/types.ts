// Tipos de contenido para subpáginas de segmento y ciudad.
// Las rutas son thin: importan un objeto de estos y lo pasan a la plantilla.

export type FaqItem = { q: string; a: string };

export type SegmentContent = {
	slug: string; // ej. 'web-corporativa'
	segmentId: string; // id en data.ts (ej. 'corporativo')
	badge: string; // "Especialistas en ..."
	h1: string; // headline optimizado (provisto)
	tldr: string; // párrafo TLDR-first 40-60 palabras (GEO)
	subheadline: string;
	metaTitle: string;
	metaDescription: string;
	keywords: string[];
	priceFrom: string; // "UF 8"
	recommendedPlan: string; // "Profesional"
	why: { title: string; desc: string }[]; // 3 puntos "¿por qué?"
	includes: string[]; // checklist
	useCases: { name: string; detail: string }[]; // 2-3
	faqs: FaqItem[]; // 5 únicas
};

export type CityContent = {
	slug: string; // 'agencia-web-santiago'
	city: string; // 'Santiago'
	region: string; // 'Región Metropolitana'
	h1: string;
	tldr: string;
	metaTitle: string;
	metaDescription: string;
	keywords: string[];
	marketNote: string; // característica del mercado local
};

export type BlogPost = {
	slug: string;
	title: string;
	description: string;
	date: string; // ISO
	readingMinutes: number;
	tldr: string;
	keywords: string[];
	/** HTML del cuerpo (H2/H3/p/ul). Renderizado con {@html}. */
	body: string;
	faqs: FaqItem[];
};
