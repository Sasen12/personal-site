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
    <footer className="relative border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <Link href="/" className="text-lg font-bold tracking-tight">
              <span className="gradient-text">S</span>asen
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-400">
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
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-purple-500/20 hover:text-purple-400"
                  aria-label={s.label}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
                {group.title}
              </h3>
              <div className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-purple-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Sasen. Built with Next.js &middot;{" "}
          <a href="/feed.xml" className="hover:text-purple-400">RSS</a>
        </div>
      </div>
    </footer>
  )
}
