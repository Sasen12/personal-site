import Link from "next/link"
import type { Post } from "@/data/posts"

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="rounded-lg border border-gray-200 p-6 transition-colors hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700">
        <div className="mb-2 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
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
        <h3 className="mb-2 text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {post.excerpt}
        </p>
      </article>
    </Link>
  )
}
