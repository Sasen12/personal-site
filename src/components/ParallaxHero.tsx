"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxHero({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

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
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat opacity-35 dark:block"
          style={{ backgroundImage: "url(/images/tech/workspace.jpg)" }}
        />

        <div className="absolute inset-0 hidden bg-gradient-to-t from-slate-950 via-slate-900/60 to-indigo-950/80 dark:block" />

        <motion.div
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute right-0 top-0 h-[600px] w-[600px] animate-float-1 rounded-full blur-3xl"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)"
              : "radial-gradient(circle, rgba(99,102,241,0.05), transparent 70%)",
            transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`,
          }}
        />
        <motion.div
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute bottom-0 left-0 h-[500px] w-[500px] animate-float-2 rounded-full blur-3xl"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(168,85,247,0.12), transparent 70%)"
              : "radial-gradient(circle, rgba(168,85,247,0.04), transparent 70%)",
            transform: `translate(${mouse.x * -15}px, ${mouse.y * -15}px)`,
          }}
        />
        <motion.div
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute top-1/2 left-1/3 h-[400px] w-[400px] animate-float-3 rounded-full blur-3xl"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(59,130,246,0.1), transparent 70%)"
              : "radial-gradient(circle, rgba(59,130,246,0.03), transparent 70%)",
            transform: `translate(${mouse.x * 25}px, ${mouse.y * -25}px)`,
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
