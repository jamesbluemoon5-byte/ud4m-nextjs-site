import { Container, Section, Card } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">IP & Technology</h1>
        <p className="mt-3 text-sm text-white/70">Protected technology. Credible delivery.</p>
        <Card>
          <div className="text-sm text-white/70">Add patent categories + tech transfer + FTO/design-around statement.</div>
        </Card>
      </Container>
    </Section>
  );
}
