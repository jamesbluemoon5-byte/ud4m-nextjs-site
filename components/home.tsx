import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/lib/content";
import { Button, Card, Container, Section } from "@/components/ui";

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

function LogoTile({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
      <div className="relative aspect-[7/2] w-full overflow-hidden rounded-xl">
        <Image src={src} alt={alt} fill className="object-contain p-2" />
      </div>
    </div>
  );
}

function EvidenceCard({
  tag,
  title,
  body,
  logo,
  badge,
}: {
  tag: string;
  title: string;
  body: string;
  logo: string;
  badge: string;
}) {
  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs text-white/60">{tag}</div>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-white/60">
          {badge}
        </span>
      </div>

      <div className="mt-4 flex items-start gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
          <Image src={logo} alt="" fill className="object-contain p-1.5" />
        </div>
        <div>
          <div className="text-base font-semibold">{title}</div>
          <div className="mt-2 text-sm leading-relaxed text-white/70">{body}</div>
        </div>
      </div>
    </Card>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const isEN = locale === "en";

  const copy = isEN
    ? {
        heroKicker: "AI-powered cross-device XR training",
        heroTitle: "Industrial XR Training · Digital Twin Infrastructure",
        heroSub:
          "Operational-grade training for shipbuilding and high-risk procedures. Cross-device collaboration, measurable logs, and scalable rollout.",
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
        proofTitle: "Credibility wall (public-safe)",
        proofSub:
          "We publish only public-safe statements. Client-identifiable details and performance screenshots are shared under NDA.",
        nda: "Request NDA One-pager",
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
        proofTitle: "신뢰 근거 (공개 범위)",
        proofSub:
          "공개 가능한 범위만 표기합니다. 고객 식별 정보/성능 스크린샷은 NDA 후 공유합니다.",
        nda: "NDA 원페이저 요청",
        finalTitle: "지금 도입 전략을 논의하세요.",
        finalCopy:
          "디바이스, 언어, 데이터 경계, 보안 요구를 기준으로 도입 로드맵을 제안합니다.",
        final1: "전략 컨설팅 요청",
        final2: "파트너십 문의",
      };

  return (
    <>
      {/* HERO */}
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
                  <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                    <div className="text-xs font-semibold text-white/80">
                      UD4M Shipyard XR Collaboration
                    </div>
                    <div className="text-xs text-white/50">
                      {isEN ? "Hero visual" : "히어로 비주얼"}
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
                    {isEN
                      ? "Shipbuilding XR collaboration session (visual)."
                      : "조선 XR 협업 세션(비주얼)."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SOLUTIONS (A) */}
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
                  <Image src="/solutions/thumb-xr.png" alt="XR Training" fill className="object-cover" />
                </div>
                <div className="mt-4 text-lg font-semibold">
                  {isEN ? "XR Training Platform" : "XR 교육 플랫폼"}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">
                  {isEN
                    ? "AI-assisted, cross-device XR sessions for training and supervision. Logs and governance built-in."
                    : "AI 보조 + 크로스 디바이스 XR 세션으로 교육/감독 표준화. 로그/거버넌스 포함."}
                </div>
                <div className="mt-4 text-sm text-white/80">{isEN ? "View →" : "보기 →"}</div>
              </Card>
            </Link>

            <Link href={`/${locale}/industries/energy`}>
              <Card>
                <div className="text-xs text-white/60">SECONDARY</div>
                <div className="mt-3 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image src="/solutions/thumb-dt.png" alt="Digital Twin" fill className="object-cover" />
                </div>
                <div className="mt-4 text-lg font-semibold">
                  {isEN ? "Digital Twin / Energy AR" : "디지털트윈 · 에너지 AR"}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">
                  {isEN
                    ? "Operational visualization workflows for infrastructure. Best positioned as an expansion layer."
                    : "인프라 운영 가시화 워크플로. 메인 축이 아니라 확장 레이어로 최적."}
                </div>
                <div className="mt-4 text-sm text-white/80">{isEN ? "View →" : "보기 →"}</div>
              </Card>
            </Link>

            <Link href={`/${locale}/request-demo?type=metadoor`}>
              <Card>
                <div className="text-xs text-white/60">SEPARATE LINE</div>
                <div className="mt-3 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image src="/solutions/thumb-metadoor.png" alt="Metadoor" fill className="object-cover" />
                </div>
                <div className="mt-4 text-lg font-semibold">METADOOR</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">
                  {isEN
                    ? "Large-format spatial communication & interactive signage. Keep as a distinct product brand."
                    : "대형 디스플레이 기반 공간통신/사이니지. 별도 제품 라인으로 분리."}
                </div>
                <div className="mt-4 text-sm text-white/80">{isEN ? "Inquire →" : "문의 →"}</div>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>

      {/* WHY + METRICS (B) */}
      <Section id="why">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">{copy.whyTitle}</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {copy.whyBullets.map((b) => (
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
              <p className="mt-4 text-xs text-white/45">
                {isEN
                  ? "Public pages use Target/Pilot wording only."
                  : "공개 페이지는 Target/Pilot 표기만 사용합니다."}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* LOGO CLOUD (visual proof) */}
      <Section id="logos">
        <Container>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            {isEN ? "Partners / Proof (logos)" : "파트너/근거(로고)"}
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <LogoTile src="/brands/logo-etri.svg" alt="ETRI" />
            <LogoTile src="/brands/logo-kepco.svg" alt="KEPCO" />
            <LogoTile src="/brands/logo-pnu.svg" alt="PNU" />
            <LogoTile src="/brands/logo-kitech.svg" alt="KITECH" />
            <LogoTile src="/brands/logo-kosha.svg" alt="KOSHA" />
            <LogoTile src="/brands/logo-masga.svg" alt="MASGA" />
            <LogoTile src="/brands/logo-metadoor.svg" alt="METADOOR" />
            <LogoTile src="/brands/logo-ud4m.svg" alt="UD4M" />
          </div>

          <p className="mt-5 text-xs text-white/45">
            {isEN
              ? "These are public-safe placeholders. Replace with official brand assets when available."
              : "현재는 공개용 플레이스홀더 로고입니다. 공식 로고 파일 확보 시 교체하세요."}
          </p>
        </Container>
      </Section>

      {/* PROOF (C) */}
      <Section id="proof">
        <Container>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold sm:text-3xl">{copy.proofTitle}</h2>
            <p className="max-w-3xl text-sm text-white/70">{copy.proofSub}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <EvidenceCard
              tag="TECH TRANSFER"
              badge="NDA details"
              logo="/brands/logo-etri.svg"
              title={isEN ? "ETRI cross-device XR collaboration core" : "ETRI 크로스 디바이스 XR 협업 코어"}
              body={isEN ? "Multi-device sessions (PC/Mobile/AR/MR) foundation transferred/applied." : "PC/모바일/AR/MR 멀티 디바이스 세션 기반 기술이전/적용."}
            />
            <EvidenceCard
              tag="SHIPBUILDING XR"
              badge="Target/Pilot"
              logo="/brands/logo-pnu.svg"
              title={isEN ? "Shipbuilding XR training programs" : "조선 XR 교육/훈련 프로그램"}
              body={isEN ? "Training + supervision workflows with measurable logs and multi-language roadmap." : "교육/감독 워크플로 + 로그 기반 기록화 + 다국어 로드맵."}
            />
            <EvidenceCard
              tag="DIGITAL TWIN OPS"
              badge="NDA details"
              logo="/brands/logo-kepco.svg"
              title={isEN ? "Scan → model → ops pipeline" : "스캔→정합→모델→운영 파이프라인"}
              body={isEN ? "Operational visualization workflows for infrastructure assets and field contexts." : "인프라 자산/현장 맥락을 운영 수준으로 가시화하는 워크플로 경험."}
            />
            <EvidenceCard
              tag="SAFETY"
              badge="Strategy"
              logo="/brands/logo-kosha.svg"
              title={isEN ? "Safety scenario validation path" : "안전 시나리오 검증 경로"}
              body={isEN ? "Scenario library + governance approach for audit-ready training records." : "시나리오 라이브러리 + 감사 대응 가능한 기록/거버넌스."}
            />
            <EvidenceCard
              tag="IP PORTFOLIO"
              badge="Public-safe"
              logo="/brands/logo-ud4m.svg"
              title={isEN ? "Patents in AR interaction & collaboration" : "AR 상호작용/협업 특허"}
              body={isEN ? "Protected UI/interaction stack; supports credibility and risk control." : "UI/인터랙션 스택 보호로 도입 신뢰와 리스크 컨트롤 확보."}
            />
            <EvidenceCard
              tag="GLOBAL RISK CONTROL"
              badge="Process"
              logo="/brands/logo-masga.svg"
              title={isEN ? "FTO & design-around process" : "FTO/회피설계 프로세스"}
              body={isEN ? "OS Matrix analysis + invalidation/design-around to reduce global litigation risk." : "OS Matrix 분석 + 무효/회피설계로 글로벌 소송 리스크 저감."}
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`/${locale}/request-demo?type=nda`} variant="primary">
              {copy.nda}
            </Button>
            <Button href={`/${locale}/request-demo`} variant="secondary">
              {isEN ? "Request Demo" : "데모 요청"}
            </Button>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
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

            <p className="mt-6 text-xs text-white/45">
              {isEN
                ? "For client-identifiable proof and performance screenshots, request NDA materials."
                : "고객 식별/성능 스크린샷 등은 NDA 자료로 요청하세요."}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
