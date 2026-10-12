import type { Metadata } from "next";
import { ContactView } from "@/components/contact-view";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call or WhatsApp Al Safar on +91 77718 42703. Office at Russell Chowk, Napier Town, Jabalpur.",
};

export default function Page() {
  return <ContactView />;
}
