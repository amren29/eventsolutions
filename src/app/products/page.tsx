"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Search } from "lucide-react";
import Navbar from "@/components/store/Navbar";
import Footer from "@/components/store/Footer";

const categories = ["All", "Tents", "Lighting", "Furniture", "Audio", "Decoration"];

const products = [
  { id: 1, name: "Premium Tent Package", category: "Tents", price: 500 },
  { id: 2, name: "LED Stage Lighting", category: "Lighting", price: 300 },
  { id: 3, name: "Elegant Table Setup", category: "Furniture", price: 150 },
  { id: 4, name: "Sound System Pro", category: "Audio", price: 450 },
  { id: 5, name: "Garden Tent", category: "Tents", price: 350 },
  { id: 6, name: "Fairy Light Set", category: "Lighting", price: 80 },
  { id: 7, name: "VIP Chair Set", category: "Furniture", price: 200 },
  { id: 8, name: "Flower Backdrop", category: "Decoration", price: 250 },
];

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-dark">
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="mt-4 text-gray max-w-xl mx-auto">
              Browse our collection of premium event supplies and equipment.
            </p>
          </motion.div>

          {/* Search & Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap border border-slate-200 text-gray hover:border-primary hover:text-primary hover:bg-primary/5 transition-all first:bg-primary first:text-white first:border-primary"
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100"
              >
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                  <ShoppingBag className="w-12 h-12 text-slate-300" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {product.category}
                  </span>
                  <h3 className="mt-3 font-semibold text-dark group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-lg font-bold text-dark">
                    RM {product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
