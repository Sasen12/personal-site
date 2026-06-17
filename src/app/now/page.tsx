import type { Metadata } from "next"
import AnimatedSection from "@/components/AnimatedSection"

export const metadata: Metadata = {
  title: "Now — Sasen",
  description: "What I'm focused on right now.",
}

export default function NowPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">/now</h1>
        <p className="mb-8 text-sm text-gray-500 dark:text-slate-500">
          Updated June 2026 &middot; Inspired by{" "}
          <a href="https://nownownow.com" className="text-indigo-600 hover:underline dark:text-indigo-400">nownownow.com</a>
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="mb-10">
          <h2 className="mb-3 text-xl font-semibold">Building</h2>
          <ul className="space-y-3 text-gray-600 dark:text-slate-400">
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500" />
              <span><strong className="text-gray-900 dark:text-slate-200">Personal site v3</strong> &mdash; Iterating on this portfolio with new features, blog posts, and a cleaner design.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500" />
              <span><strong className="text-gray-900 dark:text-slate-200">Fret Flow</strong> &mdash; A guitar practice app that uses AI to generate custom exercises based on your skill level.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500" />
              <span><strong className="text-gray-900 dark:text-slate-200">OneBridge</strong> &mdash; Building an encrypted local network bridge between Android and macOS.</span>
            </li>
          </ul>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <section className="mb-10">
          <h2 className="mb-3 text-xl font-semibold">Learning</h2>
          <ul className="space-y-3 text-gray-600 dark:text-slate-400">
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
              <span><strong className="text-gray-900 dark:text-slate-200">Rust</strong> &mdash; Diving into systems programming for performance-critical tooling.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
              <span><strong className="text-gray-900 dark:text-slate-200">Computer Graphics</strong> &mdash; Working through shader programming and real-time rendering concepts.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
              <span><strong className="text-gray-900 dark:text-slate-200">Machine Learning</strong> &mdash; Exploring practical ML with Python and PyTorch.</span>
            </li>
          </ul>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section className="mb-10">
          <h2 className="mb-3 text-xl font-semibold">Reading</h2>
          <ul className="space-y-3 text-gray-600 dark:text-slate-400">
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
              <span><strong className="text-gray-900 dark:text-slate-200">The Pragmatic Programmer</strong> &mdash; Timeless advice on software craftsmanship.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
              <span><strong className="text-gray-900 dark:text-slate-200">Designing Data-Intensive Applications</strong> &mdash; Understanding distributed systems at scale.</span>
            </li>
          </ul>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.25}>
        <section>
          <h2 className="mb-3 text-xl font-semibold">Life</h2>
          <ul className="space-y-3 text-gray-600 dark:text-slate-400">
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              <span>Finishing Year 12 and preparing for university.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              <span>Training for a half-marathon in September.</span>
            </li>
          </ul>
        </section>
      </AnimatedSection>
    </main>
  )
}
