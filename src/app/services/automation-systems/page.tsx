export default function AutomationSystemsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          Ecommerce Automation Systems
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mb-6">
          I design and build automation systems that eliminate manual data
          entry, sync information between tools, and free your team from
          repetitive operational tasks.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 mb-10">
          <li>Automated CSV imports and exports between tools</li>
          <li>API-based data sync for orders, inventory, and customers</li>
          <li>Scheduled jobs and background workers built in Node.js</li>
          <li>Monitoring and logging so automations are reliable</li>
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
