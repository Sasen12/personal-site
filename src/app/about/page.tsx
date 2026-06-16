import Link from "next/link"
import type { Metadata } from "next"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedCard from "@/components/AnimatedCard"
import SkillBar from "@/components/SkillBar"
import Timeline from "@/components/Timeline"
import { experiences } from "@/data/experience"
import { skills } from "@/data/skills"

export const metadata: Metadata = {
  title: "About — Sasen",
  description: "Full-stack developer, Unity tinkerer, and video editor based in Melbourne.",
  openGraph: {
    title: "About Sasen",
    description: "Full-stack developer, Unity tinkerer, and video editor based in Melbourne.",
  },
}

const categories = [...new Set(skills.map((s) => s.category))]

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <nav className="mb-6 flex items-center gap-2 text-xs text-gray-500 dark:text-slate-500">
          <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
          <span>/</span>
          <span className="text-gray-800 dark:text-slate-300">About</span>
        </nav>
        <h1 className="mb-6 text-4xl font-bold sm:text-6xl">About Me</h1>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="space-y-4 text-gray-600 dark:text-slate-400">
          <p className="leading-relaxed">
            Full-stack developer, Unity tinkerer, and video editor based in Melbourne.
            I build web apps, mobile apps, games, and occasionally make music or motion graphics.
          </p>
          <p className="leading-relaxed">
            I&apos;ve built everything from AI assistants and encrypted device bridges to guitar
            practice apps and VCE study tools. I also produce and edit video content in Premiere
            Pro and After Effects.
          </p>
          <p className="leading-relaxed">
            Right now I&apos;m deep into Unity game development, AI/voice agents, and building
            tools that connect devices and workflows.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <div className="order-2 sm:order-1">
            <h2 className="mb-3 text-2xl font-bold">Where It Started</h2>
            <p className="leading-relaxed text-gray-600 dark:text-slate-400">
              When I was 8 years old, I did my first hackathon at Casey Tech School with my dad.
              I built something simple, but the real moment came when I had to present it in front
              of a panel of judges. Standing up there at 8 years old, explaining what I&apos;d made
              — that&apos;s when I knew I loved building things.
            </p>
            <p className="mt-3 leading-relaxed text-gray-600 dark:text-slate-400">
              That feeling never really left. It&apos;s the same energy I get today when a new app
              compiles, a game scene clicks into place, or an AI agent actually works.
            </p>
          </div>
          <div className="order-1 sm:order-2">
            <img
              src="/images/hackathon.jpg"
              alt="Young me at Casey Tech School hackathon"
              className="w-full rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <h2 className="mb-6 mt-16 text-3xl font-bold">Experience</h2>
        <Timeline items={experiences.filter((e) => e.type === "work")} />
      </AnimatedSection>

      <AnimatedSection delay={0.45}>
        <h2 className="mb-6 mt-14 text-3xl font-bold">Education</h2>
        <Timeline items={experiences.filter((e) => e.type === "education")} />
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <h2 className="mb-6 mt-14 text-3xl font-bold">Skills</h2>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <AnimatedCard key={cat} index={i}>
            <div className="rounded-xl border border-gray-200 p-5 transition-colors hover:border-indigo-200 dark:border-slate-700 dark:hover:border-indigo-800">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {cat}
              </h3>
              {skills
                .filter((s) => s.category === cat)
                .map((s, j) => (
                  <SkillBar key={s.name} name={s.name} proficiency={s.proficiency} delay={j * 0.1} />
                ))}
            </div>
          </AnimatedCard>
        ))}
      </div>

      <AnimatedSection delay={0.5}>
        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg dark:bg-indigo-600 dark:hover:bg-indigo-500"
          >
            Get in Touch
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}
