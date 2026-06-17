---
title: "Vera Rubin: NVIDIA's Next Architectural Giant"
date: 2026-06-05
tags: ["NVIDIA", "Hardware", "AI", "GPUs"]
image: /images/blog/nvidia.jpg
---

## The King is Dead, Long Live the King

Jensen just dropped the Vera Rubin architecture at GTC 2026, and I'm still processing. Every two years NVIDIA pulls off this magic trick where they make the previous generation look like a warm-up act. Vera Rubin isn't just a refresh — it's a full platform play.

The superchip pairs the Vera CPU with a Rubin GPU over NVLink 6, delivering what they claim is a 3x generational lift in FP8 AI performance. That's insane on paper, but what gets me is the system-level thinking. The switched fabric connecting GPUs in the rack means we're no longer bottlenecked by CPU-to-GPU transfers for the largest LLM training runs.

What excites me most is the memory subsystem. HBM4e stacking with 12-high dies gives something like 360 GB/s of bandwidth per stack. For anyone running 70B+ parameter models, this changes the math on training time and inference latency.

The cynic in me knows the pricing will be astronomical. But the engineer in me can't help grinning at what this means for models that currently take weeks to train. If you're building foundation models, Vera Rubin is the answer to "how do we make this practical?"

I just hope third-party liquid cooling ecosystems catch up. These things are going to run hot.
