"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import CTAButton from "@/components/CTAButton";
import ProgramCard from "@/components/ProgramCard";
import TestimonialCard from "@/components/TestimonialCard";
import HassleFreeSupport from "@/components/HassleFreeSupport";


import { Quote } from "lucide-react";
/* Icons */
import {
  PhoneCall,
  MessageCircle,

  // Hero / Trust / Programs
  Palette,
  Mic2,
  Users,
  HeartHandshake,
  Sparkles,
  TrendingUp,
  PenTool,

  // Design Services
  CreditCard,
  FileImage,
  Heart,
  Gift,

  // Hassle-Free Section
  Boxes,
  Clock,
  ShieldCheck,
  PenLine,
  Brush,
  Scissors,
  Feather,
  Mic,
  Star,
  Eye,
  FileText,
  BookOpen,
  Layout,
} from "lucide-react";
import GalleryGrid from "@/components/GalleryGrid";

/* =========================
   🎨 Design Services Section with Shuffle Animation
========================= */
function DesignServicesSection() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const services = [
    {
      title: "Visiting Cards",
      icon: CreditCard,
      image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&h=600&fit=crop",
      x: -100,
      y: -80,
      r: -15,
    },
    {
      title: "Flyers & Brochures",
      icon: FileImage,
      image: "https://images.unsplash.com/photo-1581091215367-59ab6c5c0c1b?w=800&h=600&fit=crop",
      x: 120,
      y: -60,
      r: 12,
    },
    {
      title: "Wedding Invitation Cards",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=600&fit=crop",
      x: -80,
      y: 100,
      r: 10,
    },
    {
      title: "Customised Gift Hampers",
      icon: Gift,
      image: "https://images.unsplash.com/photo-1607082349566-1870e1b5d2db?w=800&h=600&fit=crop",
      x: 100,
      y: 90,
      r: -12,
    },
    {
      title: "Professional & Personalised Designs",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      x: -110,
      y: -70,
      r: 8,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 bg-background overflow-hidden"
    >
      {/* paper texture feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#FAF6F0] to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-24">
          <p className="font-heading text-sm tracking-widest text-secondary mb-4">
            Creative Design Studio
          </p>

          <h2 className="font-heading text-4xl md:text-5xl text-foreground relative inline-block">
            Design Services
            <span className="absolute left-1/2 -bottom-4 w-28 h-[1px] bg-accent/40 -translate-x-1/2" />
          </h2>

          <p className="mt-10 text-lg md:text-xl text-secondary max-w-2xl mx-auto">
            Premium, personalised designs crafted with creativity, clarity,
            and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 perspective-[1200px]">
          {services.map((service, i) => {
            const Icon = service.icon;

            // Shuffle animation: start scattered → settle into position
            const x = useTransform(scrollYProgress, [0, 1], [service.x, 0]);
            const y = useTransform(scrollYProgress, [0, 1], [service.y, 0]);
            const rotate = useTransform(scrollYProgress, [0, 1], [service.r, 0]);
            const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

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
                  group
                  bg-[#FAF6F0]
                  border border-black/10
                  rounded-2xl
                  overflow-hidden
                  transition-shadow duration-700
                  hover:-translate-y-1
                  hover:shadow-xl
                  will-change-transform
                "
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="
                      object-cover
                      sepia-[0.2]
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <div className="relative mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-accent/40 animate-slowRotate" />
                    <Icon className="w-5 h-5 text-accent relative z-10" />
                  </div>

                  <h3 className="font-heading text-xl text-foreground">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <CTAButton href="/services" variant="primary">
            View All Services
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* /* ============================
   🔥 HERO SECTION
============================ */}

      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-background">
        {/* 📜 Vintage paper background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1920&h=1080&fit=crop"
            alt="Visage Creative Studio"
            fill
            priority
            className="object-cover opacity-20 sepia-[0.25] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
        </div>

        {/* 🎨 Soft artistic blobs (less modern glow) */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-highlight/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>

        {/* ✍️ Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Brand line */}
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-accent mb-6">
            Visage — The Face of Life
          </p>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
            <span className="block text-foreground">Create Your</span>
            <span className="block text-accent">Own World of Creativity</span>
          </h1>

          {/* Sub headline */}
          <p className="text-lg md:text-2xl text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            Artistic learning in
            <span className="font-medium text-foreground">
              {" "}
              Art, Craft, Calligraphy & Communication{" "}
            </span>
            designed to build confidence, expression and creativity in kids &
            teens.
          </p>

          {/* 🌿 Vintage feature pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {[
              { icon: Palette, label: "Art & Craft" },
              { icon: PenTool, label: "Handwriting & Calligraphy" },
              { icon: Mic2, label: "Spoken English" },
              { icon: HeartHandshake, label: "Confidence Building" },
            ].map((item, i) => (
              <span
                key={i}
                className="
            flex items-center gap-2 px-5 py-2 rounded-full
            bg-[#FAF6F0] border border-black/10
            text-sm font-medium text-secondary
            shadow-sm
          "
              >
                <item.icon className="w-4 h-4 text-highlight" />
                {item.label}
              </span>
            ))}
          </div>

          {/* 🖋️ CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="
          btn-vintage
          inline-flex items-center gap-3 justify-center
        "
            >
              <PhoneCall className="w-5 h-5" />
              Book Free Consultation
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="
          inline-flex items-center gap-3 justify-center
          px-10 py-4 rounded-full
          font-heading tracking-wide
          border border-accent text-accent
          hover:bg-accent hover:text-white
          transition-all duration-300
        "
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>

          {/* Micro trust */}
          <p className="mt-10 text-sm text-secondary italic">
            Gentle learning • Personal attention • Visible growth
          </p>
        </div>
      </section>

      {/* Eye-Catcher / Transition Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Soft background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-accent/5 to-white"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeUp">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/10 text-accent text-sm font-medium">
            <Sparkles className="w-4 h-4" />A small step today. A big change
            tomorrow.
          </div>

          {/* Headline */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            See the Confidence Grow
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
            Watch your child move from being
            <span className="font-medium text-foreground"> shy </span>
            to
            <span className="font-medium text-foreground"> confident</span>,
            from
            <span className="font-medium text-foreground"> average </span>
            to
            <span className="font-medium text-foreground"> expressive</span> —
            not overnight, but naturally.
          </p>

          {/* Micro trust line */}
          <div className="mt-8 flex justify-center items-center gap-2 text-sm text-secondary">
            <TrendingUp className="w-4 h-4 text-accent" />
            Confidence • Creativity • Communication
          </div>
        </div>
      </section>

      {/* Learning Programs – Enhanced */}
      <section className="relative py-28 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#FAF6F0] to-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-24">
            <p className="font-heading text-sm tracking-widest text-secondary mb-4">
              Create your own world
            </p>

            <h2 className="font-heading text-4xl md:text-5xl text-foreground relative inline-block">
              Visage…
              <span className="block text-secondary text-2xl mt-2">
                the face of life
              </span>
              {/* underline */}
              <span className="absolute left-1/2 -bottom-4 w-24 h-[1px] bg-accent/40 -translate-x-1/2" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* LEFT */}
            <div className="bg-[#FAF6F0] border border-black/10 rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <h3 className="font-heading text-2xl mb-8 text-center">
                Learning Programs
              </h3>

              <ul className="space-y-5 text-secondary text-sm">
                {[
                  { icon: PenLine, label: "Improved Handwriting" },
                  { icon: Brush, label: "Drawing" },
                  { icon: Scissors, label: "Art & Craft" },
                  { icon: Feather, label: "Calligraphy" },
                  { icon: Mic, label: "Spoken English" },
                  { icon: MessageCircle, label: "Remove Hesitation" },
                  { icon: Star, label: "Gain Confidence" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <item.icon
                      className="
                  w-4 h-4 text-accent
                  animate-slowRotate
                "
                      style={{ animationDuration: `${10 + i * 2}s` }}
                    />
                    <span className="relative">
                      {item.label}
                      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CENTER – HERO CARD */}
            <div className="bg-[#FAF6F0] border border-black/10 rounded-2xl p-10 text-center shadow-lg scale-[1.03]">
              <div className="relative mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-accent/40 animate-slowRotate" />
                <Eye className="w-8 h-8 text-highlight relative z-10" />
              </div>

              <h3 className="font-heading text-2xl mb-3">Eye Catcher</h3>

              <p className="text-secondary mb-8">Get Hassle Free</p>

              <ul className="space-y-4 text-sm text-secondary">
                {[
                  {
                    icon: FileText,
                    label: "School / College Project & Practical Files",
                  },
                  { icon: BookOpen, label: "School Projects" },
                  { icon: Layout, label: "Handmade Sheets (Each Size)" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 justify-center"
                  >
                    <item.icon className="w-4 h-4 text-accent animate-slowRotate" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT */}
            <div className="bg-[#FAF6F0] border border-black/10 rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <h3 className="font-heading text-2xl mb-8 text-center">
                Designing
              </h3>

              <ul className="space-y-5 text-secondary text-sm">
                {[
                  { icon: Layout, label: "Pamphlets" },
                  { icon: CreditCard, label: "Visiting Cards" },
                  { icon: BookOpen, label: "Brochures" },
                  { icon: Feather, label: "Wedding Invitation" },
                  { icon: Star, label: "& many more…" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <item.icon
                      className="w-4 h-4 text-accent animate-slowRotate"
                      style={{ animationDuration: `${12 + i * 2}s` }}
                    />
                    <span className="relative">
                      {item.label}
                      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*
/* Hassle-Free Solutions Section */}
<HassleFreeSupport />


      {/* 🎨 Design Services – Vintage Showcase */}
      <DesignServicesSection />

      {/* Gallery Preview */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Soft background accent */}
        <div className="absolute -top-40 right-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16 animate-fadeUp">
            <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">
              Our Work Speaks
            </p>

            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-5">
              Our Creative Work
            </h2>

            <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">
              A glimpse into the creativity, confidence, and skills our students
              build every day.
            </p>
          </div>

          {/* ✅ GALLERY GRID COMPONENT */}
          <GalleryGrid />

          {/* CTA */}
          <div className="text-center mt-16 animate-fadeUp">
            <CTAButton href="/services" variant="vintage">
              View Full Gallery
            </CTAButton>
          </div>
        </div>
      </section>

    {/* 🤍 Trust Section – Parents Speak */}
<section className="relative py-28 bg-background overflow-hidden">

{/* soft paper glow */}
<div className="absolute inset-0 bg-gradient-to-b from-background via-[#FAF6F0] to-background" />
<div className="absolute -top-40 left-1/3 w-[520px] h-[520px] bg-accent/10 rounded-full blur-3xl" />

<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

  {/* Heading */}
  <div className="text-center mb-24">
    <p className="font-heading text-sm tracking-widest text-secondary mb-4">
      Parents Trust Us
    </p>

    <h2 className="font-heading text-4xl md:text-5xl text-foreground relative inline-block">
      Trusted by Parents
      <span className="absolute left-1/2 -bottom-4 w-24 h-[1px] bg-accent/40 -translate-x-1/2" />
    </h2>

    <p className="mt-10 text-lg md:text-xl text-secondary max-w-2xl mx-auto">
      Real stories of growth, confidence, and positive change beyond the classroom.
    </p>
  </div>

  {/* Testimonials */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

    {[
      {
        quote:
          "My daughter went from being too shy to speak in class to confidently presenting her art projects. The transformation is incredible.",
        author: "Priya Sharma",
        relation: "Parent of 10-year-old",
      },
      {
        quote:
          "The calligraphy classes improved my son's handwriting dramatically. His teachers noticed the change immediately.",
        author: "Rajesh Kumar",
        relation: "Parent of 12-year-old",
      },
      {
        quote:
          "VISAGE helped my child find her voice. The confidence she gained here extends beyond the classroom.",
        author: "Anita Mehta",
        relation: "Parent of 14-year-old",
      },
    ].map((t, i) => (
      <div
        key={i}
        className="
          relative
          bg-[#FAF6F0]
          border border-black/10
          rounded-2xl
          p-8
          transition-all duration-500
          hover:-translate-y-1 hover:shadow-xl
        "
        style={{ animationDelay: `${i * 120}ms` }}
      >
        {/* Quote icon */}
        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-background border border-accent/30 flex items-center justify-center">
          <Quote className="w-4 h-4 text-accent animate-slowRotate" />
        </div>

        {/* Quote text */}
        <p className="text-secondary leading-relaxed mb-8 italic">
          “{t.quote}”
        </p>

        {/* Author */}
        <div className="pt-4 border-t border-black/10">
          <p className="font-heading text-foreground text-sm">
            {t.author}
          </p>
          <p className="text-xs text-secondary">
            {t.relation}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Trust footer */}
  <div className="mt-20 flex justify-center items-center gap-3 text-sm text-secondary">
    <span className="w-2 h-2 rounded-full bg-accent"></span>
    Hundreds of parents trust VISAGE for creative growth
    <span className="w-2 h-2 rounded-full bg-accent"></span>
  </div>

</div>
</section>


      {/* Final CTA */}
      <section className="relative py-28 bg-white overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeUp">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/10 text-accent text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Start the journey today
          </div>

          {/* Heading */}
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Let’s Talk About Your Child’s Growth
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-secondary mb-10 max-w-2xl mx-auto">
            A short conversation can open doors to creativity, confidence, and
            lifelong skills.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="
          inline-flex items-center justify-center gap-3
          px-10 py-4 rounded-xl font-semibold
          bg-accent text-white
          shadow-lg
          hover:-translate-y-1 hover:shadow-xl
          transition-all duration-300
          animate-pulseSoft
        "
            >
              <PhoneCall className="w-5 h-5" />
              Call Now
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="
          inline-flex items-center justify-center gap-3
          px-10 py-4 rounded-xl font-semibold
          bg-white text-accent border-2 border-accent
          hover:bg-accent hover:text-white
          hover:-translate-y-1
          transition-all duration-300
        "
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-sm text-secondary">
            No pressure • Friendly guidance • Clear answers
          </p>
        </div>
      </section>
    </main>
  );
}
