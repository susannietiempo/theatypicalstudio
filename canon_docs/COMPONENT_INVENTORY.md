# COMPONENT INVENTORY — The Atypical Studio
**Approved UI Components for AI-Driven Development**

This document defines the **only components** that AI code generators (Cursor / Claude Code / Codex)
are allowed to create or compose when building the website.

If a component is not listed here, AI must:
- reuse an existing component, or
- ask for approval before inventing a new one.

Flexibility level: **Moderate**

---

## Global Rules

- Components must respect all rules in `AI_PROMPT_SPEC.md`
- Prefer **composition over customization**
- No page-specific styling unless explicitly approved
- All components must be:
  - accessible
  - responsive
  - reusable
- Styling must be token-driven (Tailwind theme values only)

---

## 1. Layout & Structural Components

### `Container`
**Purpose:** Constrain content width and horizontal padding

- Max-width controlled via Tailwind tokens
- Responsive horizontal padding
- Used in almost every section

---

### `Section`
**Purpose:** Vertical rhythm + background control

Variants:
- `light` (Soft Sand background)
- `dark` (Deep Navy background)
- `neutral` (inherits page background)

Rules:
- Handles vertical spacing
- Controls section-level animation trigger
- ❌ No nested background changes inside a Section

---

### `Grid`
**Purpose:** Responsive layout system

Use cases:
- Card layouts
- Pillars
- Story indexes

Rules:
- Responsive column definitions only
- No arbitrary layout hacks
- Grid logic belongs here, not inside cards

---

## 2. Typography Components

### `Heading`
**Purpose:** All headings and emphasized statements

Props:
- `level` (h1–h4)
- `tone` (default | inverse)

Rules:
- Uses **Inter Black (900)** exclusively
- No custom font overrides
- No color overrides except via tone

---

### `TextBlock`
**Purpose:** Long-form readable text

Rules:
- Uses **Merriweather**
- Max line length enforced
- ❌ No animation by default
- ❌ No inline color emphasis

---

### `Highlight`
**Purpose:** Emphasize words or phrases inside headings

Rules:
- Emphasis via **font weight first**
- Optional Warm Copper color
- ❌ Never use Honey Gold here

---

## 3. Navigation Components

### `HeaderNav`
**Purpose:** Global site navigation

Includes:
- Logo
- Primary links
- Primary CTA: **Start a conversation**

Rules:
- Sticky or static only (no animated hide/show)
- Subtle hover affordances only

---

### `Footer`
**Purpose:** Global footer

Includes:
- Navigation links
- Legal links
- Brand statement
- Optional CTA repetition

Rules:
- Typically dark section
- No animation beyond hover states

---

## 4. Call-to-Action Components

### `CTA`
**Purpose:** Primary conversion action

Rules:
- Text must be exactly: **Start a conversation**
- Uses Warm Copper sparingly
- Calm, invitational styling
- ❌ No urgency language
- ❌ No icon clutter

---

### `CTABand`
**Purpose:** High-visibility CTA section

Rules:
- Typically dark background
- One clear message + CTA
- Minimal copy
- No secondary CTAs unless approved

---

## 5. Content & Marketing Components

### `Hero`
**Purpose:** Page entry point and positioning

Variants:
- Primary (homepage)
- Secondary (interior pages)

Rules:
- One clear message
- Optional subtle hero emphasis animation
- ❌ No slideshows or carousels

---

### `PillarCard`
**Purpose:** Represent Ways of Working

Includes:
- Title
- Short description
- Optional fit indicator (“Best when…”)

Rules:
- Used in grids
- Hover affordance allowed
- No internal links unless intentional

---

### `ForYouNotForYou`
**Purpose:** Explicit filtering

Structure:
- Two columns or stacked blocks
  - “This is for you”
  - “This is not for you”

Rules:
- Clear, direct language
- No softening or hedging
- Minimal animation

---

### `ProcessSteps`
**Purpose:** Show partnership flow

Rules:
- Linear steps
- Calm pacing
- No animated timelines

---

## 6. Proof Components

### `ApproachStoryCard`
**Purpose:** Preview an approach story

Includes:
- Context summary
- Outcome hint
- Link to full story

Rules:
- Neutral, credible tone
- No metrics unless approved

---

### `ApproachStoryLayout`
**Purpose:** Full story page layout

Structure:
- Context
- Approach
- Outcome
- Why it mattered

Rules:
- Reading-first
- No hero animation
- No distracting motion

---

## 7. Utility Components

### `Button`
**Purpose:** Reusable action element

Variants:
- Primary
- Secondary (rare)

Rules:
- Primary button text defaults to CTA wording
- Clear focus states
- No icon-only buttons

---

### `Link`
**Purpose:** Inline or navigational links

Rules:
- Underline or color shift on hover
- Warm Copper allowed for emphasis
- Accessible contrast required

---

### `Divider`
**Purpose:** Visual separation

Rules:
- Subtle
- Uses Slate Blue or opacity variants
- ❌ No decorative flourishes

---

## 8. Animation Wrappers

### `Reveal`
**Purpose:** Scroll-based entrance animation

Rules:
- Uses allowed motion primitives only
- Trigger once
- Disabled in long-form zones

---

### `StaggerGroup`
**Purpose:** Coordinate staggered reveals

Rules:
- Used only for lists or grids
- Consistent delay increments

---

## Explicitly Disallowed Components

- Carousels / sliders
- Tabs-heavy interfaces
- Accordions for core content
- Animated charts or dashboards
- Chat widgets
- Pop-ups / modals (unless explicitly approved)
- AI-themed visuals or metaphors

---

## Extension Rule
If a new component seems necessary:
- Pause
- State the reason
- Ask for approval
- Do not invent silently
