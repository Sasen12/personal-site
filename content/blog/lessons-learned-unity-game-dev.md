---
title: "Lessons Learned Making Games in Unity"
date: 2026-04-10
tags: ["Unity", "C#", "Game Development"]
---

I've been building games in Unity for a while now. Here are some things I wish I knew earlier.

## 1. Plan Your Asset Pipeline

Early on, I jumped straight into coding without thinking about assets. Big mistake. Set up your folder structure, naming conventions, and import settings before you start writing scripts.

## 2. Use ScriptableObjects

ScriptableObjects are incredibly powerful for game data. Instead of hardcoding values, use them for:

```csharp
[CreateAssetMenu(fileName = "EnemyConfig", menuName = "Game/Enemy Config")]
public class EnemyConfig : ScriptableObject {
  public float health;
  public float speed;
  public GameObject prefab;
}
```

## 3. Optimize Early

My first game (Echoes in the Static) ran fine in the editor but chugged on my MacBook. Draw calls, poly counts, and texture sizes matter. Use the profiler from day one.

## 4. Version Control for Unity

Unity projects don't play nicely with git by default. Set up a proper .gitignore, use Git LFS for large assets, and consider Unity Version Control.

## 5. Multiplayer Is Hard

My second game (Hanging By A Thread) used the Blocks framework for multiplayer. Network synchronization, lag compensation, and state management add a whole new layer of complexity.
