import type { Metadata } from "next"
import AnimatedSection from "@/components/AnimatedSection"
import { getAllPosts } from "@/lib/posts"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Stats — Sasen",
  description: "Blog and site statistics.",
}

export default function StatsPage() {
  const posts = getAllPosts()
  const allTags = posts.flatMap((p) => p.tags)
  const tagCounts = new Map<string, number>()
  allTags.forEach((t) => tagCounts.set(t, (tagCounts.get(t) || 0) + 1))
  const sortedTags = [...tagCounts.entries()].sort((a, b) => b[1] - a[1])

  const totalWords = posts.reduce((sum, p) => {
    return sum + p.content.replace(/<[^>]*>/g, "").split(/\s+/).length
  }, 0)

  const monthly = new Map<string, number>()
  posts.forEach((p) => {
    const key = p.date.slice(0, 7)
    monthly.set(key, (monthly.get(key) || 0) + 1)
  })
  const sortedMonths = [...monthly.entries()].sort()

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <h1 className="mb-2 text-3xl font-bold gradient-text inline-block sm:text-4xl">Stats</h1>
        <p className="mb-8 text-gray-400">Numbers about this site and its content.</p>
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <div className="mb-10 grid gap-4 sm:grid-cols-4">
          {[
            { label: "Blog Posts", value: posts.length },
            { label: "Projects", value: projects.length },
            { label: "Tags", value: tagCounts.size },
            { label: "Total Words", value: totalWords.toLocaleString() },
          ].map((s) => (
            <div key={s.label} className="glass-card rounded-xl p-4 text-center">
              <div className="text-2xl font-bold gradient-text">{s.value}</div>
              <div className="mt-1 text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="mb-10">
          <h2 className="mb-3 text-xl font-semibold">Posts by Month</h2>
          <div className="space-y-2">
            {sortedMonths.map(([month, count]) => (
              <div key={month} className="flex items-center gap-3">
                <span className="w-20 text-sm text-gray-400">{month}</span>
                <div className="flex-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ width: `${(count / Math.max(...sortedMonths.map((m) => m[1]))) * 100}%` }} />
                </div>
                <span className="text-sm text-gray-400">{count}</span>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <section>
          <h2 className="mb-3 text-xl font-semibold">Tag Frequency</h2>
          <div className="flex flex-wrap gap-2">
            {sortedTags.map(([tag, count]) => (
              <span key={tag} className="rounded-full glass-card px-3 py-1 text-sm">
                {tag} <span className="text-purple-400">({count})</span>
              </span>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
