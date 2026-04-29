import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Calculator,
  Eye,
  Calendar,
  CheckCircle2,
  Check,
  Minus,
  Layers,
  Globe,
  Megaphone,
  TrendingUp,
  PenTool,
  Palette,
  Package,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Unimax Steel — Website Proposal",
  description:
    "Proposed scope, AI integrations, timeline, and investment tiers for the new Unimax Steel website.",
};

const aiFeatures = [
  {
    icon: <Calculator size={20} />,
    name: "AI Quote Estimator",
    summary: "Buyer enters project size, profile, and location — gets an instant estimated quote inside 30 seconds.",
    impact: "Captures intent before they leave the site. Filters serious buyers from window-shoppers.",
  },
  {
    icon: <Layers size={20} />,
    name: "AI Material Calculator",
    summary: "Calculates required quantities (sheets, fasteners, accessories) from area dimensions — outputs a structured bill of materials.",
    impact: "Buyers come to you with quantities already estimated. Faster sales cycles, fewer rework quotes.",
  },
  {
    icon: <Eye size={20} />,
    name: "AI Project Visualiser",
    summary: "Visitors browse Unimax products applied to template photos and instantly preview different colour and profile combinations.",
    impact: "Removes the biggest hesitation in roofing buys — uncertainty about look-and-feel.",
  },
];

const scope = [
  { title: "Strategy & Discovery", items: ["Stakeholder interviews", "Buyer-persona mapping (contractors, developers, project owners)", "Competitive teardown of 5 PH steel suppliers", "Sitemap, content map, and conversion flow"] },
  { title: "Design", items: ["Brand-aligned design system (colours, typography, components)", "Full responsive UI for desktop, tablet, mobile", "On-site product & project photo art direction", "AI feature interfaces"] },
  { title: "Build", items: ["Next.js 16 + Tailwind CSS for performance", "CMS so your team can update products and projects without us", "AI integrations wired to OpenAI / Claude APIs", "SEO, schema markup, sitemaps, analytics"] },
  { title: "Content & Launch", items: ["Rewritten product copy (benefits-led)", "Project case studies (3–5 named builds)", "FAQ + Resources section seed", "Migration, redirects, training session"] },
];

const timeline = [
  { week: "Day 0", phase: "Discovery & onboarding", deliverable: "Brand assets, content, and product info gathered (1–3 days, before the 7-day clock starts)" },
  { week: "Day 1", phase: "Kickoff & direction", deliverable: "Sitemap confirmed, design direction locked, content outline approved" },
  { week: "Days 2–3", phase: "Design", deliverable: "Homepage + product page designs ready for sign-off" },
  { week: "Days 4–5", phase: "Build", deliverable: "Site built, content placed, mobile + tablet checked" },
  { week: "Day 6", phase: "QA & polish", deliverable: "Cross-browser checks, performance pass, SEO basics in place" },
  { week: "Day 7", phase: "Launch 🚀", deliverable: "Site goes live, you get the keys, walkthrough call done" },
  { week: "Week 2+", phase: "AI features layered in", deliverable: "Optional — Quote Estimator, Material Calculator, or Project Visualiser added live (Growth & Premium tiers)" },
];

const addOns = [
  {
    icon: <Megaphone size={20} />,
    name: "Social Media Management",
    price: "₱3,000",
    unit: "/month",
    body: "Content calendar, post creation, and scheduling for Facebook and Instagram. Includes 8 branded posts per month with engagement monitoring — perfect for surfacing new project completions and product arrivals.",
  },
  {
    icon: <TrendingUp size={20} />,
    name: "AI-Powered SEO",
    price: "₱2,500",
    unit: "/month",
    body: "Keyword research, meta tag optimisation, schema markup, and monthly ranking reports for terms like \"steel roofing supplier Philippines\". Keeps your site climbing Google results.",
  },
  {
    icon: <PenTool size={20} />,
    name: "Blog & Content Writing",
    price: "₱2,000",
    unit: "/month",
    body: "2 SEO-optimised articles per month — buying guides (\"Hi Rib vs Corrugated\"), project case studies, or industry news. Drives organic traffic and builds authority.",
  },
  {
    icon: <Palette size={20} />,
    name: "Social Media Design",
    price: "₱350",
    unit: "/design",
    body: "Design-only service for individual social posts — branded graphics for Facebook, Instagram, or promotions. No scheduling or management included. Perfect if your team handles posting in-house.",
  },
];

