import Link from "next/link"
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./SocialIcons"

const socials = [
  { label: "GitHub", href: "https://github.com/Sasen12", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sasen-perera-8b8a13337", icon: LinkedInIcon },
  { label: "Email", href: "mailto:techsavvy356@gmail.com", icon: EmailIcon },
  { label: "Mastodon", href: "https://mastodon.social/@sasen", icon: GitHubIcon },
  { label: "Twitter / X", href: "https://x.com/sasen_dev", icon: GitHubIcon },
]

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-700">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-slate-400">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-slate-400">
              Social
            </h3>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  <s.icon className="h-4 w-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-slate-400">
              About
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-400">
              Building web apps, mobile apps, games, and tools from Melbourne.
            </p>
            <a
              href="/feed.xml"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.18 15.64a2.18 2.18 0 010 4.36 2.18 2.18 0 010-4.36M4 4.44A15.56 15.56 0 0119.56 20h-2.83A12.73 12.73 0 004 7.27V4.44m0 5.66a9.9 9.9 0 019.9 9.9h-2.83A7.07 7.07 0 004 12.93v-2.83z" />
              </svg>
              RSS Feed
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-400 dark:border-slate-700 dark:text-slate-500">
          &copy; {new Date().getFullYear()} Sasen. Built with Next.js &middot;{" "}
          <a href="/feed.xml" className="hover:text-indigo-500">RSS</a>
        </div>
      </div>
    </footer>
  )
}
