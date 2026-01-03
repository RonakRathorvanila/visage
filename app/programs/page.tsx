import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function Programs() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            Comprehensive creative education designed to build confidence and skills
          </p>
        </div>
      </section>

      {/* Art & Craft */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Art & Craft Classes
              </h2>
              <p className="text-lg text-secondary leading-relaxed mb-6">
                Our Art & Craft program is designed to unleash creativity while building fine motor
                skills, patience, and artistic confidence. Expert-led sessions provide hands-on
                learning experiences that inspire imagination and self-expression.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What Kids Learn:</h3>
                  <ul className="space-y-2 text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Various art techniques and mediums</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Creative problem-solving through projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Color theory and composition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Handcrafting skills and attention to detail</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Age Group:</h3>
                  <p className="text-secondary">5-16 years (grouped by age and skill level)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Outcome for Parents:</h3>
                  <p className="text-secondary">
                    Watch your child develop patience, creativity, and the ability to create
                    beautiful artwork independently. Perfect for school projects and personal
                    expression.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Confidence & Skill Focus:</h3>
                  <p className="text-secondary">
                    Builds artistic confidence, improves fine motor skills, enhances creative
                    thinking, and develops pride in personal creations.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=800&fit=crop"
                alt="Art & Craft Classes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calligraphy & Handwriting */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=800&fit=crop"
                alt="Calligraphy & Handwriting"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Calligraphy & Handwriting
              </h2>
              <p className="text-lg text-secondary leading-relaxed mb-6">
                Transform handwriting from a challenge into an art form. Our program focuses on
                improving legibility, speed, and presentation while introducing the beautiful art
                of calligraphy. Perfect for students who need better handwriting for school and
                exams.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What Kids Learn:</h3>
                  <ul className="space-y-2 text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Proper letter formation and spacing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Speed writing techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Calligraphy basics and decorative writing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Presentation skills for assignments</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Age Group:</h3>
                  <p className="text-secondary">7-16 years (beginner to advanced levels)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Outcome for Parents:</h3>
                  <p className="text-secondary">
                    Noticeable improvement in handwriting quality, faster writing speed, and
                    better presentation in school assignments. Teachers will appreciate the
                    change.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Confidence & Skill Focus:</h3>
                  <p className="text-secondary">
                    Builds confidence in written expression, improves exam performance through
                    better presentation, and develops pride in neat, legible handwriting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spoken English & Confidence */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Spoken English & Confidence
              </h2>
              <p className="text-lg text-secondary leading-relaxed mb-6">
                Our most transformative program focuses on building English fluency, communication
                skills, and unshakeable confidence. We help children find their voice and express
                themselves clearly and confidently in any situation.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What Kids Learn:</h3>
                  <ul className="space-y-2 text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Fluent English speaking and pronunciation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Effective communication techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Body language and presentation skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Public speaking and confidence building</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Age Group:</h3>
                  <p className="text-secondary">8-18 years (grouped by proficiency level)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Outcome for Parents:</h3>
                  <p className="text-secondary">
                    Watch your child transform from shy to confident, from hesitant speaker to
                    articulate communicator. The confidence gained here extends to school
                    presentations, social situations, and future opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Confidence & Skill Focus:</h3>
                  <p className="text-secondary">
                    This program is specifically designed to build lifelong confidence. Students
                    learn to express themselves clearly, handle public speaking situations, and
                    communicate effectively in English. The confidence built here is the most
                    valuable outcome.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop"
                alt="Spoken English & Confidence"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-semibold text-foreground mb-4">
            Ready to Enroll?
          </h2>
          <p className="text-lg text-secondary mb-8">
            Contact us to learn more about our programs and find the perfect fit for your child
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary">
              Get in Touch
            </CTAButton>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white transition-all duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

