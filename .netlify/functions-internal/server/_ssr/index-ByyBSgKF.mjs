import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { h as heroImage, a as aboutImage } from "./about-CHk3ko3A.mjs";
import { s as sofaImg, m as mattressImg, c as curtainsImg, w as wardrobeImg, f as furnishingImg } from "./service-wardrobe-VyLyyB95.mjs";
import { s as siteConfig, w as whatsappLink, f as fullAddress } from "./router-DKfetfeM.mjs";
import { S as SectionHeading } from "./SectionHeading-Dqas-FtG.mjs";
import { w as work } from "./work-data-Cs2E86nM.mjs";
import { d as ArrowRight, P as Phone, e as Hammer, S as ShieldCheck, f as Sparkles, g as Truck, h as CircleCheck, Q as Quote, i as Star, R as Ruler, j as Palette, b as MapPin, A as Award } from "../_libs/lucide-react.mjs";
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
function useReveal() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll("[data-reveal]");
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}
function useCountUp(target, duration = 1600) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              el.textContent = Math.floor(target * eased).toString();
              if (p < 1) requestAnimationFrame(tick);
              else el.textContent = target.toString();
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return ref;
}
const testimonials = [{
  name: "Anjali Verma",
  city: "Lucknow",
  text: "Ram Interior transformed our living room into something out of a magazine. The walnut work is flawless, and the team kept every promise.",
  rating: 5
}, {
  name: "Rajeev Mishra",
  city: "Hardoi",
  text: "Compared three firms — Ram Interior had the most transparent quote and the finish was better than the 3D render.",
  rating: 5
}, {
  name: "Pooja Singh",
  city: "Sitapur",
  text: "Custom sofa, curtains, mattress — all from one team, delivered in five weeks. Unbelievable craftsmanship.",
  rating: 5
}];
const categoryCards = [{
  title: "Sofas",
  image: sofaImg,
  count: "40+ designs"
}, {
  title: "Mattresses",
  image: mattressImg,
  count: "12 variants"
}, {
  title: "Curtains",
  image: curtainsImg,
  count: "150+ fabrics"
}, {
  title: "Wardrobes",
  image: wardrobeImg,
  count: "Built-in"
}, {
  title: "Furnishing",
  image: furnishingImg,
  count: "Curated"
}];
const whyUs = [{
  icon: Hammer,
  title: "In-House Workshop",
  body: "No outsourcing — every cut and joint made by our own master carpenters."
}, {
  icon: ShieldCheck,
  title: "10-Year Warranty",
  body: "Frames warrantied for a decade. We build to outlast trends."
}, {
  icon: Sparkles,
  title: "Transparent Pricing",
  body: "Itemised quotes. Zero hidden charges. What you see is what you pay."
}, {
  icon: Truck,
  title: "Free Installation",
  body: "Free home measurement and installation across Lucknow & Hardoi."
}];
const process = [{
  step: "01",
  icon: Phone,
  title: "Consultation",
  body: "Share your space, taste and budget — on call, WhatsApp, or at our studio."
}, {
  step: "02",
  icon: Ruler,
  title: "Measurement & 3D Design",
  body: "We measure on-site and present a photorealistic 3D preview within 5 days."
}, {
  step: "03",
  icon: Palette,
  title: "Material Selection",
  body: "Choose fabrics, finishes, hardware from our curated material library."
}, {
  step: "04",
  icon: Hammer,
  title: "In-House Craft",
  body: "Our master carpenters build your piece in our Lucknow workshop."
}, {
  step: "05",
  icon: CircleCheck,
  title: "White-Glove Install",
  body: "Delivered and installed by our team. Final styling included."
}];
function Stat({
  value,
  suffix = "+",
  label
}) {
  const ref = useCountUp(value);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-display text-4xl text-gold md:text-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref, children: "0" }),
      suffix
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-widest text-ivory/65", children: label })
  ] });
}
function Home() {
  const wrap = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: wrap, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImage, alt: "Luxury Indian living room with walnut paneling and navy velvet sofa", className: "h-full w-full object-cover animate-kenburns", width: 1920, height: 1280, fetchPriority: "high" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-navy-deep/85 via-navy-deep/50 to-navy-deep/90" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold/25 blur-3xl animate-orb" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-10 top-1/3 h-96 w-96 rounded-full bg-walnut/30 blur-3xl animate-orb", style: {
            animationDelay: "2s"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-navy/40 blur-3xl animate-orb", style: {
            animationDelay: "4s"
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0", children: Array.from({
          length: 18
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute block h-1 w-1 rounded-full bg-gold/60 animate-drift", style: {
          left: `${i * 53 % 100}%`,
          top: `${i * 37 % 100}%`,
          animationDelay: `${i % 6 * 1.4}s`,
          animationDuration: `${10 + i % 5 * 3}s`
        } }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe flex min-h-[92vh] flex-col items-center justify-center py-24 text-center text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex max-w-4xl flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow text-gold-soft animate-fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule mr-3 align-middle" }),
          "Lucknow · Est. ",
          siteConfig.founded,
          " · by ",
          siteConfig.owner
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display mt-5 text-4xl sm:text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem] animate-fade-up", children: [
          "Crafting Beautiful Homes Since ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-white not-italic", children: "2009" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg animate-fade-up", children: "Premium furniture crafted with precision, comfort, and timeless design. We specialize in customized sofas, luxury beds, dining tables, pillow covers, and premium bed sheet sets." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center justify-center gap-4 animate-fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "btn-magnetic group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-navy-deep transition-transform hover:scale-[1.02]", children: [
            "Explore Collection",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: siteConfig.contact.phoneHref, className: "inline-flex items-center gap-2 rounded-full border border-ivory/30 px-8 py-4 text-sm text-ivory backdrop-blur-sm hover:bg-ivory/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-gold" }),
            " Call Now"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mx-auto mt-14 grid max-w-xl grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: siteConfig.yearsExperience, label: "Years of Craft" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: siteConfig.projectsCompleted, label: "Projects Delivered" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: siteConfig.happyClients, label: "Happy Families" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-ivory/10 bg-navy-deep/60 py-5 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-12 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 animate-marquee gap-12 whitespace-nowrap text-ivory/60", children: [...Array(2)].flatMap((_, i) => ["Customized Sofas", "Designer Curtains", "Ortho Mattresses", "Wardrobes", "Home Furnishing", "Interior Consultation"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-display text-2xl", children: [
        t,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-6 text-gold", children: "✦" })
      ] }, `${i}-${t}`))) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-reveal": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Our Work", title: "Real pieces. Real homes. Built in our workshop.", subtitle: "A glimpse of recent customized sofas, beds, dining sets, curtains, pillow & bed-sheet sets delivered across Lucknow.", center: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: work.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink(`Hi, I liked the "${w.title}" — please share details.`), target: "_blank", rel: "noopener noreferrer", "data-reveal": true, style: {
        ["--reveal-delay"]: `${i % 3 * 90}ms`
      }, className: "group relative block overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: w.image, alt: w.alt, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1100ms] group-hover:scale-110" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent opacity-90" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-5 text-ivory", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold-soft", children: w.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display mt-1 text-xl", children: w.title })
        ] })
      ] }, w.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", "data-reveal": true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink(), target: "_blank", rel: "noopener noreferrer", className: "btn-magnetic inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-3.5 text-sm text-ivory hover:bg-walnut-deep", children: [
        "Order Yours on WhatsApp ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-beige/40 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-reveal": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Why Choose Ram Interior", title: "A standard you can feel.", subtitle: "Four reasons our customers stay with us — and refer their families.", center: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: whyUs.map(({
        icon: Icon,
        title,
        body
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, style: {
        ["--reveal-delay"]: `${i * 100}ms`
      }, className: "group flex h-full flex-col rounded-2xl bg-card p-5 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-xl bg-navy-deep text-gold transition-transform group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display mt-4 text-lg text-foreground", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: body })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 md:grid-cols-2 md:gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-reveal": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutImage, alt: "Master craftsman shaping walnut wood at Ram Interior workshop", className: "aspect-[4/5] w-full rounded-2xl object-cover shadow-luxury", loading: "lazy", width: 1200, height: 1500 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -right-6 hidden rounded-2xl bg-gold p-6 text-navy-deep shadow-luxury md:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-display text-4xl", children: [
            siteConfig.yearsExperience,
            "+"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest", children: "Years in Craft" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, style: {
        ["--reveal-delay"]: "120ms"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Customized Solutions", title: "Made to your inch. Built for your life.", subtitle: "Every Ram Interior piece begins blank. You bring the vision — we engineer the comfort, the durability, and the fit." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-5", children: [{
          title: "Any Dimension",
          body: "Sofas, mattresses, wardrobes built to your exact inches — no compromise on fit."
        }, {
          title: "Fabric & Finish Library",
          body: "150+ curated fabrics, 40+ wood finishes, premium hardware from Hettich & Hafele."
        }, {
          title: "3D Design Preview",
          body: "See your finished room before we cut a single plank — completely free."
        }].map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/15 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-medium text-foreground", children: it.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: it.body })
          ] })
        ] }, it.title)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink(), target: "_blank", rel: "noopener noreferrer", className: "btn-magnetic mt-8 inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-3.5 text-sm text-ivory hover:bg-walnut-deep", children: [
          "Start Customizing ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy-deep py-24 text-ivory md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-reveal": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Product Categories", title: "Everything for the modern Indian home.", center: true, light: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-6", children: categoryCards.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", "data-reveal": true, style: {
        ["--reveal-delay"]: `${i * 80}ms`
      }, className: `group relative block overflow-hidden rounded-2xl h-[400px] lg:h-[480px] ${i < 2 ? "sm:col-span-1 md:col-span-3" : "sm:col-span-1 md:col-span-2"} ${i === 4 ? "sm:col-span-2 md:col-span-2" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.image, alt: c.title, className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 flex items-end justify-between p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display text-3xl", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-ivory/65", children: c.count })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 place-items-center rounded-full bg-gold text-navy-deep transition-transform group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }) })
        ] })
      ] }, c.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe py-24 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-reveal": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Client Stories", title: "A standard worth talking about.", center: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { "data-reveal": true, style: {
        ["--reveal-delay"]: `${i * 100}ms`
      }, className: "rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-luxury", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-7 w-7 text-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-5 text-sm leading-relaxed text-foreground/85", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex gap-0.5", children: Array.from({
          length: t.rating
        }).map((_, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }, i2)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.city })
        ] })
      ] }, t.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-walnut py-20 text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe grid grid-cols-2 gap-4 sm:gap-8 text-center md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: siteConfig.yearsExperience, label: "Years of Excellence" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: siteConfig.projectsCompleted, label: "Projects Delivered" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: siteConfig.happyClients, label: "Happy Families" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: siteConfig.citiesServed, label: "Cities Served" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe py-24 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-reveal": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Our Process", title: "Five steps from idea to installed.", subtitle: "Transparent, on-time, and on-budget — every single project.", center: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5", children: process.map(({
        step,
        icon: Icon,
        title,
        body
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, style: {
        ["--reveal-delay"]: `${i * 110}ms`
      }, className: "relative rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-luxury", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-sm text-navy-deep", children: step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto mt-2 grid h-14 w-14 place-items-center rounded-2xl bg-beige text-walnut-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display mt-4 text-lg text-foreground", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs leading-relaxed text-muted-foreground", children: body })
      ] }, step)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe pb-24 md:pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-deep via-navy to-walnut-deep p-10 text-ivory shadow-luxury md:p-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:gap-10 md:grid-cols-[1.2fr_1fr] md:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow text-gold-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule mr-3 align-middle" }),
            "Free Consultation"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display mt-4 text-3xl leading-tight md:text-5xl", children: "Let's design your next room — together." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-ivory/80", children: "Share your space, taste, and budget. We'll design a concept, walk you through a 3D preview, and give you an itemised quote — all complimentary." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: siteConfig.contact.phoneHref, className: "btn-magnetic rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-navy-deep hover:bg-gold-soft", children: "Call Now" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsappLink(), target: "_blank", rel: "noopener noreferrer", className: "rounded-full border border-ivory/30 px-7 py-3.5 text-sm hover:bg-ivory/10", children: "WhatsApp Us" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 rounded-2xl border border-ivory/15 bg-ivory/[0.04] p-6 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mt-0.5 h-5 w-5 shrink-0 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: siteConfig.contact.phoneHref, className: "block hover:text-gold", children: siteConfig.contact.phone }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-5 w-5 shrink-0 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory/80", children: fullAddress() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory/80", children: siteConfig.contact.hours })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-gold/5" })
    ] }) })
  ] });
}
export {
  Home as component
};
