'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    kicker: "Individual Therapy",
    title: "Some chapters you shouldn't have to read alone",
    copy: "One-on-one sessions for anxiety, identity, and life transitions — the stuff you haven't said out loud yet. A steady, curious space to sit with your own story.",
    blockColor: "#C9EDE8",
    direction: "ltr",
    slideFrom: "translateX(-36px)",
    image: "/Individual_Therapy2.jpeg",
  },
  {
    kicker: "Couples Therapy",
    title: "For the plot twists you're navigating together",
    copy: "Communication, trust, distance — the moments two people get stuck deciding what happens next. We work through it as a team.",
    blockColor: "#FBE0C4",
    direction: "rtl",
    slideFrom: "translateX(36px)",
    image: "/Couples_Therapy2.jpeg",
  },
  {
    kicker: "Therapist Support & Supervision",
    title: "Support for the ones holding space for others",
    copy: "Supervision and support for therapists doing their own work in the room, so you can keep showing up for yours.",
    blockColor: "#E4E1F5",
    direction: "ltr",
    slideFrom: "translateX(-36px)",
    image: "/Supervision.jpeg",
  },
];

const initialFaqs = [
  {
    q: "Is online therapy actually effective?",
    a: "Yes — for most concerns, research shows online therapy works as well as in-person. What matters more is the fit between us and your consistency in showing up.",
    open: true,
  },
  {
    q: "Do you only work with clients in India?",
    a: "I work with Indian adults wherever they are in the world — as long as you have a private space, a stable connection, and a working camera and mic.",
    open: false,
  },
  {
    q: "What happens in the first session?",
    a: "We get to know each other. I'll ask about what brought you here, you can ask me anything, and we'll figure out together if this feels like the right fit.",
    open: false,
  },
];

