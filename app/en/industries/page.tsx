import Link from "next/link";
import { HOME } from "@/lib/content";
import { Container, Section, Card } from "@/components/ui";

export default function Industries() {
  const c = HOME["en"];
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">Industries</h1>
        <p className="mt-3 text-sm text-white/70">{c.industriesTitle}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {c.industries.map((card) => (
            <Link key={card.title} href={card.href}>
              <Card>
                <div className="text-lg font-semibold">{card.title}</div>
                <div className="mt-2 text-sm text-white/70">{card.desc}</div>
                <div className="mt-4 text-sm text-white/80">View →</div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
