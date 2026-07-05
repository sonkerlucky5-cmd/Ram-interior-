import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Mail, Facebook } from "lucide-react";
import { siteConfig, whatsappLink, fullAddress } from "@/config/site";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact ${siteConfig.name} — Luxury Furniture Studio in Lucknow` },
      {
        name: "description",
        content: `Visit our Lucknow studio, call, or WhatsApp Ram Interior for premium customized furniture across Lucknow & nearby cities.`,
      },
      { property: "og:title", content: `Contact ${siteConfig.name}` },
      {
        property: "og:description",
        content: "Visit, call, or WhatsApp Lucknow's bespoke furniture studio.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-beige/30 py-20 md:py-28">
        <div className="container-luxe">
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="group flex items-center gap-3 md:gap-4 cursor-default max-w-full">
              <span className="grid h-12 w-12 md:h-16 md:w-16 shrink-0 place-items-center rounded bg-navy-deep text-ivory text-display text-2xl md:text-3xl shadow-lg transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                R
              </span>
              <div className="text-left overflow-hidden">
                <p className="text-display text-2xl sm:text-3xl text-navy-deep leading-none transition-colors duration-300 group-hover:text-gold truncate">
                  {siteConfig.name}
                </p>
                <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest sm:tracking-[0.25em] text-walnut truncate">
                  Prop. {siteConfig.owner} · Est. {siteConfig.founded}
                </p>
              </div>
            </div>
          </div>
          <SectionHeading
            eyebrow="Get in touch"
            title="Visit, call, or chat — we're here."
            subtitle="No forms, no waiting. Talk to us directly on call or WhatsApp during studio hours."
          />
        </div>
      </section>

      <section className="container-luxe py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            <a
              href={siteConfig.contact.phoneHref}
              className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-luxury"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-deep text-gold">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-display text-xl text-foreground">Phone</h3>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="mt-2 block text-sm text-muted-foreground hover:text-gold"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-luxury"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-deep text-gold">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-display text-xl text-foreground">Email</h3>
                <span className="mt-2 block text-sm text-muted-foreground hover:text-gold break-all">
                  {siteConfig.contact.email}
                </span>
              </div>
            </a>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-luxury"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12a11.94 11.94 0 0 0 1.64 6.06L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52ZM12 21.82a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.67.96.98-3.58-.24-.37A9.81 9.81 0 1 1 21.82 12 9.82 9.82 0 0 1 12 21.82Zm5.39-7.36c-.29-.15-1.73-.85-2-.95s-.47-.15-.66.15-.76.95-.94 1.15-.35.22-.64.07a8 8 0 0 1-2.36-1.46 8.83 8.83 0 0 1-1.63-2c-.17-.29 0-.45.13-.6s.29-.34.43-.51a2.05 2.05 0 0 0 .29-.49.55.55 0 0 0 0-.51c-.07-.15-.66-1.59-.9-2.18s-.48-.49-.66-.5h-.56a1.07 1.07 0 0 0-.78.36 3.26 3.26 0 0 0-1 2.42 5.65 5.65 0 0 0 1.18 3 13 13 0 0 0 4.93 4.34 16.43 16.43 0 0 0 1.65.61 4 4 0 0 0 1.82.12 3 3 0 0 0 2-1.4 2.46 2.46 0 0 0 .17-1.4c-.07-.13-.26-.21-.55-.36Z" />
                </svg>
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</p>
                <p className="mt-1 text-display text-xl text-foreground">Start a chat</p>
                <p className="text-sm text-muted-foreground">
                  Replies within minutes during business hours
                </p>
              </div>
            </a>

            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-luxury"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white">
                <Instagram className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</p>
                <p className="mt-1 text-display text-xl text-foreground">@anoopsonker10</p>
                <p className="text-sm text-muted-foreground">Follow our latest projects</p>
              </div>
            </a>

            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-luxury"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#1877F2] text-white">
                <Facebook className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Facebook</p>
                <p className="mt-1 text-display text-xl text-foreground">Ram Interior</p>
                <p className="text-sm text-muted-foreground">Connect with us on Facebook</p>
              </div>
            </a>

            <a
              href={siteConfig.contact.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-luxury"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-deep text-gold">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Studio Address · Tap for directions
                </p>
                <p className="mt-1 text-base text-foreground">{fullAddress()}</p>
              </div>
            </a>

            <div className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-deep text-gold">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Working Hours
                </p>
                <p className="mt-1 text-base text-foreground">{siteConfig.contact.hours}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-card h-[400px] md:h-[560px]">
            <iframe
              title="Ram Interior on Google Maps"
              src={siteConfig.contact.googleMapsEmbed}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
