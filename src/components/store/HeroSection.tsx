"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Users, Calendar } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <Star className="w-4 h-4" />
            #1 Event Company in Kota Kinabalu
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-dark leading-tight"
          >
            Make Every{" "}
            <span className="gradient-text">Event</span>{" "}
            Unforgettable
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-gray leading-relaxed max-w-xl"
          >
            From stunning decorations to complete event management — we provide
            everything you need to create memorable moments in Kota Kinabalu.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300"
            >
              Browse Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-200 text-dark font-semibold hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex flex-wrap gap-8"
          >
            {[
              { icon: Calendar, value: "500+", label: "Events Completed" },
              { icon: Users, value: "200+", label: "Happy Clients" },
              { icon: Star, value: "4.9", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark">{stat.value}</div>
                  <div className="text-sm text-gray">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
