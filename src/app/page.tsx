"use client";

import React, { useState } from "react";
import Link from "next/link";

const companies = [
  { name: "Company One", description: "Placeholder description for a past client project." },
  { name: "Company Two", description: "Placeholder description for a past client project." },
  { name: "Company Three", description: "Placeholder description for a past client project." },
  { name: "Company Four", description: "Placeholder description for a past client project." },
  { name: "Company Five", description: "Placeholder description for a past client project." },
  { name: "Company Six", description: "Placeholder description for a past client project." },
];

const services = [
  {
    title: "Service One",
    description:
      "Placeholder description for a service you offer as a full stack developer.",
  },
  {
    title: "Service Two",
    description:
      "Placeholder description for another core service or engagement model.",
  },
  {
    title: "Service Three",
    description: "Placeholder description for a third service offering.",
  },
];

const testimonials = [
  {
    name: "Client Name",
    role: "Role, Company",
    quote:
      "This is a placeholder testimonial. Replace this with real feedback from your clients later.",
  },
  {
    name: "Client Name",
    role: "Role, Company",
    quote:
      "Another placeholder testimonial. Use this space to highlight outcomes and collaboration.",
  },
];

const faqs = [
  {
    question: "Placeholder Question One",
    answer: "Placeholder answer. Replace with your own FAQ content later.",
  },
  {
    question: "Placeholder Question Two",
    answer: "Placeholder answer. Replace with your own FAQ content later.",
  },
  {
    question: "Placeholder Question Three",
    answer: "Placeholder answer. Replace with your own FAQ content later.",
  },
  {
    question: "Placeholder Question Four",
    answer: "Placeholder answer. Replace with your own FAQ content later.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-2">
      {faqs.map((item, index) => (
        <div
          key={item.question}
          className="border border-slate-200 rounded-md overflow-hidden bg-white/50"
        >
          <button
            type="button"
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-slate-50"
          >
            <span className="font-medium text-slate-900">{item.question}</span>
            <span className="text-slate-500 text-sm">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-sm text-slate-600">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-slate-800 flex items-center justify-center">
              <span className="text-xs font-semibold tracking-tight">F20</span>
            </div>
            <span className="text-sm font-semibold tracking-tight">Umang Patel</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-slate-50 transition-colors">
              Services
            </a>
            <a href="#testimonials" className="hover:text-slate-50 transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="hover:text-slate-50 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-slate-50 transition-colors">
              Contact
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-sky-500 px-4 py-1.5 text-sm font-medium text-slate-950 hover:bg-sky-400 transition-colors"
            >
              Book a Call
            </a>
          </nav>

          <div className="md:hidden">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-sky-500 px-3 py-1 text-xs font-medium text-slate-950 hover:bg-sky-400 transition-colors"
            >
              Book a Call
            </a>
          </div>
        </header>

        {/* Hero */}
        <main className="pb-16">
          <section className="py-12 md:py-16 border-b border-slate-800">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 mb-3">
                  Full Stack Developer
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
                  Building clean, performant web experiences for modern products.
                </h1>
                <p className="text-sm sm:text-base text-slate-300 mb-6 max-w-xl">
                  Placeholder tagline. Use this space to describe who you are, the kind of work you
                  do, and the type of clients or teams you help. You can update this copy anytime.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 transition-colors"
                  >
                    Book a Call
                  </a>
                  <Link
                    href="https://github.com/Fly-20"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-50 hover:border-slate-500 hover:bg-slate-900/60 transition-colors"
                  >
                    View GitHub
                  </Link>
                </div>
              </div>

              <div className="hidden md:flex justify-end">
                <div className="relative w-full max-w-xs rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5">
                  <div className="text-xs font-medium text-slate-300 mb-3">Tech stack snapshot</div>
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full bg-slate-900 px-3 py-1 border border-slate-800 text-slate-200">
                      Next.js
                    </span>
                    <span className="rounded-full bg-slate-900 px-3 py-1 border border-slate-800 text-slate-200">
                      TypeScript
                    </span>
                    <span className="rounded-full bg-slate-900 px-3 py-1 border border-slate-800 text-slate-200">
                      React
                    </span>
                    <span className="rounded-full bg-slate-900 px-3 py-1 border border-slate-800 text-slate-200">
                      Node.js
                    </span>
                    <span className="rounded-full bg-slate-900 px-3 py-1 border border-slate-800 text-slate-200">
                      Tailwind CSS
                    </span>
                    <span className="rounded-full bg-slate-900 px-3 py-1 border border-slate-800 text-slate-200">
                      PostgreSQL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Logos / Companies */}
          <section id="logos" className="py-12 md:py-16 border-b border-slate-800">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-lg font-semibold text-slate-50">Companies I&apos;ve worked with</h2>
              <p className="text-xs text-slate-400">
                Placeholder logos and descriptions. Replace with real client names later.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 flex flex-col gap-3"
                >
                  <div className="h-10 w-24 rounded bg-slate-800/80" />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50 mb-1">{company.name}</h3>
                    <p className="text-xs text-slate-400">{company.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section id="services" className="py-12 md:py-16 border-b border-slate-800">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-lg font-semibold text-slate-50">Services</h2>
              <p className="text-xs text-slate-400">
                High-level overview of how you can help teams and clients.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col rounded-xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="text-sm font-semibold text-slate-50 mb-2">{service.title}</h3>
                  <p className="text-xs text-slate-400 mb-4">{service.description}</p>
                  <span className="mt-auto text-[11px] text-slate-500">
                    Placeholder – update with specific outcomes, timelines, or tooling later.
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="py-12 md:py-16 border-b border-slate-800">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-lg font-semibold text-slate-50">Testimonials</h2>
              <p className="text-xs text-slate-400">
                Replace these placeholders with real client quotes when you&apos;re ready.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 flex flex-col gap-3"
                >
                  <p className="text-sm text-slate-200">“{testimonial.quote}”</p>
                  <div className="text-xs text-slate-400">
                    <div className="font-medium text-slate-200">{testimonial.name}</div>
                    <div>{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-12 md:py-16 border-b border-slate-800">
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-50">FAQ</h2>
              <p className="text-xs text-slate-400 max-w-xs text-right">
                Placeholder questions and answers. You can fully customize this content later.
              </p>
            </div>
            <FAQAccordion />
          </section>

          {/* Contact / Calendly */}
          <section id="contact" className="py-12 md:py-16">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
              <div>
                <h2 className="text-lg font-semibold text-slate-50 mb-3">Contact</h2>
                <p className="text-sm text-slate-300 mb-4 max-w-md">
                  When you&apos;re ready, this is where people can book a call directly into your
                  calendar. You can also surface your preferred contact methods here.
                </p>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>
                    Email: <span className="text-slate-100">your.email@example.com</span>
                  </p>
                  <p>
                    LinkedIn:{" "}
                    <Link
                      href="https://www.linkedin.com/in/umang-fly20/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-400 hover:text-sky-300"
                    >
                      /umang-fly20
                    </Link>
                  </p>
                  <p>
                    GitHub:{" "}
                    <Link
                      href="https://github.com/Fly-20"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-400 hover:text-sky-300"
                    >
                      Fly-20
                    </Link>
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
                <h3 className="text-sm font-semibold text-slate-50 mb-2">Book a Call</h3>
                <p className="text-xs text-slate-400 mb-4">
                  This card is reserved for your Calendly embed. You can paste your embed code here
                  later. For now, this button can link out to your Calendly page.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-sky-400 transition-colors"
                >
                  Open Calendly
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-800 py-6 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© 2026 Umang Patel</div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Fly-20"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/umang-fly20/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
