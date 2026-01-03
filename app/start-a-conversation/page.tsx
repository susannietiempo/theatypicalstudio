import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { PageConnections } from "@/components/ui/PageConnections";

export const metadata: Metadata = {
  title: "Start a Conversation | The Atypical Studio",
  description:
    "If this feels like a fit, let's start a conversation. No sales pitch, no urgency—just a thoughtful discussion about whether we might work well together.",
};

export default function StartAConversationPage() {
  return (
    <div className="relative">
      <PageConnections />
      <Header />
      {/* Hero / Framing */}
      <section className="relative overflow-hidden bg-dark text-inverse min-h-[60vh] flex items-center pt-20 md:pt-0">
        <SectionBackground variant="convergence-glow" position="center" />
        <Container className="relative z-10 py-12 md:py-0">
          <Reveal>
            <div className="space-y-4 sm:space-y-6 max-w-3xl">
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-inverse leading-tight">
                Start a conversation
              </h1>
              <p className="font-sans text-base sm:text-lg md:text-xl text-inverse opacity-90 leading-relaxed">
                If this feels like a fit, we&apos;d like to hear from you.
                Tell us about what you&apos;re working on and what you&apos;re looking for.
                We&apos;ll review your message and respond thoughtfully.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Contact Form */}
      <Section variant="light" className="relative border-t border-border">
        <Container>
          <Reveal variant="fadeIn">
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* What Happens Next */}
      <Section variant="light" className="relative bg-surface border-t border-border">
        <SectionBackground variant="convergence-subtle" position="left" />
        <Container className="relative z-10">
          <Reveal variant="fadeIn">
            <div className="max-w-prose mx-auto space-y-6">
              <Heading level={2}>What happens next</Heading>
              <TextBlock>
                <p className="mb-4">
                  We review every message personally. If it seems like there might be a good fit,
                  we&apos;ll respond within a few days to schedule a conversation.
                </p>
                <p className="mb-4">
                  That conversation is a two-way fit check. We&apos;ll talk about your situation,
                  what you&apos;re looking for, and whether we might work well together.
                  No sales pitch, no pressure—just an honest discussion.
                </p>
                <p>
                  If it feels right for both of us, we&apos;ll explore what working together
                  might look like. If not, we&apos;ll say so directly and suggest alternatives
                  if we know of any.
                </p>
              </TextBlock>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Connect with us on LinkedIn */}
      <Section variant="light" className="relative border-t border-border">
        <Container>
          <Reveal variant="fadeIn">
            <div className="max-w-prose mx-auto text-center space-y-6">
              <Heading level={2}>Connect with us</Heading>
              <TextBlock>
                <p>
                  You can also find us on LinkedIn to stay updated on our work and approach.
                </p>
              </TextBlock>
              <div className="pt-4">
                <a
                  href="https://www.linkedin.com/company/theatypicalstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-borderStrong px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold text-primary hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[44px] touch-manipulation"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}

