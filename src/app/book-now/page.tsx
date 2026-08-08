'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type FormState = {
  name: string;
  email: string;
  phone: string;
  referral: string;
  service: string;
  message: string;
};

const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  referral: '',
  service: '',
  message: '',
};

const meetingTypes = [
  {
    title: 'Individual Therapy',
    duration: '1 hour',
    note: '',
    thumbnailBg: '#FBE0C4',
    ctaText: 'Book a Session →',
    url: 'https://appt.link/meet-with-metamorphosis-therapy-initiative-HdagOYAo/individual-therapy',
  },
  {
    title: 'Supervision',
    duration: '1 hour',
    note: '',
    thumbnailBg: '#C9EDE8',
    ctaText: 'Book a Session →',
    url: 'https://appt.link/meet-with-metamorphosis-therapy-initiative-HdagOYAo/individual-supervision',
  },
  {
    title: 'Couples Therapy',
    duration: '1 hour',
    note: 'Use the form below to book a couple\'s session for now.',
    thumbnailBg: '#E4E1F5',
    ctaText: 'Write to me instead →',
    url: '#contact-form',
  },
];

export default function BookNowPage() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

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
    <main className="min-h-screen bg-[#FBF3EF] text-[#2B2420]" style={{ fontFamily: 'var(--font-kalam)' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#EDE6D8] bg-[#FBF3EF]" style={{ padding: '22px clamp(20px, 5vw, 72px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
        <Link href="/" className="flex items-center no-underline" style={{ gap: '16px', color: '#2B2420' }}>
          <Image src="/logopng.png" alt="Metamorphosis Therapy logo" width={32} height={32} style={{ height: '32px', width: 'auto', display: 'block' }} />
          <span style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '19px', letterSpacing: '-0.01em' }}>
            Metamorphosis Therapy Initiative
          </span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
          <Link href="/" className="no-underline" style={{ fontSize: '16px', fontWeight: 500, color: '#2B2420' }}>
            Home
          </Link>
          <Link href="/services" className="no-underline" style={{ fontSize: '16px', fontWeight: 500, color: '#2B2420' }}>
            Services
          </Link>
          <a href="/#faq" className="no-underline" style={{ fontSize: '16px', fontWeight: 500, color: '#2B2420' }}>
            FAQ
          </a>
          <Link
            href="/book-now"
            className="inline-block no-underline"
            style={{ background: '#FF6F81', color: '#FFFBF2', borderRadius: 0, padding: '12px 26px', fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '14.5px' }}
          >
            Book a Session
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center" style={{ background: '#FDEEEF', padding: 'calc(3 * 28px) clamp(20px, 5vw, 72px)' }}>
        <span className="block text-sm uppercase" style={{ fontWeight: 700, letterSpacing: '0.1em', margin: '0 0 16px', color: '#C2445B' }}>
          Let's start the conversation
        </span>
        <h1 className="m-0" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(32px, 4.4vw, 50px)', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#2B2420' }}>
          Two ways to reach me.
        </h1>
      </section>

      {/* Meeting Types Section */}
      <section style={{ background: '#DEE1F4', padding: '80px clamp(20px, 5vw, 72px)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(22px, 2.6vw, 28px)', margin: '0 0 12px', color: '#2B2420' }}>
            Pick a meeting type
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.6, color: '#4A3F36', margin: 0 }}>
            Already know what you're looking for? Book straight on the calendar.
          </p>
        </div>

        {/* Meeting Type Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {meetingTypes.map((meeting, index) => (
            <a
              key={index}
              href={meeting.url}
              target={meeting.url.startsWith('http') ? '_blank' : undefined}
              rel={meeting.url.startsWith('http') ? 'noopener' : undefined}
              className="no-underline"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                background: '#FFFFFF',
                border: '1px solid #FDE68A',
                padding: '18px 22px',
                borderRadius: 0,
              }}
            >
              <div style={{ width: '64px', height: '64px', flex: '0 0 auto', background: meeting.thumbnailBg, borderRadius: 0 }}></div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: meeting.note ? '6px' : 0 }}>
                  <span style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '18px', color: '#2B2420' }}>
                    {meeting.title}
                  </span>
                  <span style={{ fontSize: '15px', color: '#8A7B6C' }}>
                    • {meeting.duration}
                  </span>
                </div>
                {meeting.note && (
                  <p style={{ fontSize: '14.5px', color: '#8A7B6C', margin: 0 }}>
                    {meeting.note}
                  </p>
                )}
              </div>
              <div style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '14px', color: '#C2445B', whiteSpace: 'nowrap' }}>
                {meeting.ctaText}
              </div>
            </a>
          ))}
        </div>

        {/* What to Expect Box */}
        <div style={{ marginTop: '32px' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #FDE68A', padding: '32px', borderRadius: 0 }}>
            <p style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C2445B', margin: '0 0 20px' }}>
              What to expect
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ fontSize: '14px', lineHeight: 1.6, color: '#4A3F36', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ flex: '0 0 auto' }}>•</span>
                <span>We'll confirm fit and availability for a consultation call.</span>
              </li>
              <li style={{ fontSize: '14px', lineHeight: 1.6, color: '#4A3F36', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ flex: '0 0 auto' }}>•</span>
                <span>If it feels aligned, we'll move forward with a first session.</span>
              </li>
              <li style={{ fontSize: '14px', lineHeight: 1.6, color: '#4A3F36', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ flex: '0 0 auto' }}>•</span>
                <span>If now isn't the right time, I'll still make sure you leave with thoughtful next steps.</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </section>

      {/* OR Divider */}
      <section style={{ background: '#FBF3EF', padding: '24px 0' }}>
        <div style={{ textAlign: 'center', fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '20px', color: '#2B2420' }}>
          OR
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" style={{ background: '#DEE1F4', padding: '80px clamp(20px, 5vw, 72px)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(22px, 2.6vw, 28px)', margin: '0 0 12px', color: '#2B2420' }}>
              Not sure yet? Just write to me.
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.6, color: '#4A3F36', margin: 0 }}>
              Share a bit about what's going on, and I'll get back to you within 2 working days to book a consultation call.
            </p>
          </div>

        {!submitted ? (
          <div style={{ background: '#FFFFFF', border: '1px solid #FDE68A', padding: '40px', borderRadius: 0 }}>
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
                    border: '1px solid #FDE68A',
                    padding: '12px 15px',
                    fontFamily: 'var(--font-kalam)',
                    fontSize: '16px',
                    color: '#2B2420',
                    borderRadius: 0,
                  }}
                />
              </label>

              {/* Email & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
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
                      border: '1px solid #FDE68A',
                      padding: '12px 15px',
                      fontFamily: 'var(--font-kalam)',
                      fontSize: '16px',
                      color: '#2B2420',
                      borderRadius: 0,
                    }}
                  />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#2B2420', marginBottom: '8px' }}>
                    Contact Number <span style={{ color: '#C2445B' }}>*</span>
                  </span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      background: '#FBF3EF',
                      border: '1px solid #FDE68A',
                      padding: '12px 15px',
                      fontFamily: 'var(--font-kalam)',
                      fontSize: '16px',
                      color: '#2B2420',
                      borderRadius: 0,
                    }}
                  />
                </label>
              </div>

              {/* Referral & Service */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <label style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#2B2420', marginBottom: '8px' }}>
                    Referral Source <span style={{ color: '#C2445B' }}>*</span>
                  </span>
                  <input
                    required
                    name="referral"
                    value={formData.referral}
                    onChange={handleChange}
                    placeholder="How did you hear about us?"
                    style={{
                      background: '#FBF3EF',
                      border: '1px solid #FDE68A',
                      padding: '12px 15px',
                      fontFamily: 'var(--font-kalam)',
                      fontSize: '16px',
                      color: '#2B2420',
                      borderRadius: 0,
                    }}
                  />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#2B2420', marginBottom: '8px' }}>
                    Service Required <span style={{ color: '#C2445B' }}>*</span>
                  </span>
                  <select
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      background: '#FBF3EF',
                      border: '1px solid #FDE68A',
                      padding: '12px 15px',
                      fontFamily: 'var(--font-kalam)',
                      fontSize: '16px',
                      color: '#2B2420',
                      borderRadius: 0,
                    }}
                  >
                    <option value="">Select one...</option>
                    <option value="Individual Therapy">Individual Therapy</option>
                    <option value="Couples Therapy">Couples Therapy</option>
                    <option value="Supervision">Supervision</option>
                  </select>
                </label>
              </div>

              {/* Message */}
              <label style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#2B2420', marginBottom: '8px' }}>
                  What do you want to talk about? <span style={{ color: '#C2445B' }}>*</span>
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    background: '#FBF3EF',
                    border: '1px solid #FDE68A',
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
              <div style={{ textAlign: 'center' }}>
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
                  Send message
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ background: '#FFFFFF', border: '1px solid #FDE68A', padding: '44px', borderRadius: 0, textAlign: 'center' }}>
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
      <footer style={{ padding: '48px clamp(20px, 5vw, 72px) 48px', maxWidth: '1200px', margin: '0 auto' }}>
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
  );
}
