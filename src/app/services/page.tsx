import Image from "next/image";
import Link from "next/link";
import Header from "@/components/store/Header";
import Footer from "@/components/store/Footer";
import WhatsAppButton from "@/components/store/WhatsAppButton";
import { FadeIn, FadeInView, StaggerContainer, StaggerItem } from "@/components/store/Animate";

const services = [
  {
    id: "exhibition-booth-design-build",
    title: "Exhibition Booth Design & Build",
    description: "Custom exhibition booths and display stands tailored to your brand — from concept design to full fabrication and installation for trade shows, expos, and roadshows.",
    highlights: ["Custom branding", "Modular & bespoke", "Full installation"],
    image: "/images/Exhibition%20Booth%20Design%20%26%20Build.webp",
    category: "Exhibition",
  },
  {
    id: "trade-shows-expositions",
    title: "Trade Shows & Expositions",
    description: "End-to-end management of trade show participation and exposition setups — from floor planning and booth construction to logistics and on-site coordination.",
    highlights: ["Floor planning", "Multi-booth capable", "On-site crew"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
    category: "Exhibition",
  },
  {
    id: "corporate-events-conferences",
    title: "Corporate Events & Conferences",
    description: "Professional planning and execution of corporate events, conferences, seminars, gala dinners, and annual dinners — tailored to your brand and objectives.",
    highlights: ["Full event planning", "AV & staging", "Up to 1000+ pax"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
    category: "Services",
  },
  {
    id: "product-launches-brand-activations",
    title: "Product Launches & Brand Activations",
    description: "Memorable product launches and brand activation experiences designed to captivate audiences, generate buzz, and strengthen your brand presence.",
    highlights: ["Creative concepts", "Brand storytelling", "Experiential design"],
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
    category: "Services",
  },
  {
    id: "event-planning-project-management",
    title: "Event Planning & Project Management",
    description: "Comprehensive event planning and project management — vendor coordination, timelines, budgeting, logistics, and dedicated on-the-day management from start to finish.",
    highlights: ["Dedicated manager", "End-to-end planning", "200+ events delivered"],
    image: "/images/Event%20Management.jpg",
    category: "Services",
  },
  {
    id: "stage-lighting-av-production",
    title: "Stage, Lighting & Audio-Visual Production",
    description: "Professional stage design, lighting rigs, LED screens, sound systems, and full AV production with a technical crew for events of any scale.",
    highlights: ["Stage & set design", "LED screens & AV", "Full technical crew"],
    image: "/images/Event%20Production.webp",
    category: "Stage & Platform",
  },
  {
    id: "event-logistics-installation",
    title: "Event Logistics & Installation",
    description: "Seamless event logistics including transportation, setup, installation, and teardown — handled by our experienced crew so every detail is in place on time.",
    highlights: ["Delivery & setup", "On-time execution", "Professional crew"],
    image: "/images/Stage%20Setup.jpg",
    category: "Services",
  },
  {
    id: "custom-displays-event-rentals",
    title: "Custom Displays, Exhibition Systems & Event Rentals",
    description: "Custom display solutions, modular exhibition systems, and a full range of event rental equipment — from furniture and flooring to signage and specialty items.",
    highlights: ["Custom fabrication", "Modular systems", "Wide rental range"],
    image: "/images/Event%20Decoration.webp",
    category: "Exhibition",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header active="services" />

      <div className="max-w-[1400px] mx-auto px-4 py-8 sm:py-12">
        <FadeIn>
          <h1 className="text-2xl font-bold mb-1">Our Services</h1>
          <p className="text-sm text-gray mb-10">From exhibition booth design to full event production — we deliver end-to-end solutions with precision and creativity.</p>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <div
                id={service.id}
                className="border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors flex flex-col h-full scroll-mt-8"
              >
                <div className="relative aspect-[3/2] bg-gray-light overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="font-bold">{service.title}</h2>
                  <p className="text-sm text-gray mt-2 leading-relaxed">{service.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.highlights.map((h) => (
                      <span key={h} className="text-xs border border-border rounded-md px-2.5 py-1">
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-auto pt-5">
                    <a
                      href={`https://wa.me/60183570998?text=Hi, I'd like to know more about your ${service.title} service`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-black transition-colors"
                    >
                      Enquire Now
                    </a>
                    <Link
                      href={`/products?category=${encodeURIComponent(service.category)}`}
                      className="text-center px-4 py-2 border border-border text-sm font-medium rounded-md hover:border-primary transition-colors"
                    >
                      Products
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* CTA */}
      <FadeInView>
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-4 py-16 text-center">
            <h2 className="text-xl font-bold">Planning an event or exhibition?</h2>
            <p className="text-sm text-gray mt-2 max-w-md mx-auto">
              Tell us about your project and we will recommend the best services and packages for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
              <a
                href="https://wa.me/60183570998?text=Hi, I need help planning my event. Can you recommend services?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-md hover:bg-black transition-colors"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center px-6 py-2.5 border border-border text-sm font-medium rounded-md hover:border-primary transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </FadeInView>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
