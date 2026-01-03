import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            About VISAGE
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            The Face of Life – Where creativity meets confidence
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
                alt="VISAGE Learning Studio"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-4xl font-semibold text-foreground mb-6">
                Who We Are
              </h2>
              <div className="prose prose-lg max-w-none">
            <p className="text-secondary leading-relaxed mb-4">
              VISAGE is a premium education and creative studio based in Gurugram, dedicated to
              nurturing creativity, building confidence, and developing essential life skills in
              children and teenagers. We believe that every child has unique potential waiting to
              be unlocked through creative expression and guided learning.
            </p>
            <p className="text-secondary leading-relaxed mb-4">
              Our approach combines traditional artistic techniques with modern teaching
              methodologies, creating an environment where students feel safe to explore, express,
              and excel. We focus on building not just skills, but confidence that extends far
              beyond the classroom.
            </p>
            <p className="text-secondary leading-relaxed">
              Located in the heart of Gurugram, VISAGE serves as a creative haven for young minds
              seeking to discover their voice, improve their abilities, and build the confidence
              needed to succeed in all aspects of life.
            </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-4xl font-semibold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-secondary leading-relaxed">
                To be the leading creative education center where every child discovers their
                unique voice, builds unshakeable confidence, and develops skills that last a
                lifetime. We envision a world where creativity and self-expression are valued as
                much as academic achievement.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-4xl font-semibold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-secondary leading-relaxed">
                To provide premium, personalized creative education that transforms shy children
                into confident individuals, average students into expressive communicators, and
                hesitant learners into skilled creators. We commit to excellence in teaching,
                genuine care for each student, and unwavering support for parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online + Offline Presence */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-semibold text-foreground mb-6 text-center">
            Our Presence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Offline Learning
              </h3>
              <p className="text-secondary leading-relaxed mb-4">
                Our physical studio in Gurugram provides a premium learning environment with
                dedicated spaces for art, calligraphy, and spoken English classes. Here, students
                benefit from hands-on guidance, peer interaction, and a focused creative
                atmosphere.
              </p>
              <ul className="space-y-2 text-secondary">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>In-person expert instruction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Premium studio facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Personalized attention</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Online Support
              </h3>
              <p className="text-secondary leading-relaxed mb-4">
                We extend our reach through online sessions and digital resources, making quality
                creative education accessible beyond geographical boundaries. Our online platform
                maintains the same standards of excellence and personalization.
              </p>
              <ul className="space-y-2 text-secondary">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Flexible online classes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Digital learning resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Remote project assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-semibold text-foreground mb-8 text-center">
            What We Focus On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Creativity
              </h3>
              <p className="text-secondary text-sm">
                Nurturing artistic expression and innovative thinking
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Confidence
              </h3>
              <p className="text-secondary text-sm">
                Building self-assurance through skill development
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🗣️</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Expression
              </h3>
              <p className="text-secondary text-sm">
                Developing clear communication and self-expression
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-semibold text-foreground mb-4">
            Ready to Begin the Journey?
          </h2>
          <p className="text-lg text-secondary mb-8">
            Join us at VISAGE and watch your child transform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary">
              Get in Touch
            </CTAButton>
            <CTAButton href="/programs" variant="secondary">
              View Programs
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}

