import { Package, FolderOpen } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-1">Dashboard</h1>
      <p className="text-sm text-gray mb-8">Welcome to Event Solutions admin.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-white border border-border  p-6">
          <Package className="w-5 h-5 text-gray mb-3" />
          <p className="text-2xl font-bold">0</p>
          <p className="text-sm text-gray">Products</p>
        </div>
        <div className="bg-white border border-border  p-6">
          <FolderOpen className="w-5 h-5 text-gray mb-3" />
          <p className="text-2xl font-bold">0</p>
          <p className="text-sm text-gray">Categories</p>
        </div>
      </div>

      <div className="bg-white border border-border  p-6">
        <h2 className="font-semibold mb-2">Quick Start</h2>
        <p className="text-sm text-gray mb-4">
          Add categories first, then add products.
        </p>
        <div className="flex gap-3">
          <Link
            href="/admin/categories"
            className="px-4 py-2 bg-primary text-white text-sm font-medium  hover:bg-primary/90 transition-colors"
          >
            Add Categories
          </Link>
          <Link
            href="/admin/products"
            className="px-4 py-2 border border-border text-sm font-medium  hover:border-primary/30 transition-colors"
          >
            Add Products
          </Link>
        </div>
      </div>
    </div>
  );
}
