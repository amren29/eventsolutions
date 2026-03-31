"use client";

import { useState } from "react";
import WhatsAppButton from "@/components/store/WhatsAppButton";
import ProductCard from "@/components/store/ProductCard";
import { products, categories } from "@/lib/data";

export default function ProductsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? products
    : products.filter((p) => p.category === active);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 py-5 flex items-center justify-between">
          <div>
            <a href="/" className="text-lg font-bold leading-tight hover:opacity-70 transition-opacity">
              Event Solutions
            </a>
            <p className="text-xs text-gray">Event Supplies & Management · Kota Kinabalu</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm text-gray hover:text-primary transition-colors">Home</a>
            <a href="/products" className="text-sm font-medium text-primary">Products</a>
            <a href="/contact" className="text-sm text-gray hover:text-primary transition-colors">Contact</a>
            <a href="/admin" className="text-sm text-gray hover:text-primary transition-colors">Admin</a>
          </div>
        </div>
      </header>

      {/* Main Layout: Sidebar + Products */}
      <div className="max-w-[1400px] mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar Categories */}
        <aside className="w-48 shrink-0 hidden md:block">
          <h2 className="text-xs font-semibold text-gray uppercase tracking-wide mb-4">
            Categories
          </h2>
          <ul className="space-y-1">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActive(cat)}
                  className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                    cat === active
                      ? "bg-primary text-white font-medium"
                      : "text-gray hover:text-primary hover:bg-gray-light"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs font-semibold text-gray uppercase tracking-wide">
              {active === "All" ? "All Products" : active}
            </h2>
            <p className="text-xs text-gray">{filtered.length} products</p>
          </div>

          {/* Mobile Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-4 md:hidden">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-xs font-medium whitespace-nowrap border transition-colors ${
                  cat === active
                    ? "bg-primary text-white border-primary"
                    : "border-border text-gray hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {filtered.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </div>

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
