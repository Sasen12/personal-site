"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxHero({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 760], [0, 120])
  const opacity = useTransform(scrollY, [0, 760], [1, 0.32])

  return (
    <section className="relative isolate overflow-hidden bg-[#050505]">
      <div className="relative min-h-screen">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          style={{ y, opacity }}
        >
          <div className="wegic-hero-base absolute inset-0" />
          <div className="wegic-hero-grid absolute inset-0" />
          <div className="wegic-ambient-sweep absolute inset-y-[-20%] left-1/2 w-[56rem] -translate-x-1/2 rotate-[-18deg]" />

          <div className="wegic-preview-panel wegic-preview-one">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="h-2 w-16 rounded-full bg-white/80" />
                <div className="mt-2 h-2 w-28 rounded-full bg-white/35" />
              </div>
              <div className="h-9 w-9 rounded-full bg-[#b6f09c]" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="h-16 rounded-2xl bg-[#f7f6f3]" />
              <span className="h-16 rounded-2xl bg-[#c8d7ff]" />
              <span className="h-16 rounded-2xl bg-[#ffcf8a]" />
            </div>
            <div className="mt-4 h-2 w-full rounded-full bg-white/20">
              <div className="h-full w-2/3 rounded-full bg-white" />
            </div>
          </div>

          <div className="wegic-preview-panel wegic-preview-two">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff6257]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="space-y-3">
              <div className="h-3 w-3/4 rounded-full bg-white/80" />
              <div className="h-3 w-full rounded-full bg-white/25" />
              <div className="h-3 w-5/6 rounded-full bg-white/25" />
            </div>
            <div className="mt-5 flex gap-2">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black">Live</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/70">Draft</span>
            </div>
          </div>

          <div className="wegic-preview-panel wegic-preview-three">
            <div className="mb-4 h-24 rounded-[22px] bg-[#f7f6f3] p-3">
              <div className="h-full rounded-2xl bg-[linear-gradient(135deg,#161616,#4642ff_48%,#f5f5f5)]" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-4/5 rounded-full bg-white/65" />
              <div className="h-2 w-2/3 rounded-full bg-white/25" />
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 flex min-h-screen items-center pb-24 pt-32">
          {children}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-b from-transparent to-[#050505]" />
      </div>
    </section>
  )
}
