import { checkSession } from "@/lib/auth"
import { getAdminPosts, saveAdminPost, AdminPost } from "@/lib/admin-storage"

export async function GET() {
  const posts = await getAdminPosts()
  return Response.json({ posts })
}

export async function POST(request: Request) {
  if (!(await checkSession())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { title, content, slug } = await request.json()
  if (!title || !content) {
    return Response.json({ error: "Title and content are required" }, { status: 400 })
  }

  const postSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

  const post: AdminPost = {
    slug: postSlug,
    title,
    date: new Date().toISOString().split("T")[0],
    excerpt: "",
    content,
    contentHtml: "",
    tags: [],
  }

  await saveAdminPost(post)
  return Response.json({ post })
}
