import Image from "next/image";
import { Container, Section, Card, Button } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">Industrial Safety Training</h1>

        <div className="mt-6 relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image src="/assets/industries/safety/hero.webp" alt="Industrial Safety Training" fill className="object-cover" priority />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white/80">Key problems</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• Repeatable training without exposure</li>
<li>• Audit-ready evidence records</li>
<li>• Language gaps reduce compliance</li>
            </ul>
          </Card>

          <Card>
            <div className="text-sm font-semibold text-white/80">What we deploy</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• Scenario modules (fire/fall/electric/...)</li>
<li>• Logs + completion dashboards</li>
<li>• Governance templates</li>
            </ul>
          </Card>
        </div>

        <div className="mt-10">
          <Button href="/en/request-demo?industry=safety" variant="primary">Request Demo</Button>
        </div>

        <p className="mt-6 text-xs text-white/45">Public pages use Target/Pilot wording. Detailed proof is shared under NDA.</p>
      </Container>
    </Section>
  );
}