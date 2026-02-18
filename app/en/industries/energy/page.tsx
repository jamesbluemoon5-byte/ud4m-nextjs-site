import Image from "next/image";
import { Container, Section, Card, Button } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">Energy / Infrastructure Digital Twin</h1>

        <div className="mt-6 relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image src="/assets/industries/energy/hero.webp" alt="Energy / Infrastructure Digital Twin" fill className="object-cover" priority />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white/80">Key problems</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• Inconsistent field visibility</li>
<li>• Costly as-built data maintenance</li>
<li>• Remote support lacks shared 3D view</li>
            </ul>
          </Card>

          <Card>
            <div className="text-sm font-semibold text-white/80">What we deploy</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• Scan → alignment → model optimization</li>
<li>• Viewer + layers + ops workflows</li>
<li>• Roadmap for ops integration</li>
            </ul>
          </Card>
        </div>

        <div className="mt-10">
          <Button href="/en/request-demo?industry=energy" variant="primary">Request Demo</Button>
        </div>

        <p className="mt-6 text-xs text-white/45">Public pages use Target/Pilot wording. Detailed proof is shared under NDA.</p>
      </Container>
    </Section>
  );
}