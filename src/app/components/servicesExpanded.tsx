import Link from "next/link";
import { services } from "./servicesData";

export default function ServicesExpanded() {
  return (
    <section className="relative overflow-hidden bg-[#020617] pb-24">
      {/* Page background blend */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,132,199,0.18) 0%, rgba(15,23,42,0.78) 38%, rgb(2,6,23) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Soft hero-style top wash */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(2,132,199,0.16) 0%, rgba(15,23,42,0.35) 45%, rgba(2,6,23,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-14 pb-6 text-center">
        <p className="text-sky-300 text-sm tracking-widest">
          Safe • Compliant • Professional
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">
          Our Services
        </h1>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
          Detailed inspection, testing and installation services for commercial,
          industrial and domestic clients.
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.slug}
            className="rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 hover:bg-white/[0.06] hover:ring-white/15 transition overflow-hidden"
          >
            {/* Top bar with icon and title */}
            <div className="flex items-center gap-3 px-5 pt-5">
              <span
                className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${s.accent}`}
              >
                {s.icon}
              </span>
              <div className="min-w-0">
                <h2 className="text-white font-semibold">{s.title}</h2>
                <p className="text-sm text-gray-400">{s.short}</p>
              </div>
            </div>

            {/* Highlights preview */}
            {s.highlights?.length > 0 && (
              <ul className="mt-4 space-y-3 px-5">
                {s.highlights.slice(0, 3).map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200">
                    <span
                      className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${s.accent}`}
                    >
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                        <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l8.1-8.1 1.4 1.4z" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Actions */}
            <div className="flex items-center gap-3 px-5 py-5">
              <Link
                href={`/services/${s.slug}`}
                className="inline-flex items-center justify-center rounded-full px-5 py-2 bg-white text-gray-900 text-sm font-medium hover:opacity-90"
              >
                Read more
              </Link>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-2 border border-white/20 text-white text-sm hover:bg-white/10"
              >
                Contact us
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}