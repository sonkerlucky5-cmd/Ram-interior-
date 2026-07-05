import { whatsappLink } from "@/config/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxury transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12a11.94 11.94 0 0 0 1.64 6.06L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52ZM12 21.82a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.67.96.98-3.58-.24-.37A9.81 9.81 0 1 1 21.82 12 9.82 9.82 0 0 1 12 21.82Zm5.39-7.36c-.29-.15-1.73-.85-2-.95s-.47-.15-.66.15-.76.95-.94 1.15-.35.22-.64.07a8 8 0 0 1-2.36-1.46 8.83 8.83 0 0 1-1.63-2c-.17-.29 0-.45.13-.6s.29-.34.43-.51a2.05 2.05 0 0 0 .29-.49.55.55 0 0 0 0-.51c-.07-.15-.66-1.59-.9-2.18s-.48-.49-.66-.5h-.56a1.07 1.07 0 0 0-.78.36 3.26 3.26 0 0 0-1 2.42 5.65 5.65 0 0 0 1.18 3 13 13 0 0 0 4.93 4.34 16.43 16.43 0 0 0 1.65.61 4 4 0 0 0 1.82.12 3 3 0 0 0 2-1.4 2.46 2.46 0 0 0 .17-1.4c-.07-.13-.26-.21-.55-.36Z" />
      </svg>
    </a>
  );
}
