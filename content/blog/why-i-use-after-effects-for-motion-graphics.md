---
title: "Why I Use After Effects for Motion Graphics"
date: 2025-02-15
tags: ["After Effects", "Motion Graphics", "Video Editing"]
---

I edit a lot of video content. For standard cuts and colour work, I'm in Premiere Pro. But when I need motion graphics — animated titles, lower thirds, data visualisations — I go straight to After Effects.

## Expression-Driven Animation

AE's expression engine (based on JavaScript) lets me rig complex animations without hand-keyframing everything.

```javascript
// Wobble expression on rotation
freq = 2;
amp = 5;
decay = 3;
rot = amp * Math.sin(freq * time * 2 * Math.PI) / Math.exp(decay * time);
value + rot
```

One expression applied to a rotation property gives you a natural bounce effect that would take dozens of keyframes to replicate manually.

## The Render Engine Shift

When I upgraded to After Effects 2025, the new render engine made a real difference. Preview rendering is noticeably faster, especially with complex 3D layers and particle systems. Multiprocessing actually works now across my M-chip MacBook.

## My Typical Workflow

1. **Storyboard** in Illustrator or even just pen and paper
2. **Build assets** in Illustrator — vectors, icons, text layouts
3. **Import into AE** with `Create Shapes from Vector Layer`
4. **Animate** with a mix of keyframes, expressions, and easing curves
5. **Render** to ProRes 4444 for compositing in Premiere

## What I'm Still Learning

Motion design is a deep rabbit hole. I'm currently working on better easing curves (bouncing and overshoot feels) and 3D camera moves in the new AE 3D space.

If you're getting into motion graphics, start with the graph editor — it's the single most powerful tool in AE for making things look professional.
