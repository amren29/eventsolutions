"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/store/ProductCard";
import { Product } from "@/lib/data";

export default function ProductsGrid({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCategory = active === "All" || p.category === active;
    const q = search.trim().toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.subtitle?.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 flex gap-8">
      {/* Sidebar */}
      <aside className="w-48 shrink-0 hidden md:block">
        <div className="sticky top-8">
          <h2 className="text-xs font-semibold text-gray uppercase tracking-wide mb-4">
            Categories
          </h2>
          <ul className="space-y-1">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActive(cat)}
                  className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                    cat === active
                      ? "bg-accent text-white font-medium"
                      : "text-gray hover:text-primary hover:bg-gray-light"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Products */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray pointer-events-none" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <motion.h2
            key={active}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs font-semibold text-gray uppercase tracking-wide hidden sm:block"
          >
            {active === "All" ? "All Products" : active}
          </motion.h2>
          <p className="text-xs text-gray ml-auto">{filtered.length} products</p>
        </div>

        {/* Mobile Filter */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4 md:hidden">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs font-medium whitespace-nowrap border rounded-md transition-colors ${
                cat === active
                  ? "bg-accent text-white border-accent"
                  : "border-border text-gray hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center text-gray text-sm">
            No products found for &ldquo;{search}&rdquo;
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={active + search}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
