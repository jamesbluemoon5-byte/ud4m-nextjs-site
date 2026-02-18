import Image from "next/image";
import { Container, Section, Card, Button } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">플랫폼</h1>

        <div className="mt-6 relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image src="/assets/platform/hero.webp" alt="플랫폼" fill className="object-cover" priority />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white/80">핵심 포인트</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• 크로스 디바이스 XR 협업 엔진</li>
<li>• 시나리오/로그/대시보드</li>
<li>• 옵션: AI 번역/튜터/분석</li>
<li>• 배포: 클라우드/온프렘 선택</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white/80">공개 표기</div>
            <p className="mt-3 text-sm text-white/70">공개 페이지는 Target/Pilot 표기만 사용하며, 고객 식별 근거는 NDA 후 공유합니다.</p>
          </Card>
        </div>

        
      </Container>
    </Section>
  );
}