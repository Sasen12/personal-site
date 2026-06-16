import { remark } from "remark"
import html from "remark-html"

export interface AdminPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  contentHtml: string
  tags: string[]
}

let memoryStore: AdminPost[] = []

function isNetlify(): boolean {
  return !!process.env.NETLIFY
}

async function getBlobStore() {
  const { getStore } = await import("@netlify/blobs")
  return getStore({ name: "blog-posts" })
}

export async function getAdminPosts(): Promise<AdminPost[]> {
  if (isNetlify()) {
    const store = await getBlobStore()
    const data = await store.get("posts", { type: "json" })
    return (data as AdminPost[]) || []
  }
  return memoryStore
}

export async function getAdminPost(slug: string): Promise<AdminPost | null> {
  const posts = await getAdminPosts()
  return posts.find((p) => p.slug === slug) || null
}

export async function saveAdminPost(post: AdminPost): Promise<void> {
  const result = await remark().use(html).process(post.content)
  post.contentHtml = result.toString()

  if (!post.excerpt) {
    const firstP = post.content
      .replace(/#{1,6}\s.*\n/, "")
      .split("\n")
      .find((p) => p.trim().length > 0)
      ?.replace(/[#*`\[\]]/g, "")
      .slice(0, 150) || ""
    post.excerpt = firstP + (firstP.length >= 150 ? "..." : "")
  }

  if (isNetlify()) {
    const store = await getBlobStore()
    const posts = await getAdminPosts()
    const idx = posts.findIndex((p) => p.slug === post.slug)
    if (idx >= 0) posts[idx] = post
    else posts.push(post)
    await store.setJSON("posts", posts)
  } else {
    const idx = memoryStore.findIndex((p) => p.slug === post.slug)
    if (idx >= 0) memoryStore[idx] = post
    else memoryStore.push(post)
  }
}

export async function deleteAdminPost(slug: string): Promise<void> {
  if (isNetlify()) {
    const store = await getBlobStore()
    const posts = await getAdminPosts()
    const filtered = posts.filter((p) => p.slug !== slug)
    await store.setJSON("posts", filtered)
  } else {
    memoryStore = memoryStore.filter((p) => p.slug !== slug)
  }
}
