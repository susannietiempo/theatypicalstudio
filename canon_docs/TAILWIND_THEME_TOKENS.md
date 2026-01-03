# TAILWIND_THEME_TOKENS.md
**Design Tokens (Source of Truth) — The Atypical Studio**

This file defines the Tailwind token system that all AI-generated UI must use.
No ad-hoc hex colors, font stacks, spacing, or shadow values outside these tokens.

Use with:
- `AI_PROMPT_SPEC.md`
- `COMPONENT_INVENTORY.md`
- `SITE_MAP_AND_PAGE_ROLES.md`

---

## 1) Color Tokens

### Brand Palette (Hard Locked)
- Deep Navy: `#1A2332`
- Slate Blue: `#4A5F7F`
- Warm Copper: `#C67B5C`
- Honey Gold: `#D4A574`
- Soft Sand: `#F5F3EF`

### Semantic Mapping (Use These In Components)
**Text**
- `text-primary` → Deep Navy (default body text on light)
- `text-secondary` → Slate Blue (supporting text)
- `text-inverse` → Soft Sand (text on dark)
- `text-accent` → Warm Copper (links / emphasis; sparingly)
- `text-muted` → Slate Blue with reduced opacity (subtle UI)

**Background**
- `bg-page` → Soft Sand
- `bg-surface` → white (or near-white surface on Soft Sand)
- `bg-dark` → Deep Navy
- `bg-accent` → Warm Copper (rare; small elements only)

**Borders / Dividers**
- `border-subtle` → Slate Blue @ low opacity
- `border-strong` → Slate Blue @ medium opacity

**States**
- `focus-ring` → Warm Copper (accessible ring on light + dark)
- `link` → Deep Navy (default) with hover to Warm Copper

### Accent Guardrails (Implementation Rule)
- Warm Copper: ≤ 10–15% of visible color
- Honey Gold: ≤ 5% of visible color
- ❌ Never use Honey Gold for body text
- ❌ Never combine Copper + Gold in the same component
- ❌ No gradients / glows / neon effects unless explicitly instructed

---

## 2) Typography Tokens

### Font Families (Hard Locked)
- `font-sans` → Inter
- `font-serif` → Merriweather

### Headline Rule
- Headlines and highlighted phrases must use **Inter Black (900)**.
- Body paragraphs use **Merriweather** (Regular/Medium).

### Type Scale (Recommended)
Use Tailwind’s default sizing, but apply consistent semantic classes:

**Headings (Inter Black)**
- `h1` → `text-4xl md:text-6xl font-black tracking-tight`
- `h2` → `text-3xl md:text-5xl font-black tracking-tight`
- `h3` → `text-2xl md:text-3xl font-black tracking-tight`
- `h4` → `text-xl md:text-2xl font-black tracking-tight`

**Body (Merriweather)**
- `body-lg` → `text-lg leading-relaxed font-normal`
- `body` → `text-base leading-relaxed font-normal`
- `body-sm` → `text-sm leading-relaxed font-normal`

**UI / Labels (Inter)**
- `ui` → `text-sm font-medium tracking-normal`
- `ui-strong` → `text-sm font-semibold`

### Line Length (Reading Comfort)
- Long-form text container should target: `max-w-prose` (or equivalent)
- Avoid very wide text blocks on desktop.

---

## 3) Spacing & Layout Tokens

### Container
- Page container target:
  - `max-w-6xl` (default marketing layout)
  - `px-4 sm:px-6 lg:px-8`
- Long-form container target:
  - `max-w-prose`

### Section Padding (Vertical Rhythm)
Use consistent section spacing; no ad-hoc values.

- Default section padding:
  - `py-16 md:py-24`
- Dense sections (rare):
  - `py-12 md:py-16`
- CTA band / hero (allowed to be larger):
  - `py-20 md:py-28`

### Grid Gaps
- Cards / pillars:
  - `gap-6 md:gap-8`
