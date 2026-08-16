'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const approaches = [
  {
    title: 'Narrative Ideas and Practices',
    copy: "People aren't the problem — the problem is the problem. This approach examines problem stories, separates people from them, and grows richer stories of values, hopes, skills, and dreams.",
    color: '#FF8B94',
  },
  {
    title: 'Person-Centred Approach',
    copy: 'A humanistic approach that believes people have an innate capacity to grow when supported with empathy, unconditional positive regard, and genuineness.',
    color: '#4ECDC4',
  },
  {
    title: 'Integral Somatic Psychotherapy',
    copy: "Thoughts, emotions, and bodily sensations as interconnected. Combining reflective conversation with attention to the body builds self-awareness and access to what's hard to reach through words alone.",
    color: '#FFE66D',
  },
  {
    title: 'Emotionally Focused Therapy',
    copy: 'Emotions as signals of our attachment needs — relationship distress as recurring patterns of disconnection, not personal defects.',
    color: '#C7CEEA',
  },
];

export default function AboutPageContent() {
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
      <nav className="sticky top-0 z-50 border-b border-[#EDE6D8] bg-[#FBF3EF] px-5 py-5 sm:px-8 lg:px-16">
        <div className="flex flex-wrap items-center justify-between gap-5">
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
          <div className="flex flex-wrap items-center gap-7">
            <Link href="/" className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500 }}>
              Home
            </Link>
            <Link href="/#services" className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500 }}>
              Services
            </Link>
            <Link href="/#faq" className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500 }}>
              FAQ
            </Link>
            <Link
              href="/book-now"
              className="cursor-pointer border-0 bg-[#FF6F81] px-6 py-3 hover:bg-[#C2445B] hover:no-underline"
              style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '14.5px', borderRadius: 0, color: '#FFFFFF' }}
            >
              Book a Session
            </Link>
          </div>
        </div>
      </nav>

      <section className="bg-[#FDEEEF] px-5 py-24 text-center sm:px-8 lg:px-16">
        <p
          className="m-0 mx-auto text-3xl italic leading-tight text-[#2B2420] sm:text-4xl lg:text-5xl"
          style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600 }}
        >
          "It's the relationship that heals."
        </p>
        <p className="mt-5 text-sm uppercase tracking-widest text-[#C2445B]" style={{ fontWeight: 700 }}>
          — Irvin Yalom
        </p>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center justify-center gap-14 md:grid-cols-[minmax(280px,400px)_1fr]">
          <div className="relative">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden bg-[#DCDDF5]"
              style={{ borderRadius: '50% 50% 0 0 / 40% 40% 0 0' }}
            >
              <Image
                src="/Profile_Pic.jpg"
                alt="Kuntal - Counseling Psychologist"
                width={400}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div data-reveal>
            <span className="mb-4 block text-sm uppercase tracking-widest text-[#C2445B]" style={{ fontWeight: 700 }}>
              About
            </span>
            <h1
              className="m-0 text-3xl leading-tight sm:text-4xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
            >
              Hey! I'm <span className="text-[#FF6F81]">Kuntal Vora</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#4A3F36] sm:text-xl" style={{ fontWeight: 500 }}>
              I go by the pronouns she/her. I'm a Counseling Psychologist and Clinical Supervisor working with individuals and couples — heterosexual and queer — between the ages of 18 and 50. I also provide supervision to early-career and mid-career therapists, one-on-one and in groups.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[#4A3F36] sm:text-xl" style={{ fontWeight: 500 }}>
              Off the clock: cooking, journaling and photographing memories, true-crime shows, music, time with family and friends, traveling, yapping with people I'm comfortable with, petting every street cat I meet, and taking naps very, very seriously.
            </p>
          </div>
        </div>
      </section>

      <section data-reveal className="px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <span className="mb-6 block text-center text-sm uppercase tracking-widest text-[#C2445B]" style={{ fontWeight: 700 }}>
            Education & Certifications
          </span>

          {/* Education */}
          <div className="mb-12">
            <h3 className="mb-6 text-center text-3xl lg:text-4xl" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, color: '#2B2420' }}>
              Education
            </h3>
            <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
              <div className="flex gap-3">
                <span className="text-[#C2445B] text-2xl leading-none" style={{ fontWeight: 700 }}>•</span>
                <p className="m-0 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                  <strong>Masters in Counseling Psychology</strong> - SNDT University (2013 – 2015)
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#C2445B] text-2xl leading-none" style={{ fontWeight: 700 }}>•</span>
                <p className="m-0 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                  <strong>Bachelors in Psychology</strong> - Mumbai University (2010 – 2013)
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#C2445B] text-2xl leading-none" style={{ fontWeight: 700 }}>•</span>
                <p className="m-0 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                  <strong>Postgraduation Diploma in Counseling Psychology</strong> - Prafulta, Centre for Psychological Wellbeing (2017 – 2018)
                </p>
              </div>
            </div>
          </div>

          {/* Additional Certifications & Trainings */}
          <div>
            <h3 className="mb-6 text-center text-3xl lg:text-4xl" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, color: '#2B2420' }}>
              Additional Certifications & Trainings
            </h3>
            <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
              <div className="flex gap-3">
                <span className="text-[#C2445B] text-2xl leading-none" style={{ fontWeight: 700 }}>•</span>
                <p className="m-0 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                  <strong>Fellowship in Indian Couple Therapy</strong> - Raising Family Academy (Currently pursuing, 2027)
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#C2445B] text-2xl leading-none" style={{ fontWeight: 700 }}>•</span>
                <p className="m-0 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                  <strong>Integral Somatic Psychotherapy (ISP)</strong> - Prafulta, Centre for Psychological Wellbeing (Currently in training, 2027)
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#C2445B] text-2xl leading-none" style={{ fontWeight: 700 }}>•</span>
                <p className="m-0 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                  <strong>Diploma in Supervision using Narrative Ideas & Practices</strong> - Narrative Practices India (NPI) (2026)
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#C2445B] text-2xl leading-none" style={{ fontWeight: 700 }}>•</span>
                <p className="m-0 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                  <strong>Externship in Emotionally Focused Therapy</strong> - ICEEFT (2025)
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#C2445B] text-2xl leading-none" style={{ fontWeight: 700 }}>•</span>
                <p className="m-0 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                  <strong>Certificate of Attainment in RiseUp Supervision</strong> - Indian Academy of Professional Supervisors (2024)
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#C2445B] text-2xl leading-none" style={{ fontWeight: 700 }}>•</span>
                <p className="m-0 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                  <strong>South Asian Diploma in Narrative Ideas and Practices</strong> - Narrative Practices India (NPI) (2022)
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#C2445B] text-2xl leading-none" style={{ fontWeight: 700 }}>•</span>
                <p className="m-0 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                  <strong>Queer Affirmative Counseling Practices</strong> - Mariwala Health Initiative (MHI) (2021)
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#C2445B] text-2xl leading-none" style={{ fontWeight: 700 }}>•</span>
                <p className="m-0 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                  <strong>Postgraduate Certificate in Attachment Theory</strong> - International Attachment Network (IAN) (2021)
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#C2445B] text-2xl leading-none" style={{ fontWeight: 700 }}>•</span>
                <p className="m-0 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                  <strong>Certificate in Trauma Informed Care</strong> - The Alternative Story (2020)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FDEEEF]">
        <div data-reveal className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:px-16">
          <span className="mb-4 block text-sm uppercase tracking-widest text-[#C2445B]" style={{ fontWeight: 700 }}>
            My journey with psychology
          </span>
          <h2
            className="mb-6 text-2xl leading-tight sm:text-3xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            One offhand comment in a math class changed <span className="text-[#4ECDC4]">everything</span>.
          </h2>
          <p className="m-0 text-lg leading-relaxed text-[#4A3F36] sm:text-xl" style={{ fontWeight: 500 }}>
            My journey with psychology began when my math teacher — my least favorite subject — mentioned that a family member of hers was a psychologist. That was an aha moment. I looked into the field and decided: this is who I'm going to be.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[#4A3F36] sm:text-xl" style={{ fontWeight: 500 }}>
            I love being a therapist and find the work deeply fulfilling. It's a privilege to witness the shifts that happen in someone's life, and an honor to be a fellow traveler in the journeys my clients and supervisees take. Just like metamorphosis.
          </p>
        </div>
      </section>

      <section data-reveal className="px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <span className="mb-4 block text-sm uppercase tracking-widest text-[#C2445B]" style={{ fontWeight: 700 }}>
            About my practice
          </span>
          <h2
            className="mb-6 text-2xl leading-tight sm:text-3xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            <span className="text-[#C7CEEA]">Metamorphosis</span> Therapy Initiative
          </h2>
          <p className="m-0 text-lg leading-relaxed text-[#4A3F36] sm:text-xl" style={{ fontWeight: 500 }}>
            I run a fully virtual practice where I see Indian individuals and couples all around the world, alongside supervision for early-career and mid-career therapists, individually and in groups. I keep up my own personal therapy and regular supervision — to take care of myself, personally and professionally.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[#4A3F36] sm:text-xl" style={{ fontWeight: 500 }}>
            I started Metamorphosis with the intention of representing the changes that happen when we start taking care of ourselves — not just the big, momentous ones, but the small, tentative ones too. It's not just about the butterflies. It's about the cocoon as well.
          </p>
        </div>
      </section>

      <section data-reveal className="px-5 pb-20 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-11 md:grid-cols-2">
          <div className="border border-[#FDE68A] bg-white p-10">
            <h3 className="mb-5 text-3xl" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700 }}>
              Values
            </h3>
            <ul className="m-0 list-disc pl-5 text-lg leading-loose text-[#4A3F36]" style={{ fontWeight: 500 }}>
              <li>Curiosity</li>
              <li>Compassion</li>
              <li>Kindness</li>
              <li>Transparency</li>
              <li>Honesty</li>
              <li>Authenticity</li>
              <li>Gentleness</li>
              <li>Confidential & ethical</li>
            </ul>
          </div>
          <div className="border border-[#FDE68A] bg-white p-10">
            <h3 className="mb-5 text-3xl" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700 }}>
              Ethics
            </h3>
            <ul className="m-0 list-disc pl-5 text-lg leading-loose text-[#4A3F36]" style={{ fontWeight: 500 }}>
              <li>Trauma-informed</li>
              <li>Queer-affirmative</li>
              <li>Intersectional feminist</li>
              <li>Culturally sensitive</li>
              <li>Social justice oriented</li>
              <li>Anti-casteist, anti-ableist, anti-oppressive</li>
              <li>Inclusive</li>
              <li>Respect for individual rights & dignity</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#DEE1F4]">
        <div data-reveal className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:px-16">
          <span className="mb-4 block text-sm uppercase tracking-widest text-[#C2445B]" style={{ fontWeight: 700 }}>
            Ethos
          </span>
          <p className="m-0 max-w-prose text-2xl leading-relaxed text-[#2B2420]" style={{ fontWeight: 500 }}>
            Metamorphosis Therapy Initiative strives to advocate for mental health and normalize conversations around mental health care. Our aim is to help you help yourself.
          </p>
        </div>
      </section>

      <section data-reveal className="px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <span className="mb-4 block text-sm uppercase tracking-widest text-[#C2445B]" style={{ fontWeight: 700 }}>
            My style
          </span>
          <h2
            className="mb-6 text-2xl leading-tight sm:text-3xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            Client-centred, <span className="text-[#FFE66D]">body-aware</span>, non-pathologizing.
          </h2>
          <p className="m-0 text-lg leading-relaxed text-[#4A3F36] sm:text-xl" style={{ fontWeight: 500 }}>
            I'm a narrative practitioner working through a client-centred lens, drawing from a body-based approach — I believe our bodies feel and store a lot of our experiences. My style is collaborative and relational: I strive to cultivate a safe, non-judgmental space, and I strongly believe in the autonomy people hold.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[#4A3F36] sm:text-xl" style={{ fontWeight: 500 }}>
            My approach is non-blaming and non-pathologizing — I don't believe in "fixing" people, because that would mean something is inherently broken. I see humans as humans, not clusters of symptoms. In our sessions, we may talk, draw, move, or sit in silence to reflect on what's been going on.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[#4A3F36] sm:text-xl" style={{ fontWeight: 500 }}>
            Trauma-informed, queer-affirmative, neuro-affirming, culturally sensitive, social-justice-lensed, and feminist — these are the core pillars of my practice.
          </p>
        </div>
      </section>

      <section className="bg-[#FDEEEF]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-16">
          <span className="mb-3 block text-sm uppercase tracking-widest text-[#C2445B]" style={{ fontWeight: 700 }}>
            How I work
          </span>
          <h2
            className="mb-11 text-2xl leading-tight sm:text-3xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            My <span className="text-[#FF8B94]">therapeutic</span> approaches
          </h2>
          <div className="grid gap-7 md:grid-cols-2">
            {approaches.map((approach, i) => (
              <div key={i} data-reveal className="border border-[#FDE68A] bg-white p-8">
                <span className="mb-5 block h-2 w-10" style={{ background: approach.color }}></span>
                <h3 className="mb-4 text-2xl leading-snug" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700 }}>
                  {approach.title}
                </h3>
                <p className="m-0 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
                  {approach.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#DEE1F4] px-5 py-16 text-center sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <h3
            className="m-0 mx-auto max-w-[20ch] text-3xl leading-tight text-[#2B2420] lg:text-4xl"
            style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            Curious what working <span className="text-[#4ECDC4]">together</span> could look like?
          </h3>
          <p className="mx-auto mt-4 max-w-prose text-lg leading-relaxed text-[#3F3A50]" style={{ fontWeight: 500 }}>
            Book a free intro call and see if we're a good fit — no commitment, just a conversation.
          </p>
          <div className="mt-7">
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

      <footer className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-16">
        <div className="flex flex-wrap items-start justify-between gap-6 text-sm leading-relaxed text-[#6B5D50]">
          <div>
            <p className="m-0" style={{ fontWeight: 500 }}>therapy.metamorphosis@gmail.com</p>
            <p className="mt-1" style={{ fontWeight: 500 }}>Mumbai, Maharashtra, India</p>
          </div>
          <div className="flex gap-4">
            <a href="https://instagram.com/metamorphosis.therapy" className="hover:underline" style={{ fontWeight: 700 }}>
              Instagram
            </a>
            <a href="https://linkedin.com/in/kuntal-vora-30413b141" className="hover:underline" style={{ fontWeight: 700 }}>
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
