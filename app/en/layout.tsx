import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Locale } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industrial XR & Digital Twin Infrastructure | UD4M",
  description: "Operational-grade XR systems for shipbuilding, energy, and smart infrastructure.",
};

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  const locale: Locale = "en";
  return (
    <div className="min-h-screen">
      <SiteNav locale={locale} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
