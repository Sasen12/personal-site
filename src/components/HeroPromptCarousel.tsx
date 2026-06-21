"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

const prompts = [
  {
    label: "Portfolio",
    text: "Build a polished developer portfolio with cinematic project reveals",
  },
  {
    label: "Games",
    text: "Create a game-dev showcase with layered cards and live build notes",
  },
  {
    label: "Writing",
    text: "Design a technical blog that feels fast, readable, and alive",
  },
]

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function HeroPromptCarousel() {
  const [active, setActive] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % prompts.length)
    }, 2800)

    return () => window.clearInterval(interval)
  }, [shouldReduceMotion])

  return (
    <motion.div
      className="wegic-prompt-shell mx-auto mt-8 box-border max-w-3xl overflow-hidden rounded-[28px] p-4 text-left text-black sm:p-5"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.54, duration: 0.8, ease }}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff6257]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="h-2 w-24 rounded-full bg-black/10" />
      </div>

      <div className="relative min-h-[72px] overflow-hidden sm:min-h-[58px]">
        <AnimatePresence initial={false}>
          <motion.p
            key={active}
            className="absolute inset-x-0 top-0 pr-10 text-base font-semibold leading-7 text-black sm:text-lg"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -18 }}
            transition={{ duration: 0.46, ease }}
          >
            {prompts[active].text}
          </motion.p>
        </AnimatePresence>
        <span className="absolute bottom-1 right-2 h-6 w-px animate-pulse bg-black/50" />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {prompts.map((prompt, index) => (
          <button
            key={prompt.label}
            type="button"
            onClick={() => setActive(index)}
            className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-300 ${
              active === index
                ? "bg-black text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)]"
                : "bg-black/5 text-black/55 hover:bg-black/10 hover:text-black"
            }`}
          >
            {prompt.label}
          </button>
        ))}
      </div>
    </motion.div>
  )
}
