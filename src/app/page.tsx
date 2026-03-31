import Image from "next/image";
import WhatsAppButton from "@/components/store/WhatsAppButton";
import ProductCard from "@/components/store/ProductCard";
import { FadeIn, FadeInView, SlideIn, StaggerContainer, StaggerItem } from "@/components/store/Animate";
import { products, services } from "@/lib/data";

const featuredProducts = products.slice(0, 15);

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
          <nav className="flex items-center gap-6">
            <a href="/" className="text-sm font-medium text-primary">Home</a>
            <a href="/products" className="text-sm text-gray hover:text-primary transition-colors">Products</a>
            <a href="/contact" className="text-sm text-gray hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero - About Us */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <h2 className="text-3xl font-bold leading-tight">
                Your One-Stop Event Partner in Kota Kinabalu
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray mt-4 leading-relaxed">
                Event Solutions is a full-service event company based in Kota Kinabalu, Sabah. We supply everything you need — from tents, tables, and chairs to lighting, sound systems, stage setups, and complete event decoration. Whether it&apos;s a wedding, corporate dinner, birthday, or any celebration, we handle it all so you don&apos;t have to.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
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
            </FadeIn>
            <FadeIn delay={0.3}>
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
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="relative aspect-[4/3] overflow-hidden hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop"
              alt="Event setup by Event Solutions"
              fill
              className="object-cover"
              priority
            />
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <FadeInView>
            <h2 className="text-xs font-semibold text-gray uppercase tracking-wide mb-6">
              Our Services
            </h2>
          </FadeInView>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {services.map((s) => (
              <StaggerItem key={s}>
                <div className="border border-border px-4 py-3 text-sm text-center hover:border-primary/30 transition-colors">
                  {s}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <FadeInView>
            <h2 className="text-xs font-semibold text-gray uppercase tracking-wide mb-6">
              Products & Packages
            </h2>
          </FadeInView>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {featuredProducts.map((product) => (
              <StaggerItem key={product.slug}>
                <ProductCard {...product} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInView className="mt-8 text-center">
            <a
              href="/products"
              className="inline-block px-8 py-3 bg-primary text-white text-sm font-medium hover:bg-black transition-colors"
            >
              Show More Products
            </a>
          </FadeInView>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <p className="font-bold">Event Solutions</p>
              <p className="text-sm text-gray mt-2 max-w-md">
                Your one-stop event company in Kota Kinabalu. From supplies to full event management, we make your events unforgettable.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray uppercase tracking-wide mb-3">Quick Links</p>
              <ul className="space-y-2">
                <li><a href="/" className="text-sm text-gray hover:text-primary transition-colors">Home</a></li>
                <li><a href="/products" className="text-sm text-gray hover:text-primary transition-colors">Products</a></li>
                <li><a href="/contact" className="text-sm text-gray hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray uppercase tracking-wide mb-3">Contact</p>
              <ul className="space-y-2 text-sm text-gray">
                <li>Kota Kinabalu, Sabah</li>
                <li>+60 12-345 6789</li>
                <li>hello@eventsolutions.my</li>
                <li>Mon – Sat, 9AM – 6PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-sm text-gray">
            © {new Date().getFullYear()} Event Solutions. All rights reserved.
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
