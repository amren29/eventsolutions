export const categories = [
  "All",
  "Tents & Canopy",
  "Lighting",
  "Tables & Chairs",
  "Audio & Sound",
  "Decoration",
  "Stage & Platform",
  "Catering Equipment",
  "Photography",
  "Services",
];

export const services = [
  "Event Supplies",
  "Equipment Rental",
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

export const products = [
  // Tents & Canopy
  { name: "Premium Tent 10x10", subtitle: "Heavy duty canopy with sidewalls", category: "Tents & Canopy", price: 500, image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=400&h=400&fit=crop" },
  { name: "Garden Marquee", subtitle: "Transparent marquee for outdoor events", category: "Tents & Canopy", price: 350, image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop" },
  { name: "Canopy 20x20", subtitle: "Large canopy for 100+ pax events", category: "Tents & Canopy", price: 400, image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=400&h=400&fit=crop" },
  { name: "A-Frame Tent", subtitle: "Classic A-frame tent 10x20 ft", category: "Tents & Canopy", price: 600, image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop" },
  { name: "Pyramid Tent", subtitle: "Elegant pyramid canopy 15x15 ft", category: "Tents & Canopy", price: 750, image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=400&h=400&fit=crop" },

  // Lighting
  { name: "LED Stage Lighting", subtitle: "Full RGB par lights with DMX control", category: "Lighting", price: 300, image: "https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=400&h=400&fit=crop" },
  { name: "Fairy Light Set", subtitle: "Warm white string lights, 50m length", category: "Lighting", price: 80, image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=400&fit=crop" },
  { name: "Moving Head Lights", subtitle: "2x moving head spot lights with stand", category: "Lighting", price: 450, image: "https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=400&h=400&fit=crop" },
  { name: "Uplighting Set", subtitle: "10x LED uplights for wall wash effect", category: "Lighting", price: 200, image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=400&fit=crop" },
  { name: "Chandelier Rental", subtitle: "Crystal chandelier with rigging", category: "Lighting", price: 350, image: "https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=400&h=400&fit=crop" },

  // Tables & Chairs
  { name: "Round Table Setup", subtitle: "Round table with linen and centerpiece", category: "Tables & Chairs", price: 150, image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop" },
  { name: "Tiffany Chair Set", subtitle: "Tiffany chairs with cushion, set of 10", category: "Tables & Chairs", price: 200, image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=400&fit=crop" },
  { name: "Banquet Table", subtitle: "6ft rectangular banquet table with cloth", category: "Tables & Chairs", price: 80, image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop" },
  { name: "Plastic Chair Set", subtitle: "White plastic chairs, set of 10", category: "Tables & Chairs", price: 50, image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=400&fit=crop" },
  { name: "Cocktail Table", subtitle: "High cocktail table with spandex cover", category: "Tables & Chairs", price: 120, image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop" },

  // Audio & Sound
  { name: "Sound System Pro", subtitle: "2x speakers, mixer, and wireless mic", category: "Audio & Sound", price: 450, image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400&h=400&fit=crop" },
  { name: "Wireless Mic Set", subtitle: "2x handheld wireless microphones", category: "Audio & Sound", price: 120, image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400&h=400&fit=crop" },
  { name: "PA System Basic", subtitle: "Basic PA with 2 speakers for small events", category: "Audio & Sound", price: 250, image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400&h=400&fit=crop" },
  { name: "DJ Equipment Set", subtitle: "DJ controller, mixer, and monitor speakers", category: "Audio & Sound", price: 600, image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400&h=400&fit=crop" },
  { name: "Lapel Mic Set", subtitle: "Wireless lapel mic for presentations", category: "Audio & Sound", price: 80, image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400&h=400&fit=crop" },

  // Decoration
  { name: "Flower Backdrop", subtitle: "Artificial flower wall 8x8 ft", category: "Decoration", price: 250, image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&h=400&fit=crop" },
  { name: "Balloon Arch", subtitle: "Custom color balloon arch for entrance", category: "Decoration", price: 180, image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop" },
  { name: "Red Carpet Setup", subtitle: "Red carpet with stanchions and ropes", category: "Decoration", price: 150, image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&h=400&fit=crop" },
  { name: "Pelamin Package", subtitle: "Complete wedding pelamin with deco", category: "Decoration", price: 1500, image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop" },
  { name: "Table Centerpiece", subtitle: "Fresh flower arrangement per table", category: "Decoration", price: 60, image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&h=400&fit=crop" },

  // Stage & Platform
  { name: "Stage 8x12 ft", subtitle: "Portable stage with skirting", category: "Stage & Platform", price: 500, image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop" },
  { name: "Stage 12x16 ft", subtitle: "Large stage platform with steps", category: "Stage & Platform", price: 800, image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop" },
  { name: "Runway Platform", subtitle: "Fashion runway 4x20 ft with carpet", category: "Stage & Platform", price: 600, image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop" },
  { name: "Podium / Lectern", subtitle: "Wooden podium with mic stand", category: "Stage & Platform", price: 100, image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop" },

  // Catering Equipment
  { name: "Chafing Dish Set", subtitle: "Stainless steel chafing dish, set of 5", category: "Catering Equipment", price: 100, image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=400&fit=crop" },
  { name: "Drink Dispenser", subtitle: "Glass beverage dispenser 8L, set of 3", category: "Catering Equipment", price: 60, image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=400&fit=crop" },
  { name: "Buffet Table Setup", subtitle: "Full buffet line with skirting and utensils", category: "Catering Equipment", price: 300, image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=400&fit=crop" },
  { name: "Ice Cream Machine", subtitle: "Soft serve ice cream machine rental", category: "Catering Equipment", price: 350, image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=400&fit=crop" },

  // Photography
  { name: "Photo Booth", subtitle: "Instant print photo booth with props", category: "Photography", price: 800, image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=400&fit=crop" },
  { name: "360 Video Booth", subtitle: "360 degree video spinner booth", category: "Photography", price: 1200, image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=400&fit=crop" },
  { name: "Ring Light Setup", subtitle: "LED ring light with tripod for selfie station", category: "Photography", price: 80, image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=400&fit=crop" },

  // Services
  { name: "Event Coordinator", subtitle: "Professional event coordinator for the day", category: "Services", price: 500, image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=400&fit=crop" },
  { name: "Full Event Management", subtitle: "End-to-end planning and execution", category: "Services", price: 3000, image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=400&fit=crop" },
  { name: "Setup & Teardown", subtitle: "Crew for event setup and teardown", category: "Services", price: 300, image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=400&fit=crop" },
  { name: "Emcee / Host", subtitle: "Professional bilingual emcee", category: "Services", price: 600, image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=400&fit=crop" },
  { name: "Live Band", subtitle: "4-piece live band for 2 hours", category: "Services", price: 2000, image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=400&fit=crop" },
];
