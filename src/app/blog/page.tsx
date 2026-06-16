import BlogCard from "@/components/BlogCard"
import { posts } from "@/data/posts"

export default function Blog() {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">Blog</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        Thoughts, tutorials, and things I&apos;ve learned.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
