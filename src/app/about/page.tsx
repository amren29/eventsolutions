"use client";

import { motion } from "framer-motion";
import { Target, Heart, Award, Users } from "lucide-react";
import Navbar from "@/components/store/Navbar";
import Footer from "@/components/store/Footer";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make every event in Kota Kinabalu exceptional by providing premium supplies and professional management services.",
  },
  {
    icon: Heart,
    title: "Our Passion",
    description:
      "We love creating memorable experiences. Every detail matters, and we put heart into everything we do.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "We maintain the highest standards in our products and services, ensuring your event looks and feels premium.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description:
      "Your vision is our priority. We work closely with you to understand and deliver exactly what you need.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-dark">
              About <span className="gradient-text">Event Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-gray leading-relaxed">
              We are Kota Kinabalu&apos;s trusted event company, providing
              everything from event supplies and equipment rental to full event
              management. With years of experience, we&apos;ve helped hundreds of
              clients create unforgettable events.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl gradient-bg p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {[
                { value: "500+", label: "Events Completed" },
                { value: "200+", label: "Happy Clients" },
                { value: "50+", label: "Products Available" },
                { value: "5+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-bold">{stat.value}</div>
                  <div className="mt-2 text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
