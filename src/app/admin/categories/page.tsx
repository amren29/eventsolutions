"use client";

import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, X, FolderOpen, Loader2 } from "lucide-react";
import { supabase, isSupabaseConfigured, DBCategory } from "@/lib/supabase";

export default function AdminCategories() {
  const [categories, setCategories] = useState<DBCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [form, setForm] = useState({ name: "", description: "" });

  const fetchCategories = async () => {
    if (!isSupabaseConfigured) {
      setError("Supabase is not configured. Add environment variables.");
      setLoading(false);
      return;
    }
    try {
      const { data } = await supabase
        .from("categories")
        .select("*")
        .order("created_at", { ascending: false });
      setCategories(data || []);
    } catch {
      setError("Failed to connect to database.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const resetForm = () => {
    setForm({ name: "", description: "" });
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    if (editingId !== null) {
      await supabase.from("categories").update(form).eq("id", editingId);
    } else {
      await supabase.from("categories").insert(form);
    }

    setSaving(false);
    resetForm();
    fetchCategories();
  };

  const handleEdit = (category: DBCategory) => {
    setForm({ name: category.name, description: category.description });
    setEditingId(category.id);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this category?")) return;
    await supabase.from("categories").delete().eq("id", id);
    setSelected((prev) => { const next = new Set(prev); next.delete(id); return next; });
    fetchCategories();
  };

  const handleBulkDelete = async () => {
    if (selected.size === 0) return;
    if (!confirm(`Delete ${selected.size} selected categor${selected.size > 1 ? "ies" : "y"}?`)) return;
    await supabase.from("categories").delete().in("id", [...selected]);
    setSelected(new Set());
    fetchCategories();
  };

  const toggleSelect = (id: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selected.size === categories.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(categories.map((c) => c.id)));
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-gray" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-600 font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-bold">Categories</h1>
          <p className="text-sm text-gray mt-1">Organize your products.</p>
        </div>
        <div className="flex items-center gap-2">
          {selected.size > 0 && (
            <button
              onClick={handleBulkDelete}
              className="inline-flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-md text-sm font-medium hover:bg-red-600 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Delete ({selected.size})
            </button>
          )}
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Category
          </button>
        </div>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white p-6 w-full max-w-md shadow-xl rounded-lg">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold">
                {editingId ? "Edit Category" : "Add Category"}
              </h2>
              <button onClick={resetForm} className="p-1 hover:bg-gray-light">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 px-4 py-2 border border-border rounded-md text-sm font-medium hover:bg-gray-light transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {saving ? "Saving..." : editingId ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* List */}
      {categories.length === 0 ? (
        <div className="bg-white border border-border rounded-lg p-12 text-center">
          <FolderOpen className="w-10 h-10 text-border mx-auto mb-3" />
          <p className="font-medium mb-1">No categories yet</p>
          <p className="text-sm text-gray mb-4">Create your first category.</p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md"
          >
            <Plus className="w-4 h-4" />
            Add Category
          </button>
        </div>
      ) : (
        <div className="bg-white border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pl-5 pr-2 py-3">
                  <input
                    type="checkbox"
                    checked={categories.length > 0 && selected.size === categories.length}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-border accent-primary cursor-pointer"
                  />
                </th>
                <th className="px-5 py-3 text-xs font-semibold text-gray uppercase">Name</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray uppercase">Description</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr
                  key={category.id}
                  className={`border-b border-border last:border-0 hover:bg-gray-light/50 ${
                    selected.has(category.id) ? "bg-blue-50/50" : ""
                  }`}
                >
                  <td className="pl-5 pr-2 py-3">
                    <input
                      type="checkbox"
                      checked={selected.has(category.id)}
                      onChange={() => toggleSelect(category.id)}
                      className="w-4 h-4 rounded border-border accent-primary cursor-pointer"
                    />
                  </td>
                  <td className="px-5 py-3">
                    <p className="font-medium text-sm">{category.name}</p>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray">{category.description || "—"}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => handleEdit(category)} className="p-1.5 hover:bg-gray-light rounded-md">
                        <Pencil className="w-4 h-4 text-gray" />
                      </button>
                      <button onClick={() => handleDelete(category.id)} className="p-1.5 hover:bg-red-50 rounded-md">
                        <Trash2 className="w-4 h-4 text-red-500" />
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
