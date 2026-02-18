import Image from "next/image";
import { Container, Section, Card, Button } from "@/components/ui";

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">IR</h1>

        <div className="mt-6 relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image src="/assets/ir/hero.webp" alt="IR" fill className="object-cover" priority />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white/80">Key points</div>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• Public IR uses projected/target wording only</li>
<li>• XR training as primary wedge</li>
<li>• Digital twin ops as expansion layer</li>
<li>• GTM via partnerships and exhibitions</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white/80">Disclaimer</div>
            <p className="mt-3 text-sm text-white/70">This page contains forward-looking statements. Verify via official disclosures.</p>
          </Card>
        </div>

        <div className="mt-10">
          <Button href="/en/request-demo?type=ir" variant="primary">Request executive briefing</Button>
        </div>
      </Container>
    </Section>
  );
}