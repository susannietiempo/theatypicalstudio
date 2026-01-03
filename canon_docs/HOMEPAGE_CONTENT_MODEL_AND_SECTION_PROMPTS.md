# HOMEPAGE CONTENT MODEL & SECTION PROMPTS — The Atypical Studio
**Artifact 4 — Homepage Only**

This document defines the **content structure**, **intent**, **copy constraints**, and **AI prompts**
for generating the homepage.  
It must be used together with `AI_PROMPT_SPEC.md`, `COMPONENT_INVENTORY.md`,
and `SITE_MAP_AND_PAGE_ROLES.md`.

---

## Global Homepage Intent

- Establish calm authority in the first 5 seconds
- Speak directly to the **hybrid operator**
- Make fit clear early
- Filter before selling
- Invite a conversation, not a transaction

Tone: confident, grounded, human  
No hype. No jargon. No over-explaining.

---

## Section Order (Non-Negotiable)

1. Hero
2. What We Do (Framing)
3. Ways of Working (Pillars)
4. For You / Not For You
5. Selected Approach Stories
6. How We Partner (Snapshot)
7. Primary CTA Band
8. Footer

---

## 1. Hero Section

### Purpose
Immediate positioning and tone-setting.

### Components
- `Section` (dark)
- `Container`
- `Heading`
- `Highlight`
- Optional supporting text
- `CTA`

### Content Rules
- One primary message only
- Headline uses **Inter Black**
- Highlight via weight first, color second
- No subhead longer than 2 lines
- CTA text must be exactly: **Start a conversation**

### AI Prompt
> Write a homepage hero headline for a custom software studio that values long-term partnership, clarity, and thoughtful systems.
> Speak to a hybrid operator (founder + builder).
> Avoid buzzwords and hype.
> Tone: calm, confident, precise.
> Do not mention tools or technologies.
> Provide:
> - One headline
> - One short supporting line (optional)

### Animation
- One subtle hero emphasis animation allowed
- No looping effects

---

## 2. What We Do (Framing)

### Purpose
Explain the nature of the work without listing services.

### Components
- `Section` (light)
- `Container`
- `Heading`
- `TextBlock`

### Content Rules
- 2–3 short paragraphs max
- Framed as partnership, not delivery
- No bullet lists
- No claims of being “full-service”

### AI Prompt
> Write a short section explaining what this studio does.
> Do not list services.
> Emphasize partnership, problem clarity, and thoughtful execution.
> Assume the reader is technical and time-constrained.
> Keep it concise and grounded.

### Animation
- Section entrance only
- No animation inside paragraphs

---

## 3. Ways of Working (Pillars)

### Purpose
Replace a traditional services section.

### Components
- `Section` (light)
- `Container`
- `Heading`
- `Grid`
- `PillarCard`
- Optional `Highlight`

### Content Rules
- 3–4 pillars only
- Each pillar includes:
  - Title
  - Short description
  - Optional “Best when…” line
- No process steps here
- No sales language

### AI Prompt
> Generate 3–4 “Ways of Working” for a custom software studio.
> Each should describe how the team engages, not what they sell.
> Use clear, practical language.
> Avoid buzzwords.
> For each:
> - Title
> - 1–2 sentence description
> - Optional “Best when…” qualifier

### Animation
- Staggered card reveal allowed
- Subtle hover affordances only

---

## 4. For You / Not For You

### Purpose
Explicit filtering.

### Components
- `Section` (neutral or light)
- `Container`
- `ForYouNotForYou`

### Content Rules
- Clear, direct statements
- No softening language
- 4–6 bullets per side
- This section must repel as much as it attracts

### AI Prompt
> Write a “For you / Not for you” section for a selective software studio.
> Be honest and direct.
> Assume the reader is capable of self-selection.
> Avoid insults or condescension.
> Provide:
> - 4–6 bullets for “This is for you”
> - 4–6 bullets for “This is not for you”

### Animation
- Minimal
- No staggered bullet animations

---

## 5. Selected Approach Stories

### Purpose
Provide proof through thinking.

### Components
- `Section` (light)
- `Container`
- `Heading`
- `Grid`
- `ApproachStoryCard`

### Content Rules
- 2–3 stories only
- Short summaries
- No metrics unless approved
- Framed as examples of approach, not success stories

### AI Prompt
> Write 2–3 short summaries of “approach stories.”
> Each should briefly describe:
> - The context
> - The challenge
> - How the team approached it
> Keep the tone neutral and reflective.
> Do not include client names or metrics.

### Animation
- Staggered reveal allowed
- No hero-style emphasis

---

## 6. How We Partner (Snapshot)

### Purpose
Reduce uncertainty before contact.

### Components
- `Section` (light or dark)
- `Container`
- `Heading`
- `ProcessSteps` or short `TextBlock`

### Content Rules
- High-level only
- No step-by-step delivery promises
- Focus on collaboration and communication

### AI Prompt
> Write a brief overview of how this studio partners with clients.
> Focus on collaboration, clarity, and mutual responsibility.
> Keep it high-level and reassuring.
> Do not describe a rigid process.

### Animation
- Low
- Section entrance only

---

## 7. Primary CTA Band

### Purpose
Invite conversation with intent.

### Components
- `Section` (dark)
- `Container`
- `Heading`
- `CTA`

### Content Rules
- One clear message
- Calm invitation
- CTA text must be exactly: **Start a conversation**
- No secondary CTAs

### AI Prompt
> Write a short CTA section inviting the reader to start a conversation.
> Tone: calm, respectful, non-salesy.
> Assume the reader is deciding if this feels like a fit.
> Keep it concise.

### Animation
- Minimal
- No expressive motion

---

## 8. Footer

### Purpose
Closure and trust reinforcement.

### Components
- `Footer`

### Content Rules
- No marketing copy overload
- Clear navigation
- Optional short brand statement

### Animation
- Hover states only

---

## Context Risk Protocol (Homepage)
If any section lacks clarity or requires assumptions, AI must stop and say:

**“Context risk: I’m missing X. Please clarify Y before I proceed.”**

Do not invent positioning, services, or claims.
