import Image from "next/image";

export const metadata = {
  title: "Contact | Forber & Sons LTD",
  description:
    "Get in touch with Forber & Sons LTD – phone, email and coverage. Based in Merseyside, working UK-wide.",
};

type IconName = "phone" | "mail" | "map" | "clock";

function Icon({ name }: { name: IconName }) {
  const className = "h-5 w-5";

  switch (name) {
    case "phone":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1.5 1.5 0 011.5-.36c1.15.38 2.39.58 3.65.58a1.5 1.5 0 011.5 1.5V21a1.5 1.5 0 01-1.5 1.5C10.6 22.5 1.5 13.4 1.5 3A1.5 1.5 0 013 1.5H6a1.5 1.5 0 011.5 1.5c0 1.26.2 2.5.58 3.65a1.5 1.5 0 01-.36 1.5L5.6 10.3z" />
        </svg>
      );

    case "mail":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2l8 5 8-5H4z" />
        </svg>
      );

    case "map":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
        </svg>
      );

    case "clock":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2a10 10 0 1010 10A10.012 10.012 0 0012 2zm1 11h5v-2h-4V7h-2z" />
        </svg>
      );
  }
}

function ContactRow({
  icon,
  title,
  children,
}: {
  icon: IconName;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:bg-white/[0.06]">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
          <Icon name={icon} />
        </span>

        <h3 className="font-medium text-white">{title}</h3>
      </div>

      <div className="mt-4 text-sm leading-relaxed text-gray-300">
        {children}
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white">
      {children}
    </span>
  );
}

function ServiceCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]">
      <h2 className="font-semibold text-white">{title}</h2>

      <p className="mt-3 text-sm leading-relaxed text-gray-300">
        {children}
      </p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Main page background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,132,199,0.22) 0%, rgba(15,23,42,0.82) 38%, rgb(2,6,23) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Soft background glow */}
      <div
        className="pointer-events-none absolute left-[-180px] top-20 -z-10 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-3xl"
        aria-hidden="true"
      />

      <section className="relative">
        {/* Hero background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(2,132,199,0.28) 0%, rgba(15,23,42,0.68) 45%, rgba(2,6,23,0.96) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 backdrop-blur-xl" aria-hidden="true" />

        {/* Blend into lower section */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-72"
          style={{
            background:
              "linear-gradient(to bottom, rgba(2,6,23,0) 0%, rgba(2,6,23,0.45) 50%, rgb(2,6,23) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 md:pb-24 md:pt-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            {/* Left-hand content */}
            <div className="min-w-0">
              <p className="text-sm font-medium tracking-[0.18em] text-sky-300">
                Contact
              </p>

              <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
                Let&apos;s talk about your next project
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
                Forber &amp; Sons LTD provides commercial and industrial
                electrical installation, maintenance, testing and remedial works
                across Merseyside and throughout the UK.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>Merseyside based</Pill>
                <Pill>UK-wide coverage</Pill>
                <Pill>NICEIC Approved</Pill>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+447976836255"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-medium text-gray-900 transition hover:-translate-y-0.5 hover:bg-gray-100"
                >
                  Call us
                </a>

                <a
                  href="mailto:forberelectrical@gmail.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Email us
                </a>
              </div>

              {/* Fixed-size contact image */}
              <div className="mt-10 w-full max-w-[660px]">
                <div className="group relative h-[300px] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/20 sm:h-[360px] lg:h-[390px]">
                  <Image
                    src="/ContactPageContent/ben-contact-page.jpeg"
                    alt="Forber and Sons carrying out commercial electrical work"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 660px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-transparent"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    {/* <p className="text-lg font-semibold text-white sm:text-xl">
                      Commercial electrical specialists
                    </p>

                    <p className="mt-1 text-sm text-gray-300">
                      Installation, testing, maintenance and remedial works
                    </p> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Right-hand contact card */}
            <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-8 lg:sticky lg:top-24">
              <h2 className="text-xl font-semibold text-white">Get in touch</h2>

              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                The quickest way to reach us is by phone or email. We&apos;re
                happy to discuss installations, maintenance works, testing,
                remedials and ongoing support.
              </p>

              <div className="mt-6 space-y-4">
                <ContactRow icon="phone" title="Call us">
                  <div className="space-y-1">
                    <a
                      href="tel:+447976836255"
                      className="block font-medium text-white hover:underline"
                    >
                      07976 836255
                    </a>

                    <a
                      href="tel:+447770565936"
                      className="block font-medium text-white hover:underline"
                    >
                      07770 565936
                    </a>
                  </div>
                </ContactRow>

                <ContactRow icon="mail" title="Email us">
                  <a
                    href="mailto:forberelectrical@gmail.com"
                    className="break-all font-medium text-white hover:underline"
                  >
                    forberelectrical@gmail.com
                  </a>

                  <div className="mt-1 text-xs text-gray-400">
                    General enquiries
                  </div>
                </ContactRow>

                <ContactRow icon="map" title="Coverage">
                  <p>Merseyside, North West • UK-wide coverage</p>
                </ContactRow>

                <ContactRow icon="clock" title="Typical hours">
                  <p>Mon–Fri 08:00–17:00</p>

                  <p className="mt-1 text-xs text-gray-400">
                    Emergency and out-of-hours work by arrangement
                  </p>
                </ContactRow>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Lower information cards */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard title="Commercial & Industrial">
              We support a range of sites including factories, warehouses,
              commercial premises and specialist installations.
            </ServiceCard>

            <ServiceCard title="Testing & Maintenance">
              Available for inspection, testing, fault finding, remedials and
              planned electrical maintenance.
            </ServiceCard>

            <ServiceCard title="Need to send drawings or photos?">
              Email over your enquiry, site details or images and we&apos;ll
              review the best way to assist.
            </ServiceCard>
          </div>
        </div>
      </section>
    </main>
  );
}