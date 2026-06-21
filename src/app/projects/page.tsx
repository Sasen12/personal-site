import type { Metadata } from "next"
import ProjectCard from "@/components/ProjectCard"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedCard from "@/components/AnimatedCard"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects — Sasen",
  description: "Open-source projects, apps, and experiments across web, mobile, AI, and games.",
}

const categories = [...new Set(projects.map((p) => p.category))].sort()

export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>
}) {
  const { cat } = await searchParams

  let filtered = projects
  if (cat) {
    filtered = projects.filter((p) => p.category === cat)
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <span className="section-label mb-4">Work</span>
        <h1 className="gradient-text mb-4 text-4xl font-bold sm:text-6xl">Projects</h1>
        <p className="mb-8 text-lg text-gray-400">
          Things I&apos;ve built and worked on.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mb-8 flex flex-wrap gap-2">
          <a
            href="/projects"
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              !cat
                ? "bg-purple-600 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            All
          </a>
          {categories.map((c) => (
            <a
              key={c}
              href={`/projects?cat=${encodeURIComponent(c)}`}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                cat === c
                  ? "bg-purple-600 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {c}
            </a>
          ))}
        </div>
      </AnimatedSection>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <AnimatedCard key={project.slug}>
              <ProjectCard project={project} />
            </AnimatedCard>
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-xl p-16 text-center">
          <p className="text-gray-400">No projects in this category.</p>
          <a href="/projects" className="mt-2 inline-block text-sm text-purple-400 hover:text-purple-300">
            Clear filter
          </a>
        </div>
      )}
    </div>
  )
}
