import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/components/site/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Services — Sofas, Wardrobes & More | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Custom sofas, wardrobes, curtains, mattresses, and home furnishing — designed and built in our Hardoi workshop.",
      },
      { property: "og:title", content: `Services | ${siteConfig.name}` },
      {
        property: "og:description",
        content: "Custom sofas, wardrobes, curtains, mattresses, and home furnishing.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-beige/30 py-20 md:py-28">
        <div className="container-luxe">
          <p className="eyebrow">
            <span className="gold-rule mr-3 align-middle" />
            Our Services
          </p>
          <h1 className="text-display mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl">
            Six disciplines, one studio.
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Every piece we make passes through one set of hands, one quality standard, and one
            studio philosophy. Browse our service families and request a quote in seconds.
          </p>
        </div>
      </section>

      <section className="container-luxe py-24 space-y-28">
        {services.map((s, i) => (
          <article key={s.slug} className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <img
                src={s.image}
                alt={s.title}
                className="aspect-[4/3] w-full rounded-sm object-cover shadow-card"
                loading="lazy"
                width={1200}
                height={900}
              />
            </div>
            <div>
              <p className="eyebrow">
                <span className="gold-rule mr-3 align-middle" />0{i + 1}
              </p>
              <h2 className="text-display mt-3 text-3xl sm:text-4xl md:text-5xl">{s.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.summary}</p>
              <ul className="mt-6 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span className="text-foreground/85">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-sm bg-navy-deep px-6 py-3 text-sm text-ivory hover:bg-walnut-deep"
                >
                  Get a quote
                </Link>
                <a
                  href={whatsappLink(`Hi, I'd like more information about ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm border border-border px-6 py-3 text-sm hover:bg-muted"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-navy-deep py-20 text-ivory">
        <div className="container-luxe text-center">
          <SectionHeading
            eyebrow="Not sure where to start?"
            title="Book a free home consultation."
            subtitle="Our designer visits your home, measures the space, listens to your taste, and prepares a 3D preview — all complimentary."
            center
            light
          />
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-sm bg-gold px-7 py-3.5 text-sm font-medium text-navy-deep hover:bg-gold-soft"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
