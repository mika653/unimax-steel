"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Search,
  Send,
  Bot,
  User,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";

const products = [
  { name: "Hi Rib Roofing", desc: "Long-span pre-painted roofing.", category: "Roofing" },
  { name: "Webdeck", desc: "Composite floor decking.", category: "Decking" },
  { name: "C-Purlins", desc: "Cold-formed structural sections.", category: "Structural" },
  { name: "Insulated Panels", desc: "Wall and roof thermal panels.", category: "Envelope" },
  { name: "Sierra Tile", desc: "Architectural tile profile.", category: "Roofing" },
  { name: "Spandrel Ceiling", desc: "Plain, groove, and rib ceilings.", category: "Finish" },
];

type Msg = { role: "user" | "ai"; text: string; products?: string[] };

const SAMPLE_PROMPTS = [
  "I'm building a 3,000 sqm warehouse in Pampanga. What roofing should I use?",
  "What's the difference between Hi Rib and Sierra Tile?",
  "How fast can you deliver to Cebu?",
];

const SAMPLE_REPLIES: Record<number, Msg> = {
  0: {
    role: "ai",
    text: "For a 3,000 sqm warehouse, I'd lead with Maxi Hi Rib in 0.50mm gauge — wide spans cut purlin count and Pampanga is well within our same-day delivery range. C-Purlins (1.6mm) typically pair well at that span. Want me to draft a starting BoM?",
    products: ["Hi Rib Roofing", "C-Purlins"],
  },
  1: {
    role: "ai",
    text: "Hi Rib is a high-rib trapezoidal profile — strongest pick for industrial spans, fastest install. Sierra Tile is a residential / hospitality look, mimicking clay tile while keeping steel's durability. If aesthetics matter most, go Sierra. If span and speed matter most, go Hi Rib.",
    products: ["Hi Rib Roofing", "Sierra Tile"],
  },
  2: {
    role: "ai",
    text: "Cebu is a 5–7 day window from our Pampanga warehouse with our partner logistics. For volumes over 1,000 sqm we can prioritize and shave that to 4 days. I can connect you to our Visayas account manager — want me to send your details?",
    products: [],
  },
};

