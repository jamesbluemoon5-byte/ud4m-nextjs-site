import { Container, Section, Card } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">IR</h1>
        <p className="mt-3 text-sm text-white/70">Use projected/target wording only on public pages.</p>
        <Card>
          <div className="text-sm text-white/70">Add market positioning, business model, roadmap, risk controls.</div>
        </Card>
      </Container>
    </Section>
  );
}
