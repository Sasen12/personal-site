import Link from "next/link"
import type { Post } from "@/lib/posts"

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-800">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <time dateTime={post.date}>{post.date}</time>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {post.excerpt}
        </p>
      </article>
    </Link>
  )
}
