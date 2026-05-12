import Link from "next/link";

const caseStudies = [
  {
    slug: "shopify-performance-conversions",
    title: "Custom Shopify Theme for Faster Performance & Higher Conversions",
    problem:
      "The client's existing Shopify store struggled with slow load times and low conversion rates.",
    outcome: "25% increase in conversion rate and 30% faster page loads.",
  },
  {
    slug: "react-order-dashboard",
    title: "React Dashboard to Streamline Order Management",
    problem:
      "The client's team was managing orders through spreadsheets and manual exports.",
    outcome: "Reduced admin time by 50% for order-related tasks.",
  },
  {
    slug: "api-automation-data-sync",
    title: "Node.js Automation to Eliminate Manual Data Entry",
    problem:
      "The client was manually moving data between ecommerce, finance, and reporting systems.",
    outcome:
      "80% reduction in manual work related to data entry and reconciliation.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
            Case Studies
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            These projects show how I combine Shopify, React/TypeScript, and Node.js
            automation to help scaling brands improve performance, reduce manual
            work, and unlock new capabilities.
          </p>
        </header>

        <section className="grid gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="block rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <h2 className="text-lg font-semibold text-slate-900 mb-1">
                {cs.title}
              </h2>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-2">
                Problem → Outcome
              </p>
              <p className="text-sm text-slate-700 mb-1">
                <span className="font-semibold">Problem:</span> {cs.problem}
              </p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">Outcome:</span> {cs.outcome}
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
