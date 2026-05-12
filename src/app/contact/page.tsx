"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

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
      setStatus("success");
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3 text-slate-900">
            Start a Project
          </h1>
          <p className="text-base sm:text-base text-slate-600 max-w-2xl">
            Building a scalable ecommerce platform, backend system, or operational tool? Share a few details about your project and current challenges.
          </p>
        </div>

        <section className="flex justify-center">
          <div
            id="project-inquiry"
            className="relative w-full max-w-xl rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-[0_18px_40px_rgba(15,23,42,0.08)] px-4 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7"
          >
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

              <form className="space-y-4" onSubmit={handleSubmit}>
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
                    disabled={status === "submitting"}
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[#334FB4] px-7 py-3 text-sm sm:text-[0.95rem] font-medium text-white shadow-lg shadow-sky-500/30 hover:bg-[#283b86] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 focus-visible:ring-offset-white disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                  >
                    {status === "submitting" ? "Submitting..." : "Start Project Discussion"}
                  </button>

                  {status === "success" && (
                    <p className="text-[11px] text-emerald-700 mt-1">
                      Thanks for sharing the details – I&apos;ll review your project and follow up with next steps.
                    </p>
                  )}
                  {status === "error" && (
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
        </section>
      </div>
    </main>
  );
}
