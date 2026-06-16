"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function SkillBar({
  name,
  proficiency,
  delay = 0,
}: {
  name: string
  proficiency: number
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div ref={ref} className="mb-3">
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-xs text-gray-500 dark:text-slate-500">{proficiency}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-slate-700">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay }}
        />
      </div>
    </div>
  )
}
