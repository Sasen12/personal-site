import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import AnimatedSection from "@/components/AnimatedSection"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — Sasen`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
    },
  }
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
        <nav className="mb-6 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-purple-400">Home</Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-purple-400">Projects</Link>
          <span>/</span>
          <span className="text-gray-300">{project.title}</span>
        </nav>
        <h1 className="gradient-text mb-4 text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
          {project.description}
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mb-3 mt-8 flex flex-wrap gap-2">
          <span className="section-label">
            {project.category}
          </span>
        </div>
        <div className="mb-8 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-purple-500/10 px-3 py-1.5 text-sm font-medium text-purple-300"
            >
              {t}
            </span>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mb-12 flex flex-wrap gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
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
              className="btn-secondary"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
              Source Code
            </a>
          )}
        </div>
      </AnimatedSection>

      {project.details && (
        <AnimatedSection>
          <div className="glass-card mb-12 rounded-xl p-6">
            <h2 className="mb-3 text-lg font-semibold text-gray-100">About</h2>
            <p className="leading-relaxed text-gray-400">{project.details}</p>
          </div>
        </AnimatedSection>
      )}

      {project.features && project.features.length > 0 && (
        <AnimatedSection>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-100">Key Features</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="glass-card flex items-start gap-3 rounded-lg p-4"
                >
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm leading-relaxed text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection>
        <div className="mt-16 border-t border-white/10 pt-8">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-500">
            More Projects
          </h3>
          <div className="flex flex-wrap gap-3">
            {projects.filter((p) => p.slug !== project.slug).slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="glass-card rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:text-purple-300"
              >
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
