import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import { siteConfig, fullAddress } from "@/config/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">
          <span className="gold-rule mr-3 align-middle" />
          404
        </p>
        <h1 className="text-display mt-3 text-5xl text-foreground">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for has moved or never existed.
        </p>
        <Link
          to="/"
          className="mt-7 inline-flex items-center justify-center rounded-sm bg-navy-deep px-6 py-3 text-sm text-ivory transition-colors hover:bg-walnut-deep"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display text-3xl text-foreground">Something didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">Please refresh or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-sm bg-navy-deep px-5 py-2.5 text-sm text-ivory hover:bg-walnut-deep"
          >
            Try again
          </button>
          <a href="/" className="rounded-sm border border-border px-5 py-2.5 text-sm">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${siteConfig.name} — ${siteConfig.tagline}` },
      { name: "description", content: siteConfig.shortDescription },
      { name: "theme-color", content: "#1a1f3a" },
      { property: "og:site_name", content: siteConfig.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "#ram-interior",
          name: siteConfig.name,
          description: siteConfig.shortDescription,
          telephone: siteConfig.contact.phone,
          priceRange: "₹₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
            addressLocality: siteConfig.contact.address.city,
            addressRegion: siteConfig.contact.address.state,
            postalCode: siteConfig.contact.address.pin,
            addressCountry: "IN",
          },
          areaServed: siteConfig.serviceAreas.map((c) => ({ "@type": "City", name: c })),
          openingHours: "Mo-Sa 10:00-20:00",
          foundingDate: String(siteConfig.founded),
          slogan: siteConfig.tagline,
          knowsAbout: [
            "Interior Design",
            "Custom Sofa",
            "Wardrobe",
            "Curtains",
            "Mattress",
            "Home Furnishing",
          ],
          fullAddress: fullAddress(),
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col overflow-x-hidden w-full">
        <Header />
        <main className="flex-1 w-full overflow-x-hidden">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
