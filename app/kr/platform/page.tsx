import { Container, Section, Card } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">플랫폼</h1>
        <p className="mt-3 text-sm text-white/70">데모가 아니라 운영 기준.</p>
        <Card>
          <div className="text-sm text-white/70">아키텍처 도식 + 모듈 설명으로 채우세요.</div>
        </Card>
      </Container>
    </Section>
  );
}
