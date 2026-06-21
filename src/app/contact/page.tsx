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
        <h1 className="mb-2 text-4xl font-bold gradient-text inline-block sm:text-6xl">Get in Touch</h1>
        <p className="mb-10 text-lg text-gray-400">
          Have a project in mind or just want to say hi? Drop me a message.
        </p>
      </AnimatedSection>

      {submitted ? (
        <AnimatedSection>
          <div className="glass-card rounded-xl p-8 text-center">
            <p className="text-lg font-medium text-purple-300">
              Thanks for reaching out!
            </p>
            <p className="mt-1 text-sm text-gray-400">
              I&apos;ll get back to you as soon as I can.
            </p>
          </div>
        </AnimatedSection>
      ) : (
        <AnimatedSection delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-gray-100 transition-colors placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-gray-100 transition-colors placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                maxLength={2000}
                onChange={(e) => setCharCount(e.target.value.length)}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-gray-100 transition-colors placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30"
              />
              <p className="mt-1 text-right text-xs text-gray-500">{charCount}/2000</p>
            </div>

            {error && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            <button type="submit" className="btn-primary">
              Send Message
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </form>
        </AnimatedSection>
      )}

      <AnimatedSection delay={0.3}>
        <div className="mt-16 glass-card rounded-xl p-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Other ways to reach me
          </h2>
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="mailto:techsavvy356@gmail.com"
              className="text-gray-400 transition-colors hover:text-purple-400"
            >
              techsavvy356@gmail.com
            </a>
            <a
              href="https://github.com/Sasen12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-purple-400"
            >
              github.com/Sasen12
            </a>
            <a
              href="https://www.linkedin.com/in/sasen-perera-8b8a13337"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-purple-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
