import Link from "next/link";

export default function Header({ active = "" }: { active?: string }) {
  return (
    <header className="border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 py-5 flex items-center justify-between">
        <div>
          <Link href="/" className="text-lg font-bold leading-tight hover:opacity-70 transition-opacity">
            Event Solutions
          </Link>
          <p className="text-xs text-gray">Event Supplies & Management · Kota Kinabalu</p>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/" className={`text-sm ${active === "home" ? "font-medium text-primary" : "text-gray hover:text-primary"} transition-colors`}>
            Home
          </Link>
          <Link href="/services" className={`text-sm ${active === "services" ? "font-medium text-primary" : "text-gray hover:text-primary"} transition-colors`}>
            Services
          </Link>
          <Link href="/products" className={`text-sm ${active === "products" ? "font-medium text-primary" : "text-gray hover:text-primary"} transition-colors`}>
            Products
          </Link>
          <Link href="/contact" className={`text-sm ${active === "contact" ? "font-medium text-primary" : "text-gray hover:text-primary"} transition-colors`}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
