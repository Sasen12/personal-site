import { checkSession } from "@/lib/auth"
import { saveAdminPost, deleteAdminPost, getAdminPost } from "@/lib/admin-storage"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!(await checkSession())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }
  const { slug } = await params
  const post = await getAdminPost(slug)
  if (!post) return Response.json({ error: "Not found" }, { status: 404 })
  return Response.json({ post })
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!(await checkSession())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { slug } = await params
  const { title, content } = await request.json()

  const existing = await getAdminPost(slug)
  if (!existing) return Response.json({ error: "Not found" }, { status: 404 })

  await saveAdminPost({ ...existing, title, content })
  return Response.json({ success: true })
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!(await checkSession())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { slug } = await params
  await deleteAdminPost(slug)
  return Response.json({ success: true })
}
