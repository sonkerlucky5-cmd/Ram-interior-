import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, Award } from "lucide-react";
import aboutImage from "@/assets/about.jpg";
import heroImage from "@/assets/hero.jpg";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: `About ${siteConfig.name} — ${siteConfig.yearsExperience}+ Years of Craft in Hardoi`,
      },
      {
        name: "description",
        content: `Founded in ${siteConfig.founded}, ${siteConfig.name} is Hardoi's bespoke interior studio — ${siteConfig.projectsCompleted}+ projects, in-house workshop, lifetime craftsmanship.`,
      },
      { property: "og:title", content: `About ${siteConfig.name}` },
      {
        property: "og:description",
        content: `${siteConfig.yearsExperience}+ years of bespoke furniture and interiors in Hardoi.`,
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-deep py-24 text-ivory md:py-32">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        />
        <div className="container-luxe">
          <p className="eyebrow text-gold-soft">
            <span className="gold-rule mr-3 align-middle" />
            About Ram Interior
          </p>
          <h1 className="text-display mt-4 max-w-3xl text-4xl sm:text-5xl md:text-7xl">
            A studio built on patience and proportion.
          </h1>
          <p className="mt-6 max-w-2xl text-ivory/80">
            For over {siteConfig.yearsExperience} years, we've been shaping interiors in Hardoi —
            one joinery, one fabric, one client at a time.
          </p>
        </div>
      </section>

      <section className="container-luxe py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <img
            src={aboutImage}
            alt="Master craftsman"
            className="aspect-[4/5] w-full rounded-sm object-cover shadow-luxury"
            width={1200}
            height={900}
            loading="lazy"
          />
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="From a single workshop to Hardoi's signature studio."
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                {siteConfig.name} began in {siteConfig.founded} as a two-craftsman workshop with a
                single belief: that great furniture is the quiet backbone of a great home. We were
                Hardoi's first studio to offer free in-home consultation and a written, itemised
                quote.
              </p>
              <p>
                Today, we run an in-house design studio and a full manufacturing workshop. Every
                sofa, every wardrobe leaves under our own roof — never outsourced. That's why we can
                stand behind our 10-year frame warranty without hesitation.
              </p>
              <p>
                We've completed {siteConfig.projectsCompleted}+ projects across{" "}
                {siteConfig.citiesServed}+ cities — but our heart remains here, in Hardoi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige/40 py-24 md:py-32">
        <div className="container-luxe grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Mission",
              body: "To deliver heirloom-quality interiors that elevate everyday living — without the inflated price tags of metro studios.",
            },
            {
              icon: Eye,
              title: "Vision",
              body: "To be the most trusted interior brand of tier-2 India — known for restraint, craft, and a client list that never stops talking about us.",
            },
            {
              icon: Heart,
              title: "Values",
              body: "Honesty in pricing. Patience in craft. Respect for every home, whether the brief is a single sofa or a full villa.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-sm bg-card p-8 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-sm bg-navy-deep text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-display mt-5 text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-luxe py-24 md:py-32">
        <SectionHeading eyebrow="By the numbers" title="The work, in figures." center />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-8 text-center md:grid-cols-4">
          {[
            { value: `${siteConfig.yearsExperience}+`, label: "Years of Craft" },
            { value: `${siteConfig.projectsCompleted}+`, label: "Projects Delivered" },
            { value: `${siteConfig.happyClients}+`, label: "Happy Families" },
            { value: `${siteConfig.citiesServed}+`, label: "Cities Served" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-display text-5xl text-yellow-500 md:text-6xl">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-deep py-24 text-ivory md:py-32">
        <div className="container-luxe text-center">
          <Award className="mx-auto h-10 w-10 text-gold" />
          <h2 className="text-display mt-5 text-4xl md:text-5xl">Ready to begin?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/75">
            Start with a free design consultation. Walk away with a 3D preview and an itemised
            quote.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-sm bg-gold px-7 py-3.5 text-sm font-medium text-navy-deep hover:bg-gold-soft"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
