"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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
  replies: { id: string }[]
}

const typeColors: Record<string, string> = {
  question: "bg-emerald-500/10 text-emerald-300",
  debate: "bg-amber-500/10 text-amber-300",
  discussion: "bg-blue-500/10 text-blue-300",
}

export default function CommunityPage() {
  const { username, loading: authLoading } = useCommunityAuth()
  const [threads, setThreads] = useState<Thread[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/community/threads")
      .then((r) => r.json())
      .then(setThreads)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <CommunityAnimation>
          <div>
            <span className="section-label mb-4">Forum</span>
            <h1 className="gradient-text mt-3 text-3xl font-bold sm:text-4xl">
              Community
            </h1>
            <p className="mt-1 text-gray-400">Tech discussions, questions, and debates.</p>
          </div>
        </CommunityAnimation>

        <CommunityAnimation>
          {authLoading ? null : username ? (
            <Link
              href="/community/new"
              className="btn-primary"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Thread
            </Link>
          ) : (
            <Link
              href="/community/login"
              className="btn-secondary"
            >
              Log in to post
            </Link>
          )}
        </CommunityAnimation>
      </div>

      <CommunityAnimation>
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-500">
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">Questions</span>
          <span className="rounded-full bg-amber-500/10 px-3 py-1 text-amber-300">Debates</span>
          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-blue-300">Discussions</span>
          <span className="ml-auto text-gray-500">{threads.length} thread{threads.length !== 1 ? "s" : ""}</span>
        </div>
      </CommunityAnimation>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-28 animate-pulse rounded-xl bg-white/5" />
          ))}
        </div>
      ) : threads.length === 0 ? (
        <CommunityAnimation>
          <div className="glass-card rounded-xl p-12 text-center">
            <p className="text-lg text-gray-400">No threads yet.</p>
            {username && (
              <Link href="/community/new" className="mt-2 inline-block text-purple-400 hover:text-purple-300">
                Start the first discussion
              </Link>
            )}
          </div>
        </CommunityAnimation>
      ) : (
        <div className="space-y-4">
          {threads.map((thread) => (
            <CommunityAnimation key={thread.id}>
              <Link
                href={`/community/thread/${thread.id}`}
                className="glass-card block rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className={`rounded-full px-3 py-0.5 text-xs font-medium ${typeColors[thread.type] || ""}`}>
                    {thread.type}
                  </span>
                  {thread.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-lg font-semibold text-gray-100">{thread.title}</h2>
                <p className="mt-1 line-clamp-2 text-sm text-gray-400">
                  {thread.content}
                </p>
                <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                  <span>{thread.authorUsername}</span>
                  <span>{new Date(thread.createdAt).toLocaleDateString()}</span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {thread.replies.length}
                  </span>
                </div>
              </Link>
            </CommunityAnimation>
          ))}
        </div>
      )}
    </main>
  )
}
