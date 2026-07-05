import sofa from "@/assets/service-sofa.jpg";
import curtains from "@/assets/service-curtains.jpg";
import mattress from "@/assets/service-mattress.jpg";
import furnishing from "@/assets/service-furnishing.jpg";

import wardrobe from "@/assets/service-wardrobe.jpg";

export const services = [
  {
    slug: "customized-sofa",
    title: "Customized Sofas",
    summary:
      "Hand-built sofas tailored to your space, fabric, and posture — from compact two-seaters to grand L-shaped sectionals.",
    image: sofa,
    bullets: [
      "Solid hardwood frames",
      "Premium velvets, leatherette & linen",
      "10-year frame warranty",
    ],
  },
  {
    slug: "built-in-wardrobes",
    title: "Built-in Wardrobes",
    summary:
      "Sleek and spacious wardrobes tailored to your room dimensions. Optimize your storage with custom compartments and sliding/openable shutters.",
    image: wardrobe,
    bullets: [
      "Floor-to-ceiling designs",
      "Sliding & openable doors",
      "Customized internal organizers",
    ],
  },
  {
    slug: "curtains-blinds",
    title: "Curtains & Blinds",
    summary:
      "Heavy drapes, sheer ivory linens, blackouts, motorised blinds — measured and installed at your home.",
    image: curtains,
    bullets: ["Free home measurement", "150+ fabric library", "Motorised options available"],
  },
  {
    slug: "mattresses",
    title: "Customized Mattresses",
    summary:
      "Made-to-order mattresses in your exact size — orthopaedic, memory foam, latex, and pocket spring.",
    image: mattress,
    bullets: [
      "Any dimension built to order",
      "Orthopaedic & cooling layers",
      "7-night comfort exchange",
    ],
  },
  {
    slug: "home-furnishing",
    title: "Home Furnishing",
    summary: "Bed linens, cushions, rugs, and accessories curated to complete your interior story.",
    image: furnishing,
    bullets: ["Cotton, linen & silk blends", "Coordinated palettes", "Seasonal collections"],
  },
] as const;

export type Service = (typeof services)[number];
