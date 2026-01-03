import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextBlockProps {
  children: ReactNode;
  className?: string;
  size?: "lg" | "base" | "sm";
}

export function TextBlock({
  children,
  className,
  size = "base",
}: TextBlockProps) {
  const sizeClasses = {
    lg: "text-lg leading-relaxed",
    base: "text-base leading-relaxed",
    sm: "text-sm leading-relaxed",
  };

  return (
    <div
      className={cn(
        "font-serif font-normal",
        sizeClasses[size],
        "max-w-prose",
        className
      )}
    >
      {children}
    </div>
  );
}

