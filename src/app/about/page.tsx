import Link from "next/link"

const skills = [
  { category: "Frontend", items: "React, Next.js, TypeScript, Tailwind" },
  { category: "Mobile", items: "React Native, Expo, Kotlin, SwiftUI" },
  { category: "Backend", items: "Node.js, Python, FastAPI, PostgreSQL" },
  { category: "Game Dev", items: "Unity, C#, SpriteKit" },
  { category: "Video", items: "Premiere Pro, After Effects, FL Studio" },
  { category: "AI/ML", items: "OpenAI, LiveKit, MLX, MediaPipe" },
]

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="mb-6 text-3xl font-bold sm:text-4xl">About Me</h1>

      <div className="space-y-4 text-gray-600 dark:text-gray-400">
        <p className="leading-relaxed">
          Full-stack developer, Unity tinkerer, and video editor based in Melbourne.
          I build web apps, mobile apps, games, and occasionally make music or motion graphics.
        </p>
        <p className="leading-relaxed">
          I&apos;ve built everything from AI assistants and encrypted device bridges to guitar
          practice apps and VCE study tools. I also produce and edit video content in Premiere
          Pro and After Effects.
        </p>
        <p className="leading-relaxed">
          Right now I&apos;m deep into Unity game development, AI/voice agents, and building
          tools that connect devices and workflows.
        </p>
      </div>

      <h2 className="mb-6 mt-16 text-2xl font-bold">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="rounded-xl border border-gray-200 p-5 transition-colors hover:border-indigo-200 dark:border-gray-800 dark:hover:border-indigo-800"
          >
            <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {skill.category}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{skill.items}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg dark:bg-indigo-600 dark:hover:bg-indigo-500"
        >
          Get in Touch
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>
    </div>
  )
}
