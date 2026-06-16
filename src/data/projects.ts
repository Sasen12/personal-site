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
    github: "https://github.com/Sasen12/vce-study-tracker",
  },
  {
    title: "Fret Flow",
    description: "Guitar practice web app with camera coach (MediaPipe), chord trainer, ear training, metronome, tuner, practice timer, journal, progress tracking, and song library.",
    tech: ["React", "Vite", "Radix UI", "Supabase", "TanStack Query", "Tailwind CSS", "MediaPipe"],
    github: "https://github.com/Sasen12/Fret-flow",
  },
  {
    title: "VCE Website",
    description: "A Next.js website for VCE students with resources, study guides, and exam prep materials.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Sasen12/VCE-WEBSITE",
  },
  {
    title: "FRIDAY — AI Assistant",
    description: "Tony Stark-inspired AI assistant with MCP server exposing tools (news, web search, system info) plus LiveKit voice agent with wake-word activation and speech output.",
    tech: ["Python", "FastMCP", "LiveKit Agents", "OpenAI", "macOS"],
    github: "https://github.com/SAGAR-TAMANG/friday-tony-stark-demo",
  },
  {
    title: "OneBridge",
    description: "Next-gen encrypted local network bridge between Android and macOS with QR pairing, clipboard sync, file transfer, notification mirroring, remote trackpad, and audio control.",
    tech: ["Kotlin", "Jetpack Compose", "SwiftUI", "ECDH", "AES-256-GCM"],
  },
  {
    title: "Hanging By A Thread",
    description: "Unity multiplayer game using the Blocks framework with platformer and shooter gameplay modes. Custom scripts, animations, and network sync.",
    tech: ["Unity", "C#", "Blocks Framework"],
    github: "https://github.com/Sasen12/Hanging-By-A-Thread",
  },
  {
    title: "Echoes in the Static",
    description: "Unity 3D game with custom assets, scripts, scenes, shaders, and audio — built from the ground up as a creative exploration game.",
    tech: ["Unity", "C#", "ShaderLab", "Blender"],
  },
  {
    title: "The Million Dollar Dream",
    description: "Production landing page with live AI demo form wired to n8n webhooks for automated processing.",
    tech: ["Next.js", "React 19", "Tailwind CSS", "n8n"],
  },
  {
    title: "TaxCopilot",
    description: "Internal AI-assisted workflow tool for Australian tax agents with client management, document extraction, deduction suggestions, mortgage broking workspace, and audit logging.",
    tech: ["Python", "FastAPI", "Next.js", "OpenAI", "SQLite"],
  },
]
