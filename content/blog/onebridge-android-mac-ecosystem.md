---
title: "OneBridge: Building an Encrypted Local Network Bridge Between Android and macOS"
date: 2026-05-20
tags: ["Kotlin", "Swift", "Security", "Networking"]
---

I use both an Android phone and a MacBook daily. I wanted seamless clipboard sync, file transfer, and notification mirroring between them — without relying on cloud services.

## The Problem

KDE Connect exists, but it's flaky on macOS. Apple's ecosystem only works with Apple devices. I wanted something I fully controlled.

## The Solution: OneBridge

OneBridge is a local network bridge with:

- **QR code pairing** — scan to connect, no IP typing
- **P-256 ECDH key exchange** — secure channel establishment
- **AES-256-GCM encryption** — all traffic encrypted
- **Clipboard sync** — copy on one device, paste on the other
- **File transfer** — drag and drop across devices
- **Notification mirroring** — Android notifications on your Mac
- **Remote trackpad** — control your Mac from your phone

## Architecture

```
┌─────────────────┐          ┌─────────────────┐
│   Android App   │          │   macOS App      │
│  (Kotlin/Compose)│   mDNS   │  (SwiftUI)       │
│                 │◄─────────►│                  │
│  ECDH + AES-256 │   TCP    │  ECDH + AES-256  │
└─────────────────┘          └─────────────────┘
```

The pairing flow uses ECDH to derive a shared secret, then all subsequent messages are encrypted with AES-256-GCM. Discovery uses mDNS/Bonjour.

## What I'd Do Differently

I'd add WebRTC support for peer-to-peer communication that works even when devices are on different subnets.
