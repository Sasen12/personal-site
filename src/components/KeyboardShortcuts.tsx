"use client"

import { useState, useEffect } from "react"

export default function KeyboardShortcuts() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "?" && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        setShow((s) => !s)
      }
      if (e.key === "Escape") setShow(false)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  const shortcuts = [
    { keys: "⌘K", desc: "Search posts" },
    { keys: "?", desc: "Toggle shortcuts" },
    { keys: "Esc", desc: "Close modals" },
    { keys: "⌘D", desc: "Toggle dark mode" },
  ]

  return (
    <>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShow(false)}>
          <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-800" onClick={(e) => e.stopPropagation()}>
            <h2 className="mb-4 text-lg font-semibold">Keyboard Shortcuts</h2>
            <div className="space-y-2">
              {shortcuts.map((s) => (
                <div key={s.keys} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-slate-400">{s.desc}</span>
                  <kbd className="rounded border border-gray-200 px-2 py-0.5 font-mono text-xs dark:border-slate-600">{s.keys}</kbd>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
