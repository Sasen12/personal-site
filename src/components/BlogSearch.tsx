"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import type { Post } from "@/lib/posts"

export default function BlogSearch({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((s) => !s)
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const results = query.trim()
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : posts

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-400 transition-colors hover:border-indigo-200 hover:text-gray-600 dark:border-slate-700 dark:hover:border-indigo-800 dark:hover:text-slate-300"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Search posts...
        <kbd className="ml-auto rounded border border-gray-200 px-1.5 py-0.5 text-xs dark:border-slate-600">⌘K</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]" onClick={() => setOpen(false)}>
          <div className="w-full max-w-lg rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-800" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3 dark:border-slate-700">
              <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search posts..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
              <kbd className="rounded border border-gray-200 px-1.5 py-0.5 text-xs text-gray-400 dark:border-slate-600">Esc</kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 ? (
                <p className="p-4 text-center text-sm text-gray-500">No posts found.</p>
              ) : (
                <>
                  <p className="px-2 pb-1 pt-1 text-xs text-gray-400">{results.length} result{results.length !== 1 ? "s" : ""}</p>
                  {results.slice(0, 20).map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-slate-700"
                    >
                      <span className="flex-1 font-medium">{post.title}</span>
                      <span className="shrink-0 text-xs text-gray-400">{post.readingTime}</span>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
