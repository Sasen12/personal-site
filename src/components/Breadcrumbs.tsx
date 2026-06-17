"use client"

import Link from "next/link"

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="mb-6 flex items-center gap-2 text-xs text-gray-500 dark:text-slate-500">
      <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <span>/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-indigo-600 dark:hover:text-indigo-400">{item.label}</Link>
          ) : (
            <span className="text-gray-800 dark:text-slate-300">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
