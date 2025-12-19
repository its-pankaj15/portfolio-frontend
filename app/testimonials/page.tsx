import { getTestimonials } from "@/lib/api";

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  const sorted = testimonials.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Testimonials</h1>
        <p className="text-sm text-slate-400">
          What clients and collaborators say about working together.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {sorted.map((t) => (
          <div
            key={t._id}
            className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              {t.avatarUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover border border-slate-700"
                />
              )}
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-[11px] text-slate-400">
                  {[t.role, t.company].filter(Boolean).join(" · ")}
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-200 italic">“{t.content}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}
