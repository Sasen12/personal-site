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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: delay + index * 0.06,
      }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
