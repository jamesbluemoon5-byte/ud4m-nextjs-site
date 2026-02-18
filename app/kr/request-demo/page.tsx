import { Container, Section, Card } from "@/components/ui";

export default function RequestDemo({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const industry = typeof searchParams.industry === "string" ? searchParams.industry : "";
  const type = typeof searchParams.type === "string" ? searchParams.type : "";
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold sm:text-4xl">전략 데모 요청</h1>
        <p className="mt-3 text-sm text-white/70">스타터는 서버 콘솔 로그만. /api/lead에 CRM 연동.</p>

        <div className="mt-8 max-w-2xl">
          <Card>
            <form action="/api/lead" method="POST" className="grid gap-4">
              <input type="hidden" name="locale" value="kr" />
              <input type="hidden" name="industry" value={industry} />
              <input type="hidden" name="type" value={type} />

              <div className="grid gap-2">
                <label className="text-sm text-white/80">이름</label>
                <input name="name" required className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30" />
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-white/80">회사</label>
                <input name="company" required className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30" />
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-white/80">역할</label>
                <select name="role" required className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30">
                  <option value="">선택</option>
                  <option>CEO</option>
                  <option>CTO</option>
                  <option>교육/훈련 책임</option>
                  <option>PM</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-white/80">업무 이메일</label>
                <input name="email" type="email" required className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30" />
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-white/80">메시지</label>
                <textarea name="message" rows={6} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/30" />
              </div>

              <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink hover:opacity-90" type="submit">제출</button>

              <p className="text-xs text-white/50">공개 웹은 Pilot/Target/Validated 표기만 사용, 상세 수치는 NDA 후 공유.</p>
            </form>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
