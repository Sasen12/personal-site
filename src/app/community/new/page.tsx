"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useCommunityAuth } from "@/components/CommunityProvider"
import CommunityAnimation from "@/components/CommunityAnimation"

const TYPES = ["question", "debate", "discussion"] as const

export default function NewThread() {
  const { username, loading: authLoading } = useCommunityAuth()
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [type, setType] = useState<"question" | "debate" | "discussion">("discussion")
  const [tags, setTags] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  if (authLoading) return null
  if (!username) {
    router.push("/community/login")
    return null
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const r = await fetch("/api/community/threads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content,
          type,
          tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
        }),
      })
      const d = await r.json()
      if (!r.ok) {
        setError(d.error)
      } else {
        router.push(`/community/thread/${d.id}`)
      }
    } catch {
      setError("Connection error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <CommunityAnimation>
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          New Thread
        </h1>
        <p className="mb-8 text-gray-600 dark:text-slate-400">Start a tech discussion. Must be tech-related.</p>
      </CommunityAnimation>

      <CommunityAnimation delay={0.1}>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium">Type</label>
            <div className="flex gap-2">
              {TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition-all ${
                    type === t
                      ? "bg-indigo-600 text-white shadow-md"
                      : "border border-gray-300 text-gray-600 hover:border-indigo-300 dark:border-slate-600 dark:text-slate-400"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-800 dark:focus:border-indigo-400 dark:focus:ring-indigo-800"
              placeholder="What's on your mind?"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={6}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-800 dark:focus:border-indigo-400 dark:focus:ring-indigo-800"
              placeholder="Share your thoughts, question, or debate topic..."
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Tags (comma-separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-800 dark:focus:border-indigo-400 dark:focus:ring-indigo-800"
              placeholder="e.g. AI, privacy, mobile"
            />
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
              {error}
            </div>
          )}

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-xl disabled:opacity-50"
            >
              {loading ? "Posting..." : "Post Thread"}
            </button>
            <Link
              href="/community"
              className="text-sm text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Cancel
            </Link>
          </div>
        </form>
      </CommunityAnimation>
    </main>
  )
}
