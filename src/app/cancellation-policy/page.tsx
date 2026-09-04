'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CancellationPolicyPage() {
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
          Cancellation, Rescheduling and Payment Policies
        </h1>

        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6B5D50', margin: '0 0 40px', fontWeight: 600 }}>
          Updated on 1st September 2026
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#4A3F36', margin: '0 0 40px' }}>
          At Metamorphosis Therapy Initiative, we aim to make therapy services accessible and affordable. We also understand that unforeseen circumstances may arise, and you may need to cancel or reschedule the session. This policy outlines our procedures for cancellations, rescheduling and concerns related to our services.
        </p>

        {/* Section 1 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.3, color: '#2B2420', margin: '0 0 20px' }}>
            1. Reschedule and Cancellation of Appointments
          </h2>

          <div style={{ marginLeft: '24px' }}>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 16px' }}>
              <strong>a.</strong> We request at least a 24 hour notice if you need to cancel or reschedule your appointment. This allows us to offer the slot to another client in need.
            </p>

            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 16px' }}>
              <strong>b.</strong> If a session is cancelled less than 24 hours in advance, 50% of the session fee will be charged.
            </p>

            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 16px' }}>
              <strong>c.</strong> Should a client arrive 15 minutes or more past the scheduled session start time without prior notice, the session shall be deemed cancelled and the full session fee will be charged.
            </p>

            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: 0 }}>
              <strong>d.</strong> We understand that emergencies can happen. If you need to cancel unexpectedly, please contact your therapist and we'll do our best to support you.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.3, color: '#2B2420', margin: '0 0 20px' }}>
            2. Fee Structure
          </h2>

          <div style={{ marginLeft: '24px' }}>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 16px' }}>
              <strong>a.</strong> The therapist may revise the session fee by a small percentage once a year. This adjustment helps support the growth and sustainability of the organisation, fair compensation for the work done, and the pursuit of ongoing professional development.
            </p>

            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 16px' }}>
              <strong>b.</strong> Clients will be notified at least 30 days in advance of any fee changes.
            </p>

            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 16px' }}>
              <strong>c.</strong> If you have any concerns or questions, you are welcome to discuss them with your individual therapist or contact our team directly on email – <a href="mailto:hello@metamorphosistherapy.in" style={{ color: '#C2445B', textDecoration: 'underline' }}>hello@metamorphosistherapy.in</a>
            </p>

            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: 0 }}>
              <strong>d.</strong> In case a session extends beyond the scheduled 60 minutes, an additional fee will be charged proportionately, based on the session fee.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.3, color: '#2B2420', margin: '0 0 20px' }}>
            3. Scope of this Policy
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 16px' }}>
            This policy specifically applies to paid counselling sessions and supervision sessions.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: 0 }}>
            Please note that other services (workshops, group therapy etc) offered by Metamorphosis may have separate policies. For clarification regarding specific services, feel free to reach out to us directly.
          </p>
        </section>

        {/* Section 4 */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.3, color: '#2B2420', margin: '0 0 20px' }}>
            4. Policy Updates and Contact
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '0 0 16px' }}>
            This Refund and Cancellation Policy is subject to change at the discretion of Metamorphosis Therapy Initiative. We will update you on any changes within the policy as they are implemented.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: 0 }}>
            If you have any questions or need further clarification, please don't hesitate to get in touch:
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A3F36', margin: '16px 0 0' }}>
            Email us on <a href="mailto:hello@metamorphosistherapy.in" style={{ color: '#C2445B', textDecoration: 'underline', fontWeight: 600 }}>hello@metamorphosistherapy.in</a>
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
