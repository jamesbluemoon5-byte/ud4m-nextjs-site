import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const payload = Object.fromEntries(formData.entries());

  const message = String(payload.message ?? "");
  const type = String(payload.type ?? "");
  if (!type.includes("partner") && message.trim().length < 10) {
    return NextResponse.json({ ok: false, error: "Message too short." }, { status: 400 });
  }

  const url = process.env.GOOGLE_SHEETS_WEBAPP_URL;
  if (!url) {
    return NextResponse.json({ ok: false, error: "Missing GOOGLE_SHEETS_WEBAPP_URL" }, { status: 500 });
  }

  // referrer/userAgent/ip
  const userAgent = req.headers.get("user-agent") ?? "";
  const referrer = req.headers.get("referer") ?? "";
  const ip =
    (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "";

  const body = {
    ...payload,
    userAgent,
    referrer,
    ip,
  };

  // Send to Google Apps Script
  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!r.ok) {
    const txt = await r.text();
    return NextResponse.json({ ok: false, error: `Sheets webhook failed: ${txt}` }, { status: 502 });
  }

  const locale = payload.locale === "kr" ? "kr" : "en";
  const redirect = new URL(`/${locale}/thank-you`, req.url);
  redirect.searchParams.set("industry", String(payload.industry ?? ""));
  redirect.searchParams.set("type", String(payload.type ?? ""));
  return NextResponse.redirect(redirect.toString(), 303);
}