type Cell = boolean | string;
type CompareRow = { label: string; foundation: Cell; growth: Cell; premium: Cell };
type CompareGroup = { group: string; rows: CompareRow[] };

const comparison: CompareGroup[] = [
  {
    group: "What's included",
    rows: [
      { label: "Live in 7 days", foundation: true, growth: true, premium: true },
      { label: "Pages included", foundation: "4–5", growth: "Up to 8", premium: "Up to 10" },
      { label: "Mobile-first responsive", foundation: true, growth: true, premium: true },
      { label: "Branded with your logo & colours", foundation: true, growth: true, premium: true },
      { label: "Contact form to your inbox", foundation: true, growth: true, premium: true },
    ],
  },
  {
    group: "Design depth",
    rows: [
      { label: "Custom design polish", foundation: false, growth: "Light", premium: "Full design system" },
      { label: "Project case study template", foundation: false, growth: false, premium: true },
      { label: "Bilingual EN/Tagalog scaffolding", foundation: false, growth: false, premium: true },
    ],
  },
  {
    group: "Smart layers",
    rows: [
      { label: "AI integrations", foundation: false, growth: "1 feature", premium: "2 features" },
      { label: "CMS for self-editing", foundation: false, growth: true, premium: true },
    ],
  },
  {
    group: "Monthly retainer",
    rows: [
      { label: "Monthly fee", foundation: "—", growth: "₱1,500/mo", premium: "₱3,000/mo" },
      { label: "Product / page updates per month", foundation: false, growth: "2", premium: "4" },
      { label: "Monthly performance check + insights", foundation: false, growth: false, premium: true },
      { label: "Priority support (same-day response)", foundation: false, growth: false, premium: true },
      { label: "Lock-in commitment", foundation: "None", growth: "Month-to-month", premium: "Month-to-month" },
    ],
  },
  {
    group: "Tech & support",
    rows: [
      { label: "Vercel hosting (year 1 included)", foundation: true, growth: true, premium: true },
      { label: "Basic SEO + Google Analytics", foundation: true, growth: true, premium: true },
      { label: "Revision rounds", foundation: "1", growth: "2", premium: "2" },
    ],
  },
];

const tiers = [
  {
    name: "Foundation",
    tagline: "Best for steel suppliers who just need a polished online presence.",
    price: "₱8,000",
    monthly: null,
    pillNote: "One-Time Payment",
    bullets: [
      "Mobile-first site (4–5 pages: Home, About, Products, Contact)",
      "Branded layout using your existing logo + colours",
      "Contact form connected to your inbox",
      "Basic SEO + Google Analytics",
      "Vercel hosting (fast, free, reliable)",
      "1 round of revisions",
    ],
    bottomStrip: "No monthly fees. No lock-in.",
    bottomStripVariant: "neutral" as const,
    accent: "#94A3B8",
    highlight: false,
  },
  {
    name: "Growth",
    tagline: "Best for businesses that want consistency without big upfront cost.",
    price: "₱7,000",
    monthly: "₱1,500",
    pillNote: "Initial + Monthly Retainer",
    bullets: [
      "Everything in Foundation, plus:",
      "Up to 8 pages with light custom polish",
      "1 AI feature of your choice — Quote Estimator, Material Calculator, or Project Visualiser",
      "Simple CMS so your team can edit content",
      "Google Maps + analytics tracking",
      "2 product / page updates per month (prices, stock, new profiles)",
      "2 rounds of revisions",
    ],
    bottomStrip: "Includes 2 product updates / month.",
    bottomStripVariant: "primary" as const,
    accent: "#EA580C",
    highlight: true,
  },
  {
    name: "Premium",
    tagline: "Best for businesses that want to stay active, updated, and competitive.",
    price: "₱6,000",
    monthly: "₱3,000",
    pillNote: "Initial + Monthly Retainer",
    bullets: [
      "Everything in Growth, plus:",
      "Up to 10 pages with custom design system",
      "2 AI features of your choice (from Quote Estimator, Material Calculator, Project Visualiser)",
      "Bilingual scaffolding (English + Tagalog ready)",
      "Project case study template",
      "4 product / page updates per month",
      "Monthly performance check + insights",
      "Priority support (same-day response)",
    ],
    bottomStrip: "Priority support + monthly insights.",
    bottomStripVariant: "primary" as const,
    accent: "#0F172A",
    highlight: false,
  },
];

