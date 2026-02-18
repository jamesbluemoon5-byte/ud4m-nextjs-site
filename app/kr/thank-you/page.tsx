export default function ThankYou({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  const industry = searchParams.industry || "";
  const type = searchParams.type || "";
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-20">
      <h1 className="text-3xl font-semibold sm:text-4xl">접수 완료</h1>
      <p className="mt-4 text-sm text-white/70">이메일로 회신드립니다.</p>
      <p className="mt-4 text-sm text-white/70">다음: 도입 범위 1장(사이트/디바이스/언어/데이터·보안 제약)을 보내세요.</p>
      <p className="mt-4 text-xs text-white/50">{industry ? `industry=${industry}` : ""} {type ? `type=${type}` : ""}</p>
    </div>
  );
}
