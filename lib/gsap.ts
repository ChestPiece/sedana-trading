"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function useGsapReveals() {
  useEffect(() => {
    registerGsap();
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const batch = gsap.utils.toArray<HTMLElement>(".reveal");
      batch.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            delay: Math.min((i % 6) * 0.04, 0.2),
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
          },
        );
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(".reveal", { opacity: 1, y: 0 });
    });

    return () => mm.revert();
  }, []);
}

export { gsap, ScrollTrigger };
