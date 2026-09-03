import Image from "next/image";
import { capabilities } from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      className="section-pad-lg border-b border-surface-2 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container-site grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-6">
          <figure className="frame bg-surface">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/assets/photos/building-real.jpg"
                alt="Sedana Trading building facade with bilingual signage"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex items-center justify-between border-t border-navy/10 bg-white px-4 py-3">
              <span className="meta-label !text-ink-2">Sedana facility</span>
              <span className="meta-label">Real photograph</span>
            </figcaption>
          </figure>
        </div>

        <div className="reveal lg:col-span-6 lg:pt-2">
          <p className="meta-label">About Sedana</p>
          <h2
            id="about-heading"
            className="mt-4 max-w-[22ch] text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl"
          >
            A complete solutions provider, not only a supplier.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-2 text-pretty">
            <p>
              Sedana Trading has served industrial and professional customers
              since the mid-1970s. We supply tools and equipment, and we stay
              involved through planning, installation and after-sales support.
            </p>
            <p>
              Across the UAE and Lebanon, our teams work with workshops,
              facilities and production environments that need reliable
              equipment and practical technical guidance.
            </p>
            <p>
              From first consultation to ongoing service, the aim is the same:
              equipment that fits the operation and support that continues after
              delivery.
            </p>
          </div>

          <ol className="mt-10 grid gap-3 border-t border-surface-2 pt-8 sm:grid-cols-2">
            {capabilities.map((c) => (
              <li
                key={c.title}
                className="flex items-baseline gap-3 border border-navy/10 bg-surface px-4 py-3"
              >
                <span className="font-mono text-[11px] text-accent">{c.n}</span>
                <span className="text-sm font-semibold text-navy">{c.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
