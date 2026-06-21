"use client"

import { useEffect, useState } from "react"

export default function ParallaxHero({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"))
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-b from-slate-950 via-slate-900 to-purple-950 dark:block" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.06),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.04),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="flex min-h-screen items-center">
          {children}
        </div>
      </div>
    </section>
  )
}
