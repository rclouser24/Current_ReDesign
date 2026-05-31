"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { caseStudies } from "@/data/case-studies";

gsap.registerPlugin(ScrollTrigger);

const INDICATOR_COLORS = [
  "#2020FF", "#89D4F5", "#8FE86A", "#FF6B35",
  "#8B5CF6", "#F59E0B", "#EF4444", "#10B981", "#EC4899",
];

const ROW_HEIGHT = 57; // px — text row
const IMG_HEIGHT = "70vh"; // image area per item

export function WorkList() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set every image to its initial state before any ScrollTrigger fires
    imgRefs.current.forEach((img) => {
      if (img) gsap.set(img, { width: "28vw", x: "72vw" });
    });

    const triggers: ReturnType<typeof gsap.timeline>[] = [];

    itemRefs.current.forEach((item, i) => {
      const img = imgRefs.current[i];
      if (!item || !img) return;

      /*
       * Scroll range: item top reaches viewport bottom → item bottom leaves viewport top
       * scrub ties animation progress directly to scroll position.
       *
       * Phase 1 (first half): small right-aligned → full viewport width
       * Phase 2 (second half): full width → smaller left-aligned
       */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      tl.fromTo(
        img,
        { width: "28vw", x: "72vw" },
        { width: "100vw", x: "0vw", duration: 1, ease: "none" }
      ).to(img, {
        width: "55vw",
        x: "0vw",
        duration: 1,
        ease: "none",
      });

      triggers.push(tl);
    });

    return () => {
      triggers.forEach((tl) => tl.scrollTrigger?.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white overflow-x-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-12 py-5">
        <span className="text-xs tracking-widest uppercase text-gray-400 font-medium">
          Selected Work {String(caseStudies.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span>List</span>
          <div className="w-4 border-t border-gray-300" />
          <span>Grid</span>
        </div>
      </div>

      {/* Case study items — each tall enough to scroll through the full animation */}
      {caseStudies.map((cs, i) => (
        <div
          key={cs.slug}
          ref={(el) => { itemRefs.current[i] = el; }}
          className="relative border-t border-gray-200"
          style={{ height: `calc(${ROW_HEIGHT}px + ${IMG_HEIGHT})` }}
        >
          {/* Sticky text row — stays at top of viewport while image animates */}
          <Link
            href={`/case-studies/${cs.slug}`}
            className="sticky top-0 z-10 bg-white flex items-center px-12 group"
            style={{ height: `${ROW_HEIGHT}px` }}
          >
            <span
              className="font-semibold tracking-tight text-gray-900 group-hover:text-[#2020FF] transition-colors duration-200 flex-shrink-0"
              style={{ width: "49%", fontSize: "clamp(0.9rem, 1.4vw, 22px)" }}
            >
              {cs.title}
            </span>
            <span
              className="text-sm text-black flex-shrink-0 italic"
              style={{ width: "15%" }}
            >
              ({cs.year})
            </span>
            <span
              className="text-xs uppercase tracking-widest text-black flex-shrink-0"
              style={{ width: "30%" }}
            >
              {cs.category}
            </span>
            <div
              className="ml-auto w-3 h-3 rounded-sm flex-shrink-0"
              style={{ backgroundColor: "#2020FF" }}
            />
          </Link>

          {/* Scroll-animated image — driven by GSAP scrub */}
          <div
            ref={(el) => { imgRefs.current[i] = el; }}
            className="absolute overflow-hidden"
            style={{
              top: `${ROW_HEIGHT}px`,
              left: 0,
              height: IMG_HEIGHT,
              width: "28vw", /* overridden by gsap.set on mount */
            }}
          >
            <Image
              src="/assets/3_2.svg"
              alt={cs.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}

      {/* Bottom border */}
      <div className="border-t border-gray-200" />

    </section>
  );
}
