"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Calculator,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Truck,
  Award,
  Sparkles,
  ChevronRight,
  Zap,
} from "lucide-react";

const products = [
  { name: "Maxi Hi Rib Roofing", spec: "0.40–0.60mm · pre-painted long-span", img: "from-orange-700 to-orange-900" },
  { name: "Maxi Webdeck", spec: "Composite floor decking · structural", img: "from-slate-700 to-slate-900" },
  { name: "C-Purlins", spec: "1.0–3.0mm · standard PH gauges", img: "from-amber-700 to-orange-900" },
  { name: "Insulated Panels", spec: "Wall + roof · thermal performance", img: "from-zinc-700 to-zinc-900" },
  { name: "Sierra Tile Roof", spec: "Architectural tile profile", img: "from-orange-800 to-red-950" },
  { name: "Spandrel Ceiling", spec: "Plain, groove, rib variants", img: "from-stone-700 to-stone-900" },
];

const projects = [
  { name: "Pampanga Distribution Hub", scope: "15,000 sqm warehouse roof", year: "2025" },
  { name: "Urdaneta Industrial Park", scope: "Multi-tenant facility envelope", year: "2024" },
  { name: "QC Mid-Rise Office", scope: "Composite floor decking + roofing", year: "2024" },
];

export default function Concept1() {
  // AI Quote Estimator state
  const [productType, setProductType] = useState("Hi Rib Roofing");
  const [area, setArea] = useState(500);
  const [region, setRegion] = useState("Luzon");
  const [thinking, setThinking] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  const estimate = useMemo(() => {
    const baseRates: Record<string, number> = {
      "Hi Rib Roofing": 285,
      "Webdeck": 540,
      "C-Purlins": 175,
      "Insulated Panels": 1450,
      "Sierra Tile": 380,
    };
    const regionAdj: Record<string, number> = { Luzon: 1.0, Visayas: 1.08, Mindanao: 1.12 };
    const rate = baseRates[productType] ?? 300;
    const subtotal = rate * area * (regionAdj[region] ?? 1);
    const accessories = subtotal * 0.12;
    const delivery = area * 18;
    return {
      rate,
      subtotal: Math.round(subtotal),
      accessories: Math.round(accessories),
      delivery: Math.round(delivery),
      total: Math.round(subtotal + accessories + delivery),
    };
  }, [productType, area, region]);

  function calculate() {
    setShowQuote(false);
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      setShowQuote(true);
    }, 900);
  }

  return (
    <main className="bg-[#0A0A0B] text-white min-h-screen" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-[#0A0A0B]/90 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-white">
            <div className="w-7 h-7 rounded-sm bg-[#EA580C] flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">UX</span>
            </div>
            <span className="text-sm font-bold tracking-tight" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              UNIMAX STEEL
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#estimator" className="hover:text-white">Quote</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <Link href="/" className="text-xs text-white/50 hover:text-white flex items-center gap-1.5">
            <ArrowLeft size={14} /> Back
          </Link>
        </div>
      </header>

      {/* Hero with Quote Estimator */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,88,12,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:repeating-linear-gradient(0deg,transparent,transparent_30px,#fff_30px,#fff_31px),repeating-linear-gradient(90deg,transparent,transparent_30px,#fff_30px,#fff_31px)]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-12 gap-10 items-center">
          {/* Headline column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA580C]/15 text-[#FB923C] text-[11px] font-bold uppercase tracking-[0.18em] mb-6">
              <Sparkles size={12} /> AI-powered steel buying
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] font-bold tracking-tight leading-[0.95] mb-6" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              Quote your<br />
              project in <span className="text-[#F97316]">30 seconds.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-8">
              Pre-painted Philippine steel delivered fast, priced fairly, built to last. Type in your project — the estimator below tells you what it costs before you finish your coffee.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#estimator" className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] transition-colors text-white px-5 py-3 rounded-md text-sm font-bold uppercase tracking-wider">
                Estimate now <ArrowUpRight size={16} />
              </a>
              <a href="#products" className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white px-5 py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-colors">
                Browse products
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div><div className="text-3xl font-bold text-[#F97316]" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>3</div><div className="text-xs uppercase tracking-wider text-white/50 mt-1">Locations</div></div>
              <div><div className="text-3xl font-bold text-[#F97316]" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>8yr</div><div className="text-xs uppercase tracking-wider text-white/50 mt-1">Track record</div></div>
              <div><div className="text-3xl font-bold text-[#F97316]" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>500+</div><div className="text-xs uppercase tracking-wider text-white/50 mt-1">Projects</div></div>
            </div>
          </div>

          {/* AI Estimator widget */}
          <div className="lg:col-span-5" id="estimator">
            <div className="bg-white text-neutral-900 rounded-2xl shadow-2xl shadow-[#EA580C]/20 overflow-hidden border border-white/10">
              <div className="bg-[#0A0A0B] text-white px-5 py-4 flex items-center gap-3 border-b border-white/10">
                <div className="w-9 h-9 rounded-lg bg-[#EA580C] flex items-center justify-center"><Calculator size={18} /></div>
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-[#F97316] font-bold">AI Quote Estimator</div>
                  <div className="text-sm font-bold">Get a budget in seconds</div>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                </span>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5 block">Product</label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {Object.keys({ "Hi Rib Roofing": 0, Webdeck: 0, "C-Purlins": 0, "Insulated Panels": 0, "Sierra Tile": 0 }).map((p) => (
                      <button
                        key={p}
                        onClick={() => { setProductType(p); setShowQuote(false); }}
                        className={`text-left text-sm px-3 py-2 rounded-md border transition-colors ${
                          productType === p ? "border-[#EA580C] bg-[#EA580C]/10 text-neutral-900 font-semibold" : "border-neutral-200 hover:border-neutral-400 text-neutral-700"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5 block">Area (sqm)</label>
                    <input
                      type="number"
                      value={area}
                      onChange={(e) => { setArea(Number(e.target.value)); setShowQuote(false); }}
                      min={50}
                      max={50000}
                      className="w-full text-sm px-3 py-2.5 rounded-md border border-neutral-200 focus:border-[#EA580C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5 block">Region</label>
                    <select
                      value={region}
                      onChange={(e) => { setRegion(e.target.value); setShowQuote(false); }}
                      className="w-full text-sm px-3 py-2.5 rounded-md border border-neutral-200 focus:border-[#EA580C] focus:outline-none bg-white"
                    >
                      <option>Luzon</option>
                      <option>Visayas</option>
                      <option>Mindanao</option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={calculate}
                  disabled={thinking}
                  className="w-full bg-[#EA580C] hover:bg-[#C2410C] disabled:opacity-70 transition-colors text-white py-3 rounded-md text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  {thinking ? (<><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Calculating…</>) : (<><Zap size={16} /> Estimate cost</>)}
                </button>

                {showQuote && (
                  <div className="rounded-lg bg-neutral-50 p-4 space-y-2.5 text-sm border border-neutral-200">
                    <div className="flex justify-between"><span className="text-neutral-600">Material ({area} sqm × ₱{estimate.rate})</span><span className="font-semibold">₱{estimate.subtotal.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span className="text-neutral-600">Accessories (12%)</span><span className="font-semibold">₱{estimate.accessories.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span className="text-neutral-600">Delivery to {region}</span><span className="font-semibold">₱{estimate.delivery.toLocaleString()}</span></div>
                    <div className="pt-2.5 mt-1 border-t border-neutral-200 flex justify-between items-baseline">
                      <span className="text-xs uppercase tracking-wider text-neutral-500">Estimated total</span>
                      <span className="text-2xl font-bold text-[#EA580C]" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>₱{estimate.total.toLocaleString()}</span>
                    </div>
                    <a href="mailto:inquiries@unimaxsteel.com" className="block text-center bg-neutral-900 hover:bg-[#EA580C] transition-colors text-white py-2.5 rounded-md text-xs font-bold uppercase tracking-wider mt-2">
                      Lock this rate · Talk to sales →
                    </a>
                    <p className="text-[10px] text-neutral-400 leading-relaxed text-center">Indicative only · Final quote depends on profile, gauge, and site logistics.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-[#0A0A0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <ShieldCheck size={18} />, label: "10-year warranty" },
            { icon: <Truck size={18} />, label: "Nationwide delivery" },
            { icon: <Award size={18} />, label: "PNS-certified gauges" },
            { icon: <Phone size={18} />, label: "Same-day callbacks" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-3 text-white/80">
              <div className="text-[#F97316]">{t.icon}</div>
              <div className="text-sm font-semibold">{t.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#F97316] mb-3">Product range</div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                Built for every<br />kind of build.
              </h2>
            </div>
            <a href="#" className="text-sm font-semibold text-white/70 hover:text-[#F97316] flex items-center gap-1.5">
              Full catalogue <ChevronRight size={16} />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <div key={p.name} className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-[#EA580C] transition-all">
                <div className={`aspect-[4/3] bg-gradient-to-br ${p.img} relative`}>
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent,transparent_8px,rgba(0,0,0,0.18)_8px,rgba(0,0,0,0.18)_16px)]" />
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/40 backdrop-blur rounded text-[10px] font-bold uppercase tracking-wider">In stock</div>
                </div>
                <div className="p-5 bg-white/[0.02]">
                  <div className="font-bold text-white mb-1.5" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{p.name}</div>
                  <div className="text-xs text-white/60 mb-4">{p.spec}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-[#F97316] font-bold group-hover:translate-x-1 transition-transform">Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI capabilities strip */}
      <section className="border-b border-white/10 bg-gradient-to-br from-[#EA580C]/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#F97316] mb-3">Powered by AI</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-12 max-w-3xl" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            Your sales team, available 24/7.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Quote Estimator", body: "Buyers price their project without lifting the phone. Triggers a sales handoff once they hit submit." },
              { title: "Spec Recommender", body: "Describe a project in plain language; get the right profile, gauge, and accessories list." },
              { title: "After-hours chat", body: "Bilingual assistant fields lead times and delivery questions until your team is back." },
            ].map((c) => (
              <div key={c.title} className="border border-white/10 rounded-xl p-6 hover:border-[#EA580C] transition-colors">
                <div className="w-10 h-10 rounded-md bg-[#EA580C] flex items-center justify-center mb-4"><Sparkles size={18} /></div>
                <div className="font-bold text-white text-lg mb-2" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{c.title}</div>
                <div className="text-sm text-white/60 leading-relaxed">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#F97316] mb-3">Recent work</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            Steel that&rsquo;s already standing.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((p) => (
              <div key={p.name} className="group">
                <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-stone-700 via-orange-900 to-[#0A0A0B] mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_3px)]" />
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-wider text-white/60 font-bold">{p.year}</div>
                </div>
                <div className="font-bold text-white mb-1" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{p.name}</div>
                <div className="text-sm text-white/60">{p.scope}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="bg-gradient-to-br from-[#EA580C] to-[#7C2D12]">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              Ready to break ground?
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-6 max-w-lg">
              Talk to a real engineer at Unimax. We&rsquo;ll match the right product to your project — usually within the same business day.
            </p>
            <div className="space-y-2.5 text-white/90">
              <div className="flex items-center gap-3"><Phone size={16} /><span className="font-semibold">(02) 8351-8338</span></div>
              <div className="flex items-center gap-3"><Mail size={16} /><span className="font-semibold">inquiries@unimaxsteel.com</span></div>
              <div className="flex items-center gap-3"><MapPin size={16} /><span className="font-semibold">QC HQ · Pampanga · Pangasinan</span></div>
            </div>
          </div>
          <div className="bg-[#0A0A0B] rounded-2xl p-7 border border-white/10">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#F97316] mb-2">Request a callback</div>
            <div className="text-2xl font-bold text-white mb-5" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>We&rsquo;ll call within 1 business hour.</div>
            <div className="space-y-3">
              <input placeholder="Your name" className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:border-[#EA580C] focus:outline-none text-sm" />
              <input placeholder="Phone or email" className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:border-[#EA580C] focus:outline-none text-sm" />
              <input placeholder="Project type / location" className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:border-[#EA580C] focus:outline-none text-sm" />
              <button className="w-full bg-[#EA580C] hover:bg-[#FB923C] transition-colors py-3 rounded-md font-bold uppercase tracking-wider text-sm">
                Request callback
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A0A0B] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-white/40">
          <div>© {new Date().getFullYear()} Unimax Steel Resources, Inc. · Concept 1 — Industrial Confidence</div>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-white">All concepts</Link>
            <Link href="/proposal" className="hover:text-white">Proposal</Link>
            <Link href="/audit" className="hover:text-white">Audit</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
