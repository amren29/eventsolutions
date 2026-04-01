import Image from "next/image";
import Link from "next/link";
import Header from "@/components/store/Header";
import Footer from "@/components/store/Footer";
import WhatsAppButton from "@/components/store/WhatsAppButton";
import { FadeIn, FadeInView, SlideIn, StaggerContainer, StaggerItem } from "@/components/store/Animate";

const services = [
  {
    id: "event-supplies",
    title: "Event Supplies",
    description: "We provide a full range of event supplies including tablecloths, cutlery, glassware, napkins, and all the essentials you need to host any event. Everything is cleaned, inspected, and delivered ready to use.",
    highlights: ["500+ items available", "Same day delivery", "Cleaned & inspected"],
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
    category: "Tables & Chairs",
  },
  {
    id: "equipment-rental",
    title: "Equipment Rental",
    description: "Rent professional event equipment without the hassle of buying. From generators and cooling fans to projectors and screens, we have everything to make your event run smoothly.",
    highlights: ["Wide equipment range", "Technical support included", "Flexible rental periods"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    category: "Audio & Sound",
  },
  {
    id: "event-decoration",
    title: "Event Decoration",
    description: "Transform any venue into a stunning space. Our decoration team creates beautiful setups including flower arrangements, backdrops, draping, balloon arches, and themed decorations tailored to your vision.",
    highlights: ["Custom themes", "Fresh & artificial flowers", "Full venue transformation"],
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&h=600&fit=crop",
    category: "Decoration",
  },
  {
    id: "sound-lighting",
    title: "Sound & Lighting",
    description: "Professional sound systems and lighting setups for events of all sizes. From basic PA systems for small gatherings to full concert rigs with moving heads and LED walls, we deliver crystal clear audio and stunning visuals.",
    highlights: ["Events up to 1000 pax", "DMX lighting control", "On site technician"],
    image: "https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=800&h=600&fit=crop",
    category: "Lighting",
  },
  {
    id: "full-event-management",
    title: "Full Event Management",
    description: "Let us handle everything from concept to execution. Our experienced team manages vendor coordination, timeline planning, budget tracking, logistics, and on the day coordination so you can enjoy your event stress free.",
    highlights: ["End to end planning", "Dedicated event manager", "200+ events managed"],
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
    category: "Services",
  },
  {
    id: "tent-canopy",
    title: "Tent & Canopy",
    description: "We offer a wide selection of tents and canopies for outdoor events. From small 10x10 canopies to large marquees that fit hundreds of guests. All tents come with professional setup and teardown by our crew.",
    highlights: ["10x10 to 40x40 sizes", "Waterproof & windproof", "Setup crew included"],
    image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=800&h=600&fit=crop",
    category: "Tents & Canopy",
  },
  {
    id: "table-chair-rental",
    title: "Table & Chair Rental",
    description: "Choose from our collection of tables and chairs to suit any event style. We offer round tables, banquet tables, cocktail tables, Tiffany chairs, plastic chairs, and more. All delivered and arranged to your floor plan.",
    highlights: ["Multiple styles available", "Delivered & arranged", "Bulk pricing available"],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop",
    category: "Tables & Chairs",
  },
  {
    id: "stage-setup",
    title: "Stage Setup",
    description: "Custom stage and platform setups for performances, speeches, and ceremonies. Available in various sizes with skirting, steps, and safety railings. We also provide runways for fashion shows and product launches.",
    highlights: ["Custom sizes", "Safety railings included", "Runway options available"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    category: "Stage & Platform",
  },
  {
    id: "catering-equipment",
    title: "Catering Equipment",
    description: "Complete catering equipment rental including chafing dishes, buffet table setups, drink dispensers, and specialty machines like ice cream makers. Everything you need to serve food and beverages professionally.",
    highlights: ["Full buffet setups", "Specialty machines", "Serving utensils included"],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop",
    category: "Catering Equipment",
  },
  {
    id: "photo-booth",
    title: "Photo Booth",
    description: "Add fun to your event with our instant print photo booths and trending 360 video booths. Guests get instant prints or videos to share on social media. Includes props, custom templates, and a friendly attendant.",
    highlights: ["Instant prints", "360 video option", "Unlimited sessions"],
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=600&fit=crop",
    category: "Photography",
  },
  {
    id: "emcee-entertainment",
    title: "Emcee & Entertainment",
    description: "Professional bilingual emcees and live entertainment for your event. Our emcees are experienced in hosting weddings, corporate events, and formal ceremonies. We also provide live bands, DJs, and performers.",
    highlights: ["Bilingual (BM & English)", "Live bands available", "Experienced hosts"],
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
    category: "Services",
  },
  {
    id: "setup-teardown",
    title: "Setup & Teardown",
    description: "Our professional crew handles all the heavy lifting. We arrive early to set up furniture, equipment, and decorations according to your plan, and return after the event to pack everything down efficiently.",
    highlights: ["Professional crew", "Early setup", "Full cleanup after event"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
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

        {/* Quick Nav */}
        <FadeIn delay={0.1}>
          <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 mb-16">
            {services.map((s) => (
              <StaggerItem key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="border border-border rounded-md px-3 py-2.5 text-xs text-center text-gray hover:text-primary hover:border-primary/30 transition-colors block"
                >
                  {s.title}
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>

        {/* Service Sections */}
        <div className="space-y-24">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            const num = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-8"
              >
                <div className={`grid lg:grid-cols-2 gap-10 items-center`}>
                  {/* Image */}
                  <SlideIn direction={isEven ? "left" : "right"} className={!isEven ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/3] bg-gray-light overflow-hidden rounded-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </SlideIn>

                  {/* Info */}
                  <SlideIn direction={isEven ? "right" : "left"} className={!isEven ? "lg:order-1" : ""}>
                    <div>
                      <span className="text-xs text-gray uppercase tracking-wide">{num}</span>
                      <h2 className="text-xl font-bold mt-2">{service.title}</h2>
                      <p className="text-sm text-gray mt-4 leading-relaxed">{service.description}</p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-3 mt-5">
                        {service.highlights.map((h) => (
                          <span key={h} className="text-xs border border-border rounded-md px-3 py-1.5">
                            {h}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 mt-6">
                        <a
                          href={`https://wa.me/60189023676?text=Hi, I'd like to know more about your ${service.title} service`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-md hover:bg-black transition-colors"
                        >
                          Enquire Now
                        </a>
                        <Link
                          href={`/products?category=${encodeURIComponent(service.category)}`}
                          className="px-6 py-2.5 border border-border text-sm font-medium rounded-md hover:border-primary transition-colors"
                        >
                          View Products
                        </Link>
                      </div>
                    </div>
                  </SlideIn>
                </div>
              </div>
            );
          })}
        </div>
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
                href="https://wa.me/60189023676?text=Hi, I need help planning my event. Can you recommend services?"
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
