import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { CTA } from "@/components/ui/CTA";
import { Reveal } from "@/components/motion/Reveal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { PageConnections } from "@/components/ui/PageConnections";
import Link from "next/link";

export default function RebuildingCoreSystemPage() {
  return (
    <div className="relative">
      <PageConnections />
      <Header />

      {/* Hero / Title Section */}
      <section className="relative overflow-hidden bg-dark text-inverse min-h-[50vh] flex items-center">
        <SectionBackground variant="convergence-minimal" position="center" />
        <Container className="relative z-10">
          <Reveal>
            <div className="space-y-4 max-w-2xl">
              <Link
                href="/work"
                className="inline-flex items-center font-sans text-sm font-medium text-inverse opacity-80 hover:opacity-100"
              >
                ← Back to Work
              </Link>
              <h1 className="font-sans text-3xl md:text-4xl font-black tracking-tight text-inverse">
                Rebuilding a Core System
              </h1>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Story Content */}
      <Section variant="light" className="relative border-t border-border">
        <Container>
          <Reveal>
            <div className="max-w-prose mx-auto space-y-12">
              {/* Context */}
              <div>
                <h2 className="font-sans text-2xl font-black text-primary mb-4">Context</h2>
                <TextBlock>
                  <p className="mb-4">
                    A growing company was running a critical data processing pipeline that had been built incrementally over several years. The system worked, but it had become difficult to modify, prone to silent failures, and required deep tribal knowledge to maintain.
                  </p>
                  <p>
                    The team knew they needed to refactor, but they couldn't afford downtime or data loss. They needed a partner who could understand the existing system, navigate the constraints, and design a path forward that wouldn't disrupt their operations.
                  </p>
                </TextBlock>
              </div>

              {/* Our Approach */}
              <div>
                <h2 className="font-sans text-2xl font-black text-primary mb-4">Our Approach</h2>
                <TextBlock>
                  <p className="mb-4">
                    We started by spending time understanding how the existing system actually worked—not just the documentation, but the real operational patterns and edge cases that had accumulated over time.
                  </p>
                  <p className="mb-4">
                    Rather than proposing a complete rewrite, we worked together to identify the core architectural patterns that were causing friction. We designed a new system that would run in parallel with the existing one, allowing for gradual migration and validation at each step.
                  </p>
                  <p>
                    Throughout the process, we made decisions collaboratively. Every architectural choice was documented and explained. We prioritized clarity and maintainability over clever abstractions.
                  </p>
                </TextBlock>
              </div>

              {/* Outcome */}
              <div>
                <h2 className="font-sans text-2xl font-black text-primary mb-4">Outcome</h2>
                <TextBlock>
                  <p className="mb-4">
                    The new system simplified operations significantly. What previously required manual intervention and deep system knowledge became straightforward and observable.
                  </p>
                  <p>
                    The team was able to migrate their data processing workloads incrementally over several months, with zero downtime and full confidence in the output. The new architecture made it easier to add capabilities and respond to changing requirements.
                  </p>
                </TextBlock>
              </div>

              {/* Why It Mattered */}
              <div>
                <h2 className="font-sans text-2xl font-black text-primary mb-4">Why It Mattered</h2>
                <TextBlock>
                  <p className="mb-4">
                    This wasn't just a technical refactoring. It reduced operational stress, freed the team to focus on building new capabilities, and gave them confidence in their infrastructure.
                  </p>
                  <p>
                    The partnership worked because we took the time to understand their constraints and collaborated on an approach that fit their reality. The outcome was better because we built it together.
                  </p>
                </TextBlock>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="dark" cta>
        <Container>
          <Reveal variant="fadeIn">
            <div className="text-center space-y-6">
              <Heading level={2} tone="inverse">
                Does this approach sound right for your needs?
              </Heading>
              <p className="font-serif text-lg text-inverse opacity-90 max-w-2xl mx-auto">
                Every engagement is different, but the collaborative mindset stays the same. Let's discuss whether we might be a fit.
              </p>
              <div className="pt-4">
                <CTA href="/start-a-conversation" />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
