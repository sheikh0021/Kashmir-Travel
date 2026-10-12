import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";

export const metadata: Metadata = {
  title: "Kashmir is calling",
};

export default function Page() {
  return <HomeView />;
}
