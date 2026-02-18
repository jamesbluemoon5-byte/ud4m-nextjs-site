import Image from "next/image";
import { Container, Section, Card, Button } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">에너지·인프라 디지털 트윈</h1>

        <div className="mt-6 relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image src="/assets/industries/energy/hero.webp" alt="에너지·인프라 디지털 트윈" fill className="object-cover" priority />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white/80">핵심 문제</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• 현장 가시성 부족</li>
<li>• 준공/현황 데이터 유지 비용</li>
<li>• 공유 3D 뷰 없는 원격 지원 한계</li>
            </ul>
          </Card>

          <Card>
            <div className="text-sm font-semibold text-white/80">도입 구성</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• 스캔→정합→모델 최적화</li>
<li>• 뷰어+레이어+운영 워크플로</li>
<li>• 운영 연계 로드맵</li>
            </ul>
          </Card>
        </div>

        <div className="mt-10">
          <Button href="/kr/request-demo?industry=energy" variant="primary">데모 요청</Button>
        </div>

        <p className="mt-6 text-xs text-white/45">공개 웹은 Target/Pilot 표기만 사용. 상세 근거는 NDA 후 제공.</p>
      </Container>
    </Section>
  );
}