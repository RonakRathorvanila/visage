import Link from "next/link";
import { MapPin, PhoneCall, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-background overflow-hidden">

      {/* paper tone background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#FAF6F0] to-background" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl text-foreground mb-4">
              VISAGE
            </h3>

            <p className="text-sm text-secondary leading-relaxed max-w-sm">
              <span className="font-medium text-foreground block mb-1">
                The Face of Life
              </span>
              Creating confidence, creativity, and expression in every child —
              through art, communication, and design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-6">
              Explore
            </h4>

            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "Programs" },
                { href: "/services", label: "Design Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      relative text-sm text-secondary
                      transition-colors duration-300
                      hover:text-foreground
                      after:absolute after:left-0 after:-bottom-1
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
            <h4 className="font-heading text-lg text-foreground mb-6">
              Get in Touch
            </h4>

            <ul className="space-y-4 text-sm text-secondary">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                Gurugram, India
              </li>

              <li className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-accent" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-foreground transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>

              <li className="flex items-center gap-3">
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

        {/* Divider */}
        <div className="mt-16 border-t border-black/10" />

        {/* Bottom Bar */}
        <div className="mt-8 text-center text-sm text-secondary">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-foreground">VISAGE</span>.
          Crafted with care for creative growth.
        </div>

      </div>
    </footer>
  );
}
