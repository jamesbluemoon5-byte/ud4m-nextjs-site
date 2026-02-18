import Image from "next/image";
import { Container, Section, Card, Button } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">IR</h1>

        <div className="mt-6 relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image src="/assets/ir/hero.webp" alt="IR" fill className="object-cover" priority />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white/80">핵심 포인트</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• 공개 IR: 예상/계획 표현만 사용</li>
<li>• 산업 XR 교육 → 버티컬 확장</li>
<li>• 디지털트윈 운영 레이어</li>
<li>• 파트너십/전시 중심 GTM</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white/80">면책</div>
            <p className="mt-3 text-sm text-white/70">본 페이지는 예상/전망을 포함할 수 있으며, 공식 공시를 우선 확인해야 합니다.</p>
          </Card>
        </div>

        <div className="mt-10">
          <Button href="/kr/request-demo?type=ir" variant="primary">임원 브리핑 요청</Button>
        </div>
      </Container>
    </Section>
  );
}