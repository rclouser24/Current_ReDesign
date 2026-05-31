"use client";

import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference">
      <Link href="/" className="text-white font-medium tracking-tight">
        Studio
      </Link>
      <Link href="/case-studies" className="text-white text-sm tracking-widest uppercase">
        Work
      </Link>
    </nav>
  );
}
