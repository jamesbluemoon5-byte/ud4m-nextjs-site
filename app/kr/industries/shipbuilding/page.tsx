import Image from "next/image";
import { Container, Section, Card, Button } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">조선·해양 XR 교육</h1>

        <div className="mt-6 relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image src="/assets/industries/shipbuilding/hero.webp" alt="조선·해양 XR 교육" fill className="object-cover" priority />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white/80">핵심 문제</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• 현장 교육 비용/리스크</li>
<li>• 표준화/언어 장벽</li>
<li>• 반복 숙련/감독 확장 어려움</li>
            </ul>
          </Card>

          <Card>
            <div className="text-sm font-semibold text-white/80">도입 구성</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• 크로스 디바이스 XR 세션</li>
<li>• 시나리오 모듈 + 로그</li>
<li>• 관리자 대시보드 + 거버넌스</li>
            </ul>
          </Card>
        </div>

        <div className="mt-10">
          <Button href="/kr/request-demo?industry=shipbuilding" variant="primary">데모 요청</Button>
        </div>

        <p className="mt-6 text-xs text-white/45">공개 웹은 Target/Pilot 표기만 사용. 상세 근거는 NDA 후 제공.</p>
      </Container>
    </Section>
  );
}