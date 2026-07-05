import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as siteConfig, w as whatsappLink } from "./router-DKfetfeM.mjs";
import { w as work } from "./work-data-Cs2E86nM.mjs";
import { S as SectionHeading } from "./SectionHeading-Dqas-FtG.mjs";
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
import "../_libs/lucide-react.mjs";
function PortfolioPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-beige/30 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Our Products", title: "Homes we've shaped.", subtitle: `A small selection from ${siteConfig.projectsCompleted}+ completed projects.` }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: work.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink(`Hi Ram Interior, I liked the "${p.title}". Please share details.`), target: "_blank", rel: "noopener noreferrer", className: "group relative block aspect-[4/5] overflow-hidden rounded-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.alt, className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105", loading: "lazy", width: 1200, height: 1500 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/10 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6 text-ivory", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold-soft", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display mt-2 text-2xl", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-ivory/65", children: "Tap to enquire on WhatsApp" })
        ] })
      ] }, p.id)) }),
      work.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-16 text-center text-muted-foreground", children: "No projects in this category yet." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy-deep py-20 text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display text-3xl sm:text-4xl md:text-5xl", children: "Your home, our next project." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-7 inline-flex rounded-sm bg-gold px-7 py-3.5 text-sm font-medium text-navy-deep hover:bg-gold-soft", children: "Start a Project" })
    ] }) })
  ] });
}
export {
  PortfolioPage as component
};
