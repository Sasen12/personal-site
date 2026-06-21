import type { Metadata } from "next"
import AnimatedSection from "@/components/AnimatedSection"

export const metadata: Metadata = {
  title: "Colophon — Sasen",
  description: "How this website is built and maintained.",
}

const stacks = [
  { label: "Framework", value: "Next.js 16.2.9 (App Router)" },
  { label: "Language", value: "TypeScript" },
  { label: "Styling", value: "Tailwind CSS v4" },
  { label: "Blog Content", value: "Markdown (gray-matter + remark)" },
  { label: "Blog Admin", value: "Custom CMS with Netlify Blobs" },
  { label: "Fonts", value: "Geist (Sans & Mono) via next/font" },
  { label: "Deployment", value: "Netlify with continuous deployment from GitHub" },
  { label: "Domain", value: "sasen.tech" },
  { label: "Source", value: "github.com/Sasen12/personal-site" },
]

export default function ColophonPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <h1 className="mb-2 text-3xl font-bold gradient-text inline-block sm:text-4xl">Colophon</h1>
        <p className="mb-8 text-gray-400">
          The tech stack and philosophy behind this site.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">Technology</h2>
          <div className="space-y-3">
            {stacks.map((s) => (
              <div key={s.label} className="glass-card rounded-xl p-4 flex items-baseline gap-4">
                <span className="min-w-28 text-sm font-medium text-purple-400">{s.label}</span>
                <span className="text-gray-300">{s.value}</span>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <section className="mb-10">
          <h2 className="mb-3 text-xl font-semibold">Philosophy</h2>
          <div className="space-y-4 text-sm text-gray-400">
            <p>
              This site is designed to be fast, accessible, and lightweight. No bloated frameworks, no cookie banners, no tracking scripts.
            </p>
            <p>
              Every page is statically generated where possible. The blog supports both markdown files and a simple admin CMS for quick posting on the go.
            </p>
            <p>
              The design prioritizes readability with generous typography, dark mode support, and zero distractions.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section>
          <h2 className="mb-3 text-xl font-semibold">Performance</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Lighthouse", value: "100/100" },
              { label: "Build Time", value: "~45s" },
              { label: "Bundle Size", value: "~85KB" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
