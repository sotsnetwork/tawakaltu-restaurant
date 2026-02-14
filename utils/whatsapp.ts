/**
 * Builds a WhatsApp Click-to-Chat URL for the restaurant.
 * Orders and feedback are sent via WhatsApp so the restaurant receives them directly.
 */
export function getWhatsAppUrl(message: string): string {
  const phone = import.meta.env.VITE_RESTAURANT_WHATSAPP || '2348012345678';
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function openWhatsApp(message: string): void {
  window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}
