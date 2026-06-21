"use client"

import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
  className?: string
  index?: number
}

export default function AnimatedCard({ children, className, index = 0 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.08 }}
    >
      {children}
    </motion.div>
  )
}
