"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function LaptopScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Lid: nearly closed → open at natural reading angle
  const lidRotate = useTransform(scrollYProgress, [0.05, 0.65], [-84, -12])

  // Screen fades in once lid is partly open
  const screenOpacity = useTransform(scrollYProgress, [0.35, 0.62], [0, 1])

  // Screen content rises in after screen is lit
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.74], [0, 1])
  const contentY = useTransform(scrollYProgress, [0.5, 0.74], [18, 0])

  // Heading fades in at start, holds, fades out at end
  const headingOpacity = useTransform(scrollYProgress, [0, 0.12, 0.82, 1], [0, 1, 1, 0])
  const headingY = useTransform(scrollYProgress, [0, 0.14], [22, 0])

  // Scroll hint disappears once animation begins
  const hintOpacity = useTransform(scrollYProgress, [0, 0.07, 0.22], [1, 1, 0])

  return (
    <section ref={containerRef} className="relative h-[280vh]">
      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "var(--bg)" }}
      >
        {/* Section heading */}
        <motion.div
          className="mb-10 text-center"
          style={{ opacity: headingOpacity, y: headingY }}
        >
          <div className="section-label mx-auto w-fit mb-4">Crafted in code</div>
          <h2 className="text-3xl font-bold sm:text-5xl">Open to see what&apos;s inside</h2>
        </motion.div>

        {/* 3D scene */}
        <div
          className="w-full max-w-[640px] px-6 sm:px-0"
          style={{ perspective: "1800px", perspectiveOrigin: "50% 40%" }}
        >
          <div style={{ transform: "rotateX(5deg)", transformStyle: "preserve-3d" }}>

            {/* Lid — rotates open */}
            <motion.div
              style={{
                rotateX: lidRotate,
                transformOrigin: "center bottom",
                transformStyle: "preserve-3d",
                borderRadius: "14px 14px 0 0",
                background: "linear-gradient(160deg, #c4c1bc 0%, #b0ada8 40%, #9e9b98 100%)",
                boxShadow: "inset 0 2px 0 rgba(255,255,255,0.3), 0 0 0 1px rgba(0,0,0,0.18)",
                position: "relative",
                overflow: "hidden",
                aspectRatio: "16/10",
              }}
            >
              {/* Screen bezel */}
              <div
                style={{
                  position: "absolute",
                  inset: "5%",
                  borderRadius: 8,
                  background: "#0f0f0f",
                  overflow: "hidden",
                }}
              >
                {/* Screen glow + content */}
                <motion.div
                  style={{
                    opacity: screenOpacity,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, #0d0d12 0%, #18102e 50%, #0d0d12 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Purple ambient glow */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "radial-gradient(ellipse at 50% 65%, rgba(139,92,246,0.32) 0%, transparent 65%)",
                    }}
                  />

                  {/* Screen content */}
                  <motion.div
                    style={{ opacity: contentOpacity, y: contentY, position: "relative", zIndex: 1 }}
                    className="text-center px-6"
                  >
                    <p
                      style={{
                        fontSize: "clamp(9px, 1.2vw, 11px)",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#b6f09c",
                        marginBottom: 10,
                        fontWeight: 600,
                      }}
                    >
                      sasen.dev
                    </p>
                    <p
                      style={{
                        fontSize: "clamp(22px, 3.8vw, 40px)",
                        fontWeight: 700,
                        color: "#f7f6f5",
                        lineHeight: 1.1,
                        marginBottom: 8,
                      }}
                    >
                      Hi, I&apos;m Sasen
                    </p>
                    <p
                      style={{
                        fontSize: "clamp(11px, 1.5vw, 14px)",
                        color: "rgba(255,255,255,0.46)",
                        marginBottom: 20,
                      }}
                    >
                      Full-stack developer &amp; creative builder
                    </p>
                    <div style={{ display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap" }}>
                      {["React", "Next.js", "TypeScript", "Unity"].map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: "3px 10px",
                            borderRadius: 999,
                            fontSize: "clamp(9px, 1.1vw, 11px)",
                            fontWeight: 600,
                            background: "rgba(139,92,246,0.22)",
                            border: "1px solid rgba(139,92,246,0.38)",
                            color: "#c4b5fd",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Notch */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "12%",
                  height: "5.5%",
                  background: "#0f0f0f",
                  borderRadius: "0 0 8px 8px",
                }}
              />
            </motion.div>

            {/* Base — thin edge, like a real MacBook from the front */}
            <div
              style={{
                height: 16,
                background: "linear-gradient(180deg, #b2afa9 0%, #9c9994 60%, #888582 100%)",
                borderRadius: "0 0 14px 14px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.14)",
                position: "relative",
              }}
            >
              {/* Trackpad hint */}
              <div
                style={{
                  position: "absolute",
                  bottom: 3,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "22%",
                  height: 3,
                  background: "rgba(0,0,0,0.14)",
                  borderRadius: 2,
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.p
          className="mt-10 text-sm"
          style={{ color: "var(--text-muted)", opacity: hintOpacity }}
        >
          Scroll to open ↓
        </motion.p>
      </div>
    </section>
  )
}
