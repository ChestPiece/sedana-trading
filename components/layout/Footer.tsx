import { Logo } from "@/components/ui/Logo";
import { abuDhabiContact, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-12 md:gap-8 md:py-16">
        <div className="md:col-span-4">
          <Logo variant="onDark" className="h-10" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65 text-pretty">
            Industrial tools, equipment and workshop solutions across the UAE
            and Lebanon.
          </p>
        </div>

        <nav
          className="grid grid-cols-2 gap-x-6 gap-y-3 md:col-span-4"
          aria-label="Footer"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.12em] text-white/75 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="md:col-span-4 md:text-right">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/45">
            Abu Dhabi HQ
          </p>
          <a
            href={abuDhabiContact.phoneHref}
            className="mt-3 block text-sm text-white/90 hover:text-white"
          >
            {abuDhabiContact.phone}
          </a>
          <a
            href={abuDhabiContact.emailHref}
            className="mt-1 block text-sm text-white/90 hover:text-white"
          >
            {abuDhabiContact.email}
          </a>
          <a href="#contact" className="mt-5 inline-flex h-10 items-center border border-white/30 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">
            Send enquiry
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sedana Trading. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.12em]">UAE & Lebanon</p>
        </div>
      </div>
    </footer>
  );
}
