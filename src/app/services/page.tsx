'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

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
      }, { threshold: 0.15 });

      els.forEach((el) => io.observe(el));
    } else {
      els.forEach((el) => reveal(el as HTMLElement));
    }

    const timeout = setTimeout(() => els.forEach((el) => reveal(el as HTMLElement)), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="min-h-screen bg-[#FBF3EF] text-[#2B2420]" style={{ fontFamily: 'var(--font-kalam)' }}>
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
          <Link href="/about" className="no-underline" style={{ fontSize: '16px', fontWeight: 500, color: '#2B2420' }}>
            About
          </Link>
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
          WHAT I OFFER
        </span>
        <h1 className="m-0" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: 'clamp(32px, 4.4vw, 50px)', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#2B2420' }}>
          Services
        </h1>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section key={index} style={{ background: service.bg }}>
          <div
            data-reveal="1"
            style={{
              opacity: 0,
              transform: 'translateY(26px)',
              transition: 'opacity .8s ease-out, transform .8s ease-out',
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
              <div className="relative" style={{ marginBottom: '28px' }}>
                <div className="absolute -right-6 -top-6 -z-10 h-full w-full" style={{ background: index === 0 ? '#EDE6D8' : index === 1 ? '#F4D5D9' : '#C8CBEB' }}></div>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={450}
                  className="relative z-10 aspect-video w-full object-cover"
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
