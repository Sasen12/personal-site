"use client"

import Link from "next/link"
import { GitHubIcon, LinkedInIcon, EmailIcon, MastodonIcon, XIcon } from "./SocialIcons"

const socials = [
  { label: "GitHub", href: "https://github.com/Sasen12", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sasen-perera-8b8a13337", icon: LinkedInIcon },
  { label: "Email", href: "mailto:techsavvy356@gmail.com", icon: EmailIcon },
  { label: "Mastodon", href: "https://mastodon.social/@sasen", icon: MastodonIcon },
  { label: "Twitter / X", href: "https://x.com/sasen_dev", icon: XIcon },
]

const linkGroups = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Uses", href: "/uses" },
      { label: "Resume", href: "/resume" },
      { label: "Contact", href: "/contact" },
      { label: "Community", href: "/community" },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--card-border)" }}>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <Link href="/" className="text-lg font-bold tracking-tight" style={{ color: "var(--text)" }}>
              <span className="gradient-text">S</span>asen
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Full-stack developer, Unity tinkerer, and video editor. Building web apps,
              mobile apps, games, and tools from Melbourne.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                  style={{ background: "var(--card-bg)", color: "var(--text-muted)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--color-accent)"
                    e.currentTarget.style.color = "#fff"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--card-bg)"
                    e.currentTarget.style.color = "var(--text-muted)"
                  }}
                  aria-label={s.label}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                {group.title}
              </h3>
              <div className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-accent)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 text-center text-xs" style={{ borderTop: "1px solid var(--card-border)", color: "var(--text-muted)" }}>
          &copy; {new Date().getFullYear()} Sasen. Built with Next.js &middot;{" "}
          <a href="/feed.xml" style={{ color: "inherit" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-accent)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>RSS</a>
        </div>
      </div>
    </footer>
  )
}
