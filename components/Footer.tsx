import Link from "next/link";
import { MapPin, PhoneCall, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-100 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-fadeUp">

          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              VISAGE
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              <span className="font-medium text-foreground">The Face of Life</span>
              <br />
              Creating confidence, creativity, and expression in every child.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "Programs" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      relative text-sm text-secondary
                      hover:text-foreground transition-colors
                      after:absolute after:left-0 after:-bottom-0.5
                      after:h-[1px] after:w-0 after:bg-accent
                      after:transition-all after:duration-300
                      hover:after:w-full
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-secondary">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Gurugram, India
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-accent" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-foreground transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a
                  href="mailto:info@visage.com"
                  className="hover:text-foreground transition-colors"
                >
                  info@visage.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-100 text-center animate-fadeUp">
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} <span className="font-medium text-foreground">VISAGE</span>.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
