'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

const faqs: FAQ[] = [
  // About Therapy
  {
    id: "therapy-what-is",
    category: "About Therapy",
    question: "What is therapy?",
    answer: "Therapy is an investment in yourself and your mental health. It can help you to gain a better understanding of yourself and make positive changes in your life. It's a collaborative process between you and a therapist. A therapist can help you gain insight, develop coping skills, and learn to manage difficult emotions. Together, you can create a plan that works best for you on your journey of self-exploration and healing."
  },
  {
    id: "therapy-is-for-me",
    category: "About Therapy",
    question: "How do I know therapy is for me?",
    answer: "Therapy is for everyone and that's the best part. There are no criteria for wanting to meet with a therapist. If the question still persists then it's usually a good time to see the therapist. Here are a few questions to help you decide if therapy is right for you:\n\n• Do you feel like your emotions are out of control?\n• Are you having difficulty managing your stress?\n• Do you feel like you're struggling to cope with life's demands?\n• Are you having trouble making decisions or solving problems?\n• Are you having difficulty in your relationships/friendships?\n• Do you feel overwhelmed or disconnected from your life?\n• Do you need help understanding your thoughts and feelings?\n\nIf you find yourself saying yes to any of these questions, then therapy might be a good option for you. Therapy can provide you with the skills and support to help you cope with life's challenges and navigate difficult situations. It can also help you to identify and manage your emotions, improve your relationships, and better understand yourself."
  },
  {
    id: "therapy-advice",
    category: "About Therapy",
    question: "Will you tell me what to do?",
    answer: "The therapeutic process is exploratory and collaborative. Your life is your expertise, so I won't give you any direct advice. My hope is to help you to help yourself."
  },
  {
    id: "therapy-confidential",
    category: "About Therapy",
    question: "Is psychotherapy confidential?",
    answer: "The sessions are confidential unless I feel you are at risk to yourself or to another, in which case I am ethically bound to break confidentiality to protect you or another to the best of my ability. I am also legally bound to report any active child sexual abuse."
  },
  {
    id: "therapy-end",
    category: "About Therapy",
    question: "When and how does therapy end?",
    answer: "Therapy concludes when you feel ready, and whenever possible, we'll plan this transition together. While life sometimes brings unexpected changes, I believe in creating intentional, thoughtful endings to our therapeutic relationship.\n\nA planned conclusion allows us to:\n• Reflect on the progress you've made and the insights you've gained\n• Acknowledge the work we've done together\n• Identify strategies for continuing your growth independently\n• Honor the significance of our therapeutic relationship\n\nYou're always in control — you can choose to end therapy at any point. When we work toward a planned ending, we'll collaboratively decide on a final session date. During this time, we'll look back at your journey, celebrate the changes you've noticed in yourself, and explore how your patterns and relationships have evolved.\n\nI welcome your feedback about our work together, my practice, or this website — whether shared publicly or privately via email."
  },
  // About My Practice
  {
    id: "practice-location",
    category: "About My Practice",
    question: "Where do sessions take place?",
    answer: "My practice is currently fully online post the pandemic, and is hence, location independent - which means I can work with you wherever you are from as long as you have a good Wifi connection. We will work together online. I ask that you find a private, closed space when you join our meetings, so that you are comfortable and safe."
  },
  {
    id: "practice-session-length",
    category: "About My Practice",
    question: "How long are the sessions for?",
    answer: "The sessions for Individual therapy are for 60 minutes and sessions for Couples Therapy are for 90 minutes. The supervision sessions are for 60 minutes."
  },
  {
    id: "practice-frequency",
    category: "About My Practice",
    question: "How often do we meet?",
    answer: "I offer weekly and bi-weekly slots. Once we decide on a slot, we would continue to meet on the same day and time."
  },
  {
    id: "practice-session-count",
    category: "About My Practice",
    question: "How many sessions are required?",
    answer: "Therapy aims for long-lasting changes and is a long-term process, typically lasting from several months to several years. There is no fixed timeline - it varies depending on individual requirements and preferences.\n\nSome clients prefer to stay in therapy for a few months to work on specific concerns, while some clients prefer long-term work lasting years. It is also a normal practice for clients to take a break from therapy and resume as and when required."
  },
  {
    id: "practice-availability",
    category: "About My Practice",
    question: "What is your availability?",
    answer: "I'm usually available between 11:00 am IST to 7:00 pm IST from Tuesdays to Saturdays. Sundays and Mondays are my non-working days. I won't be able to respond to calls, emails, or messages if I am in a session and after 7:00 pm IST. I won't be able to respond on weekends and on public holidays."
  },
  {
    id: "practice-online-platform",
    category: "About My Practice",
    question: "Where would our online sessions take place?",
    answer: "The sessions would happen on Zoom video call. It's requested to have a strong Wifi/network connection."
  },
  {
    id: "practice-clients",
    category: "About My Practice",
    question: "Who do you work with? What types of counseling do you provide?",
    answer: "I work with Indian adults and couples who fall between the ages of 18-40 years, residing globally. I provide individual as well as couples counseling."
  },
  {
    id: "practice-not-work-with",
    category: "About My Practice",
    question: "Who do you not work with?",
    answer: "My current practice focus means I don't work with eating disorders, psychotic disorders (including schizophrenia and schizoaffective disorder), OCD, or personality disorders.\n\nThese concerns deserve specialized care from professionals with specific training in these areas. I'm happy to help you find appropriate resources and connect you with therapists who have the expertise you need."
  },
  {
    id: "practice-feel-better",
    category: "About My Practice",
    question: "Will I feel better after each session?",
    answer: "Sessions don't guarantee a feel-good experience. Therapy is often about self-awareness and inner work. Thus, there is a possibility of the client feeling emotionally or physically drained during or after the session. This experience is a normal part of one's healing process."
  },
  {
    id: "practice-booking",
    category: "About My Practice",
    question: "How do I book a session?",
    answer: "If you are a new client/supervisee, you can schedule a consultation call from the calendar. The zoom link would be shared with you post the booking. If you are an existing client/supervisee, you can schedule the slot from the calendar. The slot needs to be booked 48 hours prior to the session. You can make the payment along with booking the slot."
  },
  {
    id: "practice-medications",
    category: "About My Practice",
    question: "Do you prescribe medications and/or diagnoses?",
    answer: "As a Counseling Psychologist, I cannot provide any medications or diagnoses. If they are required, I can provide a referral for the client to visit a psychiatrist or clinical psychologist."
  },
  {
    id: "practice-mumbai",
    category: "About My Practice",
    question: "Where are you located?",
    answer: "I am based out of Mumbai. I see clients globally, online."
  },
  {
    id: "practice-languages",
    category: "About My Practice",
    question: "What languages do you offer sessions in?",
    answer: "English, Gujarati, and Hindi."
  },
  // About Fees
  {
    id: "fees-pricing",
    category: "About Fees",
    question: "What are your fees?",
    answer: "For Individual Sessions:\n• Clients residing in India - ₹2500\n• Indians residing outside of India - ₹3500\n\nFor Couples Therapy sessions:\n• Couples residing in India - ₹4000\n• Indian Couples outside of India - ₹5000\n\nFor supervision sessions - A range from ₹1200 to ₹2200.\n\n*Note - The fees are subject to yearly change."
  },
  {
    id: "fees-sliding-scale",
    category: "About Fees",
    question: "Do you offer sliding scale slots?",
    answer: "Yes I do. I have a limited number of sliding scale slots available. In case they are full, I am happy to provide referrals whenever possible."
  },
  {
    id: "fees-payment-policy",
    category: "About Fees",
    question: "What is your payment policy?",
    answer: "Once you book the slot, you are expected to make payment. The payment needs to be made 48 hours prior to the session. I accept payments through bank transfer, UPI, Wise Pay, Remitly."
  },
  {
    id: "fees-cancellation",
    category: "About Fees",
    question: "What is your cancellation and rescheduling policy?",
    answer: "The client needs to inform the therapist 24 hours in advance in case of cancellation and rescheduling of the session. After 24 hours, 50% of the session fee would be charged. This practice of being charged for no shows and late cancellations is standard in the field, and takes into account that the client is not just paying for the services rendered, but reserving a time slot which the therapist cannot offer to someone else on the short notice. An exception can be made once in extraneous circumstances."
  }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredFaqs(faqs);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = faqs.filter(faq =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query)
      );
      setFilteredFaqs(filtered);
    }
  }, [searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  const groupedFaqs = filteredFaqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

  return (
    <main className="min-h-screen bg-[#FBF3EF] text-[#2B2420]" style={{ fontFamily: 'var(--font-kalam)' }}>
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
            <span className="text-lg tracking-tight text-[#2B2420]" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}>
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
            <span className="text-base text-[#2B2420]" style={{ fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: '#C2445B' }}>
              FAQ
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
              <span
                className="text-xl text-[#2B2420]"
                style={{ fontFamily: 'var(--font-baloo)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: '#C2445B' }}
              >
                FAQ
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

      {/* Hero Section */}
      <section className="relative bg-[#FDEEEF] px-5 py-24 text-center sm:px-8 lg:px-16" style={{ overflow: 'hidden' }}>
        {/* Decorative Elements */}
        <svg
          className="absolute left-[8%] top-12 h-10 w-10 opacity-40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="1.5"
          style={{ animation: 'floatY 7s ease-in-out infinite' }}
        >
          <path d="M7 8c-2 1-3 3-3 5.5A3.5 3.5 0 0 0 7.5 17 3.5 3.5 0 0 0 11 13.5C11 10 8.5 8.5 7 8z" />
          <path d="M16 8c-2 1-3 3-3 5.5a3.5 3.5 0 0 0 3.5 3.5 3.5 3.5 0 0 0 3.5-3.5C20 10 17.5 8.5 16 8z" />
        </svg>

        <svg
          className="absolute right-[10%] top-20 h-8 w-8 opacity-50"
          viewBox="0 0 24 24"
          fill="#C7CEEA"
          style={{ animation: 'floatY 6s ease-in-out infinite', animationDelay: '0.5s' }}
        >
          <path d="M12 2l1.8 5.6H20l-4.8 3.5L17 17l-5-3.6L7 17l1.8-5.9L4 7.6h6.2z" />
        </svg>

        <svg
          className="absolute left-[15%] bottom-16 h-12 w-12 opacity-45"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF8B94"
          strokeWidth="1.5"
          style={{ animation: 'floatY 8s ease-in-out infinite', animationDelay: '1s' }}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>

        <svg
          className="absolute right-[5%] bottom-24 h-10 w-10 opacity-40"
          viewBox="0 0 24 24"
          fill="#4ECDC4"
          style={{ animation: 'floatY 9s ease-in-out infinite', animationDelay: '1.5s' }}
        >
          <path d="M20 12.5A8.5 8.5 0 1 1 11.4 4a6.7 6.7 0 1 0 8.6 8.5z" />
        </svg>

        <svg
          className="absolute left-[5%] top-1/2 h-7 w-7 opacity-45"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFE66D"
          strokeWidth="2"
          style={{ animation: 'floatY 7.5s ease-in-out infinite', animationDelay: '2s' }}
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" strokeLinecap="round" />
          <line x1="12" y1="21" x2="12" y2="23" strokeLinecap="round" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeLinecap="round" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeLinecap="round" />
          <line x1="1" y1="12" x2="3" y2="12" strokeLinecap="round" />
          <line x1="21" y1="12" x2="23" y2="12" strokeLinecap="round" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeLinecap="round" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeLinecap="round" />
        </svg>

        <svg
          className="absolute right-[18%] top-1/3 h-9 w-9 opacity-40"
          viewBox="0 0 24 24"
          fill="#FFB3BA"
          style={{ animation: 'floatY 6.5s ease-in-out infinite', animationDelay: '0.8s' }}
        >
          <circle cx="12" cy="12" r="10" />
        </svg>

        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="mb-4 block text-xs uppercase tracking-widest text-[#C2445B]" style={{ fontWeight: 700 }}>
            Got Questions?
          </span>
          <h1
            className="m-0 text-3xl leading-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg italic leading-relaxed text-[#4A3F36] sm:text-xl" style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700 }}>
            "The ability to ask questions is the greatest resource in learning the truth"
            <span className="mt-3 block text-xs uppercase tracking-widest text-[#C2445B] not-italic" style={{ fontWeight: 700 }}>
              — Carl Jung
            </span>
          </p>

          {/* Search Bar - Moved inside hero section */}
          <div className="mx-auto mt-8 max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-2 border-[#E0D5C7] bg-white px-4 py-3 pr-12 text-[#2B2420] focus:border-[#C2445B] focus:outline-none"
                style={{ fontFamily: 'var(--font-kalam)', fontSize: '15px', fontWeight: 500 }}
              />
              <svg
                className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2"
                fill="none"
                stroke="#C2445B"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes floatY {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
        `}} />
      </section>

      {/* FAQ Content */}
      <section className="px-5 pb-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl">
          {Object.keys(groupedFaqs).length === 0 ? (
            <div className="text-center">
              <p className="text-lg text-[#4A3F36]" style={{ fontWeight: 500 }}>
                No FAQs found matching your search.
              </p>
            </div>
          ) : (
            Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
              <div key={category} className="mb-12">
                <h2
                  className="mb-6 text-2xl sm:text-3xl"
                  style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, letterSpacing: '-0.01em', color: '#C2445B' }}
                >
                  {category}
                </h2>
                <div className="space-y-4">
                  {categoryFaqs.map((faq) => {
                    const isOpen = openIds.includes(faq.id);

                    return (
                      <div
                        key={faq.id}
                        className="border-2 border-[#E0D5C7] bg-white"
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="flex w-full items-center justify-between bg-white px-6 py-5 text-left hover:bg-[#FBF3EF]"
                          style={{ transition: 'background 0.2s ease' }}
                        >
                          <span
                            className="pr-4 text-lg"
                            style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, color: '#2B2420' }}
                          >
                            {faq.question}
                          </span>
                          <svg
                            className={`h-6 w-6 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="#C2445B"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="border-t-2 border-[#E0D5C7] px-6 py-5">
                            <div
                              className="text-base leading-relaxed text-[#4A3F36] whitespace-pre-line"
                              style={{ fontWeight: 500 }}
                            >
                              {faq.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-[#DEE1F4] px-5 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <h3
            className="mb-4 text-xl"
            style={{ fontFamily: 'var(--font-baloo)', fontWeight: 700, color: '#2B2420' }}
          >
            Disclaimer
          </h3>
          <p className="mb-4 text-base leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
            Online services are not suitable for crises or for emergencies. I would request you to visit the nearest Mental Health center or call on these helplines:
          </p>
          <div className="space-y-3 text-sm leading-relaxed text-[#4A3F36]" style={{ fontWeight: 500 }}>
            <div>
              <strong style={{ fontWeight: 700 }}>MannTalks</strong> - +918686139139. They are open from 9 am to 6 pm.
            </div>
            <div>
              <strong style={{ fontWeight: 700 }}>Vandrevala Foundation</strong> - 9999666555 (Calling). WhatsApp - +1(256)6662142. They are open 24x7 and all days of the week.
            </div>
            <div>
              <strong style={{ fontWeight: 700 }}>Sangath</strong> - 011-41198666. They are available from 10:00 am to 6:00 pm.
            </div>
            <div>
              <strong style={{ fontWeight: 700 }}>Connecting Trust</strong> - +919922001122, +919922004305. They are open from 12:00 pm till 8:00 pm and all days of the week.
            </div>
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
