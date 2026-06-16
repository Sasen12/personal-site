import { getAllPosts } from "@/lib/posts"
import { projects } from "@/data/projects"

const BASE = "https://sasenhaputhanthreeportfolio.netlify.app"

const staticPages = [
  "", "/about", "/projects", "/blog", "/resume", "/contact",
]

export async function GET() {
  const posts = getAllPosts()

  const urls = [
    ...staticPages.map((p) => `<url><loc>${BASE}${p}</loc><changefreq>monthly</changefreq></url>`),
    ...projects.map((p) => `<url><loc>${BASE}/projects/${p.slug}</loc><changefreq>monthly</changefreq></url>`),
    ...posts.map((p) => `<url><loc>${BASE}/blog/${p.slug}</loc><lastmod>${p.date}</lastmod><changefreq>monthly</changefreq></url>`),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
