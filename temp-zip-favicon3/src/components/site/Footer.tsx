import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Clock, Mail, Facebook } from "lucide-react";
import { siteConfig, fullAddress } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy-deep text-ivory">
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="group flex items-center gap-2 cursor-default">
            <span className="grid h-8 w-8 md:h-10 md:w-10 shrink-0 place-items-center rounded bg-ivory text-navy-deep text-display text-base md:text-lg shadow-lg transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
              R
            </span>
            <span className="text-display text-xl sm:text-2xl shrink-0 transition-colors duration-300 group-hover:text-gold">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/70">
            {siteConfig.longDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-sm border border-ivory/20 hover:border-gold hover:text-gold transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-sm border border-ivory/20 hover:border-gold hover:text-gold transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-sm border border-ivory/20 hover:border-gold hover:text-gold transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow text-gold-soft">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-ivory/75">
            <li>
              <Link to="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-gold">
                Products
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-gold-soft">Studio</h4>
          <ul className="mt-5 space-y-3 text-sm text-ivory/75">
            <li>
              <a
                href={siteConfig.contact.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-gold transition-colors group"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold transition-transform group-hover:scale-110" />
                <span>{fullAddress()}</span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-3 hover:text-gold transition-colors group"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:scale-110" />
                <span>{siteConfig.contact.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 hover:text-gold transition-colors group"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:scale-110" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{siteConfig.contact.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/55 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Crafted in Lucknow · Serving {siteConfig.serviceAreas.slice(0, 4).join(", ")} & more.
          </p>
        </div>
      </div>
    </footer>
  );
}
