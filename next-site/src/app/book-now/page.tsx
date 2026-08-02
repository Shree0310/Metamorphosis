'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type FormState = {
  name: string;
  email: string;
  phone: string;
  referral: string;
  service: string;
  details: string;
};

const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  referral: '',
  service: '',
  details: '',
};

export default function BookNowPage() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

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

      <section className="bg-[#FDEEEF] px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#C2445B]" style={{ fontWeight: 700 }}>
              Contact me
            </p>
            <h1 className="text-4xl leading-tight lg:text-5xl" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}>
              Let’s start with a conversation.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
              Fill in the form below and I’ll get back to you within 2 working days to book a consultation call.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[#FDE68A] bg-white p-8 shadow-sm sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="text-sm font-semibold text-[#2B2420]">
                  <span className="mb-2 block">Name</span>
                  <input required name="name" value={formData.name} onChange={handleChange} className="w-full border border-[#E7DCCF] bg-[#FFFDF9] px-4 py-3 outline-none focus:border-[#FF6F81]" placeholder="Your name" />
                </label>
                <label className="text-sm font-semibold text-[#2B2420]">
                  <span className="mb-2 block">Email Address</span>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-[#E7DCCF] bg-[#FFFDF9] px-4 py-3 outline-none focus:border-[#FF6F81]" placeholder="you@example.com" />
                </label>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="text-sm font-semibold text-[#2B2420]">
                  <span className="mb-2 block">Contact Number</span>
                  <input required name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-[#E7DCCF] bg-[#FFFDF9] px-4 py-3 outline-none focus:border-[#FF6F81]" placeholder="+91 98765 43210" />
                </label>
                <label className="text-sm font-semibold text-[#2B2420]">
                  <span className="mb-2 block">Referral Source</span>
                  <input required name="referral" value={formData.referral} onChange={handleChange} className="w-full border border-[#E7DCCF] bg-[#FFFDF9] px-4 py-3 outline-none focus:border-[#FF6F81]" placeholder="Friend, Instagram, Search, etc." />
                </label>
              </div>

              <label className="block text-sm font-semibold text-[#2B2420]">
                <span className="mb-2 block">Service Required</span>
                <select required name="service" value={formData.service} onChange={handleChange} className="w-full border border-[#E7DCCF] bg-[#FFFDF9] px-4 py-3 outline-none focus:border-[#FF6F81]">
                  <option value="">Select a service</option>
                  <option value="Individual Therapy">Individual Therapy</option>
                  <option value="Couples Therapy">Couples Therapy</option>
                  <option value="Supervision">Supervision</option>
                </select>
              </label>

              <label className="block text-sm font-semibold text-[#2B2420]">
                <span className="mb-2 block">What do you want to talk about?</span>
                <textarea required name="details" rows={6} value={formData.details} onChange={handleChange} className="w-full resize-y border border-[#E7DCCF] bg-[#FFFDF9] px-4 py-3 outline-none focus:border-[#FF6F81]" placeholder="Share a little about what brought you here." />
              </label>

              <button type="submit" className="rounded-full bg-[#FF6F81] px-7 py-3 text-sm font-semibold text-[#FFFBF2] transition hover:bg-[#C2445B]">
                Send enquiry
              </button>

              {submitted && (
                <div className="rounded-2xl border border-[#DCDDF5] bg-[#F5F4FF] p-4 text-sm text-[#3F3A50]">
                  Thank you for reaching out. I will get back to you within 2 working days to book a consultation call.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[#FDE68A] bg-[#FDEEEF] p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#C2445B]" style={{ fontWeight: 700 }}>
                Appointment links
              </p>
              <div className="mt-5 space-y-4">
                <a href="https://appt.link/meet-with-metamorphosis-therapy-initiative-HdagOYAo/individual-therapy" target="_blank" rel="noreferrer" className="block rounded-2xl border border-[#E7DCCF] bg-white p-4 text-[#2B2420] transition hover:border-[#FF6F81] hover:shadow-sm">
                  <p className="font-semibold" style={{ fontFamily: 'var(--font-baloo)' }}>Individual Therapy</p>
                  <p className="mt-1 text-sm text-[#4A3F36]">Book a consultation call for individual support.</p>
                </a>
                <a href="https://appt.link/meet-with-metamorphosis-therapy-initiative-HdagOYAo/individual-supervision" target="_blank" rel="noreferrer" className="block rounded-2xl border border-[#E7DCCF] bg-white p-4 text-[#2B2420] transition hover:border-[#FF6F81] hover:shadow-sm">
                  <p className="font-semibold" style={{ fontFamily: 'var(--font-baloo)' }}>Supervision</p>
                  <p className="mt-1 text-sm text-[#4A3F36]">Book a consultation call for clinical supervision.</p>
                </a>
                <div className="rounded-2xl border border-dashed border-[#E7DCCF] bg-white p-4">
                  <p className="font-semibold" style={{ fontFamily: 'var(--font-baloo)' }}>Couples Therapy</p>
                  <p className="mt-1 text-sm text-[#4A3F36]">Please use the contact form to request a couples consultation and I’ll share the booking link directly.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#FDE68A] bg-white p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#C2445B]" style={{ fontWeight: 700 }}>
                What to expect
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#4A3F36]">
                <li>• We’ll confirm fit and availability for a consultation call.</li>
                <li>• If it feels aligned, we’ll move forward with a first session.</li>
                <li>• If now isn’t the right time, I’ll still make sure you leave with thoughtful next steps.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
