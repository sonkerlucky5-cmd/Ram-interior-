import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { h as heroImage, a as aboutImage } from "./about-CHk3ko3A.mjs";
import { s as siteConfig } from "./router-DKfetfeM.mjs";
import { S as SectionHeading } from "./SectionHeading-Dqas-FtG.mjs";
import { T as Target, E as Eye, H as Heart, A as Award } from "../_libs/lucide-react.mjs";
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
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden bg-navy-deep py-24 text-ivory md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImage, alt: "", className: "absolute inset-0 -z-10 h-full w-full object-cover opacity-25" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow text-gold-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule mr-3 align-middle" }),
          "About Ram Interior"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display mt-4 max-w-3xl text-4xl sm:text-5xl md:text-7xl", children: "A studio built on patience and proportion." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 max-w-2xl text-ivory/80", children: [
          "For over ",
          siteConfig.yearsExperience,
          " years, we've been shaping interiors in Hardoi — one joinery, one fabric, one client at a time."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 md:grid-cols-2 md:gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutImage, alt: "Master craftsman", className: "aspect-[4/5] w-full rounded-sm object-cover shadow-luxury", width: 1200, height: 900, loading: "lazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Our Story", title: "From a single workshop to Hardoi's signature studio." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            siteConfig.name,
            " began in ",
            siteConfig.founded,
            " as a two-craftsman workshop with a single belief: that great furniture is the quiet backbone of a great home. We were Hardoi's first studio to offer free in-home consultation and a written, itemised quote."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Today, we run an in-house design studio and a full manufacturing workshop. Every sofa, every wardrobe leaves under our own roof — never outsourced. That's why we can stand behind our 10-year frame warranty without hesitation." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "We've completed ",
            siteConfig.projectsCompleted,
            "+ projects across",
            " ",
            siteConfig.citiesServed,
            "+ cities — but our heart remains here, in Hardoi."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-beige/40 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe grid gap-6 md:grid-cols-3", children: [{
      icon: Target,
      title: "Mission",
      body: "To deliver heirloom-quality interiors that elevate everyday living — without the inflated price tags of metro studios."
    }, {
      icon: Eye,
      title: "Vision",
      body: "To be the most trusted interior brand of tier-2 India — known for restraint, craft, and a client list that never stops talking about us."
    }, {
      icon: Heart,
      title: "Values",
      body: "Honesty in pricing. Patience in craft. Respect for every home, whether the brief is a single sofa or a full villa."
    }].map(({
      icon: Icon,
      title,
      body
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm bg-card p-8 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-sm bg-navy-deep text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display mt-5 text-2xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: body })
    ] }, title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe py-24 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "By the numbers", title: "The work, in figures.", center: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-2 gap-4 sm:gap-8 text-center md:grid-cols-4", children: [{
        value: `${siteConfig.yearsExperience}+`,
        label: "Years of Craft"
      }, {
        value: `${siteConfig.projectsCompleted}+`,
        label: "Projects Delivered"
      }, {
        value: `${siteConfig.happyClients}+`,
        label: "Happy Families"
      }, {
        value: `${siteConfig.citiesServed}+`,
        label: "Cities Served"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-display text-5xl text-yellow-500 md:text-6xl", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-widest text-muted-foreground", children: s.label })
      ] }, s.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy-deep py-24 text-ivory md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "mx-auto h-10 w-10 text-gold" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display mt-5 text-4xl md:text-5xl", children: "Ready to begin?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-ivory/75", children: "Start with a free design consultation. Walk away with a 3D preview and an itemised quote." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-8 inline-flex rounded-sm bg-gold px-7 py-3.5 text-sm font-medium text-navy-deep hover:bg-gold-soft", children: "Request a Quote" })
    ] }) })
  ] });
}
export {
  About as component
};
