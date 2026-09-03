import { trustStats } from "@/lib/data";

export function Trust() {
  return (
    <section
      id="trust"
      className="border-b border-surface-2 bg-navy text-white"
      aria-label="Company scale"
    >
      <div className="container-site">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {trustStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal px-4 py-10 md:px-6 md:py-12 ${
                i % 2 === 0 ? "border-r border-white/10" : ""
              } ${i < 2 ? "border-b border-white/10 md:border-b-0" : ""} ${
                i < 3 ? "md:border-r md:border-white/10" : "md:border-r-0"
              }`}
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                {stat.label}
              </dt>
              <dd className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
