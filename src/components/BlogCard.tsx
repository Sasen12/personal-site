import Link from "next/link"
import type { Post } from "@/lib/posts"

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-800">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h3 className="mb-2 text-lg font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-400">
          {post.excerpt}
        </p>
      </div>
    </Link>
  )
}
