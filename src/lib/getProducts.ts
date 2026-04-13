import { supabase, isSupabaseConfigured } from "./supabase";
import { products as staticProducts, Product } from "./data";

export async function getProducts(): Promise<Product[]> {
  if (!isSupabaseConfigured) return staticProducts;
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("is_published", true)
      .order("created_at", { ascending: true });

    if (error || !data || data.length === 0) {
      return staticProducts;
    }

    return data.map((p) => ({
      slug: p.slug,
      name: p.name,
      subtitle: p.subtitle || "",
      description: p.description || "",
      category: p.category,
      price: p.price,
      image: p.image_url || "",
      includes: p.includes || [],
    }));
  } catch {
    return staticProducts;
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!isSupabaseConfigured) {
    return staticProducts.find((p) => p.slug === slug) || null;
  }
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single();

    if (error || !data) {
      const staticProduct = staticProducts.find((p) => p.slug === slug);
      return staticProduct || null;
    }

    return {
      slug: data.slug,
      name: data.name,
      subtitle: data.subtitle || "",
      description: data.description || "",
      category: data.category,
      price: data.price,
      image: data.image_url || "",
      includes: data.includes || [],
    };
  } catch {
    const staticProduct = staticProducts.find((p) => p.slug === slug);
    return staticProduct || null;
  }
}

export async function getCategories(): Promise<string[]> {
  if (!isSupabaseConfigured) {
    return [...new Set(staticProducts.map((p) => p.category))];
  }
  try {
    const { data, error } = await supabase
      .from("products")
      .select("category");

    if (error || !data || data.length === 0) {
      return [...new Set(staticProducts.map((p) => p.category))];
    }

    const cats = [...new Set(data.map((p) => p.category))];
    return cats;
  } catch {
    return [...new Set(staticProducts.map((p) => p.category))];
  }
}
