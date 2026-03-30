"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, X, Package } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const resetForm = () => {
    setForm({ name: "", category: "", price: "", description: "" });
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId !== null) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingId
            ? { ...p, ...form, price: parseFloat(form.price) }
            : p
        )
      );
    } else {
      setProducts((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...form,
          price: parseFloat(form.price),
        },
      ]);
    }
    resetForm();
  };

  const handleEdit = (product: Product) => {
    setForm({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      description: product.description,
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-dark">Products</h1>
          <p className="text-gray mt-1">Manage your product catalog.</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      {/* Product Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-dark">
                  {editingId ? "Edit Product" : "Add New Product"}
                </h2>
                <button
                  onClick={resetForm}
                  className="p-2 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Premium Tent Package"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      Category
                    </label>
                    <input
                      type="text"
                      required
                      value={form.category}
                      onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                      }
                      placeholder="e.g. Tents"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      Price (RM)
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      step="0.01"
                      value={form.price}
                      onChange={(e) =>
                        setForm({ ...form, price: e.target.value })
                      }
                      placeholder="0.00"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    placeholder="Product description..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 px-6 py-3 rounded-xl border-2 border-slate-200 text-dark text-sm font-semibold hover:bg-slate-50 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
                  >
                    {editingId ? "Update" : "Add Product"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product List */}
      {products.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl border border-slate-100 p-16 text-center"
        >
          <Package className="w-16 h-16 text-slate-200 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-dark mb-2">
            No products yet
          </h3>
          <p className="text-gray text-sm mb-6">
            Start by adding your first product to the catalog.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            <Plus className="w-4 h-4" />
            Add First Product
          </button>
        </motion.div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Product
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Category
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Price
                </th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-dark">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-dark">{product.name}</div>
                    {product.description && (
                      <div className="text-sm text-gray mt-0.5 truncate max-w-xs">
                        {product.description}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-dark">
                    RM {product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="p-2 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
