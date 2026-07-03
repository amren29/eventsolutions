import Header from "@/components/store/Header";
import Footer from "@/components/store/Footer";
import WhatsAppButton from "@/components/store/WhatsAppButton";
import ProductCard from "@/components/store/ProductCard";
import HeroSlider from "@/components/store/HeroSlider";
import { FadeIn, FadeInView, StaggerContainer, StaggerItem } from "@/components/store/Animate";
import { services } from "@/lib/data";
import { getProducts } from "@/lib/getProducts";

export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 15);

  return (
    <main className="min-h-screen">
      <Header active="home" />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 py-10 sm:py-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                All-in-One Pro Event Solutions in Sabah
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray mt-4 leading-relaxed">
                Based in Sabah, specifically in Kota Kinabalu &amp; Tuaran, we provide complete event solutions from setup to styling so you can focus on enjoying your event. From tents, tables, and seating to lighting, sound systems, staging, and full event decoration, we handle every detail with care and precision. Whether you&apos;re planning a wedding, corporate function, private party, or a large-scale celebration, our experienced team ensures a seamless and stress-free experience from start to finish. Proudly serving Kota Kinabalu, Tuaran, and clients across Sabah.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8">
                <div>
                  <p className="text-xl sm:text-2xl font-bold">5+</p>
                  <p className="text-xs text-gray mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold">100+</p>
                  <p className="text-xs text-gray mt-1">Projects Completed</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold">100+</p>
                  <p className="text-xs text-gray mt-1">Happy Clients</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href="https://wa.me/60183570998?text=Hi, I'd like to inquire about your event services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-md hover:bg-black transition-colors"
                >
                  Get a Quote
                </a>
                <a
                  href="/contact"
                  className="w-full sm:w-auto text-center px-6 py-2.5 border border-border text-sm font-medium rounded-md hover:border-primary transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <HeroSlider />
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
                <div className="border border-border px-4 py-3 text-sm text-center rounded-md hover:border-primary/30 transition-colors">
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
              className="inline-block w-full sm:w-auto px-8 py-3 bg-primary text-white text-sm font-medium rounded-md hover:bg-black transition-colors"
            >
              Show More Products
            </a>
          </FadeInView>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
