import type { Metadata } from "next"
import Link from "next/link"
import AnimatedSection from "@/components/AnimatedSection"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Tags — Sasen",
  description: "Browse blog posts by tag.",
}

export default function TagsPage() {
  const posts = getAllPosts()
  const tagCounts = new Map<string, number>()
  posts.forEach((p) => p.tags.forEach((t) => tagCounts.set(t, (tagCounts.get(t) || 0) + 1)))
  const sorted = [...tagCounts.entries()].sort((a, b) => b[1] - a[1])
  const maxCount = sorted[0]?.[1] || 1

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <nav className="mb-6 text-xs text-gray-500 dark:text-slate-500">
          <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 dark:text-slate-300">Tags</span>
        </nav>
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Tags</h1>
        <p className="mb-8 text-gray-600 dark:text-slate-400">{sorted.length} total tags across {posts.length} posts.</p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="flex flex-wrap items-center gap-3">
          {sorted.map(([tag, count], i) => {
            const size = 0.75 + (count / maxCount) * 0.75
            return (
              <Link
                key={tag}
                href={`/blog/tags/${encodeURIComponent(tag.toLowerCase())}`}
                className="rounded-full border border-gray-200 px-3 py-1 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-700 dark:hover:border-indigo-700 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400"
                style={{ fontSize: `${size}rem` }}
              >
                {tag}
                <span className="ml-1 text-xs text-gray-400 dark:text-slate-500">({count})</span>
              </Link>
            )
          })}
        </div>
      </AnimatedSection>
    </main>
  )
}
