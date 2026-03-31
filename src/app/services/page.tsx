import Image from "next/image";
import Header from "@/components/store/Header";
import Footer from "@/components/store/Footer";
import WhatsAppButton from "@/components/store/WhatsAppButton";
import { FadeIn, SlideIn } from "@/components/store/Animate";

const services = [
  {
    title: "Event Supplies",
    description: "We provide a full range of event supplies including tablecloths, cutlery, glassware, napkins, and all the essentials you need to host any event. Everything is cleaned, inspected, and delivered ready to use.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
  },
  {
    title: "Equipment Rental",
    description: "Rent professional event equipment without the hassle of buying. From generators and cooling fans to projectors and screens, we have everything to make your event run smoothly.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
  },
  {
    title: "Event Decoration",
    description: "Transform any venue into a stunning space. Our decoration team creates beautiful setups including flower arrangements, backdrops, draping, balloon arches, and themed decorations tailored to your vision.",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&h=600&fit=crop",
  },
  {
    title: "Sound & Lighting",
    description: "Professional sound systems and lighting setups for events of all sizes. From basic PA systems for small gatherings to full concert rigs with moving heads and LED walls, we deliver crystal clear audio and stunning visuals.",
    image: "https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=800&h=600&fit=crop",
  },
  {
    title: "Full Event Management",
    description: "Let us handle everything from concept to execution. Our experienced team manages vendor coordination, timeline planning, budget tracking, logistics, and on the day coordination so you can enjoy your event stress free.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
  },
  {
    title: "Tent & Canopy",
    description: "We offer a wide selection of tents and canopies for outdoor events. From small 10x10 canopies to large marquees that fit hundreds of guests. All tents come with professional setup and teardown by our crew.",
    image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=800&h=600&fit=crop",
  },
  {
    title: "Table & Chair Rental",
    description: "Choose from our collection of tables and chairs to suit any event style. We offer round tables, banquet tables, cocktail tables, Tiffany chairs, plastic chairs, and more. All delivered and arranged to your floor plan.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop",
  },
  {
    title: "Stage Setup",
    description: "Custom stage and platform setups for performances, speeches, and ceremonies. Available in various sizes with skirting, steps, and safety railings. We also provide runways for fashion shows and product launches.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
  },
  {
    title: "Catering Equipment",
    description: "Complete catering equipment rental including chafing dishes, buffet table setups, drink dispensers, and specialty machines like ice cream makers. Everything you need to serve food and beverages professionally.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop",
  },
  {
    title: "Photo Booth",
    description: "Add fun to your event with our instant print photo booths and trending 360 video booths. Guests get instant prints or videos to share on social media. Includes props, custom templates, and a friendly attendant.",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=600&fit=crop",
  },
  {
    title: "Emcee & Entertainment",
    description: "Professional bilingual emcees and live entertainment for your event. Our emcees are experienced in hosting weddings, corporate events, and formal ceremonies. We also provide live bands, DJs, and performers.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
  },
  {
    title: "Setup & Teardown",
    description: "Our professional crew handles all the heavy lifting. We arrive early to set up furniture, equipment, and decorations according to your plan, and return after the event to pack everything down efficiently.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header active="services" />

      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <FadeIn>
          <h1 className="text-2xl font-bold mb-1">Our Services</h1>
          <p className="text-sm text-gray mb-16">Everything you need for a successful event, all under one roof.</p>
        </FadeIn>

        <div className="space-y-20">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-10 items-center ${!isEven ? "lg:direction-rtl" : ""}`}
              >
                {/* Image */}
                <SlideIn direction={isEven ? "left" : "right"} className={!isEven ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] bg-gray-light overflow-hidden">
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
                    <span className="text-xs text-gray uppercase tracking-wide">0{i + 1}</span>
                    <h2 className="text-xl font-bold mt-2">{service.title}</h2>
                    <p className="text-sm text-gray mt-4 leading-relaxed">{service.description}</p>
                    <a
                      href={`https://wa.me/60123456789?text=Hi, I'd like to know more about your ${service.title} service`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-6 px-6 py-2.5 bg-primary text-white text-sm font-medium hover:bg-black transition-colors"
                    >
                      Enquire Now
                    </a>
                  </div>
                </SlideIn>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
