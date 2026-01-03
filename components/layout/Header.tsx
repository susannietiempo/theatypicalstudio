"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between py-4 md:py-6 lg:py-8">
          {/* Logo */}
          <Link href="/" aria-label="The Atypical Studio home" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/images/atypical-studio-logo-inverse.svg"
              alt="The Atypical Studio"
              className="h-16 w-auto sm:h-18 md:h-16 lg:h-20 transition-opacity hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/services"
              className="font-sans text-sm xl:text-base font-medium text-inverse hover:text-accent transition-colors"
            >
              Services
            </Link>
            <Link
              href="/work"
              className="font-sans text-sm xl:text-base font-medium text-inverse hover:text-accent transition-colors"
            >
              Work
            </Link>
            <Link
              href="/start-a-conversation"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 xl:px-5 xl:py-3 font-sans text-sm xl:text-base font-semibold bg-accent text-inverse hover:opacity-90 transition-opacity"
            >
              Start a conversation
            </Link>
          </nav>

          {/* Mobile: Menu Button + CTA */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-1.5 p-2 text-inverse focus:outline-none focus:ring-2 focus:ring-accent rounded-lg min-h-[44px] min-w-[44px] items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
            <Link
              href="/start-a-conversation"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-sans text-sm font-semibold bg-accent text-inverse hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Start a conversation
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          ref={menuRef}
          className={`lg:hidden fixed inset-x-0 top-[73px] bg-dark/95 backdrop-blur-sm border-t border-border/20 transition-all duration-300 ease-in-out max-h-[calc(100vh-73px)] overflow-y-auto z-40 ${
            isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col py-6 px-6 space-y-1">
            <Link
              href="/services"
              onClick={() => setIsMenuOpen(false)}
              className="font-sans text-lg font-medium text-inverse hover:text-accent transition-colors py-3 border-b border-border/10"
            >
              Services
            </Link>
            <Link
              href="/work"
              onClick={() => setIsMenuOpen(false)}
              className="font-sans text-lg font-medium text-inverse hover:text-accent transition-colors py-3"
            >
              Work
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
