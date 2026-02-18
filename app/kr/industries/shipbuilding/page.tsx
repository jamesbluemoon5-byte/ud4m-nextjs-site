import Link from "next/link";
import { Container, Section, Card, Button } from "@/components/ui";

export default function IndustryDetail() {
  return (
    <Section>
      <Container>
        <div className="text-xs text-white/60">
          <Link href="/kr/industries" className="hover:text-white">← 산업 목록</Link>
        </div>

        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">조선·해양 XR</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">복잡 공정·다국적 인력 환경을 위한 운영 등급 XR 교육/협업.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white/80">산업 문제</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• 현장 교육 비용/리스크</li>
              <li>• 표준화/언어 장벽</li>
              <li>• 반복 숙련/감독 필요</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white/80">운영 솔루션</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• 멀티 디바이스 협업 세션</li>
              <li>• 시나리오 모듈 + 로그</li>
              <li>• 도입형 아키텍처</li>
            </ul>
          </Card>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/kr/request-demo?industry=shipbuilding" variant="primary">데모 요청</Button>
          <Button href="/kr/platform" variant="secondary">플랫폼</Button>
        </div>
      </Container>
    </Section>
  );
}
