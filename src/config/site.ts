/**
 * Ram Interior — Business configuration.
 */

export const siteConfig = {
  name: "Ram Interior",
  owner: "Anoop Sonker",
  tagline: "Crafting Beautiful Homes Since 2009",
  shortDescription:
    "Premium furniture crafted with precision, comfort, and timeless design. Customized sofas, luxury beds, dining tables, pillow covers, and premium bed sheet sets in Lucknow.",
  longDescription:
    "Ram Interior, led by Anoop Sonker, has been crafting heirloom-quality sofas, beds, dining tables, and luxury home furnishing for discerning homes across Lucknow since 2009. Every piece is designed in-house and built by master craftsmen.",

  founded: 2009,
  yearsExperience: 17,
  projectsCompleted: 480,
  happyClients: 360,
  citiesServed: 12,

  contact: {
    phone: "+91 99566 66866",
    phoneHref: "tel:+919956666866",
    whatsapp: "919956666866",
    email: "anoopsonker10@gmail.com",
    address: {
      line1: "Ram Interiors, near Kalyan Giri Mandir",
      line2: "State Highway 25, Tondan Marg, Thakurganj, Karim Ganj",
      city: "Lucknow",
      state: "Uttar Pradesh",
      pin: "226003",
      country: "India",
    },
    hours: "Mon – Sat · 10:00 AM – 8:00 PM",
    googleMapsEmbed:
      "https://www.google.com/maps?q=RAM+INTERIORS+near+Kalyan+Giri+Mandir,+State+Highway+25,+Tondan+Marg,+Thakurganj,+Karim+Ganj,+Lucknow,+Uttar+Pradesh+226003&output=embed",
    googleMapsLink: "https://maps.app.goo.gl/ubivxAsmrHjzRSjE6",
  },

  social: {
    instagram: "https://www.instagram.com/anoopsonker10",
    facebook: "https://www.facebook.com/share/1UPRFnzPF3/",
    youtube: "https://youtube.com/@raminterior",
  },

  serviceAreas: [
    "Lucknow",
    "Hardoi",
    "Sitapur",
    "Shahjahanpur",
    "Sandila",
    "Kanpur",
    "Barabanki",
    "Unnao",
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export const whatsappLink = (message = "Hi Ram Interior, I'd like a free consultation.") =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const fullAddress = () => {
  const a = siteConfig.contact.address;
  return `${a.line1}, ${a.line2}, ${a.city}, ${a.state} ${a.pin}, ${a.country}`;
};
