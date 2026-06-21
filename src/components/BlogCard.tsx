import Link from "next/link"
import type { Post } from "@/lib/posts"

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="glass-card rounded-xl overflow-hidden">
        {post.image && (
          <div className="aspect-[2/1] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-5">
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
          </div>
          <h3 className="mb-2 text-lg font-semibold text-gray-100 group-hover:text-purple-400">
            {post.title}
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-gray-400">
            {post.excerpt}
          </p>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
