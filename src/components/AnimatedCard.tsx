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
      initial={{ opacity: 0, y: 60, scale: 0.85 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.85 }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 22,
        delay: index * 0.1,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
