"use client"

import { useEffect, useState } from "react"

export default function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const elements = document.querySelectorAll("article h2, article h3")
    const items = [...elements].map((el) => ({
      id: el.id || el.textContent?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") || "",
      text: el.textContent || "",
      level: el.tagName === "H2" ? 2 : 3,
    }))
    setHeadings(items)

    if (items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: "-80px 0px -60% 0px" }
    )

    elements.forEach((el) => {
      const id = el.id || el.textContent?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") || ""
      if (id && !el.id) el.id = id
      if (id) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  if (headings.length < 2) return null

  return (
    <nav className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-slate-700 dark:bg-slate-800">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400">On this page</h2>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? "1rem" : undefined }}>
            <a
              href={`#${h.id}`}
              className={`block text-sm transition-colors ${
                activeId === h.id
                  ? "font-medium text-indigo-600 dark:text-indigo-400"
                  : "text-gray-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
