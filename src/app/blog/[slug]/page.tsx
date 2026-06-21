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
import HeadingAnchors from "@/components/HeadingAnchors"

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
      <HeadingAnchors />
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
            <div className="mb-2 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-purple-400">
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="text-gray-600">&middot;</span>
              <span>{post.readingTime}</span>
              {post.wordCount && (
                <>
                  <span className="text-gray-600">&middot;</span>
                  <span>{post.wordCount.toLocaleString()} words</span>
                </>
              )}
            </div>
            <h1 className="gradient-text mb-3 text-3xl font-bold sm:text-4xl">{post.title}</h1>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <a
                    key={tag}
                    href={`/blog/tags/${encodeURIComponent(tag)}`}
                    className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300 hover:bg-purple-500/20"
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
            className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300 prose-img:cursor-zoom-in"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-sm font-semibold text-purple-300">
                S
              </div>
              <div>
                <p className="text-sm font-medium text-gray-100">Sasen</p>
                <p className="text-xs text-gray-500">Writer &amp; developer</p>
              </div>
            </div>
            <ShareButtons title={post.title} url={`/blog/${slug}`} />
          </div>
        </AnimatedSection>

        <PostNavigation prev={prev} next={next} />

        {related.length > 0 && (
          <AnimatedSection>
            <div className="mt-12 border-t border-white/10 pt-8">
              <h2 className="mb-4 text-lg font-semibold text-gray-100">Related Posts</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="glass-card rounded-xl p-4"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-purple-400">
                      {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-100">{p.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="btn-secondary inline-flex"
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
