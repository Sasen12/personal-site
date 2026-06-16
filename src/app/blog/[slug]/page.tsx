import Link from "next/link"
import { notFound } from "next/navigation"
import { posts } from "@/data/posts"

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <article className="max-w-2xl">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
      >
        &larr; Back to blog
      </Link>

      <header className="mb-8">
        <h1 className="mb-3 text-3xl font-bold">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <time dateTime={post.date}>{post.date}</time>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose-custom">{post.content}</div>
    </article>
  )
}
