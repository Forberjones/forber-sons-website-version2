"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { projects } from "./projectData";

export default function PortfolioCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const visible = useVisibleCards(); // 1 / 2 / 3 based on viewport

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(projects.length / visible)),
    [visible]
  );

  // width of one card incl. gap
  const cardStep = useRef<number>(0);

  useEffect(() => {
    const first = trackRef.current?.querySelector<HTMLElement>("[data-card]");
    const track = trackRef.current;
    if (!first || !track) return;

    const styles = getComputedStyle(track);
    // Read computed CSS safely (no `any`)
    const gapStr =
      styles.getPropertyValue("gap") ||
      styles.getPropertyValue("column-gap") ||
      "0";
    const gap = parseFloat(gapStr) || 0;

    cardStep.current = first.getBoundingClientRect().width + gap;
  }, [visible]);

  const scrollToPage = useCallback(
    (p: number) => {
      const clamped = Math.max(0, Math.min(p, totalPages - 1));
      const el = trackRef.current;
      if (!el || !cardStep.current) return;
      const left = clamped * cardStep.current * visible;
      el.scrollTo({ left, behavior: "smooth" });
      setPageIndex(clamped);
    },
    [totalPages, visible]
  );

  const next = useCallback(() => scrollToPage(pageIndex + 1), [pageIndex, scrollToPage]);
  const prev = useCallback(() => scrollToPage(pageIndex - 1), [pageIndex, scrollToPage]);

  // Sync page index while user drags
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      if (!cardStep.current) return;
      const perPage = cardStep.current * visible;
      setPageIndex(Math.round(el.scrollLeft / perPage));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [visible]);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]); // include callbacks to satisfy ESLint

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-center text-sky-300 text-sm tracking-widest">Selected Work</p>
        <h1 className="mt-2 text-center text-3xl md:text-4xl font-semibold text-white">
          Portfolio
        </h1>
        <p className="mt-3 text-center text-gray-300 max-w-2xl mx-auto">
          Swipe or use the arrows to browse a few recent projects.
        </p>

        <div className="relative mt-8">
          {/* Track */}
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth gap-4 md:gap-6 pb-2"
            aria-label="Portfolio projects"
          >
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                data-card
                className="group relative snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[46%] lg:w-[32%] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 hover:bg-white/[0.08] transition"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image src={p.hero} alt={p.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-white font-medium">{p.title}</div>
                  <div className="text-sm text-gray-400">
                    {p.location ? `${p.location} • ` : ""}
                    {p.sector ?? ""}
                  </div>
                  <p className="mt-2 text-sm text-gray-300 line-clamp-2">{p.summary}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sky-300 text-sm">
                    View project
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M10 17l5-5-5-5v10z" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            aria-label="Previous projects"
            className="absolute -left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 ring-1 ring-white/10"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next projects"
            className="absolute -right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 ring-1 ring-white/10"
          >
            ›
          </button>

          {/* Page dots */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === pageIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function useVisibleCards() {
  const [v, setV] = useState<number>(1);
  useEffect(() => {
    const mq = () => {
      if (window.innerWidth >= 1024) setV(3); // lg
      else if (window.innerWidth >= 768) setV(2); // md
      else setV(1); // mobile
    };
    mq();
    window.addEventListener("resize", mq);
    return () => window.removeEventListener("resize", mq);
  }, []);
  return v;
}
