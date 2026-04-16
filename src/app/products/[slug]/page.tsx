import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/store/Header";
import Footer from "@/components/store/Footer";
import ProductCard from "@/components/store/ProductCard";
import ProductImage from "@/components/store/ProductImage";
import WhatsAppButton from "@/components/store/WhatsAppButton";
import { FadeIn, SlideIn, FadeInView, StaggerContainer, StaggerItem } from "@/components/store/Animate";
import { getProductBySlug, getProducts } from "@/lib/getProducts";

export const dynamic = "force-dynamic";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allProducts = await getProducts();
  const related = allProducts
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 5);

  return (
    <main className="min-h-screen">
      <Header active="products" />

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-xs text-gray">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <span>/</span>
            <span className="text-primary font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <SlideIn direction="left">
            <div>
              <div className="relative aspect-square bg-white overflow-hidden rounded-lg">
                <ProductImage
                  src={product.image}
                  alt={product.name}
                  className={
                    product.image_fit === "contain" ? "h-full w-full object-contain" :
                    product.image_fit === "contain-padded" ? "h-full w-full object-contain p-8" :
                    "h-full w-full object-cover"
                  }
                />
              </div>
              <p className="mt-3 text-xs text-red-500">
                Image shown is for reference only. Final setup may vary based on availability and event requirements.
              </p>
            </div>
          </SlideIn>

          {/* Info */}
          <div>
            <FadeIn delay={0.1}>
              <span className="text-xs text-gray uppercase tracking-wide">{product.category}</span>
              <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
              <p className="text-gray mt-1">{product.subtitle}</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-6">
                <p className="text-sm leading-relaxed text-gray">{product.description}</p>
              </div>
            </FadeIn>

            {/* What's Included */}
            {product.includes && product.includes.length > 0 && (
              <FadeIn delay={0.3}>
                <div className="mt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">What&apos;s Included</h3>
                  <ul className="space-y-2">
                    {product.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            )}

            {/* CTA */}
            <FadeIn delay={0.4}>
              <div className="mt-10 flex gap-3">
                <a
                  href={`https://wa.me/60183570998?text=Hi, I'd like to get a quote for ${product.name} (RM${product.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-6 py-3 bg-accent text-white text-sm font-medium rounded-md hover:bg-accent/90 transition-colors"
                >
                  Ask for Quote via WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-border text-sm font-medium rounded-md hover:border-primary transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-4 py-12">
            <FadeInView>
              <h2 className="text-xs font-semibold text-gray uppercase tracking-wide mb-6">
                Related Products
              </h2>
            </FadeInView>
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {related.map((p) => (
                <StaggerItem key={p.slug}>
                  <ProductCard {...p} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
