import Image from "next/image";
import Link from "next/link";
import {
  getService,
  getServiceSlugs,
} from "../../components/servicesData";
import Gallery from "../../components/Gallery";

type Params = { slug: string };

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  return {
    title: s ? `${s.title} | Forber & Sons LTD` : "Service | Forber & Sons LTD",
    description: s?.short ?? "",
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const s = getService(slug);

  if (!s) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-white">
        Service not found.
      </div>
    );
  }

  return (
    <article className="relative min-h-screen text-white bg-[#020617]">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,132,199,0.20) 0%, rgba(15,23,42,0.82) 35%, rgb(2,6,23) 100%)",
        }}
        aria-hidden="true"
      />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${s.heroImage ?? "/HomePageContents/grey-background-test.jpg"})`,
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(2,132,199,0.30) 0%, rgba(15,23,42,0.68) 45%, rgba(2,6,23,0.94) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 backdrop-blur-xl" aria-hidden="true" />

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
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white ring-1 ring-white/15 hover:bg-white/20 transition"
          >
            ← Back to services
          </Link>

          <div className="mt-6 max-w-3xl">
            <p className="uppercase tracking-[0.25em] text-xs text-white/60">
              Service
            </p>

            <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
              {s.title}
            </h1>

            <p className="mt-3 text-white/75 text-lg">{s.short}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Commercial & industrial</Pill>
              <Pill>NICEIC Approved</Pill>
              <Pill>UK-wide coverage</Pill>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 -mt-28 md:-mt-36 pb-24">
          <div className="rounded-3xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 shadow-2xl shadow-black/25">
            <div className="grid gap-12 p-6 md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
              {/* LEFT */}
              <div className="min-w-0">
                <h2 className="text-xl font-semibold">Overview</h2>

                {s.highlights?.length > 0 && (
                  <ul className="mt-5 space-y-3 text-white/85">
                    {s.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${s.accent}`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-3 w-3"
                            fill="currentColor"
                          >
                            <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l8.1-8.1 1.4 1.4z" />
                          </svg>
                        </span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.body?.length > 0 && (
                  <div className="mt-8 space-y-5 text-gray-300 leading-relaxed">
                    {s.body.map((p, i) => {
                      const isSectionHeading = p.startsWith("✅");
                      return isSectionHeading ? (
                        <h3
                          key={i}
                          className="text-white text-lg font-semibold pt-2"
                        >
                          {p.replace("✅", "").trim()}
                        </h3>
                      ) : (
                        <p key={i}>{p}</p>
                      );
                    })}
                  </div>
                )}

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white text-gray-900 font-medium hover:opacity-90 transition"
                  >
                    {s.ctaLabel ?? "Contact us"}
                  </a>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15 transition"
                  >
                    View all services
                  </Link>
                </div>
              </div>

              {/* RIGHT */}
              <div className="min-w-0 md:sticky md:top-24 self-start">
                {s.gallery?.length ? (
                  <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-black/15">
                    <Gallery images={s.gallery} title={s.title} />
                  </div>
                ) : (
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-black/15">
                    <Image
                      src={s.heroImage ?? "/HomePageContents/grey-background-test.jpg"}
                      alt={s.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/20" />
                  </div>
                )}

                <div className="mt-5 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-5">
                  <div className="text-sm font-semibold">Service details</div>

                  <dl className="mt-3 space-y-2 text-sm text-white/75">
                    <div className="flex justify-between gap-6">
                      <dt>Category</dt>
                      <dd className="text-white/90">Electrical service</dd>
                    </div>
                    <div className="flex justify-between gap-6">
                      <dt>Coverage</dt>
                      <dd className="text-white/90">UK-wide</dd>
                    </div>
                    <div className="flex justify-between gap-6">
                      <dt>Support</dt>
                      <dd className="text-white/90">Commercial & industrial</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/15 text-white/90">
      {children}
    </span>
  );
}