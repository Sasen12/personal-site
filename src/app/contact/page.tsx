"use client"

import { useState } from "react"
import AnimatedSection from "@/components/AnimatedSection"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [charCount, setCharCount] = useState(0)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(false)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { "Content-Type": "application/json" },
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <h1 className="mb-2 text-4xl font-bold sm:text-6xl">Get in Touch</h1>
        <p className="mb-10 text-lg text-gray-600 dark:text-slate-400">
          Have a project in mind or just want to say hi? Drop me a message.
        </p>
      </AnimatedSection>

      {submitted ? (
        <AnimatedSection>
          <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center dark:border-green-800 dark:bg-green-900/20">
            <p className="text-lg font-medium text-green-800 dark:text-green-300">
              Thanks for reaching out!
            </p>
            <p className="mt-1 text-sm text-green-700 dark:text-green-400">
              I&apos;ll get back to you as soon as I can.
            </p>
          </div>
        </AnimatedSection>
      ) : (
        <AnimatedSection delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                maxLength={2000}
                onChange={(e) => setCharCount(e.target.value.length)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
              />
              <p className="mt-1 text-right text-xs text-gray-400">{charCount}/2000</p>
            </div>

            {error && (
              <p className="text-sm text-red-600 dark:text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg dark:bg-indigo-600 dark:hover:bg-indigo-500"
            >
              Send Message
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </form>
        </AnimatedSection>
      )}

      <AnimatedSection delay={0.3}>
        <div className="mt-16 rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Other ways to reach me
          </h2>
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="mailto:techsavvy356@gmail.com"
              className="text-gray-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              techsavvy356@gmail.com
            </a>
            <a
              href="https://github.com/Sasen12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              github.com/Sasen12
            </a>
            <a
              href="https://www.linkedin.com/in/sasen-perera-8b8a13337"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
