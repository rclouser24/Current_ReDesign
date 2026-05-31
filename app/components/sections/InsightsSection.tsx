"use client";

import { useState } from "react";
import Link from "next/link";

const ARTICLES = [
  { title: "Mediacurrent Takes Home Another Gold w3 with University of Tampa",                     date: "(01.26.2025)", category: "Award" },
  { title: "CEO Elliott Mower Shares Keynote on Experience Builder Design System",                 date: "(01.26.2025)", category: "Event" },
  { title: "How Site Search Can Make or Break Your Web Redesign",                                 date: "(01.26.2025)", category: "Event" },
  { title: "Behind the Build: How We're Creating Drupal's New Default Design System",             date: "(01.26.2025)", category: "Event" },
  { title: "Behind the Build: How We're Creating Drupal's New Default Design System",             date: "(01.26.2025)", category: "Event" },
];

function ArticleRow({ article }: { article: typeof ARTICLES[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="w-full" style={{ height: "1px", backgroundColor: "#d1d5db" }} />
      <Link
        href="#"
        className="flex items-center py-4"
        style={{ gap: "25px" }}
      >
        {/* Title */}
        <span
          className="flex-shrink-0"
          style={{ width: "772px", fontSize: "20px", color: "#2c2c2c", lineHeight: "1.2" }}
        >
          {article.title}
        </span>

        {/* Date */}
        <span
          className="flex-shrink-0"
          style={{ width: "204px", fontSize: "18px", color: "#2c2c2c", letterSpacing: "-0.18px" }}
        >
          {article.date}
        </span>

        {/* Category */}
        <span
          className="flex-1"
          style={{ fontSize: "18px", color: "#2c2c2c" }}
        >
          {article.category}
        </span>

        {/* Blue indicator — expands to arrow button on hover */}
        <div
          className="flex-shrink-0 flex items-center justify-center overflow-hidden"
          style={{
            width: hovered ? "44px" : "12px",
            height: hovered ? "44px" : "12px",
            backgroundColor: "#0100FE",
            transition: "width 0.25s cubic-bezier(0.4,0,0.2,1), height 0.25s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <span
            className="text-white font-bold select-none"
            style={{
              fontSize: "20px",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.15s ease",
              transitionDelay: hovered ? "0.1s" : "0s",
            }}
          >
            →
          </span>
        </div>
      </Link>
    </div>
  );
}

export function InsightsSection() {
  return (
    <section className="bg-white" style={{ padding: "80px 48px" }}>

      {/* Label with #9FDFFE highlight bar */}
      <div className="relative inline-block mb-10">
        <div
          className="absolute left-0"
          style={{ bottom: 0, width: "199px", height: "10px", backgroundColor: "#9FDFFE", zIndex: 0 }}
        />
        <p
          className="relative font-medium tracking-widest uppercase"
          style={{ color: "#0100FE", fontSize: "16px", lineHeight: "1.2", zIndex: 1 }}
        >
          Latest News &amp; Insights
        </p>
      </div>

      {/* Article rows */}
      <div>
        {ARTICLES.map((article, i) => (
          <ArticleRow key={i} article={article} />
        ))}
        {/* Closing divider */}
        <div className="w-full" style={{ height: "1px", backgroundColor: "#d1d5db" }} />
      </div>

    </section>
  );
}
