// src/components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-offwhite overflow-hidden" aria-label="Hero">
      {/* background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-[-140px] h-[420px] w-[420px] bg-darkred/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-[-140px] h-[420px] w-[420px] bg-darkred/10 blur-3xl"
      />

      {/* ✅ full width wrapper */}
      <div className="w-full">
        {/* ✅ full width border/background */}
        <div className="w-full bg-darkred shadow-sm">
          {/* ✅ keep same gutters as navbar */}
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch min-h-[calc(100svh-64px)] md:min-h-[calc(100svh-80px)]">
              {/* LEFT PANEL */}
              <div className="bg-darkred text-beige px-8 py-10 md:px-12 md:py-12 flex flex-col justify-center">
                <p className="body-font text-xs tracking-[0.18em] uppercase text-beige/80 mb-6">
                  VERA Financial Group
                </p>

                <h1 className="title-font text-beige text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                  Beyond Accounting
                </h1>

                <p className="body-font text-base md:text-lg text-beige/90 mb-10">
                  We build financial confidence.
                </p>

                <ul className="space-y-6 mb-10">
                  {[
                    "Tax Preparation & Planning",
                    "Business Accounting & Advisory",
                    "Financial Management Programs",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="shrink-0 w-5 h-5 bg-beige/15 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-beige"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="body-font text-beige/95 text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium tracking-normal
                      bg-beige text-darkred border border-beige shadow-sm
                      transform-gpu will-change-transform
                      transition-[transform,background-color,box-shadow] duration-200 ease-out
                      hover:bg-beige/90 hover:shadow-md hover:-translate-y-0.5"
                  >
                    Book a Consultation
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-beige/80">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-beige/60" />
                    Trusted Tax Expertise
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-beige/60" />
                    CPA Support Available
                  </span>
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="relative min-h-[320px] md:min-h-[420px] lg:min-h-0">
                <Image
                  src="/images/hero4.jpeg"
                  alt="Tax preparation and accounting services"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />

                <div className="absolute bottom-4 left-4 backdrop-blur-md bg-offwhite/90 border border-black/10 shadow-md px-4 py-2">
                  <p className="body-font text-xs md:text-sm text-gray-700 font-medium">
                    Serving Florida &amp; Beyond
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8 md:pb-10" />
      </div>
    </section>
  );
}
