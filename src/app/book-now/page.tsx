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
  message: string;
};

const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function BookNowPage() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30-min-session" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#FF6F81" },
          dark: { "cal-brand": "#FF6F81" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

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
      <nav className="sticky top-0 z-50 border-b border-[#EDE6D8] bg-[#FBF3EF]" style={{ padding: '22px clamp(20px, 5vw, 72px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
        <Link href="/" className="flex items-center no-underline" style={{ gap: '16px', color: '#2B2420' }}>
          <Image src="/logopng.png" alt="Metamorphosis Therapy logo" width={32} height={32} style={{ height: '32px', width: 'auto', display: 'block' }} />
          <span style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '19px', letterSpacing: '-0.01em' }}>
            Metamorphosis Therapy Initiative
          </span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
          <Link href="/about" className="no-underline" style={{ fontSize: '16px', fontWeight: 500, color: '#2B2420', textDecoration: 'none' }}>
            About
          </Link>
          <Link href="/services" className="no-underline" style={{ fontSize: '16px', fontWeight: 500, color: '#2B2420', textDecoration: 'none' }}>
            Services
          </Link>
          <span style={{ fontSize: '16px', fontWeight: 500, color: '#2B2420', textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: '#C2445B' }}>
            Book a Session
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <section style={{ padding: '60px clamp(20px, 5vw, 72px) 80px', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#2B2420', margin: '0 0 12px' }}>
            Book a Session
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#4A3F36', maxWidth: '60ch', margin: '0 auto' }}>
            Select a service and choose a time that works for you
          </p>
        </div>

        {/* Calendar Container */}
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: '#FFFFFF', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', overflow: 'hidden', padding: '32px 24px 24px' }}>
            {/* Calendar Heading */}
            <div style={{ textAlign: 'left', marginBottom: '8px' }}>
              <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#2B2420', margin: '0 0 6px' }}>
                Select Your Time Slot
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#4A3F36', margin: 0 }}>
                Choose a convenient time for your therapy session
              </p>
            </div>

            <Cal
              namespace="30-min-session"
              calLink="sourashree-banerjee-vnxoqo/30-min-session"
              style={{ width: "100%", height: "100%", minHeight: "650px" }}
              config={{ layout: "month_view", theme: "light", useSlotsViewOnSmallScreen: "true" }}
            />

            {/* Fallback Link */}
            <div style={{ textAlign: 'center', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #F0EBE3' }}>
              <p style={{ fontSize: '15px', color: '#6B5D50', margin: '0 0 8px' }}>
                Can't see the calendar?
              </p>
              <a
                href="https://cal.com/sourashree-banerjee-vnxoqo/30-min-session"
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

        {/* Contact Form Section */}
        <div style={{ maxWidth: '1200px', margin: '60px auto 0' }}>
          {!submitted ? (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
                {/* Form */}
                <div style={{ background: '#FFFFFF', border: '1px solid #E0D5C7', padding: 'clamp(20px, 5vw, 40px)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <h4 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '20px', margin: '0 0 24px', color: '#2B2420' }}>
                    Add your details
                  </h4>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Name */}
                  <label style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#2B2420', marginBottom: '8px' }}>
                      Name <span style={{ color: '#C2445B' }}>*</span>
                    </span>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        background: '#FBF3EF',
                        border: '1px solid #E0D5C7',
                        padding: '12px 15px',
                        fontFamily: 'var(--font-kalam)',
                        fontSize: '16px',
                        color: '#2B2420',
                        borderRadius: 0,
                      }}
                    />
                  </label>

                  {/* Email */}
                  <label style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#2B2420', marginBottom: '8px' }}>
                      Email address <span style={{ color: '#C2445B' }}>*</span>
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        background: '#FBF3EF',
                        border: '1px solid #E0D5C7',
                        padding: '12px 15px',
                        fontFamily: 'var(--font-kalam)',
                        fontSize: '16px',
                        color: '#2B2420',
                        borderRadius: 0,
                      }}
                    />
                  </label>

                  {/* Contact Number */}
                  <label style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#2B2420', marginBottom: '8px' }}>
                      Contact number <span style={{ color: '#C2445B' }}>*</span>
                    </span>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        background: '#FBF3EF',
                        border: '1px solid #E0D5C7',
                        padding: '12px 15px',
                        fontFamily: 'var(--font-kalam)',
                        fontSize: '16px',
                        color: '#2B2420',
                        borderRadius: 0,
                      }}
                    />
                  </label>

                  {/* Service Needed */}
                  <label style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#2B2420', marginBottom: '8px' }}>
                      Service needed <span style={{ color: '#C2445B' }}>*</span>
                    </span>
                    <select
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        background: '#FBF3EF',
                        border: '1px solid #E0D5C7',
                        padding: '12px 15px',
                        fontFamily: 'var(--font-kalam)',
                        fontSize: '16px',
                        color: formData.service === '' ? '#8A7B6C' : '#2B2420',
                        borderRadius: 0,
                        cursor: 'pointer',
                        appearance: 'none',
                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23C2445B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 12px center',
                        backgroundSize: '20px',
                        paddingRight: '40px',
                      }}
                    >
                      <option value="" style={{ color: '#8A7B6C' }}>Select a service</option>
                      <option value="Individual Therapy" style={{ color: '#2B2420' }}>Individual Therapy</option>
                      <option value="Couples Therapy" style={{ color: '#2B2420' }}>Couples Therapy</option>
                      <option value="Supervision" style={{ color: '#2B2420' }}>Supervision</option>
                    </select>
                  </label>

                  {/* Message */}
                  <label style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#2B2420', marginBottom: '8px' }}>
                      What would you like to talk about?
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        background: '#FBF3EF',
                        border: '1px solid #E0D5C7',
                        padding: '12px 15px',
                        fontFamily: 'var(--font-kalam)',
                        fontSize: '16px',
                        color: '#2B2420',
                        borderRadius: 0,
                        resize: 'vertical',
                      }}
                    />
                  </label>

                  {/* Submit Button */}
                  <div style={{ textAlign: 'center', marginTop: '8px' }}>
                    <button
                      type="submit"
                      className="inline-block no-underline"
                      style={{
                        background: '#FF6F81',
                        color: '#FFFBF2',
                        padding: '15px 40px',
                        fontFamily: 'var(--font-baloo)',
                        fontWeight: 700,
                        fontSize: '16px',
                        border: 'none',
                        borderRadius: 0,
                        cursor: 'pointer',
                      }}
                    >
                      Submit Details
                    </button>
                  </div>
                </form>
                </div>

                {/* What to Expect Sidebar */}
                <div style={{ background: '#FFFFFF', border: '1px solid #E0D5C7', padding: 'clamp(20px, 5vw, 32px)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <h4 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '20px', margin: '0 0 20px', color: '#2B2420' }}>
                    What to expect
                  </h4>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <li style={{ fontSize: '15px', lineHeight: 1.6, color: '#4A3F36', display: 'flex', gap: '10px' }}>
                      <span style={{ color: '#C2445B', fontWeight: 700 }}>→</span>
                      <span>We'll confirm fit and availability for a consultation call.</span>
                    </li>
                    <li style={{ fontSize: '15px', lineHeight: 1.6, color: '#4A3F36', display: 'flex', gap: '10px' }}>
                      <span style={{ color: '#C2445B', fontWeight: 700 }}>→</span>
                      <span>If it feels aligned, we'll move forward with a first session.</span>
                    </li>
                    <li style={{ fontSize: '15px', lineHeight: 1.6, color: '#4A3F36', display: 'flex', gap: '10px' }}>
                      <span style={{ color: '#C2445B', fontWeight: 700 }}>→</span>
                      <span>If now isn't the right time, I'll make sure you leave with thoughtful next steps.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Payment Options - Full Width Below Form */}
              <div style={{ background: '#FFFFFF', border: '1px solid #E0D5C7', padding: 'clamp(20px, 5vw, 40px)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', marginTop: '40px' }}>
                <h4 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '20px', margin: '0 0 20px', color: '#2B2420' }}>
                  Payment Options
                </h4>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#4A3F36', margin: '0 0 24px' }}>
                  Complete payment to book your session
                </p>

                <div style={{ textAlign: 'center' }}>
                  <h5 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '18px', margin: '0 0 16px', color: '#2B2420' }}>
                    Pay via UPI
                  </h5>
                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#4A3F36', margin: '0 0 24px' }}>
                    Transfer ₹2000 to the UPI ID or scan the QR below.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '200px', height: '200px', background: '#F0EBE3', border: '2px dashed #E0D5C7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#8A7B6C', textAlign: 'center', padding: '20px' }}>
                      UPI QR Code<br />Placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ background: '#FFFFFF', border: '1px solid #E0D5C7', padding: '44px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '22px', margin: '0 0 12px', color: '#2B2420' }}>
                Thank you, {formData.name}!
              </h3>
              <p style={{ fontSize: '17px', lineHeight: 1.6, color: '#4A3F36', margin: 0 }}>
                Your message has been received. I'll reach out within 2 working days.
              </p>
            </div>
          )}
        </div>
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
