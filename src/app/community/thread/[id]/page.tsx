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
  question: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  debate: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  discussion: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
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
        <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-slate-700" />
        <div className="mt-4 h-32 animate-pulse rounded-xl bg-gray-100 dark:bg-slate-800" />
      </main>
    )
  }

  if (notFound || !thread) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <h1 className="text-2xl font-bold">Thread not found</h1>
        <Link href="/community" className="mt-4 inline-block text-indigo-600 hover:underline dark:text-indigo-400">
          Back to community
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <CommunityAnimation>
        <Link href="/community" className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to community
        </Link>

        <div className="mb-2 flex items-center gap-2">
          <span className={`rounded px-2 py-0.5 text-xs font-medium ${typeColors[thread.type] || ""}`}>
            {thread.type}
          </span>
          {thread.tags.map((tag) => (
            <span key={tag} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500 dark:bg-slate-700 dark:text-slate-400">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-2xl font-bold sm:text-3xl">{thread.title}</h1>

        <div className="mt-1 flex items-center gap-3 text-sm text-gray-400">
          <span>{thread.authorUsername}</span>
          <span>{new Date(thread.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm leading-relaxed dark:border-slate-700 dark:bg-slate-800/50">
          {thread.content}
        </div>
      </CommunityAnimation>

      <div className="mt-10">
        <CommunityAnimation>
          <h2 className="mb-4 text-lg font-semibold">
            Replies ({thread.replies.length})
          </h2>
        </CommunityAnimation>

        {thread.replies.length === 0 ? (
          <CommunityAnimation delay={0.1}>
            <p className="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center text-sm text-gray-500 dark:border-slate-600 dark:text-slate-400">
              No replies yet. Be the first to respond.
            </p>
          </CommunityAnimation>
        ) : (
          <div className="space-y-3">
            {thread.replies.map((r, i) => (
              <CommunityAnimation key={r.id} index={i}>
                <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800/30">
                  <div className="mb-1 flex items-center gap-2 text-xs text-gray-400">
                    <span className="font-medium text-gray-600 dark:text-slate-300">{r.authorUsername}</span>
                    <span>{new Date(r.createdAt).toLocaleDateString()}</span>
                  </div>
                  <p className="whitespace-pre-wrap text-sm">{r.content}</p>
                </div>
              </CommunityAnimation>
            ))}
          </div>
        )}
      </div>

      {username ? (
        <CommunityAnimation delay={0.2}>
          <form onSubmit={handleReply} className="mt-8 space-y-3">
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Write a reply..."
              rows={3}
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-800 dark:focus:border-indigo-400 dark:focus:ring-indigo-800"
            />
            {replyError && (
              <p className="text-sm text-red-500">{replyError}</p>
            )}
            <button
              type="submit"
              disabled={replying}
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-xl disabled:opacity-50"
            >
              {replying ? "Posting..." : "Post Reply"}
            </button>
          </form>
        </CommunityAnimation>
      ) : (
        <CommunityAnimation delay={0.2}>
          <div className="mt-8 rounded-lg border border-dashed border-gray-300 p-4 text-center text-sm text-gray-500 dark:border-slate-600">
            <Link href="/community/login" className="font-medium text-indigo-600 hover:underline dark:text-indigo-400">
              Log in
            </Link> to reply
          </div>
        </CommunityAnimation>
      )}
    </main>
  )
}
