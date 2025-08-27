export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-5 flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Forber &amp; Sons LTD. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-4 text-xs">
          <a href="mailto:forberelectrical@gmail.com" className="text-gray-300 hover:text-white">
            forberelectrical@gmail.com
          </a>
          <span className="text-gray-500">•</span>
          <a href="" className="text-gray-300 hover:text-white">
            07976 836255 | 07770 565936
          </a>
          <span className="hidden md:inline text-gray-500">•</span>
          <span className="hidden md:inline text-gray-400">Merseyside, UK-wide</span>
        </div>
      </div>
    </footer>
  );
}