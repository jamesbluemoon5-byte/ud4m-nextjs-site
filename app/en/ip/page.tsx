import Image from "next/image";
import { Container, Section, Card, Button } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">IP & Technology</h1>

        <div className="mt-6 relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image src="/assets/ip/hero.webp" alt="IP & Technology" fill className="object-cover" priority />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white/80">Key points</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• Patents in AR interaction & collaboration</li>
<li>• Transferred/applied collaboration tech base</li>
<li>• FTO & design‑around process</li>
<li>• Risk control for global expansion</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white/80">Public-safe note</div>
            <p className="mt-3 text-sm text-white/70">Public pages use Target/Pilot wording; detailed client proof is shared under NDA.</p>
          </Card>
        </div>

        <div className="mt-10">
          <Button href="/en/request-demo?type=nda" variant="primary">Request NDA One-pager</Button>
        </div>
      </Container>
    </Section>
  );
}