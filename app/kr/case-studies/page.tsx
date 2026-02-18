import { Container, Section, Card } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">사례</h1>
        <p className="mt-3 text-sm text-white/70">스타터 인덱스(CMS/MDX로 교체).</p>
        <Card>
          <div className="text-sm text-white/70">4개 케이스 추가: xr-training, digital-twin-ops, sejong-smartcity, metadoor(Other).</div>
        </Card>
      </Container>
    </Section>
  );
}
