interface TestimonialCardProps {
  quote: string;
  author: string;
  relation?: string;
}

export default function TestimonialCard({
  quote,
  author,
  relation,
}: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <p className="text-secondary italic mb-4 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center">
        <div>
          <p className="font-semibold text-foreground text-sm">{author}</p>
          {relation && (
            <p className="text-xs text-secondary">{relation}</p>
          )}
        </div>
      </div>
    </div>
  );
}

