import { getProducts, getCategories } from "@/lib/getProducts";
import Header from "@/components/store/Header";
import Footer from "@/components/store/Footer";
import WhatsAppButton from "@/components/store/WhatsAppButton";
import ProductsGrid from "@/components/store/ProductsGrid";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const products = await getProducts();
  const categoryList = await getCategories();
  const categories = ["All", ...categoryList];

  return (
    <main className="min-h-screen">
      <Header active="products" />
      <ProductsGrid products={products} categories={categories} />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
