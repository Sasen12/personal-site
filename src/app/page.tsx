import Link from "next/link"
import BlogCard from "@/components/BlogCard"
import ProjectCard from "@/components/ProjectCard"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedCard from "@/components/AnimatedCard"
import HeroPromptCarousel from "@/components/HeroPromptCarousel"
import KineticHeadline from "@/components/KineticHeadline"
import ParallaxHero from "@/components/ParallaxHero"
import LaptopScrollSection from "@/components/LaptopScrollSection"

import { projects } from "@/data/projects"
import { getAllPosts } from "@/lib/posts"

const motionPhrases = [
  "Full-stack web apps",
  "Unity prototypes",
  "Motion graphics",
  "Technical writing",
  "Video editing",
  "Student tools",
  "Mobile experiments",
  "Creative systems",
]

export default function Home() {
  const featuredProjects = projects.filter((_, i) => i < 4)
  const allPosts = getAllPosts()
  const recentPosts = allPosts.slice(0, 2)
  const featuredPost = allPosts.length > 0 ? allPosts[0] : null

  return (
    <div>
      <ParallaxHero>
        <div className="hero-content-shell">
          <div className="mx-auto max-w-5xl text-center">
            <AnimatedSection delay={0} animateOnLoad>
              <div className="section-label mx-auto w-fit">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#b6f09c]" />
                Building things for the web
              </div>
            </AnimatedSection>

            <KineticHeadline
              className="mt-8 mb-6 text-5xl font-bold leading-[1.04] sm:text-7xl lg:text-8xl"
              lines={[
                { text: "Hi, I'm" },
                { text: "Sasen", accent: true },
              ]}
            />

            <AnimatedSection delay={0.42} animateOnLoad>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed sm:text-xl" style={{ color: "var(--text-muted)" }}>
                Full-stack developer, Unity tinkerer, and video editor. I build web apps,
                mobile apps, games, tools, and occasionally make music.
              </p>
            </AnimatedSection>

            <HeroPromptCarousel />

            <AnimatedSection delay={0.68} animateOnLoad>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/projects"
                  className="btn-primary"
                >
                  View Projects
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary"
                >
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </ParallaxHero>

      <section style={{ borderTop: "1px solid var(--card-border)", borderBottom: "1px solid var(--card-border)" }}>
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {[
              { label: "Projects", value: projects.length },
              { label: "Blog Posts", value: getAllPosts().length + 4 },
              { label: "Tech Stack", value: [...new Set(projects.flatMap((p) => p.tech))].length },
              { label: "Years Building", value: "3+" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 text-center">
                  <span className="block text-3xl font-bold tracking-tight gradient-text sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm" style={{ color: "var(--text-muted)" }}>
                    {stat.label}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-8" style={{ borderBottom: "1px solid var(--card-border)" }}>
        <div className="motion-marquee" aria-hidden="true">
          <div className="motion-marquee-track">
            {[...motionPhrases, ...motionPhrases].map((phrase, index) => (
              <span key={`${phrase}-${index}`} className="motion-marquee-pill">
                {phrase}
              </span>
            ))}
          </div>
        </div>
      </section>

      <LaptopScrollSection />

      <div className="mx-auto max-w-5xl space-y-24 px-6 py-24 sm:space-y-32 sm:py-28">
        <AnimatedSection>
          <section>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <div className="section-label mb-4 w-fit">Projects</div>
                <h2 className="text-3xl font-bold sm:text-5xl">Things I&apos;ve Built</h2>
              </div>
              <Link
                href="/projects"
                className="hidden text-sm font-medium transition-colors sm:inline-flex"
                style={{ color: "var(--color-accent)" }}
              >
                View all &rarr;
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {featuredProjects.map((project, i) => (
                <AnimatedCard key={project.slug} index={i}>
                  <ProjectCard project={project} />
                </AnimatedCard>
              ))}
            </div>
            <div className="mt-6 text-center sm:hidden">
              <Link
                href="/projects"
                className="text-sm font-medium"
                style={{ color: "var(--color-accent)" }}
              >
                View all projects &rarr;
              </Link>
            </div>
          </section>
        </AnimatedSection>

        {featuredPost && (
          <AnimatedSection delay={0.1}>
            <section>
              <div className="mb-6 flex items-center gap-3">
                <div className="section-label">Featured Post</div>
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block glass-card rounded-xl p-6 sm:p-8"
              >
                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>
                  {new Date(featuredPost.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })} &middot; {featuredPost.readingTime}
                </p>
                <h3 className="mt-3 text-xl font-semibold sm:text-2xl" style={{ color: "var(--text)" }}>
                  {featuredPost.title}
                </h3>
                <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
                  {featuredPost.excerpt}
                </p>
              </Link>
            </section>
          </AnimatedSection>
        )}

        <AnimatedSection delay={0.15}>
          <section>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <div className="section-label mb-4 w-fit">Blog</div>
                <h2 className="text-3xl font-bold sm:text-5xl">Latest Posts</h2>
              </div>
              <Link
                href="/blog"
                className="hidden text-sm font-medium transition-colors sm:inline-flex"
                style={{ color: "var(--color-accent)" }}
              >
                Read all &rarr;
              </Link>
            </div>
            {recentPosts.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {recentPosts.map((post, i) => (
                  <AnimatedCard key={post.slug} index={i}>
                    <BlogCard post={post} />
                  </AnimatedCard>
                ))}
              </div>
            ) : (
              <div className="glass-card rounded-xl p-10 text-center text-sm" style={{ color: "var(--text-muted)" }}>
                No posts yet. Write your first one at{" "}
                <code className="text-sm" style={{ color: "var(--color-accent)" }}>/admin</code>.
              </div>
            )}
            <div className="mt-6 text-center sm:hidden">
              <Link
                href="/blog"
                className="text-sm font-medium"
                style={{ color: "var(--color-accent)" }}
              >
                Read all posts &rarr;
              </Link>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <section className="glass-card rounded-2xl p-10 sm:p-16 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Let&apos;s Build Something</h2>
            <p className="mx-auto mt-4 max-w-md" style={{ color: "var(--text-muted)" }}>
              Have a project in mind or just want to chat? I&apos;m always open to new ideas and conversations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get in Touch
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/resume" className="btn-secondary">
                View Resume
              </Link>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  )
}
