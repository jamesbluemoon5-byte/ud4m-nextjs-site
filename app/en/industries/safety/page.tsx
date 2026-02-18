import Link from "next/link";
import { Container, Section, Card, Button } from "@/components/ui";

export default function IndustryDetail() {
  return (
    <Section>
      <Container>
        <div className="text-xs text-white/60">
          <Link href="/en/industries" className="hover:text-white">← Back to Industries</Link>
        </div>

        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Industrial Safety & Operational Training</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">Scenario-based safety training with measurable records and multi-device access.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white/80">Industry problems</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• Costly, risky on-site training</li>
              <li>• Standardization & language gaps</li>
              <li>• Repeatability and supervision needs</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white/80">Operational solution</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• Multi-device collaboration sessions</li>
              <li>• Scenario modules + logging</li>
              <li>• Deployment-ready architecture</li>
            </ul>
          </Card>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/en/request-demo?industry=safety" variant="primary">Request Demo</Button>
          <Button href="/en/platform" variant="secondary">Platform</Button>
        </div>
      </Container>
    </Section>
  );
}
