"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Fly20Logo from "../fly-20_logo.png";

export function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 80) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-20 bg-[#334FB4] backdrop-blur-sm transition-transform duration-300 border-b border-slate-200 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Fly20Logo}
            alt="Fly20 logo"
            width={100}
            height={34}
            className="h-9 w-auto"
            priority
          />
          <span className="text-sm font-semibold tracking-tight text-white">Fly-20</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white">
          <Link href="/services" className="hover:text-slate-100 transition-colors">
            Services
          </Link>
          <Link href="/case-studies" className="hover:text-slate-100 transition-colors">
            Case Studies
          </Link>
          <Link href="/#testimonials" className="hover:text-slate-100 transition-colors">
            Testimonials
          </Link>
          <Link href="/contact" className="hover:text-slate-100 transition-colors">
            Contact
          </Link>
          <a
            href="https://calendly.com/fly20/discussion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-2 text-sm sm:text-base font-medium text-[#334FB4] hover:bg-slate-100 transition-colors min-w-[200px]"
          >
            Book a Call
          </a>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#283b86] focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isMobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileNavOpen && (
        <div className="md:hidden border-t border-slate-200 bg-[#334FB4]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            <Link
              href="/services"
              className="block text-sm text-white hover:text-slate-100"
              onClick={() => setIsMobileNavOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="block text-sm text-white hover:text-slate-100"
              onClick={() => setIsMobileNavOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/#testimonials"
              className="block text-sm text-white hover:text-slate-100"
              onClick={() => setIsMobileNavOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="block text-sm text-white hover:text-slate-100"
              onClick={() => setIsMobileNavOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://calendly.com/fly20/discussion"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-[#334FB4] hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileNavOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
