"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, Pencil, Trash2, X, Package, Loader2, Upload, Download, FileSpreadsheet, Image as ImageIcon } from "lucide-react";
import { supabase, isSupabaseConfigured, DBProduct } from "@/lib/supabase";
import * as XLSX from "xlsx";

export default function AdminProducts() {
  const [products, setProducts] = useState<DBProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [importing, setImporting] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const excelInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    name: "",
    slug: "",
    subtitle: "",
    category: "",
    price: "",
    description: "",
    image_url: "",
    includes: "",
  });

  const fetchProducts = async () => {
    if (!isSupabaseConfigured) {
      setError("Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.");
      setLoading(false);
      return;
    }
    try {
      const { data } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });
      setProducts(data || []);
    } catch {
      setError("Failed to connect to database.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const resetForm = () => {
    setForm({ name: "", slug: "", subtitle: "", category: "", price: "", description: "", image_url: "", includes: "" });
    setEditingId(null);
    setShowForm(false);
    setImagePreview("");
  };

  const generateSlug = (name: string) =>
    name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  // Image upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const ext = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(fileName, file);

    if (uploadError) {
      alert("Upload failed: " + uploadError.message);
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("product-images")
      .getPublicUrl(fileName);

    setForm((prev) => ({ ...prev, image_url: urlData.publicUrl }));
    setImagePreview(urlData.publicUrl);
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const productData = {
      name: form.name,
      slug: form.slug || generateSlug(form.name),
      subtitle: form.subtitle,
      category: form.category,
      price: parseFloat(form.price),
      description: form.description,
      image_url: form.image_url,
      includes: form.includes.split("\n").filter((s) => s.trim()),
    };

    if (editingId !== null) {
      await supabase.from("products").update(productData).eq("id", editingId);
    } else {
      await supabase.from("products").insert(productData);
    }

    setSaving(false);
    resetForm();
    fetchProducts();
  };

  const handleEdit = (product: DBProduct) => {
    setForm({
      name: product.name,
      slug: product.slug,
      subtitle: product.subtitle,
      category: product.category,
      price: product.price.toString(),
      description: product.description,
      image_url: product.image_url,
      includes: (product.includes || []).join("\n"),
    });
    setImagePreview(product.image_url);
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this product?")) return;
    await supabase.from("products").delete().eq("id", id);
    fetchProducts();
  };

  // Excel export
  const handleExport = () => {
    const exportData = products.map((p) => ({
      Name: p.name,
      Slug: p.slug,
      Category: p.category,
      Price: p.price,
      Subtitle: p.subtitle,
      Description: p.description,
      "Image URL": p.image_url,
      Includes: (p.includes || []).join("; "),
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Products");
    XLSX.writeFile(wb, "products.xlsx");
  };

  // Excel import
  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImporting(true);

    const data = await file.arrayBuffer();
    const wb = XLSX.read(data);
    const ws = wb.Sheets[wb.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json<Record<string, string | number>>(ws);

    const productsToInsert = rows.map((row) => ({
      name: String(row["Name"] || ""),
      slug: String(row["Slug"] || "") || generateSlug(String(row["Name"] || "")),
      category: String(row["Category"] || ""),
      price: parseFloat(String(row["Price"] || "0")),
      subtitle: String(row["Subtitle"] || ""),
      description: String(row["Description"] || ""),
      image_url: String(row["Image URL"] || ""),
      includes: String(row["Includes"] || "").split(";").map((s) => s.trim()).filter(Boolean),
    })).filter((p) => p.name);

    if (productsToInsert.length === 0) {
      alert("No valid products found in file.");
      setImporting(false);
      return;
    }

    const { error: insertError } = await supabase.from("products").insert(productsToInsert);

    if (insertError) {
      alert("Import failed: " + insertError.message);
    } else {
      alert(`Imported ${productsToInsert.length} products.`);
      fetchProducts();
    }

    setImporting(false);
    if (excelInputRef.current) excelInputRef.current.value = "";
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
      <div className="bg-red-50 border border-red-200 p-6 text-center">
        <p className="text-red-600 font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-bold">Products</h1>
          <p className="text-sm text-gray mt-1">Manage your product catalog.</p>
        </div>
        <div className="flex items-center gap-2">
          {/* Excel Import */}
          <input
            ref={excelInputRef}
            type="file"
            accept=".xlsx,.xls"
            onChange={handleImport}
            className="hidden"
          />
          <button
            onClick={() => excelInputRef.current?.click()}
            disabled={importing}
            className="inline-flex items-center gap-2 px-3 py-2 border border-border text-sm font-medium hover:bg-gray-light transition-colors disabled:opacity-50"
          >
            {importing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
            Import
          </button>

          {/* Excel Export */}
          <button
            onClick={handleExport}
            disabled={products.length === 0}
            className="inline-flex items-center gap-2 px-3 py-2 border border-border text-sm font-medium hover:bg-gray-light transition-colors disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            Export
          </button>

          {/* Add Product */}
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </button>
        </div>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white p-6 w-full max-w-lg shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold">
                {editingId ? "Edit Product" : "Add Product"}
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
                  onChange={(e) => setForm({ ...form, name: e.target.value, slug: generateSlug(e.target.value) })}
                  className="w-full px-3 py-2 border border-border text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slug</label>
                <input
                  type="text"
                  required
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  className="w-full px-3 py-2 border border-border text-sm focus:outline-none focus:border-primary text-gray"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <input
                    type="text"
                    required
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-3 py-2 border border-border text-sm focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Price (RM)</label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="w-full px-3 py-2 border border-border text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Subtitle</label>
                <input
                  type="text"
                  value={form.subtitle}
                  onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                  className="w-full px-3 py-2 border border-border text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full px-3 py-2 border border-border text-sm focus:outline-none focus:border-primary resize-none"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium mb-1">Product Image</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                {(imagePreview || form.image_url) ? (
                  <div className="relative border border-border p-2">
                    <img
                      src={imagePreview || form.image_url}
                      alt="Preview"
                      className="w-full h-40 object-cover"
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="flex-1 px-3 py-1.5 border border-border text-xs font-medium hover:bg-gray-light transition-colors"
                      >
                        {uploading ? "Uploading..." : "Change Image"}
                      </button>
                      <button
                        type="button"
                        onClick={() => { setForm({ ...form, image_url: "" }); setImagePreview(""); }}
                        className="px-3 py-1.5 border border-border text-xs font-medium text-red-500 hover:bg-red-50 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="w-full border-2 border-dashed border-border py-8 flex flex-col items-center gap-2 hover:border-primary/30 transition-colors"
                  >
                    {uploading ? (
                      <Loader2 className="w-6 h-6 animate-spin text-gray" />
                    ) : (
                      <ImageIcon className="w-6 h-6 text-gray" />
                    )}
                    <span className="text-sm text-gray">
                      {uploading ? "Uploading..." : "Click to upload image"}
                    </span>
                  </button>
                )}

                {/* Or paste URL */}
                <div className="mt-2">
                  <input
                    type="text"
                    value={form.image_url}
                    onChange={(e) => { setForm({ ...form, image_url: e.target.value }); setImagePreview(e.target.value); }}
                    placeholder="Or paste image URL..."
                    className="w-full px-3 py-2 border border-border text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Includes (one per line)</label>
                <textarea
                  rows={4}
                  value={form.includes}
                  onChange={(e) => setForm({ ...form, includes: e.target.value })}
                  placeholder={"Item 1\nItem 2\nItem 3"}
                  className="w-full px-3 py-2 border border-border text-sm focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 px-4 py-2 border border-border text-sm font-medium hover:bg-gray-light transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 px-4 py-2 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {saving ? "Saving..." : editingId ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* List */}
      {products.length === 0 ? (
        <div className="bg-white border border-border p-12 text-center">
          <Package className="w-10 h-10 text-border mx-auto mb-3" />
          <p className="font-medium mb-1">No products yet</p>
          <p className="text-sm text-gray mb-4">Add your first product or import from Excel.</p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Product
            </button>
            <button
              onClick={() => excelInputRef.current?.click()}
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm font-medium hover:bg-gray-light"
            >
              <FileSpreadsheet className="w-4 h-4" />
              Import Excel
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="px-5 py-3 text-xs font-semibold text-gray uppercase">Image</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray uppercase">Product</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray uppercase">Category</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray uppercase">Price</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-border last:border-0 hover:bg-gray-light/50">
                  <td className="px-5 py-3">
                    {product.image_url ? (
                      <img src={product.image_url} alt="" className="w-12 h-12 object-cover border border-border" />
                    ) : (
                      <div className="w-12 h-12 bg-gray-light flex items-center justify-center border border-border">
                        <ImageIcon className="w-4 h-4 text-gray" />
                      </div>
                    )}
                  </td>
                  <td className="px-5 py-3">
                    <p className="font-medium text-sm">{product.name}</p>
                    <p className="text-xs text-gray mt-0.5">{product.subtitle}</p>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray">{product.category}</td>
                  <td className="px-5 py-3 text-sm font-medium">RM {product.price}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => handleEdit(product)} className="p-1.5 hover:bg-gray-light">
                        <Pencil className="w-4 h-4 text-gray" />
                      </button>
                      <button onClick={() => handleDelete(product.id)} className="p-1.5 hover:bg-red-50">
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
