"use client";

import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = ["Our Work", "Services", "Insight", "About Us"];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#2020FF", padding: "48px" }}
    >
      {/* Halftone dot background */}
      <Image
        src="/assets/Homepage_hero_bg-current.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between">
        <span
          className="text-sm tracking-wide"
          style={{ color: "rgba(180,180,255,0.85)" }}
        >
          Energy never stands still.
        </span>

        <div className="flex items-center gap-10">
          {NAV_LINKS.map((label) => (
            <Link
              key={label}
              href="#"
              className="text-xs tracking-widest uppercase font-medium"
              style={{ color: "rgba(180,180,255,0.85)" }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="text-xs tracking-widest uppercase font-semibold px-5 py-2.5 rounded-sm"
            style={{ backgroundColor: "#0a0a2e", color: "#b4b4ff" }}
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10" style={{ marginTop: "28px" }}>

        {/* Copy — right-aligned, matches Figma x=848 in 1440px frame */}
        <div className="flex justify-end">
          <p
            className="font-bold leading-[1.1] tracking-tight"
            style={{
              fontSize: "clamp(1.5rem, 2.75vw, 40px)",
              color: "#2020FF",
              backgroundColor: "#89D4F5",
              padding: "8px 12px",
              width: "min(620px, 100%)",
            }}
          >
            {"We're a full-stack digital"}<br />
            {"agency. We build, optimize,"}<br />
            {"and market digital products—"}<br />
            {"together, continuously."}
          </p>
        </div>

        {/* Logotype — 180px below copy at 1440px = 12.5vw, scales with viewport */}
        <div style={{ marginTop: "12.5vw" }}>
          <Image
            src="/assets/Homepage_hero_logotype-flow.png"
            alt="Current"
            width={1342}
            height={269}
            className="w-full h-auto"
            priority
          />
        </div>

      </div>
    </section>
  );
}
