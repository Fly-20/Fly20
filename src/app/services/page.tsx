"use client";

import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
            Services for Scaling Ecommerce & Platforms
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            I help scaling ecommerce brands, SaaS platforms, and internal teams with
            custom Shopify builds, React/TypeScript dashboards, backend systems,
            and automation workflows.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 mb-12">
          <ServiceCard
            title="Shopify custom development for scaling brands"
            description="Custom themes, performance-focused storefronts, and API integrations built for serious ecommerce growth."
            href="/services/shopify-development"
          />
          <ServiceCard
            title="React + TypeScript dashboards and portals"
            description="Internal tools and dashboards that make managing orders, data, and workflows fast and reliable."
            href="/services/react-dashboards"
          />
          <ServiceCard
            title="API integrations and backend systems"
            description="Node.js backends and integrations to connect Shopify, CRMs, ERPs, and other core tools."
            href="/services/api-integrations"
          />
          <ServiceCard
            title="Automation workflows to streamline operations"
            description="Automation systems to eliminate manual data entry and keep your stack in sync."
            href="/services/automation-systems"
          />
        </section>

        <section className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-1">
              Not sure which service you need?
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Book a technical discovery call and we’ll map your current stack,
              bottlenecks, and the most impactful way to work together.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://calendly.com/fly20/discussion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#334FB4] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#283b86] transition-colors"
            >
              Book a Technical Discovery Call
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function ServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <h2 className="text-base sm:text-lg font-semibold mb-2 text-slate-900">
        {title}
      </h2>
      <p className="text-sm text-slate-600 mb-4">{description}</p>
      <span className="text-sm font-medium text-[#334FB4]">Learn more →</span>
    </Link>
  );
}
