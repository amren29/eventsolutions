export const categories = [
  "All",
];

export const services = [
  "Exhibition Booth Design",
  "Trade Show Setup",
  "Event Decoration",
  "Sound & Lighting",
  "Full Event Management",
  "Tent & Canopy",
  "Table & Chair Rental",
  "Stage Setup",
  "Catering Equipment",
  "Photo Booth",
  "Emcee & Entertainment",
  "Setup & Teardown",
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
