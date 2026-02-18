import Link from "next/link";
import { NAV, Locale } from "@/lib/content";

export function SiteNav({ locale }: { locale: Locale }) {
  const items = NAV[locale];
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="text-sm font-semibold tracking-wide">UD4M</Link>
        <nav className="hidden gap-6 md:flex">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="text-sm text-white/80 hover:text-white">
              {it.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href={locale === "en" ? "/kr" : "/en"} className="rounded-lg border border-white/15 px-3 py-2 text-xs text-white/80 hover:bg-white/10">
            {locale === "en" ? "KR" : "EN"}
          </Link>
          <Link href={`/${locale}/request-demo`} className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-ink hover:opacity-90">
            {locale === "en" ? "Request Demo" : "데모 요청"}
          </Link>
        </div>
      </div>
    </header>
  );
}
