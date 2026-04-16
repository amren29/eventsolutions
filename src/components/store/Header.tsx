import Link from "next/link";

export default function Header({ active = "" }: { active?: string }) {
  return (
    <header className="border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 py-5 grid grid-cols-3 items-center">
        {/* Logo - Left */}
        <div>
          <Link href="/" className="text-lg font-bold leading-tight hover:opacity-70 transition-opacity">
            PRO EVENT SOLUTIONS
          </Link>
          <p className="text-xs text-gray">Event Supplies & Management</p>
        </div>

        {/* Menu - Centre */}
        <nav className="hidden sm:flex items-center justify-center gap-6">
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

        {/* Request Quotation - Right */}
        <div className="flex justify-end">
          <a
            href="https://wa.me/60183570998?text=Hi, I'd like to request a quotation for my event"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-primary text-white text-xs font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Request Quotation
          </a>
        </div>
      </div>
    </header>
  );
}
