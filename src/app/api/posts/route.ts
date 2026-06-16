import { getAllPosts } from "@/lib/posts"
import { getAdminPosts } from "@/lib/admin-storage"

export async function GET() {
  const markdownPosts = getAllPosts()
  let adminPosts = await getAdminPosts()

  const allPosts = [
    ...markdownPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      excerpt: p.excerpt,
      tags: p.tags,
      source: "markdown" as const,
    })),
    ...adminPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      excerpt: p.excerpt,
      tags: p.tags,
      source: "admin" as const,
    })),
  ]

  allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
  return Response.json({ posts: allPosts })
}
