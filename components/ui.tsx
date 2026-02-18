import Link from "next/link";
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-screen-xl px-6">{children}</div>;
}
export function Section({ id, children }: { id?: string; children: ReactNode }) {
  return <section id={id} className="py-16 sm:py-20">{children}</section>;
}
export function Button({ href, variant="primary", children }: { href: string; variant?: "primary" | "secondary"; children: ReactNode; }) {
  const cls = variant === "primary"
    ? "inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink hover:opacity-90"
    : "inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10";
  return <Link href={href} className={cls}>{children}</Link>;
}
export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">{children}</div>;
}
