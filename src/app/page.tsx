import Link from "next/link"
import BlogCard from "@/components/BlogCard"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"
import { getAllPosts } from "@/lib/posts"

export default function Home() {
  const featuredProjects = projects.filter((_, i) => i < 4)
  const recentPosts = getAllPosts().slice(0, 2)

  return (
    <div>
      <section className="hero-gradient relative overflow-hidden px-6 pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="glow absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="glow absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300 backdrop-blur-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-indigo-400" />
            Building things for the web
          </div>
          <h1 className="mt-6 mb-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Hi, I&apos;m{" "}
            <span className="glow-text bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Sasen
            </span>
            .
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-300">
            Full-stack developer, Unity tinkerer, and video editor. I build web apps,
            mobile apps, games, tools, and occasionally make music.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-indigo-50 hover:shadow-lg"
            >
              View Projects
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-600 px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-gray-500 hover:text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-24 px-6 py-24">
        <section>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Projects</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
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
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
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

        <section>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Latest Posts</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
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
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center text-sm text-gray-500 dark:border-gray-700">
              No posts yet. Write your first one at{" "}
              <code className="text-indigo-600 dark:text-indigo-400">/admin</code> after deploying.
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
      </div>
    </div>
  )
}
