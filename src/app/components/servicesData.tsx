
export type Service = {
  slug: string;
  title: string;
  short: string;
  accent: string;
  icon: React.ReactNode;
  heroImage?: string;
  gallery?: string[];          // 👈 NEW: any number of images
  highlights: string[];
  body: string[];
  ctaLabel?: string;
};


const Icons = {
  certificate: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M7 2h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V8h4.5L14 3.5zM9.4 13.3l1.6 1.6 3.9-3.9 1.1 1.1-5 5-2.7-2.7 1.1-1.1z"/>
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M13 2l-2 6h4l-4 8 2-6H9l4-8zM4 20h16v2H4z"/>
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zm6-6V11a6 6 0 0 0-5-5.91V4a1 1 0 1 0-2 0v1.09A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2z"/>
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M22 7.46a5.5 5.5 0 0 1-7.66 6.92L7.41 21.3a2 2 0 1 1-2.83-2.83l6.92-6.93A5.5 5.5 0 0 1 16.54 2a3.5 3.5 0 0 0 3.6 3.6c.68.02 1.34.16 1.86.46z"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2l7 4v6c0 5-3.6 9.4-7 10-3.4-.6-7-5-7-10V6l7-4zm-1 13l5-5-1.4-1.4L11 12.2l-1.6-1.6L8 12l3 3z"/>
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 3l9 9h-3v9H6v-9H3l9-9z"/>
    </svg>
  ),
};

