export const categories = [
  "All",
];

export const services = [
  "Event Management",
  "Event Production",
  "Exhibition Booth Design & Build",
  "Audio, Visual & Lighting",
  "Stage Setup",
  "Event Equipment Rental",
  "Event Decoration",
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
