import Image from "next/image";

export default function ContactCta() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16 grid items-center gap-10 md:grid-cols-2">
        {/* Left: image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
          {/* Replace with your own image in /public */}
          <Image
            src="/HomePageContents/IMG_4194.jpg"
            alt="Forber & Sons on-site"
            fill
            className="object-cover"
            priority
          />
          {/* subtle gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/20" />
        </div>

        {/* Right: text + contacts */}
        <div className="relative">
          {/* vertical accent line like NICEIC section */}
          <span className="absolute -left-4 top-0 hidden h-full w-px bg-white/20 sm:block" />

          <p className="uppercase tracking-[0.2em] text-xs text-gray-400">Contact</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
            Based in the North West — Working Across the UK
          </h2>

          <p className="mt-5 text-gray-300 leading-relaxed">
            Although we’re proudly based in the North West, our team regularly travels nationwide.
            From routine maintenance to full installations, we’re happy to support projects across
            the UK.
          </p>

          {/* Bullets with a simple UK/map icon */}
          <ul className="mt-6 space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/15 text-sky-300 ring-1 ring-white/10">
                {/* Map pin / UK-ish vibe */}
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                </svg>
              </span>
              <div>
                <div className="text-white font-medium">Nationwide Coverage</div>
                <div className="text-sm text-gray-400">North West base • UK-wide projects</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-white/10">
                {/* Van / delivery vibe */}
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M3 6h11v6h3l4 3v3h-2a3 3 0 1 1-6 0H9a3 3 0 1 1-6 0H1v-9a3 3 0 0 1 2-3zm2 12a1.5 1.5 0 1 0 3.001.001A1.5 1.5 0 0 0 5 18zm11 0a1.5 1.5 0 1 0 3.001.001A1.5 1.5 0 0 0 16 18z"/>
                </svg>
              </span>
              <div>
                <div className="text-white font-medium">Flexible Scheduling</div>
                <div className="text-sm text-gray-400">Commercial & industrial installations</div>
              </div>
            </li>
          </ul>

          {/* Contact methods */}
          <div className="mt-8 grid gap-3 sm:flex sm:items-center sm:gap-6">
            <a
              href="mailto:info@forberelectrical.co.uk"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-gray-200 hover:bg-white/10"
            >
              {/* mail */}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12H2V6zm2 .5l8 5 8-5V6H4v.5z"/>
              </svg>
              forberelectrical@gmail.com
            </a>

            <a
              href="tel:+44151XXXXXXX"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-gray-200 hover:bg-white/10"
            >
              {/* phone */}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.55 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 8a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1 11 11 0 0 0 .55 3.5 1 1 0 0 1-.25 1l-1.2 1.3z"/>
              </svg>
              07976 836255 | 07770 565936
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
