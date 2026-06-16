const icons: Record<string, string> = {
  React: "⚛️",
  "Next.js": "▲",
  TypeScript: "TS",
  Tailwind: "🌊",
  "Framer Motion": "🎬",
  "React Native": "📱",
  Expo: "⚡",
  Kotlin: "🅺",
  SwiftUI: "🍎",
  "Node.js": "📦",
  Python: "🐍",
  FastAPI: "⚡",
  PostgreSQL: "🐘",
  Unity: "🎮",
  "C#": "#",
  SpriteKit: "🎯",
  "Premiere Pro": "🎞️",
  "After Effects": "🌀",
  "FL Studio": "🎵",
  OpenAI: "🤖",
  LiveKit: "🔊",
  MediaPipe: "👁️",
}

export function getSkillIcon(name: string): string {
  return icons[name] || "▸"
}
