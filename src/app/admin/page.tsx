"use client";

import { motion } from "framer-motion";
import { Package, FolderOpen, Eye, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Products",
    value: "0",
    icon: Package,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Categories",
    value: "0",
    icon: FolderOpen,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Page Views",
    value: "0",
    icon: Eye,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Inquiries",
    value: "0",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500",
  },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-dark">Dashboard</h1>
        <p className="text-gray mt-1">Welcome to Event Solutions admin panel.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-dark">{stat.value}</div>
            <div className="text-sm text-gray mt-1">{stat.title}</div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-8 border border-slate-100"
      >
        <h2 className="text-lg font-bold text-dark mb-4">Quick Start</h2>
        <p className="text-gray text-sm mb-6">
          Get started by adding your product categories, then add products to your store.
        </p>
        <div className="flex gap-4">
          <a
            href="/admin/categories"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            Add Categories
          </a>
          <a
            href="/admin/products"
            className="px-6 py-3 rounded-xl border-2 border-slate-200 text-dark text-sm font-semibold hover:border-primary hover:text-primary transition-all"
          >
            Add Products
          </a>
        </div>
      </motion.div>
    </div>
  );
}
