"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" }, // regular link now (no CTA button)
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const linkClass = (href: string) =>
    [
      "relative px-1 py-2 text-sm text-gray-200 transition",
      "hover:text-white",
      // underline effect (animated blue bar)
      "after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0",
      "after:bg-sky-400 after:transition-[width] after:duration-300",
      pathname?.startsWith(href) ? "after:w-full text-white" : "hover:after:w-full",
    ].join(" ");

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur border-b border-gray-800"
          : "bg-gray-900"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-sans text-lg md:text-xl font-semibold tracking-tight text-white">
          Forber &amp; Sons LTD
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
          {/* Removed the Get a quote button as requested */}
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg border border-gray-700 text-gray-200"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900">
          <nav className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-gray-200 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
