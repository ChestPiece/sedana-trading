"use client";

import { useEffect, useRef, useState } from "react";
import { abuDhabiContact, locations } from "@/lib/data";
import { gsap, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type Location = (typeof locations)[number];

export function Presence() {
  const root = useRef<HTMLElement>(null);
  const [selectedId, setSelectedId] = useState<Location["id"]>("abu-dhabi");
  const selected = locations.find((l) => l.id === selectedId) ?? locations[0];

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".map-pin", {
          opacity: 0,
          scale: 0.6,
          duration: 0.45,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".presence-map",
            start: "top 70%",
            once: true,
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="presence"
      ref={root}
      className="section-pad-lg border-b border-surface-2 bg-surface"
      aria-labelledby="presence-heading"
    >
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="reveal lg:col-span-5">
          <p className="meta-label">Presence</p>
          <h2
            id="presence-heading"
            className="mt-4 text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl"
          >
            Six locations across the UAE and Lebanon.
          </h2>
          <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-ink-2 text-pretty">
            Regional coverage with a primary enquiry point in Abu Dhabi for
            operations across the network.
          </p>

          <article
            className="mt-10 border border-navy/20 bg-white p-6 transition-[box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
            aria-live="polite"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                {selected.name}
              </p>
              <span className="meta-label !text-ink-2">{selected.country}</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-navy">
              {selected.company}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">{selected.note}</p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-ink-2">
              {selected.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="mt-5 space-y-2 border-t border-surface-2 pt-5 text-sm">
              <a
                href={abuDhabiContact.phoneHref}
                className="block font-medium text-navy hover:underline"
              >
                {abuDhabiContact.phone}
              </a>
              <a
                href={abuDhabiContact.emailHref}
                className="block text-ink-2 hover:text-navy"
              >
                {abuDhabiContact.email}
              </a>
            </div>
          </article>

          <div
            className="mt-6 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Sedana locations"
          >
            {locations.map((loc) => {
              const isActive = loc.id === selectedId;
              return (
                <button
                  key={loc.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedId(loc.id)}
                  className={cn(
                    "border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    isActive
                      ? "border-navy bg-navy text-white"
                      : "border-navy/20 bg-white text-ink-2 hover:border-navy/40 hover:text-navy",
                  )}
                >
                  {loc.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="reveal presence-map lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden border border-navy/20 bg-white md:aspect-[5/4]">
            <svg
              viewBox="0 0 100 80"
              className="h-full w-full"
              role="img"
              aria-label="Map of Sedana locations across UAE and Lebanon"
            >
              <rect width="100" height="80" fill="#F2F3F5" />
              <path
                d="M8 18 C14 12, 22 14, 26 22 L30 34 C28 42, 20 46, 14 40 Z"
                fill="#E9EBEF"
                stroke="#0B1F4D"
                strokeWidth="0.35"
              />
              <path
                d="M42 40 C48 34, 58 36, 66 42 L78 48 C86 52, 88 62, 80 70 L58 74 C48 72, 40 62, 42 50 Z"
                fill="#E9EBEF"
                stroke="#0B1F4D"
                strokeWidth="0.35"
              />
              <text
                x="16"
                y="14"
                fill="#9AA0A8"
                style={{ fontSize: "2.2px", fontFamily: "monospace" }}
              >
                LEBANON
              </text>
              <text
                x="58"
                y="36"
                fill="#9AA0A8"
                style={{ fontSize: "2.2px", fontFamily: "monospace" }}
              >
                UAE
              </text>
              {locations.map((loc) => {
                const isActive = loc.id === selectedId;
                return (
                  <g
                    key={loc.id}
                    className="map-pin cursor-pointer"
                    onClick={() => setSelectedId(loc.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedId(loc.id);
                      }
                    }}
                  >
                    {isActive && (
                      <circle
                        cx={loc.x}
                        cy={loc.y}
                        r={5}
                        fill="#C8102E"
                        fillOpacity={0.12}
                      />
                    )}
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r={isActive ? 1.9 : 1.15}
                      fill={isActive ? "#C8102E" : "#0B1F4D"}
                    />
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r={isActive ? 3.4 : 2.3}
                      fill="none"
                      stroke={isActive ? "#C8102E" : "#0B1F4D"}
                      strokeOpacity={isActive ? 0.5 : 0.25}
                      strokeWidth="0.35"
                    />
                    <text
                      x={loc.x + 2.6}
                      y={loc.y + 0.7}
                      fill={isActive ? "#C8102E" : "#22314F"}
                      style={{
                        fontSize: "2px",
                        fontFamily: "monospace",
                        fontWeight: isActive ? 600 : 400,
                      }}
                    >
                      {loc.name}
                    </text>
                  </g>
                );
              })}
            </svg>
            <div className="absolute bottom-0 left-0 right-0 border-t border-navy/10 bg-white/95 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-2">
              Territory overview · not to cartographic scale
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
