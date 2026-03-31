import Image from "next/image";

interface ProductCardProps {
  name: string;
  subtitle: string;
  category: string;
  price: number;
  image: string;
}

export default function ProductCard({ name, subtitle, category, price, image }: ProductCardProps) {
  return (
    <div className="border border-border hover:border-primary/30 transition-colors flex flex-col h-full">
      <div className="aspect-square bg-gray-light relative overflow-hidden shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </div>
      <div className="p-3 flex flex-col flex-1">
        <span className="text-xs text-gray uppercase tracking-wide">{category}</span>
        <h3 className="font-semibold text-sm mt-1">{name}</h3>
        <p className="text-xs text-gray mt-1 line-clamp-2">{subtitle}</p>
        <div className="mt-auto pt-3">
          <p className="text-sm font-bold">RM {price}</p>
          <a
            href={`https://wa.me/60123456789?text=Hi, I'd like to get a quote for ${name} (RM${price})`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full flex items-center justify-center px-3 py-2 bg-primary text-white text-xs font-medium hover:bg-black transition-colors"
          >
            Ask for Quote
          </a>
        </div>
      </div>
    </div>
  );
}
