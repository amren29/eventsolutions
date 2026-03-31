"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, FolderOpen, ArrowLeft } from "lucide-react";

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/categories", label: "Categories", icon: FolderOpen },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-light flex">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-border flex flex-col fixed inset-y-0 left-0">
        <div className="p-5 border-b border-border">
          <p className="font-bold text-sm">Event Solutions</p>
          <p className="text-xs text-gray">Admin Panel</p>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5  text-sm transition-colors ${
                  isActive
                    ? "bg-primary text-white font-medium"
                    : "text-gray hover:text-primary hover:bg-gray-light"
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-border">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5  text-sm text-gray hover:text-primary hover:bg-gray-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Store
          </Link>
        </div>
      </aside>

      <main className="flex-1 ml-60 p-8">{children}</main>
    </div>
  );
}
