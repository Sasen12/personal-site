import Link from "next/link"
import type { Project } from "@/data/projects"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-lg font-bold text-gray-100 transition-colors group-hover:text-purple-400">{project.title}</h3>
          <span className="inline-flex h-2 w-2 rounded-full bg-purple-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
        </div>
        <p className="mb-4 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-400 transition-colors group-hover:bg-purple-500/10 group-hover:text-purple-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-sm font-medium text-purple-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
          View details
          <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </div>
      </div>
    </Link>
  )
}
