import BlogCard from "@/components/BlogCard"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedCard from "@/components/AnimatedCard"
import { getAllPosts } from "@/lib/posts"
import { getAdminPosts } from "@/lib/admin-storage"

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
        <h1 className="mb-2 text-4xl font-bold sm:text-6xl">Blog</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-slate-400">
          Thoughts, tutorials, and things I&apos;ve learned.
        </p>
      </AnimatedSection>

      {allTags.length > 0 && (
        <AnimatedSection delay={0.05}>
          <div className="mb-8 flex flex-wrap gap-2">
            <a
              href="/blog"
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                !tag
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
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
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
                }`}
              >
                {t}
              </a>
            ))}
          </div>
        </AnimatedSection>
      )}

      {allPosts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {allPosts.map((post, i) => (
            <AnimatedCard key={post.slug} index={i}>
              <BlogCard post={post} />
            </AnimatedCard>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 p-16 text-center dark:border-slate-600">
          <p className="text-gray-500">No posts found for this tag.</p>
          <a href="/blog" className="mt-2 inline-block text-sm text-indigo-600 hover:underline dark:text-indigo-400">
            Clear filter
          </a>
        </div>
      )}
    </div>
  )
}
