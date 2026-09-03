"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { galleryItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const titleId = useId();
  const item = active !== null ? galleryItems[active] : null;

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((i) => (i === null ? 0 : (i + 1) % galleryItems.length));
      if (e.key === "ArrowLeft")
        setActive((i) =>
          i === null ? 0 : (i - 1 + galleryItems.length) % galleryItems.length,
        );
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section
      id="gallery"
      className="section-pad-lg border-b border-surface-2 bg-surface"
      aria-labelledby="gallery-heading"
    >
      <div className="container-site">
        <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="meta-label">Gallery</p>
            <h2
              id="gallery-heading"
              className="mt-4 text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl"
            >
              Facilities, equipment and service environments.
            </h2>
          </div>
          <p className="meta-label max-w-[28ch] md:text-right">
            Select an image to open
          </p>
        </div>

        <ul className="mt-12 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {galleryItems.map((g, i) => (
            <li key={g.src} className="reveal">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative flex w-full flex-col overflow-hidden border border-navy/15 bg-white text-left focus-visible:z-10"
              >
                <span className="relative block aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                  />
                </span>
                <span className="flex items-center justify-between gap-3 bg-navy px-4 py-3.5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white">
                    {g.caption}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 transition-colors duration-200 group-hover:text-white/80">
                    View
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {item && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/92 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setActive(null)}
        >
          <div
            className={cn(
              "relative w-full max-w-5xl overflow-hidden border border-white/10 bg-white",
              "origin-center opacity-100",
            )}
            style={{
              animation: "gallery-dialog-in 220ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-surface">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-surface-2 px-4 py-3">
              <p
                id={titleId}
                className="font-mono text-xs uppercase tracking-[0.12em] text-ink-2"
              >
                {item.caption}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActive(
                      (i) =>
                        i === null
                          ? 0
                          : (i - 1 + galleryItems.length) % galleryItems.length,
                    )
                  }
                  className="btn-secondary h-9 px-3 text-sm"
                  aria-label="Previous image"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActive((i) =>
                      i === null ? 0 : (i + 1) % galleryItems.length,
                    )
                  }
                  className="btn-secondary h-9 px-3 text-sm"
                  aria-label="Next image"
                >
                  Next
                </button>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="btn-primary h-9 px-3 text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
