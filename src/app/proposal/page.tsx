import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Calculator,
  Sparkles,
  MessageSquare,
  Eye,
  Languages,
  Search,
  Calendar,
  CheckCircle2,
  Layers,
  Globe,
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
    icon: <Sparkles size={20} />,
    name: "AI Product Advisor",
    summary: "Conversational helper that recommends roofing or decking products based on the buyer's project description.",
    impact: "Acts like a 24/7 sales engineer. Especially powerful for first-time buyers unsure what they need.",
  },
  {
    icon: <MessageSquare size={20} />,
    name: "Bilingual AI Chatbot",
    summary: "Answers technical questions, lead times, and delivery in both English and Tagalog, then hands off to your team.",
    impact: "Reduces inbound calls for routine questions. Keeps prospects engaged after-hours.",
  },
  {
    icon: <Eye size={20} />,
    name: "AI Project Visualiser",
    summary: "Buyer uploads a photo of their building or site; the system shows what each Unimax product would look like applied.",
    impact: "Removes the biggest hesitation in roofing buys — uncertainty about look-and-feel.",
  },
  {
    icon: <Search size={20} />,
    name: "Smart Search",
    summary: "Natural-language search like &ldquo;hi-rib for warehouse 5000 sqm in Pampanga&rdquo; — surfaces the right product, spec sheet, and CTA.",
    impact: "Cuts the path from search to inquiry from many clicks to one.",
  },
  {
    icon: <Layers size={20} />,
    name: "AI Material Calculator",
    summary: "Calculates required quantities (sheets, fasteners, accessories) from area dimensions — outputs a structured BoM.",
    impact: "Buyers come to you with quantities already estimated. Faster sales cycles, fewer rework quotes.",
  },
  {
    icon: <Languages size={20} />,
    name: "Auto-Translated Pages",
    summary: "Tagalog, Cebuano, and Ilocano versions generated and kept in sync automatically as content updates.",
    impact: "Opens regional buyer markets without ongoing translation cost.",
  },
];

const scope = [
  { title: "Strategy & Discovery", items: ["Stakeholder interviews", "Buyer-persona mapping (contractors, developers, project owners)", "Competitive teardown of 5 PH steel suppliers", "Sitemap, content map, and conversion flow"] },
  { title: "Design", items: ["Brand-aligned design system (colours, typography, components)", "Full responsive UI for desktop, tablet, mobile", "On-site product & project photo art direction", "AI feature interfaces"] },
  { title: "Build", items: ["Next.js 16 + Tailwind CSS for performance", "CMS so your team can update products and projects without us", "AI integrations wired to OpenAI / Claude APIs", "SEO, schema markup, sitemaps, analytics"] },
  { title: "Content & Launch", items: ["Rewritten product copy (benefits-led)", "Project case studies (3–5 named builds)", "FAQ + Resources section seed", "Migration, redirects, training session"] },
];

const timeline = [
  { week: "Weeks 1–2", phase: "Discovery & Strategy", deliverable: "Sitemap, content plan, design direction approved" },
  { week: "Weeks 3–5", phase: "Design", deliverable: "Full design system + key page mockups signed off" },
  { week: "Weeks 6–9", phase: "Build", deliverable: "Pages built, AI features integrated, CMS configured" },
  { week: "Week 10", phase: "Content & QA", deliverable: "Copy in place, mobile + cross-browser QA, SEO checks" },
  { week: "Week 11", phase: "Launch", deliverable: "Soft launch, training session, go-live" },
  { week: "Weeks 12+", phase: "Ongoing", deliverable: "Performance review, content support, optional retainer" },
];

