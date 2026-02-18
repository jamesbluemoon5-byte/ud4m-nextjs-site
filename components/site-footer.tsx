import { FOOTER, Locale } from "@/lib/content";

export function SiteFooter({ locale }: { locale: Locale }) {
  const f = FOOTER[locale];
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="text-sm font-semibold">{f.company}</div>
        <div className="mt-3 space-y-1 text-sm text-white/70">
          {f.lines.map((l) => <div key={l}>{l}</div>)}
        </div>
        <div className="mt-6 text-xs text-white/40">© {new Date().getFullYear()} {f.company}. All rights reserved.</div>
      </div>
    </footer>
  );
}
