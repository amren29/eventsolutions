import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Event Solutions | Event Supplies & Management in KK",
  description:
    "Your one-stop event company in Kota Kinabalu. We provide event supplies, equipment rental, decoration, and full event management services.",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
