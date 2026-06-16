import { getAllPosts } from "@/lib/posts"

export const dynamic = "force-static"

export async function GET() {
  const posts = getAllPosts()
  const siteUrl = "https://sasen.tech"

  const items = posts
    .map(
      (post) => `
    <entry>
      <title>${escapeXml(post.title)}</title>
      <link href="${siteUrl}/blog/${post.slug}"/>
      <id>${siteUrl}/blog/${post.slug}</id>
      <published>${new Date(post.date).toISOString()}</published>
      <updated>${new Date(post.date).toISOString()}</updated>
      <summary type="html">${escapeXml(post.excerpt)}</summary>
    </entry>`
    )
    .join("")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Sasen's Blog</title>
  <subtitle>Thoughts, tutorials, and things I've learned.</subtitle>
  <link href="${siteUrl}/feed.xml" rel="self"/>
  <link href="${siteUrl}/blog" rel="alternate"/>
  <id>${siteUrl}/</id>
  <updated>${new Date().toISOString()}</updated>
  <author>
    <name>Sasen</name>
  </author>
  ${items}
</feed>`

  return new Response(xml, {
    headers: { "Content-Type": "application/atom+xml; charset=utf-8" },
  })
}

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}
