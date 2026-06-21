import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import AnimatedSection from "@/components/AnimatedSection"
import BlogCard from "@/components/BlogCard"
import { getAllPosts } from "@/lib/posts"

export function generateStaticParams() {
  const posts = getAllPosts()
  const tags = new Set(posts.flatMap((p) => p.tags))
  return [...tags].map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params
  return { title: `#${tag} — Blog — Sasen`, description: `Posts tagged with "${tag}".` }
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  const posts = getAllPosts().filter((p) => p.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()))
  if (!posts.length) notFound()

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <nav className="mb-6 text-xs text-gray-500">
          <Link href="/" className="hover:text-purple-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-purple-400">Blog</Link>
          <span className="mx-2">/</span>
          <Link href="/blog/tags" className="hover:text-purple-400">Tags</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{tag}</span>
        </nav>
        <h1 className="gradient-text mb-2 text-3xl font-bold sm:text-4xl">
          Posts tagged with <span className="text-purple-400">#{tag}</span>
        </h1>
        <p className="mb-8 text-gray-400">{posts.length} post{posts.length !== 1 && "s"}</p>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <AnimatedSection key={post.slug}>
            <BlogCard post={post} />
          </AnimatedSection>
        ))}
      </div>
    </main>
  )
}
