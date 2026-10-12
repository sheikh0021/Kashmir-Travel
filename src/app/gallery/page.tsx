import type { Metadata } from "next";
import { GalleryView } from "@/components/gallery-view";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photographs of Kashmir for Al Safar group tours from Jabalpur.",
};

export default function Page() {
  return <GalleryView />;
}
