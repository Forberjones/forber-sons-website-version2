import Image from "next/image";
import Link from "next/link";
import {
  getService,
  getServiceSlugs,
} from "../../components/servicesData"; // <- your existing data file
import Gallery from "../../components/Gallery"; // 👈 add this import

type Params = { slug: string };

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

// Next.js async params: await them
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
    <article className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6">
          <Link href="/services" className="text-sm text-gray-300 hover:text-white">
            ← Back to services
          </Link>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* Left: text */}
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-gray-400">Service</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">{s.title}</h1>
            <p className="mt-3 text-gray-300">{s.short}</p>

            {/* Highlights */}
            {s.highlights?.length > 0 && (
              <ul className="mt-6 space-y-2 text-gray-200">
                {s.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full ${s.accent}`}
                    >
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                        <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l8.1-8.1 1.4 1.4z" />
                      </svg>
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Body */}
            {s.body?.length > 0 && (
              <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white text-gray-900 font-medium hover:opacity-90"
              >
                {s.ctaLabel ?? "Contact us"}
              </a>
            </div>
          </div>

          {/* Right: image */}
{/* Right: gallery or fallback image */}
<div className="relative w-full">
  {s.gallery?.length ? (
    <Gallery images={s.gallery} title={s.title} />
  ) : (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
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
</div>

        </div>
      </div>
    </article>
  );
}
