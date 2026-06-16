import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import AnimatedSection from "@/components/AnimatedSection"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <AnimatedSection>
      <Link
        href="/projects"
        className="mb-10 inline-flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to projects
      </Link>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
      <div className="mb-8">
        <h1 className="mb-3 text-3xl font-bold sm:text-4xl">{project.title}</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-slate-400">
          {project.description}
        </p>
      </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
      <div className="mb-8 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
          >
            {t}
          </span>
        ))}
      </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
      <div className="mb-12 flex flex-wrap gap-4">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg dark:bg-indigo-600 dark:hover:bg-indigo-500"
          >
            Live Site
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium transition-all hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-600 dark:hover:border-indigo-600 dark:hover:text-indigo-400"
          >
            Source Code
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        )}
      </div>
      </AnimatedSection>

      {project.details && (
      <AnimatedSection delay={0.5}>
        <div className="mb-12 rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-3 text-lg font-semibold">About</h2>
          <p className="leading-relaxed text-gray-600 dark:text-slate-400">{project.details}</p>
        </div>
      </AnimatedSection>
      )}

      {project.features && project.features.length > 0 && (
      <AnimatedSection delay={0.6}>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Key Features</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-gray-200 p-4 dark:border-slate-700"
              >
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm leading-relaxed text-gray-700 dark:text-slate-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      )}
    </div>
  )
}
