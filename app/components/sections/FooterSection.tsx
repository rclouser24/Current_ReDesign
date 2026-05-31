import Image from "next/image";
import Link from "next/link";

const NAV_LEFT  = ["Our Work", "Services", "Insight", "About Us"];
const NAV_RIGHT = ["Legal", "Privacy", "Accessibility"];

export function FooterSection() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#141414", minHeight: "706px" }}
    >
      {/* Fuzzy3 pixel dot texture — bleeds down from top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none" style={{ height: "197px", zIndex: 1 }}>
        <Image
          src="/assets/fuzzy3.png"
          alt=""
          fill
          className="object-cover object-top"
        />
      </div>

      {/* ── CTA block — centred ── */}
      <div
        className="relative flex flex-col items-center"
        style={{ paddingTop: "168px", zIndex: 10 }}
      >
        <h2
          className="text-white font-bold text-center"
          style={{
            fontSize: "110px",
            lineHeight: "normal",
            letterSpacing: "-2.2px",
            textTransform: "capitalize",
          }}
        >
          Let&rsquo;s Work Together.
        </h2>

        <a
          href="#contact"
          className="flex items-center justify-center mt-4 uppercase font-medium tracking-widest"
          style={{
            width: "144px",
            height: "44px",
            backgroundColor: "#0100FE",
            color: "#A9FF92",
            fontSize: "16px",
          }}
        >
          Contact Us →
        </a>
      </div>

      {/* ── Horizontal divider ── */}
      <div
        className="relative mx-auto"
        style={{ width: "1344px", height: "1px", backgroundColor: "#ffffff", marginTop: "56px", zIndex: 10 }}
      />

      {/* ── Footer content — two columns ── */}
      <div
        className="relative flex justify-between"
        style={{ padding: "40px 53px 0", zIndex: 10 }}
      >
        {/* Left — tagline + address */}
        <div className="flex flex-col" style={{ gap: "24px", maxWidth: "583px" }}>
          <p className="text-white" style={{ fontSize: "20px", lineHeight: "1.5" }}>
            We are proud to be part of the{" "}
            <a href="https://www.codeandtheory.com/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#A9FF92" }}>
              Code and Theory
            </a>{" "}
            family of agencies and the larger{" "}
            <a href="https://www.stagwellglobal.com/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#A9FF92" }}>
              Stagwell Global Network.
            </a>
          </p>

          <p className="text-white" style={{ fontSize: "18px", lineHeight: "1.5" }}>
            1 World Trade Center, 69th Floor<br />
            New York, NY 10007
          </p>
        </div>

        {/* Right — newsletter */}
        <div className="flex flex-col" style={{ gap: "24px", width: "432px" }}>
          <div className="flex flex-col" style={{ gap: "12px" }}>
            <h3 className="text-white font-bold" style={{ fontSize: "32px", lineHeight: "1.2" }}>
              Let&rsquo;s keep in touch
            </h3>
            <p className="text-white" style={{ fontSize: "18px" }}>
              Join our mailing list for insights and updates.
            </p>
          </div>

          {/* Email input */}
          <div
            className="flex items-center w-full"
            style={{ height: "44px", backgroundColor: "#474747", padding: "6px 12px" }}
          >
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-transparent outline-none text-white placeholder-white/50"
              style={{ fontSize: "18px" }}
            />
            <button type="submit" className="flex-shrink-0 text-white ml-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: "rotate(90deg)" }}>
                <path d="M8 1L8 15M8 15L14 9M8 15L2 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom nav ── */}
      <div
        className="relative flex items-center justify-between"
        style={{ padding: "32px 49px 40px", zIndex: 10 }}
      >
        {/* Left nav */}
        <div className="flex items-center" style={{ gap: "24px" }}>
          {NAV_LEFT.map((label) => (
            <Link
              key={label}
              href="#"
              className="text-white uppercase hover:opacity-70 transition-opacity"
              style={{ fontSize: "16px" }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right nav + copyright */}
        <div className="flex items-center" style={{ gap: "24px" }}>
          {NAV_RIGHT.map((label) => (
            <Link
              key={label}
              href="#"
              className="text-white uppercase hover:opacity-70 transition-opacity"
              style={{ fontSize: "16px" }}
            >
              {label}
            </Link>
          ))}
          <span className="text-white" style={{ fontSize: "16px" }}>© Current2026</span>
        </div>
      </div>
    </footer>
  );
}
