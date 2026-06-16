import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import AnimatedSection from "@/components/AnimatedSection"

const heroImages = [
  "/images/tech/workspace.jpg",
  "/images/tech/circuit.jpg",
  "/images/tech/code.jpg",
]

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

  const heroImage = heroImages[projects.indexOf(project) % heroImages.length]

  return (
    <div>
      <section className="relative flex min-h-[40vh] items-end overflow-hidden sm:min-h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/30 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-900/40" />
        <AnimatedSection className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-10 sm:pb-16">
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to projects
          </Link>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-slate-400">
            {project.description}
          </p>
        </AnimatedSection>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <AnimatedSection delay={0.15}>
          <div className="mb-8 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
              >
                {t}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
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
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                Source Code
              </a>
            )}
          </div>
        </AnimatedSection>

        {project.details && (
          <AnimatedSection delay={0.35}>
            <div className="mb-12 rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-slate-700 dark:bg-slate-800">
              <h2 className="mb-3 text-lg font-semibold">About</h2>
              <p className="leading-relaxed text-gray-600 dark:text-slate-400">{project.details}</p>
            </div>
          </AnimatedSection>
        )}

        {project.features && project.features.length > 0 && (
          <AnimatedSection delay={0.45}>
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

        <AnimatedSection delay={0.55}>
          <div className="mt-16 border-t border-gray-200 pt-8 dark:border-slate-700">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-slate-500">
              More Projects
            </h3>
            <div className="flex flex-wrap gap-3">
              {projects.filter((p) => p.slug !== project.slug).slice(0, 3).map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:hover:border-indigo-600 dark:hover:text-indigo-400"
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
