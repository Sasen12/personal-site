export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
}

export const posts: Post[] = [
  {
    slug: "building-a-guitar-practice-app-with-mediapipe",
    title: "Building Fret Flow: A Guitar Practice App with Real-Time Camera Tracking",
    date: "2026-06-01",
    excerpt: "How I built a web app that uses MediaPipe hand tracking to give real-time feedback on guitar finger placement.",
    tags: ["React", "MediaPipe", "Machine Learning"],
    content: `
I've been playing guitar for years, and I always wanted a tool that could watch my fingers and tell me when I'm doing it wrong. So I built Fret Flow.

## The Idea

Fret Flow is a guitar practice web app with:

- **Camera Coach** — real-time hand tracking via MediaPipe that detects finger positions on the fretboard
- **Chord Trainer** — shows you chords and checks your finger placement
- **Ear Training** — interval and chord recognition exercises
- **Metronome, Tuner, Scales** — all the standard practice tools
- **Practice Journal** — track what you worked on and your progress over time

## How the Camera Coach Works

MediaPipe's hand landmark model runs entirely in the browser via WebAssembly. It detects 21 landmarks per hand at 30fps. I map these landmarks to fretboard positions and compare them against the target chord shape.

\`\`\`typescript
const handLandmarks = results.multiHandLandmarks[0]
const fingerTips = [4, 8, 12, 16, 20] // thumb to pinky
const fretPositions = fingerTips.map((i) => ({
  x: handLandmarks[i].x,
  y: handLandmarks[i].y,
}))
\`\`\`

## Tech Stack

- **Vite + React 19** for the frontend
- **Radix UI** for accessible components
- **Supabase** for auth and data storage
- **TanStack Query** for data fetching
- **MediaPipe** for hand tracking
- **Tailwind CSS** for styling

## What I Learned

MediaPipe in the browser is surprisingly capable. The biggest challenge was mapping 2D camera coordinates to a 3D fretboard model — perspective makes it tricky.
    `.trim(),
  },
  {
    slug: "building-onebridge-android-mac-ecosystem",
    title: "OneBridge: Building an Encrypted Local Network Bridge Between Android and macOS",
    date: "2026-05-20",
    excerpt: "Why I built a secure alternative to KDE Connect and how I designed the pairing and encryption protocol.",
    tags: ["Kotlin", "Swift", "Security", "Networking"],
    content: `
I use both an Android phone and a MacBook daily. I wanted seamless clipboard sync, file transfer, and notification mirroring between them — without relying on cloud services.

## The Problem

KDE Connect exists, but it's flaky on macOS. Apple's ecosystem only works with Apple devices. I wanted something I fully controlled.

## The Solution: OneBridge

OneBridge is a local network bridge with:

- **QR code pairing** — scan to connect, no IP typing
- **P-256 ECDH key exchange** — secure channel establishment
- **AES-256-GCM encryption** — all traffic encrypted
- **Clipboard sync** — copy on one device, paste on the other
- **File transfer** — drag and drop across devices
- **Notification mirroring** — Android notifications on your Mac
- **Remote trackpad** — control your Mac from your phone

## Architecture

\`\`\`
┌─────────────────┐          ┌─────────────────┐
│   Android App   │          │   macOS App      │
│  (Kotlin/Compose)│   mDNS   │  (SwiftUI)       │
│                 │◄─────────►│                  │
│  ECDH + AES-256 │   TCP    │  ECDH + AES-256  │
└─────────────────┘          └─────────────────┘
\`\`\`

The pairing flow uses ECDH to derive a shared secret, then all subsequent messages are encrypted with AES-256-GCM. Discovery uses mDNS/Bonjour.

## What I'd Do Differently

I'd add WebRTC support for peer-to-peer communication that works even when devices are on different subnets.
    `.trim(),
  },
  {
    slug: "game-dev-with-unity",
    title: "Lessons Learned Making Games in Unity",
    date: "2026-04-10",
    excerpt: "What I've learned building Echoes in the Static and a multiplayer platformer — from asset pipelines to optimization.",
    tags: ["Unity", "C#", "Game Development"],
    content: `
I've been building games in Unity for a while now. Here are some things I wish I knew earlier.

## 1. Plan Your Asset Pipeline

Early on, I jumped straight into coding without thinking about assets. Big mistake. Set up your folder structure, naming conventions, and import settings before you start writing scripts.

## 2. Use ScriptableObjects

ScriptableObjects are incredibly powerful for game data. Instead of hardcoding values, use them for:

\`\`\`csharp
[CreateAssetMenu(fileName = "EnemyConfig", menuName = "Game/Enemy Config")]
public class EnemyConfig : ScriptableObject {
  public float health;
  public float speed;
  public GameObject prefab;
}
\`\`\`

## 3. Optimize Early

My first game (Echoes in the Static) ran fine in the editor but chugged on my MacBook. Draw calls, poly counts, and texture sizes matter. Use the profiler from day one.

## 4. Version Control for Unity

Unity projects don't play nicely with git by default. Set up a proper .gitignore, use Git LFS for large assets, and consider Unity Version Control.

## 5. Multiplayer Is Hard

My second game (Hanging By A Thread) used the Blocks framework for multiplayer. Network synchronization, lag compensation, and state management add a whole new layer of complexity.
    `.trim(),
  },
]
