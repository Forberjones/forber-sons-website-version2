"use client";
import Image from "next/image";
import customers from "../data/customers";

export default function Customers() {
  // Duplicate once for seamless loop
  const loop = [...customers, ...customers];

  return (
    <section id="customers" className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <p className="text-sky-300 text-sm tracking-widest">Trusted by great teams</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Our Customers</h2>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
          We’re proud to support businesses across the UK with compliant, dependable electrical work.
        </p>

        {/* marquee container with a soft fade on the edges */}
        <div className="mt-8 overflow-hidden fade-mask">
          <div className="marquee flex items-center gap-10">
            {loop.map((c, i) => (
              <div key={`${c.title}-${i}`} className="shrink-0">
                <Image
                  src={c.img}
                  alt={c.title}
                  width={160}
                  height={80}
                  className="h-16 w-auto max-w-[240px] object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* optional: small note or CTA */}
        {/* <p className="mt-6 text-xs text-gray-400">Logos are for illustration; trademarks are property of their owners.</p> */}
      </div>
    </section>
  );
}