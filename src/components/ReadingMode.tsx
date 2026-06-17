"use client"

import { useEffect, useState } from "react"

export default function ReadingMode() {
  const [mode, setMode] = useState<"light" | "dark" | "sepia">("light")

  useEffect(() => {
    const stored = localStorage.getItem("readingMode") as "light" | "dark" | "sepia" | null
    if (stored) setMode(stored)
  }, [])

  const toggle = () => {
    const next = mode === "light" ? "sepia" : mode === "sepia" ? "dark" : "light"
    setMode(next)
    localStorage.setItem("readingMode", next)
    const article = document.querySelector("article")
    if (article) {
      article.classList.remove("reading-light", "reading-sepia", "reading-dark")
      article.classList.add(`reading-${next}`)
    }
  }

  useEffect(() => {
    const article = document.querySelector("article")
    if (article) {
      article.classList.add(`reading-${mode}`)
    }
  }, [])

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-40 rounded-full border border-gray-200 bg-white p-2.5 text-xs shadow-lg transition-colors hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
      title={`Reading mode: ${mode}`}
    >
      {mode === "light" ? "☀️" : mode === "sepia" ? "🟤" : "🌙"}
    </button>
  )
}
