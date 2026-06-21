"use client"

import { motion } from "framer-motion"

type HeadlineLine = {
  text: string
  accent?: boolean
}

type Props = {
  lines: HeadlineLine[]
  className?: string
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function KineticHeadline({ lines, className }: Props) {
  const label = lines.map((line) => line.text).join(" ")
  const allCharacters = lines.map((line, li) => ({
    text: line.text,
    accent: line.accent,
    chars: Array.from(line.text),
    globalStart: lines
      .slice(0, li)
      .reduce((sum, l) => sum + Array.from(l.text).length, 0),
  }))

  return (
    <h1 className={className} aria-label={label}>
      {allCharacters.map((line) => (
        <span key={line.text} aria-hidden="true" className="block overflow-visible">
          {line.chars.map((character, ci) => (
            <motion.span
              key={`${character}-${ci}`}
              className={`inline-block origin-bottom ${line.accent ? "gradient-text animate-gradient" : ""}`}
              initial={{ opacity: 0, y: 42, rotateX: -28 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.14 + (line.globalStart + ci) * 0.018,
                duration: 0.82,
                ease,
              }}
            >
              {character === " " ? "\u00A0" : character}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  )
}
