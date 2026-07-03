"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function WhatsAppButton() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-2">
      {showTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md hover:bg-black transition-colors"
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </button>
      )}
      <a
        href="https://wa.me/60183570998"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.052 31.2l6.012-1.93A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.316 22.594c-.39 1.1-1.932 2.014-3.178 2.28-.852.182-1.964.326-5.71-1.228-4.796-1.988-7.882-6.856-8.12-7.174-.23-.318-1.926-2.566-1.926-4.892s1.22-3.472 1.652-3.948c.432-.476.944-.596 1.258-.596.314 0 .63.002.904.016.29.014.68-.11 1.064.812.39.94 1.326 3.234 1.44 3.468.116.234.194.508.04.812-.156.318-.234.508-.468.786-.234.274-.492.614-.702.824-.234.234-.478.49-.206.96.274.468 1.216 2.006 2.61 3.25 1.792 1.598 3.302 2.094 3.77 2.328.468.234.742.196 1.016-.118.274-.314 1.178-1.374 1.492-1.846.314-.468.63-.39 1.06-.234.432.156 2.726 1.286 3.194 1.52.468.234.78.352.896.546.114.196.114 1.124-.276 2.224z" />
        </svg>
      </a>
    </div>
  );
}
