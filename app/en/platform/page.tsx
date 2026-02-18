import { Container, Section, Card } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">Platform</h1>
        <p className="mt-3 text-sm text-white/70">Designed for deployment — not demos.</p>
        <Card>
          <div className="text-sm text-white/70">Fill with architecture diagram + modules.</div>
        </Card>
      </Container>
    </Section>
  );
}
