import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getService,
  getServiceSlugs,
} from "../../components/servicesData";

type Params = {
  slug: string;
};

type ContentSection = {
  title: string;
  paragraphs: string[];
};

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  return {
    title: service
      ? `${service.title} | Forber & Sons LTD`
      : "Service | Forber & Sons LTD",
    description: service?.short ?? "",
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const contentSections = createContentSections(service.body ?? []);

  const images =
    service.gallery?.length
      ? service.gallery
      : service.heroImage
        ? [service.heroImage]
        : ["/HomePageContents/grey-background-test.jpg"];

  const primaryImage =
    service.heroImage ??
    images[0] ??
    "/HomePageContents/grey-background-test.jpg";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Existing navy and blue background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,132,199,0.20) 0%, rgba(15,23,42,0.82) 35%, rgb(2,6,23) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(2,132,199,0.16) 0%, rgba(15,23,42,0.35) 45%, rgba(2,6,23,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Soft decorative glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pb-24 md:pt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back to services
          </Link>

          <div className="mt-9 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            {/* Hero text */}
            <div>
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${service.accent}`}
                >
                  {service.icon}
                </span>

                <p className="text-xs font-medium uppercase tracking-[0.24em] text-sky-300">
                  Electrical services
                </p>
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                {service.short}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <Pill>NICEIC Approved</Pill>
                <Pill>Professional service</Pill>
                <Pill>Clear documentation</Pill>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-white/90"
                >
                  {service.ctaLabel ?? "Request a quotation"}
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 font-medium text-white ring-1 ring-white/15 transition hover:bg-white/10"
                >
                  View all services
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-sky-500/10 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 shadow-2xl shadow-black/30">
                <Image
                  src={primaryImage}
                  alt={service.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHT CARDS */}
        {service.highlights?.length > 0 && (
          <section className="mx-auto max-w-6xl px-4">
            <div className="grid gap-4 md:grid-cols-3">
              {service.highlights.map((highlight, index) => (
                <article
                  key={`${highlight}-${index}`}
                  className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 backdrop-blur-xl transition hover:bg-white/[0.06] hover:ring-white/15"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${service.accent}`}
                    >
                      <CheckIcon />
                    </span>

                    <span className="text-xs font-semibold tracking-[0.18em] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-5 leading-7 text-gray-200">
                    {highlight}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* INTRODUCTION */}
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
              About this service
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Professional electrical support from start to finish
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              We provide clear advice, professional workmanship and the
              appropriate certification for the work completed. Every service
              is planned around the property, installation and operational
              requirements of the client.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        {contentSections.length > 0 && (
          <section className="mx-auto max-w-6xl space-y-20 px-4 py-14 md:space-y-28 md:py-20">
            {contentSections.map((section, index) => {
              const image = images[index % images.length];
              const reverse = index % 2 === 1;

              return (
                <article
                  key={`${section.title}-${index}`}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Text */}
                  <div className={reverse ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${service.accent}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="h-px w-12 bg-white/15" />
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                      {section.title}
                    </h2>

                    <div className="mt-5 space-y-4 text-base leading-8 text-gray-300">
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={`${paragraphIndex}-${paragraph}`}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className={reverse ? "lg:order-1" : ""}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 shadow-xl shadow-black/20">
                      <Image
                        src={image}
                        alt={`${section.title} – ${service.title}`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/5" />
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        )}

        {/* ALL SERVICE IMAGES */}
        {images.length > 1 && (
          <section className="mx-auto max-w-6xl px-4 py-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                  Our work
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Service gallery
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-gray-400">
                Examples relating to our inspection, testing, maintenance and
                installation services.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {images.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className={`relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 ${
                    index === 0 && images.length >= 3
                      ? "md:col-span-2 aspect-[16/7]"
                      : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${service.title} image ${index + 1}`}
                    fill
                    sizes={
                      index === 0 && images.length >= 3
                        ? "100vw"
                        : "(min-width: 768px) 50vw, 100vw"
                    }
                    className="object-cover transition duration-500 hover:scale-[1.02]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* WHY CHOOSE US */}
        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                  Forber & Sons
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  A reliable and professional service
                </h2>

                <p className="mt-4 leading-7 text-gray-400">
                  From the initial discussion through to completion, we aim to
                  make electrical work straightforward, clearly documented and
                  easy to manage.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <ReasonCard
                  number="01"
                  title="Clear communication"
                  description="We explain the proposed work, findings and next steps in straightforward terms."
                />

                <ReasonCard
                  number="02"
                  title="Minimal disruption"
                  description="Work is planned around your property, staff and normal operating requirements."
                />

                <ReasonCard
                  number="03"
                  title="Professional documentation"
                  description="Relevant reports, test results and certification are provided on completion."
                />

                <ReasonCard
                  number="04"
                  title="Ongoing support"
                  description="Where further or remedial work is needed, we can provide practical recommendations."
                />
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mx-auto max-w-6xl px-4 py-24">
          <div className="relative overflow-hidden rounded-3xl bg-white/[0.05] px-6 py-12 ring-1 ring-white/10 md:px-12 md:py-16">
            <div
              className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-500/15 blur-[100px]"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-blue-500/10 blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                Speak to Forber & Sons
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                Need help with this service?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-gray-300">
                Tell us about the property and the work required. We will
                discuss the most suitable approach and provide a clear
                quotation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-white/90"
                >
                  {service.ctaLabel ?? "Request a quotation"}
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 font-medium text-white ring-1 ring-white/15 transition hover:bg-white/10"
                >
                  Explore other services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/**
 * Converts the existing body array into proper sections.
 *
 * Any string beginning with ✅ becomes a section title.
 * The strings after it become the paragraphs for that section.
 */
function createContentSections(body: string[]): ContentSection[] {
  const sections: ContentSection[] = [];

  let currentSection: ContentSection | null = null;

  body.forEach((item) => {
    const trimmedItem = item.trim();

    if (!trimmedItem) {
      return;
    }

    if (trimmedItem.startsWith("✅")) {
      if (currentSection) {
        sections.push(currentSection);
      }

      currentSection = {
        title: trimmedItem.replace(/^✅\s*/, ""),
        paragraphs: [],
      };

      return;
    }

    if (!currentSection) {
      currentSection = {
        title: "Service overview",
        paragraphs: [],
      };
    }

    currentSection.paragraphs.push(trimmedItem);
  });

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}

function Pill({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/90 ring-1 ring-white/15">
      {children}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9 16.2 5.5 12.7l1.4-1.4L9 13.4l8.1-8.1 1.4 1.4z" />
    </svg>
  );
}

function ReasonCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
      <span className="text-xs font-semibold tracking-[0.18em] text-sky-300">
        {number}
      </span>

      <h3 className="mt-3 font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        {description}
      </p>
    </article>
  );
}