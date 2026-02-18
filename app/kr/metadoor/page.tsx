import Image from "next/image";
import { Container, Section, Card, Button } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">메타도어(METADOOR)</h1>

        <div className="mt-6 relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image src="/assets/metadoor/hero.webp" alt="메타도어(METADOOR)" fill className="object-cover" priority />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white/80">핵심 포인트</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• 대형 디스플레이 기반 공간통신</li>
<li>• 센서 기반 사용자 인식/인터랙션</li>
<li>• XR 콘텐츠 레이어</li>
<li>• 공공/기업 공간 설치</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white/80">공개 표기</div>
            <p className="mt-3 text-sm text-white/70">설치처 식별/상업 조건은 NDA 후 공유합니다.</p>
          </Card>
        </div>

        <div className="mt-10">
          <Button href="/kr/request-demo?type=metadoor" variant="primary">메타도어 문의</Button>
        </div>
      </Container>
    </Section>
  );
}