const statements = [
  {
    label: "Vision",
    color: "#7dd3fc",
    text: "To be the accounting and audit partner every business can rely on - a reliable hybrid financial ecosystem that cuts through the chaos created by AI and outsourcing, integrates with ever-evolving technology, and scales with businesses of every size, at every stage of their growth.",
  },
  {
    label: "Mission",
    color: "#a78bfa",
    text: "To deliver accurate, audit-ready financial clarity by combining expert human judgment with AI-driven efficiency - giving CFOs and growing businesses a single, trustworthy partner instead of a patchwork of tools, freelancers, and outsourced vendors.",
  },
];

export function VisionMission() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 px-6 py-24 text-white md:px-12 md:py-28">
      <div className="pointer-events-none absolute left-0 top-0 size-[28rem] rounded-full bg-[#2dd4bf]/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 size-[30rem] rounded-full bg-[#a78bfa]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1300px]">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[.24em] text-[#7dd3fc]">
            Vision &amp; Mission
          </span>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Built to bring <span className="text-brand-gradient-flow">clarity and confidence.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {statements.map((statement) => (
            <article
              key={statement.label}
              className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/20 bg-[#0b1020]/80 p-8 shadow-[0_24px_70px_rgba(0,0,0,.28)] md:p-10"
            >
              <div
                className="absolute -right-16 -top-16 size-56 rounded-full opacity-25 blur-3xl"
                style={{ backgroundColor: statement.color }}
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span
                    className="size-3 rounded-full"
                    style={{
                      backgroundColor: statement.color,
                      boxShadow: `0 0 18px ${statement.color}`,
                    }}
                  />
                  <span
                    className="text-xs font-bold uppercase tracking-[.24em]"
                    style={{ color: statement.color }}
                  >
                    {statement.label}
                  </span>
                </div>
                <p className="mt-10 text-xl font-medium leading-relaxed text-white/90 md:text-2xl">
                  &quot;{statement.text}&quot;
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
