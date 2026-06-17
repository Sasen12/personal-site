"use client"

import Link from "next/link"

export default function ServerError() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-2 text-6xl font-bold text-indigo-600 dark:text-indigo-400">500</h1>
      <p className="mb-6 text-lg text-gray-600 dark:text-slate-400">
        Something went wrong on our end. Please try again later.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
      >
        Go Home
      </Link>
    </div>
  )
}
