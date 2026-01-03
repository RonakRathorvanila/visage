import Image from "next/image";

export default function Gallery() {
  const galleryItems = [
    { id: 1, category: "Art & Craft", title: "Student Artwork 1", url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop" },
    { id: 2, category: "Calligraphy", title: "Handwriting Sample 1", url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop" },
    { id: 3, category: "Art & Craft", title: "Student Artwork 2", url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop" },
    { id: 4, category: "Design", title: "Wedding Invitation", url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop" },
    { id: 5, category: "Art & Craft", title: "Student Artwork 3", url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop" },
    { id: 6, category: "Calligraphy", title: "Handwriting Sample 2", url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop" },
    { id: 7, category: "Design", title: "Visiting Card Design", url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop" },
    { id: 8, category: "Art & Craft", title: "Student Artwork 4", url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop" },
    { id: 9, category: "Calligraphy", title: "Handwriting Sample 3", url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop" },
    { id: 10, category: "Design", title: "Brochure Design", url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop" },
    { id: 11, category: "Art & Craft", title: "Student Artwork 5", url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop" },
    { id: 12, category: "Design", title: "Gift Hamper", url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            Gallery
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            A glimpse into the creativity and confidence we build
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="aspect-square rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group relative"
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-xs p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-gray-300">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-semibold text-foreground mb-8 text-center">
            Explore by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Art & Craft",
                description: "Student creations showcasing creativity and skill development",
                count: "50+",
              },
              {
                title: "Calligraphy",
                description: "Beautiful handwriting transformations and calligraphic art",
                count: "30+",
              },
              {
                title: "Design Services",
                description: "Professional design work including cards, brochures, and more",
                count: "40+",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-secondary mb-4">{category.description}</p>
                <p className="text-accent font-semibold">{category.count} Works</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-semibold text-foreground mb-4">
            Want to See More?
          </h2>
          <p className="text-lg text-secondary mb-8">
            Visit our studio or contact us to see our complete portfolio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium bg-accent text-white hover:bg-blue-600 shadow-sm hover:shadow-md transition-all duration-200"
            >
              Contact Us
            </a>
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

