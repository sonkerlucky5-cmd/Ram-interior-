import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as Phone, X, M as Menu, I as Instagram, F as Facebook, a as Mail, b as MapPin, C as Clock } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-CdpATqRH.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const siteConfig = {
  name: "Ram Interior",
  owner: "Anoop Sonker",
  tagline: "Crafting Beautiful Homes Since 2009",
  shortDescription: "Premium furniture crafted with precision, comfort, and timeless design. Customized sofas, luxury beds, dining tables, pillow covers, and premium bed sheet sets in Lucknow.",
  longDescription: "Ram Interior, led by Anoop Sonker, has been crafting heirloom-quality sofas, beds, dining tables, and luxury home furnishing for discerning homes across Lucknow since 2009. Every piece is designed in-house and built by master craftsmen.",
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
      country: "India"
    },
    hours: "Mon – Sat · 10:00 AM – 8:00 PM",
    googleMapsEmbed: "https://www.google.com/maps?q=RAM+INTERIORS+near+Kalyan+Giri+Mandir,+State+Highway+25,+Tondan+Marg,+Thakurganj,+Karim+Ganj,+Lucknow,+Uttar+Pradesh+226003&output=embed",
    googleMapsLink: "https://maps.app.goo.gl/ubivxAsmrHjzRSjE6"
  },
  social: {
    instagram: "https://www.instagram.com/anoopsonker10",
    facebook: "https://www.facebook.com/share/1UPRFnzPF3/"
  },
  serviceAreas: [
    "Lucknow",
    "Hardoi",
    "Sitapur",
    "Shahjahanpur",
    "Sandila",
    "Kanpur",
    "Barabanki",
    "Unnao"
  ]
};
const whatsappLink = (message = "Hi Ram Interior, I'd like a free consultation.") => `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
const fullAddress = () => {
  const a = siteConfig.contact.address;
  return `${a.line1}, ${a.line2}, ${a.city}, ${a.state} ${a.pin}, ${a.country}`;
};
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/portfolio", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe flex h-16 items-center justify-between md:h-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/",
          className: "group flex items-center gap-2 md:gap-3 transition-all duration-300 shrink-0",
          onClick: () => setOpen(false),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 md:h-10 md:w-10 place-items-center rounded bg-navy-deep text-ivory text-display text-lg md:text-xl shadow-lg transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110", children: "R" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex flex-col leading-none shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display text-lg sm:text-xl text-navy-deep md:text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gold", children: siteConfig.name }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-8 md:flex", children: nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.to,
          className: "text-sm text-foreground/80 transition-colors hover:text-foreground",
          activeProps: { className: "text-foreground border-b border-gold pb-0.5" },
          activeOptions: { exact: item.to === "/" },
          children: item.label
        },
        item.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden items-center gap-3 md:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: siteConfig.contact.phoneHref,
          className: "inline-flex items-center gap-2 rounded-sm bg-navy-deep px-5 py-2.5 text-sm text-ivory transition-colors hover:bg-walnut-deep",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-gold" }),
            "Call Now"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": open ? "Close menu" : "Open menu",
          className: "md:hidden",
          onClick: () => setOpen((v) => !v),
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60 bg-background md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container-luxe flex flex-col gap-1 py-4", children: [
      nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.to,
          className: "rounded-sm px-2 py-3 text-base text-foreground/85 hover:bg-muted",
          onClick: () => setOpen(false),
          activeProps: { className: "text-foreground bg-muted" },
          activeOptions: { exact: item.to === "/" },
          children: item.label
        },
        item.to
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: siteConfig.contact.phoneHref,
          className: "mt-2 rounded-sm bg-navy-deep px-4 py-3 text-center text-sm text-ivory",
          children: [
            "Call ",
            siteConfig.contact.phone
          ]
        }
      )
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 bg-navy-deep text-ivory", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe grid gap-12 py-16 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-center gap-2 cursor-default", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 md:h-10 md:w-10 shrink-0 place-items-center rounded bg-ivory text-navy-deep text-display text-base md:text-lg shadow-lg transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110", children: "R" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display text-xl sm:text-2xl shrink-0 transition-colors duration-300 group-hover:text-gold", children: siteConfig.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-md text-sm leading-relaxed text-ivory/70", children: siteConfig.longDescription }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: siteConfig.social.instagram,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Instagram",
              className: "grid h-10 w-10 place-items-center rounded-sm border border-ivory/20 hover:border-gold hover:text-gold transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: siteConfig.social.facebook,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Facebook",
              className: "grid h-10 w-10 place-items-center rounded-sm border border-ivory/20 hover:border-gold hover:text-gold transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `mailto:${siteConfig.contact.email}`,
              "aria-label": "Email",
              className: "grid h-10 w-10 place-items-center rounded-sm border border-ivory/20 hover:border-gold hover:text-gold transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "eyebrow text-gold-soft", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm text-ivory/75", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-gold", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-gold", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "hover:text-gold", children: "Products" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-gold", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-gold", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "eyebrow text-gold-soft", children: "Studio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm text-ivory/75", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: siteConfig.contact.googleMapsLink,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-start gap-3 hover:text-gold transition-colors group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold transition-transform group-hover:scale-110" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: fullAddress() })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: siteConfig.contact.phoneHref,
              className: "flex items-center gap-3 hover:text-gold transition-colors group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 shrink-0 text-gold transition-transform group-hover:scale-110" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: siteConfig.contact.phone })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `mailto:${siteConfig.contact.email}`,
              className: "flex items-center gap-3 hover:text-gold transition-colors group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 shrink-0 text-gold transition-transform group-hover:scale-110" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: siteConfig.contact.email })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: siteConfig.contact.hours })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-ivory/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/55 md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        siteConfig.name,
        ". All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Crafted in Lucknow · Serving ",
        siteConfig.serviceAreas.slice(0, 4).join(", "),
        " & more."
      ] })
    ] }) })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[70vh] items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule mr-3 align-middle" }),
      "404"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display mt-3 text-5xl text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "The page you're looking for has moved or never existed." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "mt-7 inline-flex items-center justify-center rounded-sm bg-navy-deep px-6 py-3 text-sm text-ivory transition-colors hover:bg-walnut-deep",
        children: "Return Home"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[70vh] items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display text-3xl text-foreground", children: "Something didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Please refresh or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-sm bg-navy-deep px-5 py-2.5 text-sm text-ivory hover:bg-walnut-deep",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-sm border border-border px-5 py-2.5 text-sm", children: "Go home" })
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${siteConfig.name} — ${siteConfig.tagline}` },
      { name: "description", content: siteConfig.shortDescription },
      { name: "theme-color", content: "#1a1f3a" },
      { property: "og:site_name", content: siteConfig.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "#ram-interior",
          name: siteConfig.name,
          description: siteConfig.shortDescription,
          telephone: siteConfig.contact.phone,
          priceRange: "₹₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
            addressLocality: siteConfig.contact.address.city,
            addressRegion: siteConfig.contact.address.state,
            postalCode: siteConfig.contact.address.pin,
            addressCountry: "IN"
          },
          areaServed: siteConfig.serviceAreas.map((c) => ({ "@type": "City", name: c })),
          openingHours: "Mo-Sa 10:00-20:00",
          foundingDate: String(siteConfig.founded),
          slogan: siteConfig.tagline,
          knowsAbout: [
            "Interior Design",
            "Custom Sofa",
            "Wardrobe",
            "Curtains",
            "Mattress",
            "Home Furnishing"
          ],
          fullAddress: fullAddress()
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-dvh flex-col overflow-x-hidden w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 w-full overflow-x-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
const BASE_URL = "";
const entries = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/portfolio", priority: "0.8", changefreq: "weekly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" }
];
const Route$5 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$4 = () => import("./services-BWVZmi5C.mjs");
const Route$4 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: `Services — Sofas, Wardrobes & More | ${siteConfig.name}`
    }, {
      name: "description",
      content: "Custom sofas, wardrobes, curtains, mattresses, and home furnishing — designed and built in our Hardoi workshop."
    }, {
      property: "og:title",
      content: `Services | ${siteConfig.name}`
    }, {
      property: "og:description",
      content: "Custom sofas, wardrobes, curtains, mattresses, and home furnishing."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./portfolio-D-NQ_K-5.mjs");
const Route$3 = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{
      title: `Products & Work — Sofas, Beds, Dining | ${siteConfig.name}`
    }, {
      name: "description",
      content: `Browse real sofas, designer beds, dining tables, curtains and bed sheet sets crafted by ${siteConfig.name} in Lucknow.`
    }, {
      property: "og:title",
      content: `Our Work | ${siteConfig.name}`
    }, {
      property: "og:description",
      content: "Real photos of our recent sofas, beds and furnishing projects."
    }, {
      property: "og:url",
      content: "/portfolio"
    }],
    links: [{
      rel: "canonical",
      href: "/portfolio"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-FdgZxGdX.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: `Contact ${siteConfig.name} — Luxury Furniture Studio in Lucknow`
    }, {
      name: "description",
      content: `Visit our Lucknow studio, call, or WhatsApp Ram Interior for premium customized furniture across Lucknow & nearby cities.`
    }, {
      property: "og:title",
      content: `Contact ${siteConfig.name}`
    }, {
      property: "og:description",
      content: "Visit, call, or WhatsApp Lucknow's bespoke furniture studio."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-twwj2tDa.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: `About ${siteConfig.name} — ${siteConfig.yearsExperience}+ Years of Craft in Hardoi`
    }, {
      name: "description",
      content: `Founded in ${siteConfig.founded}, ${siteConfig.name} is Hardoi's bespoke interior studio — ${siteConfig.projectsCompleted}+ projects, in-house workshop, lifetime craftsmanship.`
    }, {
      property: "og:title",
      content: `About ${siteConfig.name}`
    }, {
      property: "og:description",
      content: `${siteConfig.yearsExperience}+ years of bespoke furniture and interiors in Hardoi.`
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-ByyBSgKF.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: `${siteConfig.name} — ${siteConfig.tagline}`
    }, {
      name: "description",
      content: siteConfig.shortDescription
    }, {
      property: "og:title",
      content: `${siteConfig.name} — Luxury Interiors in Lucknow`
    }, {
      property: "og:description",
      content: siteConfig.shortDescription
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$5.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$6
});
const ServicesRoute = Route$4.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$6
});
const PortfolioRoute = Route$3.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PortfolioRoute,
  ServicesRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  fullAddress as f,
  router as r,
  siteConfig as s,
  whatsappLink as w
};
