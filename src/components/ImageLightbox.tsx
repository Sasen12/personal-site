"use client"

import { useEffect } from "react"

export default function ImageLightbox() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "IMG" && target.closest("article")) {
        const src = target.getAttribute("src")
        if (src && !src.startsWith("data:")) {
          const overlay = document.createElement("div")
          overlay.className = "fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-zoom-out"
          overlay.onclick = () => overlay.remove()

          const img = document.createElement("img")
          img.src = src
          img.className = "max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"

          overlay.appendChild(img)
          document.body.appendChild(overlay)
        }
      }
    }
    document.addEventListener("click", handler)
    return () => document.removeEventListener("click", handler)
  }, [])

  return null
}
