import { Container, Section, Card } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">IP/기술</h1>
        <p className="mt-3 text-sm text-white/70">특허·기술이전·FTO로 신뢰 고정.</p>
        <Card>
          <div className="text-sm text-white/70">특허 카테고리 + 기술이전 + FTO/회피설계 문장 추가.</div>
        </Card>
      </Container>
    </Section>
  );
}
