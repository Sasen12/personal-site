"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

type Post = {
  slug: string
  title: string
  date: string
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetch("/api/admin/posts")
      .then((r) => {
        if (r.status === 401) {
          router.push("/admin")
          return null
        }
        return r.json()
      })
      .then((data) => {
        if (data) setPosts(data.posts)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [router])

  async function handleDelete(slug: string) {
    if (!confirm("Delete this post?")) return
    await fetch(`/api/admin/posts/${slug}`, { method: "DELETE" })
    setPosts((p) => p.filter((x) => x.slug !== slug))
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/admin")
  }

  if (loading) return <div className="px-6 py-16 text-center text-sm text-gray-500">Loading...</div>

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-600 dark:text-slate-400">Manage your blog posts</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/admin/dashboard/new"
            className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500"
          >
            New Post
          </Link>
          <button
            onClick={handleLogout}
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm dark:border-slate-600"
          >
            Logout
          </button>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center text-sm text-gray-500 dark:border-slate-600">
          No posts yet. Create your first one!
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="flex items-center justify-between rounded-xl border border-gray-200 p-4 dark:border-slate-700"
            >
              <div>
                <p className="font-medium">{post.title}</p>
                <p className="text-xs text-gray-500 dark:text-slate-500">{post.date} &middot; /blog/{post.slug}</p>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/admin/dashboard/edit/${post.slug}`}
                  className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm dark:bg-slate-800"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(post.slug)}
                  className="rounded-lg bg-red-50 px-3 py-1.5 text-sm text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
