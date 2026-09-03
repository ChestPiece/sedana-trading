import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { GsapProvider } from "@/components/GsapProvider";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sedana-trading.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Sedana Trading | Industrial Tools, Equipment & Workshop Solutions - UAE & Lebanon",
  description:
    "Sedana Trading supplies industrial tools, workshop equipment and facility solutions across the UAE and Lebanon, with consulting, installation and after-sales support.",
  alternates: { languages: { en: "/" } },
  openGraph: {
    title: "Sedana Trading | Industrial Tools & Workshop Solutions",
    description:
      "Established industrial distributor serving the UAE and Lebanon with tools, equipment, installation and after-sales support.",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/assets/photos/hero-showroom.png",
        width: 1200,
        height: 630,
        alt: "Sedana industrial showroom",
      },
    ],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Sedana Trading",
      url: siteUrl,
      logo: `${siteUrl}/assets/logo/sedana-logo.png`,
      areaServed: ["AE", "LB"],
    },
    {
      "@type": "LocalBusiness",
      name: "Sedana Trading Co. LLC",
      image: `${siteUrl}/assets/photos/building-real.jpg`,
      telephone: "+97125544800",
      email: "info@sedana-ad.ae",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot 37, M15, 6th Street, Musaffah Industrial",
        addressLocality: "Abu Dhabi",
        addressCountry: "AE",
      },
      url: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="overflow-x-hidden font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GsapProvider>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </GsapProvider>
      </body>
    </html>
  );
}
