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
        <nav className="mb-6 text-xs text-gray-500">
          <Link href="/" className="hover:text-purple-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-purple-400">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Tags</span>
        </nav>
        <h1 className="gradient-text mb-2 text-3xl font-bold sm:text-4xl">Tags</h1>
        <p className="mb-8 text-gray-400">{sorted.length} total tags across {posts.length} posts.</p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-wrap items-center gap-3">
          {sorted.map(([tag, count]) => {
            const size = 0.75 + (count / maxCount) * 0.75
            return (
              <Link
                key={tag}
                href={`/blog/tags/${encodeURIComponent(tag.toLowerCase())}`}
                className="glass-card rounded-full px-4 py-2 transition-colors hover:border-purple-500/30 hover:text-purple-300"
                style={{ fontSize: `${size}rem` }}
              >
                {tag}
                <span className="ml-1.5 text-xs text-gray-500">({count})</span>
              </Link>
            )
          })}
        </div>
      </AnimatedSection>
    </main>
  )
}
