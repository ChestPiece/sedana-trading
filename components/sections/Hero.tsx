"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, registerGsap } from "@/lib/gsap";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".hero-bg img",
          { scale: 1.08 },
          { scale: 1, duration: 1.6, ease: "power2.out" },
        );
        gsap.fromTo(
          ".hero-copy > *",
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.12,
          },
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={root}
      className="relative flex min-h-[100dvh] items-end overflow-hidden bg-navy"
      aria-labelledby="hero-heading"
    >
      <div className="hero-bg absolute inset-0" aria-hidden>
        <Image
          src="/assets/photos/hero-showroom.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Legibility wash — solid navy left → clear right, not a decorative gradient fill */}
        <div className="absolute inset-0 bg-navy/75 md:bg-navy/70" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(11,31,77,0.92)_0%,rgba(11,31,77,0.72)_42%,rgba(11,31,77,0.35)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(11,31,77,0.55),transparent)]" />
      </div>

      <div className="container-site relative z-[1] w-full pb-16 pt-28 md:pb-20 md:pt-32 lg:pb-24">
        <div className="hero-copy max-w-[680px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
            Established mid-1970s · UAE & Lebanon
          </p>
          <h1
            id="hero-heading"
            className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Industrial tools and workshop solutions built for real operations.
          </h1>
          <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-white/80 text-pretty md:text-lg">
            Consulting, supply, installation and after-sales support for
            professional facilities across the region.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#solutions" className="btn-on-dark">
              Explore Solutions
            </a>
            <a href="#about" className="btn-ghost-on-dark">
              Who We Are
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
