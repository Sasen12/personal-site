"use client"

import { useState, useEffect } from "react"

export default function FontSizeAdjuster() {
  const [size, setSize] = useState(100)

  useEffect(() => {
    const stored = localStorage.getItem("fontSize")
    if (stored) {
      setSize(Number(stored))
      applySize(Number(stored))
    }
  }, [])

  const applySize = (s: number) => {
    document.querySelector("article")?.style.setProperty("font-size", `${s}%`)
  }

  const adjust = (delta: number) => {
    const next = Math.min(150, Math.max(75, size + delta))
    setSize(next)
    localStorage.setItem("fontSize", String(next))
    applySize(next)
  }

  return (
    <div className="flex items-center gap-1">
      <button onClick={() => adjust(-10)} className="rounded border border-gray-200 px-2 py-0.5 text-xs hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-slate-700" title="Decrease font size">A-</button>
      <span className="w-8 text-center text-xs text-gray-500">{size}%</span>
      <button onClick={() => adjust(10)} className="rounded border border-gray-200 px-2 py-0.5 text-xs hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-slate-700" title="Increase font size">A+</button>
    </div>
  )
}
