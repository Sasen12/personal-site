"use client"

import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  index?: number
}

export default function CommunityAnimation({ children, className, delay = 0, index }: Props) {
  const d = index !== undefined ? index * 0.06 : delay

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: d }}
    >
      {children}
    </motion.div>
  )
}
