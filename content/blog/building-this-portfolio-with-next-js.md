---
title: "Building This Portfolio with Next.js"
date: 2025-03-10
tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web Development"]
---

This site went through a few iterations before I settled on the current stack. Here's why I chose what I chose, and what I learned along the way.

## Why Next.js

I've used Vite + React for most of my web projects. For a portfolio, though, Next.js gives me:

- **Static site generation** — fast loads, no server needed
- **File-based routing** — `app/blog/[slug]/page.tsx` is cleaner than a manual router
- **Image optimisation** — automatic resizing and format switching

## Tailwind CSS 4

The v4 rewrite of Tailwind changed the game. The new `@theme` directive makes customising the design system much cleaner:

```css
@theme {
  --color-indigo-600: oklch(0.6 0.18 270);
}
```

And `@custom-variant dark` replaces the old `dark:` prefix config — way less boilerplate.

## Framer Motion for Scroll Animations

I wanted the site to feel alive without being distracting. Framer Motion's `useInView` hook makes it easy to trigger animations when elements scroll into view:

```typescript
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: "-40px" })

return (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: delay }}
  >
    {children}
  </motion.div>
)
```

## The Admin Blog Editor

The most over-engineered feature on this site — and the one I'm proudest of. It uses Netlify Blobs to store blog posts, with a full Markdown editor, tag management, and password-based auth. No CMS, no database, just serverless functions and blob storage.

The full source is [on GitHub](https://github.com/Sasen12/personal-site).
