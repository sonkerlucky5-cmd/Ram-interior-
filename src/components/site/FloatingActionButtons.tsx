import { Phone, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";

export function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Phone */}
      <a
        href={siteConfig.contact.phoneHref}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy-deep shadow-luxury transition-transform hover:scale-110"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
