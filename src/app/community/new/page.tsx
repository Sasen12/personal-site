"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useCommunityAuth } from "@/components/CommunityProvider"
import CommunityAnimation from "@/components/CommunityAnimation"

const TYPES = ["question", "debate", "discussion"] as const

const typeBtnColors: Record<string, string> = {
  question: "data-[active=true]:bg-emerald-600 data-[active=true]:text-white",
  debate: "data-[active=true]:bg-amber-600 data-[active=true]:text-white",
  discussion: "data-[active=true]:bg-purple-600 data-[active=true]:text-white",
}

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
        <h1 className="gradient-text mb-2 text-3xl font-bold sm:text-4xl">
          New Thread
        </h1>
        <p className="mb-8 text-gray-400">Start a tech discussion. Must be tech-related.</p>
      </CommunityAnimation>

      <CommunityAnimation>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Type</label>
            <div className="flex gap-2">
              {TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  data-active={type === t}
                  className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-all ${
                    type === t
                      ? "bg-purple-600 text-white"
                      : "glass text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="glass w-full rounded-lg px-4 py-2.5 text-sm outline-none transition focus:border-purple-500/50"
              placeholder="What's on your mind?"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={6}
              className="glass w-full rounded-lg px-4 py-2.5 text-sm outline-none transition focus:border-purple-500/50"
              placeholder="Share your thoughts, question, or debate topic..."
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Tags (comma-separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="glass w-full rounded-lg px-4 py-2.5 text-sm outline-none transition focus:border-purple-500/50"
              placeholder="e.g. AI, privacy, mobile"
            />
          </div>

          {error && (
            <div className="rounded-lg bg-red-500/10 p-4 text-sm text-red-400">
              {error}
            </div>
          )}

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
            >
              {loading ? "Posting..." : "Post Thread"}
            </button>
            <Link
              href="/community"
              className="text-sm text-gray-500 hover:text-purple-400"
            >
              Cancel
            </Link>
          </div>
        </form>
      </CommunityAnimation>
    </main>
  )
}
