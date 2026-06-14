import { SITE } from '$lib/seo/site';

export const prerender = true;

export function GET() {
	const today = new Date().toISOString().split('T')[0];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${SITE.url}/</loc>
		<lastmod>${today}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>1.0</priority>
	</url>
</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
