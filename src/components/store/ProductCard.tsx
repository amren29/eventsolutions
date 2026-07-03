import Link from "next/link";
import ProductImage from "@/components/store/ProductImage";

interface ProductCardProps {
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  price: number;
  image: string;
  image_fit?: "cover" | "contain" | "contain-padded";
}

const fitClass: Record<string, string> = {
  cover: "h-full w-full object-cover",
  contain: "h-full w-full object-contain",
  "contain-padded": "h-full w-full object-contain p-4",
};

export default function ProductCard({ slug, name, subtitle, category, price, image, image_fit = "cover" }: ProductCardProps) {
  return (
    <div className="border border-border rounded-lg hover:border-primary/30 transition-colors flex flex-col h-full overflow-hidden">
      <Link href={`/products/${slug}`} className="block">
        <div className="aspect-square bg-white relative overflow-hidden shrink-0">
          <ProductImage
            src={image}
            alt={name}
            className={fitClass[image_fit] ?? fitClass.cover}
          />
          <div className="pointer-events-none absolute inset-x-4 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center text-center">
            <span
              className="max-w-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60 sm:text-xs"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
            >
              proeventsolutions
            </span>
          </div>
        </div>
      </Link>
      <div className="p-3 flex flex-col flex-1">
        <span className="text-xs text-gray uppercase tracking-wide">{category}</span>
        <Link href={`/products/${slug}`}>
          <h3 className="font-semibold text-sm mt-1 hover:underline">{name}</h3>
        </Link>
        <p className="text-xs text-gray mt-1 line-clamp-2">{subtitle}</p>
        <div className="mt-auto pt-3">
          <a
            href={`https://wa.me/60183570998?text=Hi, I'd like to get a quote for ${name} (RM${price})`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center px-3 py-2 bg-primary text-white text-xs font-medium rounded-md hover:bg-black transition-colors"
          >
            Ask for Quote
          </a>
        </div>
      </div>
    </div>
  );
}
