export default function ReactDashboardsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          React Dashboards & Internal Tools
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mb-6">
          I create custom internal tools and dashboards in React and TypeScript
          so your team can manage orders, data, and workflows without fighting
          spreadsheets or clunky admin panels.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 mb-10">
          <li>React/TypeScript dashboards for orders, inventory, and reporting</li>
          <li>CSV import/export workflows for bulk data management</li>
          <li>Role-based access and permissions for internal teams</li>
          <li>Integration with existing backends and APIs</li>
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
