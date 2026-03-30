import Navbar from "@/components/store/Navbar";
import HeroSection from "@/components/store/HeroSection";
import FeaturedProducts from "@/components/store/FeaturedProducts";
import ServicesSection from "@/components/store/ServicesSection";
import CTASection from "@/components/store/CTASection";
import Footer from "@/components/store/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturedProducts />
      <CTASection />
      <Footer />
    </main>
  );
}
