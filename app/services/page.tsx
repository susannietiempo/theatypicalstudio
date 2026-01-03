"use client";

import { useState } from "react";
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
import { ImageModal } from "@/components/ui/ImageModal";

export default function ServicesPage() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };
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
                How we work, who we are.
              </h1>
              <p className="font-sans text-lg md:text-xl text-inverse opacity-90">
                We&apos;re a small team that values partnership over process. Here&apos;s what that means in practice.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Who We Are Section - Origin Story */}
      <Section variant="light" className="relative border-t border-border">
        <SectionBackground variant="convergence-minimal" position="left" />
        <Container className="relative z-10">
          <Reveal>
            <div className="space-y-12">
              <div className="max-w-prose mx-auto">
                <Heading level={2} className="mb-6">Who We Are</Heading>
                <TextBlock>
                  <p className="mb-4">
                    The Atypical Studio started over ten years ago on Upwork with a simple purpose: help students in the Philippines earn while studying through technology work.
                  </p>
                  <p className="mb-4">
                    As those students graduated, the team stayed together. We continued working with clients on data entry, research, data verification, and ecommerce operations. Many of those relationships lasted for years. We didn&apos;t just complete tasks—we became familiar with how small businesses actually ran day to day.
                  </p>
                  <p className="mb-4">
                    Through that work, something became clear. Small teams were spending too much time on administrative work and workarounds. Off-the-shelf tools didn&apos;t fit how they operated, and custom solutions were often out of reach. New technology was moving fast, but it wasn&apos;t helping the businesses that needed flexibility the most.
                  </p>
                  <p className="mb-4">
                    Today, we&apos;re still the same team, more than a decade later, but our focus has shifted. We design and build custom websites, automation, and internal tools for small-to-mid sized businesses that have outgrown generic software. Our work is shaped by real workflows, changing needs, and long-term use—not templates or one-off builds.
                  </p>
                  <p>
                    The principle we started with hasn&apos;t changed: use technology to make work more sustainable for the people doing it. That belief continues to guide how we work and who we choose to work with.
                  </p>
                </TextBlock>
              </div>

              {/* Team Photos */}
              <div className="pt-6">
                <div className="max-w-md mx-auto space-y-3">
                  <div
                    className="rounded-2xl bg-surface border border-border overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => openModal("/images/team/team-photo.png", "The Atypical Studio Team")}
                  >
                    <img
                      src="/images/team/team-photo.png"
                      alt="The Atypical Studio Team"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="font-serif text-xs text-secondary text-center">
                    Team moments from a decade of collaboration.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Ways of Working Section (Full Detail) */}
      <Section variant="light" className="relative bg-surface border-y border-border">
        <SectionBackground variant="convergence-subtle" position="right" />
        <Container className="relative z-10">
          <Reveal>
            <Heading level={2} className="mb-12">
              Ways of Working
            </Heading>
          </Reveal>
          <StaggerGroup>
            <Grid cols={3}>
              <StaggerItem>
                <div className="bg-page rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
                  <h3 className="font-sans text-2xl font-black text-primary mb-4">
                    Custom Websites
                  </h3>
                  <TextBlock>
                    <p className="mb-4">
                      We build websites that bring your ideas to life. Whether you&apos;re launching a new business or need to establish an online presence, we translate your vision into a functional, professional website.
                    </p>
                    <p className="mb-4">
                      For founders who face barriers with technology, we guide you through the process and build exactly what you need—no cookie-cutter templates.
                    </p>
                    <p className="font-sans text-sm italic text-secondary">
                      Best when you have an idea but need help making it real.
                    </p>
                  </TextBlock>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-page rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
                  <h3 className="font-sans text-2xl font-black text-primary mb-4">
                    Automation & Workflow Tools
                  </h3>
                  <TextBlock>
                    <p className="mb-4">
                      We build custom systems that reduce manual administrative work. If you&apos;re spending too much time on repetitive tasks, we create tools that automate your specific workflow.
                    </p>
                    <p className="mb-4">
                      These aren&apos;t off-the-shelf solutions—they&apos;re built to fit exactly how your business operates, saving you time and letting you focus on growth.
                    </p>
                    <p className="font-sans text-sm italic text-secondary">
                      Best when administrative work is slowing you down.
                    </p>
                  </TextBlock>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-page rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
                  <h3 className="font-sans text-2xl font-black text-primary mb-4">
                    Custom Software Solutions
                  </h3>
                  <TextBlock>
                    <p className="mb-4">
                      When off-the-shelf software doesn&apos;t fit your needs, we build custom tools tailored to your business. As you grow and your needs change, we adapt the systems and add new features.
                    </p>
                    <p className="mb-4">
                      This is a partnership that evolves with you—we stay with you over time, modifying and expanding your tools as your business scales.
                    </p>
                    <p className="font-sans text-sm italic text-secondary">
                      Best when you need solutions that grow with your business.
                    </p>
                  </TextBlock>
                </div>
              </StaggerItem>
            </Grid>
          </StaggerGroup>
        </Container>
      </Section>

      {/* How We Partner Section (Full Detail) */}
      <Section variant="light" className="relative border-t border-border">
        <SectionBackground variant="convergence-minimal" position="left" />
        <Container className="relative z-10">
          <Reveal>
            <div className="space-y-12 max-w-prose mx-auto">
              <Heading level={2}>How We Partner</Heading>

              <TextBlock>
                <h3 className="font-sans text-xl font-black text-primary mb-3">High-Touch Relationships</h3>
                <p className="mb-4">
                  We build long-term relationships with our clients. When your business grows and your needs change, we&apos;re here to adapt your systems, add new features, and build new capabilities.
                </p>
                <p>
                  This isn&apos;t a one-time project—it&apos;s an ongoing partnership. We stay involved as your business evolves, ensuring your technology grows with you.
                </p>
              </TextBlock>

              <TextBlock>
                <h3 className="font-sans text-xl font-black text-primary mb-3">How We Work Together</h3>
                <p className="mb-4">
                  We start by understanding your workflow, constraints, and goals. Then we work closely with you to build solutions that fit your exact needs—not generic templates.
                </p>
                <p className="mb-4">
                  Communication is direct and regular. We keep you informed throughout the process and involve you in decisions that affect your business.
                </p>
                <p>
                  Because we&apos;ve been working together as a team for over 10 years, we bring stability and consistency to every engagement.
                </p>
              </TextBlock>

              <TextBlock>
                <h3 className="font-sans text-xl font-black text-primary mb-3">What Makes Us Different</h3>
                <p className="mb-4">
                  We serve businesses that larger agencies overlook—small teams without big budgets who need custom solutions, not off-the-shelf software.
                </p>
                <p>
                  Our focus is on underserved businesses where technology hasn&apos;t reached yet. We build what you actually need, not what&apos;s easy to sell.
                </p>
              </TextBlock>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Meet the Team Section */}
      <Section variant="light" className="relative border-t border-border bg-surface">
        <SectionBackground variant="convergence-minimal" position="right" />
        <Container className="relative z-10">
          <Reveal>
            <div className="space-y-12">
              <div className="max-w-prose mx-auto">
                <Heading level={2} className="mb-6">
                  Meet the Team
                </Heading>
                <TextBlock>
                  <h3 className="font-sans text-xl font-black text-primary mb-3">Core Team</h3>
                  <p className="mb-4">
                    We&apos;re a small, long-standing team that&apos;s been working together for years. We care about doing work properly, supporting each other, and building solutions that hold up over time.
                  </p>
                  <p>
                    Our roles span product, engineering, operations, and delivery, but what connects us is a shared respect for the people behind the work - both our clients and our teammates.
                  </p>
                </TextBlock>
              </div>

              <div className="max-w-5xl mx-auto">
                <Grid cols={2} gap="tight">
                  <div className="rounded-2xl border border-border bg-page p-6 shadow-sm md:col-span-2 md:max-w-3xl md:mx-auto">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div
                        className="h-24 w-24 md:h-32 md:w-32 rounded-full border border-border bg-surface overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all"
                        onClick={() => openModal("/images/team/susannie-tiempo.jpeg", "Susannie Tiempo headshot")}
                      >
                        <img
                          src="/images/team/susannie-tiempo.jpeg"
                          alt="Susannie Tiempo headshot"
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-sans text-xl font-black text-primary">Susannie Tiempo</h4>
                          <p className="font-sans text-xs uppercase tracking-wide text-secondary mt-1">
                            Founder, Quality & Product Development Lead
                          </p>
                        </div>
                        <TextBlock size="sm" className="max-w-none text-secondary">
                          <p>
                            Leads product direction and quality, making sure what we build actually works for the people using it.
                          </p>
                          <p className="mt-3">
                            Outside of work, she enjoys reading and traveling, often drawing inspiration from the places and stories she encounters.
                          </p>
                        </TextBlock>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-page p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div
                        className="h-24 w-24 md:h-32 md:w-32 rounded-full border border-border bg-surface overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all"
                        onClick={() => openModal("/images/team/grethel-bacundator.jpeg", "Grethel Bacunador headshot")}
                      >
                        <img
                          src="/images/team/grethel-bacundator.jpeg"
                          alt="Grethel Bacunador headshot"
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-sans text-xl font-black text-primary">Grethel Bacunador</h4>
                          <p className="font-sans text-xs uppercase tracking-wide text-secondary mt-1">
                            Operations Lead
                          </p>
                        </div>
                        <TextBlock size="sm" className="max-w-none text-secondary">
                          <p>
                            Keeps day-to-day operations running smoothly and ensures work is delivered reliably and on time.
                          </p>
                          <p className="mt-3">
                            She unwinds by reading on Wattpad and watching MasterChef.
                          </p>
                        </TextBlock>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-page p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div
                        className="h-24 w-24 md:h-32 md:w-32 rounded-full border border-border bg-surface overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all"
                        onClick={() => openModal("/images/team/noemi-camaro.jpeg", "Noemi Camero headshot")}
                      >
                        <img
                          src="/images/team/noemi-camaro.jpeg"
                          alt="Noemi Camero headshot"
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-sans text-xl font-black text-primary">Noemi Camero</h4>
                          <p className="font-sans text-xs uppercase tracking-wide text-secondary mt-1">
                            Customer Success Lead
                          </p>
                        </div>
                        <TextBlock size="sm" className="max-w-none text-secondary">
                          <p>
                            Works closely with clients to understand their needs and make sure solutions continue to support their work as it evolves.
                          </p>
                          <p className="mt-3">
                            She&apos;s a self-confessed K-drama addict and brings the same attentiveness to her client relationships.
                          </p>
                        </TextBlock>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-page p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div className="h-24 w-24 md:h-32 md:w-32 rounded-full border border-border bg-surface flex items-center justify-center text-[10px] font-sans uppercase tracking-wide text-secondary">
                        Headshot
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-sans text-xl font-black text-primary">Rein Filosopo</h4>
                          <p className="font-sans text-xs uppercase tracking-wide text-secondary mt-1">
                            Human Resources & Recruitment
                          </p>
                        </div>
                        <TextBlock size="sm" className="max-w-none text-secondary">
                          <p>
                            Handles hiring, onboarding, and people operations, supporting the team behind the work.
                          </p>
                          <p className="mt-3">
                            Outside of HR, Rein is a hardcore Swiftie who also loves anime and getting lost in a good book.
                          </p>
                        </TextBlock>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-page p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div className="h-24 w-24 md:h-32 md:w-32 rounded-full border border-border bg-surface flex items-center justify-center text-[10px] font-sans uppercase tracking-wide text-secondary">
                        Headshot
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-sans text-xl font-black text-primary">Mariel Anne Filosopo</h4>
                          <p className="font-sans text-xs uppercase tracking-wide text-secondary mt-1">
                            Senior Software Developer
                          </p>
                        </div>
                        <TextBlock size="sm" className="max-w-none text-secondary">
                          <p>
                            Builds and maintains custom software and internal tools with a focus on stability, performance, and long-term use.
                          </p>
                          <p className="mt-3">
                            When she&apos;s not coding, she&apos;s usually deep into anime, books, or Taylor Swift playlists.
                          </p>
                        </TextBlock>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-page p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div
                        className="h-24 w-24 md:h-32 md:w-32 rounded-full border border-border bg-surface overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all"
                        onClick={() => openModal("/images/team/mariel-jasmin-orais.jpeg", "Mariel Jasmin Orais headshot")}
                      >
                        <img
                          src="/images/team/mariel-jasmin-orais.jpeg"
                          alt="Mariel Jasmin Orais headshot"
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-sans text-xl font-black text-primary">Mariel Jasmin Orais</h4>
                          <p className="font-sans text-xs uppercase tracking-wide text-secondary mt-1">
                            Product & Delivery Specialist
                          </p>
                        </div>
                        <TextBlock size="sm" className="max-w-none text-secondary">
                          <p>
                            Supports product development and delivery, coordinating work from planning through release.
                          </p>
                          <p className="mt-3">
                            She enjoys traveling and gardening, and brings the same patience and care to her work.
                          </p>
                        </TextBlock>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-page p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div
                        className="h-24 w-24 md:h-32 md:w-32 rounded-full border border-border bg-surface overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all"
                        onClick={() => openModal("/images/team/drexter-sembreno.jpeg", "Drexter Sembreno headshot")}
                      >
                        <img
                          src="/images/team/drexter-sembreno.jpeg"
                          alt="Drexter Sembreno headshot"
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-sans text-xl font-black text-primary">Drexter Sembreno</h4>
                          <p className="font-sans text-xs uppercase tracking-wide text-secondary mt-1">
                            Marketing
                          </p>
                        </div>
                        <TextBlock size="sm" className="max-w-none text-secondary">
                          <p>
                            Handles marketing execution and content, helping communicate what we do clearly and honestly.
                          </p>
                          <p className="mt-3">
                            Outside of work, he enjoys traveling and exploring new creative ideas.
                          </p>
                        </TextBlock>
                      </div>
                    </div>
                  </div>
                </Grid>
              </div>

              <div className="max-w-prose mx-auto">
                <TextBlock>
                  <h3 className="font-sans text-xl font-black text-primary mb-3">Extended Team</h3>
                  <p className="mb-4">
                    Alongside our core team, we work with a small group of trusted independent contributors who support specific parts of our projects. These are people we&apos;ve collaborated with over time - specialists we bring in when their skills are the right fit.
                  </p>
                  <p>
                    They work within our standards, processes, and quality expectations, allowing us to stay flexible without compromising how the work is done or how clients are supported.
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
                If this sounds like a fit, let&apos;s talk.
              </Heading>
              <p className="font-serif text-lg text-inverse opacity-90 max-w-2xl mx-auto">
                No sales pitch. No urgency. Just a thoughtful conversation about whether we might work well together.
              </p>
              <div className="pt-4">
                <CTA href="/start-a-conversation" />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Footer />

      <ImageModal
        isOpen={modalImage !== null}
        onClose={closeModal}
        imageSrc={modalImage?.src || ""}
        imageAlt={modalImage?.alt || ""}
      />
    </div>
  );
}
