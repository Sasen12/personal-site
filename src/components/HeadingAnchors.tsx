"use client"

import { useEffect } from "react"

export default function HeadingAnchors() {
  useEffect(() => {
    const article = document.querySelector("article")
    if (!article) return

    const headings = article.querySelectorAll("h2, h3, h4")
    headings.forEach((h) => {
      if (h.id || h.getAttribute("data-anchor")) return
      const id = h.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || ""
      if (!id) return
      h.id = id
      h.setAttribute("data-anchor", "true")
      h.classList.add("group")

      const anchor = document.createElement("a")
      anchor.href = `#${id}`
      anchor.className = "ml-2 text-gray-300 opacity-0 transition-opacity group-hover:opacity-100 dark:text-slate-600 no-underline hover:text-indigo-500 dark:hover:text-indigo-400"
      anchor.textContent = "#"
      h.appendChild(anchor)
    })
  }, [])

  return null
}
