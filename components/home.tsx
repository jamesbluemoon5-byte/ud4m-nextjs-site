import Link from "next/link";
import Image from "next/image";
import { Button, Card, Container, Section } from "@/components/ui";

export type Locale = "en" | "kr";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

function Stat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
      {note ? <div className="mt-2 text-xs text-white/50">{note}</div> : null}
    </div>
  );
}

function LogoTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
      <div className="relative aspect-[7/2] w-full overflow-hidden rounded-xl">
        <Image src={src} alt={alt} fill className="object-contain p-2" />
      </div>
    </div>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const isEN = locale === "en";

  const copy = isEN
    ? {
        heroKicker: "AI-powered cross-device XR training",
        heroTitle: "Industrial XR Training 쨌 Digital Twin Infrastructure",
        heroSub:
          "Operational-grade training for shipbuilding and high-risk procedures. Cross-device collaboration, measurable logs, scalable rollout.",
        cta1: "Request Strategic Demo",
        cta2: "Explore Solutions",
        solutionsTitle: "Three lines. One clear priority.",
        solutionsSub:
          "Primary: XR training platform. Secondary: Digital Twin operations. Separate: Metadoor spatial communication.",
        whyTitle: "Why it matters now",
        whyBullets: [
          "Standardize training for multinational workforces.",
          "Repeat safety scenarios without on-site exposure.",
          "Deploy with logs, governance, and measurable outcomes.",
        ],
        metricsTitle: "Target metrics (public-safe)",
        logosTitle: "Partners / Proof (logos)",
        finalTitle: "Discuss deployment scope and roadmap.",
        finalCopy:
          "We propose a rollout plan based on devices, languages, data boundaries, and security constraints.",
        final1: "Request Strategic Consultation",
        final2: "Partnership",
      }
    : {
        heroKicker: "AI 湲곕컲 ?щ줈???붾컮?댁뒪 XR 援먯쑁",
        heroTitle: "?곗뾽??XR 援먯쑁 쨌 ?붿????몄쐢 ?명봽??,
        heroSub:
          "議곗꽑쨌怨좎쐞??怨듭젙 援먯쑁???댁쁺 ?깃툒 XR濡??쒖??뷀빀?덈떎. ?щ줈???붾컮?댁뒪 ?묒뾽, 痢≪젙 媛?ν븳 濡쒓렇, ?뺤옣 媛?ν븳 ?꾩엯 援ъ“.",
        cta1: "?꾨왂 ?곕え ?붿껌",
        cta2: "?붾（??蹂닿린",
        solutionsTitle: "3媛??쇱씤?? 1媛?硫붿씤 異?,
        solutionsSub:
          "1?쒖쐞(留ㅼ텧): XR 援먯쑁 ?뚮옯?? 2?쒖쐞: ?붿??명듃???댁쁺. 蹂꾨룄 ?쇱씤: 硫뷀??꾩뼱 怨듦컙?듭떊.",
        whyTitle: "吏湲??꾩슂???댁쑀",
        whyBullets: [
          "?ㅺ뎅???몃젰 ?섍꼍?먯꽌 援먯쑁 ?쒖??붽? ?꾩슂.",
          "?꾪뿕 ?쒕굹由ъ삤???꾩옣 ?몄텧 ?놁씠 諛섎났 ?덈젴.",
          "?꾩엯/?댁쁺???꾪빐 濡쒓렇쨌嫄곕쾭?뚯뒪媛 ?꾩닔.",
        ],
        metricsTitle: "紐⑺몴 吏??(怨듦컻 ?쒓린: Target)",
        logosTitle: "?뚰듃??洹쇨굅(濡쒓퀬)",
        finalTitle: "吏湲??꾩엯 ?꾨왂???쇱쓽?섏꽭??",
        finalCopy:
          "?붾컮?댁뒪, ?몄뼱, ?곗씠??寃쎄퀎, 蹂댁븞 ?붽뎄瑜?湲곗??쇰줈 ?꾩엯 濡쒕뱶留듭쓣 ?쒖븞?⑸땲??",
        final1: "?꾨왂 而⑥꽕???붿껌",
        final2: "?뚰듃?덉떗 臾몄쓽",
      };

  return (
    <>
      <Section id="hero">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-14 sm:px-10 sm:py-20">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{copy.heroKicker}</Badge>
                  <Badge>Shipbuilding</Badge>
                  <Badge>Safety</Badge>
                  <Badge>Digital Twin</Badge>
                </div>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  {copy.heroTitle}
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                  {copy.heroSub}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={`/${locale}/request-demo`} variant="primary">
                    {copy.cta1}
                  </Button>
                  <Button href="#solutions" variant="secondary">
                    {copy.cta2}
                  </Button>
                </div>

                <p className="mt-6 text-xs text-white/45">
                  {isEN
                    ? "Public site uses Target/Pilot wording. Detailed results shared under NDA."
                    : "怨듦컻 ?뱀? Target/Pilot ?쒓린留??ъ슜. ?곸꽭 ?깃낵??NDA ??怨듭쑀."}
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl">
                  <div className="mt-1 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src="/assets/hero/hero-primary.webp"
                      alt="UD4M Hero"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="solutions">
        <Container>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold sm:text-3xl">{copy.solutionsTitle}</h2>
            <p className="max-w-3xl text-sm text-white/70">{copy.solutionsSub}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link href={`/${locale}/industries/shipbuilding`}>
              <Card>
                <div className="text-xs text-white/60">PRIMARY</div>
                <div className="mt-3 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image src="/assets/solutions/thumb-xr.webp" alt="XR Training" fill className="object-cover" />
                </div>
                <div className="mt-4 text-lg font-semibold">{isEN ? "XR Training Platform" : "XR 援먯쑁 ?뚮옯??}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">
                  {isEN
                    ? "AI-assisted, cross-device XR sessions for training and supervision. Logs and governance built-in."
                    : "AI 蹂댁“ + ?щ줈???붾컮?댁뒪 XR ?몄뀡?쇰줈 援먯쑁/媛먮룆 ?쒖??? 濡쒓렇/嫄곕쾭?뚯뒪 ?ы븿."}
                </div>
              </Card>
            </Link>

            <Link href={`/${locale}/industries/energy`}>
              <Card>
                <div className="text-xs text-white/60">SECONDARY</div>
                <div className="mt-3 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image src="/assets/solutions/thumb-dt.webp" alt="Digital Twin" fill className="object-cover" />
                </div>
                <div className="mt-4 text-lg font-semibold">{isEN ? "Digital Twin / Energy AR" : "?붿??명듃??쨌 ?먮꼫吏 AR"}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">
                  {isEN
                    ? "Operational visualization workflows for infrastructure. Best positioned as an expansion layer."
                    : "?명봽???댁쁺 媛?쒗솕 ?뚰겕?뚮줈. 硫붿씤 異뺤씠 ?꾨땲???뺤옣 ?덉씠?대줈 理쒖쟻."}
                </div>
              </Card>
            </Link>

            <Link href={`/${locale}/metadoor`}>
              <Card>
                <div className="text-xs text-white/60">SEPARATE LINE</div>
                <div className="mt-3 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image src="/assets/solutions/thumb-metadoor.webp" alt="Metadoor" fill className="object-cover" />
                </div>
                <div className="mt-4 text-lg font-semibold">METADOOR</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">
                  {isEN
                    ? "Large-format spatial communication & interactive signage. Keep as a distinct product brand."
                    : "????붿뒪?뚮젅??湲곕컲 怨듦컙?듭떊/?ъ씠?덉?. 蹂꾨룄 ?쒗뭹 ?쇱씤?쇰줈 遺꾨━."}
                </div>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>

      <Section id="why">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">{copy.whyTitle}</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {copy.whyBullets.map((b: string) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white/80">{copy.metricsTitle}</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Stat label={isEN ? "Concurrent users" : "?숈떆 ?묒냽"} value="Target 30" note={isEN ? "Load test scenario" : "遺???뚯뒪???쒕굹由ъ삤"} />
                <Stat label={isEN ? "Translation accuracy" : "踰덉뿭 ?뺥솗??} value="Target BLEU 70" note={isEN ? "Evaluation plan" : "?됯? 怨꾪쉷 湲곕컲"} />
                <Stat label={isEN ? "Frame rate" : "?꾨젅??} value="Target 70fps" note={isEN ? "Comfort goal" : "硫誘??媛?紐⑺몴"} />
                <Stat label={isEN ? "Safety scenarios" : "?덉쟾 ?쒕굹由ъ삤"} value={isEN ? "Target 5" : "Target 5醫?} note={isEN ? "Fire/Fall/Electric/..." : "?붿옱/異붾씫/媛먯쟾/..."} />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="logos">
        <Container>
          <h2 className="text-2xl font-semibold sm:text-3xl">{copy.logosTitle}</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <LogoTile src="/assets/logos/etri.svg" alt="ETRI" />
            <LogoTile src="/assets/logos/kepco.svg" alt="KEPCO" />
            <LogoTile src="/assets/logos/pnu.svg" alt="PNU" />
            <LogoTile src="/assets/logos/kitech.svg" alt="KITECH" />
            <LogoTile src="/assets/logos/kosha.svg" alt="KOSHA" />
            <LogoTile src="/assets/logos/masga.svg" alt="MASGA" />
            <LogoTile src="/assets/logos/metadoor.svg" alt="METADOOR" />
            <LogoTile src="/assets/logos/ud4m.svg" alt="UD4M" />
          </div>
        </Container>
      </Section>

      <Section id="cta">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">{copy.finalTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">{copy.finalCopy}</p>

            <div className="mt-8 flex justify-center gap-3">
              <Button href={`/${locale}/request-demo`} variant="primary">
                {copy.final1}
              </Button>
              <Button href={`/${locale}/request-demo?type=partner`} variant="secondary">
                {copy.final2}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
