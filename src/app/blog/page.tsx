import BlogCard from "@/components/BlogCard"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedCard from "@/components/AnimatedCard"
import { getAllPosts } from "@/lib/posts"
import { getAdminPosts } from "@/lib/admin-storage"

export default async function Blog() {
  const markdownPosts = getAllPosts()
  const adminPosts = await getAdminPosts()

  const allPosts = [
    ...markdownPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      excerpt: p.excerpt,
      tags: p.tags,
      content: "",
    })),
    ...adminPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      excerpt: p.excerpt,
      tags: p.tags,
      content: "",
    })),
  ]

  allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Blog</h1>
        <p className="mb-10 text-gray-600 dark:text-slate-400">
          Thoughts, tutorials, and things I&apos;ve learned.
        </p>
      </AnimatedSection>
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
          <p className="text-gray-500">No posts yet.</p>
          <p className="mt-2 text-sm text-gray-400">
            Write your first post at <code className="text-indigo-600 dark:text-indigo-400">/admin</code> after deploying.
          </p>
        </div>
      )}
    </div>
  )
}
