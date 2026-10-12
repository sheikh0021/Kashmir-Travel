export const PHONE_DISPLAY = "+91 77718 42703";
export const PHONE_TEL = "tel:+917771842703";
export const WHATSAPP_NUMBER = "917771842703";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Russell+Chowk+Napier+Town+Jabalpur";

export function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const galleryImages = [
  {
    id: "pahalgam",
    src: "/gallery/pahalgam.jpg",
    credit: "Wikimedia Commons",
  },
  {
    id: "houseboats",
    src: "/gallery/dal-houseboats.jpg",
    credit: "Unsplash",
  },
  {
    id: "shikara",
    src: "/gallery/shikara.jpg",
    credit: "Wikimedia Commons",
  },
  {
    id: "nishat",
    src: "/gallery/nishat.jpg",
    credit: "Wikimedia Commons",
  },
  {
    id: "dal-dusk",
    src: "/gallery/dal-dusk.jpg",
    credit: "Wikimedia Commons",
  },
  {
    id: "gulmarg",
    src: "/gallery/gulmarg.jpg",
    credit: "Wikimedia Commons",
  },
  {
    id: "meadow",
    src: "/gallery/meadow.jpg",
    credit: "Unsplash",
  },
  {
    id: "dal-lake",
    src: "/gallery/dal-lake.jpg",
    credit: "Wikimedia Commons",
  },
  {
    id: "betaab",
    src: "/gallery/betaab.jpg",
    credit: "Wikimedia Commons",
  },
] as const;

export type GalleryId = (typeof galleryImages)[number]["id"];
