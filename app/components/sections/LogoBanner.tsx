"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LogoBanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    /*
     * Garage door effect:
     * clipPath starts at inset(100% 0 0 0) — entirely clipped from the top,
     * bottom edge is the only "visible" point.
     * As you scroll, inset decreases to 0%, revealing bottom-to-top like a
     * garage door lifting. scrub ties it 1:1 to scroll position.
     */
    gsap.fromTo(
      el,
      { clipPath: "inset(100% 0 0 0)" },
      {
        clipPath: "inset(0% 0 0 0)",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",    // starts when section enters viewport from below
          end: "bottom bottom",   // fully revealed when section bottom reaches viewport bottom
          scrub: 1.5,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0100FE", height: "339px" }}
    >
      {/* Decorative blackhold rings */}
      <Image
        src="/assets/blackhold.svg"
        alt=""
        fill
        className="object-cover opacity-20"
        style={{ zIndex: 0 }}
      />

      {/* Flow logotype — centered with 48px padding top and bottom */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ padding: "48px", zIndex: 1 }}
      >
        <Image
          src="/assets/Homepage_hero_logotype-flow.png"
          alt="Current"
          width={1342}
          height={269}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
