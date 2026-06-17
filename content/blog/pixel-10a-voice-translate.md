---
title: "Pixel 10a Gets Voice Translate — The Best Flagship Feature Google Refuses to Keep Exclusive"
date: 2026-05-30
tags: ["Android", "Pixel", "AI"]
image: /images/blog/android.svg
---

The Pixel 10a launched with Voice Translate, the real-time conversation translation feature that debuted on the Pixel 10 series. And honestly? This is exactly the right call.

Voice Translate isn't new — it shipped on the Pixel 10 Pro last fall. What's surprising is that Google brought it to the 10a without any hardware compromises. The 10a uses the same Tensor G6 chip (binned, sure, but the NPU is untouched). That means real-time bidirectional translation with on-device processing, no latency hit, and the same ~200ms translation delay you get on the $1,000 flagship.

I tested this at a local ramen spot where the chef mostly speaks Mandarin. I handed him my 10a, tapped the mic icon, and we had a stilted but functional conversation about broth ingredients for about three minutes. It's not magic — there are awkward pauses and the occasional mistranslation of domain-specific terms. But it worked well enough that we both laughed and kept going.

What impresses me as a developer is how Google architected this. The translation pipeline runs entirely on the EdgeTPU on the Tensor G6:

```
Audio → Speech Recognition (on-device) → LLM Translation → TTS
                              ↓
                    All processed on NPU
                  No network calls required
```

The 10a proves that the "a" series doesn't have to mean "crippled AI." Google's strategy seems clear: develop features on the flagship, optimize the inference pipeline for a generation, then drop them into the mid-range once the cost curve bends. It's the same playbook Apple used with the Neural Engine, and it works.

My only gripe? The speaker on the 10a is noticeably quieter than the 10 Pro, so Voice Translate in noisy environments is rough. But for $499, getting flagship-grade on-device translation is genuinely impressive.

This is the kind of feature that makes me excited about on-device AI — it's practical, private, and actually useful.
