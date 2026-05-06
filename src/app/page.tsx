"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Fly20Logo from "../fly-20_logo.png";
import GeorgeLishmanImg from "../George_Lishman.webp";
import CharlieHartleyImg from "../Charlie_Hartley.webp";
import AndrewBilezikianImg from "../Andrew_Bilezikian.png";
import SoccerSupplementsLogo from "../SoccerSupplements.webp";
import OTRLogo from "../OTR_logo.png";
import NayaLogo from "../naya.png";
import IcecartelLogo from "../Icecartel.png";
import DrinklyteLogo from "../Drinklyte.png";
import DeepwatersProjectLogo from "../Deepwatersproject.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiUpwork,
  SiFiverr,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiShopify,
} from "react-icons/si";

const companies = [
  {
    name: "Soccer Supplement",
    description: "E-commerce store offering performance supplements tailored for footballers.",
    logo: SoccerSupplementsLogo,
    url: "https://www.soccersupplement.com/",
  },
  {
    name: "OTR",
    description: "Online retailer specialising in toll kits and vehicle accessories.",
    logo: OTRLogo,
    url: "https://officialtoolroll.com/",
  },
  {
    name: "Naya",
    description: "Modern coffee brand with a clean and engaging online presence.",
    logo: NayaLogo,
    url: "https://www.nayapremiumcoffee.com/",
  },
  {
    name: "Icecartel",
    description: "E-commerce brand focused on men's moissanite jewellery.",
    logo: IcecartelLogo,
    url: "https://icecartel.com/",
  },
  {
    name: "Drinklyte",
    description: "Hydration brand designed to support recovery after nights out.",
    logo: DrinklyteLogo,
    url: "https://drinklyte.co/",
  },
  {
    name: "Deepwaters Project",
    description: "Mission-driven platform focused on sharing biblical content and resources.",
    logo: DeepwatersProjectLogo,
    url: "https://deepwatersproject.com/",
  },
];

const services = [
  {
    title: "Full-Stack Web Application Development",
    description:
      "Designing and building scalable SaaS platforms, dashboards, and internal tools using modern technologies like React and Node.js.",
  },
  {
    title: "API Integration & Backend Development",
    description:
      "Developing and integrating reliable APIs, managing webhooks, and connecting systems to work seamlessly together.",
  },
  {
    title: "Payment Integration Systems",
    description:
      "Implementing secure and reliable payment solutions tailored to your business needs.",
  },
  {
    title: "Automation & Workflow Systems",
    description:
      "Building automation systems, including scheduled jobs, queues, and bulk processing, to streamline and scale business operations.",
  },
];

const testimonials = [
  {
    name: "Charlie H",
    role: "Design Agency Owner",
    quote:
      "I had the pleasure of partnering with Fly20 Agency for my e-commerce stores, and I couldn't be more impressed. From the initial consultation to the final delivery, their team demonstrated professionalism, creativity, and technical expertise. The ongoing support they provide is outstanding. I highly recommend Fly20 to anyone looking to elevate their online business.",
    image: CharlieHartleyImg,
  },
  {
    name: "George L",
    role: "E-commerce founder",
    quote:
      "I cannot speak highly enough about Fly20. Their team went above and beyond to understand our unique business needs and delivered an exceptional Shopify solution. The level of customisation they provided, combined with their expertise in conversion optimisation, has significantly boosted our sales. The project was completed on time and within budget, and the communication throughout the process was excellent.",
    image: GeorgeLishmanImg,
  },
  {
    name: "Andrew B",
    role: "Online retail owner",
    quote:
      "Working with Fly20 was an incredible experience. They transformed our online store into a stunning, user-friendly platform that exceeded our expectations. Their team's expertise, attention to detail, and timely communication ensured a smooth and successful project. We couldn't be happier. Highly recommend their services!",
    image: AndrewBilezikianImg,
  },
];

