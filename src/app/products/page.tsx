"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/store/Header";
import Footer from "@/components/store/Footer";
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
      <Header active="products" />

      {/* Main Layout */}
      <div className="max-w-[1400px] mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar - Fixed */}
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
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <motion.h2
              key={active}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs font-semibold text-gray uppercase tracking-wide"
            >
              {active === "All" ? "All Products" : active}
            </motion.h2>
            <p className="text-xs text-gray">{filtered.length} products</p>
          </div>

          {/* Mobile Filter */}
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

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
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
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
