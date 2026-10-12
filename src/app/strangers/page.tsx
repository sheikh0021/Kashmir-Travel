import type { Metadata } from "next";
import { StrangersView } from "@/components/strangers-view";

export const metadata: Metadata = {
  title: "From strangers to family",
  description:
    "Sign up for the Al Safar Kashmir draw. Travelers are picked at random and travel the 6-day group tour together.",
};

export default function Page() {
  return <StrangersView />;
}
