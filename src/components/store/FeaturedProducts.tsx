"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

const placeholderProducts = [
  {
    id: 1,
    name: "Premium Tent Package",
    category: "Tents",
    price: 500,
    image: null,
  },
  {
    id: 2,
    name: "LED Stage Lighting",
    category: "Lighting",
    price: 300,
    image: null,
  },
  {
    id: 3,
    name: "Elegant Table Setup",
    category: "Furniture",
    price: 150,
    image: null,
  },
  {
    id: 4,
    name: "Sound System Pro",
    category: "Audio",
    price: 450,
    image: null,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-gray-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-2"
            >
              Our Products
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-dark"
            >
              Featured Products
            </motion.h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placeholderProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center relative overflow-hidden">
                <ShoppingBag className="w-12 h-12 text-slate-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

        {/* Mobile View All */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
