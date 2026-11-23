export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-10 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Task Market
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Micro-Task Marketplace
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Post quick micro-tasks, complete verified work, and track payouts seamlessly.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700">
            Marketplace Live
          </span>
        </div>
      </header>

      <section className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Quick Tasks</h2>
          <p className="mt-2 text-sm text-slate-600">
            Browse bite-sized digital tasks with clear instructions and instant status tracking.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Transparent Rewards</h2>
          <p className="mt-2 text-sm text-slate-600">
            Know task rewards upfront before you start and review submissions cleanly.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">PostgreSQL & Prisma</h2>
          <p className="mt-2 text-sm text-slate-600">
            Backed by structured relational models ready for real-time marketplace workflows.
          </p>
        </div>
      </section>
    </main>
  );
}
