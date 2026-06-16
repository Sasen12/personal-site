import Link from "next/link"
import type { Project } from "@/data/projects"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/15 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-600 dark:hover:shadow-indigo-500/20">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{project.title}</h3>
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
        </div>
        <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
          {project.description}
        </p>
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-all duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-700 group-hover:shadow-sm dark:bg-slate-700 dark:text-slate-300 dark:group-hover:bg-indigo-900/40 dark:group-hover:text-indigo-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-indigo-400">
          View details
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </div>
      </div>
    </Link>
  )
}
