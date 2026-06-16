import { getPostBySlug } from "@/lib/posts"
import { getAdminPost } from "@/lib/admin-storage"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  const markdownPost = await getPostBySlug(slug)
  if (markdownPost) {
    return Response.json({ post: { ...markdownPost, source: "markdown" } })
  }

  const adminPost = await getAdminPost(slug)
  if (adminPost) {
    return Response.json({ post: { ...adminPost, source: "admin", content: adminPost.contentHtml } })
  }

  return Response.json({ error: "Not found" }, { status: 404 })
}
