import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as siteConfig, w as whatsappLink, f as fullAddress } from "./router-DKfetfeM.mjs";
import { S as SectionHeading } from "./SectionHeading-Dqas-FtG.mjs";
import { P as Phone, a as Mail, I as Instagram, F as Facebook, b as MapPin, C as Clock } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-beige/30 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-10 flex flex-col items-center text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-center gap-3 md:gap-4 cursor-default max-w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 md:h-16 md:w-16 shrink-0 place-items-center rounded bg-navy-deep text-ivory text-display text-2xl md:text-3xl shadow-lg transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110", children: "R" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-display text-2xl sm:text-3xl text-navy-deep leading-none transition-colors duration-300 group-hover:text-gold truncate", children: siteConfig.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[10px] sm:text-xs uppercase tracking-widest sm:tracking-[0.25em] text-walnut truncate", children: [
            "Prop. ",
            siteConfig.owner,
            " · Est. ",
            siteConfig.founded
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Get in touch", title: "Visit, call, or chat — we're here.", subtitle: "No forms, no waiting. Talk to us directly on call or WhatsApp during studio hours." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: siteConfig.contact.phoneHref, className: "flex items-center gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-luxury", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-deep text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display text-xl text-foreground", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: siteConfig.contact.phoneHref, className: "mt-2 block text-sm text-muted-foreground hover:text-gold", children: siteConfig.contact.phone })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${siteConfig.contact.email}`, className: "flex items-center gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-luxury", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-deep text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display text-xl text-foreground", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 block text-sm text-muted-foreground hover:text-gold break-all", children: siteConfig.contact.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink(), target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-luxury", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-6 w-6", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12a11.94 11.94 0 0 0 1.64 6.06L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52ZM12 21.82a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.67.96.98-3.58-.24-.37A9.81 9.81 0 1 1 21.82 12 9.82 9.82 0 0 1 12 21.82Zm5.39-7.36c-.29-.15-1.73-.85-2-.95s-.47-.15-.66.15-.76.95-.94 1.15-.35.22-.64.07a8 8 0 0 1-2.36-1.46 8.83 8.83 0 0 1-1.63-2c-.17-.29 0-.45.13-.6s.29-.34.43-.51a2.05 2.05 0 0 0 .29-.49.55.55 0 0 0 0-.51c-.07-.15-.66-1.59-.9-2.18s-.48-.49-.66-.5h-.56a1.07 1.07 0 0 0-.78.36 3.26 3.26 0 0 0-1 2.42 5.65 5.65 0 0 0 1.18 3 13 13 0 0 0 4.93 4.34 16.43 16.43 0 0 0 1.65.61 4 4 0 0 0 1.82.12 3 3 0 0 0 2-1.4 2.46 2.46 0 0 0 .17-1.4c-.07-.13-.26-.21-.55-.36Z" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "WhatsApp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-display text-xl text-foreground", children: "Start a chat" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Replies within minutes during business hours" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: siteConfig.social.instagram, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-luxury", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Instagram" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-display text-xl text-foreground", children: "@anoopsonker10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Follow our latest projects" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: siteConfig.social.facebook, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-luxury", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#1877F2] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Facebook" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-display text-xl text-foreground", children: "Ram Interior" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Connect with us on Facebook" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: siteConfig.contact.googleMapsLink, target: "_blank", rel: "noopener noreferrer", className: "flex items-start gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-luxury", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-deep text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Studio Address · Tap for directions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-base text-foreground", children: fullAddress() })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-deep text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Working Hours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-base text-foreground", children: siteConfig.contact.hours })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border shadow-card h-[400px] md:h-[560px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Ram Interior on Google Maps", src: siteConfig.contact.googleMapsEmbed, className: "h-full w-full border-0", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
