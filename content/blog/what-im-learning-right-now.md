---
title: "What I'm Learning Right Now"
date: 2026-03-20
tags: ["AI", "Unity", "Voice Agents", "Learning"]
---

Every few months I pick up something new. Here's what I'm diving into right now.

## AI Voice Agents

I've been building with voice APIs — OpenAI's Realtime API, ElevenLabs for TTS, and Deepgram for transcription. The latency has dropped enough that voice-first interfaces actually feel natural now.

The killer use case I'm exploring: hands-free coding assistants that you can talk to while working in Unity or the terminal.

## Unity DOTS

Unity's Data-Oriented Tech Stack (DOTS) is still evolving, but the performance gains are real. I'm rebuilding parts of my current game project with entities and jobs to handle more enemies on screen.

```csharp
var job = new MovementJob {
    deltaTime = SystemAPI.Time.DeltaTime,
    translationTypeHandle = SystemAPI.GetComponentTypeHandle<LocalTransform>(),
}.ScheduleParallel(input.Deps)
```

It's a different way of thinking — data-oriented instead of object-oriented — but the results speak for themselves.

## Better UI/UX Design

I've been reading Refactoring UI and studying how good SaaS apps handle onboarding, error states, and empty states. It's easy to ignore design when you're focused on backend logic, but the best apps are the ones that feel invisible.

## What's Next

After voice agents, I want to dig into WebGPU for browser-based rendering and explore local-first app architecture with CRDTs (like what Linear uses).

If you're learning something interesting right now, send me a message — I'm always looking for new things to explore.
