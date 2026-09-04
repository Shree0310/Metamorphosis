'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main style={{ background: '#FFFBF2', minHeight: '100vh' }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ background: '#FFFBF2', borderColor: '#E0D5C7' }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-16">
          <Link
            href="/"
            scroll={false}
            className="flex items-center gap-2 no-underline hover:no-underline"
            style={{ color: '#2B2420' }}
          >
            <div style={{ width: '36px', height: '36px', position: 'relative' }}>
              <Image
                src="/logopng.png"
                alt="Metamorphosis Therapy Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-baloo)',
                fontWeight: 700,
                fontSize: '20px',
                letterSpacing: '-0.01em'
              }}
            >
              Metamorphosis Therapy Initiative
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex" style={{ fontSize: '15px' }}>
            <Link href="/about" scroll={false} style={{ color: '#4A3F36', textDecoration: 'none' }}>
              About
            </Link>
            <Link href="/services" scroll={false} style={{ color: '#4A3F36', textDecoration: 'none' }}>
              Services
            </Link>
            <Link href="/faq" scroll={false} style={{ color: '#4A3F36', textDecoration: 'none' }}>
              FAQ
            </Link>
            <Link href="/contact" scroll={false} style={{ color: '#4A3F36', textDecoration: 'none' }}>
              Contact
            </Link>
            <Link
              href="/book-now"
              scroll={false}
              style={{
                fontFamily: 'var(--font-baloo)',
                fontWeight: 700,
                fontSize: '14.5px',
                padding: '8px 16px',
                background: '#FF6F81',
                color: '#FFFFFF',
                borderRadius: '0',
                textDecoration: 'none',
                border: 'none'
              }}
            >
              Book a Session
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2B2420" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav
            className="border-t md:hidden"
            style={{
              background: '#FFFBF2',
              borderColor: '#E0D5C7',
              padding: '16px 20px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href="/about" scroll={false} style={{ color: '#4A3F36', textDecoration: 'none', padding: '8px 0' }}>
                About
              </Link>
              <Link href="/services" scroll={false} style={{ color: '#4A3F36', textDecoration: 'none', padding: '8px 0' }}>
                Services
              </Link>
              <Link href="/faq" scroll={false} style={{ color: '#4A3F36', textDecoration: 'none', padding: '8px 0' }}>
                FAQ
              </Link>
              <Link href="/contact" scroll={false} style={{ color: '#4A3F36', textDecoration: 'none', padding: '8px 0' }}>
                Contact
              </Link>
              <Link
                href="/book-now"
                scroll={false}
                style={{
                  fontFamily: 'var(--font-baloo)',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  padding: '10px 16px',
                  background: '#FF6F81',
                  color: '#FFFFFF',
                  borderRadius: '0',
                  textDecoration: 'none',
                  textAlign: 'center',
                  marginTop: '8px'
                }}
              >
                Book a Session
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 40px)' }}>
        <h1 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#2B2420', margin: '0 0 12px' }}>
          Confidentiality and Privacy Policy
        </h1>

        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6B5D50', margin: '0 0 40px', fontWeight: 600 }}>
          Updated on 1st September 2026
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#4A3F36', margin: '0 0 40px' }}>
          This document contains our policies regarding therapy services online. If you have any questions, your therapist will discuss them with you.
        </p>

        {/* Section 1 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.3, color: '#2B2420', margin: '0 0 20px' }}>
            1. Client-Therapist Relationship
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: 0 }}>
            The therapeutic relationship is strictly professional and exists solely for therapeutic purposes. The relationship is most effective when it remains clearly defined and focused exclusively on therapeutic work. To maintain its integrity, therapists do not engage in personal, social, or business relationships with clients. In line with this, therapists do not accept gifts or engage in exchanges of services under any circumstances.
          </p>
        </section>

        {/* Section 2 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.3, color: '#2B2420', margin: '0 0 20px' }}>
            2. Confidentiality of Information
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 24px' }}>
            Your privacy is very important to us. As a client, you have the right to expect that what you share during therapy will remain private. All information shared in your sessions is kept confidential. In most situations, we cannot share any information about your sessions without your written permission. However, there are certain situations where confidentiality may need to be limited:
          </p>

          <div style={{ marginLeft: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, fontSize: '18px', color: '#2B2420', margin: '0 0 12px' }}>
              a. Professional Consultations
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 20px' }}>
              At times, your therapist may consult with other mental health professionals to provide the best possible care. When this happens, identifying details are not shared, and those professionals are also bound to keep the information confidential.
            </p>

            <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, fontSize: '18px', color: '#2B2420', margin: '0 0 12px' }}>
              b. Practice Team and Administrative Staff
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 20px' }}>
              We work in a practice with other therapists and administrative staff. In order to manage scheduling, billing, or quality assurance, it may be necessary to share limited information. All team members are trained in privacy practices and are required to uphold confidentiality.
            </p>

            <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, fontSize: '18px', color: '#2B2420', margin: '0 0 12px' }}>
              c. Safety Concerns
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: 0 }}>
              If we believe that you are at risk of seriously harming yourself, we may need to take steps to ensure your safety. This could include contacting trusted individuals (that you trust). We will involve you in these situations and your consent will be sought before any decision is made.
            </p>
          </div>
        </section>

        {/* Section 3 - Limits to Confidentiality */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.3, color: '#2B2420', margin: '0 0 20px' }}>
            3. Limits to Confidentiality
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 24px' }}>
            There are some rare situations where the law may require or allow us to share information without your consent:
          </p>

          <div style={{ marginLeft: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, fontSize: '18px', color: '#2B2420', margin: '0 0 12px' }}>
              a. Legal Proceedings
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 20px' }}>
              If you are involved in a court case and we receive a legal order, we may be required to share relevant information.
            </p>

            <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, fontSize: '18px', color: '#2B2420', margin: '0 0 12px' }}>
              b. Government Requests
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 20px' }}>
              If a government agency legally requires information, we may need to comply.
            </p>

            <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, fontSize: '18px', color: '#2B2420', margin: '0 0 12px' }}>
              c. Complaints or Legal Action
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: 0 }}>
              If a client files a complaint or takes legal action against the therapist or practice, we may share relevant information as part of our response.
            </p>
          </div>
        </section>

        {/* Section 4 - Protection of Others */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.3, color: '#2B2420', margin: '0 0 20px' }}>
            4. Protection of Others
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 24px' }}>
            We are legally required to take protective steps if we believe someone is in danger. These include:
          </p>

          <div style={{ marginLeft: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, fontSize: '18px', color: '#2B2420', margin: '0 0 12px' }}>
              a. Child Abuse
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 20px' }}>
              If we suspect that a child is being severley abused, we must report this to child protection authorities.
            </p>

            <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, fontSize: '18px', color: '#2B2420', margin: '0 0 12px' }}>
              b. Abuse of a Vulnerable Adult or Elder
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 20px' }}>
              If we believe that a disabled adult or elderly person is being abused or neglected, we are also required to report this.
            </p>

            <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, fontSize: '18px', color: '#2B2420', margin: '0 0 12px' }}>
              c. Serious Threat to Others
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: 0 }}>
              If we believe that a client poses a serious threat of harm to another person, we may need to warn the intended victim or notify the police.
            </p>
          </div>
        </section>

        {/* Transparency Section */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.3, color: '#2B2420', margin: '0 0 20px' }}>
            Transparency and Minimal Disclosure
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: 0 }}>
            If any of these situations arise, we will first and foremost, talk to you and then share only the information that is necessary.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '20px 0 0', fontStyle: 'italic' }}>
            Please feel free to ask if you have any questions or concerns about how your confidentiality is protected.
          </p>
        </section>

        {/* Section 5 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.3, color: '#2B2420', margin: '0 0 20px' }}>
            5. Professional Records
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 16px' }}>
            Your therapist maintains confidential professional records of your sessions. These records include relevant details from our work together and are kept securely in accordance with ethical and legal standards.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: 0 }}>
            We take the privacy and security of your information very seriously. All records are stored using secure systems and are password protected. This ensures that any confidential information accessed in the course of service delivery remains protected at all times.
          </p>
        </section>

        {/* Section 6 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.3, color: '#2B2420', margin: '0 0 20px' }}>
            6. Rights with Respect to Online Therapy
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 16px' }}>
            Online therapy refers to the delivery of psychological services using electronic communication methods such as secure video and audio platforms. This allows therapist to provide care remotely, while maintaining professional and ethical standards.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 16px' }}>
            While we strive to ensure privacy and security in all online interactions, clients are encouraged to participate in sessions from a private, quiet space and to use secure internet connections whenever possible.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 24px' }}>
            As a client engaging in online therapy, you are entitled to the same rights and confidentiality protections as any in-person therapy. The personal information you share during sessions is confidential and with a few legal exceptions that are mentioned above (note point 2). Your personal information or identifiable images will not be shared without your written consent.
          </p>

          <div style={{ marginLeft: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, fontSize: '18px', color: '#2B2420', margin: '0 0 12px' }}>
              a. Participation and Consent
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 20px' }}>
              You have the right to decline or discontinue online therapy at any time without affecting your access to future care. If it is determined that in-person services may better suit your needs, you will be referred to a qualified provider in your area.
            </p>

            <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, fontSize: '18px', color: '#2B2420', margin: '0 0 12px' }}>
              b. Risks and Security
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 20px' }}>
              While we use secure, encrypted platforms, there are inherent risks with any online communication. These include potential technical disruptions, unauthorized access, or loss of data despite reasonable safeguards.
            </p>

            <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, fontSize: '18px', color: '#2B2420', margin: '0 0 12px' }}>
              c. Benefits and Limitations
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 20px' }}>
              Online therapy may offer improved access and convenience, but results cannot be guaranteed. Like all therapy, it may have varying outcomes, including the possibility of no improvement or temporary worsening of symptoms.
            </p>

            <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, fontSize: '18px', color: '#2B2420', margin: '0 0 12px' }}>
              d. Scheduling, Billing, and Records
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: 0 }}>
              Your healthcare information may be shared with administrative staff for scheduling and billing, all of whom are bound by confidentiality. Your explicit consent is required before sharing your information with any third party.
            </p>
          </div>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '24px 0 0', fontStyle: 'italic' }}>
            By continuing, you acknowledge understanding of the above and consent to receive therapy via secure video conferencing.
          </p>
        </section>

        {/* Section 7 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.3, color: '#2B2420', margin: '0 0 20px' }}>
            7. Crisis Situations
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 16px' }}>
            By accepting this document, you acknowledge that therapy, delivered via audio, video, or offline may not be suitable for all situations, especially emergencies or crises. If you are experiencing a crisis or are in immediate danger, please contact emergency services by calling 108 (in India), or go to the nearest hospital or crisis-oriented facility in your area for immediate support.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: 0 }}>
            While we are here to support your mental health, we may not be able to respond in real time during urgent situations. However, we can connect you with the right support services.
          </p>
        </section>

        {/* Section 8 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.3, color: '#2B2420', margin: '0 0 20px' }}>
            8. Payment for Therapy Services
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: 0 }}>
            Payment for both online therapy sessions (Individual and Couples) is due 48 hours before the time of service. Accepted methods include credit/debit cards, net banking, bank transfers, e-wallets, and UPI. All transactions are processed through secure, encrypted payment gateways to ensure the safety and confidentiality of your financial information.
          </p>
        </section>

        {/* Section 9 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.3, color: '#2B2420', margin: '0 0 20px' }}>
            9. Termination of Services
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: 0 }}>
            Ending therapy is a collaborative process. If you're considering discontinuation of therapy services, we encourage open and honest communication so we can support a thoughtful transition, explore any concerns, and ensure continuity of care if needed.
          </p>
        </section>

        {/* Consent Section */}
        <section style={{ background: '#FBF3EF', padding: 'clamp(24px, 5vw, 40px)', borderRadius: '8px', border: '1px solid #E0D5C7', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.3, color: '#2B2420', margin: '0 0 20px' }}>
            Client Consent for Therapy
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 16px' }}>
            I confirm that I have read and understood the information provided regarding therapy services, including the potential risks and benefits. I have had the opportunity to discuss this with my therapist and have had all my questions answered to my satisfaction.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: 0 }}>
            By accepting this document, I voluntarily give my informed consent to participate in therapy, including online sessions, as outlined above. I agree to the terms and conditions described and understand my rights as a client.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer style={{ background: '#FFFBF2', borderTop: '1px solid #E0D5C7', padding: 'clamp(32px, 6vw, 48px) clamp(20px, 5vw, 64px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '24px', fontSize: '14px', color: '#6B5D50' }}>
          <div>
            <p style={{ margin: 0 }}>hello@metamorphosistherapy.in</p>
            <p style={{ margin: '4px 0 0' }}>Mumbai, Maharashtra, India</p>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href="https://instagram.com/metamorphosis.therapy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#6B5D50', textDecoration: 'none', fontWeight: 700 }}
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/in/kuntal-vora-30413b141"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#6B5D50', textDecoration: 'none', fontWeight: 700 }}
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p style={{ maxWidth: '1200px', margin: '24px auto 0', fontSize: '12px', lineHeight: 1.6, color: '#8A7B6C' }}>
          Online services are not suitable for crises or emergencies. Please visit your nearest mental health center or a helpline if you need immediate support.
        </p>
        <div style={{ maxWidth: '1200px', margin: '16px auto 0', display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '12px' }}>
          <Link href="/privacy-policy" style={{ color: '#8A7B6C', textDecoration: 'underline' }}>
            Privacy Policy
          </Link>
          <Link href="/cancellation-policy" style={{ color: '#8A7B6C', textDecoration: 'underline' }}>
            Cancellation Policy
          </Link>
        </div>
        <p style={{ maxWidth: '1200px', margin: '16px auto 0', fontSize: '12px', color: '#8A7B6C' }}>
          © 2026 Metamorphosis Therapy Initiative
        </p>
      </footer>
    </main>
  );
}
