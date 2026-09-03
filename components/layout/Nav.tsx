"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { abuDhabiContact, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  const overHero = !scrolled && !open;
  const onDark = overHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
        onDark
          ? "border-b border-transparent bg-transparent"
          : "border-b border-navy/10 bg-white/95 shadow-[0_1px_0_rgba(11,31,77,0.04)] backdrop-blur-md",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-site flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <Link href="#hero" className="shrink-0" aria-label="Sedana Trading home">
          <Logo priority variant={onDark ? "onDark" : "default"} />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1" aria-label="Primary">
          {navLinks.map((link) => {
            const active = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-2 py-2 text-[10px] font-medium uppercase tracking-[0.12em] transition-colors duration-200 xl:px-2.5 xl:text-[11px] xl:tracking-[0.14em]",
                  onDark
                    ? active
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                    : active
                      ? "text-navy"
                      : "text-ink-2 hover:text-navy",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-2 -bottom-0.5 h-px transition-opacity duration-200",
                    onDark ? "bg-white" : "bg-navy",
                    active ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={abuDhabiContact.phoneHref}
            className={cn(
              "font-mono text-xs tracking-wide transition-colors duration-200",
              onDark ? "text-white/70 hover:text-white" : "text-ink-2 hover:text-navy",
            )}
          >
            {abuDhabiContact.phone}
          </a>
          <a
            href="#contact"
            className={cn("h-10 px-4 text-sm", onDark ? "btn-on-dark" : "btn-primary")}
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="relative z-[60] flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 block h-0.5 w-5 transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                onDark ? "bg-white" : "bg-navy",
                open && "top-1.5 rotate-45 !bg-navy",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[6px] block h-0.5 w-5 transition-opacity duration-200",
                onDark ? "bg-white" : "bg-navy",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 block h-0.5 w-5 transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                onDark ? "bg-white" : "bg-navy",
                open && "top-1.5 -rotate-45 !bg-navy",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-50 bg-white transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="container-site flex h-full flex-col pb-10 pt-24">
          <p className="meta-label mb-6">Navigate</p>
          <nav className="flex flex-col" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-surface-2 py-4 text-2xl font-semibold text-navy transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                  activeHref === link.href && "text-accent",
                )}
                style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto space-y-4 border-t border-surface-2 pt-6">
            <a
              href={abuDhabiContact.phoneHref}
              className="block font-mono text-sm text-ink-2"
            >
              {abuDhabiContact.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Contact Sedana
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