export const services: Service[] = [
  {
    slug: "niceic-reports",
    title: "NICEIC Reports (EICR)",
    short: "EICR for commercial & industrial properties.",
    accent: "bg-sky-500/15 text-sky-300",
    icon: Icons.certificate,
    heroImage: "/AboutImages/Coming_Soon.png",
    highlights: [
      "Periodic inspection & testing to BS 7671:2018+A2:2022",
      "Clear coding (C1/C2/C3/FI) with remedial recommendations",
      "Landlord, insurance & compliance documentation",
    ],
    body: [
      "✅ Commercial & Landlord Compliance",
      "Commercial properties must have an EICR at least every 5 years, and landlords at change of tenancy. These tests are a legal requirement under BS 7671:2018+A2:2022, providing compliance for insurers, local authorities, and H&S officers.",
      "We issue full EICR and PRNS certification, giving you complete peace of mind that your electrical systems are safe, compliant, and properly documented.",
      "✅ Clear Reporting & Remedial Works",
      "Our NICEIC-approved engineers provide reports with clear C1, C2, C3, and FI coding, so you know exactly what requires immediate attention and what can be planned as future works.",
      "We don’t just identify faults — we carry out all remedial works required to bring your installation up to standard.",
      "✅ Portfolio & Multi-Site Management",
      "We specialise in managing EICR programmes for landlords and portfolio managers, delivering consolidated reports across multiple sites.",
      "From single properties to nationwide schedules, we keep you compliant and your tenants safe.",

    ],
    ctaLabel: "Book an EICR",
  },
  {
    slug: "fixed-wiring-testing",
    title: "Fixed Wiring Inspection & Testing",
    short: "BS 7671:2018+A2:2022 compliance testing.",
    accent: "bg-amber-500/15 text-amber-300",
    icon: Icons.bolt,
    heroImage: "/Services/FW_1.jpg",
    gallery: [
      "/Services/FW_1.jpg",
      "/Services/FW_3.jpg",      
    ],  
    highlights: [
      "Continuity, insulation resistance, polarity & RCD testing",
      "Digital certification and asset tagging",
      "Out-of-hours testing available",
    ],
    body: [
      "✅ Full Electrical Safety Testing",
      "We carry out comprehensive fixed wiring inspections in line with BS 7671:2018+A2:2022, covering continuity, insulation resistance, polarity, and RCD testing.",
      "Our testing ensures your installation is safe, compliant, and properly documented.",
      "✅ Digital Certification & Asset Tagging",
      "On completion, you’ll receive full certification along with digital records and asset tagging for easy traceability.",
      "This makes it simple to manage compliance across sites and satisfy insurers, auditors, and H&S officers.",
      "✅ Out-of-Hours & Minimal Disruption",
      "We understand downtime costs money — that’s why we offer out-of-hours testing and phased inspection schedules.",
    ],
    ctaLabel: "Arrange testing",
  },
  {
    slug: "fire-alarms-emergency-lighting",
    title: "Fire Alarm & Emergency Light Testing",
    short: "Routine tests, logs & remedials.",
    accent: "bg-rose-500/15 text-rose-300",
    icon: Icons.bell,
    heroImage: "/Services/FA_1.png",
    gallery: [
      "/Services/FA_1.png",
      "/Services/FA_2.png",
      "/Services/FA_3.jpg",
    ],  
    highlights: [
      "6 and 12 monthly checks",
      "Logbooks maintained and completed on site",
      "BS 5839 & BS 5266 compliant",
    ],
    body: [
      "✅ Fire Alarm Testing (6-Monthly)",
      "Commercial fire alarms must be professionally tested at least every 6 months to comply with BS 5839.",
      "We carry out full system inspections, functional checks, and remedials, ensuring your alarms are reliable and compliant with fire safety regulations.",
      "✅ Emergency Light Testing (12-Monthly)",
      "Emergency lighting systems require a full discharge test every 12 months under BS 5266. We provide thorough inspections, maintain on-site logbooks, and certify your system to guarantee safe evacuation routes in the event of power loss.",
      "✅ Safety & Compliance Made Simple",
      "Our team delivers routine inspections, log maintenance, and remedials with minimal disruption to your operations.",
      "From single buildings to nationwide portfolios, we ensure your sites meet statutory fire safety standards — with all reports and certifications supplied on completion.",
    ],
    ctaLabel: "Schedule a visit",
  },
  {
    slug: "general-maintenance",
    title: "General Maintenance",
    short: "Repairs, upgrades & small works.",
    accent: "bg-emerald-500/15 text-emerald-300",
    icon: Icons.wrench,
    heroImage: "/GeneralMaintenance/GM_1.png",
    gallery: [
      "/GeneralMaintenance/GM_1.png",
      "/GeneralMaintenance/GM_2.png",
      "/GeneralMaintenance/GM_3.png",
    ],    
    highlights: [
      "Break/fix call-outs and planned maintenance",
      "Lighting, containment, distribution upgrades",
      "Commercial & industrial",
    ],
    body: [
      "✅ Planned & Reactive Maintenance",
      "We provide both planned maintenance and emergency call-outs, ensuring your electrical systems are always safe, reliable, and fully operational.",
      "From routine servicing to urgent repairs, our team responds quickly to minimise downtime.",
      "✅ Electrical Upgrades & Improvements",
      "We carry out lighting upgrades, containment works, distribution improvements, and other small-scale installations.",
      "Our maintenance services are designed to extend the life of your systems while improving efficiency and safety.",
      "✅ Commercial & Industrial Support",
      "With over 25 years’ experience, we support businesses across the UK with ongoing maintenance contracts and one-off works.",
      "Whether it’s a single-site repair or nationwide upgrades, we deliver professional service with minimal disruption.",
    ],
    ctaLabel: "Contact us",
  },
  {
    slug: "pat-testing",
    title: "PAT Testing",
    short: "Portable Appliance Testing for compliance and safety.",
    accent: "bg-purple-500/15 text-purple-300",
    icon: Icons.shield,
    heroImage: "/AboutImages/Coming_Soon.png",
    highlights: [
      "Appliance inventory & testing labels",
      "Detailed pass/fail report with retest dates",
      "Out-of-hours site coverage",
    ],
    body: [
      "✅ Compliance & Safety Assured",
      "We carry out Portable Appliance Testing (PAT) to ensure all workplace equipment is safe, compliant, and fit for use.",
      "Our testing helps businesses meet health & safety obligations and provides certification for insurers and auditors.",
      "✅ Detailed Reports & Labelling",
      "Every appliance is tested, labelled with pass/fail status, and logged in a detailed compliance report.",
      "We also include retest dates, making future compliance simple to manage.",
      "(Offered only alongside fire alarm & emergency light testing)",
    ],
    ctaLabel: "Book PAT testing",
  },
  {
    slug: "domestic-installations",
    title: "Domestic Installations",
    short: "Fuse board changes & EV car chargers.",
    accent: "bg-indigo-500/15 text-indigo-300",
    icon: Icons.home,
    heroImage: "/Services/DS_1.jpg",
    highlights: [
      "Consumer unit upgrades",
      "EV chargers",
      "EICR certificates",
    ],
    body: [
      "✅ EICR Testing for Homes & Rentals",
      "We provide Electrical Installation Condition Reports (EICRs) for homeowners and landlords, ensuring your property is safe and fully compliant with BS 7671. Perfect for peace of mind, property sales, or meeting landlord obligations.",
      "✅ Fuse Board (Consumer Unit) Upgrades",
      "Upgrading an old fuse board is one of the best ways to improve home safety. We install modern RCBO & RCD-protected consumer units, providing full certification and a safer, more reliable system.",
      "✅ EV Charger Installations",
      "With the rise of electric vehicles, we install and certify domestic EV charging points, giving you fast, safe, and efficient home charging. All installations are carried out by NICEIC-approved electricians to the latest standards.",
    ],
    ctaLabel: "Get a home quote",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs() {
  return services.map((s) => s.slug);
}
