import Link from "next/link";
import { services } from "./servicesData";

export default function ServicesExpanded() {
  return (
    <section className="bg-black">
      {/* Optional page hero */}
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-6 text-center">
        <p className="text-sky-300 text-sm tracking-widest">Safe • Compliant • Professional</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Our Services</h1>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
          Detailed inspection, testing and installation services for commercial, industrial and domestic clients.
        </p>
      </div>

      {/* Richer cards than the homepage */}
      <div className="mx-auto max-w-6xl px-4 pb-16 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.slug}
            className="rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/7.5 hover:ring-white/20 transition overflow-hidden"
          >
            {/* Top bar with icon and title */}
            <div className="flex items-center gap-3 px-5 pt-5">
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${s.accent}`}>
                {s.icon}
              </span>
              <div>
                <h2 className="text-white font-semibold">{s.title}</h2>
                <p className="text-sm text-gray-400">{s.short}</p>
              </div>
            </div>

            {/* Highlights preview */}
            {s.highlights?.length > 0 && (
              <ul className="mt-4 space-y-2 px-5">
                {s.highlights.slice(0, 3).map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200">
                    <span className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full ${s.accent}`}>
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                        <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l8.1-8.1 1.4 1.4z" />
                      </svg>
                    </span>
                    <span className="text-sm">{h}</span>
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
