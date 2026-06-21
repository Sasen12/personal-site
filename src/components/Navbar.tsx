"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <motion.nav
      className="fixed top-0 right-0 left-0 z-50"
      initial={{ opacity: 0, y: -18, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-5xl px-4 pt-4">
        <div className="glass rounded-[22px] px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-bold">
              <span className="gradient-text">S</span>asen
            </Link>

            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden items-center gap-1 sm:flex">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                    className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                      }`}
                    >
                      {link.label}
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

          <AnimatePresence>
            {open && (
              <motion.div
                className="mt-4 flex flex-col gap-2 overflow-hidden border-t border-white/10 pt-4"
                initial={{ height: 0, opacity: 0, y: -8 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -8 }}
                transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-lg px-4 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "bg-white/10 font-medium text-white"
                          : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  )
}
