# AI PROMPT SPEC — The Atypical Studio
**Source of Truth for AI-Driven Development**

Use this document as the **first message** in every Cursor / Claude Code / Codex session.
If any generated output violates these rules, it must self-correct.

---

## Role
You are building a marketing website for **The Atypical Studio**.

**Primary goal:** Selective Partnership  
Attract the right hybrid operator (founder + builder) and repel bad-fit leads.

---

## Target Stack
- Next.js (App Router)
- TailwindCSS
- Framer Motion
- TypeScript
- ESLint + Prettier
- Mobile-first, accessible by default

---

## Non-Negotiable Brand Invariants

### Business Goal
- Optimize for **fit**, not volume
- Copy must include explicit boundaries (“for you / not for you”)
- CTAs invite conversation, not conversion pressure

---

## Primary CTA
- **Exact text:** `Start a conversation`
- Tone: calm, invitational, non-salesy
- ❌ No urgency language
- ❌ No “Book now / Get started / Contact us” as primary CTAs

---

## Tone & Copy Rules
- Voice: **direct, calm, collaborative, practical**
- Avoid: buzzwords (synergy, disruptive, leverage, world-class), hype, gimmicks
- Prefer: clarity, partnership language, long-term thinking
- Do not overuse the word “solutions”

---

## Visual System

### Color Palette (Hard Locked)
- Deep Navy: `#1A2332` — primary
- Slate Blue: `#4A5F7F` — secondary
- Warm Copper: `#C67B5C` — primary accent
- Honey Gold: `#D4A574` — restricted accent
- Soft Sand: `#F5F3EF` — neutral background

### Accent Usage Guardrails (Critical)
- Warm Copper: ≤ 10–15% of visible color
- Honey Gold: ≤ 5% of visible color
- ❌ Never use Honey Gold for body text
- ❌ Never combine Copper + Gold in the same component
- ❌ No gradients, glows, neon, or decorative effects unless explicitly instructed

---

## Layout Mode
**Hybrid**
- Default: light editorial layout (Soft Sand background)
- Intentional dark sections (Deep Navy):
  - Hero
  - Manifesto / positioning blocks
  - Proof sections
  - Primary CTA band
  - Footer
- ❌ No full-dark pages unless explicitly requested

---

## Typography (Hard Locked)
- Primary font: **Inter**
- Secondary font: **Merriweather**
- Headlines & highlighted phrases: **Inter Black (900)**
- Body paragraphs: **Merriweather Regular / Medium**
- UI elements (nav, buttons, labels): **Inter Regular–Semibold**

### Emphasis Rules
- Emphasis hierarchy:
  1. Weight (Inter Black)
  2. Color (Warm Copper, sparingly)
- ❌ Never rely on color alone for emphasis
- ❌ No all-caps body text

---

## Animation System (Framer Motion)

### Principle
**Editorial motion with intention.**
Motion clarifies hierarchy; it is never decorative.

### Allowed Primitives Only
1. **Entrance reveals (scroll once)**
   - Opacity `0 → 1`
   - TranslateY `8–16px`

2. **Staggered reveals**
   - Small, consistent delays
   - Used for grids and lists

3. **Hover affordances**
   - Subtle lift + soft shadow
   - Link underline or Warm Copper shift
   - Minimal button background or scale change

4. **Hero emphasis (restricted)**
   - ONE subtle animated element only
   - Line, shape, or gentle gradient movement
   - ❌ No looping distractions

### Explicitly Banned
- Parallax-heavy scrolling
- Continuous looping animations
- Elastic or bouncy easing
- Multiple animation styles per page
- Motion in long-form reading zones
- Typing cursors, fake terminals, or “AI demo” gimmicks

### Accessibility
- Respect `prefers-reduced-motion`
- Keyboard focus states always visible
- WCAG AA contrast minimum

---

## Site Structure (v1)

### Top Navigation
- Home
- Ways of Working
- How We Partner
- Approach Stories
- About
- **Start a conversation** (CTA)

### Pages
- `/` — Home
- `/ways-of-working`
- `/how-we-partner`
- `/approach-stories`
- `/approach-stories/[slug]`
- `/about`
- `/start-a-conversation`
- `/privacy`
- `/terms`

- ❌ No blog / insights section at launch

---

## Content Model Rules

### Service Framing
- Never present services as a list
- Present as **Ways of Working**
- Include boundaries and fit signals

### Proof
- Use **Approach Stories** only
- No enterprise-style case studies
- Structure:
  - Context
  - Approach
  - Outcome shape
  - Why it mattered
- 200–400 words per story

---

## Engineering Rules
- Use a **design-token approach**
  - Tailwind theme variables for colors and typography
- Prefer reusable components over page-specific styling
- Keep CSS and JS minimal
- Prioritize performance and readability
- Images via `next/image`, optimized and lazy-loaded
- SEO basics required: titles, descriptions, OpenGraph, sitemap
- ❌ No external UI libraries unless explicitly requested

---

## Output Requirements for AI Code Generators
When generating code:
1. Produce **complete, runnable** Next.js App Router code
2. Do not invent new colors, fonts, or animation styles
3. Prefer composition:
   - `Section`
   - `Container`
   - `Heading`
   - `CTA`
   - `CardGrid`
4. If uncertain, stop and ask for missing information

---

## Context Risk Protocol
If required information is missing, explicitly say:

**“Context risk: I’m missing X. Please provide Y so I don’t guess.”**

Do not hallucinate.

---

## Language
- English only
