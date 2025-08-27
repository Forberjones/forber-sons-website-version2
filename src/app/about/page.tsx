import Image from "next/image";
import Link from "next/link";
import Accreditations from "../components/accreditations";

export const metadata = {
  title: "About | Forber & Sons LTD",
  description:
    "Forber & Sons LTD — NICEIC approved electrical contractors. 25+ years experience. UK-wide coverage.",
};

// tiny inline icon set
function StatIcon({ name }: { name: "years" | "uk" | "projects" | "certs" }) {
  const cls = "h-5 w-5";
  switch (name) {
    case "years":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M7 2h10v3H7zM5 6h14v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6zm4 4h2v8H9v-8zm4 0h2v8h-2v-8z" />
        </svg>
      );
    case "uk":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M3 5h18v2H3zm2 4h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9z" />
        </svg>
      );
    case "projects":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
        </svg>
      );
    case "certs":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M7 2h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V8h4.5L14 3.5zM9.4 13.3l1.6 1.6 3.9-3.9 1.1 1.1-5 5-2.7-2.7 1.1-1.1z"/>
        </svg>
      );
  }
}

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1 — Video first, content under */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {/* Video frame */}
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
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

          {/* Content below the video */}
          <div className="mt-10 text-center">
            <p className="text-sky-300 text-xs md:text-sm tracking-widest">ABOUT US</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">
              Reliable. Compliant. Experienced.
            </h1>

            <div className="mt-4 space-y-4 text-gray-300 leading-relaxed max-w-3xl mx-auto">
              <p>
                Forber Electrical Services was established in 1998 and specialised in electrical installations.
                We became <span className="text-white">Forber &amp; Sons LTD</span> in 2017.
              </p>
              <p>
                Our mission is to deliver safe, compliant and cost-effective electrical solutions nationwide —
                building long-term partnerships on trust, reliability and tidy workmanship.
              </p>
              <p>
                As an <span className="text-white">NICEIC Approved Contractor</span>, we work to BS 7671:2018+A2:2022
                and provide full certification &amp; documentation on completion.
              </p>
            </div>

            {/* Trusted by */}
            <h2 className="mt-8 text-sm font-semibold text-white/90">Trusted by</h2>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <Logo src="/CustomerLogos/Diago_Logo.png" alt="Diageo" />
              <Logo src="/CustomerLogos/Honeywell_Logo.png" alt="Honeywell" />
              <Logo src="/CustomerImages/Suttons_Photopea_2.png" alt="Suttons" />
            </div>

            {/* Stats grid */}
            <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <StatCard icon="years" label="Years in business" value="25+" />
              <StatCard icon="uk" label="Coverage" value="UK-wide" />
              <StatCard icon="projects" label="Projects delivered" value="1000+" />
              <StatCard icon="certs" label="Approved & certified" value="NICEIC" />
            </dl>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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

      {/* SECTION 2 — Standards we work to (logos row/grid) */}
      <Accreditations />

      {/* SECTION 3 — Closing CTA strip */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sky-300 text-sm tracking-widest">Work with us</p>
              <h3 className="mt-1 text-xl md:text-2xl font-semibold text-white">
                Need a dependable electrical partner?
              </h3>
              <p className="mt-2 text-gray-300">
                From compliance testing to turnkey installations — we’ve got you covered.
              </p>
            </div>
            <div className="flex items-center gap-3">
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
    </>
  );
}

/* helpers */
function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="relative h-8 w-28 md:h-10 md:w-36 grid place-items-center opacity-90">
      <Image src={src} alt={alt} fill className="object-contain" />
    </span>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: "years" | "uk" | "projects" | "certs";
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 text-center">
      <div className="mx-auto mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
        <StatIcon name={icon} />
      </div>
      <dt className="text-xs text-gray-400">{label}</dt>
      <dd className="text-lg text-white font-semibold">{value}</dd>
    </div>
  );
}
