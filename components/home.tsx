import Link from "next/link";
import Image from "next/image";
import { HOME, Locale } from "@/lib/content";
import { Button, Card, Container, Section } from "@/components/ui";

export function HomePage({ locale }: { locale: Locale }) {
  const c = HOME[locale];

  return (
    <>
      <Section id="hero">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-14 sm:px-10 sm:py-20">
            {/* subtle background glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              {/* Left */}
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                    Shipbuilding XR
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                    Cross-device collaboration
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                    Digital twin ready
                  </span>
                </div>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  {c.hero.h1}
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                  {c.hero.h2}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-white/70">
                  {c.hero.proof.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={c.hero.ctaPrimary.href} variant="primary">
                    {c.hero.ctaPrimary.label}
                  </Button>
                  <Button href={c.hero.ctaSecondary.href} variant="secondary">
                    {c.hero.ctaSecondary.label}
                  </Button>
                </div>

                <p className="mt-6 text-xs text-white/45">
                  {locale === "en"
                    ? "Public site uses Target/Pilot wording. Detailed numbers shared under NDA."
                    : "공개 웹은 Target/Pilot 표기만 사용. 상세 수치는 NDA 후 공유."}
                </p>
              </div>

              {/* Right: Screenshot */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl">
                  <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                    <div className="text-xs font-semibold text-white/80">
                      UD4M Shipyard Digital Twin
                    </div>
                    <div className="text-xs text-white/50">
                      {locale === "en" ? "Live session" : "라이브 세션"}
                    </div>
                  </div>

                  <div className="mt-4 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src="/hero-shipyard.png"
                      alt="UD4M Shipyard XR Collaboration"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-3 text-xs text-white/55">
                    {locale === "en"
                      ? "Shipbuilding XR collaboration session (hero visual)."
                      : "조선 XR 협업 세션(히어로 비주얼)."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>


      <Section id="industries">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              {c.industriesTitle}
            </h2>
            <Link
              href={`/${locale}/industries`}
              className="text-sm text-white/70 hover:text-white"
            >
              {locale === "en" ? "All industries →" : "산업 전체 →"}
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {c.industries.map((card) => (
              <Link key={card.title} href={card.href}>
                <Card>
                  <div className="text-lg font-semibold">{card.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-white/70">
                    {card.desc}
                  </div>
                  <div className="mt-4 text-sm text-white/80">
                    {locale === "en" ? "View →" : "보기 →"}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="platform">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <Card>
              <div className="text-sm font-semibold text-white/80">
                {locale === "en" ? "Platform" : "플랫폼"}
              </div>

              <div className="mt-3 text-sm text-white/70">{c.platformTitle}</div>

              <ul className="mt-3 space-y-1 text-sm text-white/70">
                {c.platformBullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              <div className="mt-6">
                <Button href={`/${locale}/platform`} variant="secondary">
                  {locale === "en" ? "View details" : "상세 보기"}
                </Button>
              </div>
            </Card>

            <Card>
              <div className="text-sm font-semibold text-white/80">
                {locale === "en" ? "IP & Technology" : "IP/기술"}
              </div>

              <div className="mt-3 text-sm text-white/70">{c.ipTitle}</div>

              <ul className="mt-3 space-y-1 text-sm text-white/70">
                {c.ipBullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              <div className="mt-6">
                <Button href={`/${locale}/ip`} variant="secondary">
                  {locale === "en" ? "View IP" : "IP 보기"}
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section id="cta">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">{c.finalTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
              {c.finalCopy}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={`/${locale}/request-demo`} variant="primary">
                {c.finalPrimary}
              </Button>
              <Button
                href={`/${locale}/request-demo?type=partner`}
                variant="secondary"
              >
                {c.finalSecondary}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
