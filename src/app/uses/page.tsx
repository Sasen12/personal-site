import type { Metadata } from "next"
import AnimatedSection from "@/components/AnimatedSection"

export const metadata: Metadata = {
  title: "Uses — Sasen",
  description: "The hardware, software, and tools I use daily.",
}

const categories = [
  {
    title: "Hardware",
    items: [
      { name: "MacBook Pro 16\" (M1 Pro, 2021)", desc: "Daily driver for development, design, and everything in between." },
      { name: "Custom PC (Ryzen 9 + RTX 4070)", desc: "Gaming, Unity development, and GPU-intensive workloads." },
      { name: "Pixel 9 Pro", desc: "My daily driver phone running Android 16/17." },
      { name: "AirPods Pro (2nd gen)", desc: "Noise cancellation for deep focus sessions." },
      { name: "Keychron K2 (Brown switches)", desc: "Mechanical keyboard for that satisfying clack." },
      { name: "Logitech MX Master 3S", desc: "Ergonomic mouse with the best scroll wheel." },
    ],
  },
  {
    title: "Editor & Terminal",
    items: [
      { name: "VS Code", desc: "Primary editor with JetBrains Mono, One Dark Pro, and a hand-picked set of extensions." },
      { name: "kitty", desc: "GPU-accelerated terminal emulator." },
      { name: "tmux", desc: "Session management and multiplexing." },
      { name: "zsh + oh-my-zsh", desc: "Shell with powerlevel10k theme." },
      { name: "Neovim", desc: "For quick terminal-based edits." },
    ],
  },
  {
    title: "Development Tools",
    items: [
      { name: "Next.js / React", desc: "Framework of choice for web apps and this site." },
      { name: "Unity (C#)", desc: "Game dev and interactive experiences." },
      { name: "Flutter / Kotlin", desc: "Mobile app development." },
      { name: "Python", desc: "Scripting, AI/ML experiments, and backend work." },
      { name: "Docker", desc: "Containerization for consistent environments." },
      { name: "Git + GitHub", desc: "Version control and CI/CD." },
    ],
  },
  {
    title: "Design & Media",
    items: [
      { name: "After Effects", desc: "Motion graphics, visual effects, and video compositing." },
      { name: "Photoshop / Illustrator", desc: "UI mockups, asset creation, and graphic design." },
      { name: "Premiere Pro", desc: "Video editing for projects and content." },
      { name: "Figma", desc: "Collaborative design and prototyping." },
    ],
  },
  {
    title: "Productivity",
    items: [
      { name: "Raycast", desc: "Spotlight replacement with extensions for everything." },
      { name: "Notion", desc: "Project planning, notes, and knowledge base." },
      { name: "Obsidian", desc: "Personal knowledge management and writing." },
      { name: "Arc Browser", desc: "My daily browser with profiles and spaces." },
    ],
  },
]

export default function UsesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">/uses</h1>
        <p className="mb-8 text-gray-600 dark:text-slate-400">
          A living list of the hardware, software, and tools I use every day. Inspired by{" "}
          <a href="https://uses.tech" className="text-indigo-600 hover:underline dark:text-indigo-400">uses.tech</a>.
        </p>
      </AnimatedSection>

      {categories.map((cat, i) => (
        <AnimatedSection key={cat.title} delay={i * 0.05}>
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold">{cat.title}</h2>
            <div className="space-y-4">
              {cat.items.map((item) => (
                <div key={item.name} className="rounded-lg border border-gray-200 p-4 dark:border-slate-700">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>
      ))}
    </main>
  )
}
