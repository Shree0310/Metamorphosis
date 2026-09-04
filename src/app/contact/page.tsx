'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
            <span className="text-base text-[#2B2420]" style={{ fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: '#C2445B' }}>
              Contact Us
            </span>
            <Link
              href="/book-now"
              scroll={false}
              className="cursor-pointer border-0 bg-[#FF6F81] px-6 py-3 hover:bg-[#C2445B] hover:no-underline"
              style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '14.5px', borderRadius: 0, color: '#FFFFFF', textDecoration: 'none' }}
            >
              Book a Session
            </Link>
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
              <span
                className="text-xl text-[#2B2420]"
                style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: '#C2445B' }}
              >
                Contact Us
              </span>
              <Link
                href="/book-now"
                scroll={false}
                onClick={() => setMenuOpen(false)}
                className="inline-block cursor-pointer border-0 bg-[#FF6F81] px-6 py-3 text-center hover:bg-[#C2445B] hover:no-underline"
                style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '16px', borderRadius: 0, color: '#FFFFFF', textDecoration: 'none' }}
              >
                Book a Session
              </Link>
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
        <div style={{ marginBottom: '48px', textAlign: 'center', position: 'relative' }}>
          <h1 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#2B2420', margin: '0 0 12px' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#4A3F36', maxWidth: '60ch', margin: '0 auto' }}>
            Have questions or want to get in touch? Fill out the form below and I'll respond within 2 working days
          </p>
        </div>

        {/* Contact Form Section */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {!submitted ? (
            <div>
                {/* Form */}
                <div style={{ background: '#FFFFFF', border: '1px solid #E0D5C7', padding: 'clamp(20px, 5vw, 40px)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <h4 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '20px', margin: '0 0 24px', color: '#2B2420' }}>
                    Your Details
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

                  {/* Referred By */}
                  <label style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#2B2420', marginBottom: '8px' }}>
                      Referred by <span style={{ color: '#C2445B' }}>*</span>
                    </span>
                    <input
                      required
                      name="referredBy"
                      value={formData.referredBy}
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

                  {/* Message */}
                  <label style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#2B2420', marginBottom: '8px' }}>
                      What would you like to talk about? <span style={{ color: '#C2445B' }}>*</span>
                    </span>
                    <textarea
                      required
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

              {/* Reassuring Message Box */}
              <div style={{ background: '#FFFFFF', border: '2px solid #E0D5C7', padding: 'clamp(24px, 5vw, 32px)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', marginTop: '32px' }}>
                <h4 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '20px', margin: '0 0 16px', color: '#2B2420' }}>
                  You don't have to have it all figured out.
                </h4>
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A3F36', margin: '0 0 16px' }}>
                  There's no right way to begin. Whether you send a message, or simply sit with this page for a while — all of that is okay.
                </p>
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A3F36', margin: 0 }}>
                  If you are an existing client or supervisee, you can directly book the session by going to this link: <Link href="/book-now" scroll={false} style={{ color: '#C2445B', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }}>Book a Session</Link>
                </p>
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
            <p style={{ margin: 0 }}>hello@metamorphosistherapy.in</p>
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
          <Link href="/privacy-policy" style={{ fontSize: '12.5px', color: '#8A7B6C' }}>Privacy Policy</Link>
          <Link href="/cancellation-policy" style={{ fontSize: '12.5px', color: '#8A7B6C' }}>Cancellation Policy</Link>
        </div>
        <p style={{ fontSize: '12.5px', margin: '16px 0 0', color: '#8A7B6C' }}>© 2026 Metamorphosis Therapy Initiative</p>
      </footer>
    </main>
    </>
  );
}
