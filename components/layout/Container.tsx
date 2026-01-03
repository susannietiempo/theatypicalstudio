import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "default" | "prose";
}

export function Container({
  children,
  className,
  maxWidth = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-5 md:px-6 lg:px-8",
        maxWidth === "default" ? "max-w-6xl" : "max-w-prose",
        className
      )}
    >
      {children}
    </div>
  );
}
