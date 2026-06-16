import BlogCard from "@/components/BlogCard"
import { getAllPosts } from "@/lib/posts"

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Blog</h1>
      <p className="mb-10 text-gray-600 dark:text-gray-400">
        Thoughts, tutorials, and things I&apos;ve learned.
      </p>
      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 p-16 text-center dark:border-gray-700">
          <p className="text-gray-500">No posts yet.</p>
          <p className="mt-2 text-sm text-gray-400">
            Write your first post at <code className="text-indigo-600 dark:text-indigo-400">/admin</code> after deploying.
          </p>
        </div>
      )}
    </div>
  )
}
