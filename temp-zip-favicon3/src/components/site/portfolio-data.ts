import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import hero from "@/assets/hero.jpg";
import furnishing from "@/assets/service-furnishing.jpg";

import bedTeal from "@/assets/work/bed-teal-velvet.jpg";
import bedRose from "@/assets/work/bed-rose-wardrobe.jpg";
import bedMaroon from "@/assets/work/bed-maroon-tufted.jpg";
import bedWhite from "@/assets/work/bed-white-tufted.jpg";
import sofaBeige from "@/assets/work/sofa-beige-corner.jpg";
import sofaBrown from "@/assets/work/sofa-brown-pillows.jpg";
import sofaCream from "@/assets/work/sofa-cream-living.jpg";
import sofaWhite from "@/assets/work/sofa-white-u.jpg";
import sofaBlush from "@/assets/work/sofa-blush-sectional.jpg";

export const projects = [
  {
    id: "p1",
    title: "The Heritage Villa",
    category: "Full Home Interior",
    location: "Civil Lines, Hardoi",
    area: "4,200 sq ft",
    image: p1,
  },
  {
    id: "p2",
    title: "Walnut Suite",
    category: "Master Bedroom",
    location: "Lucknow",
    area: "480 sq ft",
    image: p2,
  },
  {
    id: "p3",
    title: "Maison Doré Dining",
    category: "Dining Room",
    location: "Sitapur",
    area: "320 sq ft",
    image: p3,
  },
  {
    id: "p4",
    title: "Royal Drawing Room",
    category: "Living Room",
    location: "Hardoi",
    area: "600 sq ft",
    image: hero,
  },
  {
    id: "p5",
    title: "Ivory Linen Bedroom",
    category: "Furnishing",
    location: "Kanpur",
    area: "380 sq ft",
    image: furnishing,
  },

  {
    id: "p7",
    title: "Teal Velvet Designer Bed",
    category: "Master Bedroom",
    location: "Lucknow",
    area: "Custom",
    image: bedTeal,
  },
  {
    id: "p8",
    title: "Rose Channel-Tufted Bed",
    category: "Master Bedroom",
    location: "Hardoi",
    area: "Custom",
    image: bedRose,
  },
  {
    id: "p9",
    title: "Maroon Crystal-Tufted Bed",
    category: "Master Bedroom",
    location: "Kanpur",
    area: "Custom",
    image: bedMaroon,
  },
  {
    id: "p10",
    title: "White Tufted Platform Bed",
    category: "Master Bedroom",
    location: "Sitapur",
    area: "Custom",
    image: bedWhite,
  },
  {
    id: "p11",
    title: "Beige Channel L-Sofa",
    category: "Living Room",
    location: "Lucknow",
    area: "Custom",
    image: sofaBeige,
  },
  {
    id: "p12",
    title: "U-Shaped Living Sofa",
    category: "Living Room",
    location: "Hardoi",
    area: "Custom",
    image: sofaBrown,
  },
  {
    id: "p13",
    title: "Cream Classic 3+1+1 Sofa",
    category: "Living Room",
    location: "Kanpur",
    area: "Custom",
    image: sofaCream,
  },
  {
    id: "p14",
    title: "White U-Sofa & Centre Table",
    category: "Living Room",
    location: "Lucknow",
    area: "Custom",
    image: sofaWhite,
  },
  {
    id: "p15",
    title: "Blush Modular L-Sofa",
    category: "Living Room",
    location: "Sitapur",
    area: "Custom",
    image: sofaBlush,
  },
] as const;

export const categories = [
  "All",
  "Full Home Interior",
  "Living Room",
  "Master Bedroom",

  "Dining Room",
  "Furnishing",
] as const;
