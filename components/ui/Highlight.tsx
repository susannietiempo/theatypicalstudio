import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HighlightProps {
  children: ReactNode;
  color?: boolean;
  className?: string;
}

export function Highlight({
  children,
  color = false,
  className,
}: HighlightProps) {
  return (
    <span
      className={cn(
        "font-black",
        color && "text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}

