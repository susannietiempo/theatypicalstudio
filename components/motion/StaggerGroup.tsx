"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  staggerContainer,
  getReducedMotionVariants,
} from "@/lib/motionPresets";
import { cn } from "@/lib/utils";

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
}

export function StaggerGroup({ children, className }: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion();
  const [variants, setVariants] = useState(staggerContainer);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVariants(getReducedMotionVariants(staggerContainer));
    } else {
      setVariants(staggerContainer);
    }
  }, [prefersReducedMotion]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
