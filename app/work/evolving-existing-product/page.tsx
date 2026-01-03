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

export default function EvolvingExistingProductPage() {
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
                Evolving an Existing Product
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
                    An established product had proven its value in the market and now needed new capabilities to serve evolving customer needs. The challenge was adding these features without disrupting existing workflows or introducing complexity that would make the product harder to maintain.
                  </p>
                  <p>
                    The team understood their users well but needed help identifying the right technical approach and extension points that would feel natural within the existing system.
                  </p>
                </TextBlock>
              </div>

              {/* Our Approach */}
              <div>
                <h2 className="font-sans text-2xl font-black text-primary mb-4">Our Approach</h2>
                <TextBlock>
                  <p className="mb-4">
                    We started by analyzing the current product architecture and understanding the user workflows that the new features needed to support. Rather than bolting on new functionality, we looked for ways to extend the existing patterns in a way that would feel coherent.
                  </p>
                  <p className="mb-4">
                    We worked collaboratively to design the new capabilities, prototyping different approaches and gathering feedback from real users early. Each iteration refined not just the features themselves, but how they integrated with the existing product experience.
                  </p>
                  <p>
                    The implementation was incremental and deliberate. We shipped features in stages, validated their impact, and adjusted based on actual usage patterns before moving to the next capability.
                  </p>
                </TextBlock>
              </div>

              {/* Outcome */}
              <div>
                <h2 className="font-sans text-2xl font-black text-primary mb-4">Outcome</h2>
                <TextBlock>
                  <p className="mb-4">
                    The new capabilities integrated seamlessly with the existing product. Users adopted them naturally because they followed familiar patterns and solved real workflow problems.
                  </p>
                  <p>
                    The product remained maintainable and coherent. Rather than accumulating technical debt, the new features were built on solid extension points that made future development easier.
                  </p>
                </TextBlock>
              </div>

              {/* Why It Mattered */}
              <div>
                <h2 className="font-sans text-2xl font-black text-primary mb-4">Why It Mattered</h2>
                <TextBlock>
                  <p className="mb-4">
                    This engagement succeeded because we prioritized coherence over speed. By taking the time to understand the existing product and user workflows, we were able to extend the system in a way that felt intentional rather than tacked on.
                  </p>
                  <p>
                    The collaborative approach meant the team understood the new architecture and could continue evolving the product independently. The product got stronger, not more complex.
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
                Every engagement is different, but the collaborative mindset stays the same. Let&apos;s discuss whether we might be a fit.
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
