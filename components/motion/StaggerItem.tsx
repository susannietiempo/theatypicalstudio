"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { staggerItem, getReducedMotionVariants } from "@/lib/motionPresets";
import { cn } from "@/lib/utils";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const [variants, setVariants] = useState(staggerItem);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVariants(getReducedMotionVariants(staggerItem));
    } else {
      setVariants(staggerItem);
    }
  }, [prefersReducedMotion]);

  return (
    <motion.div variants={variants} className={cn(className)}>
      {children}
    </motion.div>
  );
}
