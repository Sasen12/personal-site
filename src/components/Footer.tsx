import Link from "next/link"

const socials = [
  { label: "GitHub", href: "https://github.com/Sasen12" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sasen-perera-8b8a13337" },
  { label: "Email", href: "mailto:techsavvy356@gmail.com" },
]

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Social
            </h3>
            <div className="flex flex-col gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              About
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Building web apps, mobile apps, games, and tools from Melbourne.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-400 dark:border-gray-800 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Sasen. Built with Next.js.
        </div>
      </div>
    </footer>
  )
}
