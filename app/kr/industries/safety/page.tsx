import Image from "next/image";
import { Container, Section, Card, Button } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">산업안전 훈련</h1>

        <div className="mt-6 relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image src="/assets/industries/safety/hero.webp" alt="산업안전 훈련" fill className="object-cover" priority />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white/80">핵심 문제</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• 위험 노출 없는 반복 훈련</li>
<li>• 감사 대응 증빙 기록</li>
<li>• 언어 장벽으로 준수율 저하</li>
            </ul>
          </Card>

          <Card>
            <div className="text-sm font-semibold text-white/80">도입 구성</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• 시나리오 모듈(화재/추락/감전/...)</li>
<li>• 로그 + 완료 대시보드</li>
<li>• 거버넌스 템플릿</li>
            </ul>
          </Card>
        </div>

        <div className="mt-10">
          <Button href="/kr/request-demo?industry=safety" variant="primary">데모 요청</Button>
        </div>

        <p className="mt-6 text-xs text-white/45">공개 웹은 Target/Pilot 표기만 사용. 상세 근거는 NDA 후 제공.</p>
      </Container>
    </Section>
  );
}