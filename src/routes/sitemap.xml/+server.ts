import { SITE } from '$lib/seo/site';
import { segmentPages } from '$lib/content/segments';
import { cityPages } from '$lib/content/cities';
import { blogPosts } from '$lib/content/blog';

export const prerender = true;

type Url = { loc: string; priority: string; changefreq: string; lastmod?: string };

export function GET() {
	const today = new Date().toISOString().split('T')[0];

	const urls: Url[] = [
		{ loc: '/', priority: '1.0', changefreq: 'daily', lastmod: today },
		{ loc: '/analiza-mi-web', priority: '0.8', changefreq: 'weekly', lastmod: today },
		{ loc: '/blog', priority: '0.8', changefreq: 'weekly', lastmod: today },
		...segmentPages.map((s) => ({
			loc: `/${s.slug}`,
			priority: '0.9',
			changefreq: 'weekly',
			lastmod: today
		})),
		...cityPages.map((c) => ({
			loc: `/${c.slug}`,
			priority: '0.8',
			changefreq: 'monthly',
			lastmod: today
		})),
		...blogPosts.map((p) => ({
			loc: `/blog/${p.slug}`,
			priority: '0.7',
			changefreq: 'monthly',
			lastmod: p.date.split('T')[0]
		}))
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(u) => `	<url>
		<loc>${SITE.url}${u.loc}</loc>
		<lastmod>${u.lastmod ?? today}</lastmod>
		<changefreq>${u.changefreq}</changefreq>
		<priority>${u.priority}</priority>
	</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
