import Image from "next/image";
import { Container, Section, Card, Button } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">IP/기술</h1>

        <div className="mt-6 relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image src="/assets/ip/hero.webp" alt="IP/기술" fill className="object-cover" priority />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white/80">핵심 포인트</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• AR 상호작용/협업 특허 포트폴리오</li>
<li>• 기술이전 기반(협업/인프라)</li>
<li>• FTO/회피설계 프로세스</li>
<li>• 글로벌 확장 리스크 컨트롤</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white/80">공개 표기</div>
            <p className="mt-3 text-sm text-white/70">공개 페이지는 Target/Pilot 표기만 사용하며, 고객 식별 근거는 NDA 후 공유합니다.</p>
          </Card>
        </div>

        <div className="mt-10">
          <Button href="/kr/request-demo?type=nda" variant="primary">NDA 원페이저 요청</Button>
        </div>
      </Container>
    </Section>
  );
}