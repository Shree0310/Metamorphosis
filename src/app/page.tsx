'use client';

import { useEffect } from 'react';
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

const values = [
  { name: "Curiosity", color: "#4ECDC4" },
  { name: "Compassion", color: "#FF8B94" },
  { name: "Kindness", color: "#FFE66D" },
  { name: "Transparency", color: "#C7CEEA" },
  { name: "Honesty", color: "#FBE0C4" },
  { name: "Authenticity", color: "#FF6F81" },
  { name: "Gentleness", color: "#C9EDE8" },
  { name: "Confidential & Ethical", color: "#DEE1F4" },
];

export default function Home() {

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
            <Link href="/about" className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500, textDecoration: 'none' }}>
              About
            </Link>
            <Link href="/services" className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500, textDecoration: 'none' }}>
              Services
            </Link>
            <Link href="/faq" className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500, textDecoration: 'none' }}>
              FAQ
            </Link>
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
      <section className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:px-16 lg:py-24" style={{ overflow: 'hidden' }}>
        {/* Decorative Elements */}
        <svg
          className="absolute left-[3%] top-8 h-10 w-10 opacity-30"
          viewBox="0 0 24 24"
          fill="#FFD6A5"
          style={{ animation: 'floatY 8.5s ease-in-out infinite' }}
        >
          <circle cx="12" cy="12" r="10" />
        </svg>

        <svg
          className="absolute right-[5%] top-12 h-12 w-12 opacity-35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C9ADA7"
          strokeWidth="1.5"
          style={{ animation: 'floatY 7.5s ease-in-out infinite', animationDelay: '0.5s' }}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>

        <svg
          className="absolute left-[8%] bottom-14 h-9 w-9 opacity-30"
          viewBox="0 0 24 24"
          fill="#CAFFBF"
          style={{ animation: 'floatY 9s ease-in-out infinite', animationDelay: '1s' }}
        >
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>

        <svg
          className="absolute right-[10%] bottom-10 h-11 w-11 opacity-35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9BF6FF"
          strokeWidth="2"
          style={{ animation: 'floatY 7s ease-in-out infinite', animationDelay: '1.5s' }}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
          <circle cx="9" cy="9" r="1" fill="#9BF6FF" />
          <circle cx="15" cy="9" r="1" fill="#9BF6FF" />
        </svg>

        <svg
          className="absolute left-[15%] top-1/3 h-8 w-8 opacity-30"
          viewBox="0 0 24 24"
          fill="#FDFFB6"
          style={{ animation: 'floatY 8s ease-in-out infinite', animationDelay: '2s' }}
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>

        <svg
          className="absolute right-[3%] top-1/2 h-10 w-10 opacity-35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFD6E8"
          strokeWidth="2"
          style={{ animation: 'floatY 6.5s ease-in-out infinite', animationDelay: '0.8s' }}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>

        <div className="relative z-10">
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

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes floatY {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
        `}} />
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
                  className="inline-flex border-2 border-[#2B2420] bg-transparent px-6 py-3 text-[#2B2420] hover:bg-[#C2445B] hover:no-underline transition-transform duration-100 active:scale-95"
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
              className="m-0 text-3xl leading-tight text-[#2B2420] lg:text-4xl"
              style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
            >
              When I'm not in session
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
              I enjoy cooking, documenting memories through journaling and clicking pictures, watching fictional content especially crime based shows, enjoying music, spending time with my family and friends, traveling, yapping with people (when I am comfortable with them), petting cats on streets and taking naps (I take naps very seriously).
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 -z-10 h-full w-full bg-[#FFE1B8]"></div>
            <Image
              src="/off-the-clock-torn.png"
              alt="Off the clock"
              width={800}
              height={450}
              className="relative z-10 aspect-video w-full object-cover"
            />
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-5 pb-16 sm:px-8 lg:px-16">
          <span className="whitespace-nowrap bg-[#FF8B94] px-4 py-2 text-sm text-[#2B2420]" style={{ fontWeight: 700 }}>
            Cooking enthusiast
          </span>
          <span className="whitespace-nowrap bg-[#4ECDC4] px-4 py-2 text-sm text-[#2B2420]" style={{ fontWeight: 700 }}>
            Crime show addict
          </span>
          <span className="whitespace-nowrap bg-[#FFE66D] px-4 py-2 text-sm text-[#2B2420]" style={{ fontWeight: 700 }}>
            Memory documenter
          </span>
          <span className="whitespace-nowrap bg-[#C7CEEA] px-4 py-2 text-sm text-[#2B2420]" style={{ fontWeight: 700 }}>
            Professional napper
          </span>
          <span className="whitespace-nowrap bg-[#FFB3BA] px-4 py-2 text-sm text-[#2B2420]" style={{ fontWeight: 700 }}>
            Street cat petter
          </span>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative px-5 py-16 sm:px-8 lg:px-16" style={{ overflow: 'hidden' }}>
        {/* Decorative Elements */}
        <svg
          className="absolute left-[2%] top-8 h-11 w-11 opacity-25"
          viewBox="0 0 24 24"
          fill="#BDB2FF"
          style={{ animation: 'floatY 7.5s ease-in-out infinite' }}
        >
          <circle cx="12" cy="12" r="10" />
        </svg>

        <svg
          className="absolute right-[4%] top-16 h-9 w-9 opacity-30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#A0C4FF"
          strokeWidth="2"
          style={{ animation: 'floatY 8.5s ease-in-out infinite', animationDelay: '0.6s' }}
        >
          <path d="M12 2l1.8 5.6H20l-4.8 3.5L17 17l-5-3.6L7 17l1.8-5.9L4 7.6h6.2z" />
        </svg>

        <svg
          className="absolute left-[6%] bottom-20 h-10 w-10 opacity-25"
          viewBox="0 0 24 24"
          fill="#FFADAD"
          style={{ animation: 'floatY 9s ease-in-out infinite', animationDelay: '1.2s' }}
        >
          <rect x="4" y="4" width="16" height="16" rx="3" />
        </svg>

        <svg
          className="absolute right-[8%] bottom-24 h-12 w-12 opacity-30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFC6FF"
          strokeWidth="1.5"
          style={{ animation: 'floatY 7s ease-in-out infinite', animationDelay: '1.8s' }}
        >
          <polygon points="12,2 2,12 12,22 22,12" />
        </svg>

        <svg
          className="absolute left-[15%] top-1/3 h-10 w-10 opacity-28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFD98E"
          strokeWidth="2"
          style={{ animation: 'floatY 8s ease-in-out infinite', animationDelay: '0.3s' }}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>

        <svg
          className="absolute right-[12%] top-1/2 h-9 w-9 opacity-25"
          viewBox="0 0 24 24"
          fill="#C9F0FF"
          style={{ animation: 'floatY 7.8s ease-in-out infinite', animationDelay: '1.4s' }}
        >
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
        </svg>

        <svg
          className="absolute left-[3%] top-1/2 h-8 w-8 opacity-30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B4A7D6"
          strokeWidth="1.5"
          style={{ animation: 'floatY 6.8s ease-in-out infinite', animationDelay: '2.2s' }}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
          <circle cx="9" cy="9" r="1" fill="#B4A7D6" />
          <circle cx="15" cy="9" r="1" fill="#B4A7D6" />
        </svg>

        <svg
          className="absolute right-[2%] bottom-12 h-11 w-11 opacity-28"
          viewBox="0 0 24 24"
          fill="#FFE5EC"
          style={{ animation: 'floatY 7.2s ease-in-out infinite', animationDelay: '0.9s' }}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>

        <svg
          className="absolute left-[10%] bottom-8 h-9 w-9 opacity-25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D4F1F4"
          strokeWidth="2"
          style={{ animation: 'floatY 8.3s ease-in-out infinite', animationDelay: '1.7s' }}
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
        </svg>

        <svg
          className="absolute right-[18%] top-20 h-8 w-8 opacity-30"
          viewBox="0 0 24 24"
          fill="#FFF5BA"
          style={{ animation: 'floatY 6.5s ease-in-out infinite', animationDelay: '0.5s' }}
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>

        <div className="relative z-10 mx-auto max-w-6xl">
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
                  <a href="/services" className="mt-4 inline-block text-sm hover:underline" style={{ fontWeight: 700 }}>
                    Know more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#FCE4E2]">
        <div data-reveal className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-16">
          <div className="text-center">
            <span className="mb-2 block text-xs uppercase tracking-widest text-[#C2445B]" style={{ fontWeight: 700 }}>
              Core values
            </span>
            <h2
              className="mb-4 text-3xl lg:text-4xl"
              style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
            >
              What guides my <span className="text-[#FF6F81]">practice</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
              These values shape every session, every conversation, and every moment we share in our work together.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white p-6 text-center border border-[#FDE68A]"
                data-reveal
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center">
                  {i === 0 && (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill={value.color} stroke="none">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path>
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill={value.color} stroke="none">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  )}
                  {i === 2 && (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={value.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M2 12h20"></path>
                    </svg>
                  )}
                  {i === 3 && (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill={value.color} stroke="#fff" strokeWidth="1.5">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3" fill="#fff"></circle>
                    </svg>
                  )}
                  {i === 4 && (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={value.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                  {i === 5 && (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill={value.color} stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  )}
                  {i === 6 && (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill={value.color} stroke="none">
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                  )}
                  {i === 7 && (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill={value.color} stroke="#fff" strokeWidth="1.5">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  )}
                </div>
                <h3
                  className="text-lg"
                  style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, color: '#2B2420' }}
                >
                  {value.name}
                </h3>
              </div>
            ))}
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
            <Link
              href="/book-now"
              className="inline-block cursor-pointer border-0 bg-[#2B2420] px-7 py-3 text-[#FFFBF2] hover:bg-[#4A3F36] hover:no-underline"
              style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}
            >
              Book a Session
            </Link>
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
          <Link href="/faq" className="text-xs text-[#8A7B6C] hover:underline">
            FAQ
          </Link>
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
