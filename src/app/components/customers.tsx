"use client";

import Image from "next/image";
import customers from "../data/customers";

export default function Customers() {
  return (
    <section id="customers" className="bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <p className="text-sky-300 text-sm tracking-widest">
          Trusted by great teams
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">
          Our Customers
        </h2>

        <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
          We’re proud to support businesses across the UK with compliant,
          dependable electrical work.
        </p>

        <div className="mt-8 overflow-hidden fade-mask">
          <div className="marquee flex w-max">
            <div className="flex shrink-0 items-center">
              {customers.map((customer) => (
                <div
                  key={customer.title}
                  className="relative mx-6 h-12 w-[200px] md:w-[240px] shrink-0"
                >
                  <Image
                    src={customer.img}
                    alt={customer.title}
                    fill
                    sizes="(max-width: 768px) 200px, 240px"
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                    priority
                  />
                </div>
              ))}
            </div>

            <div
              className="flex shrink-0 items-center"
              aria-hidden="true"
            >
              {customers.map((customer) => (
                <div
                  key={`${customer.title}-duplicate`}
                  className="relative mx-6 h-12 w-[200px] md:w-[240px] shrink-0"
                >
                  <Image
                    src={customer.img}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 200px, 240px"
                    className="object-contain opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}