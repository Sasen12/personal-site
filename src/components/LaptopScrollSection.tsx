"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function LaptopScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Lid: nearly closed → natural open angle
  const lidRotate = useTransform(scrollYProgress, [0.04, 0.58], [-83, -13])

  // Purple ambient glow bleeds into the section background as screen turns on
  const bgGlowOpacity = useTransform(scrollYProgress, [0.28, 0.60], [0, 1])

  // Ellipse shadow beneath laptop grows as lid opens
  const shadowOpacity = useTransform(scrollYProgress, [0.04, 0.55], [0.06, 0.32])
  const shadowScale = useTransform(scrollYProgress, [0.04, 0.55], [0.35, 1])

  // Screen lights up
  const screenOpacity = useTransform(scrollYProgress, [0.26, 0.54], [0, 1])

  // Screen content rises in after screen is lit
  const contentOpacity = useTransform(scrollYProgress, [0.46, 0.68], [0, 1])
  const contentY = useTransform(scrollYProgress, [0.46, 0.68], [18, 0])

  // Heading pinned to top of sticky frame
  const headingOpacity = useTransform(scrollYProgress, [0, 0.10, 0.78, 0.96], [0, 1, 1, 0])
  const headingY = useTransform(scrollYProgress, [0, 0.12], [22, 0])

  // Scroll hint
  const hintOpacity = useTransform(scrollYProgress, [0, 0.06, 0.18], [1, 1, 0])

  return (
    <section ref={containerRef} className="relative h-[320vh]">
      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "var(--bg)" }}
      >
        {/* Background glow from screen turning on */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ opacity: bgGlowOpacity }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 72% 52% at 50% 62%, rgba(139,92,246,0.13) 0%, rgba(70,66,255,0.06) 42%, transparent 70%)",
            }}
          />
        </motion.div>

        {/* Heading — top of sticky frame */}
        <motion.div
          className="pointer-events-none absolute left-0 right-0 top-[9vh] text-center"
          style={{ opacity: headingOpacity, y: headingY }}
        >
          <div className="section-label mx-auto mb-4 w-fit">Crafted in code</div>
          <h2 className="text-3xl font-bold sm:text-5xl">Open to see what&apos;s inside</h2>
        </motion.div>

        {/* 3D laptop scene */}
        <div
          className="relative w-full"
          style={{ perspective: "2800px", perspectiveOrigin: "50% 36%" }}
        >
          <div
            className="mx-auto"
            style={{
              width: "min(90vw, 1080px)",
              transform: "rotateX(3deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* ─── Lid ─── */}
            <motion.div
              style={{
                rotateX: lidRotate,
                transformOrigin: "center bottom",
                transformStyle: "preserve-3d",
                borderRadius: "18px 18px 0 0",
                background:
                  "linear-gradient(168deg, #d4d1cc 0%, #c0bdb8 28%, #aeaba6 54%, #9e9b97 78%, #919190 100%)",
                boxShadow:
                  "inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.14)",
                position: "relative",
                overflow: "hidden",
                aspectRatio: "16/10",
              }}
            >
              {/* Lid reflection highlight */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(148deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.06) 42%, rgba(0,0,0,0.07) 100%)",
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              />

              {/* Screen bezel */}
              <div
                style={{
                  position: "absolute",
                  inset: "4.5%",
                  borderRadius: 10,
                  background: "#080808",
                  overflow: "hidden",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              >
                {/* Screen */}
                <motion.div
                  style={{
                    opacity: screenOpacity,
                    width: "100%",
                    height: "100%",
                    background: "#0e0e16",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Screen ambient glow */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(ellipse 80% 70% at 50% 72%, rgba(139,92,246,0.32) 0%, rgba(70,66,255,0.1) 44%, transparent 70%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* macOS-style menu bar */}
                  <div
                    style={{
                      height: "8%",
                      minHeight: 22,
                      background: "rgba(255,255,255,0.035)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      paddingInline: "2%",
                      gap: 5,
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff5f57", display: "block", flexShrink: 0 }}
                    />
                    <span
                      style={{ width: 9, height: 9, borderRadius: "50%", background: "#febc2e", display: "block", flexShrink: 0 }}
                    />
                    <span
                      style={{ width: 9, height: 9, borderRadius: "50%", background: "#28c840", display: "block", flexShrink: 0 }}
                    />
                    <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                      <div
                        style={{
                          background: "rgba(255,255,255,0.07)",
                          borderRadius: 5,
                          padding: "2px 18px",
                          fontSize: "clamp(7px, 0.9vw, 11px)",
                          color: "rgba(255,255,255,0.38)",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        <span style={{ color: "#b6f09c", fontSize: "0.75em" }}>●</span>
                        sasen.dev
                      </div>
                    </div>
                  </div>

                  {/* Screen content */}
                  <motion.div
                    style={{ opacity: contentOpacity, y: contentY, flex: 1, position: "relative", zIndex: 1 }}
                    className="flex items-center justify-center"
                  >
                    <div className="text-center" style={{ padding: "0 6%" }}>
                      <p
                        style={{
                          fontSize: "clamp(9px, 1.1vw, 13px)",
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.28)",
                          marginBottom: "clamp(8px, 1vw, 14px)",
                          fontWeight: 500,
                        }}
                      >
                        Full-stack developer
                      </p>
                      <p
                        style={{
                          fontSize: "clamp(28px, 5.2vw, 68px)",
                          fontWeight: 800,
                          color: "#f7f6f5",
                          lineHeight: 1.0,
                          marginBottom: "clamp(6px, 0.9vw, 12px)",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        Hi, I&apos;m{" "}
                        <span
                          style={{
                            background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 50%, #8b5cf6 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          Sasen
                        </span>
                      </p>
                      <p
                        style={{
                          fontSize: "clamp(11px, 1.5vw, 17px)",
                          color: "rgba(255,255,255,0.34)",
                          marginBottom: "clamp(16px, 2.4vw, 32px)",
                        }}
                      >
                        Building things for the web &amp; beyond
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "clamp(4px, 0.7vw, 8px)",
                          justifyContent: "center",
                          flexWrap: "wrap",
                        }}
                      >
                        {["React", "Next.js", "TypeScript", "Unity", "Framer"].map((tag) => (
                          <span
                            key={tag}
                            style={{
                              padding: "clamp(2px, 0.35vw, 5px) clamp(8px, 1.2vw, 14px)",
                              borderRadius: 999,
                              fontSize: "clamp(8px, 0.95vw, 12px)",
                              fontWeight: 600,
                              background: "rgba(139,92,246,0.18)",
                              border: "1px solid rgba(139,92,246,0.32)",
                              color: "#c4b5fd",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
                  width: "10%",
                  height: "5.5%",
                  background: "#080808",
                  borderRadius: "0 0 8px 8px",
                  zIndex: 3,
                }}
              />
            </motion.div>

            {/* ─── Base ─── */}
            <div
              style={{
                height: "clamp(14px, 2vw, 24px)",
                background:
                  "linear-gradient(180deg, #cac7c2 0%, #b2afa9 38%, #9e9c99 72%, #8c8a88 100%)",
                borderRadius: "0 0 16px 16px",
                boxShadow:
                  "0 18px 64px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.22)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "22%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "18%",
                  height: "28%",
                  background: "rgba(0,0,0,0.1)",
                  borderRadius: 2,
                }}
              />
            </div>

            {/* ─── Ellipse shadow ─── */}
            <motion.div
              style={{
                margin: "3px auto 0",
                width: "78%",
                height: "clamp(8px, 1.4vw, 20px)",
                background:
                  "radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 70%)",
                opacity: shadowOpacity,
                scale: shadowScale,
                transformOrigin: "center center",
              }}
            />
          </div>
        </div>

        {/* Scroll hint */}
        <motion.p
          className="pointer-events-none absolute bottom-[7vh] text-sm"
          style={{ color: "var(--text-muted)", opacity: hintOpacity }}
        >
          Scroll to open ↓
        </motion.p>
      </div>
    </section>
  )
}
