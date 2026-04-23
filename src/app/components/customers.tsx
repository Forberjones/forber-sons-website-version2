"use client";
import Image from "next/image";
import customers from "../data/customers";

export default function Customers() {
  const loop = [...customers, ...customers];

  return (
    <section id="customers" className="bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <p className="text-sky-300 text-sm tracking-widest">Trusted by great teams</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Our Customers</h2>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
          We’re proud to support businesses across the UK with compliant, dependable electrical work.
        </p>

        <div className="mt-8 overflow-hidden fade-mask">
          <ul className="marquee m-0 p-0 list-none flex items-center will-change-transform select-none">
            {loop.map((c, i) => (
              <li
                key={`${c.title}-${i}`}
                className="flex-none flex items-center"
                aria-hidden={i >= customers.length ? true : undefined}
              >
                <Image
                  src={c.img}
                  alt={c.title}
                  width={240}
                  height={48}
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  priority={i < 6}
                />
                <span aria-hidden="true" className="block w-[40px] md:w-[48px] h-px" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}