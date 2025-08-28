import Image from "next/image";
import Niceic from "./components/niceic";
import Services from "./components/services";
import Contact from "./components/contact";
import Link from "next/link";
import Customers from "./components/customers";

export default function HomePage() {
  return (
    <>
     {/* HERO */}
      <section className="relative min-h-screen md:min-h-[90vh] flex items-center justify-center text-center">
        {/* Background image + overlays */}
        <div className="absolute inset-0">
          <Image
            src="/HomePageContents/Cover_Page_1.JPG"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/HomePageContents/Forber-Sons-Logo-2.png"
              alt="Forber & Sons Logo"
              width={260}
              height={260}
              className="object-contain"
            />
          </div>

          <h1 className="font-sans font-medium text-white text-4xl md:text-6xl">
            Forber &amp; Sons LTD
          </h1>

          <p className="mt-4 font-sans font-light text-gray-200 text-xl md:text-2xl">
            Providing exceptional electrical services for over 25 years
          </p>

          <p className="mt-2 font-sans font-light text-gray-300 text-lg md:text-xl">
            Commercial and industrial electrical installation
          </p>

          <p className="mt-1 font-sans font-light text-gray-400 text-base md:text-lg">
            Based in the North West
          </p>

          {/* CTA buttons */}
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
  <Link
    href="/services"
    className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white text-gray-900 font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60"
  >
    View Services
  </Link>
  <Link
    href="/portfolio"
    className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/30 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
  >
    See Our Work
  </Link>
</div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-300">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span> NICEIC Approved
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400/80"></span> 25+ Years Experience
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80"></span> UK-wide Coverage
            </span>
          </div>

          {/* Scroll arrow */}
          <a
            href="#services"
            className="mt-12 mx-auto block w-fit text-gray-300 hover:text-white"
            aria-label="Scroll to services"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 md:h-10 md:w-10 animate-bounce"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 16l-6-6h12l-6 6z" />
            </svg>
          </a>
        </div>
      </section>


      {/* You can add more sections below */}

      {/* NICEIC block */}
      <Niceic />

      {/* Services block */}
      <Services />

      {/* Customers carousel */}
      <Customers />

      {/* Contact block */}
      <Contact />



    </>
  );
}
