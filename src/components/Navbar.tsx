"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          <span className="text-indigo-600 dark:text-indigo-400">S</span>asen
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden items-center gap-8 sm:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm transition-colors ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-indigo-500" />
                  )}
                </Link>
              )
            })}
          </div>
          <ThemeToggle />
          <button
            className="sm:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-3 border-t border-gray-200/80 px-6 py-4 sm:hidden dark:border-slate-700/80">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm transition-colors ${
                  isActive
                    ? "font-medium text-indigo-600 dark:text-indigo-400"
                    : "text-gray-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
