"use client";

import { useGsapReveals } from "@/lib/gsap";

export function GsapProvider({ children }: { children: React.ReactNode }) {
  useGsapReveals();
  return <>{children}</>;
}
