import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "vintage";
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-heading tracking-wide transition-all duration-300 text-sm";

  const primaryClasses =
    "bg-accent text-white hover:bg-blue-600 shadow-sm hover:shadow-md";

  const secondaryClasses =
    "bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white";

  const vintageClasses =
    "bg-[#8C6A4F] text-white shadow-sm hover:bg-[#73523D] hover:shadow-lg";

  const className = `${baseClasses} ${
    variant === "primary"
      ? primaryClasses
      : variant === "secondary"
      ? secondaryClasses
      : vintageClasses
  }`;

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
