"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { projects } from "./projectData";

type Layout = {
  cols: 1 | 2 | 3;
  rows: 3;
  pageSize: number; // cols * rows
};

export default function PortfolioCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pageIndex, setPageIndex] = useState(0);

  const layout = usePagedGridLayout();
  const pages = useMemo(() => chunk(projects, layout.pageSize), [layout.pageSize]);
  const totalPages = pages.length;

  const pageWidthRef = useRef<number>(0);

  // Arrow enabled/disabled
  const canPrev = pageIndex > 0;
  const canNext = pageIndex < totalPages - 1;

  // Measure a single page width (so scroll syncing is accurate)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const firstPage = track.querySelector<HTMLElement>("[data-page]");
      if (!firstPage) return;
      pageWidthRef.current = firstPage.getBoundingClientRect().width;
    };

    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(track);
    return () => ro.disconnect();
  }, [layout.pageSize]);

  const scrollToPage = useCallback(
    (p: number) => {
      const clamped = Math.max(0, Math.min(p, totalPages - 1));
      const el = trackRef.current;
      if (!el) return;

      const pageEls = el.querySelectorAll<HTMLElement>("[data-page]");
      const target = pageEls[clamped];
      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });

      setPageIndex(clamped);
    },
    [totalPages]
  );

  const next = useCallback(() => scrollToPage(pageIndex + 1), [pageIndex, scrollToPage]);
  const prev = useCallback(() => scrollToPage(pageIndex - 1), [pageIndex, scrollToPage]);

  // Sync page index while user scrolls/drags
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const w = pageWidthRef.current;
      if (!w) return;

      const nextIndex = Math.round(el.scrollLeft / w);
      setPageIndex((prev) => (prev === nextIndex ? prev : nextIndex));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section className="relative overflow-hidden bg-[#020617]">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,132,199,0.18) 0%, rgba(15,23,42,0.78) 40%, rgb(2,6,23) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-center text-sky-300 text-sm tracking-widest">Selected Work</p>
        <h1 className="mt-2 text-center text-3xl md:text-4xl font-semibold text-white">
          Portfolio
        </h1>
        <p className="mt-3 text-center text-gray-300 max-w-2xl mx-auto">
          Swipe or use the arrows to browse a few recent projects.
        </p>

        <div className="relative mt-8">
          {/* Track (pages) */}
          <div
            ref={trackRef}
            className="no-scrollbar flex gap-[3px] snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth px-[1px]"
            aria-label="Portfolio projects"
          >
            {pages.map((pageProjects, pageNo) => (
              <div
                key={pageNo}
                data-page
                className="snap-start shrink-0 w-full pb-2"
              >
                <div
                  className={[
                    "grid gap-4 md:gap-6",
                    layout.cols === 1 ? "grid-cols-1" : "",
                    layout.cols === 2 ? "grid-cols-1 sm:grid-cols-2" : "",
                    layout.cols === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "",
                  ].join(" ")}
                >
                  {pageProjects.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/portfolio/${p.slug}`}
                      className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 hover:bg-white/[0.08] transition"
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
              </div>
            ))}
          </div>

          {/* Controls */}
          {totalPages > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                disabled={!canPrev}
                aria-label="Previous projects"
                className={[
                  "absolute -left-6 md:-left-10 lg:-left-14 top-1/2 -translate-y-1/2 z-10",
                  "grid h-11 w-11 place-items-center rounded-full",
                  "bg-black/50 backdrop-blur-md",
                  "text-white/90 hover:text-white",
                  "ring-1 ring-white/15 hover:ring-white/25",
                  "shadow-lg shadow-black/30",
                  "transition active:scale-95",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70",
                  "disabled:opacity-30 disabled:hover:ring-white/15 disabled:cursor-not-allowed",
                ].join(" ")}
              >
                <span className="text-2xl leading-none">‹</span>
              </button>

              <button
                type="button"
                onClick={next}
                disabled={!canNext}
                aria-label="Next projects"
                className={[
                  "absolute -right-6 md:-right-10 lg:-right-14 top-1/2 -translate-y-1/2 z-10",
                  "grid h-11 w-11 place-items-center rounded-full",
                  "bg-black/50 backdrop-blur-md",
                  "text-white/90 hover:text-white",
                  "ring-1 ring-white/15 hover:ring-white/25",
                  "shadow-lg shadow-black/30",
                  "transition active:scale-95",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70",
                  "disabled:opacity-30 disabled:hover:ring-white/15 disabled:cursor-not-allowed",
                ].join(" ")}
              >
                <span className="text-2xl leading-none">›</span>
              </button>

              {/* Page dots */}
              <div className="mt-6 flex justify-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToPage(i)}
                    aria-label={`Go to page ${i + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === pageIndex ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * Responsive layout:
 * - lg: 3 cols x 3 rows = 9 per page
 * - sm/md: 2 cols x 3 rows = 6 per page
 * - mobile: 1 col x 3 rows = 3 per page
 */
function usePagedGridLayout(): Layout {
  const [layout, setLayout] = useState<Layout>({ cols: 1, rows: 3, pageSize: 3 });

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      const cols: 1 | 2 | 3 = w >= 1024 ? 3 : w >= 640 ? 2 : 1;
      const rows: 3 = 3;
      setLayout({ cols, rows, pageSize: cols * rows });
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return layout;
}

function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) return [arr];
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}