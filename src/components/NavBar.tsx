// src/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "h-16 md:h-20",
        "backdrop-blur-md",
        "transition-colors duration-200",
        scrolled ? "bg-offwhite/90 shadow-sm" : "bg-offwhite/60",
      ].join(" ")}
      aria-label="Main"
    >
      <nav className="mx-auto max-w-7xl h-full relative">
        <div className="grid grid-cols-3 items-center h-full px-6 md:px-10">
          {/* Left links */}
          <ul className="hidden md:flex items-center gap-12">
            <li>
              <Link
                href="/"
                className="tracking-wide title-font uppercase text-sm font-semibold text-darkred hover:text-darkred/70 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="tracking-wide title-font uppercase text-sm font-semibold text-darkred hover:text-darkred/70 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="tracking-wide title-font uppercase text-sm font-semibold text-darkred hover:text-darkred/70 transition-colors"
              >
                Services
              </Link>
            </li>
          </ul>
          <div className="md:hidden" />

          {/* Center logo */}
          <div className="flex justify-start md:justify-center col-start-1 md:col-start-2">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/icons/navbaricon.png"
                alt="VERA Financial Group Logo"
                width={140}
                height={64}
                priority
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Right links */}
          <ul className="hidden md:flex justify-end items-center gap-10 col-start-3">
            <li>
              <Link
                href="/contact"
                className="tracking-wide title-font uppercase text-sm font-semibold text-darkred hover:text-darkred/70 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/payinvoice"
                className="tracking-wide title-font uppercase text-sm font-semibold text-darkred hover:text-darkred/70 transition-colors"
              >
                Pay Your Invoice
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden flex justify-end col-start-3">
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="text-darkred focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu overlay (does not change header height) */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full inset-x-0 bg-offwhite/95 backdrop-blur-md border-t border-black/10">
            <div className="px-6 py-4">
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/contact", label: "Contact Us" },
                  { href: "/payinvoice", label: "Pay Your Invoice" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block tracking-wide title-font uppercase text-sm font-semibold text-darkred hover:text-darkred/70 transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
