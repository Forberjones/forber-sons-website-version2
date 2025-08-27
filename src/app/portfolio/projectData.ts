export type Project = {
  slug: string;
  title: string;
  location?: string;
  sector?: string; // Industrial / Commercial / Domestic
  summary: string; // one-liner for the card
  hero: string;    // /public path
  gallery: string[]; // additional images (keep 3–6 tops)
  highlights: string[]; // bullets for detail page
};

export const projects: Project[] = [
  {
    slug: "conveyor-install-thg",
    title: "Conveyor Install (The Hut Group)",
    location: "Warrington",
    sector: "Commercial",
    summary: "We were contracted to install a conveyor belt control system for The Hut Group’s Warrington facility, designed to improve efficiency and reliability in their operations. The installation consisted of a master control panel feeding multiple slave panels, supporting four conveyor systems. Each conveyor was fitted with emergency stop buttons for operator safety, in compliance with current regulations. To ensure a neat, reliable, and robust installation, we used basket tray containment, SY control cabling, and SWA power cabling throughout. The system was designed for durability while allowing straightforward maintenance and future expansion.",
    hero: "/Conveyor_THG_Images/Conveyor_THG_1.jpg",
    gallery: [
      "/Conveyor_THG_Images/Conveyor_THG_2.jpg",
      "/Conveyor_THG_Images/Conveyor_THG_3.jpg",
      "/Conveyor_THG_Images/Conveyor_THG_4.jpg",
    ],
    highlights: [
      "Master/slave control panel setup",
      "Four conveyor systems installed with emergency dual channel stop safety circuits",
      "Basket tray containment with SY and SWA cabling for power and control",
    ],
  },
  {
    slug: "lighting-guinness",
    title: "Lighting Upgrade - Guinness Factory (Diageo)",
    location: "Runcorn, Warrington",
    sector: "Commercial",
    summary: "We were tasked with upgrading the canopy lighting at Guinness’s Runcorn facility, replacing outdated fittings with energy-efficient LEDs to improve lighting quality and reduce running costs. The project involved the removal of 24 fluorescent canopy light fittings, which were replaced with brand-new LED units. In addition, we installed 12 Osprey emergency light fittings, ensuring full compliance with emergency lighting standards. Because this was a live site with Guinness tankers regularly delivering and unloading, all work had to be carried out safely, during Easter shutdown hours and outside of normal operations. Careful planning and coordination were key to completing the upgrade without disruption to site activities. ",
    hero: "/GuinnessLightsProject/GL_2.jpg",
    gallery: [
      "/GuinnessLightsProject/GL_1.jpg",
      "/Portfolio/office-2.jpg",
      "/Portfolio/office-3.jpg",
    ],
    highlights: [
      "24 fluorescent canopy lights replaced with energy-efficient LEDs",
      "12 Osprey emergency light fittings installed",
      "Work completed safely out-of-hours with zero disruption to operations",
    ],
  },
  {
    slug: "ammonia-project",
    title: "Ammonia Alarm Installation - Honeywell",
    location: "Runcorn, Warrington",
    sector: "Commercial",
    summary: "Working as a subcontractor for Honeywell, we were tasked with installing a factory-wide ammonia alarm system at the Diageo Guinness site in Warrington. This large-scale safety project required the installation of 115 ammonia detectors across the facility, ensuring full coverage and protection for staff and operations. The works involved a combination of new installations and system break-ins to integrate the detectors into the existing fire alarm infrastructure. Using GENT software, our engineers configured and programmed each unit, ensuring seamless communication with the site-wide fire alarm and monitoring systems.",
    hero: "/AmmoniaProject/Ammonia_1.jpg",
    gallery: [
      "/AmmoniaProject/Ammonia_2.png",
      "/AmmoniaProject/Ammonia_3.png",
      "/AmmoniaProject/Ammonia_4.png",
    ],
    highlights: [
      "115 ammonia alarms installed across the factory",
      "Integrated into existing fire alarm system",
      "Combination of break-ins and new installations to achieve full coverage",
    ],
  },
  {
    slug: "maturo-prescot",
    title: "Full Electrical Overhaul - Maturo Restaurant",
    location: "Prescot",
    sector: "Hospitality",
    summary: "When Maturo took over the former Beijing Restaurant premises in Prescot, the electrical systems were outdated and no longer fit for purpose. We were contracted to carry out a complete electrical rewire and safety upgrade, ensuring the new restaurant met modern standards and compliance requirements. The project included a full rewire of the premises, installation of a new fire alarm system, and emergency lighting throughout. All works were designed and installed to BS 7671 and fire safety standards, giving the client a safe, reliable, and compliant electrical system ready for opening.",
    hero: "/MaturoRestaurant/Maturo_1.png",
    gallery: [
      "/MaturoRestaurant/Maturo_2.png",
      "/MaturoRestaurant/Maturo_3.webp",
      "/MaturoRestaurant/Maturo_4.webp",    
    ],
    highlights: [
      "Full rewire of restaurant premises",
      "Installation of fire alarm & emergency light testing",
      "Outdated systems removed and upgraded to current regulations",
    ],
  },
  {
    slug: "stop-start-suttons-project",
    title: "Coming Soon ",
    location: "TBA",
    sector: "TBA",
    summary: "TBA",
    hero: "/AboutImages/Coming_Soon.png",
    gallery: [
      "/AboutImages/Coming_Soon.png",
      "/AboutImages/Coming_Soon.png",
    ],
    highlights: [
      "TBA",
      "TBA",
      "TBA",
    ],
  },
];
