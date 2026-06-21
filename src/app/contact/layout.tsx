import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact — Sasen",
  description: "Get in touch — questions, collaborations, or just saying hi.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
