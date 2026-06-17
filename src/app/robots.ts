import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      userAgent: "*",
      disallow: "/admin/",
    },
    sitemap: "https://sasen.dev/sitemap.xml",
  }
}
