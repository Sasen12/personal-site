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
  question: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  debate: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  discussion: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
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
            <h1 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Community
            </h1>
            <p className="mt-1 text-gray-600 dark:text-slate-400">Tech discussions, questions, and debates.</p>
          </div>
        </CommunityAnimation>

        <CommunityAnimation delay={0.1}>
          {authLoading ? null : username ? (
            <Link
              href="/community/new"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-xl"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Thread
            </Link>
          ) : (
            <Link
              href="/community/login"
              className="rounded-lg border border-indigo-300 px-5 py-2.5 text-sm font-medium text-indigo-600 transition-all hover:scale-105 hover:shadow-lg dark:border-indigo-700 dark:text-indigo-400"
            >
              Log in to post
            </Link>
          )}
        </CommunityAnimation>
      </div>

      <CommunityAnimation delay={0.15}>
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-500">
          <span className="rounded bg-emerald-100 px-2 py-0.5 dark:bg-emerald-900/40 dark:text-emerald-300">Questions</span>
          <span className="rounded bg-amber-100 px-2 py-0.5 dark:bg-amber-900/40 dark:text-amber-300">Debates</span>
          <span className="rounded bg-blue-100 px-2 py-0.5 dark:bg-blue-900/40 dark:text-blue-300">Discussions</span>
          <span className="ml-auto text-gray-400">{threads.length} thread{threads.length !== 1 ? "s" : ""}</span>
        </div>
      </CommunityAnimation>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-28 animate-pulse rounded-xl bg-gray-100 dark:bg-slate-800" />
          ))}
        </div>
      ) : threads.length === 0 ? (
        <CommunityAnimation>
          <div className="rounded-xl border-2 border-dashed border-gray-300 p-12 text-center dark:border-slate-600">
            <p className="text-lg text-gray-500 dark:text-slate-400">No threads yet.</p>
            {username && (
              <Link href="/community/new" className="mt-2 inline-block text-indigo-600 hover:underline dark:text-indigo-400">
                Start the first discussion
              </Link>
            )}
          </div>
        </CommunityAnimation>
      ) : (
        <div className="space-y-4">
          {threads.map((thread, i) => (
            <CommunityAnimation key={thread.id} index={i}>
              <Link
                href={`/community/thread/${thread.id}`}
                className="block rounded-xl border border-gray-200 bg-white p-5 transition-all hover:scale-[1.02] hover:border-indigo-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-indigo-700"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className={`rounded px-2 py-0.5 text-xs font-medium ${typeColors[thread.type] || ""}`}>
                    {thread.type}
                  </span>
                  {thread.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500 dark:bg-slate-700 dark:text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-lg font-semibold">{thread.title}</h2>
                <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-slate-400">
                  {thread.content}
                </p>
                <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
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
