"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Boxes,
  FileText,
  Clock,
  ShieldCheck,
} from "lucide-react";

const cards = [
  {
    icon: BookOpen,
    title: "School Projects",
    desc: "Professional help with school assignments and creative submissions.",
    x: -120,
    y: -60,
    r: -12,
  },
  {
    icon: Boxes,
    title: "Models & Assignments",
    desc: "Expert support for 3D models, presentations, and complex work.",
    x: 120,
    y: -40,
    r: 10,
  },
  {
    icon: FileText,
    title: "Handmade Designed Sheets",
    desc: "Custom-made worksheets designed to match your child’s learning style.",
    x: -100,
    y: 80,
    r: 8,
  },
  {
    icon: Clock,
    title: "Last-Minute Project Help",
    desc: "Reliable support when deadlines are tight and pressure is high.",
    x: 100,
    y: 90,
    r: -10,
  },
];

export default function HassleFreeSupport() {
  const ref = useRef<HTMLDivElement | null>(null);

  // ✅ FIX: animation starts as soon as section enters viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  return (
    <section
      ref={ref}
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">
            We’ve Got You Covered
          </p>

          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Hassle-Free Creative Support for Parents
          </h2>

          <p className="text-lg text-secondary max-w-2xl mx-auto">
            From school projects to last-minute deadlines, we make sure your
            child never feels stuck or stressed.
          </p>
        </div>

        {/* Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 perspective-[1200px]">

          {cards.map((card, i) => {
            const Icon = card.icon;

            // ✅ FIX: start scattered → settle into position
            const x = useTransform(scrollYProgress, [0, 1], [card.x, 0]);
            const y = useTransform(scrollYProgress, [0, 1], [card.y, 0]);
            const rotate = useTransform(scrollYProgress, [0, 1], [card.r, 0]);
            const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

            return (
              <motion.div
                key={i}
                style={{
                  x,
                  y,
                  rotateZ: rotate,
                  scale,
                }}
                className="
                  bg-white border rounded-2xl p-6
                  shadow-sm hover:shadow-lg
                  transition-shadow
                  will-change-transform
                "
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {card.title}
                    </h3>
                    <p className="text-secondary text-sm">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Line */}
        <div className="mt-20 flex justify-center items-center gap-2 text-sm text-secondary">
          <ShieldCheck className="w-4 h-4 text-accent" />
          Trusted support. Zero stress. Happy parents.
        </div>

      </div>
    </section>
  );
}
