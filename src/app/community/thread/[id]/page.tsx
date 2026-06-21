"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { use } from "react"
import { useCommunityAuth } from "@/components/CommunityProvider"
import CommunityAnimation from "@/components/CommunityAnimation"

type Thread = {
  id: string
  title: string
  content: string
  type: "question" | "debate" | "discussion"
  authorUsername: string
  createdAt: string
  tags: string[]
  replies: Reply[]
}

type Reply = {
  id: string
  content: string
  authorUsername: string
  createdAt: string
}

const typeColors: Record<string, string> = {
  question: "bg-emerald-500/10 text-emerald-300",
  debate: "bg-amber-500/10 text-amber-300",
  discussion: "bg-blue-500/10 text-blue-300",
}

export default function ThreadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { username } = useCommunityAuth()
  const [thread, setThread] = useState<Thread | null>(null)
  const [loading, setLoading] = useState(true)
  const [reply, setReply] = useState("")
  const [replying, setReplying] = useState(false)
  const [replyError, setReplyError] = useState("")
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch(`/api/community/threads/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("not found")
        return r.json()
      })
      .then(setThread)
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false))
  }, [id])

  async function handleReply(e: React.FormEvent) {
    e.preventDefault()
    setReplyError("")
    setReplying(true)

    try {
      const r = await fetch(`/api/community/threads/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: reply }),
      })
      const d = await r.json()
      if (!r.ok) {
        setReplyError(d.error)
      } else {
        setThread((prev) =>
          prev ? { ...prev, replies: [...prev.replies, d] } : prev
        )
        setReply("")
      }
    } catch {
      setReplyError("Connection error")
    } finally {
      setReplying(false)
    }
  }

  if (loading) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="h-8 w-3/4 animate-pulse rounded bg-white/5" />
        <div className="mt-4 h-32 animate-pulse rounded-xl bg-white/5" />
      </main>
    )
  }

  if (notFound || !thread) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <h1 className="text-2xl font-bold text-gray-100">Thread not found</h1>
        <Link href="/community" className="mt-4 inline-block text-purple-400 hover:text-purple-300">
          Back to community
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <CommunityAnimation>
        <Link href="/community" className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-purple-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to community
        </Link>

        <div className="mb-2 flex items-center gap-2">
          <span className={`rounded-full px-3 py-0.5 text-xs font-medium ${typeColors[thread.type] || ""}`}>
            {thread.type}
          </span>
          {thread.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-gray-500">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="gradient-text text-2xl font-bold sm:text-3xl">{thread.title}</h1>

        <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">
          <span>{thread.authorUsername}</span>
          <span>{new Date(thread.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="glass-card mt-6 whitespace-pre-wrap rounded-xl p-6 text-sm leading-relaxed text-gray-300">
          {thread.content}
        </div>
      </CommunityAnimation>

      <div className="mt-10">
        <CommunityAnimation>
          <h2 className="mb-4 text-lg font-semibold text-gray-100">
            Replies ({thread.replies.length})
          </h2>
        </CommunityAnimation>

        {thread.replies.length === 0 ? (
          <CommunityAnimation>
            <p className="glass-card rounded-xl p-8 text-center text-sm text-gray-500">
              No replies yet. Be the first to respond.
            </p>
          </CommunityAnimation>
        ) : (
          <div className="space-y-3">
            {thread.replies.map((r) => (
              <CommunityAnimation key={r.id}>
                <div className="glass-card rounded-xl p-4">
                  <div className="mb-1 flex items-center gap-2 text-xs text-gray-500">
                    <span className="font-medium text-gray-300">{r.authorUsername}</span>
                    <span>{new Date(r.createdAt).toLocaleDateString()}</span>
                  </div>
                  <p className="whitespace-pre-wrap text-sm text-gray-300">{r.content}</p>
                </div>
              </CommunityAnimation>
            ))}
          </div>
        )}
      </div>

      {username ? (
        <CommunityAnimation>
          <form onSubmit={handleReply} className="mt-8 space-y-3">
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Write a reply..."
              rows={3}
              required
              className="glass w-full rounded-lg px-4 py-2.5 text-sm outline-none transition focus:border-purple-500/50"
            />
            {replyError && (
              <p className="text-sm text-red-400">{replyError}</p>
            )}
            <button
              type="submit"
              disabled={replying}
              className="btn-primary"
            >
              {replying ? "Posting..." : "Post Reply"}
            </button>
          </form>
        </CommunityAnimation>
      ) : (
        <CommunityAnimation>
          <div className="glass-card mt-8 rounded-lg p-4 text-center text-sm text-gray-500">
            <Link href="/community/login" className="font-medium text-purple-400 hover:text-purple-300">
              Log in
            </Link> to reply
          </div>
        </CommunityAnimation>
      )}
    </main>
  )
}
