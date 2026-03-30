"use client";

import { motion } from "framer-motion";
import { Package, Lightbulb, Palette, PartyPopper } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Event Supplies",
    description:
      "Quality tents, tables, chairs, linens, and everything you need for your event.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Equipment Rental",
    description:
      "Professional lighting, sound systems, staging, and technical equipment.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "Event Decoration",
    description:
      "Beautiful themes and custom decorations to match your vision perfectly.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: PartyPopper,
    title: "Full Event Management",
    description:
      "End-to-end planning, coordination, and execution for a stress-free event.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-2"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-dark"
          >
            Everything for Your Event
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
