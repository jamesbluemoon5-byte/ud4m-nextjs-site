import Image from "next/image";
import { Container, Section, Card, Button } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">METADOOR</h1>

        <div className="mt-6 relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image src="/assets/metadoor/hero.webp" alt="METADOOR" fill className="object-cover" priority />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white/80">Key points</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• Large-format spatial communication</li>
<li>• Sensor-based presence & interaction</li>
<li>• XR content layer</li>
<li>• Deployment to public/enterprise spaces</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white/80">Public-safe note</div>
            <p className="mt-3 text-sm text-white/70">Client-identifiable deployments and commercial terms are shared under NDA.</p>
          </Card>
        </div>

        <div className="mt-10">
          <Button href="/en/request-demo?type=metadoor" variant="primary">Inquire METADOOR</Button>
        </div>
      </Container>
    </Section>
  );
}