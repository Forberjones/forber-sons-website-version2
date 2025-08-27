export type Accreditation = {
  title: string;
  img: string;   // path from /public
  href?: string; // optional link to the body/standard
};

const accreditations: Accreditation[] = [
  { title: "NICEIC Approved Contractor", img: "/AccreditationsImages/NICEIC_Logo.png", href: "https://www.niceic.com/" },
  { title: "IOSH Safety Training",        img: "/AccreditationsImages/Iosh_Logo.png", href: "https://iosh.com/qualifications-and-courses/courses/managing-safely" },
  { title: "IPAF Registered",   img: "/AccreditationsImages/IPAF_LOGO.png", href: "https://www.ipaf.org/en-gb" },
  { title: "Avetta Certified",   img: "/AccreditationsImages/Avetta_Logo.png", href: "https://www.avetta.com/en-gb" },
  { title: "SETA Accreditation",   img: "/AccreditationsImages/Seta-Logo.png", href: "https://www.setatraining.co.uk/courses/electrical_pat.html" },
  { title: "18th Edition Certified",   img: "/AccreditationsImages/BSEdition_Logo.png", href: "https://www.cityandguilds.com/qualifications-and-apprenticeships/building-services-industry/electrical-installation/2382-requirements-for-electrical-installations#tab=information" },  
  // add more here …
];

export default accreditations;
