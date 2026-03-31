import Image from "next/image";
import WhatsAppButton from "@/components/store/WhatsAppButton";

const categories = [
  "All",
  "Tents & Canopy",
  "Lighting",
  "Tables & Chairs",
  "Audio & Sound",
  "Decoration",
  "Stage & Platform",
  "Catering Equipment",
  "Photography",
  "Services",
];

const products = [
  // Tents & Canopy
  { name: "Premium Tent 10x10", subtitle: "Heavy duty canopy with sidewalls", category: "Tents & Canopy", price: 500, image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=400&h=400&fit=crop" },
  { name: "Garden Marquee", subtitle: "Transparent marquee for outdoor events", category: "Tents & Canopy", price: 350, image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop" },
  { name: "Canopy 20x20", subtitle: "Large canopy for 100+ pax events", category: "Tents & Canopy", price: 400, image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=400&h=400&fit=crop" },
  { name: "A-Frame Tent", subtitle: "Classic A-frame tent 10x20 ft", category: "Tents & Canopy", price: 600, image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop" },
  { name: "Pyramid Tent", subtitle: "Elegant pyramid canopy 15x15 ft", category: "Tents & Canopy", price: 750, image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=400&h=400&fit=crop" },

  // Lighting
  { name: "LED Stage Lighting", subtitle: "Full RGB par lights with DMX control", category: "Lighting", price: 300, image: "https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=400&h=400&fit=crop" },
  { name: "Fairy Light Set", subtitle: "Warm white string lights, 50m length", category: "Lighting", price: 80, image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=400&fit=crop" },
  { name: "Moving Head Lights", subtitle: "2x moving head spot lights with stand", category: "Lighting", price: 450, image: "https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=400&h=400&fit=crop" },
  { name: "Uplighting Set", subtitle: "10x LED uplights for wall wash effect", category: "Lighting", price: 200, image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=400&fit=crop" },
  { name: "Chandelier Rental", subtitle: "Crystal chandelier with rigging", category: "Lighting", price: 350, image: "https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=400&h=400&fit=crop" },

  // Tables & Chairs
  { name: "Round Table Setup", subtitle: "Round table with linen and centerpiece", category: "Tables & Chairs", price: 150, image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop" },
  { name: "Tiffany Chair Set", subtitle: "Tiffany chairs with cushion, set of 10", category: "Tables & Chairs", price: 200, image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=400&fit=crop" },
  { name: "Banquet Table", subtitle: "6ft rectangular banquet table with cloth", category: "Tables & Chairs", price: 80, image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop" },
  { name: "Plastic Chair Set", subtitle: "White plastic chairs, set of 10", category: "Tables & Chairs", price: 50, image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=400&fit=crop" },
  { name: "Cocktail Table", subtitle: "High cocktail table with spandex cover", category: "Tables & Chairs", price: 120, image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop" },

  // Audio & Sound
  { name: "Sound System Pro", subtitle: "2x speakers, mixer, and wireless mic", category: "Audio & Sound", price: 450, image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400&h=400&fit=crop" },
  { name: "Wireless Mic Set", subtitle: "2x handheld wireless microphones", category: "Audio & Sound", price: 120, image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400&h=400&fit=crop" },
  { name: "PA System Basic", subtitle: "Basic PA with 2 speakers for small events", category: "Audio & Sound", price: 250, image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400&h=400&fit=crop" },
  { name: "DJ Equipment Set", subtitle: "DJ controller, mixer, and monitor speakers", category: "Audio & Sound", price: 600, image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400&h=400&fit=crop" },
  { name: "Lapel Mic Set", subtitle: "Wireless lapel mic for presentations", category: "Audio & Sound", price: 80, image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400&h=400&fit=crop" },

  // Decoration
  { name: "Flower Backdrop", subtitle: "Artificial flower wall 8x8 ft", category: "Decoration", price: 250, image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&h=400&fit=crop" },
  { name: "Balloon Arch", subtitle: "Custom color balloon arch for entrance", category: "Decoration", price: 180, image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop" },
  { name: "Red Carpet Setup", subtitle: "Red carpet with stanchions and ropes", category: "Decoration", price: 150, image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&h=400&fit=crop" },
  { name: "Pelamin Package", subtitle: "Complete wedding pelamin with deco", category: "Decoration", price: 1500, image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop" },
  { name: "Table Centerpiece", subtitle: "Fresh flower arrangement per table", category: "Decoration", price: 60, image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&h=400&fit=crop" },

  // Stage & Platform
  { name: "Stage 8x12 ft", subtitle: "Portable stage with skirting", category: "Stage & Platform", price: 500, image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop" },
  { name: "Stage 12x16 ft", subtitle: "Large stage platform with steps", category: "Stage & Platform", price: 800, image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop" },
  { name: "Runway Platform", subtitle: "Fashion runway 4x20 ft with carpet", category: "Stage & Platform", price: 600, image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop" },
  { name: "Podium / Lectern", subtitle: "Wooden podium with mic stand", category: "Stage & Platform", price: 100, image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop" },

  // Catering Equipment
  { name: "Chafing Dish Set", subtitle: "Stainless steel chafing dish, set of 5", category: "Catering Equipment", price: 100, image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=400&fit=crop" },
  { name: "Drink Dispenser", subtitle: "Glass beverage dispenser 8L, set of 3", category: "Catering Equipment", price: 60, image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=400&fit=crop" },
  { name: "Buffet Table Setup", subtitle: "Full buffet line with skirting and utensils", category: "Catering Equipment", price: 300, image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=400&fit=crop" },
  { name: "Ice Cream Machine", subtitle: "Soft serve ice cream machine rental", category: "Catering Equipment", price: 350, image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=400&fit=crop" },

  // Photography
  { name: "Photo Booth", subtitle: "Instant print photo booth with props", category: "Photography", price: 800, image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=400&fit=crop" },
  { name: "360 Video Booth", subtitle: "360 degree video spinner booth", category: "Photography", price: 1200, image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=400&fit=crop" },
  { name: "Ring Light Setup", subtitle: "LED ring light with tripod for selfie station", category: "Photography", price: 80, image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=400&fit=crop" },

  // Services
  { name: "Event Coordinator", subtitle: "Professional event coordinator for the day", category: "Services", price: 500, image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=400&fit=crop" },
  { name: "Full Event Management", subtitle: "End-to-end planning and execution", category: "Services", price: 3000, image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=400&fit=crop" },
  { name: "Setup & Teardown", subtitle: "Crew for event setup and teardown", category: "Services", price: 300, image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=400&fit=crop" },
  { name: "Emcee / Host", subtitle: "Professional bilingual emcee", category: "Services", price: 600, image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=400&fit=crop" },
  { name: "Live Band", subtitle: "4-piece live band for 2 hours", category: "Services", price: 2000, image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=400&fit=crop" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold leading-tight">Event Solutions</h1>
            <p className="text-xs text-gray">Event Supplies & Management · Kota Kinabalu</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="/contact" className="text-sm text-gray hover:text-primary transition-colors">Contact</a>
            <a href="/admin" className="text-sm text-gray hover:text-primary transition-colors">Admin</a>
          </div>
        </div>
      </header>

      {/* Hero - About Us */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold leading-tight">
              Your One-Stop Event Partner in Kota Kinabalu
            </h2>
            <p className="text-gray mt-4 leading-relaxed">
              Event Solutions is a full-service event company based in Kota Kinabalu, Sabah. We supply everything you need — from tents, tables, and chairs to lighting, sound systems, stage setups, and complete event decoration. Whether it&apos;s a wedding, corporate dinner, birthday, or any celebration, we handle it all so you don&apos;t have to.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-xs text-gray mt-1">Events Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold">200+</p>
                <p className="text-xs text-gray mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold">5+</p>
                <p className="text-xs text-gray mt-1">Years Experience</p>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <a
                href="https://wa.me/60123456789?text=Hi, I'd like to inquire about your event services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-primary text-white text-sm font-medium hover:bg-black transition-colors"
              >
                Get a Quote
              </a>
              <a
                href="/contact"
                className="px-6 py-2.5 border border-border text-sm font-medium hover:border-primary transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop"
              alt="Event setup by Event Solutions"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Layout: Sidebar + Products */}
      <div className="max-w-[1400px] mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar Categories */}
        <aside className="w-48 shrink-0 hidden md:block">
          <h2 className="text-xs font-semibold text-gray uppercase tracking-wide mb-4">
            Categories
          </h2>
          <ul className="space-y-1">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                    cat === "All"
                      ? "bg-primary text-white font-medium"
                      : "text-gray hover:text-primary hover:bg-gray-light"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <h2 className="text-xs font-semibold text-gray uppercase tracking-wide mb-6">
            Products & Packages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="border border-border hover:border-primary/30 transition-colors"
              >
                <div className="aspect-square bg-gray-light relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
                <div className="p-3">
                  <span className="text-xs text-gray uppercase tracking-wide">{product.category}</span>
                  <h3 className="font-semibold text-sm mt-1">{product.name}</h3>
                  <p className="text-xs text-gray mt-1 line-clamp-2">{product.subtitle}</p>
                  <p className="text-sm font-bold mt-2">RM {product.price}</p>
                  <a
                    href={`https://wa.me/60123456789?text=Hi, I'd like to get a quote for ${product.name} (RM${product.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full flex items-center justify-center px-3 py-2 bg-primary text-white text-xs font-medium hover:bg-black transition-colors"
                  >
                    Ask for Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 py-6 text-center text-sm text-gray">
          © {new Date().getFullYear()} Event Solutions. Kota Kinabalu, Sabah.
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
