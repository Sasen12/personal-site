import type { Experience } from "@/data/experience"

function TimelineDot() {
  return (
    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-indigo-500 bg-white dark:bg-slate-900">
      <div className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
    </div>
  )
}

function TimelineLine({ isLast }: { isLast: boolean }) {
  if (isLast) return null
  return (
    <div className="absolute left-[15px] top-8 h-full w-0.5 bg-gradient-to-b from-indigo-400 to-transparent" />
  )
}

export default function Timeline({ items }: { items: Experience[] }) {
  return (
    <div className="space-y-10">
      {items.map((item, i) => (
        <div key={i} className="relative flex gap-6">
          <div className="relative flex flex-col items-center">
            <TimelineDot />
            <TimelineLine isLast={i === items.length - 1} />
          </div>
          <div className="flex-1 pb-2">
            <span className="inline-block rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
              {item.startDate} &mdash; {item.endDate || "Present"}
            </span>
            <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
            <p className="text-sm text-gray-600 dark:text-slate-400">
              {item.organization} &middot; {item.location}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
              {item.description}
            </p>
            {item.highlights.length > 0 && (
              <ul className="mt-2 space-y-1">
                {item.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-slate-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
