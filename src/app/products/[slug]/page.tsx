import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import ProductCard from "@/components/store/ProductCard";
import WhatsAppButton from "@/components/store/WhatsAppButton";
import { FadeIn, SlideIn, FadeInView, StaggerContainer, StaggerItem } from "@/components/store/Animate";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 5);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 py-5 flex flex-col items-center text-center">
          <Link href="/" className="text-lg font-bold leading-tight hover:opacity-70 transition-opacity">
            Event Solutions
          </Link>
          <p className="text-xs text-gray">Event Supplies & Management · Kota Kinabalu</p>
          <nav className="flex items-center gap-6 mt-3">
            <a href="/" className="text-sm text-gray hover:text-primary transition-colors">Home</a>
            <a href="/products" className="text-sm text-gray hover:text-primary transition-colors">Products</a>
            <a href="/contact" className="text-sm text-gray hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </header>

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
            <div className="relative aspect-square bg-gray-light overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
              <p className="text-3xl font-bold mt-6">RM {product.price}</p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8">
                <p className="text-sm leading-relaxed text-gray">{product.description}</p>
              </div>
            </FadeIn>

            {/* What's Included */}
            <FadeIn delay={0.4}>
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">What&apos;s Included</h3>
                <ul className="space-y-2">
                  {product.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray">
                      <span className="w-1.5 h-1.5 bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.5}>
              <div className="mt-10 flex gap-3">
                <a
                  href={`https://wa.me/60123456789?text=Hi, I'd like to get a quote for ${product.name} (RM${product.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-6 py-3 bg-primary text-white text-sm font-medium hover:bg-black transition-colors"
                >
                  Ask for Quote via WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-border text-sm font-medium hover:border-primary transition-colors"
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
