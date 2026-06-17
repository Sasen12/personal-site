import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export default function NotFound() {
  const recentPosts = getAllPosts().slice(0, 4)

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="mb-2 text-6xl font-bold text-indigo-600 dark:text-indigo-400">404</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-slate-400">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
      >
        Go Home
      </Link>

      {recentPosts.length > 0 && (
        <div className="mt-12 w-full">
          <h2 className="mb-4 text-left text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-500">
            Recent Posts
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {recentPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-lg border border-gray-200 p-3 text-left text-sm transition-colors hover:border-indigo-200 dark:border-slate-700 dark:hover:border-indigo-800"
              >
                <p className="font-medium">{p.title}</p>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-slate-500">{p.readingTime}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
