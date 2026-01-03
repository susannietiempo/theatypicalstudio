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

export default function DesigningNewPlatformPage() {
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
                Designing a New Platform
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
                    A technical founder had a clear vision for a new platform but needed help translating that vision into a robust technical foundation. They understood the problem space deeply but wanted a partner to collaborate on the system design and initial implementation.
                  </p>
                  <p>
                    The challenge wasn&apos;t just building features—it was establishing the right architectural patterns from the start so the platform could grow sustainably as the product evolved.
                  </p>
                </TextBlock>
              </div>

              {/* Our Approach */}
              <div>
                <h2 className="font-sans text-2xl font-black text-primary mb-4">Our Approach</h2>
                <TextBlock>
                  <p className="mb-4">
                    We began with deep conversations about the problem space, the intended users, and the workflows the platform needed to support. Rather than rushing to code, we spent time understanding the constraints and exploring different architectural approaches together.
                  </p>
                  <p className="mb-4">
                    We designed the core data models and system architecture collaboratively, making trade-offs explicit and documenting our reasoning. Once we had alignment on the foundation, we built the initial system iteratively, shipping regularly and gathering feedback.
                  </p>
                  <p>
                    Throughout the engagement, we worked as a thinking partner—questioning assumptions, proposing alternatives, and ensuring every technical decision served the long-term vision.
                  </p>
                </TextBlock>
              </div>

              {/* Outcome */}
              <div>
                <h2 className="font-sans text-2xl font-black text-primary mb-4">Outcome</h2>
                <TextBlock>
                  <p className="mb-4">
                    The platform launched with a solid technical foundation that could support the intended feature set and adapt as requirements evolved. The architecture was clear, documented, and maintainable.
                  </p>
                  <p>
                    The founder understood not just what was built, but why—enabling them to make informed decisions as they continued to develop the platform. The initial system design principles carried through as the platform grew.
                  </p>
                </TextBlock>
              </div>

              {/* Why It Mattered */}
              <div>
                <h2 className="font-sans text-2xl font-black text-primary mb-4">Why It Mattered</h2>
                <TextBlock>
                  <p className="mb-4">
                    This engagement worked because we took the time to understand the vision before proposing solutions. The collaborative design process meant the founder had full ownership and understanding of the system.
                  </p>
                  <p>
                    Starting with the right foundation saved months of refactoring later. The platform could evolve without being constrained by early architectural decisions made in isolation.
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
