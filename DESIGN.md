# The Quiet Press — Design Manifesto & System Specification

> **A Computational Editorial Design Philosophy for Systems, AI, and Data Engineering.**  
> Inspired by the restrained, scholarly, and humanistic aesthetics of Anthropic.

---

## 1. Core Philosophy: "The Quiet Press"

Most tech companies design interfaces like futuristic video games or glowing dashboards: neon gradients, hyper-saturated borders, and aggressive micro-animations. 

**The Quiet Press takes the opposite stance.** It treats every digital artifact—whether a research memo, a database query console, a model inference playground, or a mobile client—as an **intentional, printed publication**.

### The 4 Non-Negotiable Tenets

1. **Monochrome Restraint Over Hype:**
   90% of visual weight belongs to two foundational surfaces: **Ivory Cream (`#faf9f5`)** and **Slate Ink (`#141413`)**. Visual noise is eliminated so that data structures, architectural schemas, and research findings speak with clarity.

2. **The Printed Essay Stance:**
   Long-form reading is prioritized. Prose uses open line-heights ($1.65–1.75$), wide reading margins, and distinguished literary serif typography. It signals contemplative, high-rigor engineering rather than hasty prototyping.

3. **Sky Blue Accents, Never Neon:**
   The primary visual anchor is **Sky Blue (`#0284c7` / `#38bdf8`)**. Secondary accents are derived from natural pigments: **Sage Green (`#788c5d`)** for nominal states and **Slate Blue (`#6a9bcc`)** for structural metadata. Bright neon pinks, cyans, and purples are forbidden.

4. **Universal Cross-Subdomain Continuity:**
   Every app on every subdomain (`models.*`, `db.*`, `notes.*`, `tools.*`) shares the same **Ecosystem Anchor Bar**, the same **2-Family Typography Standard**, and identical border-radius rhythm. Users immediately know they are inside your unified personal laboratory.

---

## 2. Design Tokens Specification

### A. Color Palette

#### Base Canvas & Ink
| Token Name | Hex Code | Role & Usage |
|---|---|---|
| `canvas-ivory` | `#faf9f5` | Daytime primary background canvas (warm paper tone, reduces eye fatigue). |
| `canvas-ivory-alt` | `#f0ede4` | Daytime secondary card surface, code block background, table stripes. |
| `ink-slate` | `#141413` | Nighttime primary background canvas & Daytime primary typography color. |
| `ink-slate-alt` | `#1c1b19` | Nighttime card surface, elevated modals, code block containers. |
| `ink-slate-subtle` | `#2b2a26` | Nighttime secondary surface & dark borders. |

#### Accents
| Token Name | Hex Code | Role & Usage |
|---|---|---|
| `accent-sky` | `#0284c7` | **Primary Brand Signature.** Interactive buttons, active tabs, primary callouts, logo mark. (Night: `#38bdf8`) |
| `accent-sky-hover` | `#0369a1` | Hover & pressed states for primary buttons and links. (Night: `#7dd3fc`) |
| `accent-sky-subtle` | `rgba(2, 132, 199, 0.12)` | Subtle badges, tag backgrounds, focused outline rings. |
| `accent-sage` | `#788c5d` | Success signals, healthy cluster nodes, converged loss metrics, 200 OK. |
| `accent-blue` | `#6a9bcc` | Informational links, secondary chips, vector dimension tags. |
| `accent-amber` | `#d4973b` | Warning states, high VRAM usage, cache invalidation alerts. |
| `accent-crimson` | `#c2534a` | Error states, failed transactions, broken model checkpoints. |

#### Neutrals & Dividers
| Token Name | Hex Code | Role & Usage |
|---|---|---|
| `border-light` | `#e8e6dc` | 1px hairline borders for cards and tables in light mode. |
| `border-dark` | `#2e2d2a` | 1px hairline borders for cards and tables in dark mode. |
| `text-muted-light` | `#737168` | Secondary captions, timestamps, and column labels in light mode. |
| `text-muted-dark` | `#b0aea5` | Secondary captions, timestamps, and column labels in dark mode. |

---

### B. Typography Trinity

Only three typographic roles exist. Never introduce a fourth font family.

| Role | Preferred Font | Open-Source / Web Alternative | Usage |
|---|---|---|---|
| **Editorial Serif** | *Tiempos Text* / *Anthropic Serif* | **Newsreader** (Google Fonts) or **Source Serif 4** | Article titles, essay body copy, quotes, abstract summaries, brand marks. |
| **Functional Sans** | *Styrene B* / *Söhne* | **Inter** or **Public Sans** | Navigation bars, action buttons, table headers, form inputs, modal dialogs. |
| **Data Monospace** | *Anthropic Mono* | **JetBrains Mono** or **Fira Code** | SQL queries, tensor dimensions, latency readouts, CLI logs, math variables. |

#### Typographic Hierarchy Scale
* **Display / Hero:** $36\text{px} - 48\text{px}$, Serif, font-weight 400 or 500, line-height $1.15$, letter-spacing $-0.02\text{em}$.
* **Section Heading:** $24\text{px} - 30\text{px}$, Serif, font-weight 500, line-height $1.25$.
* **Component Title:** $16\text{px} - 18\text{px}$, Sans or Serif, font-weight 600, line-height $1.4$.
* **Body (Prose):** $17\text{px} - 19\text{px}$, Serif, font-weight 400, line-height $1.7$, max-width $680\text{px}$.
* **UI Controls & Badges:** $12\text{px} - 14\text{px}$, Sans, font-weight 500.
* **Code & Telemetry Data:** $12\text{px} - 13\text{px}$, Monospace, line-height $1.55$.

---

### C. Shape, Rhythm & Elevation

1. **Border Radius Scale:**
   * `sm` ($4\text{px}$): Monospace code chips, keyboard badges (`⌘K`), tag pills.
   * `md` ($8\text{px}$): Action buttons, input fields, dropdown menus.
   * `xl` ($12\text{px} - 16\text{px}$): Metric cards, research boxes, code containers.
   * `2xl` ($20\text{px}$): Outer application frames and large modal dialogs.
   * *Avoid fully circular `rounded-full` buttons for primary UI.* Keep buttons gently rectangular (`rounded-lg`).

2. **Depth & Shadows:**
   * Never use heavy, colored, or diffused drop shadows.
   * Rely on **1px hairline borders** (`border-light` / `border-dark`) for separation.
   * Use an ultra-subtle ambient shadow for floating elements:  
     `box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)`.

3. **Spacing Rhythm:**
   * Built strictly on an **$8\text{px}$ base grid** ($4, 8, 12, 16, 24, 32, 48, 64\text{px}$).

---

## 3. Subdomain Ecosystem Architecture

All subdomains must implement the shared **Ecosystem Anchor Bar** across the top:

```
[ ✸ Karamali // Systems & AI ]  /  [ models.karamali.org ▾ ]         [ research ]  [ db ]  [ api ]  [ ☀️/🌙 ]
```

* **Left Anchor:** Your persistent personal monogram/symbol (`✸` sunburst or custom glyph) linking directly back to the root apex domain (`https://karamali.org`).
* **Subdomain Indicator:** A subtle rounded pill indicating the active subdomain (`models`, `db`, `research`, `cv`, `tools`). Clicking it reveals a dropdown of all running subdomains.
* **Right Group:** Direct cross-links to sibling subdomains and the universal Light/Dark theme toggle.
