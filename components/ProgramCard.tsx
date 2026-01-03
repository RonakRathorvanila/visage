import Image from "next/image";

interface ProgramCardProps {
  title: string;
  description: string;
  features: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export default function ProgramCard({
  title,
  description,
  features,
  imageUrl,
  imageAlt,
}: ProgramCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-secondary mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-secondary">
              <span className="text-accent mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

