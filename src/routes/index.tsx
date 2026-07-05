import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Hammer,
  Sparkles,
  Quote,
  Star,
  ShieldCheck,
  Ruler,
  Palette,
  Truck,
  CheckCircle2,
  Phone,
  MapPin,
} from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import aboutImage from "@/assets/about.jpg";
import sofaImg from "@/assets/service-sofa.jpg";

import curtainsImg from "@/assets/service-curtains.jpg";
import mattressImg from "@/assets/service-mattress.jpg";
import wardrobeImg from "@/assets/service-wardrobe.jpg";
import furnishingImg from "@/assets/service-furnishing.jpg";
import { siteConfig, whatsappLink, fullAddress } from "@/config/site";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/components/site/services-data";
import { projects } from "@/components/site/portfolio-data";
import { work } from "@/components/site/work-data";
import { useReveal, useCountUp } from "@/components/site/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.name} — ${siteConfig.tagline}` },
      { name: "description", content: siteConfig.shortDescription },
      { property: "og:title", content: `${siteConfig.name} — Luxury Interiors in Lucknow` },
      { property: "og:description", content: siteConfig.shortDescription },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const testimonials = [
  {
    name: "Anjali Verma",
    city: "Lucknow",
    text: "Ram Interior transformed our living room into something out of a magazine. The walnut work is flawless, and the team kept every promise.",
    rating: 5,
  },
  {
    name: "Rajeev Mishra",
    city: "Hardoi",
    text: "Compared three firms — Ram Interior had the most transparent quote and the finish was better than the 3D render.",
    rating: 5,
  },
  {
    name: "Pooja Singh",
    city: "Sitapur",
    text: "Custom sofa, curtains, mattress — all from one team, delivered in five weeks. Unbelievable craftsmanship.",
    rating: 5,
  },
];

const featured = [
  { title: "Velluto Sofa", category: "Customized Sofa", price: "from ₹54,000", image: sofaImg },

  {
    title: "Linen Cascade",
    category: "Designer Curtains",
    price: "from ₹1,200/m",
    image: curtainsImg,
  },
  { title: "Cloud Ortho", category: "Mattress", price: "from ₹18,000", image: mattressImg },
];

const categoryCards = [
  { title: "Sofas", image: sofaImg, count: "40+ designs" },
  { title: "Mattresses", image: mattressImg, count: "12 variants" },
  { title: "Curtains", image: curtainsImg, count: "150+ fabrics" },

  { title: "Wardrobes", image: wardrobeImg, count: "Built-in" },
  { title: "Furnishing", image: furnishingImg, count: "Curated" },
];

const whyUs = [
  {
    icon: Hammer,
    title: "In-House Workshop",
    body: "No outsourcing — every cut and joint made by our own master carpenters.",
  },
  {
    icon: ShieldCheck,
    title: "10-Year Warranty",
    body: "Frames warrantied for a decade. We build to outlast trends.",
  },
  {
    icon: Sparkles,
    title: "Transparent Pricing",
    body: "Itemised quotes. Zero hidden charges. What you see is what you pay.",
  },
  {
    icon: Truck,
    title: "Free Installation",
    body: "Free home measurement and installation across Lucknow & Hardoi.",
  },
];

const process = [
  {
    step: "01",
    icon: Phone,
    title: "Consultation",
    body: "Share your space, taste and budget — on call, WhatsApp, or at our studio.",
  },
  {
    step: "02",
    icon: Ruler,
    title: "Measurement & 3D Design",
    body: "We measure on-site and present a photorealistic 3D preview within 5 days.",
  },
  {
    step: "03",
    icon: Palette,
    title: "Material Selection",
    body: "Choose fabrics, finishes, hardware from our curated material library.",
  },
  {
    step: "04",
    icon: Hammer,
    title: "In-House Craft",
    body: "Our master carpenters build your piece in our Lucknow workshop.",
  },
  {
    step: "05",
    icon: CheckCircle2,
    title: "White-Glove Install",
    body: "Delivered and installed by our team. Final styling included.",
  },
];

