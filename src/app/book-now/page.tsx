'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Cal, { getCalApi } from "@calcom/embed-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  referredBy: string;
  message: string;
};

const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  referredBy: '',
  message: '',
};

type SessionType = 'individual' | 'couple' | 'supervision';

interface SessionConfig {
  namespace: string;
  calLink: string;
  label: string;
}

const sessionConfigs: Record<SessionType, SessionConfig> = {
  individual: {
    namespace: 'individual-session',
    calLink: 'sourashree-banerjee-vnxoqo/individual-session',
    label: 'Individual Session'
  },
  couple: {
    namespace: 'couple-session',
    calLink: 'sourashree-banerjee-vnxoqo/couple-session',
    label: 'Couple Session'
  },
  supervision: {
    namespace: 'supervision',
    calLink: 'sourashree-banerjee-vnxoqo/supervision',
    label: 'Supervision'
  }
};

export default function BookNowPage() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaqIds, setOpenFaqIds] = useState<string[]>([]);
  const [selectedSession, setSelectedSession] = useState<SessionType>('individual');
  const [isCalLoading, setIsCalLoading] = useState(false);

  useEffect(() => {
    setIsCalLoading(true);
    (async function () {
      const config = sessionConfigs[selectedSession];
      const cal = await getCalApi({ namespace: config.namespace });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#FF6F81" },
          dark: { "cal-brand": "#FF6F81" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
      // Small delay to ensure smooth transition
      setTimeout(() => setIsCalLoading(false), 300);
    })();
  }, [selectedSession]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqIds(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        select option {
          background-color: #FBF3EF !important;
          color: #2B2420 !important;
        }
        select option:checked,
        select option:focus,
        select option:hover,
        select option[selected] {
          background-color: #FDEEEF !important;
          background: #FDEEEF !important;
          color: #2B2420 !important;
        }
        select:focus option:checked {
          background: linear-gradient(#FDEEEF, #FDEEEF) !important;
        }
      `}} />
    <main className="min-h-screen text-[#2B2420]" style={{ fontFamily: 'var(--font-kalam)', background: '#FDEEEF' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#EDE6D8] bg-[#FBF3EF] px-5 py-5 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-4 hover:no-underline">
            <Image
              src="/logopng.png"
              alt="Metamorphosis Therapy logo"
              width={32}
              height={32}
              className="block h-8 w-auto"
            />
            <span
              className="text-lg tracking-tight text-[#2B2420]"
              style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
            >
              Metamorphosis Therapy Initiative
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            <Link href="/about" scroll={false} className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500, textDecoration: 'none' }}>
              About
            </Link>
            <Link href="/services" scroll={false} className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500, textDecoration: 'none' }}>
              Services
            </Link>
            <Link href="/faq" scroll={false} className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500, textDecoration: 'none' }}>
              FAQ
            </Link>
            <Link href="/contact" scroll={false} className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500, textDecoration: 'none' }}>
              Contact Us
            </Link>
            <span className="inline-block" style={{ background: '#FF6F81', color: '#FFFBF2', borderRadius: 0, padding: '12px 26px', fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '14.5px' }}>
              Book a Session
            </span>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-[#2B2420] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-[#2B2420] transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-[#2B2420] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 top-[73px] bg-[#FBF3EF] z-40">
            <div className="flex flex-col gap-6 p-8">
              <Link
                href="/about"
                scroll={false}
                onClick={() => setMenuOpen(false)}
                className="text-xl text-[#2B2420] hover:text-[#C2445B] hover:no-underline"
                style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, textDecoration: 'none' }}
              >
                About
              </Link>
              <Link
                href="/services"
                scroll={false}
                onClick={() => setMenuOpen(false)}
                className="text-xl text-[#2B2420] hover:text-[#C2445B] hover:no-underline"
                style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, textDecoration: 'none' }}
              >
                Services
              </Link>
              <Link
                href="/faq"
                scroll={false}
                onClick={() => setMenuOpen(false)}
                className="text-xl text-[#2B2420] hover:text-[#C2445B] hover:no-underline"
                style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, textDecoration: 'none' }}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                scroll={false}
                onClick={() => setMenuOpen(false)}
                className="text-xl text-[#2B2420] hover:text-[#C2445B] hover:no-underline"
                style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, textDecoration: 'none' }}
              >
                Contact Us
              </Link>
              <span
                className="inline-block text-center"
                style={{ background: '#FF6F81', color: '#FFFBF2', borderRadius: 0, padding: '12px 26px', fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '16px' }}
              >
                Book a Session
              </span>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <section style={{ padding: '60px clamp(20px, 5vw, 72px) 80px', maxWidth: '1400px', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative Elements */}
        <svg
          className="absolute left-[5%] top-[10%] h-12 w-12 opacity-25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C2445B"
          strokeWidth="1.5"
          style={{ transform: 'rotate(15deg)' }}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>

        <svg
          className="absolute right-[8%] top-[15%] h-10 w-10 opacity-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF6F81"
          strokeWidth="2"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>

        <svg
          className="absolute left-[85%] top-[35%] h-8 w-8 opacity-30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C7CEEA"
          strokeWidth="1.5"
          style={{ transform: 'rotate(-20deg)' }}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="9" x2="15" y2="15" />
          <line x1="15" y1="9" x2="9" y2="15" />
        </svg>

        <svg
          className="absolute left-[3%] top-[65%] h-11 w-11 opacity-25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FBE0C4"
          strokeWidth="1.5"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>

        <svg
          className="absolute right-[6%] top-[55%] h-9 w-9 opacity-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C9EDE8"
          strokeWidth="2"
          style={{ transform: 'rotate(25deg)' }}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>

        <svg
          className="absolute left-[90%] top-[80%] h-10 w-10 opacity-25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF8B94"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>

        {/* Header */}
        <div style={{ marginBottom: '32px', textAlign: 'center', position: 'relative' }}>
          {/* Decorative elements around heading */}
          <svg
            className="absolute left-[15%] top-[-10px] h-8 w-8 opacity-30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF6F81"
            strokeWidth="2"
            style={{ transform: 'rotate(-15deg)' }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>

          <svg
            className="absolute right-[15%] top-[-5px] h-7 w-7 opacity-25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C2445B"
            strokeWidth="1.5"
            style={{ transform: 'rotate(20deg)' }}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>

          <svg
            className="absolute left-[20%] bottom-[10px] h-6 w-6 opacity-20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C9EDE8"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
          </svg>

          <svg
            className="absolute right-[18%] bottom-[15px] h-7 w-7 opacity-25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C7CEEA"
            strokeWidth="1.5"
            style={{ transform: 'rotate(-25deg)' }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>

          <h1 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#2B2420', margin: '0 0 12px' }}>
            Book a Session
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#4A3F36', maxWidth: '60ch', margin: '0 auto' }}>
            Book directly or <Link href="/contact" scroll={false} style={{ color: '#C2445B', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }}>send your query</Link> — I'll respond within 2 working days
          </p>
        </div>

        {/* Calendar Container */}
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ background: '#FFFFFF', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', overflow: 'hidden', padding: '32px 24px 24px' }}>
            {/* Calendar Heading */}
            <div style={{ textAlign: 'left', marginBottom: '20px' }}>
              <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#2B2420', margin: '0 0 6px' }}>
                Book Your Time Slot
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#4A3F36', margin: 0 }}>
                Ready to schedule? Choose a convenient time for your therapy session
              </p>
            </div>

            {/* Session Type Tabs */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '2px solid #F0EBE3', paddingBottom: '0', flexWrap: 'wrap' }}>
              {(Object.keys(sessionConfigs) as SessionType[]).map((sessionType) => (
                <button
                  key={sessionType}
                  onClick={() => setSelectedSession(sessionType)}
                  style={{
                    fontFamily: 'var(--font-baloo)',
                    fontWeight: 600,
                    fontSize: '15px',
                    padding: '12px 20px',
                    border: 'none',
                    background: 'transparent',
                    color: selectedSession === sessionType ? '#C2445B' : '#6B5D50',
                    cursor: 'pointer',
                    borderBottom: selectedSession === sessionType ? '3px solid #C2445B' : '3px solid transparent',
                    marginBottom: '-2px',
                    transition: 'all 0.2s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedSession !== sessionType) {
                      e.currentTarget.style.color = '#4A3F36';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedSession !== sessionType) {
                      e.currentTarget.style.color = '#6B5D50';
                    }
                  }}
                >
                  {sessionConfigs[sessionType].label}
                </button>
              ))}
            </div>

            {/* Calendar Embed with Loading State */}
            <div style={{ position: 'relative', minHeight: '650px' }}>
              {isCalLoading && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  borderRadius: '8px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    border: '4px solid #F0EBE3',
                    borderTop: '4px solid #C2445B',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                </div>
              )}
              <Cal
                key={selectedSession}
                namespace={sessionConfigs[selectedSession].namespace}
                calLink={sessionConfigs[selectedSession].calLink}
                style={{ width: "100%", height: "100%", minHeight: "650px", overflow: "scroll" }}
                config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
              />
            </div>

            {/* Fallback Link */}
            <div style={{ textAlign: 'center', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #F0EBE3' }}>
              <p style={{ fontSize: '15px', color: '#6B5D50', margin: '0 0 8px' }}>
                Can't see the calendar?
              </p>
              <a
                href={`https://cal.com/${sessionConfigs[selectedSession].calLink}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '16px', fontWeight: 600, color: '#C2445B', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Open Booking Page
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Add CSS for spinner animation */}
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>

        {/* Information Section */}
        <div style={{ maxWidth: '1200px', margin: '60px auto 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {/* Payment Options */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E0D5C7', padding: 'clamp(20px, 5vw, 40px)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
              <h4 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '20px', margin: '0 0 20px', color: '#2B2420' }}>
                Payment Options
              </h4>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#4A3F36', margin: '0 0 20px', paddingBottom: '20px', borderBottom: '1px solid #E0D5C7' }}>
                Complete payment to book your session
              </p>

              <div style={{ textAlign: 'center' }}>
                <h5 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '18px', margin: '0 0 16px', color: '#2B2420' }}>
                  Pay via UPI
                </h5>
                <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#4A3F36', margin: '0 0 24px' }}>
                  Transfer ₹2000 to the UPI ID or scan the QR below.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src="/QR_Code.jpeg"
                    alt="UPI QR Code for payment"
                    width={200}
                    height={200}
                    style={{ borderRadius: '8px', border: '2px solid #E0D5C7' }}
                  />
                </div>
              </div>
            </div>

            {/* Availability and Fees */}
            <div style={{ background: '#FBF3EF', border: '1px solid #E0D5C7', padding: 'clamp(20px, 5vw, 32px)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
              <h4 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '20px', margin: '0 0 24px', color: '#2B2420' }}>
                Availability and Fees
              </h4>

              {/* Consultation hours */}
              <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #E0D5C7' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '15px', color: '#2B2420', minWidth: '140px', flexShrink: 0 }}>
                    Consultation hours
                  </span>
                  <div style={{ fontSize: '15px', lineHeight: 1.7, color: '#4A3F36' }}>
                    <p style={{ margin: '0 0 4px' }}>Tuesdays to Fridays - 11 am to 7 pm</p>
                    <p style={{ margin: 0 }}>Saturdays - 11 am to 5 pm</p>
                  </div>
                </div>
              </div>

              {/* Session duration */}
              <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #E0D5C7' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '15px', color: '#2B2420', minWidth: '140px', flexShrink: 0 }}>
                    Session duration
                  </span>
                  <div style={{ fontSize: '15px', lineHeight: 1.7, color: '#4A3F36' }}>
                    <p style={{ margin: '0 0 3px' }}>Individual sessions - 60 minutes</p>
                    <p style={{ margin: '0 0 3px' }}>Couples therapy - 90 minutes</p>
                    <p style={{ margin: '0 0 3px' }}>Supervision - 60 minutes</p>
                    <p style={{ margin: 0 }}>Consultation call for all three - 15 minutes</p>
                  </div>
                </div>
              </div>

              {/* Fee per session - Geographical pricing */}
              <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #E0D5C7' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '15px', color: '#2B2420', minWidth: '140px', flexShrink: 0 }}>
                    Fee per session
                  </span>
                  <div style={{ fontSize: '15px', lineHeight: 1.7, color: '#4A3F36' }}>
                    <p style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '15px', margin: '0 0 6px', color: '#2B2420' }}>Clients living in India</p>
                    <p style={{ margin: '0 0 3px' }}>Individual Therapy - ₹2500</p>
                    <p style={{ margin: '0 0 20px' }}>Couples Therapy - ₹4000</p>

                    <p style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '15px', margin: '0 0 6px', color: '#2B2420' }}>Clients living/studying abroad</p>
                    <p style={{ margin: '0 0 3px' }}>Individual Therapy - ₹3500</p>
                    <p style={{ margin: 0 }}>Couples Therapy - ₹5000</p>
                  </div>
                </div>
              </div>

              {/* Supervision pricing */}
              <div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '15px', color: '#2B2420', minWidth: '140px', flexShrink: 0 }}>
                    Supervision
                  </span>
                  <div style={{ fontSize: '15px', lineHeight: 1.7, color: '#4A3F36' }}>
                    <p style={{ margin: 0 }}>₹1200 to ₹2200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What to Expect - Full Width Below */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E0D5C7', padding: 'clamp(24px, 5vw, 40px)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', marginTop: '24px', position: 'relative', overflow: 'hidden' }}>
            {/* Decorative elements */}
            <svg
              style={{ position: 'absolute', top: '16px', right: '16px', opacity: 0.15, width: '60px', height: '60px' }}
              viewBox="0 0 24 24"
              fill="#FF6F81"
            >
              <path d="M12 2l1.8 5.6H20l-4.8 3.5L17 17l-5-3.6L7 17l1.8-5.9L4 7.6h6.2z" />
            </svg>
            <svg
              style={{ position: 'absolute', bottom: '20px', left: '20px', opacity: 0.1, width: '50px', height: '50px' }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4ECDC4"
              strokeWidth="2"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>

            <h4 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '22px', margin: '0 0 24px', color: '#2B2420', position: 'relative' }}>
              What to expect
            </h4>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px', position: 'relative' }}>
              <li style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A3F36', display: 'flex', gap: '12px', fontWeight: 500 }}>
                <span style={{ color: '#C2445B', fontWeight: 700, fontSize: '18px' }}>→</span>
                <span>We'll confirm fit and availability for a consultation call.</span>
              </li>
              <li style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A3F36', display: 'flex', gap: '12px', fontWeight: 500 }}>
                <span style={{ color: '#C2445B', fontWeight: 700, fontSize: '18px' }}>→</span>
                <span>If it feels aligned, we'll move forward with a first session.</span>
              </li>
              <li style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A3F36', display: 'flex', gap: '12px', fontWeight: 500 }}>
                <span style={{ color: '#C2445B', fontWeight: 700, fontSize: '18px' }}>→</span>
                <span>If now isn't the right time, I'll make sure you leave with thoughtful next steps.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick FAQs Section */}
        <div style={{ maxWidth: '1100px', margin: '60px auto 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="block text-sm uppercase" style={{ fontWeight: 700, letterSpacing: '0.1em', margin: '0 0 12px', color: '#C2445B', fontSize: '15px' }}>
              QUESTIONS YOU MIGHT HAVE
            </span>
            <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#4A3F36', maxWidth: '60ch', margin: '0 auto' }}>
              Here are answers to some common questions before you book
            </p>
          </div>

          <div style={{ display: 'grid', gap: '16px' }}>
            {/* FAQ 1 */}
            <div style={{ background: '#FFFFFF', border: '2px solid #E0D5C7', borderRadius: '8px' }}>
              <button
                onClick={() => toggleFaq('faq1')}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: openFaqIds.includes('faq1') ? '#FBF3EF' : '#FFFFFF',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'background 0.2s ease'
                }}
              >
                <h4 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '18px', margin: 0, color: '#2B2420' }}>
                  How long are the sessions?
                </h4>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C2445B"
                  strokeWidth="2"
                  style={{
                    flexShrink: 0,
                    transition: 'transform 0.2s ease',
                    transform: openFaqIds.includes('faq1') ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openFaqIds.includes('faq1') && (
                <div style={{ padding: '0 24px 20px 24px', borderTop: '1px solid #E0D5C7' }}>
                  <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#4A3F36', margin: '16px 0 0' }}>
                    Individual therapy sessions are 60 minutes, couples therapy sessions are 90 minutes, and supervision sessions are 60 minutes.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div style={{ background: '#FFFFFF', border: '2px solid #E0D5C7', borderRadius: '8px' }}>
              <button
                onClick={() => toggleFaq('faq2')}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: openFaqIds.includes('faq2') ? '#FBF3EF' : '#FFFFFF',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'background 0.2s ease'
                }}
              >
                <h4 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '18px', margin: 0, color: '#2B2420' }}>
                  Where do sessions take place?
                </h4>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C2445B"
                  strokeWidth="2"
                  style={{
                    flexShrink: 0,
                    transition: 'transform 0.2s ease',
                    transform: openFaqIds.includes('faq2') ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openFaqIds.includes('faq2') && (
                <div style={{ padding: '0 24px 20px 24px', borderTop: '1px solid #E0D5C7' }}>
                  <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#4A3F36', margin: '16px 0 0' }}>
                    My practice is fully online, which means I can work with you wherever you are, as long as you have a good WiFi connection and a private, closed space.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div style={{ background: '#FFFFFF', border: '2px solid #E0D5C7', borderRadius: '8px' }}>
              <button
                onClick={() => toggleFaq('faq3')}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: openFaqIds.includes('faq3') ? '#FBF3EF' : '#FFFFFF',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'background 0.2s ease'
                }}
              >
                <h4 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '18px', margin: 0, color: '#2B2420' }}>
                  Is psychotherapy confidential?
                </h4>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C2445B"
                  strokeWidth="2"
                  style={{
                    flexShrink: 0,
                    transition: 'transform 0.2s ease',
                    transform: openFaqIds.includes('faq3') ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openFaqIds.includes('faq3') && (
                <div style={{ padding: '0 24px 20px 24px', borderTop: '1px solid #E0D5C7' }}>
                  <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#4A3F36', margin: '16px 0 0' }}>
                    Yes, sessions are confidential unless I feel you are at risk to yourself or another, in which case I am ethically bound to break confidentiality to protect you or another. I am also legally bound to report any active child sexual abuse.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div style={{ background: '#FFFFFF', border: '2px solid #E0D5C7', borderRadius: '8px' }}>
              <button
                onClick={() => toggleFaq('faq4')}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: openFaqIds.includes('faq4') ? '#FBF3EF' : '#FFFFFF',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'background 0.2s ease'
                }}
              >
                <h4 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '18px', margin: 0, color: '#2B2420' }}>
                  What is your cancellation policy?
                </h4>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C2445B"
                  strokeWidth="2"
                  style={{
                    flexShrink: 0,
                    transition: 'transform 0.2s ease',
                    transform: openFaqIds.includes('faq4') ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openFaqIds.includes('faq4') && (
                <div style={{ padding: '0 24px 20px 24px', borderTop: '1px solid #E0D5C7' }}>
                  <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#4A3F36', margin: '16px 0 0' }}>
                    Please inform me 24 hours in advance for cancellations or rescheduling. After 24 hours, 50% of the session fee will be charged. An exception can be made once in extraneous circumstances.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* More Questions CTA - Full Width */}
      <section style={{ background: '#DEE1F4', padding: '48px clamp(20px, 5vw, 72px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', lineHeight: 1.3, letterSpacing: '-0.01em', color: '#2B2420', margin: '0 0 16px' }}>
            Have more questions?
          </h3>
          <p style={{ fontSize: '17px', lineHeight: 1.6, color: '#4A3F36', maxWidth: '55ch', margin: '0 auto 28px' }}>
            You can explore the complete FAQ section for more on therapy, confidentiality, online sessions, cancellations, and the therapeutic process.
          </p>
          <Link
            href="/faq"
            scroll={false}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#2B2420',
              color: '#FFFBF2',
              padding: '14px 32px',
              fontFamily: 'var(--font-baloo)',
              fontWeight: 700,
              fontSize: '16px',
              textDecoration: 'none',
              borderRadius: 0,
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#4A3F36'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#2B2420'}
          >
            Read the FAQs
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      <section style={{ maxWidth: '1400px', margin: '0 auto' }}>
      </section>

      {/* Footer */}
      <footer style={{ padding: '48px clamp(20px, 5vw, 72px) 48px', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #EDE6D8' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'flex-start', fontSize: '13px', lineHeight: 1.6, color: '#6B5D50' }}>
          <div>
            <p style={{ margin: 0 }}>therapy.metamorphosis@gmail.com</p>
            <p style={{ margin: '4px 0 0' }}>Mumbai, Maharashtra, India</p>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="https://instagram.com/metamorphosis.therapy" style={{ fontWeight: 700 }}>
              Instagram
            </a>
            <a href="https://linkedin.com/in/kuntal-vora-30413b141" style={{ fontWeight: 700 }}>
              LinkedIn
            </a>
          </div>
        </div>
        <p style={{ fontSize: '12.5px', lineHeight: 1.6, margin: '24px 0 0', color: '#8A7B6C', maxWidth: '70ch' }}>
          Online services are not suitable for crises or emergencies. Please visit your nearest mental health center or a helpline if you need immediate support.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '16px' }}>
          <Link href="/faq" scroll={false} style={{ fontSize: '12.5px', color: '#8A7B6C' }}>FAQ</Link>
          <a href="#" style={{ fontSize: '12.5px', color: '#8A7B6C' }}>Privacy Policy</a>
          <a href="#" style={{ fontSize: '12.5px', color: '#8A7B6C' }}>Terms of Service</a>
          <a href="#" style={{ fontSize: '12.5px', color: '#8A7B6C' }}>Cancellation Policy</a>
        </div>
        <p style={{ fontSize: '12.5px', margin: '16px 0 0', color: '#8A7B6C' }}>© 2026 Metamorphosis Therapy Initiative</p>
      </footer>
    </main>
    </>
  );
}
