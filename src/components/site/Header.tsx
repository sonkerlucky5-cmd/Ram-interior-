import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/portfolio", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-luxe flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="group flex items-center gap-2 md:gap-3 transition-all duration-300 shrink-0"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 md:h-10 md:w-10 place-items-center rounded bg-navy-deep text-ivory text-display text-lg md:text-xl shadow-lg transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
            R
          </span>
          <span className="flex flex-col leading-none shrink-0">
            <span className="text-display text-lg sm:text-xl text-navy-deep md:text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gold">
              {siteConfig.name}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground border-b border-gold pb-0.5" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-sm bg-navy-deep px-5 py-2.5 text-sm text-ivory transition-colors hover:bg-walnut-deep"
          >
            <Phone className="h-4 w-4 text-gold" />
            Call Now
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="container-luxe flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-sm px-2 py-3 text-base text-foreground/85 hover:bg-muted"
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-foreground bg-muted" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.contact.phoneHref}
              className="mt-2 rounded-sm bg-navy-deep px-4 py-3 text-center text-sm text-ivory"
            >
              Call {siteConfig.contact.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
