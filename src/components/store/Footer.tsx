import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <p className="font-bold">Event Solutions</p>
            <p className="text-sm text-gray mt-2 max-w-md">
              Your one stop event company in Kota Kinabalu. From supplies to full event management, we make your events unforgettable.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray uppercase tracking-wide mb-3">Quick Links</p>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-sm text-gray hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/contact" className="text-sm text-gray hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray uppercase tracking-wide mb-3">Contact</p>
            <ul className="space-y-2 text-sm text-gray">
              <li>Kota Kinabalu, Sabah</li>
              <li>+60 12 345 6789</li>
              <li>hello@eventsolutions.my</li>
              <li>Mon to Sat, 9AM to 6PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-gray">
          © {new Date().getFullYear()} Event Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
