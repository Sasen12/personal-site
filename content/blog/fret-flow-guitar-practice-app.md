---
title: "Building Fret Flow: A Guitar Practice App with Real-Time Camera Tracking"
date: 2026-06-01
tags: ["React", "MediaPipe", "Machine Learning"]
---

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

```typescript
const handLandmarks = results.multiHandLandmarks[0]
const fingerTips = [4, 8, 12, 16, 20] // thumb to pinky
const fretPositions = fingerTips.map((i) => ({
  x: handLandmarks[i].x,
  y: handLandmarks[i].y,
}))
```

## Tech Stack

- **Vite + React 19** for the frontend
- **Radix UI** for accessible components
- **Supabase** for auth and data storage
- **TanStack Query** for data fetching
- **MediaPipe** for hand tracking
- **Tailwind CSS** for styling

## What I Learned

MediaPipe in the browser is surprisingly capable. The biggest challenge was mapping 2D camera coordinates to a 3D fretboard model — perspective makes it tricky.