- Tight UI grids (rare):
  - `gap-4 md:gap-6`

---

## 4) Radius, Shadows, Borders

### Border Radius
- Default card radius:
  - `rounded-2xl`
- Buttons / inputs:
  - `rounded-xl`
- Small UI (chips, tags):
  - `rounded-lg`

### Shadows (Subtle, Editorial)
- Default card:
  - `shadow-sm`
- Hover lift:
  - `hover:shadow-md`
- Dark sections:
  - keep shadows minimal; prefer borders/opacity.

### Borders
- Default border:
  - `border border-subtle`
- Divider:
  - `border-t border-subtle`

---

## 5) Button Tokens

### Primary Button (CTA)
- Background: Warm Copper
- Text: Soft Sand (or white if needed)
- Hover: slightly darker copper OR subtle opacity shift
- Focus ring: Warm Copper ring with proper offset

Recommended classes:
- `inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold`
- `bg-[--c-accent] text-[--c-onAccent] hover:opacity-90`
- `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--c-ring] focus-visible:ring-offset-2`

### Secondary Button (Rare)
- Outline style using Slate border
- Text Deep Navy
- Used sparingly (not next to primary CTA unless explicitly requested)

---

## 6) Form Tokens

### Inputs
- Background: `bg-surface`
- Border: `border-subtle`
- Focus ring: Warm Copper
- Text: Deep Navy

Recommended:
- `w-full rounded-xl border border-subtle bg-white px-4 py-3 text-base`
- `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--c-ring] focus-visible:ring-offset-2`

---

## 7) Dark Mode Sections (Hybrid Layout Rule)
This site is **not** “dark mode toggle.” It is a **hybrid layout**.

For dark sections:
- Background: Deep Navy
- Primary text: Soft Sand
- Secondary text: Soft Sand @ reduced opacity
- Links: Soft Sand default, hover Warm Copper (sparingly)
- Borders: Slate Blue @ low opacity

---

## 8) Suggested Tailwind Implementation (Config-Level Tokens)

> Use CSS variables for semantic colors and reference them in Tailwind.
> This prevents drift and keeps generators from hardcoding hex values.

### CSS Variables (example)
Define in `globals.css`:

- `--c-bg: #F5F3EF`
- `--c-surface: #FFFFFF`
- `--c-text: #1A2332`
- `--c-text2: #4A5F7F`
- `--c-dark: #1A2332`
- `--c-accent: #C67B5C`
- `--c-gold: #D4A574` (restricted)
- `--c-border: rgba(74, 95, 127, 0.18)`
- `--c-border-strong: rgba(74, 95, 127, 0.32)`
- `--c-ring: #C67B5C`
- `--c-onAccent: #F5F3EF`

### Tailwind Theme Keys (example mapping)
- `colors.page` → `var(--c-bg)`
- `colors.surface` → `var(--c-surface)`
- `colors.primary` → `var(--c-text)`
- `colors.secondary` → `var(--c-text2)`
- `colors.dark` → `var(--c-dark)`
- `colors.accent` → `var(--c-accent)`
- `colors.border` → `var(--c-border)`
- `colors.borderStrong` → `var(--c-border-strong)`
- `colors.ring` → `var(--c-ring)`
- `colors.onAccent` → `var(--c-onAccent)`

---

## 9) Compliance Rules (AI Safety)
- ✅ Use semantic tokens (primary/secondary/accent/surface), not raw hex codes in components
- ✅ Inter Black for headings, Merriweather for body
- ✅ Consistent section padding and container widths
- ❌ No new colors
- ❌ No gradients/glows
- ❌ No additional font families
- ❌ No random spacing/shadow values outside the rules above

---

## Context Risk Protocol
If an implementation detail is missing (e.g., exact Tailwind config format), the generator must say:

**“Context risk: I’m missing X. Provide Y so I don’t guess.”**
