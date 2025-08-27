import Link from "next/link";

type Service = {
  label: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
  accent: string;
};

const items: Service[] = [
  {
    label: "NICEIC Reports",
    desc: "EICR for commercial & industrial properties.",
    href: "/services/niceic-reports",
    accent: "bg-sky-500/15 text-sky-300",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M7 2h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V8h4.5L14 3.5zM9.4 13.3l1.6 1.6 3.9-3.9 1.1 1.1-5 5-2.7-2.7 1.1-1.1z"/>
      </svg>
    ),
  },
  {
    label: "Fixed Wiring Inspection & Testing",
    desc: "BS 7671:2018+A2:2022 compliance testing.",
    href: "/services/fixed-wiring-testing",
    accent: "bg-amber-500/15 text-amber-300",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M13 2l-2 6h4l-4 8 2-6H9l4-8zM4 20h16v2H4z"/>
      </svg>
    ),
  },
  {
    label: "Fire Alarm & Emergency Light Testing",
    desc: "Routine tests, logs & remedials.",
    href: "/services/fire-alarms-emergency-lighting",
    accent: "bg-rose-500/15 text-rose-300",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zm6-6V11a6 6 0 0 0-5-5.91V4a1 1 0 1 0-2 0v1.09A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2z"/>
      </svg>
    ),
  },
  {
    label: "General Maintenance",
    desc: "Repairs, upgrades & small works.",
    href: "/services/general-maintenance",
    accent: "bg-emerald-500/15 text-emerald-300",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M22 7.46a5.5 5.5 0 0 1-7.66 6.92L7.41 21.3a2 2 0 1 1-2.83-2.83l6.92-6.93A5.5 5.5 0 0 1 16.54 2a3.5 3.5 0 0 0 3.6 3.6c.68.02 1.34.16 1.86.46z"/>
      </svg>
    ),
  },
  {
    label: "PAT Testing",
    desc: "Portable Appliance Testing for compliance and safety.",
    href: "/services/pat-testing",
    accent: "bg-purple-500/15 text-purple-300",
    icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M12 2l7 4v6c0 5-3.6 9.4-7 10-3.4-.6-7-5-7-10V6l7-4zm-1 13l5-5-1.4-1.4L11 12.2l-1.6-1.6L8 12l3 3z"/>
    </svg>
    ),
  },
  {
    label: "Domestic Installations",
    desc: "Fuse board changes & EV Car Chargers",
    href: "/services/domestic-installations",
    accent: "bg-indigo-500/15 text-indigo-300",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 3l9 9h-3v9H6v-9H3l9-9z"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-center text-sky-300 text-sm tracking-widest">Safe • Compliant • Professional</p>
        <h2 className="mt-2 text-center text-3xl md:text-4xl font-semibold text-white">Services we offer</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative flex items-center gap-4 rounded-full bg-white/5 px-5 py-5 ring-1 ring-white/10 hover:bg-white/7.5 hover:ring-white/20 transition"
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${s.accent}`}>
                {s.icon}
              </span>

              <div className="min-w-0">
                <div className="text-white font-medium truncate">{s.label}</div>
                <div className="text-gray-300 text-sm truncate">{s.desc}</div>
              </div>

              <span className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/80" fill="currentColor">
                  <path d="M10 17l5-5-5-5v10z"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
