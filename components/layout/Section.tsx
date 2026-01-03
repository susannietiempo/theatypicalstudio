import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  variant?: "light" | "dark" | "neutral";
  className?: string;
  dense?: boolean;
  cta?: boolean;
}

export function Section({
  children,
  variant = "light",
  className,
  dense = false,
  cta = false,
}: SectionProps) {
  const paddingClass = cta
    ? "py-20 md:py-28"
    : dense
    ? "py-12 md:py-16"
    : "py-16 md:py-24";

  const backgroundClass =
    variant === "dark"
      ? "bg-dark text-inverse"
      : variant === "light"
      ? "bg-page"
      : "";

  return (
    <section className={cn(paddingClass, backgroundClass, className)}>
      {children}
    </section>
  );
}
