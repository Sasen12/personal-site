"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const cards = [
  {
    title: "Design",
    label: "01",
    copy: "Shape the visual system, interface rhythm, and project story.",
    color: "from-[#f7f6f3] via-[#c8d7ff] to-[#b6f09c]",
  },
  {
    title: "Build",
    label: "02",
    copy: "Turn the idea into production-ready web, mobile, or game work.",
    color: "from-[#191919] via-[#4642ff] to-[#9fc7ff]",
  },
  {
    title: "Publish",
    label: "03",
    copy: "Write the notes, ship the release, and keep improving it.",
    color: "from-[#ffd7a8] via-[#f7f6f3] to-[#b6f09c]",
  },
]

export default function WegicMotionShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const x = useTransform(scrollYProgress, [0, 1], ["7%", "-12%"])

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-white/5 py-20 sm:py-28">
      <div className="mx-auto mb-10 max-w-5xl px-6">
        <div className="section-label w-fit">Workflow</div>
      </div>

      <motion.div className="wegic-showcase-track" style={{ x }}>
        {[...cards, ...cards].map((card, index) => (
          <motion.article
            key={`${card.title}-${index}`}
            className="wegic-work-card group"
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.76, ease: [0.16, 1, 0.3, 1], delay: (index % cards.length) * 0.08 }}
          >
            <div className="flex items-center justify-between text-sm font-semibold text-white/60">
              <span>{card.label}</span>
              <span className="h-2 w-2 rounded-full bg-[#b6f09c]" />
            </div>

            <div className="mt-8 overflow-hidden rounded-[26px] bg-[#f7f6f3] p-3">
              <div className={`h-44 rounded-[20px] bg-gradient-to-br ${card.color} transition-transform duration-700 ease-out group-hover:scale-110`}>
                <div className="flex h-full flex-col justify-between p-5">
                  <div className="h-3 w-24 rounded-full bg-black/20" />
                  <div className="space-y-2">
                    <div className="h-3 w-full rounded-full bg-black/20" />
                    <div className="h-3 w-2/3 rounded-full bg-black/15" />
                  </div>
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-400">{card.copy}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
