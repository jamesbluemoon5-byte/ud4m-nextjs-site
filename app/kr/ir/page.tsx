import { Container, Section, Card } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">IR</h1>
        <p className="mt-3 text-sm text-white/70">공개 페이지는 예상/목표 표현만.</p>
        <Card>
          <div className="text-sm text-white/70">시장/수익모델/로드맵/리스크 컨트롤로 구성.</div>
        </Card>
      </Container>
    </Section>
  );
}
