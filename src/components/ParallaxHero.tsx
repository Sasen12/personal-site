"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxHero({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"))
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMouse({ x, y })
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="relative min-h-screen"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:hidden" />

        <div className="absolute inset-0 hidden bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 dark:block" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "ease-out" }}
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat dark:block"
          style={{ backgroundImage: "url(/images/tech/workspace.jpg)" }}
        />

        <div className="absolute inset-0 hidden bg-gradient-to-t from-slate-950 via-slate-900/60 to-indigo-950/80 dark:block" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "ease-out" }}
          className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full blur-3xl"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)"
              : "radial-gradient(circle, rgba(99,102,241,0.05), transparent 70%)",
            transform: `translate(${mouse.x * 8}px, ${mouse.y * 8}px)`,
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "ease-out", delay: 0.15 }}
          className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(168,85,247,0.12), transparent 70%)"
              : "radial-gradient(circle, rgba(168,85,247,0.04), transparent 70%)",
            transform: `translate(${mouse.x * -6}px, ${mouse.y * -6}px)`,
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "ease-out", delay: 0.3 }}
          className="absolute top-1/2 left-1/3 h-[400px] w-[400px] rounded-full blur-3xl"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(59,130,246,0.1), transparent 70%)"
              : "radial-gradient(circle, rgba(59,130,246,0.03), transparent 70%)",
            transform: `translate(${mouse.x * 10}px, ${mouse.y * -10}px)`,
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.06),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.04),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.1),transparent_50%)]" />

        <div className="flex min-h-screen items-center">
          {children}
        </div>
      </motion.div>
    </section>
  )
}
