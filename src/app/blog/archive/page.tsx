import type { Metadata } from "next"
import Link from "next/link"
import AnimatedSection from "@/components/AnimatedSection"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Blog Archive — Sasen",
  description: "Browse blog posts by month and year.",
}

export default function BlogArchivePage() {
  const posts = getAllPosts()

  const grouped = new Map<string, typeof posts>()
  posts.forEach((p) => {
    const key = p.date.slice(0, 7)
    const existing = grouped.get(key) || []
    existing.push(p)
    grouped.set(key, existing)
  })

  const sorted = [...grouped.entries()].sort((a, b) => b[0].localeCompare(a[0]))

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <span className="section-label mb-4">Archive</span>
        <h1 className="gradient-text mb-2 text-3xl font-bold sm:text-4xl">Blog Archive</h1>
        <p className="mb-8 text-gray-400">All posts grouped by month.</p>
      </AnimatedSection>

      {sorted.map(([month, monthPosts], i) => (
        <AnimatedSection key={month}>
          <section className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-purple-400">
              {new Date(month + "-01").toLocaleDateString("en-US", { year: "numeric", month: "long" })}
            </h2>
            <div className="space-y-1">
              {monthPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group glass-card flex items-baseline gap-4 rounded-lg p-3"
                >
                  <span className="w-16 shrink-0 text-xs text-gray-500">{p.date.slice(8)}</span>
                  <span className="text-gray-100 group-hover:text-purple-400">{p.title}</span>
                </Link>
              ))}
            </div>
          </section>
        </AnimatedSection>
      ))}
    </main>
  )
}
