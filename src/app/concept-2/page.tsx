"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Search,
  Calculator,
  CheckCircle2,
  Phone,
  Mail,
  Layers,
  Wrench,
} from "lucide-react";

const products = [
  { name: "Hi Rib Roofing", desc: "Long-span pre-painted roofing.", category: "Roofing" },
  { name: "Webdeck", desc: "Composite floor decking.", category: "Decking" },
  { name: "C-Purlins", desc: "Cold-formed structural sections.", category: "Structural" },
  { name: "Insulated Panels", desc: "Wall and roof thermal panels.", category: "Envelope" },
  { name: "Sierra Tile", desc: "Architectural tile profile.", category: "Roofing" },
  { name: "Spandrel Ceiling", desc: "Plain, groove, and rib ceilings.", category: "Finish" },
];

// Material rates per sheet / per metre — drives the deterministic calculator
const MATERIAL_RATES: Record<string, { coverage: number; pricePerSheet: number; weight: number }> = {
  "Hi Rib Roofing":   { coverage: 1.0, pricePerSheet: 285, weight: 6.2 },
  "Sierra Tile":      { coverage: 0.92, pricePerSheet: 380, weight: 7.1 },
  "Webdeck":          { coverage: 0.9, pricePerSheet: 540, weight: 11.4 },
  "Insulated Panels": { coverage: 1.0, pricePerSheet: 1450, weight: 9.8 },
};

