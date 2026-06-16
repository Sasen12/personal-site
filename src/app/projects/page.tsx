import ProjectCard from "@/components/ProjectCard"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedCard from "@/components/AnimatedCard"
import { projects } from "@/data/projects"

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
        <h1 className="mb-2 text-4xl font-bold sm:text-6xl">Projects</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-slate-400">
          Things I&apos;ve built and worked on.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <div className="mb-8 flex flex-wrap gap-2">
          <a
            href="/projects"
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              !cat
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
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
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
              }`}
            >
              {c}
            </a>
          ))}
        </div>
      </AnimatedSection>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((project, i) => (
            <AnimatedCard key={project.slug} index={i}>
              <ProjectCard project={project} />
            </AnimatedCard>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 p-16 text-center dark:border-slate-600">
          <p className="text-gray-500">No projects in this category.</p>
          <a href="/projects" className="mt-2 inline-block text-sm text-indigo-600 hover:underline dark:text-indigo-400">
            Clear filter
          </a>
        </div>
      )}
    </div>
  )
}
