import ProjectCard from "@/components/ProjectCard"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedCard from "@/components/AnimatedCard"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Projects</h1>
        <p className="mb-10 text-gray-600 dark:text-gray-400">
          Things I&apos;ve built and worked on.
        </p>
      </AnimatedSection>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <AnimatedCard key={project.slug} index={i}>
            <ProjectCard project={project} />
          </AnimatedCard>
        ))}
      </div>
    </div>
  )
}
