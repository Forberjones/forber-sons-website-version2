export const metadata = {
  title: "Contact | Forber & Sons LTD",
  description:
    "Get in touch with Forber & Sons LTD – phone, email and coverage. Based in Merseyside, working UK-wide.",
};

function Icon({ name }: { name: "phone" | "mail" | "map" | "clock" }) {
  const cls = "h-5 w-5";
  switch (name) {
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1.5 1.5 0 011.5-.36c1.15.38 2.39.58 3.65.58a1.5 1.5 0 011.5 1.5V21a1.5 1.5 0 01-1.5 1.5C10.6 22.5 1.5 13.4 1.5 3A1.5 1.5 0 013 1.5H6a1.5 1.5 0 011.5 1.5c0 1.26.2 2.5.58 3.65a1.5 1.5 0 01-.36 1.5l-2.12 2.15z" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2l8 5 8-5H4z" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
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
  icon: "phone" | "mail" | "map" | "clock";
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-5">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
          <Icon name={icon} />
        </span>
        <h3 className="text-white font-medium">{title}</h3>
      </div>
      <div className="mt-4 text-gray-300">{children}</div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/10">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <div className="relative min-h-screen text-white bg-[#020617]">
      {/* Blended page background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,132,199,0.22) 0%, rgba(15,23,42,0.82) 35%, rgb(2,6,23) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(2,132,199,0.30) 0%, rgba(15,23,42,0.65) 45%, rgba(2,6,23,0.95) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 backdrop-blur-xl" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-72 md:h-96"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(2,6,23,0.25) 40%, rgb(2,6,23) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-24 md:pt-20 md:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            {/* Left */}
            <div className="max-w-3xl">
              <p className="text-sky-300 text-sm tracking-widest">Contact</p>
              <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight text-white">
                Let’s talk about your next project
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-gray-300 leading-relaxed">
                Forber &amp; Sons LTD provides commercial and industrial electrical
                installation, maintenance, testing and remedial works across
                Merseyside and throughout the UK.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>Merseyside based</Pill>
                <Pill>UK-wide coverage</Pill>
                <Pill>NICEIC Approved</Pill>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+447976836255"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white text-gray-900 font-medium hover:opacity-90 transition"
                >
                  Call us
                </a>
                <a
                  href="mailto:forberelectrical@gmail.com"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15 transition"
                >
                  Email us
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-3xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-6 md:p-8">
              <h2 className="text-xl font-semibold text-white">Get in touch</h2>
              <p className="mt-2 text-gray-300">
                The quickest way to reach us is by phone or email. We’re happy to
                discuss installations, maintenance works, testing, remedials and
                ongoing support.
              </p>

              <div className="mt-6 space-y-4">
                <ContactRow icon="phone" title="Call us">
                  <div className="space-y-1">
                    <a href="tel:+447976836255" className="block text-white hover:underline">
                      07976 836255
                    </a>
                    <a href="tel:+447770565936" className="block text-white hover:underline">
                      07770 565936
                    </a>
                  </div>
                </ContactRow>

                <ContactRow icon="mail" title="Email us">
                  <a
                    href="mailto:forberelectrical@gmail.com"
                    className="text-white hover:underline break-all"
                  >
                    forberelectrical@gmail.com
                  </a>
                  <div className="mt-1 text-sm text-gray-400">General enquiries</div>
                </ContactRow>

                <ContactRow icon="map" title="Coverage">
                  <div>Merseyside, North West • UK-wide coverage</div>
                </ContactRow>

                <ContactRow icon="clock" title="Typical hours">
                  <div>Mon–Fri 08:00–17:00</div>
                  <div className="mt-1 text-sm text-gray-400">
                    Emergency / out-of-hours by arrangement
                  </div>
                </ContactRow>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Lower section */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pb-24">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
              <div className="text-white font-semibold">Commercial & Industrial</div>
              <p className="mt-3 text-gray-300">
                We support a range of sites including factories, warehouses,
                commercial premises and specialist installations.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
              <div className="text-white font-semibold">Testing & Maintenance</div>
              <p className="mt-3 text-gray-300">
                Available for inspection, testing, fault finding, remedials and
                planned electrical maintenance.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
              <div className="text-white font-semibold">Need to send drawings or photos?</div>
              <p className="mt-3 text-gray-300">
                Email over your enquiry, site details or images and we’ll review
                the best way to assist.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}