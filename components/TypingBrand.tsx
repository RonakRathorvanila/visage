"use client";

import { useEffect, useState } from "react";

const words = ["VISAGE"];

export default function TypingBrand() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = isDeleting ? 80 : 120;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 800);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((i) => i + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <span className="font-heading text-sm font-semibold text-accent flex items-center">
      {text}
      <span className="ml-1 w-[2px] h-4 bg-accent animate-blink" />
    </span>
  );
}
