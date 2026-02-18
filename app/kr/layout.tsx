import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Locale } from "@/lib/content";

export const metadata: Metadata = {
  title: "유디포엠 | 산업용 XR·디지털 트윈 인프라",
  description: "조선·에너지·인프라 현장용 운영 등급 XR 구축. 특허·기술이전 기반.",
};

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  const locale: Locale = "kr";
  return (
    <div className="min-h-screen">
      <SiteNav locale={locale} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
