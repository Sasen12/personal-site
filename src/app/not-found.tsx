import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-6 text-center">
      <span className="mb-2 text-[8rem] font-black leading-none tracking-tighter text-indigo-500/20 dark:text-indigo-500/10">
        404
      </span>
      <h1 className="mb-3 -mt-6 text-2xl font-bold">Lost in the static?</h1>
      <p className="mb-8 text-gray-600 dark:text-slate-400">
        This page doesn&apos;t exist or went offline. Maybe it was never rendered.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500"
        >
          Go Home
        </Link>
        <Link
          href="/projects"
          className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-600 dark:hover:border-indigo-400"
        >
          Projects
        </Link>
        <Link
          href="/blog"
          className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-600 dark:hover:border-indigo-400"
        >
          Blog
        </Link>
      </div>
    </div>
  )
}
