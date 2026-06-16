import Link from "next/link"
import type { Project } from "@/data/projects"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="rounded-xl border border-gray-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-700 dark:hover:shadow-indigo-500/15">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-lg font-semibold transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{project.title}</h3>
          <span className="inline-flex h-2 w-2 rounded-full bg-indigo-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_6px_rgba(99,102,241,0.6)]" />
        </div>
        <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
          {project.description}
        </p>
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-700 dark:bg-slate-700 dark:text-slate-300 dark:group-hover:bg-indigo-900/30 dark:group-hover:text-indigo-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-sm font-medium text-indigo-600 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-indigo-400">
          View details
          <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </div>
      </div>
    </Link>
  )
}
