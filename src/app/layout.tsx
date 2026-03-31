import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Event Solutions | Event Supplies & Management in KK",
  description:
    "Event supplies, equipment rental, and full event management in Kota Kinabalu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-primary">{children}</body>
    </html>
  );
}
