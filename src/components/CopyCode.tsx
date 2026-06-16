"use client"

import { useEffect } from "react"

export default function CopyCode() {
  useEffect(() => {
    const pres = document.querySelectorAll("pre")
    pres.forEach((pre) => {
      if (pre.querySelector(".copy-btn")) return
      const code = pre.querySelector("code")
      if (!code) return

      const btn = document.createElement("button")
      btn.className =
        "copy-btn absolute top-3 right-3 rounded-md px-2 py-1 text-xs font-medium text-gray-400 opacity-0 transition-all hover:text-white group-hover:opacity-100 bg-white/5 hover:bg-white/10"
      btn.textContent = "Copy"

      btn.addEventListener("click", async () => {
        const text = code.textContent || ""
        try {
          await navigator.clipboard.writeText(text)
          btn.textContent = "Copied!"
          setTimeout(() => {
            btn.textContent = "Copy"
          }, 2000)
        } catch {
          btn.textContent = "Error"
        }
      })

      pre.classList.add("relative", "group")
      pre.appendChild(btn)
    })
  }, [])

  return null
}
