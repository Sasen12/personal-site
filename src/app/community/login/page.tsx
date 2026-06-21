"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useCommunityAuth } from "@/components/CommunityProvider"
import CommunityAnimation from "@/components/CommunityAnimation"

export default function CommunityLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { setUsername } = useCommunityAuth()
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      const r = await fetch("/api/community/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      const d = await r.json()
      if (!r.ok) {
        setError(d.error)
      } else {
        setUsername(d.username)
        router.push("/community")
      }
    } catch {
      setError("Connection error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto max-w-md px-6 py-16 sm:py-24">
      <CommunityAnimation>
        <h1 className="gradient-text mb-2 text-3xl font-bold sm:text-4xl">
          Welcome Back
        </h1>
        <p className="mb-8 text-gray-400">Log in to join the tech discussion.</p>
      </CommunityAnimation>

      <CommunityAnimation>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="glass w-full rounded-lg px-4 py-2.5 text-sm outline-none transition focus:border-purple-500/50"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="glass w-full rounded-lg px-4 py-2.5 text-sm outline-none transition focus:border-purple-500/50"
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/community/register" className="font-medium text-purple-400 hover:text-purple-300">
            Register
          </Link>
        </p>
      </CommunityAnimation>
    </main>
  )
}
