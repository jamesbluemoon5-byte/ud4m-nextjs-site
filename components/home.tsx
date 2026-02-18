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
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      {note && <div className="mt-2 text-xs text-white/50">{note}</div>}
    </div>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t =
    locale === "en"
      ? {
          heroTitle: "Industrial XR Training & Digital Twin Infrastructure",
          heroSub:
            "Deploy operational-grade XR training for shipbuilding and high-risk operations. Cross-device collaboration, measurable logs, scalable rollout.",
          primary: "Request Strategic Demo",
          secondary: "Explore Solutions",
        }
      : {
          heroTitle: "산업용 XR 교육 · 디지털 트윈 인프라",
          heroSub:
            "조선·고위험 공정 교육을 운영 등급 XR로 표준화합니다. 크로스 디바이스 협업, 측정 가능한 로그, 확장 가능한 도입 구조.",
          primary: "전략 데모 요청",
          secondary: "솔루션 보기",
        };

  return (
    <>
      {/* ================= HERO ================= */}
      <Section id="hero">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge>AI 기반 XR 교육</Badge>
                  <Badge>Shipbuilding</Badge>
                  <Badge>Safety</Badge>
                  <Badge>Digital Twin</Badge>
                </div>

                <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
                  {t.heroTitle}
                </h1>

                <p className="mt-5 max-w-xl text-base text-white/75">
                  {t.heroSub}
                </p>

                <div className="mt-8 flex gap-3">
                  <Button href={`/${locale}/request-demo`} variant="primary">
                    {t.primary}
                  </Button>
                  <Button href="#solutions" variant="secondary">
                    {t.secondary}
                  </Button>
                </div>

                <p className="mt-6 text-xs text-white/45">
                  공개 웹은 Target/Pilot 표기만 사용. 상세 성과/고객 식별 정보는 NDA 후 제공.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 p-4">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/hero-shipyard.png"
                    alt="UD4M Shipyard XR Collaboration"
                    fill
                    priority
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ================= SOLUTIONS ================= */}
      <Section id="solutions">
        <Container>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            3개 라인업, 1개 메인 축
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-xs text-white/60">PRIMARY</div>
              <div className="mt-2 text-lg font-semibold">XR 교육 플랫폼</div>
              <div className="mt-2 text-sm text-white/70">
                AI 기반 크로스 디바이스 XR 세션으로 고위험 공정 교육을 표준화.
                다국어 지원, 반복 훈련, 세션 로그 기반 운영.
              </div>
            </Card>

            <Card>
              <div className="text-xs text-white/60">SECONDARY</div>
              <div className="mt-2 text-lg font-semibold">
                디지털트윈 · 에너지 AR
              </div>
              <div className="mt-2 text-sm text-white/70">
                스캔→모델→운영으로 이어지는 디지털트윈 인프라 확장 축.
              </div>
            </Card>

            <Card>
              <div className="text-xs text-white/60">SEPARATE LINE</div>
              <div className="mt-2 text-lg font-semibold">
                METADOOR 공간통신
              </div>
              <div className="mt-2 text-sm text-white/70">
                대형 디스플레이 기반 공간 연결 솔루션.
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ================= METRICS ================= */}
      <Section id="metrics">
        <Container>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            목표 지표 (Target 기준)
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Stat
              label="동시 접속"
              value="Target 30"
              note="Load test scenario"
            />
            <Stat
              label="번역 정확도"
              value="Target BLEU 70"
              note="평가 계획 기반"
            />
            <Stat
              label="프레임"
              value="Target 70fps"
              note="멀미 저감 목표"
            />
            <Stat
              label="안전 시나리오"
              value="Target 5종"
              note="화재/추락/감전 등"
            />
          </div>
        </Container>
      </Section>

      {/* ================= PROOF ================= */}
      <Section id="proof">
        <Container>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            신뢰 근거
          </h2>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>ETRI XR 협업 기술 기반</Badge>
            <Badge>AR 상호작용/협업 특허 보유</Badge>
            <Badge>조선 XR 교육 실증 프로젝트</Badge>
            <Badge>디지털트윈 스캔→운영 경험</Badge>
          </div>

          <p className="mt-6 text-xs text-white/45">
            상세 레퍼런스 및 고객 식별 정보는 NDA 체결 후 공유.
          </p>
        </Container>
      </Section>

      {/* ================= FINAL CTA ================= */}
      <Section id="cta">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              지금 도입 전략을 논의하세요.
            </h2>
            <p className="mt-4 text-sm text-white/70">
              범위, 디바이스, 언어, 보안 요구를 기준으로 도입 로드맵을 제안합니다.
            </p>

            <div className="mt-8 flex justify-center gap-3">
              <Button href={`/${locale}/request-demo`} variant="primary">
                전략 데모 요청
              </Button>
              <Button
                href={`/${locale}/request-demo?type=partner`}
                variant="secondary"
              >
                파트너십 문의
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
