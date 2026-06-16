export interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    title: "VCE Forge",
    description: "Full-stack study platform for Australian Year 12 students with JWT auth, SAC/exam tracking, AI-generated practice questions (OpenAI), study timers, adaptive study plans, textbook/Obsidian upload, goals, XP, streaks, badges, and a chess break mode.",
    tech: ["Expo", "React Native", "Node.js", "Express", "PostgreSQL", "Prisma", "OpenAI", "Zustand"],
    link: "https://vceforge.space",
  },
  {
    title: "Fret Flow",
    description: "Guitar practice web app with camera coach (MediaPipe), chord trainer, ear training, metronome, tuner, practice timer, journal, progress tracking, and song library.",
    tech: ["React", "Vite", "Radix UI", "Supabase", "TanStack Query", "Tailwind CSS", "MediaPipe"],
  },
  {
    title: "FRIDAY — AI Assistant",
    description: "Tony Stark-inspired AI assistant with MCP server exposing tools (news, web search, system info) plus LiveKit voice agent with wake-word activation and speech output.",
    tech: ["Python", "FastMCP", "LiveKit Agents", "OpenAI", "macOS"],
    github: "https://github.com/sasen/friday",
  },
  {
    title: "OneBridge",
    description: "Next-gen encrypted local network bridge between Android and macOS with QR pairing, clipboard sync, file transfer, notification mirroring, remote trackpad, and audio control.",
    tech: ["Kotlin", "Jetpack Compose", "SwiftUI", "ECDH", "AES-256-GCM"],
    github: "https://github.com/sasen/onebridge",
  },
  {
    title: "Echoes in the Static",
    description: "Unity 3D game with custom assets, scripts, scenes, shaders, and audio — built from the ground up as a creative exploration game.",
    tech: ["Unity", "C#", "ShaderLab", "Blender"],
  },
  {
    title: "The Million Dollar Dream",
    description: "Production landing page for a passion project with live AI demo form wired to n8n webhooks for automated processing.",
    tech: ["Next.js", "React 19", "Tailwind CSS", "n8n"],
    link: "https://milliondollardream.com",
  },
  {
    title: "TaxCopilot",
    description: "Internal AI-assisted workflow tool for Australian tax agents with client management, document extraction, deduction suggestions, mortgage broking workspace, and audit logging.",
    tech: ["Python", "FastAPI", "Next.js", "OpenAI", "SQLite"],
  },
  {
    title: "Instagram Reels Uploader",
    description: "Production-quality automated Reels uploader using the official Instagram Graph API — no browser automation. Dry-run mode, duplicate prevention, and caption management.",
    tech: ["Python", "Instagram Graph API", "Cloudflare R2"],
    github: "https://github.com/sasen/reel-uploader",
  },
]
