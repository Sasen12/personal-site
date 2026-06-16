"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(false)

    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })

    if (res.ok) {
      router.push("/admin/dashboard")
    } else {
      setError(true)
    }
  }

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-sm items-center px-6">
      <div className="w-full">
        <h1 className="mb-6 text-2xl font-bold">Admin Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 dark:text-red-400">Invalid email or password.</p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
