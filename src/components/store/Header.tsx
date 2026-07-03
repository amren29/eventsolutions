import Link from "next/link";

export default function Header({ active = "" }: { active?: string }) {
  return (
    <header className="border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 py-4 sm:py-5">
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center lg:grid-cols-3">
          <div className="min-w-0">
            <Link href="/" className="block text-base sm:text-lg font-bold leading-tight hover:opacity-70 transition-opacity break-words">
            PRO EVENT SOLUTIONS
            </Link>
            <p className="text-xs text-gray">Event Supplies & Management</p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-end lg:justify-center">
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

          <div className="flex sm:justify-end">
            <a
              href="https://wa.me/60183570998?text=Hi, I'd like to request a quotation for my event"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-4 py-2 bg-primary text-white text-xs font-medium rounded-md hover:bg-black transition-colors"
            >
              Request Quotation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