const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "I work on SaaS platforms, API integrations, payment systems, and automation-heavy applications where reliability matters.",
  },
  {
    question: "Do you work on small tasks?",
    answer:
      "I focus on medium to long-term projects or technically meaningful work where I can add real value.",
  },
  {
    question: "Can you fix existing systems or only build new ones?",
    answer:
      "Both. A lot of my work involves fixing unreliable APIs, payments, and backend logic, then improving and scaling them.",
  },
  {
    question: "Do you handle both frontend and backend?",
    answer:
      "Yes — I work full-stack, from backend logic and APIs to frontend integration using React.",
  },
  {
    question: "How do you handle complex systems?",
    answer:
      "I break problems down, focus on reliability, and ensure edge cases and failure scenarios are handled properly.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "React, TypeScript, Node.js, PostgreSQL, APIs, webhooks, and modern deployment tools like Vercel.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-3">
      {faqs.map((item, index) => (
        <div
          key={item.question}
          className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
        >
          <button
            type="button"
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-4 sm:px-5 py-3.5 text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-medium text-slate-900 text-sm sm:text-[15px]">
              {item.question}
            </span>
            <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-xs text-slate-500">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-4 sm:px-5 py-4 text-xs sm:text-sm text-slate-600 border-t border-slate-200">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [contactStatus, setContactStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleScrollToServices = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (typeof window === "undefined") return;
    const target = document.getElementById("services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const message = formData.get("message") as string | null;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Non-OK response from /api/contact");
      }

      form.reset();
      setContactStatus("success");
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      setContactStatus("error");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 80) {
        // Scrolling down past a small threshold – hide header
        setIsHeaderVisible(false);
      } else {
        // Scrolling up – show header
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">
      {/* Navigation */}
      <header
        className={`sticky top-0 z-20 bg-[#334FB4] backdrop-blur-sm transition-transform duration-300 border-b border-slate-200 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <Image
              src={Fly20Logo}
              alt="Fly20 logo"
              width={100}
              height={34}
              className="h-9 w-auto"
              priority
            />
            <span className="text-sm font-semibold tracking-tight text-white">Fly-20</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white">
            <a href="#services" className="hover:text-slate-100 transition-colors">
              Services
            </a>
            <a href="#testimonials" className="hover:text-slate-100 transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="hover:text-slate-100 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-slate-100 transition-colors">
              Contact
            </a>
            <a
              href="https://calendly.com/fly20/discussion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm sm:text-base font-medium text-[#334FB4] hover:bg-slate-100 transition-colors min-w-[200px]"
            >
              Book a Call
            </a>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#283b86] focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={isMobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMobileNavOpen((prev) => !prev)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileNavOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileNavOpen && (
          <div className="md:hidden border-t border-slate-200 bg-[#334FB4]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-3">
              <a
                href="#services"
                className="block text-sm text-white hover:text-slate-100"
                onClick={() => setIsMobileNavOpen(false)}
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="block text-sm text-white hover:text-slate-100"
                onClick={() => setIsMobileNavOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="block text-sm text-white hover:text-slate-100"
                onClick={() => setIsMobileNavOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="block text-sm text-white hover:text-slate-100"
                onClick={() => setIsMobileNavOpen(false)}
              >
                Contact
              </a>
              <a
                href="https://calendly.com/fly20/discussion"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-[#334FB4] hover:bg-slate-100 transition-colors"
                onClick={() => setIsMobileNavOpen(false)}
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <main className="pb-20">
          <section className="py-16 md:py-24 border-b border-slate-200">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
              {/* Left column – intro */}
              <div>
                <p className="text-xm font-bold uppercase tracking-[0.2em] text-[#334FB4] mb-3">
                  Full Stack Developer
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 my-12">
                  Building web applications, integrations & automation systems for businesses
                </h1>
                <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-xl">
                  Helping startups and teams solve problems with APIs, payments, and scalable backend logic.
                </p>
                <div className="flex items-center gap-3 text-slate-600 mb-4">
                  <span className="text-xs font-medium text-slate-500 mr-1">Find me on:</span>
                  <a
                    href="https://github.com/Fly-20"
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full border border-slate-300 flex items-center justify-center bg-white hover:bg-slate-50 hover:border-slate-400 transition-colors group"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-6 w-6 text-slate-700 group-hover:text-[#24292f] transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/umang-fly20/"
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full border border-slate-300 flex items-center justify-center bg-white hover:bg-slate-50 hover:border-slate-400 transition-colors group"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-6 w-6 text-slate-700 group-hover:text-[#0a66c2] transition-colors" />
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/~012915a3e4098e5c24"
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full border border-slate-300 flex items-center justify-center bg-white hover:bg-slate-50 hover:border-slate-400 transition-colors group"
                    aria-label="Upwork"
                  >
                    <SiUpwork className="h-6 w-6 text-slate-700 group-hover:text-[#6fda44] transition-colors" />
                  </a>
                  <a
                    href="https://www.fiverr.com/fly20web"
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full border border-slate-300 flex items-center justify-center bg-white hover:bg-slate-50 hover:border-slate-400 transition-colors group"
                    aria-label="Fiverr"
                  >
                    <SiFiverr className="h-6 w-6 text-slate-700 group-hover:text-[#1dbf73] transition-colors" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-3 mt-6 mb-3">
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full bg-[#334FB4] px-8 py-3 text-sm sm:text-base font-medium text-white hover:bg-[#283b86] transition-colors min-w-[200px] w-full sm:w-auto"
                  >
                    View Services
                  </a>
                </div>
              </div>

              {/* Right column – video testimonial */}
              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-md flex flex-col gap-3">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center">Hear From Our Clients</h3>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-3 shadow-sm w-full">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-100">
                      <iframe
                        src="https://www.youtube.com/embed/kANyXgz-I7k?modestbranding=1"
                        title="Client video testimonial for Umang Patel"
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <a href="#services" aria-label="Scroll down" onClick={handleScrollToServices}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-slate-900 animate-bounce"
                  style={{ animationDuration: "2.2s" }}
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12 16.5a1 1 0 0 1-.7-.29l-5-5a1 1 0 0 1 1.4-1.42L12 14.09l4.3-4.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-.7.29Z"
                  />
                </svg>
              </a>
            </div>
          </section>

          {/* Logos / Companies / Work */}
          <section
            id="logos"
            className="py-8 border-b border-slate-200 bg-[#334FB4] -mx-4 sm:-mx-6 lg:-mx-8 text-white rounded-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">Clients</h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {companies.map((company) => (
                  <a
                    key={company.name}
                    href={company.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative rounded-xl border border-slate-100 bg-white p-5 flex flex-col gap-4 shadow-sm transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-md hover:scale-[1.01]"
                  >
                    <div className="absolute top-3 right-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-black transition-colors"
                        aria-hidden="true"
                      >
                        <path d="M11 3a1 1 0 0 0 0 2h2.586l-4.293 4.293a1 1 0 1 0 1.414 1.414L15 6.414V9a1 1 0 1 0 2 0V4.5A1.5 1.5 0 0 0 15.5 3H11Z" />
                        <path d="M5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 0 0 0-2H5Z" />
                      </svg>
                    </div>
                    <div className="h-16 w-16 relative">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 mb-1">{company.name}</h3>
                      <p className="text-xs text-slate-600">{company.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Services + Skills */}
          <section
            id="services"
            className="py-12 md:py-16 border-b -mx-4 sm:-mx-6 lg:-mx-8 text-slate-900"
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-10">
              <div className="text-center mb-4 max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Services</h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  I build reliable backend systems, integrations, and automation workflows that continue to perform long after launch.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-2xl bg-[#334FB4] shadow-sm border border-transparent px-6 py-8 flex flex-col gap-4 transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-md hover:scale-[1.01]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-white text-lg">
                        <span>⚡</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold mb-1 text-white">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-100">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-10 border-t border-slate-200 space-y-4">
                <div className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
                 Tech Stack
                </div>
                <div className="flex flex-wrap items-center justify-center gap-7 text-slate-700">
                  <div className="flex flex-col items-center text-xs sm:text-[13px] gap-1.5">
                    <SiReact className="h-9 w-9 text-sky-500" />
                    <span>React</span>
                  </div>
                  <div className="flex flex-col items-center text-xs sm:text-[13px] gap-1.5">
                    <SiTypescript className="h-9 w-9 text-sky-700" />
                    <span>TypeScript</span>
                  </div>
                  <div className="flex flex-col items-center text-xs sm:text-[13px] gap-1.5">
                    <SiNodedotjs className="h-9 w-9 text-emerald-600" />
                    <span>Node.js</span>
                  </div>
                  <div className="flex flex-col items-center text-xs sm:text-[13px] gap-1.5">
                    <SiPostgresql className="h-9 w-9 text-sky-800" />
                    <span>PostgreSQL</span>
                  </div>
                  <div className="flex flex-col items-center text-xs sm:text-[13px] gap-1.5">
                    <SiShopify className="h-9 w-9 text-emerald-500" />
                    <span>Shopify</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="py-16 md:py-24 border-b border-slate-200">
            <div className="mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Testimonials</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4 shadow-sm h-full"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="text-xs text-slate-600">
                      <div className="font-medium text-slate-900 text-sm">{testimonial.name}</div>
                      <div>{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">“{testimonial.quote}”</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-12 md:py-16 border-b border-slate-200 bg-slate-50/80">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-7">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-slate-900">FAQ</h2>
                <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
                  A few quick answers to how I work, the type of projects I take on, and the stack I use.
                </p>
              </div>
              <FAQAccordion />
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-12 md:py-16">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-center text-slate-900">Contact</h2>
              <p className="text-sm text-slate-600 mb-4 max-w-md text-center">
                If you have questions, need help setting up automations, or want to learn more about me, reach out, we're here to help.
              </p>
              <form className="space-y-4 max-w-md w-full" onSubmit={handleContactSubmit}>
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Your name"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="you@example.com"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 resize-none"
                    placeholder="Share a bit about what you want to build or improve."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#334FB4] px-8 py-3 text-sm sm:text-base font-medium text-white hover:bg-[#283b86] transition-colors min-w-[200px] w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={contactStatus === "submitting"}
                >
                  {contactStatus === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 py-6 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            © 2026 FLY-20 LTD · Company No. 14103702 · VAT No. 501942712
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Fly-20"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-700 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/umang-fly20/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-700 transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
