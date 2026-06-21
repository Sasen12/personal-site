import type { Metadata } from "next"
import BlogCard from "@/components/BlogCard"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedCard from "@/components/AnimatedCard"
import { getAllPosts } from "@/lib/posts"
import { getAdminPosts } from "@/lib/admin-storage"

export const metadata: Metadata = {
  title: "Blog — Sasen",
  description: "Tech commentary, project deep-dives, and personal writing about AI, hardware, mobile, and development.",
}

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>
}) {
  const markdownPosts = getAllPosts()
  const adminPosts = await getAdminPosts()
  const { tag } = await searchParams

  let allPosts = [
    ...markdownPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      excerpt: p.excerpt,
      tags: p.tags,
      content: "",
      readingTime: p.readingTime,
    })),
    ...adminPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      excerpt: p.excerpt,
      tags: p.tags,
      content: "",
      readingTime: `${Math.max(1, Math.round((p.content || "").trim().split(/\s+/).length / 200))} min read`,
    })),
  ]

  allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))

  const allTags = [...new Set(allPosts.flatMap((p) => p.tags))].sort()

  if (tag) {
    allPosts = allPosts.filter((p) => p.tags.includes(tag))
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <span className="section-label mb-4">Writing</span>
        <h1 className="gradient-text mb-4 text-4xl font-bold sm:text-6xl">Blog</h1>
        <p className="mb-8 text-lg text-gray-400">
          Thoughts, tutorials, and things I&apos;ve learned.
        </p>
      </AnimatedSection>

      {allTags.length > 0 && (
        <AnimatedSection>
          <div className="mb-8 flex flex-wrap gap-2">
            <a
              href="/blog"
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                !tag
                  ? "bg-purple-600 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              All
            </a>
            {allTags.map((t) => (
              <a
                key={t}
                href={`/blog?tag=${encodeURIComponent(t)}`}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  tag === t
                    ? "bg-purple-600 text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {t}
              </a>
            ))}
          </div>
        </AnimatedSection>
      )}

      {allPosts.length > 0 ? (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            {allPosts.map((post) => (
              <AnimatedCard key={post.slug}>
                <BlogCard post={post} />
              </AnimatedCard>
            ))}
          </div>
          <AnimatedSection>
            <nav className="mt-10 flex items-center justify-between text-sm">
              <span className="text-gray-500">
                {allPosts.length} post{allPosts.length !== 1 ? "s" : ""}
              </span>
              <div className="flex gap-4">
                <a
                  href="/blog/archive"
                  className="font-medium text-purple-400 hover:text-purple-300"
                >
                  View archive &rarr;
                </a>
              </div>
            </nav>
          </AnimatedSection>
        </>
      ) : (
        <div className="glass-card rounded-xl p-16 text-center">
          <p className="text-gray-400">No posts found for this tag.</p>
          <a href="/blog" className="mt-2 inline-block text-sm text-purple-400 hover:text-purple-300">
            Clear filter
          </a>
        </div>
      )}
    </div>
  )
}
