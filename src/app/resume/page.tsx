import fs from "fs"
import path from "path"
import Link from "next/link"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedCard from "@/components/AnimatedCard"
import Timeline from "@/components/Timeline"
import { experiences } from "@/data/experience"
import { skills } from "@/data/skills"

export default function Resume() {
  const categories = [...new Set(skills.map((s) => s.category))]
  const hasPdf = fs.existsSync(path.join(process.cwd(), "public", "resume.pdf"))

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <div className="mb-10 flex items-start justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-bold sm:text-6xl">Resume</h1>
            <p className="text-base text-gray-600 dark:text-slate-400">Experience, education, and skills.</p>
          </div>
          {hasPdf && (
            <a
              href="/resume.pdf"
              download
              className="hidden shrink-0 items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-700 sm:inline-flex dark:bg-indigo-600 dark:hover:bg-indigo-500"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          )}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <h2 className="mb-6 text-3xl font-bold">Experience</h2>
        <Timeline items={experiences.filter((e) => e.type === "work")} />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <h2 className="mb-6 mt-14 text-3xl font-bold">Education</h2>
        <Timeline items={experiences.filter((e) => e.type === "education")} />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <h2 className="mb-6 mt-14 text-3xl font-bold">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <AnimatedCard key={cat} index={i}>
              <div className="rounded-xl border border-gray-200 p-5 dark:border-slate-700">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === cat)
                    .map((s) => (
                      <span
                        key={s.name}
                        className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {s.name}
                      </span>
                    ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.35}>
        <h2 className="mb-6 mt-14 text-3xl font-bold">Achievements</h2>
        <div className="space-y-4">
          <AnimatedCard index={0}>
            <div className="rounded-xl border border-gray-200 p-5 dark:border-slate-700">
              <h3 className="font-semibold">Smart City Pitch Fest - City of Casey</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-slate-400">
                Pitched an innovative idea on managing City of Casey parking spaces using AI.
              </p>
            </div>
          </AnimatedCard>
          <AnimatedCard index={1}>
            <div className="rounded-xl border border-gray-200 p-5 dark:border-slate-700">
              <h3 className="font-semibold">VEX Robotics</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-slate-400">
                2023-2024 Season: 4-time finalist &middot; 2024-2025 Season: Tournament Champion
              </p>
            </div>
          </AnimatedCard>
          <AnimatedCard index={2}>
            <div className="rounded-xl border border-gray-200 p-5 dark:border-slate-700">
              <h3 className="font-semibold">Cricket</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-slate-400">
                SEISA cricket finalist (2021) &middot; DDCA cricket finalist (2022-2023)
              </p>
            </div>
          </AnimatedCard>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg dark:bg-indigo-600 dark:hover:bg-indigo-500"
          >
            Hire Me
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}
