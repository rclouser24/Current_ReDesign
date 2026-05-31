"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gsap } from "gsap";

const DESCRIPTION =
  "We develop integrated marketing strategies aligned to your business goals—planning the right channel mix, solving complex challenges, and building efficient workflows that support long-term growth.";

const SERVICES = [
  { title: "Strategic Consulting",              icon: "/assets/icon1.svg", left: "50.7%", top: "31.9%", width: "27%"   },
  { title: "CRM Expertise",                     icon: "/assets/icon2.svg", left: "74.6%", top: "46.2%", width: "22.1%" },
  { title: "Digital Product Design and Engineering", icon: "/assets/icon3.svg", left: "43.1%", top: "59.5%", width: "30%"   },
  { title: "Data & Insights",                   icon: "/assets/icon4.svg", left: "68.5%", top: "70.7%", width: "30%"   },
  { title: "Media & SEO",                       icon: "/assets/icon5.svg", left: "49.2%", top: "81.3%", width: "22.1%" },
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    setHovered(true);
    if (descRef.current) {
      gsap.fromTo(descRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" }
      );
    }
  };

  const onLeave = () => {
    if (descRef.current) {
      gsap.to(descRef.current, {
        height: 0, opacity: 0, duration: 0.25, ease: "power2.in",
        onComplete: () => setHovered(false),
      });
    }
  };

  return (
    <div
      className="absolute flex items-stretch cursor-pointer"
      style={{ left: service.left, top: service.top, width: service.width, zIndex: 10, gap: "6px" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Green icon square */}
      <div className="flex-shrink-0">
        <Image src={service.icon} alt="" width={72} height={72} />
      </div>

      {/* Title + description block */}
      <div
        className="flex flex-col justify-center flex-1 px-4 py-3 transition-colors duration-200"
        style={{
          backgroundColor: hovered ? "#9FDFFE" : "#2020FF",
          minHeight: "72px",
        }}
      >
        <p
          className="font-bold leading-snug"
          style={{
            fontSize: "clamp(0.85rem, 1.1vw, 16px)",
            color: hovered ? "#2020FF" : "#ffffff",
          }}
        >
          {service.title}
        </p>

        {/* Expanding description */}
        <div ref={descRef} style={{ height: 0, overflow: "hidden", opacity: 0 }}>
          <p
            className="mt-3 leading-relaxed text-sm"
            style={{ color: "#2020FF" }}
          >
            {DESCRIPTION}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#141414", minHeight: "948px" }}
    >
      {/* Blackhold — concentric orbital rings, full section */}
      <Image
        src="/assets/blackhold.svg"
        alt=""
        fill
        className="object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Fuzzy white dot texture bleeding in from top */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{ height: "197px", zIndex: 1 }}
      >
        <Image
          src="/assets/fuzzy3.png"
          alt=""
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Left text column */}
      <div
        className="absolute"
        style={{ left: "48px", top: "264px", width: "min(662px, 45%)", zIndex: 10 }}
      >
        <p
          className="text-xs tracking-widest uppercase font-semibold mb-8 inline-block border-b-2 pb-0.5"
          style={{ color: "#A9FF92", borderColor: "#A9FF92" }}
        >
          What We Do
        </p>

        <h2
          className="text-white font-bold leading-[1.05] mb-10"
          style={{ fontSize: "clamp(1.25rem, 2.78vw, 40px)" }}
        >
          We unite digital product and lifecycle marketing to drive measurable growth across the customer journey.
        </h2>

        <a
          href="#"
          className="inline-flex items-center gap-3 text-sm text-white font-semibold tracking-widest uppercase px-6 py-4 transition-opacity duration-200 hover:opacity-80"
          style={{ backgroundColor: "#2020FF" }}
        >
          See Our Services →
        </a>
      </div>

      {/* Service cards */}
      {SERVICES.map((service, i) => (
        <ServiceCard key={i} service={service} index={i} />
      ))}
    </section>
  );
}
