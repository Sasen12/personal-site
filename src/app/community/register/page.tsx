"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useCommunityAuth } from "@/components/CommunityProvider"
import CommunityAnimation from "@/components/CommunityAnimation"

export default function CommunityRegister() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { setUsername: setAuth } = useCommunityAuth()
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      const r = await fetch("/api/community/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      })
      const d = await r.json()
      if (!r.ok) {
        setError(d.error)
      } else {
        setAuth(d.username)
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
          Join the Community
        </h1>
        <p className="mb-8 text-gray-400">Create an account to start tech discussions.</p>
      </CommunityAnimation>

      <CommunityAnimation>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength={3}
              className="glass w-full rounded-lg px-4 py-2.5 text-sm outline-none transition focus:border-purple-500/50"
            />
          </div>
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
              minLength={6}
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
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/community/login" className="font-medium text-purple-400 hover:text-purple-300">
            Log in
          </Link>
        </p>
      </CommunityAnimation>
    </main>
  )
}
