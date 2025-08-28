export const metadata = {
  title: "Contact | Forber & Sons LTD",
  description:
    "Get in touch with Forber & Sons LTD – phone, email and address. Based in Merseyside, working UK-wide.",
};

function Icon({ name }: { name: "phone" | "mail" | "map" | "clock" }) {
  const cls = "h-5 w-5";
  switch (name) {
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1.5 1.5 0 011.5-.36c1.15.38 2.39.58 3.65.58a1.5 1.5 0 011.5 1.5V21a1.5 1.5 0 01-1.5 1.5C10.6 22.5 1.5 13.4 1.5 3A1.5 1.5 0 013 1.5H6a1.5 1.5 0 011.5 1.5c0 1.26.2 2.5.58 3.65a1.5 1.5 0 01-.36 1.5l-2.12 2.15z"/>
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2l8 5 8-5H4z"/>
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M12 2a10 10 0 1010 10A10.012 10.012 0 0012 2zm1 11h5v-2h-4V7h-2z"/>
        </svg>
      );
  }
}

export default function Page() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Header */}
        <div className="text-center">
          <p className="text-sky-300 text-sm tracking-widest">Contact</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">
            Let’s talk about your project
          </h1>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Based in Merseyside • Available across the UK • NICEIC Approved
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Phone */}
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <Icon name="phone" />
              </span>
              <h2 className="text-white font-semibold">Call us</h2>
            </div>
            <p className="mt-3 text-gray-300">
              Mon–Fri, 8:00–17:00 (out-of-hours by arrangement)
            </p>
            <div className="mt-4 space-y-1">
              <a href="tel:+447976836255" className="text-white hover:underline">
                07976 836255 <br></br> 07770 565936
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <Icon name="mail" />
              </span>
              <h2 className="text-white font-semibold">Email us</h2>
            </div>
            <div className="mt-4 space-y-1">
              <a href="mailto:info@forberandsons.co.uk" className="text-white hover:underline">
                forberelectrical@gmail.com
              </a>
              <div className="text-gray-400 text-sm">General enquiries</div>
            </div>
          </div>

          {/* Address / Coverage */}
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <Icon name="map" />
              </span>
              <h2 className="text-white font-semibold">Where we are</h2>
            </div>
            <p className="mt-3 text-gray-300">
              Merseyside, North West • UK-wide coverage
            </p>
            <address className="not-italic mt-4 text-gray-300">
              Forber &amp; Sons LTD<br />
            </address>
          </div>
        </div>

        {/* Hours + CTA strip */}
        <div className="mt-8 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <Icon name="clock" />
            </span>
            <div>
              <div className="text-white font-medium">Typical hours</div>
              <div className="text-gray-300 text-sm">
                Mon–Fri 08:00–17:00 • Emergency/OOH by arrangement
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:forberelectrical@gmail.com"
              className="inline-flex items-center justify-center rounded-full px-5 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              Email us
            </a>
          </div>
        </div>

        {/* Optional: embedded map (comment out if not needed) */}
        {/* 
        <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-white/10">
          <iframe
            className="w-full h-72"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!..."
          />
        </div>
        */}
      </div>
    </section>
  );
}
