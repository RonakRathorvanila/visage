import Image from "next/image";
import Link from "next/link";

import CTAButton from "@/components/CTAButton";
import ProgramCard from "@/components/ProgramCard";
import TestimonialCard from "@/components/TestimonialCard";

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

  // Design Services
  CreditCard,
  FileImage,
  Heart,
  Gift,

  // Hassle-Free Section
  BookOpen,
  Boxes,
  FileText,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* /* ============================
   🔥 HERO SECTION
============================ */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop"
            alt="VISAGE Learning Studio"
            fill
            priority
            className="object-cover opacity-25 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-accent/10"></div>
        </div>

        {/* Animated glow blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-24 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl animate-float"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeUp">
          {/* Brand */}
          <p className="font-heading text-sm uppercase tracking-widest text-accent mb-4">
            VISAGE • The Face of Life
          </p>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Turn Your Child’s
            <span className="block text-accent animate-fadeUp delay-150">
              Creativity Into Confidence
            </span>
          </h1>

          {/* Sub headline */}
          <p className="text-lg md:text-2xl text-secondary max-w-3xl mx-auto mb-10 animate-fadeUp delay-300">
            Art, Communication & Creative Learning that helps kids & teens
            <span className="font-medium text-foreground">
              {" "}
              express fearlessly and shine everywhere.
            </span>
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: Users, label: "Kids & Teens Focused" },
              { icon: Palette, label: "Creative Skill Building" },
              { icon: Mic2, label: "Confidence & Expression" },
              { icon: HeartHandshake, label: "Trusted by Parents" },
            ].map((item, i) => (
              <span
                key={i}
                className="
            flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/70 backdrop-blur border
            text-sm font-medium text-secondary
            shadow-sm
            animate-fadeUp
            hover:-translate-y-1 hover:shadow-md
            transition-all duration-300
          "
                style={{ animationDelay: `${400 + i * 120}ms` }}
              >
                <item.icon className="w-4 h-4 text-accent animate-float" />
                {item.label}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeUp delay-700">
            <a
              href="tel:+919876543210"
              className="
          inline-flex items-center gap-3 justify-center
          px-10 py-4 rounded-xl font-semibold
          bg-accent text-white
          shadow-lg
          hover:-translate-y-1 hover:shadow-xl
          transition-all duration-300
          animate-pulseSoft
        "
            >
              <PhoneCall className="w-5 h-5" />
              Book a Free Consultation
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="
          inline-flex items-center gap-3 justify-center
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

          {/* Micro trust text */}
          <p className="mt-8 text-sm text-secondary animate-fadeUp delay-1000">
            No pressure • Friendly mentors • Result-driven learning
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


{/* Programs Overview */}
<section className="relative py-24 bg-gray-50 overflow-hidden">

  {/* Soft background glow */}
  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-16 animate-fadeUp">
      <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">
        Programs That Make a Difference
      </p>

      <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-5">
        Learning That Builds Confidence
      </h2>

      <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">
        Carefully designed programs that nurture creativity,
        communication, and self-belief in every child.
      </p>
    </div>

    {/* Program Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div
        className="animate-fadeUp"
        style={{ animationDelay: "0ms" }}
      >
        <ProgramCard
          title="Art & Craft Classes"
          description="Expert-led creative sessions that inspire imagination and artistic expression."
          features={[
            "Expert-led creative sessions",
            "Hands-on learning",
            "Kids & teens",
          ]}
          imageUrl="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
          imageAlt="Children creating art and craft"
        />
      </div>

      {/* Card 2 */}
      <div
        className="animate-fadeUp hover:-translate-y-2 transition-transform duration-300"
        style={{ animationDelay: "150ms" }}
      >
        <ProgramCard
          title="Calligraphy & Handwriting"
          description="Transform handwriting into an art form while improving speed and presentation."
          features={[
            "Improve handwriting",
            "Better speed & presentation",
            "School-ready results",
          ]}
          imageUrl="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop"
          imageAlt="Beautiful calligraphy and handwriting"
        />
      </div>

      {/* Card 3 */}
      <div
        className="animate-fadeUp hover:-translate-y-2 transition-transform duration-300"
        style={{ animationDelay: "300ms" }}
      >
        <ProgramCard
          title="Spoken English & Confidence"
          description="Build fluency, communication skills, and lifelong confidence."
          features={[
            "English fluency",
            "Communication & body language",
            "Confidence for life",
          ]}
          imageUrl="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
          imageAlt="Confident student speaking"
        />
      </div>

    </div>

    {/* CTA */}
    <div
      className="text-center mt-16 animate-fadeUp"
      style={{ animationDelay: "450ms" }}
    >
      <CTAButton href="/programs" variant="primary">
        Explore All Programs
      </CTAButton>
    </div>

  </div>
</section>


{/*
/* Hassle-Free Solutions Section */ }
<section className="relative py-24 bg-white overflow-hidden">

  {/* Soft background glow */}
  <div className="absolute -bottom-32 right-1/2 translate-x-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />

  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-14 animate-fadeUp">
      <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">
        We’ve Got You Covered
      </p>

      <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
        Hassle-Free Creative Support for Parents
      </h2>

      <p className="text-lg text-secondary max-w-2xl mx-auto">
        From school projects to last-minute deadlines,
        we make sure your child never feels stuck or stressed.
      </p>
    </div>

    {/* Solutions Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Card 1 */}
      <div
        className="flex gap-4 p-6 rounded-2xl bg-white border shadow-sm
                   hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                   animate-fadeUp"
        style={{ animationDelay: "0ms" }}
      >
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">
            School Projects
          </h3>
          <p className="text-secondary text-sm">
            Professional help with school assignments and creative submissions.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="flex gap-4 p-6 rounded-2xl bg-white border shadow-sm
                   hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                   animate-fadeUp"
        style={{ animationDelay: "120ms" }}
      >
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
          <Boxes className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">
            Models & Assignments
          </h3>
          <p className="text-secondary text-sm">
            Expert support for 3D models, presentations, and complex work.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="flex gap-4 p-6 rounded-2xl bg-white border shadow-sm
                   hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                   animate-fadeUp"
        style={{ animationDelay: "240ms" }}
      >
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
          <FileText className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">
            Handmade Designed Sheets
          </h3>
          <p className="text-secondary text-sm">
            Custom-made worksheets designed to match your child’s learning style.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div
        className="flex gap-4 p-6 rounded-2xl bg-white border shadow-sm
                   hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                   animate-fadeUp"
        style={{ animationDelay: "360ms" }}
      >
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
          <Clock className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">
            Last-Minute Project Help
          </h3>
          <p className="text-secondary text-sm">
            Reliable support when deadlines are tight and pressure is high.
          </p>
        </div>
      </div>

    </div>

    {/* Trust Line */}
    <div
      className="mt-12 flex justify-center items-center gap-2 text-sm text-secondary animate-fadeUp"
      style={{ animationDelay: "480ms" }}
    >
      <ShieldCheck className="w-4 h-4 text-accent" />
      Trusted support. Zero stress. Happy parents.
    </div>

  </div>
</section>




{/* /* Design Services Preview */ }


<section className="relative py-24 bg-gray-50 overflow-hidden">

  {/* Soft background glow */}
  <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-16 animate-fadeUp">
      <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">
        Creative Design Studio
      </p>

      <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-5">
        Design Services
      </h2>

      <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">
        Premium, personalised designs crafted with creativity,
        clarity, and attention to detail.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Visiting Cards */}
      <div
        className="group relative h-72 rounded-2xl overflow-hidden shadow-sm
                   hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                   animate-fadeUp"
      >
        <Image
          src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&h=600&fit=crop"
          alt="Visiting Cards Design"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <CreditCard className="w-6 h-6 mb-2 text-accent" />
          <h3 className="font-heading text-xl font-semibold">
            Visiting Cards
          </h3>
        </div>
      </div>

      {/* Flyers & Brochures */}
      <div
        className="group relative h-72 rounded-2xl overflow-hidden shadow-sm
                   hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                   animate-fadeUp"
        style={{ animationDelay: "120ms" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1581091215367-59ab6c5c0c1b?w=800&h=600&fit=crop"
          alt="Flyers and Brochures"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <FileImage className="w-6 h-6 mb-2 text-accent" />
          <h3 className="font-heading text-xl font-semibold">
            Flyers & Brochures
          </h3>
        </div>
      </div>

      {/* Wedding Invitation Cards */}
      <div
        className="group relative h-72 rounded-2xl overflow-hidden shadow-sm
                   hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                   animate-fadeUp"
        style={{ animationDelay: "240ms" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=600&fit=crop"
          alt="Wedding Invitation Design"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <Heart className="w-6 h-6 mb-2 text-accent" />
          <h3 className="font-heading text-xl font-semibold">
            Wedding Invitation Cards
          </h3>
        </div>
      </div>

      {/* Customised Gift Hampers */}
      <div
        className="group relative h-72 rounded-2xl overflow-hidden shadow-sm
                   hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                   animate-fadeUp"
        style={{ animationDelay: "360ms" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1607082349566-1870e1b5d2db?w=800&h=600&fit=crop"
          alt="Custom Gift Hampers"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <Gift className="w-6 h-6 mb-2 text-accent" />
          <h3 className="font-heading text-xl font-semibold">
            Customised Gift Hampers
          </h3>
        </div>
      </div>

      {/* Professional Designs */}
      <div
        className="group relative h-72 rounded-2xl overflow-hidden shadow-sm
                   hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                   animate-fadeUp"
        style={{ animationDelay: "480ms" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
          alt="Professional Design Work"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <Sparkles className="w-6 h-6 mb-2 text-accent" />
          <h3 className="font-heading text-xl font-semibold">
            Professional & Personalised Designs
          </h3>
        </div>
      </div>

    </div>

    {/* CTA */}
    <div className="text-center mt-16 animate-fadeUp">
      <CTAButton href="/services" variant="primary">
        View All Services
      </CTAButton>
    </div>

  </div>
</section>



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
      A glimpse into the creativity, confidence,
      and skills our students build every day.
    </p>
  </div>

  {/* Gallery Grid */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {[
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop",
        alt: "Art and craft work",
        label: "Art & Craft",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
        alt: "Calligraphy artwork",
        label: "Calligraphy",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop",
        alt: "Student artwork",
        label: "Student Work",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
        alt: "Design work",
        label: "Design Projects",
      },
      {
        id: 5,
        url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
        alt: "Handwriting sample",
        label: "Handwriting",
      },
      {
        id: 6,
        url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop",
        alt: "Creative project",
        label: "Creative Projects",
      },
      {
        id: 7,
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
        alt: "Design service",
        label: "Design Services",
      },
      {
        id: 8,
        url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
        alt: "Artistic creation",
        label: "Artistic Creations",
      },
    ].map((item, index) => (
      <div
        key={item.id}
        className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm
                   hover:shadow-xl transition-all duration-300 cursor-pointer
                   animate-fadeUp"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <Image
          src={item.url}
          alt={item.alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Label */}
        <div className="absolute bottom-4 left-4 right-4 text-white
                        translate-y-3 group-hover:translate-y-0
                        opacity-0 group-hover:opacity-100
                        transition-all duration-300">
          <p className="text-sm font-semibold tracking-wide">
            {item.label}
          </p>
        </div>
      </div>
    ))}

  </div>

  {/* CTA */}
  <div className="text-center mt-16 animate-fadeUp">
    <CTAButton href="/gallery" variant="secondary">
      View Full Gallery
    </CTAButton>
  </div>

</div>
</section>


{/* /* Trust Section - Testimonials */ }
<section className="relative py-24 bg-gray-50 overflow-hidden">

  {/* Soft background glow */}
  <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-16 animate-fadeUp">
      <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">
        Parents Trust Us
      </p>

      <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-5">
        Trusted by Parents
      </h2>

      <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">
        Real stories of growth, confidence,
        and positive change beyond the classroom.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* Testimonial 1 */}
      <div
        className="relative animate-fadeUp hover:-translate-y-2 transition-all duration-300"
        style={{ animationDelay: "0ms" }}
      >
        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
          <Quote className="w-5 h-5 text-accent" />
        </div>
        <TestimonialCard
          quote="My daughter went from being too shy to speak in class to confidently presenting her art projects. The transformation is incredible."
          author="Priya Sharma"
          relation="Parent of 10-year-old"
        />
      </div>

      {/* Testimonial 2 */}
      <div
        className="relative animate-fadeUp hover:-translate-y-2 transition-all duration-300"
        style={{ animationDelay: "120ms" }}
      >
        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
          <Quote className="w-5 h-5 text-accent" />
        </div>
        <TestimonialCard
          quote="The calligraphy classes improved my son's handwriting dramatically. His teachers noticed the change immediately."
          author="Rajesh Kumar"
          relation="Parent of 12-year-old"
        />
      </div>

      {/* Testimonial 3 */}
      <div
        className="relative animate-fadeUp hover:-translate-y-2 transition-all duration-300"
        style={{ animationDelay: "240ms" }}
      >
        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
          <Quote className="w-5 h-5 text-accent" />
        </div>
        <TestimonialCard
          quote="VISAGE helped my child find her voice. The confidence she gained here extends beyond the classroom."
          author="Anita Mehta"
          relation="Parent of 14-year-old"
        />
      </div>

    </div>

    {/* Trust footer line */}
    <div
      className="mt-16 flex justify-center items-center gap-2 text-sm text-secondary animate-fadeUp"
      style={{ animationDelay: "360ms" }}
    >
      <span className="w-2 h-2 rounded-full bg-accent"></span>
      Hundreds of parents trust VISAGE for creative growth
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
      A short conversation can open doors to creativity,
      confidence, and lifelong skills.
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
