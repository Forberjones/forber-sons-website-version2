"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function GalleryClient({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function to(i: number) {
    const el = trackRef.current?.children[i] as HTMLElement | undefined;
    if (el) el.scrollIntoView({ behavior: "smooth", inline: "start" });
    setIndex(i);
  }
  function next() { to((index + 1) % images.length); }
  function prev() { to((index - 1 + images.length) % images.length); }

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const child = Array.from(el.children) as HTMLElement[];
      const offsets = child.map((c) => Math.abs(c.getBoundingClientRect().left - el.getBoundingClientRect().left));
      const nearest = offsets.indexOf(Math.min(...offsets));
      if (nearest !== -1) setIndex(nearest);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-2xl ring-1 ring-white/10 no-scrollbar"
      >
        {images.map((src, i) => (
          <div key={i} className="relative snap-start shrink-0 w-full aspect-[16/10]">
            <Image src={src} alt={`${title} image ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white hover:bg-black/70"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white hover:bg-black/70"
          >
            ›
          </button>

          <div className="mt-3 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => to(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
