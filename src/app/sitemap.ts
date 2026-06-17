import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const staticPages = [
    { url: "https://sasen.dev", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "https://sasen.dev/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "https://sasen.dev/uses", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "https://sasen.dev/now", priority: 0.5, changeFrequency: "weekly" as const },
    { url: "https://sasen.dev/colophon", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "https://sasen.dev/stats", priority: 0.3, changeFrequency: "monthly" as const },
  ]

  const blogPages = posts.map((post) => ({
    url: `https://sasen.dev/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: post.date,
  }))

  return [...staticPages, ...blogPages]
}
