import Image from "next/image";
import { Palette, PenTool, Mic2, Sparkles } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  features: string[];
  imageUrl?: string;
  imageAlt?: string;
}

const iconMap: Record<string, any> = {
  "Art & Craft": Palette,
  "Calligraphy & Handwriting": PenTool,
  "Spoken English & Confidence": Mic2,
};

export default function ProgramCard({
  title,
  description,
  features,
  imageUrl,
  imageAlt,
}: ProgramCardProps) {
  const Icon = iconMap[title] || Sparkles;

  return (
    <div className="bg-[#FAF6F0] border border-black/10 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            fill
            className="object-cover sepia-[0.15] transition-transform duration-700 hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-7 text-center">

        {/* 🌿 CONTINUOUS ROTATE ICON (NO FADE) */}
        <div className="relative mx-auto mb-4 w-14 h-14 flex items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-highlight/20" />

          <div className="relative z-10 w-12 h-12 rounded-full bg-background border border-black/10 flex items-center justify-center text-highlight animate-slowRotate">
            <Icon className="w-6 h-6" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl text-foreground mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-secondary mb-5 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 text-sm text-secondary text-left max-w-xs mx-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-accent">✦</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
