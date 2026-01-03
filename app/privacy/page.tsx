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
  title: "Privacy Policy | The Atypical Studio",
  description:
    "Privacy policy for The Atypical Studio. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <p className="font-sans text-lg md:text-xl text-inverse opacity-90">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Privacy Policy Content */}
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
                <Heading level={2}>Information We Collect</Heading>
                <TextBlock>
                  <p className="mb-4">
                    We collect information that you provide directly to us, such as when you fill out our contact form, communicate with us, or use our services. This may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 font-serif text-base text-secondary">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Information about your project or business needs</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                  <p>
                    We may also automatically collect certain information about your device and how you interact with our website, such as your IP address, browser type, and pages visited.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>How We Use Your Information</Heading>
                <TextBlock>
                  <p className="mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 font-serif text-base text-secondary">
                    <li>Respond to your inquiries and provide our services</li>
                    <li>Communicate with you about your projects</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Data Security</Heading>
                <TextBlock>
                  <p className="mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                  </p>
                  <p>
                    While we strive to protect your personal information, we cannot guarantee its absolute security.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Cookies and Tracking Technologies</Heading>
                <TextBlock>
                  <p className="mb-4">
                    Our website may use cookies and similar tracking technologies to enhance your experience. You can set your browser to refuse cookies, but this may limit some functionality of our website.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Third-Party Services</Heading>
                <TextBlock>
                  <p className="mb-4">
                    We may use third-party services to help us operate our website and business. These services may have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Your Rights</Heading>
                <TextBlock>
                  <p className="mb-4">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 font-serif text-base text-secondary">
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate information</li>
                    <li>The right to request deletion of your information</li>
                    <li>The right to object to processing of your information</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Data Retention</Heading>
                <TextBlock>
                  <p>
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Children&apos;s Privacy</Heading>
                <TextBlock>
                  <p>
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Changes to This Policy</Heading>
                <TextBlock>
                  <p className="mb-4">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
                  </p>
                  <p>
                    We encourage you to review this policy periodically to stay informed about how we protect your information.
                  </p>
                </TextBlock>
              </div>

              <div>
                <Heading level={2}>Contact Us</Heading>
                <TextBlock>
                  <p className="mb-4">
                    If you have any questions about this privacy policy or our data practices, please contact us:
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

