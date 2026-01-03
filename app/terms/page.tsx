import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextBlock } from "@/components/ui/TextBlock";
import { Reveal } from "@/components/motion/Reveal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { PageConnections } from "@/components/ui/PageConnections";

export const metadata: Metadata = {
  title: "Terms of Service | The Atypical Studio",
  description:
    "Terms of service for The Atypical Studio. Please read these terms carefully before using our services.",
};

export default function TermsPage() {
  return (
    <div className="relative">
      <PageConnections />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark text-inverse min-h-[60vh] flex items-center">
        <SectionBackground variant="convergence-glow" position="center" />
        <Container className="relative z-10">
          <Reveal>
            <div className="space-y-6 max-w-3xl">
              <h1 className="font-sans text-4xl md:text-5xl font-black tracking-tight text-inverse">
                Terms of Service
              </h1>
              <p className="font-sans text-lg md:text-xl text-inverse opacity-90">
                Please read these terms carefully before using our services or website.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Terms Content */}
      <Section variant="light" className="relative border-t border-border">
        <Container>
          <Reveal>
            <div className="max-w-prose mx-auto space-y-12">
              <div>
                <p className="font-serif text-sm text-secondary mb-8">
                  Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>

              <div>
                <Heading level={2}>Agreement to Terms</Heading>
                <TextBlock>
                  <p className="mb-4">
                    By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                  </p>
                  <p>
                    The materials contained in this website are protected by applicable copyright and trademark law.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Use License</Heading>
                <TextBlock>
                  <p className="mb-4">
                    Permission is granted to temporarily download one copy of the materials on The Atypical Studio&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 font-serif text-base text-secondary">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
                  </ul>
                  <p>
                    This license shall automatically terminate if you violate any of these restrictions and may be terminated by The Atypical Studio at any time.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Services</Heading>
                <TextBlock>
                  <p className="mb-4">
                    The Atypical Studio provides custom software development, website design, and related technology services. All services are provided subject to separate service agreements that will be entered into between you and The Atypical Studio.
                  </p>
                  <p>
                    We reserve the right to refuse service to anyone for any reason at any time.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Disclaimer</Heading>
                <TextBlock>
                  <p className="mb-4">
                    The materials on The Atypical Studio&apos;s website are provided on an &apos;as is&apos; basis. The Atypical Studio makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                  <p>
                    Further, The Atypical Studio does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Limitations</Heading>
                <TextBlock>
                  <p className="mb-4">
                    In no event shall The Atypical Studio or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Atypical Studio&apos;s website, even if The Atypical Studio or a The Atypical Studio authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                  <p>
                    Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Accuracy of Materials</Heading>
                <TextBlock>
                  <p>
                    The materials appearing on The Atypical Studio&apos;s website could include technical, typographical, or photographic errors. The Atypical Studio does not warrant that any of the materials on its website are accurate, complete, or current. The Atypical Studio may make changes to the materials contained on its website at any time without notice.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Links</Heading>
                <TextBlock>
                  <p className="mb-4">
                    The Atypical Studio has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by The Atypical Studio of the site.
                  </p>
                  <p>
                    Use of any such linked website is at the user&apos;s own risk.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Modifications</Heading>
                <TextBlock>
                  <p className="mb-4">
                    The Atypical Studio may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Governing Law</Heading>
                <TextBlock>
                  <p>
                    These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Contact Information</Heading>
                <TextBlock>
                  <p className="mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <p className="font-sans text-base text-primary">
                    The Atypical Studio<br />
                    Email: admin@theatypicalstudio.com
                  </p>
                </TextBlock>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}

