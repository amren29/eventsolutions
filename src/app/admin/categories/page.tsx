"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, X, FolderOpen } from "lucide-react";

interface Category {
  id: number;
  name: string;
  description: string;
}

export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", description: "" });

  const resetForm = () => {
    setForm({ name: "", description: "" });
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId !== null) {
      setCategories((prev) =>
        prev.map((c) => (c.id === editingId ? { ...c, ...form } : c))
      );
    } else {
      setCategories((prev) => [...prev, { id: Date.now(), ...form }]);
    }
    resetForm();
  };

  const handleEdit = (category: Category) => {
    setForm({ name: category.name, description: category.description });
    setEditingId(category.id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-dark">Categories</h1>
          <p className="text-gray mt-1">Organize your products by category.</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Category
        </button>
      </div>

      {/* Category Form Modal */}
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
              className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-dark">
                  {editingId ? "Edit Category" : "Add New Category"}
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
                    Category Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Tents, Lighting, Audio"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
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
                    placeholder="Brief description..."
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
                    {editingId ? "Update" : "Add Category"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category List */}
      {categories.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl border border-slate-100 p-16 text-center"
        >
          <FolderOpen className="w-16 h-16 text-slate-200 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-dark mb-2">
            No categories yet
          </h3>
          <p className="text-gray text-sm mb-6">
            Create categories to organize your products.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            <Plus className="w-4 h-4" />
            Add First Category
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FolderOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">{category.name}</h3>
                    {category.description && (
                      <p className="text-sm text-gray mt-1">
                        {category.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleEdit(category)}
                    className="p-2 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
