import { createFileRoute, Link } from "@tanstack/react-router";
import { siteConfig, whatsappLink } from "@/config/site";
import { work, type WorkItem } from "@/components/site/work-data";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: `Products & Work — Sofas, Beds, Dining | ${siteConfig.name}` },
      {
        name: "description",
        content: `Browse real sofas, designer beds, dining tables, curtains and bed sheet sets crafted by ${siteConfig.name} in Lucknow.`,
      },
      { property: "og:title", content: `Our Work | ${siteConfig.name}` },
      {
        property: "og:description",
        content: "Real photos of our recent sofas, beds and furnishing projects.",
      },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <section className="bg-beige/30 py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Our Products"
            title="Homes we've shaped."
            subtitle={`A small selection from ${siteConfig.projectsCompleted}+ completed projects.`}
          />
        </div>
      </section>

      <section className="container-luxe py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {work.map((p) => (
            <a
              key={p.id}
              href={whatsappLink(
                `Hi Ram Interior, I liked the "${p.title}". Please share details.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img
                src={p.image}
                alt={p.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={1200}
                height={1500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                <p className="eyebrow text-gold-soft">{p.category}</p>
                <h3 className="text-display mt-2 text-2xl">{p.title}</h3>
                <p className="mt-1 text-xs text-ivory/65">Tap to enquire on WhatsApp</p>
              </div>
            </a>
          ))}
        </div>

        {work.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        )}
      </section>

      <section className="bg-navy-deep py-20 text-ivory">
        <div className="container-luxe text-center">
          <h2 className="text-display text-3xl sm:text-4xl md:text-5xl">
            Your home, our next project.
          </h2>
          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-sm bg-gold px-7 py-3.5 text-sm font-medium text-navy-deep hover:bg-gold-soft"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
