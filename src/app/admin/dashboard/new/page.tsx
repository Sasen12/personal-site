"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function NewPost() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [saving, setSaving] = useState(false)
  const [preview, setPreview] = useState(false)
  const router = useRouter()

  async function handleSave() {
    if (!title.trim() || !content.trim()) return
    setSaving(true)

    const res = await fetch("/api/admin/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    })

    setSaving(false)

    if (res.ok) {
      router.push("/admin/dashboard")
    } else {
      alert("Failed to save. Check your session.")
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/admin/dashboard" className="text-sm text-gray-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
          &larr; Back to dashboard
        </Link>
        <div className="flex gap-3">
          <button
            onClick={() => setPreview(!preview)}
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm dark:border-slate-600"
          >
            {preview ? "Edit" : "Preview"}
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 dark:bg-indigo-600 dark:hover:bg-indigo-500"
          >
            {saving ? "Saving..." : "Publish"}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          className="w-full border-0 border-b border-gray-300 pb-2 text-2xl font-bold outline-none focus:border-indigo-500 dark:border-slate-600 dark:bg-transparent"
        />

        {preview ? (
          <div className="min-h-[400px] rounded-xl border border-gray-200 p-6 dark:border-slate-700">
            <div className="prose prose-gray max-w-none dark:prose-invert dark:text-slate-300">
              {content.split("\n").map((line, i) => {
                if (line.startsWith("# ")) return <h1 key={i} className="text-2xl font-bold mt-4 mb-2">{line.slice(2)}</h1>
                if (line.startsWith("## ")) return <h2 key={i} className="text-xl font-semibold mt-4 mb-2">{line.slice(3)}</h2>
                if (line.startsWith("### ")) return <h3 key={i} className="text-lg font-semibold mt-3 mb-1">{line.slice(4)}</h3>
                if (line.trim() === "") return <br key={i} />
                return <p key={i} className="mb-2 leading-relaxed">{line}</p>
              })}
            </div>
          </div>
        ) : (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your post in markdown..."
            rows={18}
            className="w-full rounded-xl border border-gray-300 p-4 text-sm outline-none focus:border-indigo-500 dark:border-slate-600 dark:bg-slate-800"
          />
        )}
      </div>
    </div>
  )
}
