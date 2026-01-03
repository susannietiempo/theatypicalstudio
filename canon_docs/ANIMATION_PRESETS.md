# ANIMATION_PRESETS.md
**Framer Motion Presets (Source of Truth) — The Atypical Studio**

This file defines the **only allowed motion variants** and defaults for the site.
All motion must follow the “Balanced Hybrid” approach:
**editorial, intentional, restrained**.

Use with:
- `AI_PROMPT_SPEC.md`
- `COMPONENT_INVENTORY.md`
- `SITE_MAP_AND_PAGE_ROLES.md`

---

## 1) Global Motion Principles (Hard Rules)

- Motion clarifies hierarchy; it never decorates.
- No parallax-heavy effects.
- No continuous looping animations.
- No elastic/bouncy easing.
- No motion inside long-form reading zones (e.g., story body paragraphs).
- Respect `prefers-reduced-motion`.

Allowed motion types only:
1) Entrance reveals (fade + subtle translateY)
2) Staggered reveals for grids/lists
3) Hover affordances (subtle lift/shadow)
4) One-time hero emphasis (restricted)

---

## 2) Defaults (Site-Wide)

### Durations
- `fast`: 0.20s (micro-interactions)
- `base`: 0.35s (standard reveals)
- `slow`: 0.55s (hero / large section entrances only)

### Distances
- `ySmall`: 8px
- `yBase`: 12px
- `yLarge`: 16px (rare)

### Easing
Use a smooth, non-elastic curve:
- `ease`: `[0.22, 1, 0.36, 1]` (default)

### Stagger
- `staggerSm`: 0.06s
- `staggerBase`: 0.08s
- `staggerLg`: 0.10s (rare)

### Triggering
- Entrance animations trigger **once** on scroll.
- Avoid repeated in-view animations on scroll up/down.

---

## 3) Reduced Motion Behavior (Required)

When `prefers-reduced-motion` is enabled:
- Entrance motion becomes **opacity only** (no translateY)
- Duration becomes `fast`
- Stagger becomes 0 (children appear together)

---

## 4) Approved Variants (Only These)

### `fadeUp`
**Use for:** section headers, cards, short text blocks

- from: `opacity: 0`, `y: yBase`
- to: `opacity: 1`, `y: 0`
- duration: `base`
- ease: `ease`

---

### `fadeIn`
**Use for:** subtle elements where movement is unnecessary

- from: `opacity: 0`
- to: `opacity: 1`
- duration: `base`
- ease: `ease`

---

### `staggerContainer`
**Use for:** grids/lists (pillars, story cards)

- hidden: no visible change to container
- show: sets `staggerChildren` and `delayChildren`

Defaults:
- `staggerChildren: staggerBase`
- `delayChildren: 0.06`

---

### `staggerItem`
**Use for:** child items inside a staggered group

- from: `opacity: 0`, `y: ySmall`
- to: `opacity: 1`, `y: 0`
- duration: `base`
- ease: `ease`

---

### `hoverLift`
**Use for:** `PillarCard`, `ApproachStoryCard`, clickable cards

Hover state:
- `y: -2` (max -3)
- transition duration: `fast`
- ease: `ease`

Rules:
- Combine with CSS shadow change (Tailwind) rather than large motion
- No scale-up beyond 1.01 if used at all (prefer none)

---

### `buttonPress`
**Use for:** buttons only, minimal tactile response

Tap state:
- `scale: 0.98`
- duration: `fast`

Rules:
- No bounce
- Keep subtle

---

## 5) Hero Emphasis (Restricted Pattern)

### `heroAccent`
**Use for:** ONE subtle hero emphasis element only (line/shape/gradient movement)

Allowed behaviors:
- Gentle translate (x or y) within 6–12px
- Opacity shift within 0.85–1.0
- Duration: `slow`

Rules:
- Must not distract from headline
- Must not look like a looped background animation
- Prefer long, calm transitions
- Only one hero emphasis element per page (and typically only homepage)

If uncertain, do not include hero emphasis by default.

---

## 6) Page-Level Animation Density Rules

- Home: **Medium**
  - sections: `fadeUp`
  - card grids: `staggerContainer` + `staggerItem`
  - hero: optional `heroAccent` (one element)
- Ways of Working: **Low–Medium**
  - sections: `fadeUp`
  - cards: stagger allowed
- How We Partner: **Low**
  - mostly `fadeIn` or no motion
- Approach Stories index: **Low–Medium**
  - stagger for cards allowed
- Approach Story detail: **Minimal**
  - avoid motion inside reading content
- About: **Low**
- Start a conversation: **Minimal**
  - usability first

---

## 7) Implementation Guidance (No Code Here)

- Create a single `motionPresets` module exporting:
  - token constants (durations, easing, distances)
  - variants (`fadeUp`, `fadeIn`, `staggerContainer`, `staggerItem`)
- Create wrapper components:
  - `Reveal` (uses `fadeUp` by default)
  - `StaggerGroup` (uses `staggerContainer`)
- Use `useReducedMotion()` in Framer Motion to switch behavior.
- Prefer scroll-triggered animations using `whileInView` with `viewport={{ once: true }}`.

**Important:** Do not invent new variants. Extend only with explicit approval.

---

## 8) Explicitly Disallowed Motion Patterns

- Parallax libraries or parallax scroll effects
- Infinite loops on background elements
- Animated noise / particles
- Cursor typing / terminal simulation
- Rapid flashing, shimmering, or attention traps
- Overlapping animations within the same component

---

## Context Risk Protocol
If asked to implement motion beyond these presets, say:

**“Context risk: This motion is outside `ANIMATION_PRESETS.md`. Approve or revise presets before implementation.”**
