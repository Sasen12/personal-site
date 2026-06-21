"use client"

import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  animateOnLoad?: boolean
}

export default function AnimatedSection({ children, className, delay = 0, animateOnLoad = false }: Props) {
  const visible = { opacity: 1, y: 0, scale: 1 }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 46, scale: 0.985 }}
      {...(animateOnLoad
        ? { animate: visible }
        : { whileInView: visible, viewport: { once: true, margin: "-90px" } })}
      transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
