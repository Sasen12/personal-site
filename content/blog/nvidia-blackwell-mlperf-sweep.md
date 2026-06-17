---
title: "Blackwell Absolutely Wrecks MLPerf Training 6.0"
date: 2026-04-22
tags: ["NVIDIA", "AI", "Hardware", "GPUs"]
image: https://picsum.photos/seed/nvidia-blackwell-mlperf-sweep/1200/630
---

## Spoiler: NVIDIA Won. Again.

MLPerf Training 6.0 results dropped and Blackwell just... dominated. I mean, we all expected this. NVIDIA has swept every MLPerf since they started participating. But the margins this time are worth talking about.

In the LLM fine-tuning workload (Llama 3.2 70B), Blackwell B200 systems delivered a 4.2x speedup over Hopper H100 on a per-GPU basis. That's not incremental — that's a generation where the generation actually delivers on its promises. The secret sauce is the second-gen Transformer Engine with FP4 training support. Mixed-precision training just took another leap.

What stood out to me was the recommendation system benchmark. DLRM is notoriously hard to accelerate because it's memory-bound on the embedding tables. Blackwell's larger L2 cache and faster HBM3e memory bandwidth ate that workload alive. 2.8x improvement over Hopper.

The obvious caveat: MLPerf is a vendor-optimized benchmark. Every entrant tunes their stack heavily for these runs. But the consistency of NVIDIA's wins across every single workload category — from BERT to Stable Diffusion to LLM — tells a real story about the hardware's versatility.

The real winner here isn't the benchmark score. It's that anyone building an AI training cluster right now can look at these numbers and confidently spec Blackwell. The ROI math works. And for competitors trying to break into this market, the gap just got wider.
