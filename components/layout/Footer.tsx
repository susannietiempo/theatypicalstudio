import Link from "next/link";
import { Container } from "./Container";
import { Section } from "./Section";
import { CTA } from "../ui/CTA";

export function Footer() {
  return (
    <Section variant="dark">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
          <div className="space-y-4">
            <Link href="/" aria-label="The Atypical Studio home">
              <img
                src="/images/atypical-studio-logo-inverse.svg"
                alt="The Atypical Studio"
                className="h-9 w-auto md:h-10"
              />
            </Link>
            <p className="font-serif text-sm text-inverse opacity-80 max-w-md">
              Custom software studio focused on long-term partnership, clarity, and thoughtful systems.
            </p>
          </div>

          <nav className="flex flex-col gap-4 md:flex-row md:gap-8">
            <div className="space-y-2">
              <h4 className="font-sans text-sm font-semibold text-inverse mb-2">
                Navigation
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/"
                    className="font-sans text-sm text-inverse opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="font-sans text-sm text-inverse opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="font-sans text-sm text-inverse opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/start-a-conversation"
                    className="font-sans text-sm text-inverse opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-sans text-sm font-semibold text-inverse mb-2">
                Legal
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/privacy"
                    className="font-sans text-sm text-inverse opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="font-sans text-sm text-inverse opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-inverse/20">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <p className="font-sans text-sm text-inverse opacity-60">
              © {new Date().getFullYear()} The Atypical Studio. All rights reserved.
            </p>
            <Link
              href="/start-a-conversation"
              className="inline-flex items-center justify-center rounded-xl border border-inverse/30 px-5 py-3 text-sm font-semibold text-inverse hover:bg-inverse/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

