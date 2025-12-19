import { getExperience } from "@/lib/api";

export default async function ExperiencePage() {
  const experience = await getExperience();

  const sorted = experience.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Experience</h1>
        <p className="text-sm text-slate-400">
          A timeline of roles, projects, and milestones.
        </p>
      </header>

      <div className="relative pl-6 border-l border-slate-800 space-y-6">
        {sorted.map((item, idx) => {
          const start = new Date(item.startDate).toLocaleDateString(undefined, {
            month: "short",
            year: "numeric",
          });
          const end = item.endDate
            ? new Date(item.endDate).toLocaleDateString(undefined, {
                month: "short",
                year: "numeric",
              })
            : "Present";

          return (
            <div key={item._id} className="relative">
              {/* Dot */}
              <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-2 border-emerald-400 bg-slate-950" />
              {/* Content */}
              <div className="ml-2 rounded-lg border border-slate-800 bg-slate-900/40 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-sm font-semibold">
                    {item.role} @ {item.company}
                  </h2>
                  <span className="text-[11px] text-slate-400">
                    {start} – {end}
                  </span>
                </div>
                {item.location && (
                  <p className="text-[11px] text-slate-400 mt-1">
                    {item.location}
                  </p>
                )}
                {item.description && (
                  <p className="text-sm text-slate-200 mt-2">{item.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
