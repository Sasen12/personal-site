import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllPosts } from "@/lib/posts"
import { getAdminPost } from "@/lib/admin-storage"
import AnimatedSection from "@/components/AnimatedSection"

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const markdownPosts = getAllPosts()
  let post = markdownPosts.find((p) => p.slug === slug)

  if (!post) {
    const adminPost = await getAdminPost(slug)
    if (adminPost) {
      post = {
        slug: adminPost.slug,
        title: adminPost.title,
        date: adminPost.date,
        excerpt: adminPost.excerpt,
        content: adminPost.contentHtml || adminPost.content,
        tags: adminPost.tags,
      }
    }
  }

  if (!post) notFound()

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to blog
        </Link>

        <header className="mb-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">{post.title}</h1>
        </header>

        <div
          className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-indigo-600 dark:prose-a:text-indigo-400"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </AnimatedSection>
    </article>
  )
}
