import Image from "next/image";

export default function Niceic() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16 grid items-center gap-10 md:grid-cols-2">
        {/* Left: content */}
        <div className="relative">
          <span className="absolute -left-4 top-0 h-full w-px bg-white/20 hidden sm:block" />
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-gray-400">Accreditation</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
              NICEIC Electrical Testing &amp; Inspecting
            </h2>

            <div className="mt-5 space-y-4 text-gray-300 leading-relaxed">
              <p>
                Forber &amp; Sons Ltd has been an approved contractor with the NICEIC for over
                <span className="text-white font-medium"> 25 years</span>.
              </p>
              <p>
                We carry out fixed installation testing to <span className="text-white">BS 7671:2018+A2:2022</span>
                &nbsp;IET Wiring Regulations.
              </p>
              <p>
                Our electrical engineers hold City &amp; Guilds <span className="text-white">2381/2382</span> and
                <span className="text-white"> 2391</span> qualifications and are experienced in the inspection and testing
                of commercial and industrial premises.
              </p>
            </div>
          </div>
        </div>

        {/* Right: just the logo */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/HomePageContents/NICEIC-logo-transparent.png"
            alt="NICEIC Approved Contractor"
            className="h-46 w-auto" // adjust size here
              width={520}          // adjust
              height={160}         // adjust
          />
        </div>
      </div>
    </section>
  );
}
