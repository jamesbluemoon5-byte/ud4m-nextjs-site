import Link from "next/link";
import Image from "next/image";
import { Button, Card, Container, Section } from "@/components/ui";

export type Locale = "en" | "kr";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

function Stat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
      {note ? <div className="mt-2 text-xs text-white/50">{note}</div> : null}
    </div>
  );
}

function LogoTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
      <div className="relative aspect-[7/2] w-full overflow-hidden rounded-xl">
        <Image src={src} alt={alt} fill className="object-contain p-2" />
      </div>
    </div>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const isEN = locale === "en";

  const copy = isEN
    ? {
        heroKicker: "AI-powered cross-device XR training",
        heroTitle: "Industrial XR Training · Digital Twin Infrastructure",
        heroSub:
          "Operational-grade training for shipbuilding and high-risk procedures. Cross-device collaboration, measurable logs, scalable rollout.",
        cta1: "Request Strategic Demo",
        cta2: "Explore Solutions",
        solutionsTitle: "Three lines. One clear priority.",
        solutionsSub:
          "Primary: XR training platform. Secondary: Digital Twin operations. Separate: Metadoor spatial communication.",
        whyTitle: "Why it matters now",
        whyBullets: [
          "Standardize training for multinational workforces.",
          "Repeat safety scenarios without on-site exposure.",
          "Deploy with logs, governance, and measurable outcomes.",
        ],
        metricsTitle: "Target metrics (public-safe)",
        logosTitle: "Partners / Proof (logos)",
        finalTitle: "Discuss deployment scope and roadmap.",
        finalCopy:
          "We propose a rollout plan based on devices, languages, data boundaries, and security constraints.",
        final1: "Request Strategic Consultation",
        final2: "Partnership",
      }
    : {
        heroKicker: "AI 기반 크로스 디바이스 XR 교육",
        heroTitle: "산업용 XR 교육 · 디지털 트윈 인프라",
        heroSub:
          "조선·고위험 공정 교육을 운영 등급 XR로 표준화합니다. 크로스 디바이스 협업, 측정 가능한 로그, 확장 가능한 도입 구조.",
        cta1: "전략 데모 요청",
        cta2: "솔루션 보기",
        solutionsTitle: "3개 라인업, 1개 메인 축",
        solutionsSub:
          "1순위(매출): XR 교육 플랫폼. 2순위: 디지털트윈 운영. 별도 라인: 메타도어 공간통신.",
        whyTitle: "지금 필요한 이유",
        whyBullets: [
          "다국적 인력 환경에서 교육 표준화가 필요.",
          "위험 시나리오는 현장 노출 없이 반복 훈련.",
          "도입/운영을 위해 로그·거버넌스가 필수.",
        ],
        metricsTitle: "목표 지표 (공개 표기: Target)",
        logosTitle: "파트너/근거(로고)",
        finalTitle: "지금 도입 전략을 논의하세요.",
        finalCopy:
          "디바이스, 언어, 데이터 경계, 보안 요구를 기준으로 도입 로드맵을 제안합니다.",
        final1: "전략 컨설팅 요청",
        final2: "파트너십 문의",
      };

  return (
    <>
      <Section id="hero">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-14 sm:px-10 sm:py-20">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{copy.heroKicker}</Badge>
                  <Badge>Shipbuilding</Badge>
                  <Badge>Safety</Badge>
                  <Badge>Digital Twin</Badge>
                </div>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  {copy.heroTitle}
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                  {copy.heroSub}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={`/${locale}/request-demo`} variant="primary">
                    {copy.cta1}
                  </Button>
                  <Button href="#solutions" variant="secondary">
                    {copy.cta2}
                  </Button>
                </div>

                <p className="mt-6 text-xs text-white/45">
                  {isEN
                    ? "Public site uses Target/Pilot wording. Detailed results shared under NDA."
                    : "공개 웹은 Target/Pilot 표기만 사용. 상세 성과는 NDA 후 공유."}
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl">
                  <div className="mt-1 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src="/assets/hero/hero-primary.webp"
                      alt="UD4M Hero"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="solutions">
        <Container>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold sm:text-3xl">{copy.solutionsTitle}</h2>
            <p className="max-w-3xl text-sm text-white/70">{copy.solutionsSub}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link href={`/${locale}/industries/shipbuilding`}>
              <Card>
                <div className="text-xs text-white/60">PRIMARY</div>
                <div className="mt-3 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image src="/assets/solutions/thumb-xr.webp" alt="XR Training" fill className="object-cover" />
                </div>
                <div className="mt-4 text-lg font-semibold">{isEN ? "XR Training Platform" : "XR 교육 플랫폼"}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">
                  {isEN
                    ? "AI-assisted, cross-device XR sessions for training and supervision. Logs and governance built-in."
                    : "AI 보조 + 크로스 디바이스 XR 세션으로 교육/감독 표준화. 로그/거버넌스 포함."}
                </div>
              </Card>
            </Link>

            <Link href={`/${locale}/industries/energy`}>
              <Card>
                <div className="text-xs text-white/60">SECONDARY</div>
                <div className="mt-3 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image src="/assets/solutions/thumb-dt.webp" alt="Digital Twin" fill className="object-cover" />
                </div>
                <div className="mt-4 text-lg font-semibold">{isEN ? "Digital Twin / Energy AR" : "디지털트윈 · 에너지 AR"}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">
                  {isEN
                    ? "Operational visualization workflows for infrastructure. Best positioned as an expansion layer."
                    : "인프라 운영 가시화 워크플로. 메인 축이 아니라 확장 레이어로 최적."}
                </div>
              </Card>
            </Link>

            <Link href={`/${locale}/metadoor`}>
              <Card>
                <div className="text-xs text-white/60">SEPARATE LINE</div>
                <div className="mt-3 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image src="/assets/solutions/thumb-metadoor.webp" alt="Metadoor" fill className="object-cover" />
                </div>
                <div className="mt-4 text-lg font-semibold">METADOOR</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">
                  {isEN
                    ? "Large-format spatial communication & interactive signage. Keep as a distinct product brand."
                    : "대형 디스플레이 기반 공간통신/사이니지. 별도 제품 라인으로 분리."}
                </div>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>

      <Section id="why">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">{copy.whyTitle}</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {copy.whyBullets.map((b: string) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white/80">{copy.metricsTitle}</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Stat label={isEN ? "Concurrent users" : "동시 접속"} value="Target 30" note={isEN ? "Load test scenario" : "부하 테스트 시나리오"} />
                <Stat label={isEN ? "Translation accuracy" : "번역 정확도"} value="Target BLEU 70" note={isEN ? "Evaluation plan" : "평가 계획 기반"} />
                <Stat label={isEN ? "Frame rate" : "프레임"} value="Target 70fps" note={isEN ? "Comfort goal" : "멀미 저감 목표"} />
                <Stat label={isEN ? "Safety scenarios" : "안전 시나리오"} value={isEN ? "Target 5" : "Target 5종"} note={isEN ? "Fire/Fall/Electric/..." : "화재/추락/감전/..."} />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="logos">
        <Container>
          <h2 className="text-2xl font-semibold sm:text-3xl">{copy.logosTitle}</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <LogoTile src="/assets/logos/etri.svg" alt="ETRI" />
            <LogoTile src="/assets/logos/kepco.svg" alt="KEPCO" />
            <LogoTile src="/assets/logos/pnu.svg" alt="PNU" />
            <LogoTile src="/assets/logos/kitech.svg" alt="KITECH" />
            <LogoTile src="/assets/logos/kosha.svg" alt="KOSHA" />
            <LogoTile src="/assets/logos/masga.svg" alt="MASGA" />
            <LogoTile src="/assets/logos/metadoor.svg" alt="METADOOR" />
            <LogoTile src="/assets/logos/ud4m.svg" alt="UD4M" />
          </div>
        </Container>
      </Section>

      <Section id="cta">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">{copy.finalTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">{copy.finalCopy}</p>

            <div className="mt-8 flex justify-center gap-3">
              <Button href={`/${locale}/request-demo`} variant="primary">
                {copy.final1}
              </Button>
              <Button href={`/${locale}/request-demo?type=partner`} variant="secondary">
                {copy.final2}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}