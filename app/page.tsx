import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Heading } from "@/components/ui/Heading";
import { Highlight } from "@/components/ui/Highlight";
import { TextBlock } from "@/components/ui/TextBlock";
import { CTA } from "@/components/ui/CTA";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { PageConnections } from "@/components/ui/PageConnections";

export default function Home() {
  return (
    <div className="relative">
      <PageConnections />
      <Header />
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-dark text-inverse min-h-screen flex items-center pt-20 md:pt-0">
        <HeroBackground />
        <Container className="relative z-10 py-12 md:py-0">
          <Reveal>
            <div className="space-y-4 sm:space-y-6 max-w-2xl">
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-inverse leading-tight">
                Thoughtful systems. <span className="text-accent">Human outcomes.</span>
              </h1>
              <p className="font-sans text-base sm:text-lg md:text-xl font-medium text-inverse leading-relaxed">
                For teams whose workflows don&apos;t fit templates—we build custom solutions that make the work hold up.
              </p>
              <p className="font-sans text-sm sm:text-base md:text-lg text-inverse opacity-60 leading-relaxed">
                Long-term technology partnerships that evolve with your workflow.
              </p>
              <div className="pt-2 sm:pt-4">
                <CTA href="/start-a-conversation" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 2. What We Do (Framing) */}
      <Section variant="light" className="relative border-t border-border">
        <SectionBackground variant="convergence-minimal" position="right" />
        <Container className="relative z-10">
          <Reveal>
            <div className="space-y-6">
              <Heading level={2}>What We Do</Heading>
              <TextBlock>
                <p className="mb-4">
                  We help small to mid-sized businesses scale without adding headcount—by building custom websites, automation systems, and operational tools designed around how you actually work.
                </p>
                <p className="mb-4">
                  Our work starts with understanding your workflows, constraints, and goals. Whether you need a website to bring an idea to life, systems to reduce manual administrative work, or custom tools that grow alongside your business, we build solutions that adapt as your needs evolve.
                </p>
                <p>
                  We partner with founders and small teams—often one to two people—whose operations have outgrown generic software. When off-the-shelf tools fall short, we design and build technology that fits, and we stay with you as your business changes, extending and refining your systems over time.
                </p>
              </TextBlock>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 3. Ways of Working (Teaser) */}
      <Section variant="light" className="relative bg-surface border-y border-border">
        <SectionBackground variant="convergence-subtle" position="right" />
        <Container className="relative z-10">
          <Reveal>
            <div className="space-y-6 max-w-prose">
              <Heading level={2}>Ways of Working</Heading>
              <TextBlock>
                <p className="mb-4">
                  We engage through strategic development, system architecture, and product development—shaped by your needs and constraints, not rigid service definitions.
                </p>
                <p>
                  Every engagement is different. What matters is finding the right fit and the right rhythm.
                </p>
              </TextBlock>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center font-sans text-sm font-semibold text-accent hover:underline"
                >
                  Learn more about our approach →
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 4. For You / Not For You */}
      <Section variant="neutral" className="relative border-y border-border">
        <SectionBackground variant="convergence-glow" position="center" />
        <Container className="relative z-10">
          <Reveal>
            <div className="space-y-12">
              <Heading level={2} className="text-center mb-12">
                Is This For You?
              </Heading>
              <Grid cols={2}>
                <div className="space-y-4">
                  <h3 className="font-sans text-xl sm:text-2xl font-black text-primary">
                    This is for you if:
                  </h3>
                  <ul className="space-y-3 font-serif text-base text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>You&apos;re a small team (1-2 people) looking to scale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Administrative work is taking too much time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>You have ideas but face barriers with technology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Off-the-shelf solutions don&apos;t fit your workflow</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>You value long-term partnership as your business grows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>You want systems that adapt when your needs change</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-sans text-xl sm:text-2xl font-black text-primary">
                    This is not for you if:
                  </h3>
                  <ul className="space-y-3 font-serif text-base text-secondary">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>You need enterprise-scale systems or 24/7 support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>You&apos;re looking for the lowest price option</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>You want a one-time project with no ongoing relationship</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>You prefer off-the-shelf solutions over custom builds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>You need immediate delivery or fixed-scope contracts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>You&apos;re not willing to be involved in the process</span>
                    </li>
                  </ul>
                </div>
              </Grid>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 5. Selected Work */}
      <Section variant="light" className="relative bg-surface border-t border-border">
        <SectionBackground variant="convergence-web" position="right" />
        <Container className="relative z-10">
          <Reveal>
            <Heading level={2} className="mb-12">
              Selected Work
            </Heading>
          </Reveal>
          <StaggerGroup>
            <Grid cols={3}>
              <StaggerItem>
                <div className="bg-page rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
                  <h3 className="font-sans text-lg sm:text-xl font-black text-primary mb-2 sm:mb-3">
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
                <div className="bg-page rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
                  <h3 className="font-sans text-lg sm:text-xl font-black text-primary mb-2 sm:mb-3">
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
                <div className="bg-page rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
                  <h3 className="font-sans text-lg sm:text-xl font-black text-primary mb-2 sm:mb-3">
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

      {/* 6. How We Partner (Removed - moved to /services) */}

      {/* 7. Primary CTA Band */}
      <Section variant="dark" cta>
        <Container>
          <Reveal variant="fadeIn">
            <div className="text-center space-y-6">
              <Heading level={2} tone="inverse">
                If this feels like a fit, let&apos;s start a conversation.
              </Heading>
              <p className="font-serif text-lg text-inverse opacity-90 max-w-2xl mx-auto">
                No sales pitch. No urgency. Just a thoughtful conversation about whether 
                we might work well together.
              </p>
              <div className="pt-4">
                <CTA href="/start-a-conversation" />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
