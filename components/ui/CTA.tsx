import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAProps {
  href: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export function CTA({ href, className, variant = "primary" }: CTAProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[44px] touch-manipulation";

  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={cn(
          baseClasses,
          "bg-accent text-onAccent hover:opacity-90",
          className
        )}
      >
        Start a conversation
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        baseClasses,
        "border border-strong text-primary hover:bg-surface",
        className
      )}
    >
      Start a conversation
    </Link>
  );
}
