import Link from "next/link"

export default function About() {
  return (
    <div className="max-w-2xl">
      <h1 className="mb-8 text-3xl font-bold">About Me</h1>

      <div className="space-y-4 text-gray-600 dark:text-gray-400">
        <p className="leading-relaxed">
          Full-stack developer, Unity tinkerer, and video editor based in Melbourne.
          I build web apps, mobile apps, games, and occasionally make music or motion
          graphics.
        </p>
        <p className="leading-relaxed">
          I&apos;ve built everything from AI assistants (FRIDAY) and encrypted device bridges
          (OneBridge) to guitar practice apps (Fret Flow) and VCE study tools. I also
          produce and edit video content in Premiere Pro and After Effects.
        </p>
        <p className="leading-relaxed">
          Right now I&apos;m deep into Unity game development, AI/voice agents, and
          building tools that connect devices and workflows. I love learning new
          technologies and bringing ideas to life.
        </p>
      </div>

      <h2 className="mb-4 mt-12 text-xl font-semibold">What I Work With</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {[
          { category: "Frontend", items: "React, Next.js, TypeScript, Tailwind" },
          { category: "Mobile", items: "React Native, Expo, Kotlin, SwiftUI" },
          { category: "Backend", items: "Node.js, Python, FastAPI, PostgreSQL" },
          { category: "Game Dev", items: "Unity, C#, SpriteKit" },
          { category: "Video", items: "Premiere Pro, After Effects, FL Studio" },
          { category: "AI/ML", items: "OpenAI, LiveKit, MLX, MediaPipe" },
        ].map((skill) => (
          <div
            key={skill.category}
            className="rounded-lg border border-gray-200 p-4 dark:border-gray-800"
          >
            <h3 className="mb-1 text-sm font-semibold">{skill.category}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{skill.items}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
