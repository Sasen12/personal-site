import Link from "next/link"
import type { Post } from "@/lib/posts"

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-800">
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
        </div>
        <h3 className="mb-2 text-lg font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
          {post.title}
        </h3>
        <p className="mb-3 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
          {post.excerpt}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
