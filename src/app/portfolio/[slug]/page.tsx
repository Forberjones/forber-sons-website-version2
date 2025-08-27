import Link from "next/link";
import GalleryClient from "./galleryClient";
import { projects } from "../projectData"; // or "../projectsData" if that's your filename

type Params = { slug: string };

// If you use static params, this stays the same
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ✅ params is a Promise now — await it
export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return {
    title: p ? `${p.title} | Forber & Sons LTD` : "Project | Forber & Sons LTD",
    description: p?.summary ?? "",
  };
}

// ✅ same here — await params
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);

  if (!p) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-white">
        Project not found.
      </div>
    );
  }

  const images = [p.hero, ...(p.gallery ?? [])];

  return (
    <article className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6">
          <Link href="/portfolio" className="text-sm text-gray-300 hover:text-white">
            ← Back to portfolio
          </Link>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* Left: copy */}
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-gray-400">Project</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">{p.title}</h1>
            <p className="mt-2 text-gray-400 text-sm">
              {p.location ? `${p.location} • ` : ""}{p.sector ?? ""}
            </p>
            <p className="mt-4 text-gray-300">{p.summary}</p>

            <ul className="mt-6 space-y-2 text-gray-200">
              {p.highlights?.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                      <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l8.1-8.1 1.4 1.4z" />
                    </svg>
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white text-gray-900 font-medium hover:opacity-90"
              >
                Start a project
              </a>
            </div>
          </div>

          {/* Right: gallery (client component) */}
          <GalleryClient images={images} title={p.title} />
        </div>
      </div>
    </article>
  );
}
