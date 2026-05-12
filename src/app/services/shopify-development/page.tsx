export default function ShopifyDevelopmentPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          Shopify Development for Scaling Brands
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mb-6">
          I build custom Shopify stores, themes, and API integrations for scaling
          ecommerce brands. Whether you're migrating from a legacy platform or
          pushing Shopify to its limits, I architect fast, conversion-focused
          storefronts tailored to your business.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 mb-10">
          <li>Custom Shopify themes optimized for performance and conversions</li>
          <li>Headless or custom storefront setups when you outgrow templates</li>
          <li>API integrations with CRMs, ERPs, 3PLs, and marketing tools</li>
          <li>Performance optimization to improve speed and Core Web Vitals</li>
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
