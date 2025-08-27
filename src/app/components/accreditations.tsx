// src/app/components/accreditations-grid.tsx
import Image from "next/image";
import accreditations from "../data/accreditations"; // [{title, img, href?}]

export default function Accreditations() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Keep your existing headings/text above this section */}
        <div className="text-center">
          <p className="text-sky-300 text-sm tracking-widest">Accreditations</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
            Standards we work to
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Certified, qualified and audited to industry standards.
          </p>
        </div>

        {/* Minimal, box-less logo layout */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-10 gap-y-8 items-center">
          {accreditations.map((a) => {
            const logo = (
              <div
                className="
                  relative mx-auto
                  h-12 md:h-14 w-full
                  transition
                  grayscale opacity-80
                  hover:grayscale-0 hover:opacity-100
                  hover:scale-[1.03]
                "
                aria-label={a.title}
                title={a.title}
              >
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 12vw, (min-width: 640px) 18vw, 40vw"
                  priority={false}
                />
              </div>
            );

            return a.href ? (
              <a
                key={a.title}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {logo}
              </a>
            ) : (
              <div key={a.title}>{logo}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
