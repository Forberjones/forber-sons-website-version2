import Link from "next/link";
import GalleryClient from "./galleryClient";
import { projects } from "../projectData";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);

  if (!p) return null;

  const images = [p.hero, ...(p.gallery ?? [])];

  return (
    <div className="relative min-h-screen text-white bg-[#020617]">
      {/* Smooth blended background (ends in solid base colour) */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,132,199,0.22) 0%, rgba(15,23,42,0.85) 35%, rgb(2,6,23) 100%)",
        }}
        aria-hidden="true"
      />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${p.hero})` }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(2,132,199,0.40) 0%, rgba(15,23,42,0.70) 45%, rgba(2,6,23,0.92) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 backdrop-blur-xl" aria-hidden="true" />

        {/* Header bottom fade (ends in solid base colour to remove seam) */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-72 md:h-96"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(2,6,23,0.35) 40%, rgb(2,6,23) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-40 md:pt-14 md:pb-48">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white ring-1 ring-white/15 hover:bg-white/20 transition"
          >
            ← Back to portfolio
          </Link>

          <div className="mt-6 max-w-3xl">
            <p className="uppercase tracking-[0.25em] text-xs text-white/60">
              Project
            </p>

            <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
              {p.title}
            </h1>

            <p className="mt-3 text-white/70">
              {p.location} • {p.sector}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>📍 {p.location}</Pill>
              <Pill>🏷️ {p.sector}</Pill>
              <Pill>✅ Insured &amp; compliant</Pill>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 -mt-32 md:-mt-40 pb-24">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT TEXT */}
            <div>
              <h2 className="text-xl font-semibold">Overview</h2>

              <p className="mt-4 text-white/80 leading-relaxed">{p.summary}</p>

              {p.highlights?.length ? (
                <>
                  <h3 className="mt-10 text-xl font-semibold">Project scope</h3>

                  <ul className="mt-5 space-y-4 text-white/85">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] leading-none">
                          ✓
                        </span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              <div className="mt-12 flex gap-4 flex-wrap">
                <a
                  href="/contact"
                  className="rounded-full px-6 py-3 bg-white text-gray-900 font-medium hover:opacity-90 transition"
                >
                  Start a project
                </a>

                <Link
                  href="/portfolio"
                  className="rounded-full px-6 py-3 bg-white/10 hover:bg-white/15 ring-1 ring-white/10 transition"
                >
                  View more work
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="md:sticky md:top-24 self-start">
              {/* Carousel */}
              <div className="overflow-hidden rounded-3xl">
                <GalleryClient images={images} title={p.title} />
              </div>

              {/* Optional details block (uncomment if you want it back) */}
              {/*
              <div className="mt-8 space-y-3 text-sm text-white/70">
                <DetailRow label="Location" value={p.location} />
                <DetailRow label="Sector" value={p.sector} />
                <DetailRow label="Service" value="Electrical works" />
              </div>
              */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
      {children}
    </span>
  );
}

// // Keeping this here in case you want the details section back
// function DetailRow({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex justify-between border-b border-white/10 pb-2">
//       <span>{label}</span>
//       <span className="text-white">{value}</span>
//     </div>
//   );
// }