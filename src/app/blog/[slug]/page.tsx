import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/posts"
import { getAdminPost } from "@/lib/admin-storage"
import AnimatedSection from "@/components/AnimatedSection"
import ReadingProgress from "@/components/ReadingProgress"
import CopyCode from "@/components/CopyCode"
import Breadcrumbs from "@/components/Breadcrumbs"
import SeriesNav from "@/components/SeriesNav"
import PostNavigation from "@/components/PostNavigation"
import ShareButtons from "@/components/ShareButtons"
import FontSizeAdjuster from "@/components/FontSizeAdjuster"

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Sasen`,
    description: post.excerpt || `Read about ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read about ${post.title}`,
    },
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let post = await getPostBySlug(slug)

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
        readingTime: `${Math.max(1, Math.round((adminPost.content || "").trim().split(/\s+/).length / 200))} min read`,
      }
    }
  }

  if (!post) notFound()

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prev = currentIndex > 0 ? allPosts[currentIndex + 1] : null
  const next = currentIndex < allPosts.length - 1 ? allPosts[currentIndex - 1] : null

  const related = allPosts
    .filter((p) => p.slug !== slug && p.tags.some((t) => post!.tags.includes(t)))
    .slice(0, 2)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: "Sasen" },
  }

  return (
    <>
      <ReadingProgress />
      <CopyCode />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24" id="main-content">
        <AnimatedSection>
          <Breadcrumbs items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]} />

          <div className="mb-4 flex items-center justify-between">
            <SeriesNav post={post} allPosts={allPosts} />
            <FontSizeAdjuster />
          </div>

          <header className="mb-8">
            <div className="mb-2 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="text-gray-300 dark:text-slate-600">&middot;</span>
              <span>{post.readingTime}</span>
              {post.wordCount && (
                <>
                  <span className="text-gray-300 dark:text-slate-600">&middot;</span>
                  <span>{post.wordCount.toLocaleString()} words</span>
                </>
              )}
            </div>
            <h1 className="mb-3 text-3xl font-bold sm:text-4xl">{post.title}</h1>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <a
                    key={tag}
                    href={`/blog/tags/${encodeURIComponent(tag)}`}
                    className="rounded-md bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            )}
          </header>

          {post.image && (
            <div className="mb-8 overflow-hidden rounded-xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full object-cover"
              />
            </div>
          )}

          <div
            className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-img:cursor-zoom-in"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                S
              </div>
              <div>
                <p className="text-sm font-medium">Sasen</p>
                <p className="text-xs text-gray-500 dark:text-slate-500">Writer &amp; developer</p>
              </div>
            </div>
            <ShareButtons title={post.title} url={`/blog/${slug}`} />
          </div>
        </AnimatedSection>

        <PostNavigation prev={prev} next={next} />

        {related.length > 0 && (
          <AnimatedSection delay={0.2}>
            <div className="mt-12 border-t border-gray-200 pt-8 dark:border-slate-700">
              <h2 className="mb-4 text-lg font-semibold">Related Posts</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="rounded-xl border border-gray-200 p-4 transition-colors hover:border-indigo-200 dark:border-slate-700 dark:hover:border-indigo-800"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{p.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection delay={0.3}>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to all posts
            </Link>
          </div>
        </AnimatedSection>
      </article>
    </>
  )
}