export default function Home() {
  const [faqs, setFaqs] = useState(initialFaqs);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.15,
    });

    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setFaqs((prev) =>
      prev.map((faq, i) => (i === index ? { ...faq, open: !faq.open } : faq))
    );
  };

  return (
    <main className="bg-[#FBF3EF] text-[#2B2420]" style={{ fontFamily: 'var(--font-kalam)' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#EDE6D8] bg-[#FDFBF7] px-5 py-5 sm:px-8 lg:px-16">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-4 hover:no-underline">
            <Image
              src="/logopng.png"
              alt="Metamorphosis Therapy logo"
              width={32}
              height={32}
              className="block h-8 w-auto"
            />
            <span className="text-lg tracking-tight text-[#2B2420]" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}>
              Metamorphosis Therapy Initiative
            </span>
          </Link>
          <div className="flex flex-wrap items-center gap-7">
            <Link href="/about" className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500 }}>
              About
            </Link>
            <Link href="/services" className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500 }}>
              Services
            </Link>
            <a href="#faq" className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500 }}>
              FAQ
            </a>
            <Link
              href="/book-now"
              className="header-cta cursor-pointer border-0 bg-[#FF6F81] px-6 py-3 hover:bg-[#C2445B] hover:no-underline"
              style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '14.5px', borderRadius: 0, color: '#FFFFFF', textDecoration: 'none' }}
            >
              Book a Session
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:px-16 lg:py-24">
        <div>
          <h1
            className="m-0 text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, letterSpacing: '-0.01em' }}
          >
            Welcome to <span className="text-[#FF6F81]">change.</span>
          </h1>
          <p
            className="mx-auto mt-7 max-w-prose text-lg leading-relaxed italic text-[#4A3F36] sm:text-xl"
            style={{ fontFamily: 'var(--font-kalam)', fontWeight: 700 }}
          >
            "Words are, in my not-so-humble opinion, our most inexhaustible source of magic — capable of both inflicting injury, and remedying it."
            <span className="mt-3 block text-xs uppercase tracking-widest text-[#C2445B] not-italic" style={{ fontWeight: 700 }}>
              — Albus Dumbledore, Harry Potter
            </span>
          </p>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative bg-[#FDEEEF] px-5 py-20 sm:px-8 lg:px-16">
        <div data-reveal className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2
              className="mb-5 text-3xl leading-tight lg:text-4xl"
              style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
            >
              Understanding Our <span className="text-[#4ECDC4]">Journey</span>
            </h2>
            <p className="max-w-prose text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
              There are times when we are in touch with a deeper voice within us calling for change — something in us wants to move past repetitive patterns that keep us from living, feeling, and being our most authentic selves. This is a space to listen to that inner voice.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -right-6 -top-6 -z-10 h-full w-full bg-[#DCDDF5]"></div>
            <Image
              src="/Scenery2.jpg"
              alt="Understanding Our Journey"
              width={800}
              height={450}
              className="relative z-10 aspect-video w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          {/* Floating decorative icons */}
          <svg
            className="absolute left-[6%] top-2.5 h-14 w-14 opacity-50 animate-float"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="1.5"
          >
            <path d="M7 8c-2 1-3 3-3 5.5A3.5 3.5 0 0 0 7.5 17 3.5 3.5 0 0 0 11 13.5C11 10 8.5 8.5 7 8z" />
            <path d="M16 8c-2 1-3 3-3 5.5a3.5 3.5 0 0 0 3.5 3.5 3.5 3.5 0 0 0 3.5-3.5C20 10 17.5 8.5 16 8z" />
          </svg>

          <svg
            className="absolute right-[4%] top-16 h-8 w-8 opacity-55"
            viewBox="0 0 24 24"
            fill="#C7CEEA"
            style={{ animation: 'floatY 8s ease-in-out infinite', animationDelay: '0.6s' }}
          >
            <path d="M12 2l1.8 5.6H20l-4.8 3.5L17 17l-5-3.6L7 17l1.8-5.9L4 7.6h6.2z" />
          </svg>

          <svg
            className="absolute bottom-8 left-[2%] h-16 w-16 opacity-50"
            viewBox="0 0 24 24"
            fill="#4ECDC4"
            style={{ animation: 'floatY 9s ease-in-out infinite', animationDelay: '1.2s' }}
          >
            <path d="M20 12.5A8.5 8.5 0 1 1 11.4 4a6.7 6.7 0 1 0 8.6 8.5z" />
          </svg>

          <svg
            className="absolute bottom-16 right-[8%] h-8 w-8 opacity-50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF8B94"
            strokeWidth="1.6"
            style={{ animation: 'floatY 6.5s ease-in-out infinite', animationDelay: '1.8s' }}
          >
            <circle cx="12" cy="12" r="8" />
            <path d="M12 8v4l3 2" />
          </svg>

          <div data-reveal className="relative z-10 grid items-center gap-12 md:grid-cols-[260px_1fr]">
            <figure className="m-0">
              <Image
                src="/Profile_Pic.jpg"
                alt="Kuntal - Counseling Psychologist"
                width={260}
                height={325}
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
            <div>
              <span className="mb-3 block text-xs uppercase tracking-widest text-[#C2445B]" style={{ fontWeight: 700 }}>
                About
              </span>
              <h2
                className="m-0 text-3xl leading-tight lg:text-4xl"
                style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
              >
                Hi, I'm <span className="text-[#FF6F81]">Kuntal</span> (she/her).
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                I'm a Counseling Psychologist running an online private practice — individual and couples therapy for Indian adults, wherever you are in the world. All you need is a private corner, a decent connection, and a working camera and mic.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                My practice is queer-affirmative and trauma-informed, shaped by narrative therapy, feminist theory, and a social justice lens. Think of me as a fellow traveler — I'm not here to hand you a script. I'm here to help you find your own.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex border-2 border-[#2B2420] bg-transparent px-6 py-3 text-[#2B2420] hover:bg-[#2B2420] hover:text-white hover:no-underline transition-transform duration-100 active:scale-95"
                  style={{ fontWeight: 700, fontSize: '14.5px' }}
                >
                  Know more about me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Off the Clock Section */}
      <section className="bg-[#FCE4E2]">
        <div data-reveal className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:px-16">
          <div>
            <span className="mb-4 block text-xs uppercase tracking-widest text-[#C2445B]" style={{ fontWeight: 700 }}>
              Off the clock
            </span>
            <h2
              className="m-0 max-w-[26ch] text-3xl leading-tight text-[#2B2420] lg:text-4xl"
              style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
            >
              Currently: one Taylor Swift era on repeat, three episodes into a new true-crime series, half-living in somebody's fictional world.
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
              I bring the same curiosity to your story that I bring to a true-crime rabbit hole — pattern-spotting, plot holes and all. Except here, you're the one who gets to write the ending.
            </p>
          </div>
          <div className="relative p-6">
            <div className="absolute inset-0 -rotate-2 bg-[#FFE1B8]"></div>
            <Image
              src="/off-the-clock-torn.png"
              alt="Off the clock"
              width={800}
              height={450}
              className="relative z-10 aspect-video w-full shadow-[0_10px_18px_rgba(120,53,15,0.22)]"
            />
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-5 pb-16 sm:px-8 lg:px-16">
          <span className="whitespace-nowrap bg-[#FF8B94] px-4 py-2 text-sm text-[#2B2420]" style={{ fontWeight: 700 }}>
            Swiftie, unapologetically
          </span>
          <span className="whitespace-nowrap bg-[#4ECDC4] px-4 py-2 text-sm text-[#2B2420]" style={{ fontWeight: 700 }}>
            True-crime obsessive
          </span>
          <span className="whitespace-nowrap bg-[#FFE66D] px-4 py-2 text-sm text-[#2B2420]" style={{ fontWeight: 700 }}>
            Perpetually mid-rewatch
          </span>
          <span className="whitespace-nowrap bg-[#C7CEEA] px-4 py-2 text-sm text-[#2B2420]" style={{ fontWeight: 700 }}>
            Lives in fictional worlds
          </span>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <span className="mb-2 block text-xs uppercase tracking-widest text-[#C2445B]" style={{ fontWeight: 700 }}>
            What I offer
          </span>
          <h2
            className="mb-10 text-3xl lg:text-4xl"
            style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            <span className="text-[#C7CEEA]">Services</span>
          </h2>

          <div className="flex flex-col gap-16">
            {services.map((service, i) => (
              <div
                key={i}
                className="grid items-center gap-10 md:grid-cols-2"
                style={{ direction: service.direction as any }}
              >
                <div className="relative" style={{ direction: 'ltr' }}>
                  <div
                    className="absolute -left-4 -top-4 h-[85%] w-[85%]"
                    style={{ background: service.blockColor, zIndex: 0 }}
                  ></div>
                  <Image
                    data-reveal
                    src={service.image}
                    alt={service.kicker}
                    width={600}
                    height={500}
                    className="relative aspect-[6/5] w-[70%] object-cover"
                    style={{ zIndex: 1 }}
                  />
                </div>
                <div data-reveal style={{ direction: 'ltr' }}>
                  <span className="mb-2 block text-sm italic text-[#C2445B]" style={{ fontWeight: 700 }}>
                    {service.kicker}
                  </span>
                  <h3
                    className="mb-3 text-2xl leading-snug"
                    style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700 }}
                  >
                    {service.title}
                  </h3>
                  <p className="max-w-prose text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                    {service.copy}
                  </p>
                  <a href="#" className="mt-4 inline-block text-sm hover:underline" style={{ fontWeight: 700 }}>
                    Know more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[#FCE4E2]">
        <div data-reveal className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:px-16">
          <span className="mb-2 block text-xs uppercase tracking-widest text-[#C2445B]" style={{ fontWeight: 700 }}>
            Good questions
          </span>
          <h2
            className="mb-6 text-3xl lg:text-4xl"
            style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            You might be <span className="text-[#FFE66D]">wondering</span>…
          </h2>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[#FDE68A] bg-white px-6 py-2">
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent py-3 text-left"
                >
                  <span
                    className="text-base"
                    style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700 }}
                  >
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-xl text-[#FF6F81]" style={{ fontWeight: 700 }}>
                    {faq.open ? '−' : '+'}
                  </span>
                </button>
                {faq.open && (
                  <p className="mb-4 text-base leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a href="#" className="text-sm hover:underline" style={{ fontWeight: 700 }}>
              Read the full FAQ →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#DEE1F4] px-5 py-16 text-center sm:px-8 lg:px-16">
        <div data-reveal className="mx-auto max-w-4xl">
          <h3
            className="m-0 mx-auto max-w-[18ch] text-3xl leading-tight text-[#2B2420] lg:text-4xl"
            style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            Let's rediscover your <span className="text-[#FF8B94]">story</span>, together.
          </h3>
          <p className="mx-auto mt-4 max-w-prose text-lg leading-relaxed text-[#3F3A50]" style={{ fontWeight: 500 }}>
            Book a free intro call and see if we're a good fit — no commitment, just a conversation.
          </p>
          <div className="mt-6">
            <button
              type="button"
              className="cursor-pointer border-0 bg-[#2B2420] px-7 py-3 text-[#FFFBF2] hover:bg-[#4A3F36]"
              style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '15px' }}
            >
              Book a Session
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-16">
        <div className="flex flex-wrap items-start justify-between gap-6 text-sm leading-relaxed text-[#6B5D50]">
          <div>
            <p className="m-0" style={{ fontWeight: 500 }}>therapy.metamorphosis@gmail.com</p>
            <p className="mt-1" style={{ fontWeight: 500 }}>Mumbai, Maharashtra, India</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/metamorphosis.therapy"
              className="hover:underline"
              style={{ fontWeight: 700 }}
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/in/kuntal-vora-30413b141"
              className="hover:underline"
              style={{ fontWeight: 700 }}
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-6 max-w-prose text-xs leading-relaxed text-[#8A7B6C]" style={{ fontWeight: 500 }}>
          Online services are not suitable for crises or emergencies. Please visit your nearest mental health center or a helpline if you need immediate support.
        </p>
        <div className="mt-4 flex flex-wrap gap-5">
          <a href="#" className="text-xs text-[#8A7B6C] hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-xs text-[#8A7B6C] hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-xs text-[#8A7B6C] hover:underline">
            Cancellation Policy
          </a>
        </div>
        <p className="mt-4 text-xs text-[#8A7B6C]" style={{ fontWeight: 500 }}>© 2026 Metamorphosis Therapy Initiative</p>
      </footer>
    </main>
  );
}
