"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200",
    alt: "Art and craft work",
    label: "Art & Craft",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200",
    alt: "Calligraphy artwork",
    label: "Calligraphy",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200",
    alt: "Student artwork",
    label: "Student Work",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200",
    alt: "Design work",
    label: "Design Projects",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200",
    alt: "Handwriting sample",
    label: "Handwriting",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200",
    alt: "Creative project",
    label: "Creative Projects",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200",
    alt: "Design service",
    label: "Design Services",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200",
    alt: "Artistic creation",
    label: "Artistic Creations",
  },
];

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);

  const prev = () =>
    setActiveIndex((i) => (i === null ? 0 : (i - 1 + galleryItems.length) % galleryItems.length));

  const next = () =>
    setActiveIndex((i) => (i === null ? 0 : (i + 1) % galleryItems.length));

  // ⌨️ Keyboard support
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <>
      {/* 🖼️ GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className="
              group relative aspect-square cursor-pointer
              rounded-2xl overflow-hidden
              bg-[#FAF6F0] border border-black/10
              transition-all duration-500
              hover:-translate-y-1 hover:shadow-xl
            "
          >
            <Image
              src={item.url}
              alt={item.alt}
              fill
              className="
                object-cover sepia-[0.15]
                transition-transform duration-700
                group-hover:scale-110
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Label */}
            <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-sm font-medium tracking-wide">
                {item.label}
              </span>
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* 🔍 MODAL */}
      {activeIndex !== null && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/80 backdrop-blur-sm
            flex items-center justify-center
          "
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white bg-black/40 p-2 rounded-full hover:bg-black/60"
            onClick={close}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 md:left-8 text-white bg-black/40 p-3 rounded-full hover:bg-black/60"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 md:right-8 text-white bg-black/40 p-3 rounded-full hover:bg-black/60"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] max-w-4xl aspect-square"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryItems[activeIndex].url}
              alt={galleryItems[activeIndex].alt}
              fill
              className="object-contain rounded-xl"
            />

            <p className="absolute -bottom-10 left-0 right-0 text-center text-white text-sm tracking-wide">
              {galleryItems[activeIndex].label}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
