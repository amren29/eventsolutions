"use client";

import { useState, useEffect } from "react";
import { Package, FolderOpen, Loader2 } from "lucide-react";
import Link from "next/link";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export default function AdminDashboard() {
  const [productCount, setProductCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCounts() {
      if (!isSupabaseConfigured) {
        setLoading(false);
        return;
      }
      try {
        const [products, categories] = await Promise.all([
          supabase.from("products").select("id", { count: "exact", head: true }),
          supabase.from("categories").select("id", { count: "exact", head: true }),
        ]);
        setProductCount(products.count || 0);
        setCategoryCount(categories.count || 0);
      } catch {
        // ignore
      }
      setLoading(false);
    }
    fetchCounts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-gray" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-1">Dashboard</h1>
      <p className="text-sm text-gray mb-8">Welcome to Pro Event Solutions admin.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-white border border-border rounded-lg p-6">
          <Package className="w-5 h-5 text-gray mb-3" />
          <p className="text-2xl font-bold">{productCount}</p>
          <p className="text-sm text-gray">Products</p>
        </div>
        <div className="bg-white border border-border rounded-lg p-6">
          <FolderOpen className="w-5 h-5 text-gray mb-3" />
          <p className="text-2xl font-bold">{categoryCount}</p>
          <p className="text-sm text-gray">Categories</p>
        </div>
      </div>

      <div className="bg-white border border-border rounded-lg p-6">
        <h2 className="font-semibold mb-2">Quick Start</h2>
        <p className="text-sm text-gray mb-4">
          Add categories first, then add products.
        </p>
        <div className="flex gap-3">
          <Link
            href="/admin/categories"
            className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Add Categories
          </Link>
          <Link
            href="/admin/products"
            className="px-4 py-2 border border-border text-sm font-medium rounded-md hover:border-primary/30 transition-colors"
          >
            Add Products
          </Link>
        </div>
      </div>
    </div>
  );
}
