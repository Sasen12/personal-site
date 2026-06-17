import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  readingTime: string
  image?: string
}

function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((fn) => fn.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      const firstParagraph = content
        .replace(/#{1,6}\s.*\n/, "")
        .split("\n")
        .find((p) => p.trim().length > 0)
        ?.replace(/[#*`\[\]]/g, "")
        .slice(0, 150) || ""

      return {
        slug,
        title: data.title || slug,
        date: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
        excerpt: firstParagraph + (firstParagraph.length >= 150 ? "..." : ""),
        content,
        tags: data.tags || [],
        readingTime: estimateReadingTime(content),
        image: data.image || undefined,
      }
    })

  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const result = await remark().use(html).process(content)

  return {
    slug,
    title: data.title || slug,
    date: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
    excerpt: "",
    content: result.toString(),
    tags: data.tags || [],
    readingTime: estimateReadingTime(content),
    image: data.image || undefined,
  }
}
