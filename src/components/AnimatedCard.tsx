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
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
    >
      {children}
    </motion.div>
  )
}
