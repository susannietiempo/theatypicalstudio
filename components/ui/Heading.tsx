import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  children: ReactNode;
  tone?: "default" | "inverse";
  className?: string;
}

const headingClasses = {
  1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight",
  2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight",
  3: "text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-tight",
  4: "text-lg sm:text-xl md:text-2xl font-black tracking-tight leading-tight",
};

export function Heading({
  level,
  children,
  tone = "default",
  className,
}: HeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  const colorClass =
    tone === "inverse" ? "text-inverse" : "text-primary";

  return (
    <Component
      className={cn(
        "font-sans",
        headingClasses[level],
        colorClass,
        className
      )}
    >
      {children}
    </Component>
  );
}
