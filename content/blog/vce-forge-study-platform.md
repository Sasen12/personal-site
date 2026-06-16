---
title: "Building VCE Forge: A Study Platform for Year 12 Students"
date: 2026-05-15
tags: ["React Native", "Expo", "OpenAI", "PostgreSQL", "Full-Stack"]
---

VCE Forge started as a personal project — I was a Year 12 student drowning in SACs, exams, and study notes, and I couldn't find an app that actually understood the VCE system.

## The Problem

Most study apps are generic. They don't know what a SAC is, they don't understand study designs, and they definitely can't generate practice questions that match your specific subject's curriculum. VCE students need something tailored to the Victorian system.

## The Solution

VCE Forge is a full-stack study platform built specifically for Australian Year 12 students. It's available on iOS, Android, and web.

### Key Features

- **AI Practice Questions** — generates realistic VCE-style questions using OpenAI, based on the actual VCAA study design documents for each subject
- **SAC & Exam Tracking** — log your SAC scores, see your progress, and estimate your ATAR with scaling data
- **Adaptive Study Plans** — the app plans your study sessions based on upcoming SACs and exams
- **Study Timer** — Pomodoro mode with session tracking and history
- **Gamification** — earn XP, maintain streaks, and unlock badges to stay motivated
- **Upload Support** — upload textbook PDFs and Obsidian notes so the AI can use them as context for generating questions
- **Chess Break Mode** — a quick chess game between study sessions (because you need a break sometimes)

## Tech Stack

The backend runs on **Node.js + Express** with **PostgreSQL** and **Prisma** for the database layer. Authentication uses JWT with SecureStore on mobile.

The frontend is built with **Expo** and **React Native Paper** for a native feel across platforms. State management is handled by **Zustand**. The web version is deployed on Netlify.

```typescript
// Example: AI question generation endpoint
app.post("/api/questions/generate", async (req, res) => {
  const { subject, topic, studyDesign } = req.body
  const prompt = `Generate a VCE-style ${subject} question about ${topic} based on: ${studyDesign}`
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  })
  res.json({ question: completion.choices[0].message.content })
})
```

## What I Learned

Building VCE Forge taught me more than any SAC ever did. I got deep into PostgreSQL schema design, JWT auth flows, OpenAI prompt engineering, and cross-platform deployment with Expo.

The hardest part wasn't the code — it was designing a UX that didn't overwhelm students. Study apps are notoriously stressful, so I focused on making everything feel motivating rather than punishing. The streak system, XP rewards, and even the chess breaks all serve that goal.

## Try It

VCE Forge is live at [vceforge.space](https://vceforge.space) and the source is on [GitHub](https://github.com/Sasen12/vce-study-tracker). If you're a VCE student, give it a shot.
