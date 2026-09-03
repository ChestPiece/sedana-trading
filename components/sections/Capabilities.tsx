"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { capabilities } from "@/lib/data";
import { gsap, registerGsap } from "@/lib/gsap";

export function Capabilities() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".cap-rule",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".cap-timeline",
              start: "top 75%",
              end: "top 35%",
              scrub: true,
            },
          },
        );
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".cap-rule", { scaleX: 1 });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="capabilities"
      ref={root}
      className="section-pad-lg bg-navy text-white"
      aria-labelledby="capabilities-heading"
    >
      <div className="container-site">
        <div className="reveal grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
              Capabilities
            </p>
            <h2
              id="capabilities-heading"
              className="mt-4 max-w-[20ch] text-balance text-3xl font-bold tracking-tight md:text-4xl"
            >
              Plan, supply, install and support.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-white/65 text-pretty lg:col-span-5 lg:col-start-8">
            Sedana covers the full equipment lifecycle so buyers get more than a
            catalogue purchase.
          </p>
        </div>

        <div className="reveal relative mt-12 overflow-hidden border border-white/15">
          <div className="relative aspect-[21/9] w-full md:aspect-[24/9]">
            <Image
              src="/assets/photos/after-sales.png"
              alt="Technical service benches and spare parts support area"
              fill
              sizes="100vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-navy/40" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/15 bg-navy/80 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">
              <span>After-sales environment</span>
              <span>Service · parts · support</span>
            </div>
          </div>
        </div>

        <div className="cap-timeline reveal relative mt-14">
          <div
            className="cap-rule pointer-events-none absolute left-0 top-3 hidden h-px origin-left bg-white/35 md:block"
            style={{ width: "100%", transform: "scaleX(0)" }}
            aria-hidden
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-5">
            {capabilities.map((item) => (
              <li key={item.n} className="relative border-t border-white/15 pt-5 xl:border-t-0 xl:pt-2">
                <span className="font-mono text-xs text-accent">{item.n}</span>
                <h3 className="mt-3 text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60 text-pretty">
                  {item.note}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