const tiers = [
  {
    name: "Foundation",
    tagline: "Site refresh + 1 AI feature",
    price: "₱350,000",
    range: "8 weeks",
    bullets: [
      "Full website redesign (8–10 pages)",
      "Mobile-first responsive build",
      "1 AI integration of choice (e.g., Quote Estimator)",
      "CMS + 3 case studies",
      "Basic SEO + Google Analytics",
      "1 round of revisions per stage",
    ],
    accent: "#94A3B8",
    highlight: false,
  },
  {
    name: "Growth",
    tagline: "Recommended — site + 3 AI features",
    price: "₱650,000",
    range: "10–11 weeks",
    bullets: [
      "Everything in Foundation, plus:",
      "Professional product + project photo shoot",
      "3 AI integrations (Estimator, Product Advisor, Chatbot)",
      "Bilingual support (English + Tagalog)",
      "5 case studies + Resources section seed",
      "Schema markup, advanced SEO",
      "2 rounds of revisions per stage",
      "30-day post-launch optimisation",
    ],
    accent: "#EA580C",
    highlight: true,
  },
  {
    name: "Premium",
    tagline: "Full transformation + 5 AI features",
    price: "₱1,100,000",
    range: "12–14 weeks",
    bullets: [
      "Everything in Growth, plus:",
      "5 AI integrations including Project Visualiser",
      "Auto-translated Tagalog / Cebuano / Ilocano pages",
      "Advanced project case study system with filters",
      "Custom buyer dashboard for repeat customers",
      "Priority post-launch support (90 days)",
      "Quarterly performance review + content sprints",
    ],
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
            <div><div className="text-white/50 text-xs uppercase tracking-wider mb-1">Engagement</div><div className="font-semibold text-white">8 to 14 weeks</div></div>
            <div><div className="text-white/50 text-xs uppercase tracking-wider mb-1">Investment</div><div className="font-semibold text-white">From ₱350K</div></div>
            <div><div className="text-white/50 text-xs uppercase tracking-wider mb-1">AI features</div><div className="font-semibold text-white">Up to 7</div></div>
            <div><div className="text-white/50 text-xs uppercase tracking-wider mb-1">Validity</div><div className="font-semibold text-white">90 days</div></div>
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
            Seven AI features designed for the steel buyer.
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mb-10 leading-relaxed">
            Each one solves a real friction point in the buying journey. You don&rsquo;t need all seven on day one — we recommend starting with three (depending on tier) and layering in more as we learn what your buyers respond to.
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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>From kickoff to launch</h2>
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
          Pick the tier that matches your appetite. All include the design system, mobile-first build, and CMS — they differ on number of AI features, content depth, and post-launch support.
        </p>
        <div className="grid lg:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-6 sm:p-7 flex flex-col ${
                t.highlight ? "border-[#EA580C] shadow-xl shadow-[#EA580C]/10 bg-white" : "border-neutral-200 bg-white"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-6 bg-[#EA580C] text-white text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full">
                  Recommended
                </div>
              )}
              <div className="mb-5">
                <div className="font-bold text-neutral-900 text-2xl mb-1" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{t.name}</div>
                <div className="text-sm text-neutral-500">{t.tagline}</div>
              </div>
              <div className="mb-5 pb-5 border-b border-neutral-200">
                <div className="text-3xl font-bold text-neutral-900 mb-1" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{t.price}</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">{t.range} &middot; one-time</div>
              </div>
              <ul className="space-y-2.5 flex-1 mb-6">
                {t.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-neutral-700 leading-relaxed">
                    <CheckCircle2 size={16} className="text-[#EA580C] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@fishbonecreative.com?subject=Unimax%20Steel%20%E2%80%94%20{tier}%20tier"
                className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  t.highlight
                    ? "bg-[#EA580C] hover:bg-[#C2410C] text-white"
                    : "border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-900"
                }`}
              >
                Start with {t.name} <ArrowUpRight size={15} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-sm text-neutral-500 leading-relaxed max-w-3xl">
          <span className="font-semibold text-neutral-700">Notes:</span> Prices are indicative and exclude VAT. AI feature usage costs (OpenAI / Claude API) billed at-cost. Photo shoot logistics quoted separately depending on locations. Optional ongoing retainer (₱45K–₱90K / month) covers content, performance optimisation, and AI feature tuning.
        </div>
      </section>

      {/* Concepts CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
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
