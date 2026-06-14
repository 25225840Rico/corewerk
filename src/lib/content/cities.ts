import type { CityContent } from '$lib/content/types';

// Páginas de ciudad para SEO local. Rellenado por el Agente 6.
export const cityPages: CityContent[] = [];

export function getCity(slug: string): CityContent | undefined {
	return cityPages.find((c) => c.slug === slug);
}
