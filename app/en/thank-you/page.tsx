export default function ThankYou({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  const industry = searchParams.industry || "";
  const type = searchParams.type || "";
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-20">
      <h1 className="text-3xl font-semibold sm:text-4xl">Thanks — we received your request.</h1>
      <p className="mt-4 text-sm text-white/70">We’ll follow up by email.</p>
      <p className="mt-4 text-sm text-white/70">Next: send a 1-page scope (sites/devices/languages/data-security constraints).</p>
      <p className="mt-4 text-xs text-white/50">{industry ? `industry=${industry}` : ""} {type ? `type=${type}` : ""}</p>
    </div>
  );
}
