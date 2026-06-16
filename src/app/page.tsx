import Link from "next/link"
import BlogCard from "@/components/BlogCard"
import ProjectCard from "@/components/ProjectCard"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedCard from "@/components/AnimatedCard"
import ParallaxHero from "@/components/ParallaxHero"
import { projects } from "@/data/projects"
import { getAllPosts } from "@/lib/posts"

export default function Home() {
  const featuredProjects = projects.filter((_, i) => i < 4)
  const recentPosts = getAllPosts().slice(0, 2)

  return (
    <div>
      <ParallaxHero>
        <div className="relative w-full px-6">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-700 backdrop-blur-sm dark:text-indigo-300">
                <span className="inline-flex h-2 w-2 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                Building things for the web
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h1 className="mt-6 mb-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-8xl dark:text-white">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
                  Sasen
                </span>
                .
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="max-w-2xl text-xl leading-relaxed text-gray-600 sm:text-2xl dark:text-gray-300">
                Full-stack developer, Unity tinkerer, and video editor. I build web apps,
                mobile apps, games, tools, and occasionally make music.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.45}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25 dark:bg-white dark:text-gray-900 dark:hover:bg-indigo-50 dark:hover:shadow-indigo-500/20"
                >
                  View Projects
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-400 px-7 py-3.5 text-base font-medium text-gray-700 transition-all hover:border-gray-900 hover:text-gray-900 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:text-white"
                >
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </ParallaxHero>

      <section className="border-y border-gray-200 bg-gray-50/50 dark:border-slate-800 dark:bg-slate-800/30">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { label: "Projects", value: projects.length },
              { label: "Blog Posts", value: getAllPosts().length + 4 },
              { label: "Tech Stack", value: [...new Set(projects.flatMap((p) => p.tech))].length },
              { label: "Years Building", value: 3 },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <span className="block text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl dark:text-indigo-400">
                    {stat.value}
                    {stat.label === "Years Building" && <span className="text-2xl sm:text-3xl">+</span>}
                  </span>
                  <span className="mt-1 block text-sm text-gray-600 dark:text-slate-400">
                    {stat.label}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-32 px-6 py-28">
        <AnimatedSection>
          <section>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold sm:text-5xl">Projects</h2>
                <p className="mt-2 text-base text-gray-600 dark:text-slate-400">
                  Things I&apos;ve built
                </p>
              </div>
              <Link
                href="/projects"
                className="hidden text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-400 sm:inline-flex dark:hover:text-indigo-300"
              >
                View all &rarr;
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {featuredProjects.map((project, i) => (
                <AnimatedCard key={project.slug} index={i}>
                  <ProjectCard project={project} />
                </AnimatedCard>
              ))}
            </div>
            <div className="mt-6 text-center sm:hidden">
              <Link
                href="/projects"
                className="text-sm font-medium text-indigo-600 dark:text-indigo-400"
              >
                View all projects &rarr;
              </Link>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <section>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold sm:text-5xl">Latest Posts</h2>
                <p className="mt-2 text-base text-gray-600 dark:text-slate-400">
                  Thoughts and things I&apos;ve learned
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-400 sm:inline-flex dark:hover:text-indigo-300"
              >
                Read all &rarr;
              </Link>
            </div>
            {recentPosts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {recentPosts.map((post, i) => (
                  <AnimatedCard key={post.slug} index={i}>
                    <BlogCard post={post} />
                  </AnimatedCard>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center text-sm text-gray-500 dark:border-slate-600">
                No posts yet. Write your first one at{" "}
                <code className="text-indigo-600 dark:text-indigo-400">/admin</code>.
              </div>
            )}
            <div className="mt-6 text-center sm:hidden">
              <Link
                href="/blog"
                className="text-sm font-medium text-indigo-600 dark:text-indigo-400"
              >
                Read all posts &rarr;
              </Link>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  )
}
