import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import SkipToContent from "@/components/SkipToContent"
import AnnouncementBanner from "@/components/AnnouncementBanner"
import KeyboardShortcuts from "@/components/KeyboardShortcuts"
import ImageLightbox from "@/components/ImageLightbox"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sasen — Developer & Creator",
  description: "Portfolio and blog by Sasen. Building web apps, mobile apps, games, and tools.",
  metadataBase: new URL("https://sasen.dev"),
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sasen — Developer & Creator",
    description: "Portfolio and blog by Sasen. Building web apps, mobile apps, games, and tools.",
    siteName: "Sasen",
    type: "website",
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  icons: {
    other: [
      { rel: "me", url: "https://mastodon.social/@sasen" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="theme-color" content="#6366f1" />
        <link rel="me" href="https://mastodon.social/@sasen" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var theme = localStorage.getItem('theme');
              if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              }
            })();
          `
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `
            console.log(
              "%c\u{1F680} Sasen.dev %cBuilt with Next.js, Tailwind CSS, and love.",
              "font-size:20px; font-weight:bold; color:#6366f1;",
              "font-size:14px;"
            );
          `
        }} />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-slate-900 dark:text-slate-100">
        <SkipToContent />
        <AnnouncementBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <KeyboardShortcuts />
        <ImageLightbox />
      </body>
    </html>
  )
}
