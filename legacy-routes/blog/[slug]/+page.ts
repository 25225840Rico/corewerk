import { error } from '@sveltejs/kit';
import { getPost } from '$lib/content/blog';
import { blogPosts } from '$lib/content/blog';
export const prerender = true;
export function entries() { return blogPosts.map((p) => ({ slug: p.slug })); }
export function load({ params }: { params: { slug: string } }) {
	const post = getPost(params.slug);
	if (!post) throw error(404, 'Post no encontrado');
	return { post };
}
