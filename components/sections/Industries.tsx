import { industries } from "@/lib/data";

export function Industries() {
  return (
    <section
      id="industries"
      className="section-pad-lg border-b border-surface-2 bg-white"
      aria-labelledby="industries-heading"
    >
      <div className="container-site">
        <div className="reveal max-w-2xl">
          <p className="meta-label">Industries</p>
          <h2
            id="industries-heading"
            className="mt-4 text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl"
          >
            Built for the sectors that run on equipment.
          </h2>
        </div>

        <ul className="reveal mt-12 grid border-t border-navy/15 md:grid-cols-2">
          {industries.map((item) => (
            <li
              key={item.n}
              className="group border-b border-navy/10 transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-surface md:odd:border-r"
            >
              <a
                href="#contact"
                className="flex items-start justify-between gap-6 px-1 py-7 md:px-5 md:py-8"
              >
                <div className="flex gap-5">
                  <span className="font-mono text-xs text-muted">{item.n}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-navy md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-ink-2 text-pretty">
                      {item.note}
                    </p>
                  </div>
                </div>
                <span
                  className="mt-1 shrink-0 text-navy opacity-0 transition-all duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:opacity-100"
                  aria-hidden
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
