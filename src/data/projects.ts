export interface Project {
  slug: string
  title: string
  description: string
  tech: string[]
  link?: string
  github?: string
  features?: string[]
  details?: string
}

export const projects: Project[] = [
  {
    slug: "vce-forge",
    title: "VCE Forge",
    description: "Full-stack study platform for Australian Year 12 students with JWT auth, SAC/exam tracking, AI-generated practice questions (OpenAI), study timers, adaptive study plans, textbook/Obsidian upload, goals, XP, streaks, badges, and a chess break mode.",
    tech: ["Expo", "React Native", "Node.js", "Express", "PostgreSQL", "Prisma", "OpenAI", "Zustand"],
    link: "https://vceforge.space",
    github: "https://github.com/Sasen12/vce-study-tracker",
    features: [
      "AI-generated practice questions tailored to each subject's study design",
      "Adaptive study plans based on upcoming SACs and exams",
      "Study timer with Pomodoro mode and session tracking",
      "XP, streaks, and badges gamification system",
      "Upload textbook PDFs and Obsidian notes for AI context",
      "Chess break mode for mental reset between study sessions",
      "ATAR estimator widget with scaling data",
      "Dark mode, SecureStore auth, and push notifications",
    ],
    details: "Built for VCE Year 12 students who need a structured, motivating way to track their studies. The backend uses OpenAI to generate realistic VCE-style questions based on the actual VCAA study design documents. The frontend is built with Expo and React Native Paper for a native feel on both iOS and Android, with a web version deployed on Netlify.",
  },
  {
    slug: "fret-flow",
    title: "Fret Flow",
    description: "Guitar practice web app with camera coach (MediaPipe), chord trainer, ear training, metronome, tuner, practice timer, journal, progress tracking, and song library.",
    tech: ["React", "Vite", "Radix UI", "Supabase", "TanStack Query", "Tailwind CSS", "MediaPipe"],
    github: "https://github.com/Sasen12/Fret-flow",
    features: [
      "Real-time hand tracking via MediaPipe to detect finger positions",
      "Chord library with visual finger placement guides",
      "Ear training exercises (intervals, chords, scales)",
      "Built-in metronome and chromatic tuner",
      "Practice journal with session logging and progress charts",
      "Song library with chord progressions and tab viewer",
    ],
    details: "A guitar practice tool that uses browser-based machine learning to give real-time feedback on finger placement. MediaPipe's hand landmark model runs at 30fps in the browser via WebAssembly, mapping 21 hand landmarks to fretboard positions. Built with Vite and React 19 for fast iteration.",
  },
  {
    slug: "vce-website",
    title: "VCE Website",
    description: "A Next.js website for VCE students with resources, study guides, and exam prep materials.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Sasen12/VCE-WEBSITE",
    features: [
      "Study guides and resources organized by subject",
      "Exam preparation materials and past paper walkthroughs",
      "Responsive design optimized for mobile study on the go",
      "Fast static generation for quick page loads",
    ],
  },
  {
    slug: "friday-ai-assistant",
    title: "FRIDAY — AI Assistant",
    description: "Tony Stark-inspired AI assistant with MCP server exposing tools (news, web search, system info) plus LiveKit voice agent with wake-word activation and speech output.",
    tech: ["Python", "FastMCP", "LiveKit Agents", "OpenAI", "macOS"],
    github: "https://github.com/SAGAR-TAMANG/friday-tony-stark-demo",
    features: [
      "LiveKit voice agent with real-time speech input/output",
      "MCP server exposing news, web search, and system info tools",
      "macOS menu bar app with double-clap activation",
      "OpenAI Whisper for speech recognition, GPT for reasoning, TTS for speech",
    ],
    details: "A Tony Stark-inspired AI assistant built with FastMCP and LiveKit Agents. The MCP server exposes tools for fetching news, searching the web, and querying system information. The LiveKit voice agent handles real-time voice interaction with wake-word activation. Runs on macOS with a native menu bar app.",
  },
  {
    slug: "onebridge",
    title: "OneBridge",
    description: "Next-gen encrypted local network bridge between Android and macOS with QR pairing, clipboard sync, file transfer, notification mirroring, remote trackpad, and audio control.",
    tech: ["Kotlin", "Jetpack Compose", "SwiftUI", "ECDH", "AES-256-GCM"],
    features: [
      "QR code pairing — scan to connect, no IP typing",
      "P-256 ECDH key exchange for secure channel establishment",
      "AES-256-GCM encryption for all traffic",
      "Clipboard sync across devices",
      "File transfer with drag-and-drop",
      "Notification mirroring from Android to Mac",
      "Remote trackpad control",
    ],
    details: "A secure alternative to KDE Connect and Apple's Continuity features. Uses mDNS/Bonjour for device discovery and ECDH key exchange for pairing. All traffic is encrypted with AES-256-GCM. Built natively with Kotlin/Jetpack Compose on Android and SwiftUI on macOS.",
  },
  {
    slug: "hanging-by-a-thread",
    title: "Hanging By A Thread",
    description: "Unity multiplayer game using the Blocks framework with platformer and shooter gameplay modes. Custom scripts, animations, and network sync.",
    tech: ["Unity", "C#", "Blocks Framework"],
    github: "https://github.com/Sasen12/Hanging-By-A-Thread",
    features: [
      "Multiplayer gameplay with real-time network synchronization",
      "Platformer and shooter game modes",
      "Custom Unity scripts and animations",
      "Blocks framework for multiplayer infrastructure",
    ],
  },
  {
    slug: "echoes-in-the-static",
    title: "Echoes in the Static",
    description: "Unity 3D game with custom assets, scripts, scenes, shaders, and audio — built from the ground up as a creative exploration game.",
    tech: ["Unity", "C#", "ShaderLab", "Blender"],
    features: [
      "Custom 3D environments built in Unity",
      "Original audio design and shader effects",
      "Scripted interactions and game mechanics",
      "Blender-modelled assets integrated into Unity pipeline",
    ],
  },
  {
    slug: "million-dollar-dream",
    title: "The Million Dollar Dream",
    description: "Production landing page with live AI demo form wired to n8n webhooks for automated processing.",
    tech: ["Next.js", "React 19", "Tailwind CSS", "n8n"],
  },
  {
    slug: "roam",
    title: "Roam",
    description: "Night-out planner iOS app that turns a few preferences into a personalised adventure plan with real venues, route maps, and live availability — powered by OpenStreetMap.",
    tech: ["Flutter", "Dart", "Provider", "OpenStreetMap"],
    features: [
      "Preference-based itinerary generation (group size, budget, vibe, transport)",
      "Real venue data via OpenStreetMap Nominatim + Overpass APIs",
      "Interactive route map with numbered stop markers and gradient polylines",
      "Venue availability parsing with open/closed/closing-soon status",
      "Busyness heuristic and itinerary timing optimizer with travel time estimates",
      "Live arrival-time-aware warnings for stops that'll be closed on arrival",
      "Saved adventures with local persistence, cards, and delete support",
      "Redo night and per-stop swap venue affordances",
      "Friend invite links via system share sheet",
      "Vibe-matching history profile and weather service integration",
    ],
    details: "Built to solve the eternal question — 'What should we do tonight?' A Flutter app that takes a few preference inputs (group size, budget, vibe, transport mode, location) and generates a personalised night-out plan with real venue data from OpenStreetMap. Features an interactive map with optimized stop ordering, live opening hours parsing, and busyness estimates. No backend required — everything runs locally with OSM's free APIs.",
  },
  {
    slug: "taxcopilot",
    title: "TaxCopilot",
    description: "Internal AI-assisted workflow tool for Australian tax agents with client management, document extraction, deduction suggestions, mortgage broking workspace, and audit logging.",
    tech: ["Python", "FastAPI", "Next.js", "OpenAI", "SQLite"],
    features: [
      "Client management with document upload and extraction",
      "AI-powered deduction suggestions based on client data",
      "Mortgage broking workspace integration",
      "Audit logging and compliance tracking",
      "TFN sanitisation for data privacy",
    ],
  },
]