export default function ProposalPage() {
  return (
    <main className="bg-white text-neutral-900" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-[#EA580C] flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">UX</span>
            </div>
            <span className="text-sm font-semibold text-neutral-800 hidden sm:inline" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              Unimax Steel
            </span>
          </Link>
          <Link href="/" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1.5">
            <ArrowLeft size={14} /> Back to overview
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-br from-neutral-900 via-neutral-900 to-[#7C2D12] text-white">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA580C]/20 text-[#FB923C] text-xs font-bold uppercase tracking-[0.18em] mb-6">
            Website Proposal
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] mb-6" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            A new digital<br />
            <span className="text-[#F97316]">home for Unimax.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed mb-8">
            Built around what buyers actually need: faster quotes, clearer answers, and a steel supplier that feels modern, trusted, and a step ahead of the market.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 pt-8 border-t border-white/10 text-sm">
            <div><div className="text-white/50 text-xs uppercase tracking-wider mb-1">Delivery</div><div className="font-semibold text-white">Live in 7 days</div></div>
            <div><div className="text-white/50 text-xs uppercase tracking-wider mb-1">Investment</div><div className="font-semibold text-white">From ₱6,000 + retainer</div></div>
            <div><div className="text-white/50 text-xs uppercase tracking-wider mb-1">AI features</div><div className="font-semibold text-white">Up to 2</div></div>
            <div><div className="text-white/50 text-xs uppercase tracking-wider mb-1">Validity</div><div className="font-semibold text-white">90 days</div></div>
          </div>
        </div>
      </section>

      {/* 7-Day Promise */}
      <section className="border-b border-neutral-200 bg-[#EA580C] text-white">
        <div className="max-w-5xl mx-auto px-6 py-14 sm:py-16 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
              The Fishbone Promise
            </div>
            <div className="text-7xl sm:text-8xl font-bold tracking-tight leading-[0.9]" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              7 days.
            </div>
            <div className="text-2xl font-semibold text-white/90 mt-3" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              From kickoff to live.
            </div>
          </div>
          <div className="md:col-span-7 text-white/90 text-lg leading-relaxed space-y-4">
            <p>
              Once we&rsquo;ve gathered your assets and aligned on direction, your new site goes live in <strong className="text-white">seven calendar days</strong>. No drag, no &ldquo;final-final&rdquo; loop, no surprise extensions.
            </p>
            <p className="text-white/75 text-base">
              Discovery and onboarding (1–3 days of brand assets, content, and product info gathering) happen <em>before</em> the 7-day clock starts, so the build phase stays focused. AI features in Growth and Premium tiers are layered in <strong className="text-white">after launch</strong> — the site is already live and earning while we add the smart layers on top.
            </p>
          </div>
        </div>
      </section>

      {/* Why this proposal */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#EA580C] mb-3">01 &mdash; Why now</div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
          The next leap isn&rsquo;t bigger — it&rsquo;s smarter.
        </h2>
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl">
          {[
            { title: "Buyers expect instant answers.", body: "Lead times, prices, available gauges — they shouldn't require a phone call. The new site answers in seconds." },
            { title: "AI changes the playing field.", body: "Most PH steel suppliers haven't moved on AI yet. A 12-month head start is a real competitive moat." },
            { title: "Your operation has the story.", body: "Three locations, eight years of growth, multiple project categories — there's plenty to brag about. We just need to surface it." },
          ].map((c) => (
            <div key={c.title} className="bg-neutral-50 rounded-xl border border-neutral-200 p-6">
              <div className="font-bold text-neutral-900 mb-2" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{c.title}</div>
              <div className="text-neutral-600 text-sm leading-relaxed">{c.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Features */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#EA580C] mb-3">02 &mdash; AI Integrations</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            Three AI features designed for the steel buyer.
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mb-10 leading-relaxed">
            Each one solves a real friction point in the buying journey — and each runs on built-in logic, so there are no ongoing API costs. <strong className="text-neutral-900">Growth</strong> ships with 1 feature of your choice; <strong className="text-neutral-900">Premium</strong> ships with 2.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {aiFeatures.map((f) => (
              <div key={f.name} className="bg-white rounded-xl border border-neutral-200 p-6 hover:border-[#EA580C]/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center">{f.icon}</div>
                  <div className="flex-1">
                    <div className="font-bold text-neutral-900 mb-1.5" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{f.name}</div>
                    <p className="text-neutral-700 text-sm leading-relaxed mb-2">{f.summary}</p>
                    <p className="text-neutral-500 text-xs leading-relaxed italic"><span className="font-semibold text-[#EA580C] not-italic">Why it matters:</span> {f.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#EA580C] mb-3">03 &mdash; Scope</div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>What we&rsquo;ll deliver</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {scope.map((s) => (
            <div key={s.title} className="bg-neutral-50 rounded-xl border border-neutral-200 p-6">
              <div className="font-bold text-neutral-900 mb-3 text-lg" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{s.title}</div>
              <ul className="space-y-2">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-neutral-700 leading-relaxed">
                    <CheckCircle2 size={16} className="text-[#EA580C] shrink-0 mt-0.5" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#EA580C] mb-3">04 &mdash; Timeline</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>Seven days, start to finish</h2>
          <p className="text-neutral-600 text-lg max-w-3xl mb-10 leading-relaxed">
            Discovery happens before the clock starts. Once we kick off, the build is laser-focused on shipping by Day 7.
          </p>
          <div className="space-y-3">
            {timeline.map((t, i) => (
              <div key={t.phase} className="bg-white rounded-xl border border-neutral-200 p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center">
                <div className="flex items-center gap-3 sm:w-44 shrink-0">
                  <div className="w-9 h-9 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">{t.week}</div>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-neutral-900" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{t.phase}</div>
                  <div className="text-sm text-neutral-600">{t.deliverable}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#EA580C] mb-3">05 &mdash; Investment</div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>Three ways to start</h2>
        <p className="text-neutral-600 text-lg max-w-3xl mb-10 leading-relaxed">
          Every tier ships in 7 days. Foundation is a clean one-time build. Growth and Premium pair a smaller upfront with a monthly retainer that keeps your site fresh — product updates, performance insights, and ongoing support handled by us, month after month.
        </p>
        <div className="grid lg:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border flex flex-col overflow-hidden ${
                t.highlight ? "border-[#EA580C] shadow-xl shadow-[#EA580C]/10 bg-white" : "border-neutral-200 bg-white"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-6 bg-[#EA580C] text-white text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full z-10">
                  Recommended
                </div>
              )}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500 mb-4">{t.name}</div>
                <div className="mb-5 pb-5 border-b border-neutral-200">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold text-neutral-900" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{t.price}</span>
                  </div>
                  {t.monthly && (
                    <div className="mb-2">
                      <span className={`text-sm font-semibold ${t.highlight ? "text-[#EA580C]" : "text-neutral-700"}`}>+ {t.monthly}</span>
                      <span className={`text-xs font-normal ${t.highlight ? "text-[#EA580C]/70" : "text-neutral-500"}`}>/month</span>
                    </div>
                  )}
                  <div className="text-[11px] text-neutral-500 uppercase tracking-[0.12em]">{t.pillNote}</div>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">{t.tagline}</p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-neutral-700 leading-relaxed">
                      <CheckCircle2 size={16} className="text-[#EA580C] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:hello@fishbonecreative.com?subject=Unimax%20Steel%20%E2%80%94%20${encodeURIComponent(t.name)}%20tier`}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    t.highlight
                      ? "bg-[#EA580C] hover:bg-[#C2410C] text-white"
                      : "border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-900"
                  }`}
                >
                  Start with {t.name} <ArrowUpRight size={15} />
                </a>
              </div>
              <div
                className={`px-6 py-4 border-t ${
                  t.bottomStripVariant === "primary"
                    ? "bg-[#EA580C]/8 border-[#EA580C]/20 text-[#9A3412]"
                    : "bg-neutral-50 border-neutral-200 text-neutral-500 italic"
                }`}
              >
                <p className="text-xs font-semibold leading-relaxed">{t.bottomStrip}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <div className="mt-16">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#EA580C] mb-3">Compare side-by-side</div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            Everything in each tier, at a glance.
          </h3>

          <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
            <div className="min-w-[640px] rounded-2xl border border-neutral-200 overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-[minmax(180px,1.4fr)_1fr_1fr_1fr] bg-neutral-50 border-b border-neutral-200">
                <div className="p-4 sm:p-5"></div>
                {[
                  { name: "Foundation", price: "₱8,000", monthly: null, highlight: false },
                  { name: "Growth", price: "₱7,000", monthly: "+ ₱1,500/mo", highlight: true },
                  { name: "Premium", price: "₱6,000", monthly: "+ ₱3,000/mo", highlight: false },
                ].map((t) => (
                  <div
                    key={t.name}
                    className={`p-4 sm:p-5 text-center border-l border-neutral-200 ${t.highlight ? "bg-[#EA580C]/8 relative" : ""}`}
                  >
                    {t.highlight && (
                      <div className="absolute -top-px left-1/2 -translate-x-1/2 -translate-y-full mt-px bg-[#EA580C] text-white text-[9px] font-bold uppercase tracking-[0.18em] px-2.5 py-0.5 rounded-b">
                        Recommended
                      </div>
                    )}
                    <div className={`text-sm font-bold ${t.highlight ? "text-[#EA580C]" : "text-neutral-900"}`} style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{t.name}</div>
                    <div className={`text-xs mt-1 ${t.highlight ? "text-[#9A3412]" : "text-neutral-500"}`}>{t.price}</div>
                    {t.monthly && (
                      <div className={`text-[10px] mt-0.5 ${t.highlight ? "text-[#9A3412]" : "text-neutral-400"}`}>{t.monthly}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Body */}
              {comparison.map((group, gi) => (
                <div key={group.group}>
                  <div className={`grid grid-cols-[minmax(180px,1.4fr)_1fr_1fr_1fr] ${gi === 0 ? "" : "border-t border-neutral-200"}`}>
                    <div className="col-span-4 px-5 py-2.5 bg-neutral-50/70 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                      {group.group}
                    </div>
                  </div>
                  {group.rows.map((row, ri) => (
                    <div
                      key={row.label}
                      className={`grid grid-cols-[minmax(180px,1.4fr)_1fr_1fr_1fr] ${ri !== 0 || gi !== 0 ? "border-t border-neutral-100" : ""}`}
                    >
                      <div className="px-5 py-3.5 text-sm text-neutral-700">{row.label}</div>
                      {(["foundation", "growth", "premium"] as const).map((tier) => {
                        const cell = row[tier];
                        const isGrowth = tier === "growth";
                        return (
                          <div
                            key={tier}
                            className={`px-4 py-3.5 text-center border-l border-neutral-100 ${isGrowth ? "bg-[#EA580C]/5" : ""}`}
                          >
                            {cell === true ? (
                              <Check size={18} className="mx-auto text-[#EA580C]" strokeWidth={3} />
                            ) : cell === false ? (
                              <Minus size={16} className="mx-auto text-neutral-300" />
                            ) : (
                              <span className={`text-xs sm:text-sm font-semibold ${isGrowth ? "text-[#9A3412]" : "text-neutral-900"}`}>{cell}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ))}

              {/* CTA row */}
              <div className="grid grid-cols-[minmax(180px,1.4fr)_1fr_1fr_1fr] border-t border-neutral-200 bg-neutral-50">
                <div className="p-4 sm:p-5 text-xs font-semibold uppercase tracking-wider text-neutral-500 self-center">Get started</div>
                {[
                  { name: "Foundation", highlight: false },
                  { name: "Growth", highlight: true },
                  { name: "Premium", highlight: false },
                ].map((t) => (
                  <div key={t.name} className={`p-3 sm:p-4 border-l border-neutral-200 ${t.highlight ? "bg-[#EA580C]/8" : ""}`}>
                    <a
                      href={`mailto:hello@fishbonecreative.com?subject=Unimax%20Steel%20%E2%80%94%20${encodeURIComponent(t.name)}%20tier`}
                      className={`block text-center text-xs font-bold uppercase tracking-wider px-3 py-2.5 rounded-lg transition-colors ${
                        t.highlight ? "bg-[#EA580C] hover:bg-[#C2410C] text-white" : "border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-900"
                      }`}
                    >
                      Choose {t.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Add-ons */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#EA580C] mb-3">06 &mdash; Optional Add-ons</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            Layer in extra firepower.
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mb-3 leading-relaxed">
            Available exclusively to <strong className="text-neutral-900">Growth</strong> and <strong className="text-neutral-900">Premium</strong> subscribers. Billed monthly alongside the retainer; cancellable with 15 days written notice.
          </p>
          <p className="text-sm text-neutral-500 italic mb-10">Mix and match — pick any combination below.</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {addOns.map((a) => (
              <article key={a.name} className="bg-white rounded-2xl border border-neutral-200 hover:border-[#EA580C]/40 transition-colors p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center">{a.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <h3 className="font-bold text-neutral-900 text-lg leading-tight" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{a.name}</h3>
                      <div className="shrink-0 text-right">
                        <span className="text-xl font-bold text-[#EA580C]" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{a.price}</span>
                        <span className="text-xs font-normal text-[#9A3412]">{a.unit}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed pl-15">{a.body}</p>
              </article>
            ))}
          </div>

          {/* Bundle callout */}
          <div className="bg-gradient-to-br from-[#EA580C] to-[#9A3412] text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
              <Package size={22} />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 mb-1.5">Bundle deal</div>
              <div className="font-bold text-lg sm:text-xl mb-1" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                Bundle the first three monthly services for ₱6,500/month.
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                That&rsquo;s Social Media Management + AI-Powered SEO + Blog Writing — together you save ₱1,000/month versus picking them individually. Add-ons begin after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concepts CTA */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20">
        <div className="bg-neutral-900 text-white rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            See three directions, side-by-side.
          </h3>
          <p className="text-white/80 leading-relaxed mb-6 max-w-3xl">
            We built three concept directions, each leading with a different AI feature so you can see how the brand could feel in different worlds. Open each and switch between mobile, tablet, and desktop views to compare.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 mb-8">
            {[
              { href: "/concept-1", label: "Concept 1", sub: "Industrial Confidence" },
              { href: "/concept-2", label: "Concept 2", sub: "Modern Clarity" },
              { href: "/concept-3", label: "Concept 3", sub: "Filipino Pride" },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-xl bg-white/5 border border-white/10 hover:border-[#F97316] hover:bg-white/10 transition-all p-5 group"
              >
                <div className="text-xs uppercase tracking-[0.14em] text-[#F97316] font-bold mb-2">{c.label}</div>
                <div className="font-bold text-white text-lg group-hover:text-[#F97316] transition-colors" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{c.sub}</div>
                <div className="mt-3 text-sm text-white/60 inline-flex items-center gap-1">Open <ArrowUpRight size={14} /></div>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@fishbonecreative.com?subject=Unimax%20Steel%20%E2%80%94%20Let%27s%20talk"
              className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] transition-colors text-white px-5 py-3 rounded-lg text-sm font-semibold"
            >
              <Calendar size={16} /> Book a 30-min walkthrough
            </a>
            <a
              href="https://unimaxsteel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white transition-colors px-5 py-3 rounded-lg text-sm font-semibold"
            >
              <Globe size={16} /> Compare to current site
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
