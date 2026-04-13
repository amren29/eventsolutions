import Image from "next/image";
import Link from "next/link";
import Header from "@/components/store/Header";
import Footer from "@/components/store/Footer";
import WhatsAppButton from "@/components/store/WhatsAppButton";
import { FadeIn, FadeInView, StaggerContainer, StaggerItem } from "@/components/store/Animate";

const services = [
  {
    id: "event-supplies",
    title: "Event Supplies",
    description: "Full range of event supplies including tablecloths, cutlery, glassware, and essentials.",
    highlights: ["500+ items", "Same day delivery", "Cleaned & inspected"],
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
    category: "Tables & Chairs",
  },
  {
    id: "equipment-rental",
    title: "Equipment Rental",
    description: "Professional event equipment from generators and cooling fans to projectors and screens.",
    highlights: ["Wide range", "Technical support", "Flexible rental"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    category: "Audio & Sound",
  },
  {
    id: "event-decoration",
    title: "Event Decoration",
    description: "Beautiful setups including flower arrangements, backdrops, draping, and themed decorations.",
    highlights: ["Custom themes", "Fresh flowers", "Full transformation"],
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop",
    category: "Decoration",
  },
  {
    id: "sound-lighting",
    title: "Sound & Lighting",
    description: "Professional sound systems and lighting for events of all sizes, with on-site technician.",
    highlights: ["Up to 1000 pax", "DMX control", "Technician included"],
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
    category: "Lighting",
  },
  {
    id: "full-event-management",
    title: "Full Event Management",
    description: "End-to-end planning and execution including vendor coordination, logistics, and day-of management.",
    highlights: ["End to end", "Dedicated manager", "200+ events"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
    category: "Services",
  },
  {
    id: "tent-canopy",
    title: "Tent & Canopy",
    description: "Wide selection of tents and canopies from small 10x10 to large marquees with setup crew.",
    highlights: ["10x10 to 40x40", "Waterproof", "Setup included"],
    image: "https://images.unsplash.com/photo-1529543544282-ea57407bc2e3?w=600&h=400&fit=crop",
    category: "Tents & Canopy",
  },
  {
    id: "table-chair-rental",
    title: "Table & Chair Rental",
    description: "Round tables, banquet tables, cocktail tables, Tiffany chairs, and more delivered to your venue.",
    highlights: ["Multiple styles", "Delivered & arranged", "Bulk pricing"],
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
    category: "Tables & Chairs",
  },
  {
    id: "stage-setup",
    title: "Stage Setup",
    description: "Custom stage and platform setups with skirting, steps, and safety railings for any event.",
    highlights: ["Custom sizes", "Safety railings", "Runway options"],
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
    category: "Stage & Platform",
  },
  {
    id: "catering-equipment",
    title: "Catering Equipment",
    description: "Chafing dishes, buffet setups, drink dispensers, and specialty machines for professional catering.",
    highlights: ["Full buffet setups", "Specialty machines", "Utensils included"],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
    category: "Catering Equipment",
  },
  {
    id: "photo-booth",
    title: "Photo Booth",
    description: "Instant print photo booths and 360 video booths with props, templates, and attendant.",
    highlights: ["Instant prints", "360 video", "Unlimited sessions"],
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=400&fit=crop",
    category: "Photography",
  },
  {
    id: "emcee-entertainment",
    title: "Emcee & Entertainment",
    description: "Professional bilingual emcees, live bands, DJs, and performers for any occasion.",
    highlights: ["Bilingual", "Live bands", "Experienced hosts"],
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
    category: "Services",
  },
  {
    id: "setup-teardown",
    title: "Setup & Teardown",
    description: "Professional crew for early setup and post-event teardown, handling all furniture and equipment.",
    highlights: ["Professional crew", "Early setup", "Full cleanup"],
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
    category: "Services",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header active="services" />

      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <FadeIn>
          <h1 className="text-2xl font-bold mb-1">Our Services</h1>
          <p className="text-sm text-gray mb-10">Everything you need for a successful event, all under one roof.</p>
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

                  <div className="flex items-center gap-2 mt-auto pt-5">
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
                      className="px-4 py-2 border border-border text-sm font-medium rounded-md hover:border-primary transition-colors"
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
            <h2 className="text-xl font-bold">Not sure what you need?</h2>
            <p className="text-sm text-gray mt-2 max-w-md mx-auto">
              Tell us about your event and we will recommend the best services and packages for you.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <a
                href="https://wa.me/60183570998?text=Hi, I need help planning my event. Can you recommend services?"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-md hover:bg-black transition-colors"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="px-6 py-2.5 border border-border text-sm font-medium rounded-md hover:border-primary transition-colors"
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