function Stat({ value, suffix = "+", label }: { value: number; suffix?: string; label: string }) {
  const ref = useCountUp(value);
  return (
    <div data-reveal>
      <p className="text-display text-4xl text-gold md:text-5xl">
        <span ref={ref}>0</span>
        {suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-widest text-ivory/65">{label}</p>
    </div>
  );
}

function Home() {
  const wrap = useReveal<HTMLDivElement>();
  return (
    <div ref={wrap}>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Luxury Indian living room with walnut paneling and navy velvet sofa"
            className="h-full w-full object-cover animate-kenburns"
            width={1920}
            height={1280}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/85 via-navy-deep/50 to-navy-deep/90" />
          {/* Ambient room glow orbs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <span className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold/25 blur-3xl animate-orb" />
            <span
              className="absolute right-10 top-1/3 h-96 w-96 rounded-full bg-walnut/30 blur-3xl animate-orb"
              style={{ animationDelay: "2s" }}
            />
            <span
              className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-navy/40 blur-3xl animate-orb"
              style={{ animationDelay: "4s" }}
            />
          </div>
          {/* Drifting particles */}
          <div className="pointer-events-none absolute inset-0">
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className="absolute block h-1 w-1 rounded-full bg-gold/60 animate-drift"
                style={{
                  left: `${(i * 53) % 100}%`,
                  top: `${(i * 37) % 100}%`,
                  animationDelay: `${(i % 6) * 1.4}s`,
                  animationDuration: `${10 + (i % 5) * 3}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container-luxe flex min-h-[92vh] flex-col items-center justify-center py-24 text-center text-ivory">
          <div className="flex max-w-4xl flex-col items-center">
            <p className="eyebrow text-gold-soft animate-fade-up">
              <span className="gold-rule mr-3 align-middle" />
              Lucknow · Est. {siteConfig.founded} · by {siteConfig.owner}
            </p>
            <h1 className="text-display mt-5 text-4xl sm:text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem] animate-fade-up">
              Crafting Beautiful Homes Since <em className="text-white not-italic">2009</em>.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg animate-fade-up">
              Premium furniture crafted with precision, comfort, and timeless design. We specialize
              in customized sofas, luxury beds, dining tables, pillow covers, and premium bed sheet
              sets.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 animate-fade-up">
              <Link
                to="/portfolio"
                className="btn-magnetic group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-navy-deep transition-transform hover:scale-[1.02]"
              >
                Explore Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-8 py-4 text-sm text-ivory backdrop-blur-sm hover:bg-ivory/10"
              >
                <Phone className="h-4 w-4 text-gold" /> Call Now
              </a>
            </div>

            <dl className="mx-auto mt-14 grid max-w-xl grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-6">
              <Stat value={siteConfig.yearsExperience} label="Years of Craft" />
              <Stat value={siteConfig.projectsCompleted} label="Projects Delivered" />
              <Stat value={siteConfig.happyClients} label="Happy Families" />
            </dl>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-t border-ivory/10 bg-navy-deep/60 py-5 backdrop-blur">
          <div className="flex gap-12 overflow-hidden">
            <div className="flex shrink-0 animate-marquee gap-12 whitespace-nowrap text-ivory/60">
              {[...Array(2)].flatMap((_, i) =>
                [
                  "Customized Sofas",
                  "Designer Curtains",
                  "Ortho Mattresses",
                  "Wardrobes",
                  "Home Furnishing",
                  "Interior Consultation",
                ].map((t) => (
                  <span key={`${i}-${t}`} className="text-display text-2xl">
                    {t} <span className="mx-6 text-gold">✦</span>
                  </span>
                )),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION removed per request */}

      {/* OUR WORK — Real Projects */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container-luxe">
          <div data-reveal>
            <SectionHeading
              eyebrow="Our Work"
              title="Real pieces. Real homes. Built in our workshop."
              subtitle="A glimpse of recent customized sofas, beds, dining sets, curtains, pillow & bed-sheet sets delivered across Lucknow."
              center
            />
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((w, i) => (
              <a
                key={w.id}
                href={whatsappLink(`Hi, I liked the "${w.title}" — please share details.`)}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                style={{ ["--reveal-delay" as never]: `${(i % 3) * 90}ms` }}
                className="group relative block overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={w.image}
                    alt={w.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1100ms] group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
                  <p className="eyebrow text-gold-soft">{w.category}</p>
                  <h3 className="text-display mt-1 text-xl">{w.title}</h3>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center" data-reveal>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-3.5 text-sm text-ivory hover:bg-walnut-deep"
            >
              Order Yours on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-beige/40 py-24 md:py-32">
        <div className="container-luxe">
          <div data-reveal>
            <SectionHeading
              eyebrow="Why Choose Ram Interior"
              title="A standard you can feel."
              subtitle="Four reasons our customers stay with us — and refer their families."
              center
            />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                data-reveal
                style={{ ["--reveal-delay" as never]: `${i * 100}ms` }}
                className="group flex h-full flex-col rounded-2xl bg-card p-5 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-deep text-gold transition-transform group-hover:scale-110">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-display mt-4 text-lg text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMIZED SOLUTIONS — split showcase */}
      <section className="container-luxe py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="relative" data-reveal>
            <img
              src={aboutImage}
              alt="Master craftsman shaping walnut wood at Ram Interior workshop"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-luxury"
              loading="lazy"
              width={1200}
              height={1500}
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gold p-6 text-navy-deep shadow-luxury md:block">
              <p className="text-display text-4xl">{siteConfig.yearsExperience}+</p>
              <p className="text-xs uppercase tracking-widest">Years in Craft</p>
            </div>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as never]: "120ms" }}>
            <SectionHeading
              eyebrow="Customized Solutions"
              title="Made to your inch. Built for your life."
              subtitle="Every Ram Interior piece begins blank. You bring the vision — we engineer the comfort, the durability, and the fit."
            />
            <ul className="mt-8 space-y-5">
              {[
                {
                  title: "Any Dimension",
                  body: "Sofas, mattresses, wardrobes built to your exact inches — no compromise on fit.",
                },
                {
                  title: "Fabric & Finish Library",
                  body: "150+ curated fabrics, 40+ wood finishes, premium hardware from Hettich & Hafele.",
                },
                {
                  title: "3D Design Preview",
                  body: "See your finished room before we cut a single plank — completely free.",
                },
              ].map((it) => (
                <li key={it.title} className="flex gap-4">
                  <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-base font-medium text-foreground">{it.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic mt-8 inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-3.5 text-sm text-ivory hover:bg-walnut-deep"
            >
              Start Customizing <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="bg-navy-deep py-24 text-ivory md:py-32">
        <div className="container-luxe">
          <div data-reveal>
            <SectionHeading
              eyebrow="Product Categories"
              title="Everything for the modern Indian home."
              center
              light
            />
          </div>
          <div className="mt-14 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-6">
            {categoryCards.map((c, i) => (
              <Link
                key={c.title}
                to="/portfolio"
                data-reveal
                style={{ ["--reveal-delay" as never]: `${i * 80}ms` }}
                className={`group relative block overflow-hidden rounded-2xl h-[400px] lg:h-[480px] ${
                  i < 2 ? "sm:col-span-1 md:col-span-3" : "sm:col-span-1 md:col-span-2"
                } ${i === 4 ? "sm:col-span-2 md:col-span-2" : ""}`}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <h3 className="text-display text-3xl">{c.title}</h3>
                    <p className="mt-1 text-xs text-ivory/65">{c.count}</p>
                  </div>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold text-navy-deep transition-transform group-hover:rotate-45">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-luxe py-24 md:py-32">
        <div data-reveal>
          <SectionHeading eyebrow="Client Stories" title="A standard worth talking about." center />
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              data-reveal
              style={{ ["--reveal-delay" as never]: `${i * 100}ms` }}
              className="rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-luxury"
            >
              <Quote className="h-7 w-7 text-gold" />
              <blockquote className="mt-5 text-sm leading-relaxed text-foreground/85">
                "{t.text}"
              </blockquote>
              <div className="mt-5 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <figcaption className="mt-4 text-sm">
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.city}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* STATS COUNTER */}
      <section className="bg-gradient-walnut py-20 text-ivory">
        <div className="container-luxe grid grid-cols-2 gap-4 sm:gap-8 text-center md:grid-cols-4">
          <Stat value={siteConfig.yearsExperience} label="Years of Excellence" />
          <Stat value={siteConfig.projectsCompleted} label="Projects Delivered" />
          <Stat value={siteConfig.happyClients} label="Happy Families" />
          <Stat value={siteConfig.citiesServed} label="Cities Served" />
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="container-luxe py-24 md:py-32">
        <div data-reveal>
          <SectionHeading
            eyebrow="Our Process"
            title="Five steps from idea to installed."
            subtitle="Transparent, on-time, and on-budget — every single project."
            center
          />
        </div>
        <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {process.map(({ step, icon: Icon, title, body }, i) => (
            <div
              key={step}
              data-reveal
              style={{ ["--reveal-delay" as never]: `${i * 110}ms` }}
              className="relative rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-luxury"
            >
              <span className="text-display absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-sm text-navy-deep">
                {step}
              </span>
              <span className="mx-auto mt-2 grid h-14 w-14 place-items-center rounded-2xl bg-beige text-walnut-deep">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-display mt-4 text-lg text-foreground">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="container-luxe pb-24 md:pb-32">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-deep via-navy to-walnut-deep p-10 text-ivory shadow-luxury md:p-16">
          <div className="grid gap-8 md:gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p className="eyebrow text-gold-soft">
                <span className="gold-rule mr-3 align-middle" />
                Free Consultation
              </p>
              <h2 className="text-display mt-4 text-3xl leading-tight md:text-5xl">
                Let's design your next room — together.
              </h2>
              <p className="mt-4 max-w-xl text-ivory/80">
                Share your space, taste, and budget. We'll design a concept, walk you through a 3D
                preview, and give you an itemised quote — all complimentary.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="btn-magnetic rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-navy-deep hover:bg-gold-soft"
                >
                  Call Now
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ivory/30 px-7 py-3.5 text-sm hover:bg-ivory/10"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <ul className="space-y-4 rounded-2xl border border-ivory/15 bg-ivory/[0.04] p-6 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <a href={siteConfig.contact.phoneHref} className="block hover:text-gold">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-ivory/80">{fullAddress()}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-ivory/80">{siteConfig.contact.hours}</span>
              </li>
            </ul>
          </div>
          <Award className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-gold/5" />
        </div>
      </section>
    </div>
  );
}

// Suppress unused import warnings — kept for future use.
void services;
void projects;
