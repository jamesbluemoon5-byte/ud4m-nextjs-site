export type Locale = "en" | "kr";

export const NAV = {
  en: [
    { label: "Industries", href: "/en#industries" },
    { label: "Platform", href: "/en/platform" },
    { label: "Case Studies", href: "/en/case-studies" },
    { label: "IP & Technology", href: "/en/ip" },
    { label: "IR", href: "/en/ir" },
  ],
  kr: [
    { label: "산업", href: "/kr#industries" },
    { label: "플랫폼", href: "/kr/platform" },
    { label: "사례", href: "/kr/case-studies" },
    { label: "IP/기술", href: "/kr/ip" },
    { label: "IR", href: "/kr/ir" },
  ],
} as const;

export const HOME = {
  en: {
    hero: {
      h1: "Industrial XR & Digital Twin Infrastructure",
      h2: "Operational-grade XR systems for shipbuilding, energy, and smart infrastructure.",
      proof: [
        "Patented AR interaction & collaboration technologies.",
        "Cross-device XR collaboration technology base (transfer/applied).",
      ],
      ctaPrimary: { label: "Explore Industry Solutions", href: "#industries" },
      ctaSecondary: { label: "Request Strategic Demo", href: "/en/request-demo" },
    },
    industriesTitle: "Built for complex, high-risk operations.",
    industries: [
      { title: "Shipbuilding & Marine", desc: "Standardize complex procedure training via shared XR collaboration.", href: "/en/industries/shipbuilding" },
      { title: "Energy & Infrastructure", desc: "Digital twin visualization and field-ready workflows for operational visibility.", href: "/en/industries/energy" },
      { title: "Industrial Safety & Training", desc: "Scenario-based safety training with measurable logs and audit-ready records.", href: "/en/industries/safety" },
    ],
    platformTitle: "Designed for deployment — not demos.",
    platformBullets: [
      "Multi-device XR collaboration layer",
      "Digital twin visualization and simulation",
      "Optional AI language & analytics modules",
      "Cloud-ready architecture with security controls",
    ],
    ipTitle: "Protected technology. Credible delivery.",
    ipBullets: [
      "Patents in AR interaction and collaboration",
      "Cross-device collaboration foundation (transfer/applied)",
      "Multi-industry project delivery track record",
      "IP strategy for global deployment readiness (FTO/design-around)",
    ],
    finalTitle: "Deploy industrial XR with strategic confidence.",
    finalCopy: "Discuss scope, devices, data, and security requirements. We’ll propose a deployment roadmap and demo plan.",
    finalPrimary: "Request Strategic Consultation",
    finalSecondary: "Explore Partnership Opportunities",
  },
  kr: {
    hero: {
      h1: "산업용 XR · 디지털 트윈 인프라",
      h2: "조선·에너지·스마트 인프라 현장을 위한 운영 등급(Operational-grade) XR 시스템을 구축합니다.",
      proof: [
        "AR 상호작용/협업 핵심 특허 기반",
        "크로스 디바이스 XR 협업 기술 기반(기술이전/적용)",
      ],
      ctaPrimary: { label: "산업별 솔루션 보기", href: "#industries" },
      ctaSecondary: { label: "전략 데모 요청", href: "/kr/request-demo" },
    },
    industriesTitle: "고위험·고복잡 산업을 위한 설계",
    industries: [
      { title: "조선·해양", desc: "복잡 공정 교육과 협업을 XR 세션으로 표준화합니다.", href: "/kr/industries/shipbuilding" },
      { title: "에너지·인프라", desc: "디지털 트윈 가시화와 현장 업무 흐름을 연결합니다.", href: "/kr/industries/energy" },
      { title: "산업안전·훈련", desc: "시나리오 기반 훈련과 감사 대응 기록을 체계화합니다.", href: "/kr/industries/safety" },
    ],
    platformTitle: "데모가 아니라 “운영”을 기준으로 설계된 플랫폼",
    platformBullets: [
      "멀티 디바이스 XR 협업 레이어",
      "디지털 트윈 시각화/시뮬레이션",
      "(옵션) AI 언어/분석 모듈",
      "클라우드/보안/확장성 고려",
    ],
    ipTitle: "특허·기술이전·수행 이력으로 신뢰를 고정",
    ipBullets: [
      "AR 상호작용/협업 특허 포트폴리오",
      "크로스 디바이스 XR 협업 기술 기반",
      "산업/공공 프로젝트 수행 이력",
      "글로벌 진출을 고려한 IP 전략(FTO/회피설계)",
    ],
    finalTitle: "도입 전략부터, 적용 기준으로 논의합니다.",
    finalCopy: "범위·디바이스·데이터·보안 요구를 기준으로 도입 로드맵과 데모 계획을 제안합니다.",
    finalPrimary: "전략 컨설팅 요청",
    finalSecondary: "파트너십 제안",
  },
} as const;

export const FOOTER = {
  en: { company: "UD4M Inc.", lines: ["Industrial XR & Digital Twin Infrastructure", "Seoul, Republic of Korea", "Email: master@ud4m.com"] },
  kr: { company: "유디포엠(주)", lines: ["산업용 XR · 디지털 트윈 인프라", "서울, 대한민국", "이메일: master@ud4m.com"] },
} as const;
