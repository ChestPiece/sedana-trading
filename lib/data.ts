export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#industries", label: "Industries" },
  { href: "#presence", label: "Presence" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const;

export const trustStats = [
  { label: "Established", value: "mid-1970s" },
  { label: "Clients", value: "12,000+" },
  { label: "SKUs", value: "150,000+" },
  { label: "Locations", value: "6" },
] as const;

/** Partner marks sourced from sedana.com/images/brands (local copies). */
export const partnerBrands = [
  { name: "RAASM", src: "/assets/brands/raasm.jpg" },
  { name: "PIUSI", src: "/assets/brands/piusi.jpg" },
  { name: "RUPES", src: "/assets/brands/rupes.jpg" },
  { name: "Hofmann", src: "/assets/brands/hofmann.jpg" },
  { name: "SATA", src: "/assets/brands/sata.jpg" },
  { name: "Kärcher", src: "/assets/brands/karcher.jpg" },
  { name: "Beta", src: "/assets/brands/beta.jpg" },
  { name: "Stahlwille", src: "/assets/brands/stahlwille.jpg" },
  { name: "Nussbaum", src: "/assets/brands/nussbaum.jpg" },
  { name: "Ceccato", src: "/assets/brands/ceccato.jpg" },
  { name: "Nitrok", src: "/assets/brands/nitrok.jpg" },
  { name: "Fini", src: "/assets/brands/fini.jpg" },
  { name: "Celette", src: "/assets/brands/celette.jpg" },
  { name: "Metabo", src: "/assets/brands/metabo.jpg" },
] as const;

export const solutions = [
  {
    id: "automotive",
    title: "Automotive & Workshop",
    description:
      "Tire service, lifts, tool cabinets and workshop systems for professional service environments.",
    // TODO: replace with real product/facility photo before launch
    image: "/assets/photos/automotive.png",
    span: "lg" as const,
  },
  {
    id: "tools",
    title: "Industrial & Professional Tools",
    description:
      "Power tools, hand tools and organized storage for industrial and trade operations.",
    // TODO: replace with real product/facility photo before launch
    image: "/assets/photos/tools.png",
    span: "sm" as const,
  },
  {
    id: "cleaning",
    title: "Cleaning & Facility",
    description:
      "Floor care, pressure washing and facility equipment for commercial and industrial sites.",
    // TODO: replace with real product/facility photo before launch
    image: "/assets/photos/cleaning.png",
    span: "sm" as const,
  },
  {
    id: "fabrication",
    title: "Fabrication & Manufacturing",
    description:
      "Welding, cutting and fabrication equipment for production and metalworking teams.",
    // TODO: replace with real product/facility photo before launch
    image: "/assets/photos/welding.png",
    span: "lg" as const,
  },
] as const;

export const capabilities = [
  {
    n: "01",
    title: "Consulting",
    note: "Requirements analysis for workshop and facility setups.",
  },
  {
    n: "02",
    title: "Planning",
    note: "Layout and equipment planning before procurement.",
  },
  {
    n: "03",
    title: "Supply",
    note: "Sourcing across a deep industrial catalogue.",
  },
  {
    n: "04",
    title: "Installation",
    note: "On-site installation by trained technical teams.",
  },
  {
    n: "05",
    title: "Fabrication",
    note: "Custom fabrication where standard fit is not enough.",
  },
  {
    n: "06",
    title: "After-Sales",
    note: "Service, spare parts and ongoing technical support.",
  },
] as const;

export const industries = [
  {
    n: "01",
    title: "Automotive",
    note: "Workshops, service centers and fleet maintenance facilities.",
  },
  {
    n: "02",
    title: "Construction",
    note: "Tools and equipment for site operations and contractors.",
  },
  {
    n: "03",
    title: "Industrial",
    note: "Plant maintenance, compressed air and production support.",
  },
  {
    n: "04",
    title: "Manufacturing",
    note: "Fabrication, assembly and shop-floor tooling environments.",
  },
  {
    n: "05",
    title: "Oil & Gas",
    note: "Industrial tools and facility equipment for energy operations.",
  },
  {
    n: "06",
    title: "Fabrication",
    note: "Welding, cutting and metalworking workspaces.",
  },
  {
    n: "07",
    title: "Cleaning",
    note: "Facility hygiene and professional cleaning systems.",
  },
  {
    n: "08",
    title: "Professional sectors",
    note: "Specialist trades and technical service environments.",
  },
] as const;

export const abuDhabiContact = {
  company: "Sedana Trading Co. LLC",
  addressLines: [
    "Plot 37, M15, 6th Street",
    "Musaffah Industrial",
    "Abu Dhabi, UAE",
  ],
  phone: "+971 2 554 4800",
  phoneHref: "tel:+97125544800",
  email: "info@sedana-ad.ae",
  emailHref: "mailto:info@sedana-ad.ae",
} as const;

export const locations = [
  {
    id: "abu-dhabi",
    name: "Abu Dhabi",
    country: "UAE",
    x: 52,
    y: 68,
    isHq: true,
    company: abuDhabiContact.company,
    addressLines: abuDhabiContact.addressLines,
    note: "Primary enquiry point for the network.",
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    x: 68,
    y: 56,
    isHq: false,
    company: "Sedana Trading",
    addressLines: ["Dubai, UAE"],
    note: "Regional branch. Enquiries routed through Abu Dhabi.",
  },
  {
    id: "sharjah",
    name: "Sharjah",
    country: "UAE",
    x: 72,
    y: 48,
    isHq: false,
    company: "Sedana Trading",
    addressLines: ["Sharjah, UAE"],
    note: "Regional branch. Enquiries routed through Abu Dhabi.",
  },
  {
    id: "hamriyah",
    name: "Hamriyah",
    country: "UAE",
    x: 74,
    y: 42,
    isHq: false,
    company: "Sedana Trading",
    addressLines: ["Hamriyah, UAE"],
    note: "Regional branch. Enquiries routed through Abu Dhabi.",
  },
  {
    id: "fujairah",
    name: "Fujairah",
    country: "UAE",
    x: 82,
    y: 52,
    isHq: false,
    company: "Sedana Trading",
    addressLines: ["Fujairah, UAE"],
    note: "Regional branch. Enquiries routed through Abu Dhabi.",
  },
  {
    id: "beirut",
    name: "Beirut",
    country: "Lebanon",
    x: 18,
    y: 28,
    isHq: false,
    company: "Sedana Trading",
    addressLines: ["Beirut, Lebanon"],
    note: "Lebanon presence. Enquiries routed through Abu Dhabi.",
  },
] as const;

export const galleryItems = [
  {
    src: "/assets/photos/hero-showroom.png",
    alt: "Sedana industrial showroom floor with workshop equipment",
    caption: "Showroom environment",
  },
  {
    src: "/assets/photos/warehouse.png",
    alt: "Organized warehouse aisle with industrial inventory",
    caption: "Warehouse & inventory",
  },
  {
    src: "/assets/photos/compressed-air.png",
    alt: "Compressed air and pneumatic equipment display",
    caption: "Compressed air systems",
  },
  {
    src: "/assets/photos/facility-exterior.png",
    alt: "Sedana facility exterior with showroom and warehouse",
    caption: "Facility presence",
  },
  {
    src: "/assets/photos/after-sales.png",
    alt: "Technical service workbench and spare parts area",
    caption: "After-sales support",
  },
  {
    src: "/assets/photos/tools.png",
    alt: "Industrial tool wall and power tool displays",
    caption: "Professional tools",
  },
] as const;

export const interestOptions = [
  "Automotive & Workshop",
  "Industrial & Professional Tools",
  "Cleaning & Facility",
  "Fabrication & Manufacturing",
  "Consulting & Planning",
  "After-Sales Support",
  "Other",
] as const;

/** Formspree placeholder: replace with your form ID before launch */
export const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
  "https://formspree.io/f/PLACEHOLDER";
