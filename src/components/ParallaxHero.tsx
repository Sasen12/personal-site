"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxHero({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll()

  // Background layers — slowest
  const bgY = useTransform(scrollY, [0, 800], [0, 60])
  const sweepY = useTransform(scrollY, [0, 800], [0, 40])
  const sweepScale = useTransform(scrollY, [0, 800], [1, 1.08])

  // Panel one — drifts up + slightly left
  const p1Y = useTransform(scrollY, [0, 800], [0, -80])
  const p1X = useTransform(scrollY, [0, 800], [0, -24])
  const p1Rotate = useTransform(scrollY, [0, 800], [-6, -14])

  // Panel two — drifts up faster + slightly right
  const p2Y = useTransform(scrollY, [0, 800], [0, -120])
  const p2X = useTransform(scrollY, [0, 800], [0, 18])
  const p2Rotate = useTransform(scrollY, [0, 800], [4, 10])

  // Panel three — moves up slowest with a gentle tilt
  const p3Y = useTransform(scrollY, [0, 800], [0, -50])
  const p3X = useTransform(scrollY, [0, 800], [0, -10])
  const p3Rotate = useTransform(scrollY, [0, 800], [8, 3])

  // Overall fade
  const opacity = useTransform(scrollY, [0, 600], [1, 0])

  return (
    <section className="relative isolate overflow-hidden" style={{ background: "var(--bg)" }}>
      <div className="relative min-h-screen">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          style={{ opacity }}
        >
          {/* Background — slowest layer */}
          <motion.div className="absolute inset-0" style={{ y: bgY }}>
            <div className="wegic-hero-base absolute inset-0" />
            <div className="wegic-hero-grid absolute inset-0" />
          </motion.div>

          {/* Ambient sweep — mid layer */}
          <motion.div
            className="wegic-ambient-sweep absolute inset-y-[-20%] left-1/2 w-[56rem] -translate-x-1/2 rotate-[-18deg]"
            style={{ y: sweepY, scale: sweepScale }}
          />

          {/* Panel one — fastest, drifts upper-left */}
          <motion.div
            className="wegic-preview-panel wegic-preview-one"
            style={{ y: p1Y, x: p1X, rotate: p1Rotate }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="h-2 w-16 rounded-full" style={{ background: "var(--text)" }} />
                <div className="mt-2 h-2 w-28 rounded-full" style={{ background: "var(--text-muted)", opacity: 0.5 }} />
              </div>
              <div className="h-9 w-9 rounded-full bg-[#b6f09c]" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="h-16 rounded-2xl bg-[#f7f6f3]" />
              <span className="h-16 rounded-2xl bg-[#c8d7ff]" />
              <span className="h-16 rounded-2xl bg-[#ffcf8a]" />
            </div>
            <div className="mt-4 h-2 w-full rounded-full" style={{ background: "var(--card-border)" }}>
              <div className="h-full w-2/3 rounded-full" style={{ background: "var(--text)" }} />
            </div>
          </motion.div>

          {/* Panel two — fastest, drifts upper-right */}
          <motion.div
            className="wegic-preview-panel wegic-preview-two"
            style={{ y: p2Y, x: p2X, rotate: p2Rotate }}
          >
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff6257]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="space-y-3">
              <div className="h-3 w-3/4 rounded-full" style={{ background: "var(--text)" }} />
              <div className="h-3 w-full rounded-full" style={{ background: "var(--text-muted)", opacity: 0.35 }} />
              <div className="h-3 w-5/6 rounded-full" style={{ background: "var(--text-muted)", opacity: 0.35 }} />
            </div>
            <div className="mt-5 flex gap-2">
              <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ background: "var(--bg)", color: "var(--text)" }}>Live</span>
              <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ background: "var(--card-bg)", color: "var(--text-muted)" }}>Draft</span>
            </div>
          </motion.div>

          {/* Panel three — slowest, gentle tilt */}
          <motion.div
            className="wegic-preview-panel wegic-preview-three"
            style={{ y: p3Y, x: p3X, rotate: p3Rotate }}
          >
            <div className="mb-4 h-24 rounded-[22px] bg-[#f7f6f3] p-3">
              <div className="h-full rounded-2xl bg-[linear-gradient(135deg,#161616,#4642ff_48%,#f5f5f5)]" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-4/5 rounded-full" style={{ background: "var(--text-muted)", opacity: 0.7 }} />
              <div className="h-2 w-2/3 rounded-full" style={{ background: "var(--text-muted)", opacity: 0.35 }} />
            </div>
          </motion.div>
        </motion.div>

        <div className="relative z-10 flex min-h-screen items-center pb-24 pt-32">
          {children}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40" style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }} />
      </div>
    </section>
  )
}
