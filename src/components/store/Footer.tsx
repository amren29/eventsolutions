import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Event<span className="text-primary-light">Solutions</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your one-stop event company in Kota Kinabalu. From supplies to
              full event management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "Products", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Event Supplies",
                "Equipment Rental",
                "Event Decoration",
                "Full Event Management",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  Kota Kinabalu, Sabah, Malaysia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-light shrink-0" />
                <span className="text-sm text-slate-400">+60 12-345 6789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-light shrink-0" />
                <span className="text-sm text-slate-400">
                  hello@eventsolutions.my
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Event Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