export default function Concept2() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ai", text: "Hi, I'm Maya — your Unimax product advisor. Tell me about your project and I'll suggest the best products. Or pick a starter question below." },
  ]);
  const [thinking, setThinking] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  function ask(prompt: string, replyIdx?: number) {
    setMessages((m) => [...m, { role: "user", text: prompt }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      const reply: Msg = replyIdx !== undefined && SAMPLE_REPLIES[replyIdx]
        ? SAMPLE_REPLIES[replyIdx]
        : { role: "ai", text: "Got it — for projects like that we'd typically recommend Hi Rib roofing with matching C-Purlins. Want a quick estimate?", products: ["Hi Rib Roofing", "C-Purlins"] };
      setMessages((m) => [...m, reply]);
      setThinking(false);
    }, 1100);
  }

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
            <a href="#advisor" className="hover:text-[#0F172A]">AI Advisor</a>
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" /> New · AI product advisor live
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-bold tracking-tight leading-[1.0] mb-7 max-w-4xl mx-auto" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            Steel, simply<br />
            <span className="text-neutral-400">specified.</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-9">
            Tell our AI advisor what you&rsquo;re building. Get the right product, gauge, and quantity — all without a phone call.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#advisor" className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#0EA5E9] transition-colors text-white px-6 py-3.5 rounded-full text-sm font-semibold">
              Ask the advisor <ArrowRight size={16} />
            </a>
            <a href="#products" className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900 px-5 py-3.5 text-sm font-semibold">
              Or browse products
            </a>
          </div>

          {/* Search bar */}
          <div className="mt-16 max-w-xl mx-auto relative">
            <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              placeholder="Try: 'corrugated roofing for 800 sqm carport'"
              className="w-full pl-12 pr-32 py-4 rounded-full border border-neutral-200 hover:border-neutral-300 focus:border-[#0EA5E9] focus:outline-none text-sm bg-white shadow-sm"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-[#0F172A] text-white text-xs font-semibold rounded-full">
              Smart search
            </span>
          </div>
          <p className="text-xs text-neutral-400 mt-3">Natural language. Type the way you think.</p>
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

      {/* AI Advisor */}
      <section id="advisor" className="bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0EA5E9] mb-3 flex items-center gap-2">
              <Sparkles size={13} /> AI Product Advisor
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 leading-[1.05]" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              Like having a sales engineer<br />on speed-dial.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-7">
              Maya understands your project and recommends the right products, gauges, and quantities. She speaks both English and Tagalog, and hands you off to the team the moment you&rsquo;re ready to talk numbers.
            </p>
            <ul className="space-y-3 mb-7">
              {[
                "Trained on Unimax product specs and stock levels",
                "Suggests product + gauge + accessories together",
                "Drafts an estimate, then connects you to a human",
                "Bilingual — English &amp; Tagalog",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-[#0EA5E9] mt-0.5 shrink-0" />
                  <span className="text-neutral-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat widget */}
          <div className="md:col-span-7">
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col h-[560px]">
              <div className="px-5 py-4 border-b border-neutral-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#0F172A] flex items-center justify-center"><Bot size={16} className="text-white" /></div>
                <div>
                  <div className="font-bold text-sm" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>Maya</div>
                  <div className="text-[11px] text-neutral-500 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Online · usually replies in seconds</div>
                </div>
              </div>
              <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5 space-y-4 bg-neutral-50/50">
                {messages.map((m, i) => (
                  <div key={i} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white ${m.role === "ai" ? "bg-gradient-to-br from-[#0EA5E9] to-[#0F172A]" : "bg-neutral-700"}`}>
                      {m.role === "ai" ? <Bot size={13} /> : <User size={13} />}
                    </div>
                    <div className={`max-w-[80%] ${m.role === "user" ? "items-end" : "items-start"} flex flex-col gap-2`}>
                      <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${m.role === "user" ? "bg-[#0F172A] text-white rounded-br-sm" : "bg-white border border-neutral-200 rounded-bl-sm"}`}>
                        {m.text}
                      </div>
                      {m.products && m.products.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {m.products.map((p) => (
                            <span key={p} className="text-[11px] font-semibold bg-[#0EA5E9]/10 text-[#0369A1] px-2.5 py-1 rounded-full">{p}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {thinking && (
                  <div className="flex gap-3">
                    <div className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#0F172A] flex items-center justify-center"><Bot size={13} className="text-white" /></div>
                    <div className="bg-white border border-neutral-200 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
                    </div>
                  </div>
                )}
              </div>

              {messages.length <= 1 && (
                <div className="px-5 py-3 border-t border-neutral-100 bg-white flex flex-wrap gap-2">
                  {SAMPLE_PROMPTS.map((p, i) => (
                    <button
                      key={p}
                      onClick={() => ask(p, i)}
                      className="text-xs text-neutral-700 bg-neutral-100 hover:bg-[#0EA5E9]/10 hover:text-[#0369A1] px-3 py-1.5 rounded-full transition-colors"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}

              <div className="px-5 py-4 border-t border-neutral-100 bg-white flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && input.trim()) ask(input.trim()); }}
                  placeholder="Ask anything about products, lead times, or specs…"
                  className="flex-1 px-4 py-2.5 rounded-full border border-neutral-200 focus:border-[#0EA5E9] focus:outline-none text-sm"
                />
                <button
                  onClick={() => input.trim() && ask(input.trim())}
                  className="w-10 h-10 rounded-full bg-[#0F172A] hover:bg-[#0EA5E9] transition-colors text-white flex items-center justify-center"
                >
                  <Send size={15} />
                </button>
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
