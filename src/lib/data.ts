export const categories = [
  "All",
];

export const services = [
  "Exhibition Booth Design & Build",
  "Trade Shows & Expositions",
  "Corporate Events & Conferences",
  "Product Launches & Brand Activations",
  "Event Planning & Project Management",
  "Stage, Lighting & Audio-Visual Production",
  "Event Logistics & Installation",
  "Custom Displays & Event Rentals",
];

export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  price: number;
  image: string;
  includes: string[];
  image_fit?: "cover" | "contain" | "contain-padded";
}

export const products: Product[] = [];
