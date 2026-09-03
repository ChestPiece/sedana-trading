import Image from "next/image";
import { partnerBrands, solutions } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Solutions() {
  return (
    <section
      id="solutions"
      className="section-pad-lg border-b border-surface-2 bg-surface"
      aria-labelledby="solutions-heading"
    >
      <div className="container-site">
        <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="meta-label">Solutions</p>
            <h2
              id="solutions-heading"
              className="mt-4 text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl"
            >
              Equipment categories for workshops, facilities and production.
            </h2>
          </div>
          <a href="#contact" className="btn-secondary shrink-0 self-start md:self-auto">
            Request a quote
          </a>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {solutions.map((item) => (
            <article
              key={item.id}
              className={cn(
                "reveal group overflow-hidden border border-navy/15 bg-white",
                item.span === "lg" ? "lg:col-span-7" : "lg:col-span-5",
              )}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="border-t border-navy bg-navy px-5 py-4 text-white">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              </div>
              <div className="px-5 py-5">
                <p className="max-w-[48ch] text-sm leading-relaxed text-ink-2 text-pretty">
                  {item.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5"
                >
                  Enquire about equipment
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-14 border-t border-navy/10 pt-8">
          <p className="meta-label">Brands we carry</p>
          <ul
            className="brand-strip mt-6 flex gap-10 overflow-hidden"
            aria-label="Partner brands"
          >
            {[0, 1].map((copy) => (
              <li
                key={copy}
                className="brand-strip__track flex shrink-0 items-center gap-10"
                aria-hidden={copy === 1 || undefined}
              >
                {partnerBrands.map((brand) => (
                  <div
                    key={`${copy}-${brand.name}`}
                    className="relative h-10 w-[7.5rem] shrink-0 md:h-11 md:w-36"
                  >
                    <Image
                      src={brand.src}
                      alt={copy === 0 ? brand.name : ""}
                      fill
                      sizes="144px"
                      className="object-contain"
                    />
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
