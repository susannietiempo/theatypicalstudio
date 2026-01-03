"use client";

import { Variants } from "framer-motion";

/**
 * Motion Presets for The Atypical Studio
 * Source of Truth: canon_docs/ANIMATION_PRESETS.md
 */

// Token Constants
export const motionTokens = {
  durations: {
    fast: 0.2,
    base: 0.35,
    slow: 0.55,
  },
  distances: {
    ySmall: 8,
    yBase: 12,
    yLarge: 16,
  },
  easing: [0.22, 1, 0.36, 1] as [number, number, number, number],
  stagger: {
    sm: 0.06,
    base: 0.08,
    lg: 0.1,
  },
} as const;

/**
 * Note: For useReducedMotion, use Framer Motion's built-in hook:
 * import { useReducedMotion } from "framer-motion";
 * This is just a utility reference - components should use the hook directly.
 */

/**
 * fadeUp - Entrance reveal with subtle translateY
 * Use for: section headers, cards, short text blocks
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: motionTokens.distances.yBase,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.durations.base,
      ease: motionTokens.easing,
    },
  },
};

/**
 * fadeIn - Opacity-only entrance
 * Use for: subtle elements where movement is unnecessary
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: motionTokens.durations.base,
      ease: motionTokens.easing,
    },
  },
};

/**
 * staggerContainer - Container for staggered reveals
 * Use for: grids/lists (pillars, story cards)
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTokens.stagger.base,
      delayChildren: 0.06,
    },
  },
};

/**
 * staggerItem - Child item in staggered group
 * Use for: child items inside a staggered group
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: motionTokens.distances.ySmall,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.durations.base,
      ease: motionTokens.easing,
    },
  },
};

/**
 * hoverLift - Subtle lift on hover
 * Use for: PillarCard, ApproachStoryCard, clickable cards
 */
export const hoverLift = {
  y: -2,
  transition: {
    duration: motionTokens.durations.fast,
    ease: motionTokens.easing,
  },
};

/**
 * buttonPress - Minimal tactile response
 * Use for: buttons only
 */
export const buttonPress = {
  scale: 0.98,
  transition: {
    duration: motionTokens.durations.fast,
  },
};

/**
 * heroAccent - Subtle hero emphasis (restricted)
 * Use for: ONE subtle hero emphasis element only
 */
export const heroAccent: Variants = {
  initial: {
    opacity: 0.85,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 6,
    transition: {
      duration: motionTokens.durations.slow,
      ease: motionTokens.easing,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

/**
 * Get reduced-motion variants
 * When prefers-reduced-motion: opacity only, fast duration, no stagger
 */
export function getReducedMotionVariants(baseVariants: Variants): Variants {
  // For staggerContainer, return a variant that shows children immediately
  if (baseVariants === staggerContainer) {
    return {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0,
          delayChildren: 0,
        },
      },
    };
  }

  // For all other variants, use opacity-only with fast duration
  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: motionTokens.durations.fast,
      },
    },
  };
}
