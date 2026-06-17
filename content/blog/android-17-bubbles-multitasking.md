---
title: "Android 17's Bubbles — Finally, Chat Heads for Everything"
date: 2026-06-12
tags: ["Google", "Android"]
image: https://picsum.photos/seed/android-17-bubbles-multitasking/1200/630
---

Android 17's headline feature is system-wide Bubbles, and after using the beta for a month, I can confidently say: this is the best multitasking improvement since split-screen.

## How It Works

Any app can now render itself inside a floating, draggable bubble. Notifications can expand into bubbles. A gesture from the corner opens a bubble tray. It's essentially what Facebook Messenger's Chat Heads were, but for every app on the system.

## What I Use It For

- **Calculator** that floats over my notes
- **Slack** threads I want to monitor while coding
- **Google Maps** in bubble mode while walking (mini turn-by-turn)
- **Timer/stopwatch** visible without switching apps

## The Developer Side

There are new Jetpack APIs for this, and they're refreshingly simple:

```kotlin
// Opt into bubbles with minimal boilerplate
class BubbleActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableBubbleMode(BubbleConfig {
            size = BubbleSize.DYNAMIC
            persistOnDismiss = true
        })
    }
}
```

## My Take

Apple users will look at this and call it chaos. They're not wrong — there's a legitimate risk of screen clutter. But Android has always trusted users to manage their own UI. Bubbles are opt-in per app, and you can disable them globally.

This is one of those features that sounds gimmicky until you try it, and then you can't go back. I genuinely use my phone differently now. The barrier between "apps" and "tasks" is blurring, and that's exactly where mobile OS design should be heading.
