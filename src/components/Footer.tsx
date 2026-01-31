// src/components/Footer.tsx
"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-darkred text-beige py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Replace company name with logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/icons/MARCA VERA EN NEGRO.png"
              alt="VERA Financial Group logo"
              width={140}
              height={60}
              className="h-auto w-[120px] md:w-[140px] opacity-90 brightness-0 invert"
            />
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="title-font text-base font-semibold mb-2">Contact</h4>
            <ul className="body-font space-y-1.5 text-beige/90">
              <li>
                <a
                  href="tel:+13053172951"
                  className="hover:text-white transition-colors"
                >
                  Phone: (305) 317 - 2951
                </a>
              </li>
              <li>
                <a
                  href="mailto:Info@verafg.com"
                  className="hover:text-white transition-colors"
                >
                  Email: Info@verafg.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h4 className="title-font text-base font-semibold mb-2">Hours</h4>
            <p className="body-font text-beige/90">
              Monday - Friday: 9 am - 5 pm
            </p>
          </div>
        </div>

        {/* Divider + Bottom (centered) */}
        <div className="mt-5 pt-4 border-t border-beige/20">
          <p className="body-font text-center text-sm text-beige/80">
            © {new Date().getFullYear()} VERA Financial Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
