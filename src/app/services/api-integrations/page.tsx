export default function ApiIntegrationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          API Integrations & Backend Systems
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mb-6">
          I build and integrate custom APIs to connect your ecommerce stack,
          automate data flow, and reduce manual work. From third-party
          integrations to Node.js backends, I help your systems talk to each
          other reliably.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 mb-10">
          <li>Custom Node.js backend systems for ecommerce and internal tools</li>
          <li>API integrations between Shopify, CRMs, ERPs, and analytics</li>
          <li>Webhook-based workflows for real-time updates</li>
          <li>Secure, well-documented endpoints your team can build on</li>
        </ul>
        <a
          href="https://calendly.com/fly20/discussion"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#334FB4] px-8 py-3 text-sm sm:text-base font-medium text-white hover:bg-[#283b86] transition-colors"
        >
          Book a Technical Discovery Call
        </a>
      </div>
    </main>
  );
}
