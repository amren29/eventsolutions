"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Navbar from "@/components/store/Navbar";
import Footer from "@/components/store/Footer";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    detail: "Kota Kinabalu, Sabah, Malaysia",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+60 12-345 6789",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "hello@eventsolutions.my",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon - Sat, 9AM - 6PM",
  },
];

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-dark">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="mt-4 text-gray max-w-xl mx-auto">
              Have a question or want to plan your event? We&apos;d love to hear from
              you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">{item.title}</h3>
                    <p className="text-sm text-gray mt-1">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+60 12-345 6789"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Event Type
                  </label>
                  <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray">
                    <option>Select event type</option>
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Birthday Party</option>
                    <option>Conference</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your event..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
