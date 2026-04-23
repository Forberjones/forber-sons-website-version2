import Image from "next/image";
import Link from "next/link";
import Accreditations from "../components/accreditations";

export const metadata = {
  title: "About | Forber & Sons LTD",
  description:
    "Forber & Sons LTD — NICEIC approved electrical contractors. 25+ years experience. UK-wide coverage.",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/10">
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen text-white bg-[#020617]">
      {/* Full-page blended background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,132,199,0.18) 0%, rgba(15,23,42,0.78) 32%, rgb(2,6,23) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(2,132,199,0.18) 0%, rgba(15,23,42,0.50) 45%, rgba(2,6,23,0.88) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 backdrop-blur-xl" aria-hidden="true" />

        {/* bottom fade so it blends into the next content instead of cutting off */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48 md:h-64"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(2,6,23,0.20) 45%, rgb(2,6,23) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sky-300 text-sm tracking-widest">ABOUT US</p>

            <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
              Trusted. Compliant. Experienced.
            </h1>

            <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
              Forber &amp; Sons LTD has been delivering electrical installations,
              maintenance, testing and specialist works since 1998, supporting
              commercial and industrial clients across Merseyside and throughout the UK.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <Pill>Established 1998</Pill>
              <Pill>NICEIC Approved</Pill>
              <Pill>UK-wide coverage</Pill>
            </div>
          </div>

          {/* Video as centrepiece */}
          <div className="mt-10 mx-auto max-w-5xl overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl shadow-black/30">
            <video
              className="w-full h-auto block"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              poster="/AboutImages/video-poster.jpg"
            >
              <source src="/AboutImages/Editor[16].mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pb-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Who we are</h2>

            <div className="mt-5 space-y-4 text-gray-300 leading-relaxed">
              <p>
                Forber Electrical Services was established in 1998 and became{" "}
                <span className="text-white">Forber &amp; Sons LTD</span> in 2017.
              </p>
              <p>
                Our mission is to provide safe, compliant and cost-effective
                electrical solutions, while building long-term client relationships
                through reliability, communication and tidy workmanship.
              </p>
              <p>
                As a <span className="text-white">NICEIC Approved Contractor</span>,
                we work to BS 7671 and provide full certification and documentation
                on completion.
              </p>
            </div>
          </div>

          {/* Trusted by */}
          <div className="mt-14 text-center">
            <h3 className="text-lg font-semibold text-white">Trusted by</h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              <Logo src="/CustomerLogos/Diago_Logo.png" alt="Diageo" />
              <Logo src="/CustomerLogos/Honeywell_Logo.png" alt="Honeywell" />
              <Logo src="/CustomerImages/Schenk_Logo.png" alt="Schenk" />
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations replaces the stats */}
      <Accreditations />

      {/* CTA strip */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-6">
          <div className="rounded-3xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-6 md:p-8 text-center">
            <p className="text-sky-300 text-sm tracking-widest">Work with us</p>
            <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
              Need a dependable electrical partner?
            </h3>
            <p className="mt-3 max-w-2xl mx-auto text-gray-300">
              From compliance testing to full installations, we provide reliable
              electrical support for commercial and industrial clients across the UK.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full px-5 py-2 border border-white/20 text-white hover:bg-white/10"
              >
                View services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-2 bg-white text-gray-900 font-medium hover:opacity-90"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* helpers */
function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="relative h-8 w-28 md:h-10 md:w-36 grid place-items-center opacity-95">
      <Image src={src} alt={alt} fill className="object-contain" />
    </span>
  );
}