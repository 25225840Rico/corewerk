import type { BlogPost } from '$lib/content/types';

// Posts del blog (SEO/GEO). Rellenado por el Agente 3.
export const blogPosts: BlogPost[] = [];

export function getPost(slug: string): BlogPost | undefined {
	return blogPosts.find((p) => p.slug === slug);
}
