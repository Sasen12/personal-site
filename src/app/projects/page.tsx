import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">Projects</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        Things I&apos;ve built and worked on.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
