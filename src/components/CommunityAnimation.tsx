"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  index?: number
}

export default function CommunityAnimation({ children, className, delay = 0, index = 0 }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  const dir = index % 2 === 0 ? -1 : 1

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 180 * dir, y: 100, scale: 0.2, rotate: -12 * dir, filter: "blur(12px)" }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }
          : { opacity: 0, x: 180 * dir, y: 100, scale: 0.2, rotate: -12 * dir, filter: "blur(12px)" }
      }
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 10,
        mass: 1,
        delay: delay + index * 0.1,
      }}
      whileHover={{
        scale: 1.05,
        rotate: index % 3 === 0 ? 2 : -2,
        transition: { type: "spring", stiffness: 250 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
