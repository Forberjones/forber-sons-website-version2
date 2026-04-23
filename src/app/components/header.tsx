"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
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
      "after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0",
      "after:bg-sky-400 after:transition-[width] after:duration-300",
      pathname?.startsWith(href)
        ? "after:w-full text-white"
        : "hover:after:w-full",
    ].join(" ");

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        scrolled
          ? "bg-[#020617]/90 backdrop-blur border-b border-white/10"
          : "bg-[#020617]"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
<Link href="/" className="flex items-center h-16">
  <div className="relative h-5 w-[190px] md:h-45 md:w-[220px]">
    <Image
      src="/HomePageContents/F&S_Embroid.png"
      alt="Forber & Sons LTD"
      fill
      className="object-contain object-left"
      priority
    />
  </div>
</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg border border-white/20 text-gray-200"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#020617]">
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