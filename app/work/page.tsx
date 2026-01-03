import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { CTA } from "@/components/ui/CTA";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { PageConnections } from "@/components/ui/PageConnections";
import Link from "next/link";

export default function WorkPage() {
  return (
    <div className="relative">
      <PageConnections />
      <Header />

      {/* Hero / Intro Section */}
      <section className="relative overflow-hidden bg-dark text-inverse min-h-[60vh] flex items-center">
        <SectionBackground variant="convergence-glow" position="center" />
        <Container className="relative z-10">
          <Reveal>
            <div className="space-y-6 max-w-3xl">
              <h1 className="font-sans text-4xl md:text-5xl font-black tracking-tight text-inverse">
                How we approach real problems.
              </h1>
              <p className="font-sans text-lg md:text-xl text-inverse opacity-90">
                These stories show how we think, collaborate, and solve problems alongside our partners. Written for teams considering whether we might work well together.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Approach Stories Grid */}
      <Section variant="light" className="relative border-t border-border">
        <SectionBackground variant="convergence-web" position="right" />
        <Container className="relative z-10">
          <StaggerGroup>
            <Grid cols={3}>
              <StaggerItem>
                <div className="bg-page rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
                  <h3 className="font-sans text-xl font-black text-primary mb-3">
                    Rebuilding a Core System
                  </h3>
                  <p className="font-serif text-base text-secondary mb-4">
                    A client needed to refactor a critical data processing system that had grown
                    complex and fragile. We worked together to understand the real constraints
                    and designed a new architecture that simplified operations while maintaining
                    backward compatibility.
                  </p>
                  <Link
                    href="/work/rebuilding-core-system"
                    className="font-sans text-sm font-semibold text-accent hover:underline"
                  >
                    Read the full story →
                  </Link>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-page rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
                  <h3 className="font-sans text-xl font-black text-primary mb-3">
                    Designing a New Platform
                  </h3>
                  <p className="font-serif text-base text-secondary mb-4">
                    A founder approached us with a clear vision but needed help shaping the
                    technical foundation. We spent time understanding the problem space,
                    then designed and built the initial system architecture together.
                  </p>
                  <Link
                    href="/work/designing-new-platform"
                    className="font-sans text-sm font-semibold text-accent hover:underline"
                  >
                    Read the full story →
                  </Link>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-page rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
                  <h3 className="font-sans text-xl font-black text-primary mb-3">
                    Evolving an Existing Product
                  </h3>
                  <p className="font-serif text-base text-secondary mb-4">
                    An established product needed new capabilities without disrupting existing
                    workflows. We analyzed the current system, identified the right extension
                    points, and built the new features in a way that felt natural to users.
                  </p>
                  <Link
                    href="/work/evolving-existing-product"
                    className="font-sans text-sm font-semibold text-accent hover:underline"
                  >
                    Read the full story →
                  </Link>
                </div>
              </StaggerItem>
            </Grid>
          </StaggerGroup>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="dark" cta>
        <Container>
          <Reveal variant="fadeIn">
            <div className="text-center space-y-6">
              <Heading level={2} tone="inverse">
                If these stories resonate, let's talk.
              </Heading>
              <p className="font-serif text-lg text-inverse opacity-90 max-w-2xl mx-auto">
                These are simplified examples. Real engagements are more nuanced—let's discuss whether we might be a fit for your needs.
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
