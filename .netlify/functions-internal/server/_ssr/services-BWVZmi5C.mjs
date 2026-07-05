import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { w as whatsappLink } from "./router-DKfetfeM.mjs";
import { S as SectionHeading } from "./SectionHeading-Dqas-FtG.mjs";
import { s as sofaImg, w as wardrobeImg, c as curtainsImg, m as mattressImg, f as furnishingImg } from "./service-wardrobe-VyLyyB95.mjs";
import { c as Check } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const services = [
  {
    slug: "customized-sofa",
    title: "Customized Sofas",
    summary: "Hand-built sofas tailored to your space, fabric, and posture — from compact two-seaters to grand L-shaped sectionals.",
    image: sofaImg,
    bullets: [
      "Solid hardwood frames",
      "Premium velvets, leatherette & linen",
      "10-year frame warranty"
    ]
  },
  {
    slug: "built-in-wardrobes",
    title: "Built-in Wardrobes",
    summary: "Sleek and spacious wardrobes tailored to your room dimensions. Optimize your storage with custom compartments and sliding/openable shutters.",
    image: wardrobeImg,
    bullets: [
      "Floor-to-ceiling designs",
      "Sliding & openable doors",
      "Customized internal organizers"
    ]
  },
  {
    slug: "curtains-blinds",
    title: "Curtains & Blinds",
    summary: "Heavy drapes, sheer ivory linens, blackouts, motorised blinds — measured and installed at your home.",
    image: curtainsImg,
    bullets: ["Free home measurement", "150+ fabric library", "Motorised options available"]
  },
  {
    slug: "mattresses",
    title: "Customized Mattresses",
    summary: "Made-to-order mattresses in your exact size — orthopaedic, memory foam, latex, and pocket spring.",
    image: mattressImg,
    bullets: [
      "Any dimension built to order",
      "Orthopaedic & cooling layers",
      "7-night comfort exchange"
    ]
  },
  {
    slug: "home-furnishing",
    title: "Home Furnishing",
    summary: "Bed linens, cushions, rugs, and accessories curated to complete your interior story.",
    image: furnishingImg,
    bullets: ["Cotton, linen & silk blends", "Coordinated palettes", "Seasonal collections"]
  }
];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-beige/30 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule mr-3 align-middle" }),
        "Our Services"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl", children: "Six disciplines, one studio." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-muted-foreground", children: "Every piece we make passes through one set of hands, one quality standard, and one studio philosophy. Browse our service families and request a quote in seconds." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe py-24 space-y-28", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid items-center gap-12 md:grid-cols-2 md:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: i % 2 === 1 ? "md:order-2" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image, alt: s.title, className: "aspect-[4/3] w-full rounded-sm object-cover shadow-card", loading: "lazy", width: 1200, height: 900 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule mr-3 align-middle" }),
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display mt-3 text-3xl sm:text-4xl md:text-5xl", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: s.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: s.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85", children: b })
        ] }, b)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "rounded-sm bg-navy-deep px-6 py-3 text-sm text-ivory hover:bg-walnut-deep", children: "Get a quote" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsappLink(`Hi, I'd like more information about ${s.title}.`), target: "_blank", rel: "noopener noreferrer", className: "rounded-sm border border-border px-6 py-3 text-sm hover:bg-muted", children: "Ask on WhatsApp" })
        ] })
      ] })
    ] }, s.slug)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy-deep py-20 text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Not sure where to start?", title: "Book a free home consultation.", subtitle: "Our designer visits your home, measures the space, listens to your taste, and prepares a 3D preview — all complimentary.", center: true, light: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-8 inline-flex rounded-sm bg-gold px-7 py-3.5 text-sm font-medium text-navy-deep hover:bg-gold-soft", children: "Book Consultation" })
    ] }) })
  ] });
}
export {
  ServicesPage as component
};
