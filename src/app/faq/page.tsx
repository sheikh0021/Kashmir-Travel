import type { Metadata } from "next";
import { FaqView } from "@/components/faq-view";

export const metadata: Metadata = {
  title: "Questions",
  description:
    "Answers about the Al Safar 6-day Kashmir group tour from Jabalpur, including price, inclusions, and how to book.",
};

export default function Page() {
  return <FaqView />;
}
