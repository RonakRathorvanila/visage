"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PhoneCall, Menu, X } from "lucide-react";

/* =========================
   🔤 Typing Subtitle
========================= */
function TypingSubtitle() {
  const text = "The Face of Life";
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      setDisplay((prev) =>
        isDeleting
          ? text.substring(0, prev.length - 1)
          : text.substring(0, prev.length + 1)
      );

      if (!isDeleting && display === text) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && display === "") {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [display, isDeleting]);

  return (
    <span className="ml-2 text-xs sm:text-sm text-accent font-medium flex items-center">
      {display}
      <span className="ml-1 w-[2px] h-3 bg-accent animate-blink" />
    </span>
  );
}

/* =========================
   🔥 NAVBAR
========================= */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* LEFT BRAND */}
          <Link href="/" className="flex items-center">
            <span className="font-heading text-2xl font-bold tracking-wide text-foreground">
              VISAGE
            </span>
            <TypingSubtitle />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  relative text-sm font-medium text-secondary
                  hover:text-foreground transition-colors
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-accent
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {link.label}
              </Link>
            ))}

            {/* CTA */}
            <a
              href="tel:+919876543210"
              className="
                ml-4 inline-flex items-center gap-2
                px-5 py-2 rounded-full
                bg-accent text-white text-sm font-semibold
                shadow-md hover:shadow-lg
                hover:-translate-y-[1px]
                transition-all duration-300
              "
            >
              <PhoneCall className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  px-3 py-2 rounded-lg
                  text-sm font-medium text-secondary
                  hover:bg-accent/10 hover:text-foreground
                  transition-all
                "
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <a
              href="tel:+919876543210"
              className="
                mt-2 inline-flex items-center justify-center gap-2
                px-4 py-3 rounded-xl
                bg-accent text-white font-semibold
                shadow-md
              "
            >
              <PhoneCall className="w-4 h-4" />
              Call for Enquiry
            </a>
          </div>
        </div>

      </div>
    </nav>
  );
}
