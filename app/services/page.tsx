import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Visiting Cards",
      description:
        "Professional, elegant visiting cards designed to make a lasting impression. Custom designs that reflect your brand identity and personal style.",
      features: [
        "Premium quality printing",
        "Custom design options",
        "Multiple finish options",
        "Quick turnaround",
      ],
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    },
    {
      title: "Flyers & Brochures",
      description:
        "Eye-catching marketing materials that effectively communicate your message. From event flyers to detailed product brochures, we create designs that convert.",
      features: [
        "Professional layouts",
        "Print-ready designs",
        "Brand consistency",
        "Multiple format options",
      ],
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    },
    {
      title: "Wedding Invitation Cards",
      description:
        "Beautiful, personalized wedding invitations that set the tone for your special day. Elegant designs that capture the essence of your celebration.",
      features: [
        "Custom design concepts",
        "Premium paper options",
        "Multiple design styles",
        "Coordination with theme",
      ],
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    },
    {
      title: "Customised Gift Hampers",
      description:
        "Thoughtfully curated and beautifully presented gift hampers for any occasion. From corporate gifts to personal celebrations, we create memorable presentations.",
      features: [
        "Custom curation",
        "Elegant packaging",
        "Wide product selection",
        "Personalized touches",
      ],
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    },
    {
      title: "Professional & Personalised Designs",
      description:
        "Comprehensive design solutions for all your creative needs. From logo design to complete brand identity, we deliver professional results.",
      features: [
        "Brand identity design",
        "Logo creation",
        "Social media graphics",
        "Complete design packages",
      ],
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            Design Services
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            Premium creative design solutions for all your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {service.imageUrl && (
                  <div className="relative w-full h-48">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-8">
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-secondary leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-secondary">
                        <span className="text-accent mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-semibold text-foreground mb-8 text-center">
            Why Choose Our Design Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Premium Quality
              </h3>
              <p className="text-secondary">
                Every design is crafted with attention to detail and commitment to excellence.
                We don't compromise on quality.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Personalized Approach
              </h3>
              <p className="text-secondary">
                Your vision is unique, and so should be your design. We work closely with you to
                bring your ideas to life.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Timely Delivery
              </h3>
              <p className="text-secondary">
                We understand deadlines matter. Our efficient workflow ensures you get your
                designs when you need them.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Competitive Pricing
              </h3>
              <p className="text-secondary">
                Premium quality doesn't have to mean premium prices. We offer competitive rates
                for exceptional value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-semibold text-foreground mb-12 text-center">
            Our Design Process
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We start by understanding your needs, vision, and requirements. This helps us create designs that truly represent you.",
              },
              {
                step: "02",
                title: "Concept Development",
                description:
                  "Our team develops initial concepts and design directions based on your brief and preferences.",
              },
              {
                step: "03",
                title: "Design & Refinement",
                description:
                  "We create the designs and work with you through revisions until you're completely satisfied.",
              },
              {
                step: "04",
                title: "Final Delivery",
                description:
                  "Once approved, we deliver print-ready files or coordinate printing, ensuring everything meets our quality standards.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-heading text-xl font-semibold text-accent">
                      {item.step}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-semibold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-secondary mb-8">
            Let's discuss your design needs and create something beautiful together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary">
              Request a Quote
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

