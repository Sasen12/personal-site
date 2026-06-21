"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AnimatedSection({ children, className, delay = 0 }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 120, scale: 0.5, rotate: -4, filter: "blur(8px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 120, scale: 0.5, rotate: -4, filter: "blur(8px)" }
      }
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        mass: 0.9,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
