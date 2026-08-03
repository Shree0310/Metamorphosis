'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FBF3EF] text-[#2B2420]" style={{ fontFamily: 'var(--font-kalam)' }}>
      <nav className="sticky top-0 z-50 border-b border-[#EDE6D8] bg-[#FBF3EF] px-5 py-5 sm:px-8 lg:px-16">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-4 hover:no-underline">
            <Image src="/logopng.png" alt="Metamorphosis Therapy logo" width={32} height={32} className="block h-8 w-auto" />
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
            <Link href="/#faq" className="text-base text-[#2B2420] hover:text-[#C2445B] hover:no-underline" style={{ fontWeight: 500 }}>
              FAQ
            </Link>
            <Link href="/book-now" className="bg-[#FF6F81] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#C2445B] hover:no-underline" style={{ borderRadius: 0 }}>
              Book a Session
            </Link>
          </div>
        </div>
      </nav>

      <section className="px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#C2445B]" style={{ fontWeight: 700 }}>
            Services
          </p>
          <h1 className="text-4xl leading-tight lg:text-5xl" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}>
            Individual Therapy
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
            “The curious paradox is that when I accept myself just as I am, then I can change” — Carl Rogers
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
            Individual therapy helps people to gain an in-depth understanding of themselves. During these sessions, we address emotions, thoughts, and behaviors. These sessions help individuals to understand their interpersonal and emotional patterns and learn effective ways of managing them.
          </p>

          <div className="mt-10 rounded-[2rem] border border-[#FDE68A] bg-white p-8 sm:p-10">
            <h2 className="text-2xl leading-tight" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700 }}>
              Areas that I work with
            </h2>
            <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
              <li>Interpersonal Relationship Difficulties</li>
              <li>Childhood trauma</li>
              <li>Grief and Loss</li>
              <li>Abuse</li>
              <li>Navigating attachment patterns</li>
              <li>Work life balance</li>
              <li>Life Transitions</li>
              <li>Neurodivergence (ADHD and Autism)</li>
              <li>Queer affirming care</li>
            </ul>
          </div>

          <div className="mt-12 rounded-[2rem] border border-[#FDE68A] bg-[#FDEEEF] p-8 sm:p-10">
            <h2 className="text-3xl leading-tight" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700 }}>
              Couples Therapy
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
              “The people we love are the hidden regulators of our bodily processes and our emotional lives. When love doesn’t work, we hurt” — Dr. Sue Johnson
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
              Couples Therapy helps partners to communicate their feelings and needs to each other without the fear of being criticized and/or attacked. It offers them a space to understand each other and communicate better by learning skills of interpersonal effectiveness.
            </p>

            <h3 className="mt-10 text-2xl leading-tight" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700 }}>
              Areas where couples counseling may be helpful
            </h3>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
              <li>Premarital Counseling</li>
              <li>Communication Barrier</li>
              <li>Drifting away from each other</li>
              <li>Repair from affair and betrayal</li>
            </ul>
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#FDE68A] bg-white p-8 sm:p-10">
            <h2 className="text-3xl leading-tight" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700 }}>
              Supervision
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
              “Drop the details, look for patterns” — Kuntal Vora
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
              Supervision helps in facilitating professional and personal growth of therapists. It involves self reflecting of the work done by the therapists in therapeutic sessions. By pooling in resources, the goal of supervision is to achieve better client outcomes. The supervision also focuses on therapists’ self to reduce burnout.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
              I provide individual as well as group supervision.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
