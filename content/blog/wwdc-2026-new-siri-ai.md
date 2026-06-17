---
title: "Siri Finally Woke Up — WWDC 2026 Keynote Reaction"
date: 2026-06-09
tags: ["Apple", "AI", "WWDC", "Siri"]
image: /images/blog/apple.jpg
---

I'll be honest — I've been burned by Siri promises before. Every WWDC for the past half decade, Tim Cook walks on stage, plays the "we hear you" card, and shows a slightly less embarrassing Siri demo. But this year? This year felt different.

The new Siri AI they showed at WWDC 2026 genuinely made me lean forward. On-device inference that actually understands context beyond the last request? They demoed a workflow where I could say "find that email from Sarah about the budget, forward it to Mike, and set a reminder to follow up next Tuesday" — and it just… did it. No hand-holding. No "sorry, I can't do that here."

## What Changed

The big architectural shift is the on-device LLM layer. Apple's been quietly building their own foundation models, and it shows. Response latency was shockingly low in the demo — we're talking sub-second for complex multi-step actions. They're running a quantized 7B parameter model on the M5 Ultra and A19 Pro chips using a unified memory architecture that keeps the entire model in RAM.

What impressed me most wasn't the parlor tricks. It was Siri actually integrating with third-party apps through a new Intents SDK. I can finally say "order my usual from DoorDash" and have it just work. The privacy story is strong too — everything processes on-device. Apple Intelligence requests that hit the cloud go through Private Cloud Compute, and they're publishing transparency logs so security researchers can verify.

## My Take

I think Apple finally did it. The combination of custom silicon, on-device LLMs, and their privacy stance is a legitimate moat. Google and OpenAI can throw more compute at the problem, but they can't offer "your data never leaves your phone" while doing it. I've already got the developer beta installing. Let's see if it holds up.

[–] Sasen