export default function Concept2() {
  const [profile, setProfile] = useState<keyof typeof MATERIAL_RATES>("Hi Rib Roofing");
  const [length, setLength] = useState(40);
  const [width, setWidth] = useState(20);

  const result = useMemo(() => {
    const area = length * width;
    const rate = MATERIAL_RATES[profile];
    const sheets = Math.ceil(area / rate.coverage);
    const fasteners = Math.ceil(sheets * 8); // ~8 fasteners per sheet
    const totalWeight = +(sheets * rate.weight).toFixed(1);
    const sheetSubtotal = sheets * rate.pricePerSheet;
    const fastenerCost = fasteners * 4;
    const total = sheetSubtotal + fastenerCost;
    return { area, sheets, fasteners, totalWeight, sheetSubtotal, fastenerCost, total };
  }, [profile, length, width]);

  return (
    <main className="bg-white text-[#0F172A]" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-[#0F172A] flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">UX</span>
            </div>
            <span className="text-sm font-bold tracking-tight" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              Unimax<span className="text-[#0EA5E9]">.</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm text-neutral-600">
            <a href="#products" className="hover:text-[#0F172A]">Products</a>
            <a href="#calculator" className="hover:text-[#0F172A]">Calculator</a>
            <a href="#projects" className="hover:text-[#0F172A]">Projects</a>
            <a href="#contact" className="hover:text-[#0F172A]">Contact</a>
          </nav>
          <Link href="/" className="text-xs text-neutral-400 hover:text-neutral-700 flex items-center gap-1.5">
            <ArrowLeft size={14} /> Back
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-medium mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" /> New · Material calculator live
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-bold tracking-tight leading-[1.0] mb-7 max-w-4xl mx-auto" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            Steel, simply<br />
            <span className="text-neutral-400">specified.</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-9">
            Type your project dimensions. Get the exact bill of materials — sheets, fasteners, weight, total — without a phone call.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#calculator" className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#0EA5E9] transition-colors text-white px-6 py-3.5 rounded-full text-sm font-semibold">
              Try the calculator <ArrowRight size={16} />
            </a>
            <a href="#products" className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900 px-5 py-3.5 text-sm font-semibold">
              Or browse products
            </a>
          </div>

          {/* Search bar */}
          <div className="mt-16 max-w-xl mx-auto relative">
            <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              placeholder="Search products: 'Hi Rib', 'C-Purlins', 'Sierra Tile'…"
              className="w-full pl-12 pr-32 py-4 rounded-full border border-neutral-200 hover:border-neutral-300 focus:border-[#0EA5E9] focus:outline-none text-sm bg-white shadow-sm"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-[#0F172A] text-white text-xs font-semibold rounded-full">
              Search
            </span>
          </div>
          <p className="text-xs text-neutral-400 mt-3">Find specs, gauges, and stock by name or category.</p>
        </div>
      </section>

      {/* Products grid */}
      <section id="products" className="border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0EA5E9] mb-3">Six product families</div>
              <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                Built for clarity, priced for fairness.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 text-neutral-600 text-lg leading-relaxed">
              Every Unimax product comes with full spec sheets, current stock visibility, and a 10-year warranty. Hover any product for the at-a-glance brief.
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100">
            {products.map((p) => (
              <div key={p.name} className="bg-white p-7 hover:bg-neutral-50 transition-colors group">
                <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-neutral-400 mb-4">{p.category}</div>
                <div className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{p.name}</div>
                <div className="text-neutral-600 mb-8 text-sm leading-relaxed">{p.desc}</div>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#0EA5E9] group-hover:gap-3 transition-all">
                  See details <ArrowUpRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Material Calculator */}
      <section id="calculator" className="bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0EA5E9] mb-3 flex items-center gap-2">
              <Sparkles size={13} /> AI Material Calculator
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 leading-[1.05]" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              Bill of materials,<br />in one breath.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-7">
              Enter your length and width — the calculator returns the exact number of sheets, the fastener count, the total weight, and a starting cost. Your contractor walks into the call already prepared.
            </p>
            <ul className="space-y-3 mb-7">
              {[
                "Built-in coverage tables for every Unimax profile",
                "Outputs sheet count + fasteners + total weight",
                "Email the BoM to yourself or your contractor",
                "No ongoing AI subscription — runs natively in the browser",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-[#0EA5E9] mt-0.5 shrink-0" />
                  <span className="text-neutral-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Calculator widget */}
          <div className="md:col-span-7">
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-neutral-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#0F172A] flex items-center justify-center">
                  <Calculator size={16} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>Material Calculator</div>
                  <div className="text-[11px] text-neutral-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live · updates as you type
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-5">
                {/* Profile */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">Profile</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(Object.keys(MATERIAL_RATES) as Array<keyof typeof MATERIAL_RATES>).map((p) => (
                      <button
                        key={p}
                        onClick={() => setProfile(p)}
                        className={`text-left text-sm px-3 py-2.5 rounded-lg border transition-colors ${
                          profile === p
                            ? "border-[#0EA5E9] bg-[#0EA5E9]/8 text-[#0F172A] font-semibold"
                            : "border-neutral-200 hover:border-neutral-400 text-neutral-700"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dimensions */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5 block">Length (m)</label>
                    <input
                      type="number"
                      value={length}
                      min={1}
                      max={500}
                      onChange={(e) => setLength(Math.max(1, Number(e.target.value)))}
                      className="w-full text-sm px-3 py-2.5 rounded-md border border-neutral-200 focus:border-[#0EA5E9] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5 block">Width (m)</label>
                    <input
                      type="number"
                      value={width}
                      min={1}
                      max={500}
                      onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                      className="w-full text-sm px-3 py-2.5 rounded-md border border-neutral-200 focus:border-[#0EA5E9] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Output */}
                <div className="rounded-xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 p-5">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 font-bold mb-3">Bill of materials · {result.area} sqm</div>
                  <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
                    <div className="text-neutral-600 flex items-center gap-2"><Layers size={14} /> Sheets needed</div>
                    <div className="font-semibold text-right">{result.sheets.toLocaleString()} pcs</div>

                    <div className="text-neutral-600 flex items-center gap-2"><Wrench size={14} /> Fasteners</div>
                    <div className="font-semibold text-right">{result.fasteners.toLocaleString()} pcs</div>

                    <div className="text-neutral-600">Total weight</div>
                    <div className="font-semibold text-right">{result.totalWeight.toLocaleString()} kg</div>

                    <div className="text-neutral-600">Sheets subtotal</div>
                    <div className="font-semibold text-right">₱{result.sheetSubtotal.toLocaleString()}</div>

                    <div className="text-neutral-600">Fasteners subtotal</div>
                    <div className="font-semibold text-right">₱{result.fastenerCost.toLocaleString()}</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-neutral-200 flex justify-between items-baseline">
                    <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Indicative total</span>
                    <span className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                      ₱{result.total.toLocaleString()}
                    </span>
                  </div>
                </div>

                <a
                  href="mailto:inquiries@unimaxsteel.com?subject=Material%20list%20from%20calculator"
                  className="block text-center bg-[#0F172A] hover:bg-[#0EA5E9] text-white py-3 rounded-full text-sm font-semibold transition-colors"
                >
                  Email this BoM to sales →
                </a>
                <p className="text-[10px] text-neutral-400 leading-relaxed text-center">
                  Indicative only · Final quote depends on profile, gauge, accessories, and site logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-4 gap-px bg-neutral-100">
            {[
              { k: "Established", v: "2017" },
              { k: "Locations", v: "3" },
              { k: "Projects delivered", v: "500+" },
              { k: "Average response", v: "< 2 hrs" },
            ].map((s) => (
              <div key={s.k} className="bg-white p-8 text-center">
                <div className="text-5xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{s.v}</div>
                <div className="text-xs uppercase tracking-[0.16em] text-neutral-500 font-semibold">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0EA5E9] mb-3">Featured projects</div>
          <h2 className="text-4xl font-bold tracking-tight mb-12" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            What we&rsquo;ve helped build.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Pampanga Distribution Hub", scope: "15,000 sqm warehouse roof · Hi Rib + C-Purlins", year: "2025" },
              { name: "Urdaneta Industrial Park", scope: "Multi-tenant facility envelope · Insulated panels", year: "2024" },
              { name: "QC Mid-Rise Office", scope: "Composite floor decking · Webdeck", year: "2024" },
            ].map((p) => (
              <article key={p.name}>
                <div className="aspect-[3/4] bg-neutral-100 rounded-2xl mb-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div className="text-xs font-semibold text-neutral-500 bg-white px-2.5 py-1 rounded-full">{p.year}</div>
                  </div>
                </div>
                <div className="font-bold text-lg mb-1.5" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{p.name}</div>
                <div className="text-sm text-neutral-600">{p.scope}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#0F172A] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-[1.05]" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            Strong steel.<br />
            <span className="text-neutral-400">Smart software.</span>
          </h2>
          <p className="text-xl text-white/70 max-w-xl mx-auto mb-9 leading-relaxed">
            Send us your project — we&rsquo;ll match the right product to the right build, fast.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <a href="mailto:inquiries@unimaxsteel.com" className="inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-white hover:text-[#0F172A] transition-colors text-white px-6 py-3.5 rounded-full text-sm font-semibold">
              <Mail size={16} /> Email us
            </a>
            <a href="tel:0283518338" className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white px-6 py-3.5 rounded-full text-sm font-semibold">
              <Phone size={16} /> (02) 8351-8338
            </a>
          </div>
          <div className="text-xs text-white/40">
            QC HQ &middot; Pampanga warehouse &middot; Pangasinan warehouse
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-neutral-500">
          <div>© {new Date().getFullYear()} Unimax Steel Resources, Inc. · Concept 2 — Modern Clarity</div>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-[#0F172A]">All concepts</Link>
            <Link href="/proposal" className="hover:text-[#0F172A]">Proposal</Link>
            <Link href="/audit" className="hover:text-[#0F172A]">Audit</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
