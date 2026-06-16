"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

type Props = {
  children: React.ReactNode
  className?: string
  index?: number
}

export default function AnimatedCard({ children, className, index = 0 }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.93 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.93 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: index * 0.08,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
