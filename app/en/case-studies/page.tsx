import { Container, Section, Card } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">Case Studies</h1>
        <p className="mt-3 text-sm text-white/70">Starter index (replace with CMS/MDX).</p>
        <Card>
          <div className="text-sm text-white/70">Add 4 cases: xr-training, digital-twin-ops, sejong-smartcity, metadoor (Other).</div>
        </Card>
      </Container>
    </Section>
  );
}
