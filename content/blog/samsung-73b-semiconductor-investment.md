---
title: "$73 Billion on Chips? Samsung Isn't Messing Around"
date: 2026-04-02
tags: ["Samsung", "Semiconductors", "AI", "Hardware"]
image: /images/blog/samsung.svg
---

Samsung announced a $73 billion investment in semiconductor capex and R&D through 2028. That's not a typo. $73 billion. Let me break down why this matters more than any phone launch this year.

## Where the Money Is Going

The breakdown as I understand it:

| Area | Allocation |
|------|-----------|
| HBM & Advanced Packaging | ~$28B |
| 2nm/1.4nm Foundry | ~$22B |
| AI Chip Design | ~$13B |
| Memory R&D (DRAM/NAND) | ~$10B |

The headline number is impressive, but the **advanced packaging** line is the one I'm watching. In the AI era, chip performance is increasingly limited by how you connect components, not just how small you can etch transistors.

## Catching TSMC

Samsung's foundry has been stuck in a weird spot — technically competitive with TSMC, but struggling to win major customers. Apple, NVIDIA, AMD all went with TSMC for their flagship chips. $22B on next-gen nodes (2nm and 1.4nm) is Samsung saying, "We're not settling for second place."

## Why I Care as a Developer

If Samsung pulls this off, it means:

- **Cheaper AI inference** — on-device models get faster and less power-hungry
- **Better Galaxy chips** — Exynos might actually rival Snapdragon again
- **More competition** — TSMC monopoly is bad for everyone long-term

```python
# Simple napkin math on impact
old_hbm_bandwidth = 819  # GB/s (HBM3)
new_hbm_bandwidth = 1200 # GB/s (HBM4 target)
speedup = (new_hbm_bandwidth - old_hbm_bandwidth) / old_hbm_bandwidth * 100
print(f"{speedup:.0f}% bandwidth improvement incoming")
```

$73B is a bet-the-company move. If it pays off, Samsung cements itself as the infrastructure layer of the AI age. If it doesn't… well, I'm glad I'm not the CFO.
