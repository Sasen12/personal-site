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

  const xOffset = index % 2 === 0 ? -80 : 80
  const rotateAmount = index % 2 === 0 ? -3 : 3

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xOffset, y: 80, scale: 0.4, rotate: rotateAmount }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }
          : { opacity: 0, x: xOffset, y: 80, scale: 0.4, rotate: rotateAmount }
      }
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 13,
        mass: 0.8,
        delay: index * 0.08,
      }}
      whileHover={{ scale: 1.04, rotate: index % 3 === 0 ? 1.5 : -1.5, transition: { type: "spring", stiffness: 300 } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
