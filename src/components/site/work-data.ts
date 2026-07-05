import bedTeal from "@/assets/work/bed-teal-velvet.jpg";
import bedRose from "@/assets/work/bed-rose-wardrobe.jpg";
import bedMaroon from "@/assets/work/bed-maroon-tufted.jpg";
import bedWhite from "@/assets/work/bed-white-tufted.jpg";
import sofaBeige from "@/assets/work/sofa-beige-corner.jpg";
import sofaBrown from "@/assets/work/sofa-brown-pillows.jpg";
import sofaCream from "@/assets/work/sofa-cream-living.jpg";
import sofaWhite from "@/assets/work/sofa-white-u.jpg";
import sofaBlush from "@/assets/work/sofa-blush-sectional.jpg";

export type WorkItem = {
  id: string;
  title: string;
  category: "Sofa" | "Bed" | "Dining" | "Curtains" | "Bed Sheet & Pillow Set";
  image: string;
  alt: string;
};

export const work: WorkItem[] = [
  {
    id: "w1",
    title: "Teal Velvet Designer Bed",
    category: "Bed",
    image: bedTeal,
    alt: "Teal velvet diamond-tufted designer bed with gold accents",
  },
  {
    id: "w2",
    title: "Rose Channel-Tufted Bed",
    category: "Bed",
    image: bedRose,
    alt: "Rose channel-tufted bed with built-in walnut wardrobe",
  },
  {
    id: "w3",
    title: "Maroon Crystal-Tufted Bed",
    category: "Bed",
    image: bedMaroon,
    alt: "Maroon king bed with crystal-tufted leatherette headboard",
  },
  {
    id: "w4",
    title: "White Tufted Platform Bed",
    category: "Bed",
    image: bedWhite,
    alt: "White tufted platform bed with LED backlit headboard",
  },
  {
    id: "w5",
    title: "Beige Channel L-Sofa",
    category: "Sofa",
    image: sofaBeige,
    alt: "Beige leatherette channel-tufted L-shaped sofa",
  },
  {
    id: "w6",
    title: "U-Shaped Living Sofa",
    category: "Bed Sheet & Pillow Set",
    image: sofaBrown,
    alt: "U-shaped brown and beige sofa with floral pillow covers set",
  },
  {
    id: "w7",
    title: "Cream Classic 3+1+1 Sofa",
    category: "Sofa",
    image: sofaCream,
    alt: "Cream and chocolate classic 3+1+1 living room sofa set",
  },
  {
    id: "w8",
    title: "White U-Sofa & Centre Table",
    category: "Sofa",
    image: sofaWhite,
    alt: "White leatherette U-shaped sofa with matching centre table",
  },
  {
    id: "w9",
    title: "Blush Modular L-Sofa",
    category: "Sofa",
    image: sofaBlush,
    alt: "Blush fabric modular L-shaped sofa with adjustable headrest",
  },
];
