"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type AuthContext = {
  username: string | null
  setUsername: (u: string | null) => void
  loading: boolean
}

const Ctx = createContext<AuthContext>({ username: null, setUsername: () => {}, loading: true })

export function useCommunityAuth() {
  return useContext(Ctx)
}

export function CommunityProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/community/me")
      .then((r) => (r.ok ? r.json() : { username: null }))
      .then((d) => setUsername(d.username))
      .catch(() => setUsername(null))
      .finally(() => setLoading(false))
  }, [])

  return <Ctx.Provider value={{ username, setUsername, loading }}>{children}</Ctx.Provider>
}
