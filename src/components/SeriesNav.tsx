import type { Post } from "@/lib/posts"
import Link from "next/link"

export default function SeriesNav({ post, allPosts }: { post: Post; allPosts: Post[] }) {
  const series = post.series
  if (!series) return null

  const seriesPosts = allPosts
    .filter((p) => p.series === series)
    .sort((a, b) => (a.seriesIndex || 0) - (b.seriesIndex || 0))

  const currentIndex = seriesPosts.findIndex((p) => p.slug === post.slug)

  return (
    <div className="mb-8 rounded-lg border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-950/30">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
        Series: {series}
      </p>
      <p className="text-sm text-gray-600 dark:text-slate-400">
        Part {currentIndex + 1} of {seriesPosts.length}
      </p>
      {seriesPosts.length > 1 && (
        <div className="mt-2 flex gap-2">
          {currentIndex > 0 && (
            <Link href={`/blog/${seriesPosts[currentIndex - 1].slug}`} className="text-xs text-indigo-600 hover:underline dark:text-indigo-400">
              &larr; Previous
            </Link>
          )}
          {currentIndex < seriesPosts.length - 1 && (
            <Link href={`/blog/${seriesPosts[currentIndex + 1].slug}`} className="text-xs text-indigo-600 hover:underline dark:text-indigo-400">
              Next &rarr;
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
