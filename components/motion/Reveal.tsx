"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, fadeIn, getReducedMotionVariants } from "@/lib/motionPresets";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  variant?: "fadeUp" | "fadeIn";
  className?: string;
  delay?: number;
}

export function Reveal({
  children,
  variant = "fadeUp",
  className,
  delay = 0,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const [variants, setVariants] = useState(
    variant === "fadeUp" ? fadeUp : fadeIn
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      setVariants(getReducedMotionVariants(variant === "fadeUp" ? fadeUp : fadeIn));
    } else {
      setVariants(variant === "fadeUp" ? fadeUp : fadeIn);
    }
  }, [prefersReducedMotion, variant]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
