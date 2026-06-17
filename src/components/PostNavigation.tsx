"use client"

import Link from "next/link"
import type { Post } from "@/lib/posts"

export default function PostNavigation({ prev, next }: { prev?: Post | null; next?: Post | null }) {
  return (
    <nav className="mt-12 grid gap-4 border-t border-gray-200 pt-8 dark:border-slate-700 sm:grid-cols-2">
      {prev ? (
        <Link href={`/blog/${prev.slug}`} className="group rounded-lg border border-gray-200 p-4 transition-colors hover:border-indigo-200 dark:border-slate-700 dark:hover:border-indigo-800">
          <span className="text-xs text-gray-500 dark:text-slate-500">&larr; Previous</span>
          <p className="mt-1 text-sm font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{prev.title}</p>
        </Link>
      ) : <div />}
      {next ? (
        <Link href={`/blog/${next.slug}`} className="group rounded-lg border border-gray-200 p-4 text-right transition-colors hover:border-indigo-200 dark:border-slate-700 dark:hover:border-indigo-800">
          <span className="text-xs text-gray-500 dark:text-slate-500">Next &rarr;</span>
          <p className="mt-1 text-sm font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{next.title}</p>
        </Link>
      ) : <div />}
    </nav>
  )
}
