---
title: "Apple + Google AI: Pragmatic Partnership or Identity Crisis?"
date: 2026-06-17
tags: ["Apple", "AI", "Google", "Partnership"]
image: /images/blog/apple.svg
---

The report landed yesterday: Apple is in late-stage talks with Google to license Gemini as the backend for complex Apple Intelligence queries that exceed what on-device models can handle. My immediate reaction was visceral disappointment. After all the talk about privacy-first AI and on-device intelligence, Apple might just white-label Google's models?

## The Practical Reality

Let me talk myself off the ledge. Apple's on-device models are genuinely good for the 90% of tasks most people do: summarizing, rewriting, generating basic images. But there's a long tail of complex queries — deep research synthesis, code generation across multiple files, creative writing — where even Apple's best 7B parameter model can't compete with Gemini Ultra or GPT-6.

The Private Cloud Compute architecture already routes some requests to Apple's own servers. If Apple simply adds Gemini as an additional routing destination for the hardest queries, the privacy story stays intact — your request goes through PCC, gets processed by Gemini in a trusted execution environment, and the data is discarded. No training on your conversations.

## What Bothers Me

Strategically, this feels like Apple admitting their foundation models aren't good enough. After a year of "Apple Intelligence is built different," licensing your competitor's crown jewel technology undercuts the narrative. It's also a massive data advantage for Google, even with privacy guarantees — Google gets to improve Gemini by observing the types of queries Apple users make, which is invaluable signal.

I think the right take is: this is pragmatism. Apple's models will improve over time. In the meantime, users get better AI capabilities than Apple could deliver alone. But it leaves a bad taste. I want Apple to *build* great AI, not rent it from their biggest platform competitor.

[–] Sasen
