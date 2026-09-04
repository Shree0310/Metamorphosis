'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const services = [
  {
    kicker: "INDIVIDUAL THERAPY",
    title: "Individual Therapy",
    quote: "The curious paradox is that when I accept myself just as I am, then I can change",
    author: "Carl Rogers",
    body1: "Individual therapy helps people to gain an in-depth understanding of themselves. During these sessions, we address emotions, thoughts, and behaviors. These sessions help individuals to understand their interpersonal and emotional patterns and learn effective ways of managing them.",
    body2: "",
    areasLabel: "Areas that I work with",
    areas: [
      "Interpersonal Relationship Difficulties",
      "Childhood trauma",
      "Grief and Loss",
      "Abuse",
      "Navigating attachment patterns",
      "Work life balance",
      "Life Transitions",
      "Neurodivergence (ADHD and Autism)",
      "Queer affirming care",
    ],
    bg: "#FBF3EF",
    image: "/Individual_Therapy.jpeg",
  },
  {
    kicker: "COUPLES THERAPY",
    title: "Couples Therapy",
    quote: "The people we love are the hidden regulators of our bodily processes and our emotional lives. When love doesn't work, we hurt",
    author: "Dr. Sue Johnson",
    body1: "Couples Therapy helps partners to communicate their feelings and needs to each other without the fear of being criticized and/or attacked. It offers them a space to understand each other and communicate better by learning skills of interpersonal effectiveness.",
    body2: "",
    areasLabel: "Areas where couples counseling may be helpful",
    areas: [
      "Premarital Counseling",
      "Communication Barrier",
      "Drifting away from each other",
      "Repair from affair and betrayal",
    ],
    bg: "#FDEEEF",
    image: "/Couples_Therapy.jpeg",
  },
  {
    kicker: "SUPERVISION",
    title: "Supervision",
    quote: "Drop the details, look for patterns",
    author: "Kuntal Vora",
    body1: "Supervision helps in facilitating professional and personal growth of therapists. It involves self reflecting of the work done by the therapists in therapeutic sessions. By pooling in resources, the goal of supervision is to achieve better client outcomes. The supervision also focuses on therapists' self to reduce burnout.",
    body2: "I provide individual as well as group supervision.",
    areasLabel: "",
    areas: null,
    bg: "#DEE1F4",
    image: "/Supervision2.jpeg",
  },
];

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const reveal = (el: HTMLElement) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    const els = document.querySelectorAll("[data-reveal]");

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      els.forEach((el) => io.observe(el));
    } else {
      els.forEach((el) => reveal(el as HTMLElement));
    }

    const timeout = setTimeout(() => els.forEach((el) => reveal(el as HTMLElement)), 3500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="min-h-screen bg-[#FBF3EF] text-[#2B2420]" style={{ fontFamily: 'var(--font-kalam)' }}>
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
            <span className="text-base text-[#2B2420]" style={{ fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: '#C2445B' }}>
              Services
            </span>
            <Link href="/faq" scroll={false} className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500, textDecoration: 'none' }}>
              FAQ
            </Link>
            <Link href="/contact" scroll={false} className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500, textDecoration: 'none' }}>
              Contact Us
            </Link>
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
              <span
                className="text-xl text-[#2B2420]"
                style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: '#C2445B' }}
              >
                Services
              </span>
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

      {/* Hero Section */}
      <section className="relative text-center" style={{ background: '#FDEEEF', padding: 'calc(3 * 28px) clamp(20px, 5vw, 72px)', overflow: 'hidden' }}>
        {/* Decorative Elements */}
        <svg
          className="absolute left-[5%] top-10 h-12 w-12 opacity-35"
          viewBox="0 0 24 24"
          fill="#FFB347"
          style={{ animation: 'floatY 8s ease-in-out infinite' }}
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>

        <svg
          className="absolute right-[8%] top-16 h-10 w-10 opacity-40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#A8DADC"
          strokeWidth="2"
          style={{ animation: 'floatY 7s ease-in-out infinite', animationDelay: '0.5s' }}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>

        <svg
          className="absolute left-[12%] bottom-12 h-11 w-11 opacity-35"
          viewBox="0 0 24 24"
          fill="#E9C46A"
          style={{ animation: 'floatY 9s ease-in-out infinite', animationDelay: '1s' }}
        >
          <polygon points="12,2 15,10 23,10 17,15 19,23 12,18 5,23 7,15 1,10 9,10" />
        </svg>

        <svg
          className="absolute right-[15%] bottom-16 h-9 w-9 opacity-40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F4A261"
          strokeWidth="2"
          style={{ animation: 'floatY 7.5s ease-in-out infinite', animationDelay: '1.5s' }}
        >
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>

        <svg
          className="absolute right-[5%] top-1/2 h-8 w-8 opacity-35"
          viewBox="0 0 24 24"
          fill="#D4A5A5"
          style={{ animation: 'floatY 6.5s ease-in-out infinite', animationDelay: '2s' }}
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>

        <div className="relative z-10">
          <span className="block text-sm uppercase" style={{ fontWeight: 700, letterSpacing: '0.1em', margin: '0 0 16px', color: '#C2445B' }}>
            WHAT I OFFER
          </span>
          <h1 className="m-0" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(32px, 4.4vw, 50px)', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#2B2420' }}>
            Services
          </h1>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes floatY {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
        `}} />
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section key={index} style={{ background: service.bg }}>
          <div
            data-reveal="1"
            style={{
              opacity: 0,
              transform: 'translateY(50px)',
              transition: 'opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              padding: '80px clamp(20px, 5vw, 72px)',
              maxWidth: '960px',
              margin: '0 auto'
            }}
          >
            <span className="block text-sm uppercase text-[#C2445B]" style={{ fontWeight: 700, letterSpacing: '0.1em', margin: '0 0 16px' }}>
              {service.kicker}
            </span>
            <h2 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(28px, 3.4vw, 38px)', lineHeight: 1.25, letterSpacing: '-0.01em', margin: '0 0 22px' }}>
              {service.title}
            </h2>
            <p style={{ fontFamily: 'var(--font-baloo)', fontSize: 'clamp(19px, 2.2vw, 24px)', lineHeight: 1.5, fontStyle: 'italic', margin: '0 0 8px', color: '#2B2420' }}>
              "{service.quote}"
            </p>
            <p style={{ fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#C2445B', fontWeight: 700, margin: '0 0 28px' }}>
              — {service.author}
            </p>

            {service.image && (
              <div className="relative" style={{ marginBottom: '28px', isolation: 'isolate' }}>
                {/* Background panel */}
                <div className="absolute -left-[60px] -right-[60px] -top-4 -bottom-4 hidden lg:block" style={{
                  background: index === 0 ? '#C9EDE8' : index === 1 ? '#FBE0C4' : '#E4E1F5',
                  borderRadius: '8px',
                  zIndex: -2
                }}></div>

                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="relative w-full object-contain"
                  style={{ maxHeight: '500px', zIndex: 1 }}
                />
              </div>
            )}

            <p style={{ fontSize: '19px', lineHeight: 1.7, margin: 0, color: '#4A3F36' }}>
              {service.body1}
            </p>
            {service.body2 && (
              <p style={{ fontSize: '19px', lineHeight: 1.7, margin: '18px 0 0', color: '#4A3F36' }}>
                {service.body2}
              </p>
            )}

            {service.areas && (
              <>
                <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '20px', margin: '36px 0 20px' }}>
                  {service.areasLabel}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px 24px' }}>
                  {service.areas.map((area, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ width: '6px', height: '6px', flex: '0 0 auto', background: '#C2445B', marginTop: '7px' }}></span>
                      <span style={{ fontSize: '17px', lineHeight: 1.5, color: '#4A3F36' }}>
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div style={{ marginTop: '36px' }}>
              <Link
                href="/book-now"
                className="inline-block no-underline"
                style={{ background: '#2B2420', color: '#FFFBF2', padding: '14px 30px', fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '15px' }}
              >
                Book a Session →
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-[#DEE1F4] text-center" style={{ padding: 'calc(2.2 * 28px) clamp(20px, 5vw, 72px)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(28px, 3.4vw, 40px)', lineHeight: 1.25, letterSpacing: '-0.01em', margin: '0 auto', maxWidth: '18ch', color: '#2B2420' }}>
            Let's rediscover your story, together.
          </h3>
          <p style={{ fontSize: '18px', lineHeight: 1.6, maxWidth: '44ch', margin: '16px auto 0', color: '#3F3A50' }}>
            Book a free intro call and see if we're a good fit — no commitment, just a conversation.
          </p>
          <div style={{ marginTop: '26px' }}>
            <Link
              href="/book-now"
              className="inline-block no-underline"
              style={{ background: '#2B2420', color: '#FFFBF2', borderRadius: 0, padding: '13px 28px', fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '15px' }}
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '48px clamp(20px, 5vw, 72px) 48px', maxWidth: '1200px', margin: '0 auto' }}>
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
  );
}
