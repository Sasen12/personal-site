---
title: "Android 17 Hits Galaxy Devices — Here's What Actually Changed"
date: 2026-05-12
tags: ["Samsung", "Android", "Software"]
image: /images/blog/samsung.svg
---

Android 17 started rolling out to Galaxy devices this week, and my S25 Ultra got the OTA two days ago. I've been running it since. Here's the unfiltered take.

## The Good

**Desktop Mode 2.0** is finally here and it's not a gimmick. Samsung DeX was already solid, but Android 17 layers in true window management — resize any app, drag between virtual desktops, and it actually remembers your layout after disconnecting. I plugged into a monitor at a coffee shop and felt like I was using a real workstation.

**Notification Stacking** — Google finally fixed the notification shade. Grouped notifications are collapsible by default, and you can long-press to expand without jumping into settings. It's one of those "why did this take so long?" features.

**Battery Health API** — As someone who holds onto phones for 4+ years, seeing actual cycle count and battery degradation metrics in Settings is huge. No more guessing when to replace.

## The Bad

One UI 8 (Samsung's skin on top) is *fine*, but they keep piling on features nobody asked for. There are now **three** separate AI assistants on this phone: Bixby, Google Gemini, and the new "Samsung AI Agent." Pick a lane.

## The Ugly

The update took 45 minutes and rebooted four times. And I'm still finding deprecated APIs in my own apps — `Notification.setLatestEventInfo()` finally died, which broke exactly one of my side projects.

```java
// Android 17 removed this — fair, it was deprecated in API 26
// Notification notification = new Notification.Builder(context)
//    .setLatestEventInfo(title, content, pendingIntent)
//    .build();

// New way — cleaner anyway
val notification = Notification.Builder(context, CHANNEL_ID)
    .setContentTitle(title)
    .setContentText(content)
    .setContentIntent(pendingIntent)
    .build()
```

## Bottom Line

Android 17 is a solid iterative update. Nothing revolutionary, but the desktop mode alone makes it worth the upgrade. Just budget an hour for the install.
