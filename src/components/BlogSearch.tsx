"use client"

import { useEffect, useState } from "react"
import { getAllPosts } from "@/lib/posts"

export default function BlogSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<{ slug: string; title: string; excerpt: string; date: string }[]>([])
  const [allPosts, setAllPosts] = useState<typeof import("@/lib/posts").getAllPosts extends () => infer R ? R : never>([])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen(true)
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  useEffect(() => {
    if (open) {
      import("@/lib/posts").then((mod) => setAllPosts(mod.getAllPosts() as any))
    }
  }, [open])

  useEffect(() => {
    if (!query || !allPosts.length) {
      setResults([])
      return
    }
    const q = query.toLowerCase()
    setResults(
      allPosts
        .filter((p: any) => p.title.toLowerCase().includes(q) || (p.excerpt && p.excerpt.toLowerCase().includes(q)) || p.tags.some((t: string) => t.toLowerCase().includes(q)))
        .slice(0, 10)
        .map((p: any) => ({ slug: p.slug, title: p.title, excerpt: p.excerpt || "", date: p.date }))
    )
  }, [query, allPosts])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-500 transition-colors hover:border-gray-300 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-600"
      >
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        Search
        <kbd className="ml-1 rounded border border-gray-200 px-1 font-mono text-[10px] dark:border-slate-600">⌘K</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 pt-[15vh]" onClick={() => setOpen(false)}>
          <div className="w-full max-w-lg rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-800" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3 dark:border-slate-700">
              <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input
                autoFocus
                type="text"
                placeholder="Search posts..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
              <kbd className="rounded border border-gray-200 px-1.5 text-[10px] text-gray-400 dark:border-slate-600">ESC</kbd>
            </div>
            <div className="max-h-72 overflow-y-auto p-2">
              {query && results.length === 0 && <p className="p-3 text-center text-sm text-gray-500">No results found.</p>}
              {results.map((r) => (
                <a
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="block rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-slate-700"
                  onClick={() => setOpen(false)}
                >
                  <div className="text-sm font-medium">{r.title}</div>
                  {r.excerpt && <div className="mt-0.5 text-xs text-gray-500 line-clamp-1">{r.excerpt}</div>}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
