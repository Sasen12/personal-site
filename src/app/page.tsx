import Link from "next/link"
import BlogCard from "@/components/BlogCard"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"
import { posts } from "@/data/posts"

export default function Home() {
  const featuredProjects = projects.filter((_, i) => i < 4)
  const recentPosts = posts.slice(0, 2)

  return (
    <div className="space-y-24">
      <section>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m Sasen.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          I build web apps, mobile apps, games, and tools. I also edit video,
          make motion graphics, and occasionally produce music.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium transition-colors hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projects</h2>
          <Link
            href="/projects"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Latest Posts</h2>
          <Link
            href="/blog"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            Read all &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}
