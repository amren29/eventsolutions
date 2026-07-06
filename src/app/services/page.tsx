import Image from "next/image";
import Link from "next/link";
import Header from "@/components/store/Header";
import Footer from "@/components/store/Footer";
import WhatsAppButton from "@/components/store/WhatsAppButton";
import { FadeIn, FadeInView, StaggerContainer, StaggerItem } from "@/components/store/Animate";

const services = [
  {
    id: "event-management",
    title: "Event Management",
    description: "Full end-to-end event management from concept to execution — vendor coordination, logistics, timeline, and on-the-day management for corporate events, launches, galas, and more.",
    highlights: ["End-to-end planning", "Dedicated event manager", "200+ events delivered"],
    image: "/images/Event%20Management.jpg",
    category: "Services",
  },
  {
    id: "event-production",
    title: "Event Production",
    description: "Professional event production including stage design, LED screens, audio-visual systems, lighting rigs, and technical crew to bring your event to life.",
    highlights: ["Stage & set design", "LED screens & AV", "Full technical crew"],
    image: "/images/Event%20Production.webp",
    category: "Stage & Platform",
  },
  {
    id: "exhibition-booth-design-build",
    title: "Exhibition Booth Design & Build",
    description: "Custom exhibition booths and display stands tailored to your brand — from concept design to full fabrication and installation for trade shows, expos, and roadshows.",
    highlights: ["Custom branding", "Modular & bespoke", "Full installation"],
    image: "/images/Exhibition%20Booth%20Design%20%26%20Build.webp",
    category: "Exhibition",
  },
  {
    id: "audio-visual-lighting",
    title: "Audio, Visual & Lighting",
    description: "Professional audio systems, visual displays, and lighting for events of all sizes, with on-site technician.",
    highlights: ["Up to 1000 pax", "LED screens & AV", "Technician included"],
    image: "/images/Audio%2C%20Visual%20%26%20Lighting.webp",
    category: "Lighting",
  },
  {
    id: "stage-setup",
    title: "Stage Setup",
    description: "Custom stage and platform setups with skirting, steps, and safety railings for any event.",
    highlights: ["Custom sizes", "Safety railings", "Runway options"],
    image: "/images/Stage%20Setup.jpg",
    category: "Stage & Platform",
  },
  {
    id: "event-equipment-rental",
    title: "Event Equipment Rental",
    description: "Wide range of event equipment for rent — tables, chairs, generators, cooling fans, projectors, screens, and more delivered to your venue.",
    highlights: ["Wide range", "Delivered & arranged", "Flexible rental"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    category: "Tables & Chairs",
  },
  {
    id: "event-decoration",
    title: "Event Decoration",
    description: "Beautiful setups including flower arrangements, backdrops, draping, and themed decorations.",
    highlights: ["Custom themes", "Fresh flowers", "Full transformation"],
    image: "/images/Event%20Decoration.webp",
    category: "Decoration",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header active="services" />

      <div className="max-w-[1400px] mx-auto px-4 py-8 sm:py-12">
        <FadeIn>
          <h1 className="text-2xl font-bold mb-1">Event & Exhibition Services</h1>
          <p className="text-sm text-gray mb-10">From exhibition booths to full event management — everything under one roof.</p>
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
