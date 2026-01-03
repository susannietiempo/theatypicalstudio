import Link from "next/link";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between py-6 md:py-8">
          {/* Logo */}
          <Link href="/" aria-label="The Atypical Studio home">
            <img
              src="/images/atypical-studio-logo-inverse.svg"
              alt="The Atypical Studio"
              className="h-12 w-auto md:h-16 lg:h-20 transition-opacity hover:opacity-80"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6 md:gap-8">
            <Link
              href="/services"
              className="font-sans text-sm md:text-base font-medium text-inverse hover:text-accent transition-colors"
            >
              Services
            </Link>
            <Link
              href="/work"
              className="font-sans text-sm md:text-base font-medium text-inverse hover:text-accent transition-colors"
            >
              Work
            </Link>
            <Link
              href="/start-a-conversation"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 md:px-5 md:py-3 font-sans text-sm md:text-base font-semibold bg-accent text-inverse hover:opacity-90 transition-opacity"
            >
              Start a conversation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
