---
title: "Screen Reactions Is Silly, Overengineered, and I Kind of Love It"
date: 2026-05-22
tags: ["Android", "Mobile", "UX"]
image: https://picsum.photos/seed/android-screen-reactions-feature/1200/630
---

When I first read about Android 17's Screen Reactions feature — overlaying a floating selfie camera window onto your screen recording — I laughed. It felt like a TikTok feature grafted onto an OS. After using it for a few days, I was right. But I also don't want to go back.

The implementation is surprisingly polished. When you start a screen recording, there's a new floating bubble. Tap it, and your front camera feed becomes a draggable, resizable PiP overlay on the recording itself. You can crop it to a circle, a rounded rect, or a squircle (because of course). The best part? It uses the same computational audio processing as normal calls, so your voice-over doesn't sound like you're recording in a bathroom.

Here's where it gets interesting for developers: the API is exposed through `MediaProjection` with a new `ScreenReactionConfig` builder. It took me about 20 minutes to integrate it into a quick PoC app:

```kotlin
val reactionConfig = ScreenReactionConfig.Builder()
    .setPosition(ScreenReactionPosition.BOTTOM_RIGHT)
    .setShape(ScreenReactionShape.CIRCLE)
    .setSize(0.25f) // 25% of recording width
    .build()
mediaProjection.createScreenCaptureIntent(reactionConfig)
```

Is this something I'll use daily? Probably not. But for tutorial creators, streamers, or anyone filing bug reports with video evidence, it's genuinely useful. Being able to narrate a bug while keeping your face on screen without post-production editing saves real time.

The privacy implications are worth noting too — apps need explicit runtime permission for camera overlay during recording, and the system shows a persistent orange chip whenever the reaction overlay is active. That's the right call.

Screen Reactions is the kind of feature I'd normally roll my eyes at. But Google shipped it with enough polish and developer flexibility that I'm actually here for it.
