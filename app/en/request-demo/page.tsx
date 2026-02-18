import { Container, Section, Card } from "@/components/ui";

export default function RequestDemo({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const industry = typeof searchParams.industry === "string" ? searchParams.industry : "";
  const type = typeof searchParams.type === "string" ? searchParams.type : "";
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">Request Strategic Demo</h1>
        <p className="mt-3 text-sm text-white/70">Starter logs to server console only. Connect CRM in /api/lead.</p>

        <div className="mt-8 max-w-2xl">
          <Card>
            <form action="/api/lead" method="POST" className="grid gap-4">
              <input type="hidden" name="locale" value="en" />
              <input type="hidden" name="industry" value={industry} />
              <input type="hidden" name="type" value={type} />

              <div className="grid gap-2">
                <label className="text-sm text-white/80">Name</label>
                <input name="name" required className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30" />
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-white/80">Company</label>
                <input name="company" required className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30" />
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-white/80">Role</label>
                <select name="role" required className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30">
                  <option value="">Select</option>
                  <option>CEO</option>
                  <option>CTO</option>
                  <option>Head of Training</option>
                  <option>PM</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-white/80">Work Email</label>
                <input name="email" type="email" required className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30" />
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-white/80">Message</label>
                <textarea name="message" rows={6} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30" />
              </div>

              <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink hover:opacity-90" type="submit">Submit</button>

              <p className="text-xs text-white/50">Public site uses Pilot/Target/Validated wording; detailed numbers shared under NDA.</p>
            </form>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
