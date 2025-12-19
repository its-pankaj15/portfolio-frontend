export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="flex-1 space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">
            Full-Stack Developer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Building performant backends and polished UIs.
          </h1>
          <p className="text-slate-300 max-w-xl">
            Backend-focused developer working with Node.js, Express, MongoDB, and modern
            frontend tooling. This portfolio is powered by a custom CMS built from scratch.
          </p>
          <div className="flex gap-3">
            <a
              href="/projects"
              className="px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-medium"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-4 py-2 rounded-md border border-slate-700 hover:border-emerald-400 text-sm"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="h-40 w-40 md:h-48 md:w-48 rounded-full bg-gradient-to-br from-emerald-500/40 to-sky-500/40 border border-slate-700" />
        </div>
      </section>

      {/* Highlighted sections */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <h2 className="text-sm font-semibold mb-2">Backend</h2>
          <p className="text-xs text-slate-300">
            Node.js, Express, MongoDB, REST APIs, authentication, and custom CMS backends.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <h2 className="text-sm font-semibold mb-2">Frontend</h2>
          <p className="text-xs text-slate-300">
            React, Next.js, Tailwind CSS, and modern responsive UI patterns.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <h2 className="text-sm font-semibold mb-2">Dev Experience</h2>
          <p className="text-xs text-slate-300">
            Clean APIs, clear architecture, and DX-focused tooling for smooth development.
          </p>
        </div>
      </section>
    </div>
  );
}
