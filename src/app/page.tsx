"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GeorgeLishmanImg from "../George_Lishman.webp";
import CharlieHartleyImg from "../Charlie_Hartley.webp";
import AndrewBilezikianImg from "../Andrew_Bilezikian.png";
import SoccerSupplementsLogo from "../SoccerSupplements.webp";
import OTRLogo from "../OTR_logo.png";
import NayaLogo from "../naya.png";
import IcecartelLogo from "../Icecartel.png";
import DrinklyteLogo from "../Drinklyte.png";
import DeepwatersProjectLogo from "../Deepwatersproject.png";
import UIDashboardCustom from "../ui-dashboard.png";
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
    name: "Charlie Hartley",
    role: "Founder",
    company: "Studio Hartley",
    quote:
      "We brought Fly20 in to untangle a mess of automations and dashboards. Within weeks, order routing, refunds, and reporting were running off a single, reliable backend instead of spreadsheets and manual fixes.",
    image: CharlieHartleyImg,
  },
  {
    name: "George Lishman",
    role: "Ecommerce Director",
    company: "Soccer Supplement",
    quote:
      "Umang rebuilt our integrations between Shopify, our fulfilment partner, and subscriptions. Failed webhooks dropped to near zero and the team finally trusts the data in our internal tools.",
    image: GeorgeLishmanImg,
  },
  {
    name: "Andrew Bilezikian",
    role: "Owner",
    company: "OTR Retail",
    quote:
      "We needed more than a new storefront – we needed our inventory, orders, and customer data to stay in sync across systems. Fly20 delivered a backend that scales with us without adding headcount to ops.",
    image: AndrewBilezikianImg,
  },
];

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "Most projects involve ecommerce brands, SaaS companies, and growing businesses that need scalable platforms, operational tooling, backend systems, or custom integrations.",
  },
  {
    question: "What kind of projects are the best fit?",
    answer:
      "Projects involving custom ecommerce platforms, React applications, admin dashboards, backend infrastructure, API integrations, and automation workflows are typically the best fit.",
  },
  {
    question: "Do you only work with Shopify?",
    answer:
      "No. Shopify is a major part of my experience, but I also build full-stack platforms, internal tools, backend systems, dashboards, and custom integrations outside of Shopify.",
  },
  {
    question: "Can you work with existing platforms and codebases?",
    answer:
      "Yes. Many projects involve improving existing systems, stabilizing unreliable integrations, optimizing backend architecture, and extending platforms that are already in production.",
  },
  {
    question: "Do you handle both frontend and backend development?",
    answer:
      "Yes — projects are handled end-to-end, including frontend applications, backend systems, APIs, databases, integrations, and deployment infrastructure.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "React, TypeScript, Node.js, PostgreSQL, Shopify, APIs, automation systems, webhooks, and modern deployment platforms such as Vercel.",
  },
  {
    question: "Do you build custom internal tools and dashboards?",
    answer:
      "Yes. Internal dashboards, operational tooling, reporting systems, and admin platforms are a major part of the work, especially for businesses scaling beyond manual processes.",
  },
  {
    question: "Can you help automate business operations?",
    answer:
      "Yes. Automation systems can reduce repetitive manual work, synchronize data across platforms, and improve operational efficiency across ecommerce and backend systems.",
  },
  {
    question: "Do you offer ongoing support and long-term partnerships?",
    answer:
      "Yes. Many clients continue with ongoing development, platform improvements, technical support, and scaling work after the initial project launch.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "Projects usually begin with a technical discovery phase to understand the platform, operational challenges, integrations, and long-term business goals before implementation starts.",
  },
  {
    question: "What project budgets are typically a good fit?",
    answer:
      "The best fit is usually businesses investing in scalable systems, custom development, and long-term technical growth rather than quick one-off tasks.",
  },
  {
    question: "How do you approach scalability and reliability?",
    answer:
      "The focus is always on building maintainable systems with reliable architecture, clean integrations, performance optimization, and long-term scalability in mind.",
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
  const [contactStatus, setContactStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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

    const name = (formData.get("name") as string | null) || "";
    const email = (formData.get("email") as string | null) || "";
    const company = (formData.get("company") as string | null) || "";
    const projectType = (formData.get("projectType") as string | null) || "";
    const budget = (formData.get("budget") as string | null) || "";
    const currentPlatform =
      (formData.get("currentPlatform") as string | null) || "";
    const challenge = (formData.get("challenge") as string | null) || "";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          projectType,
          budget,
          currentPlatform,
          challenge,
        }),
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

  return (
    <>
      <main className="pb-20">
          <section className="py-16 border-b border-slate-200">
            <div className="grid gap-10 md:grid-cols-2 items-start">
              {/* Left column – intro */}
              <div>
                <p className="text-xm font-bold uppercase tracking-[0.2em] text-[#334FB4]">
                  Full-Stack Engineer
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 my-12">
                  Full-Stack Engineering for eCommerce & SaaS Platforms
                </h1>
                <p className="text-sm sm:text-base text-slate-600 my-4 max-w-xl font-medium">
                  Helping ecommerce brands and growing businesses build custom platforms, backend systems, API integrations, and automation workflows.
                </p>
                <div className="flex items-center gap-3 text-slate-600 my-8">
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
                    href="https://calendly.com/fly20/discussion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#334FB4] px-10 py-3 text-sm sm:text-base font-medium text-white hover:bg-[#283b86] transition-colors min-w-[240px] w-full sm:w-auto"
                  >
                    Book Discovery Call
                  </a>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-10 py-3 text-sm sm:text-base font-medium text-slate-800 hover:bg-slate-100 transition-colors min-w-[240px] w-full sm:w-auto"
                  >
                    View Case Studies
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-5 text-slate-700">
                  <div className="flex flex-col items-center text-[10px] sm:text-xs gap-1.5">
                    <SiReact className="h-7 w-7 sm:h-8 sm:w-8 text-sky-500" />
                    <span>React</span>
                  </div>
                  <div className="flex flex-col items-center text-[10px] sm:text-xs gap-1.5">
                    <SiTypescript className="h-7 w-7 sm:h-8 sm:w-8 text-sky-700" />
                    <span>TypeScript</span>
                  </div>
                  <div className="flex flex-col items-center text-[10px] sm:text-xs gap-1.5">
                    <SiNodedotjs className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-600" />
                    <span>Node.js</span>
                  </div>
                  <div className="flex flex-col items-center text-[10px] sm:text-xs gap-1.5">
                    <SiPostgresql className="h-7 w-7 sm:h-8 sm:w-8 text-sky-800" />
                    <span>PostgreSQL</span>
                  </div>
                  <div className="flex flex-col items-center text-[10px] sm:text-xs gap-1.5">
                    <SiShopify className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-500" />
                    <span>Shopify</span>
                  </div>
                </div>
              </div>

              {/* Right column – dashboard preview */}
              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-xl rounded-2xl bg-slate-50 overflow-hidden">
                   <Image
                    src={UIDashboardCustom}
                    alt="Custom dashboard UI example"
                    className="w-full h-auto object-contain"
                    priority
                  />
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
                      <h3 className="text-base font-semibold text-slate-900 mb-1">{company.name}</h3>
                      <p className="text-base text-slate-600">{company.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Capabilities / What I Build */}
          <section
            id="services"
            className="py-12 md:py-16 border-b -mx-4 sm:-mx-6 lg:-mx-8 text-slate-900"
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-10">
              <div className="text-center mb-4 max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Engineering Solutions</h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Technical systems for ecommerce, operations, and scalable platforms.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Custom Ecommerce Platforms */}
                <div className="group rounded-2xl border border-slate-200 bg-white/80 px-6 py-7 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 inline-flex items-center rounded-full border border-slate-200/80 bg-[#334FB4] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white">
                        Ecommerce Platforms
                      </div>
                      <h3 className="text-base font-semibold text-slate-900 mb-1">
                        Custom Ecommerce Platforms
                      </h3>
                      <p className="text-base sm:text-[13px] text-slate-600">
                        High-performance Shopify experiences, custom storefronts, and scalable ecommerce infrastructure built for growing brands.
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Built for growth
                    </span>
                    <span className="hidden sm:inline text-slate-300">|</span>
                    <span className="hidden sm:inline">Performance-focused, scalable foundations</span>
                  </div>
                </div>

                {/* Admin Dashboards & Internal Tools */}
                <div className="group rounded-2xl border border-slate-200 bg-white/80 px-6 py-7 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 inline-flex items-center rounded-full border border-slate-200/80 bg-[#334FB4] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white">
                        Internal Tools
                      </div>
                      <h3 className="text-base font-semibold text-slate-900 mb-1">
                        Admin Dashboards & Internal Tools
                      </h3>
                      <p className="text-base sm:text-[13px] text-slate-600">
                        Custom dashboards and operational platforms that simplify workflows, centralize data, and improve team efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Less manual admin
                    </span>
                    <span className="hidden sm:inline text-slate-300">|</span>
                    <span className="hidden sm:inline">Clear views of orders, data, and operations</span>
                  </div>
                </div>

                {/* Backend Systems & Integrations */}
                <div className="group rounded-2xl border border-slate-200 bg-white/80 px-6 py-7 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 inline-flex items-center rounded-full border border-slate-200/80 bg-[#334FB4] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white">
                        Systems & APIs
                      </div>
                      <h3 className="text-base font-semibold text-slate-900 mb-1">
                        Backend Systems & Integrations
                      </h3>
                      <p className="text-base sm:text-[13px] text-slate-600">
                        Scalable backend architecture connecting ecommerce platforms, CRMs, ERPs, payment systems, and third-party services.
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Systems in sync
                    </span>
                    <span className="hidden sm:inline text-slate-300">|</span>
                    <span className="hidden sm:inline">Reliable data flow between core tools</span>
                  </div>
                </div>

                {/* Automation & Operational Workflows */}
                <div className="group rounded-2xl border border-slate-200 bg-white/80 px-6 py-7 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 inline-flex items-center rounded-full border border-slate-200/80 bg-[#334FB4] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white">
                        Automation
                      </div>
                      <h3 className="text-base font-semibold text-slate-900 mb-1">
                        Automation & Operational Workflows
                      </h3>
                      <p className="text-base sm:text-[13px] text-slate-600">
                        Automation systems that reduce manual work, synchronize data, and streamline operational processes across platforms.
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Less repetition
                    </span>
                    <span className="hidden sm:inline text-slate-300">|</span>
                    <span className="hidden sm:inline">More predictable, automated operations</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="py-16 md:py-24 border-b border-slate-200 bg-slate-50/60">
            <div className="max-w-6xl mx-auto">
              <div className="mb-10 text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Client Results</h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
                  Trusted by ecommerce brands and growing businesses building scalable platforms
                  and operational systems.
                </p>
              </div>

              <div className="mb-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 sm:p-8 shadow-[0_18px_55px_rgba(15,23,42,0.12)] hover:shadow-[0_22px_65px_rgba(15,23,42,0.16)] transition-shadow">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  <div className="flex-1 space-y-4">
                    <div className="inline-flex items-center gap-3 rounded-full bg-[#334FB4] text-white px-4 py-1.5 text-[11px] font-medium tracking-[0.16em] uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Featured Client
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center overflow-hidden">
                        <Image
                          src={NayaLogo}
                          alt="Naya logo"
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600">
                        <div className="font-semibold text-slate-900 text-sm sm:text-base">
                          George – Head of Marketing & Business Development
                        </div>
                        <div>Shopify subscriptions, automations & analytics</div>
                      </div>
                    </div>
                    <p className="text-base text-slate-800 leading-relaxed">
                      “We worked with Fly20 to launch a custom ecommerce experience for our coffee
                      brand. The build ties product bundles, subscriptions, and inventory into a
                      single backend so customers can discover roasts easily while our team manages
                      orders, fulfilment, and analytics from one place.”
                    </p>
                    <div className="flex flex-wrap gap-3 text-[11px] sm:text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/70 border border-slate-200 px-3 py-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Subscription reliability
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/70 border border-slate-200 px-3 py-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Automation & reporting
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/70 border border-slate-200 px-3 py-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Ecommerce infrastructure
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900/80 shadow-[0_16px_45px_rgba(15,23,42,0.45)]">
                      {!isVideoPlaying && (
                        <button
                          type="button"
                          onClick={() => setIsVideoPlaying(true)}
                          className="group relative w-full h-full flex items-center justify-center"
                          aria-label="Play client video testimonial for Umang Patel"
                        >
                          <img
                            src="https://img.youtube.com/vi/kANyXgz-I7k/hqdefault.jpg"
                            alt="Client video testimonial for Umang Patel"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/55 transition-colors" />
                          <div className="relative flex items-center justify-center">
                            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/95 group-hover:bg-white shadow-xl flex items-center justify-center transition-colors">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-7 w-7 sm:h-8 sm:w-8 text-black ml-0.5"
                                aria-hidden="true"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9.5 7.5v9l7-4.5-7-4.5Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </button>
                      )}

                      {isVideoPlaying && (
                        <iframe
                          src="https://www.youtube.com/embed/kANyXgz-I7k?autoplay=1&rel=0&modestbranding=1&controls=1"
                          title="Client video testimonial for Umang Patel"
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.name}-${index}`}
                    className="group rounded-2xl border border-slate-200 bg-white/90 p-5 sm:p-6 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={36}
                          height={36}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-600">
                        <div className="font-medium text-slate-900 text-sm">
                          {testimonial.name}
                        </div>
                        <div>
                          {testimonial.role} · {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <p className="text-base text-slate-700 leading-relaxed">
                      “{testimonial.quote}”
                    </p>
                  </div>
                ))}
              </div>
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

          {/* Contact / Start a Project */}
          <section id="contact" className="py-12 md:py-16 bg-[#334FB4] text-white rounded-2xl">
            <div className="flex flex-col items-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-center text-white">
                Start a Project
              </h2>
              <p className="text-base text-slate-100/90 max-w-xl text-center">
                Building a scalable ecommerce platform, backend system, or operational tool? Share a few details about your project and current challenges.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-xl rounded-3xl bg-slate-50 backdrop-blur-sm border border-slate-200/80 shadow-[0_18px_40px_rgba(15,23,42,0.08)] px-4 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7">
                <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-500" />
                <div className="space-y-6 pt-3 sm:pt-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1.5">
                      Project inquiry
                    </p>
                    <p className="text-sm text-slate-600">
                      A short form focused on scope, budget, and technical context, so we can have a high-signal first conversation.
                    </p>
                  </div>

                  <form className="space-y-4" onSubmit={handleContactSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="block text-xs font-medium text-slate-700"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80 focus:shadow-[0_0_0_1px_rgba(56,189,248,0.5)] transition"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-slate-700"
                        >
                          Work email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80 focus:shadow-[0_0_0_1px_rgba(56,189,248,0.5)] transition"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="company"
                        className="block text-xs font-medium text-slate-700"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Company name"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80 focus:shadow-[0_0_0_1px_rgba(56,189,248,0.5)] transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="projectType"
                          className="block text-xs font-medium text-slate-700"
                        >
                          Project type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80 focus:shadow-[0_0_0_1px_rgba(56,189,248,0.5)] transition"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select a project type
                          </option>
                          <option value="Ecommerce Platform">Ecommerce Platform</option>
                          <option value="Internal Dashboard">Internal Dashboard</option>
                          <option value="API Integration">API Integration</option>
                          <option value="Backend System">Backend System</option>
                          <option value="Automation Workflow">Automation Workflow</option>
                          <option value="Technical Audit">Technical Audit</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="budget"
                          className="block text-xs font-medium text-slate-700"
                        >
                          Budget range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80 focus:shadow-[0_0_0_1px_rgba(56,189,248,0.5)] transition"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select a budget range
                          </option>
                          <option value="£5k–£10k">£5k–£10k</option>
                          <option value="£10k–£25k">£10k–£25k</option>
                          <option value="£25k+">£25k+</option>
                          <option value="Ongoing Retainer">Ongoing Retainer</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="currentPlatform"
                        className="block text-xs font-medium text-slate-700"
                      >
                        Current platform / stack
                      </label>
                      <input
                        id="currentPlatform"
                        name="currentPlatform"
                        type="text"
                        placeholder="Shopify, custom stack, SaaS platform, etc."
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80 focus:shadow-[0_0_0_1px_rgba(56,189,248,0.5)] transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="challenge"
                        className="block text-xs font-medium text-slate-700"
                      >
                        Biggest challenge
                      </label>
                      <textarea
                        id="challenge"
                        name="challenge"
                        rows={4}
                        placeholder="What technical or operational challenges are you trying to solve?"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/80 focus:shadow-[0_0_0_1px_rgba(56,189,248,0.5)] transition resize-none"
                      />
                    </div>

                    <div className="space-y-2 pt-1">
                      <button
                        type="submit"
                        className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[#334FB4] px-8 py-3 text-sm sm:text-base font-medium text-white hover:bg-[#283b86] transition-colors min-w-[200px] disabled:opacity-70 disabled:cursor-not-allowed"
                        disabled={contactStatus === "submitting"}
                      >
                        {contactStatus === "submitting" ? "Submitting..." : "Start Project Discussion"}
                      </button>

                      {contactStatus === "success" && (
                        <p className="text-[11px] text-emerald-700 mt-1">
                          Thanks for sharing the details – I&apos;ll review your project and follow up with next steps.
                        </p>
                      )}
                      {contactStatus === "error" && (
                        <p className="text-[11px] text-red-600 mt-1">
                          Something went wrong. Please try again or email
                          {" "}
                          <a href="mailto:hello@fly20.co" className="underline">
                            hello@fly20.co
                          </a>
                          .
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
