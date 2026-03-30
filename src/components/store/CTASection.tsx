"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 gradient-bg" />
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative px-8 py-20 sm:px-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Plan Your Event?
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
              Let us help you create an unforgettable experience. Get in touch
              and let&apos;s make it happen!
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
