"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Eye,
  Upload,
  Sparkles,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Quote,
} from "lucide-react";

const products = [
  { en: "Roofing", tl: "Pang-bubong", desc: "Hi Rib · Sierra Tile · Corrugated · Twin Rib" },
  { en: "Decking", tl: "Pang-sahig", desc: "Webdeck · Flatdeck composite floors" },
  { en: "Structural", tl: "Pang-balangkas", desc: "C-Purlins · cold-formed sections" },
  { en: "Insulated Panels", tl: "Pang-init / pang-lamig", desc: "Wall and roof thermal panels" },
  { en: "Ceiling", tl: "Kisame", desc: "Plain · Groove · Rib spandrel" },
  { en: "Furring & Accessories", tl: "Karagdagan", desc: "Metal furring + system fixings" },
];

const tiles = [
  "Hi Rib · Galvanised", "Sierra Tile · Terracotta", "Hi Rib · Forest Green",
  "Sierra Tile · Charcoal", "Hi Rib · Sky Blue", "Sierra Tile · Burgundy",
];

const visualiserOptions = [
  { name: "Pacific Coast", color: "from-sky-200 via-orange-200 to-amber-300" },
  { name: "Sunset Roof", color: "from-orange-300 via-orange-500 to-rose-600" },
  { name: "Forest Reserve", color: "from-emerald-300 via-emerald-700 to-stone-900" },
  { name: "Charcoal Mono", color: "from-stone-300 via-stone-600 to-stone-900" },
];

export default function Concept3() {
  const [activeColor, setActiveColor] = useState(1);
  const [hasUpload, setHasUpload] = useState(false);

  return (
    <main className="bg-[#FFF8F1] text-[#1F1410]" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-[#FFF8F1]/95 backdrop-blur border-b border-orange-200/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F59E0B] via-[#EA580C] to-[#7C2D12] flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">UX</span>
            </div>
            <span className="text-sm font-bold tracking-tight" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              UNIMAX <span className="text-[#EA580C]">·</span> STEEL
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm text-[#5B4631]">
            <a href="#products" className="hover:text-[#7C2D12]">Mga Produkto</a>
            <a href="#visualiser" className="hover:text-[#7C2D12]">Visualiser</a>
            <a href="#story" className="hover:text-[#7C2D12]">Our Story</a>
            <a href="#contact" className="hover:text-[#7C2D12]">Contact</a>
          </nav>
          <Link href="/" className="text-xs text-[#5B4631]/70 hover:text-[#7C2D12] flex items-center gap-1.5">
            <ArrowLeft size={14} /> Back
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-orange-200/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.35),transparent_60%),radial-gradient(ellipse_at_top_left,rgba(234,88,12,0.25),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C2D12]/10 text-[#7C2D12] text-xs font-bold uppercase tracking-[0.18em] mb-7">
              Made in the Philippines · Mula sa Pilipinas
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-[110px] font-bold tracking-tight leading-[0.92] mb-7" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              Bakal<br />
              <em className="font-light italic text-[#7C2D12]">na</em><br />
              <span className="text-[#EA580C]">tatagal.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#5B4631] max-w-2xl leading-[1.4] mb-9 font-light">
              Steel built to outlast every typhoon, every renovation, every generation. <em>Made by Filipinos, for Filipinos.</em>
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#visualiser" className="inline-flex items-center gap-2 bg-[#7C2D12] hover:bg-[#EA580C] transition-colors text-white px-6 py-4 rounded-full text-sm font-semibold">
                Tignan ang produkto · Try the Visualiser <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 text-[#5B4631] hover:text-[#7C2D12] px-5 py-4 text-sm font-semibold underline decoration-[#EA580C] underline-offset-4">
                Mag-tanong sa amin
              </a>
            </div>
          </div>
        </div>

        {/* Color tile strip */}
        <div className="bg-gradient-to-r from-[#7C2D12] via-[#EA580C] to-[#F59E0B]">
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-8 text-white text-xs font-bold uppercase tracking-[0.2em] overflow-x-auto no-scrollbar">
            {tiles.map((t) => (
              <span key={t} className="whitespace-nowrap">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="border-b border-orange-200/40">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#EA580C] mb-3">Our Story · Ang Aming Kwento</div>
            <h2 className="text-5xl font-bold tracking-tight leading-[1.05]" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              Started in 2017<br />
              <em className="italic font-light text-[#7C2D12]">with three roofing profiles.</em>
            </h2>
          </div>
          <div className="md:col-span-7 text-[#3D2A1E] text-lg leading-relaxed space-y-5">
            <p>
              We began as importers and distributors in 2017 — three roofing profiles, two decking profiles, and a quiet promise: deliver fast, price fairly, never cut corners.
            </p>
            <p>
              By 2020 we had opened a second warehouse in Pangasinan to serve Northern Luzon. Today, we ship to every region in the Philippines from three locations, and our products stand on warehouses, schools, hospitals, and homes from Aparri to Davao.
            </p>
            <p className="font-semibold text-[#7C2D12]">
              Every sheet we cut is for a Filipino building something that has to last.
            </p>
          </div>
        </div>
      </section>

      {/* AI Project Visualiser */}
      <section id="visualiser" className="border-b border-orange-200/40 bg-gradient-to-br from-[#FFF8F1] via-[#FFEDD5]/50 to-[#FFF8F1]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-7">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#EA580C] mb-3 flex items-center gap-2">
                <Sparkles size={13} /> AI Project Visualiser · Bagong feature
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.0]" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                See your home in steel<br />
                <em className="italic font-light text-[#7C2D12]">before you buy.</em>
              </h2>
            </div>
            <div className="md:col-span-5 text-[#5B4631] text-lg leading-relaxed">
              Upload a photo of your house or project. Our AI shows you what every Unimax roof colour and profile would look like — applied to <em>your</em> building.
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-orange-200/60 shadow-xl shadow-orange-900/5 overflow-hidden grid md:grid-cols-2">
            {/* Upload / Preview */}
            <div className="relative aspect-[4/3] md:aspect-auto bg-gradient-to-br from-[#FFEDD5] to-[#FED7AA]">
              <div className={`absolute inset-0 bg-gradient-to-br ${visualiserOptions[activeColor].color} transition-all duration-700`} />
              <div className="absolute inset-0 flex items-end justify-start p-6">
                <div className="bg-white/90 backdrop-blur rounded-xl px-4 py-2.5">
                  <div className="text-[10px] uppercase tracking-[0.14em] text-[#EA580C] font-bold mb-0.5">Now showing</div>
                  <div className="font-bold text-sm" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{visualiserOptions[activeColor].name}</div>
                </div>
              </div>
              {!hasUpload && (
                <button
                  onClick={() => setHasUpload(true)}
                  className="absolute top-5 right-5 inline-flex items-center gap-2 bg-white text-[#7C2D12] hover:bg-[#7C2D12] hover:text-white transition-colors px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  <Upload size={14} /> Upload your photo
                </button>
              )}
              {hasUpload && (
                <div className="absolute top-5 right-5 inline-flex items-center gap-2 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Photo uploaded
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="p-7 sm:p-9">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#EA580C] mb-4">Try a colour combination</div>
              <div className="grid grid-cols-2 gap-3 mb-7">
                {visualiserOptions.map((o, i) => (
                  <button
                    key={o.name}
                    onClick={() => setActiveColor(i)}
                    className={`p-3 rounded-xl border-2 text-left transition-all ${
                      activeColor === i ? "border-[#EA580C] bg-[#FFEDD5]/50" : "border-transparent bg-neutral-100 hover:border-orange-200"
                    }`}
                  >
                    <div className={`w-full h-10 rounded-md bg-gradient-to-br ${o.color} mb-2`} />
                    <div className="text-xs font-semibold text-[#1F1410]">{o.name}</div>
                  </button>
                ))}
              </div>
              <div className="space-y-3 text-sm text-[#5B4631] mb-7">
                <div className="flex items-start gap-2.5"><Sparkles size={15} className="text-[#EA580C] mt-0.5" /><span>Compare profiles side-by-side without leaving the site.</span></div>
                <div className="flex items-start gap-2.5"><Sparkles size={15} className="text-[#EA580C] mt-0.5" /><span>Save your top 3 looks. Share them with your contractor.</span></div>
                <div className="flex items-start gap-2.5"><Sparkles size={15} className="text-[#EA580C] mt-0.5" /><span>One tap to send your visual + spec to our sales team.</span></div>
              </div>
              <a href="#contact" className="block text-center bg-[#7C2D12] hover:bg-[#EA580C] transition-colors text-white px-5 py-3.5 rounded-full text-sm font-bold">
                Send my preferred look to Unimax →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-b border-orange-200/40">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#EA580C] mb-3">Mga Produkto · Our Range</div>
          <h2 className="text-5xl font-bold tracking-tight mb-12 max-w-3xl leading-[1.05]" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            Six product families.<br />
            <em className="italic font-light text-[#7C2D12]">One philosophy.</em>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <article key={p.en} className="group bg-white rounded-2xl border border-orange-200/40 p-7 hover:border-[#EA580C] hover:-translate-y-1 transition-all duration-300">
                <div className="text-xs uppercase tracking-[0.16em] text-[#EA580C]/80 mb-4 font-bold">{p.tl}</div>
                <div className="text-3xl font-bold mb-3 leading-tight" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{p.en}</div>
                <div className="text-sm text-[#5B4631] mb-7 leading-relaxed">{p.desc}</div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#7C2D12] group-hover:gap-2.5 transition-all">
                  Tignan <ArrowUpRight size={13} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-b border-orange-200/40 bg-gradient-to-br from-[#7C2D12] via-[#9A3412] to-[#EA580C] text-white">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <Quote size={36} className="mx-auto mb-6 text-[#FED7AA] opacity-60" />
          <p className="text-3xl sm:text-4xl font-light leading-[1.3] mb-8 italic" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            &ldquo;Mabilis na delivery, fair na presyo, at hindi nag-iiba ang quality. Sa Unimax kami nag-i-stick — five projects na, walang reklamo.&rdquo;
          </p>
          <div className="inline-flex items-center gap-3 text-sm">
            <div className="w-12 h-12 rounded-full bg-[#FFEDD5] text-[#7C2D12] flex items-center justify-center font-bold">RP</div>
            <div className="text-left">
              <div className="font-bold">Roberto Pascual</div>
              <div className="text-white/70 text-xs uppercase tracking-wider">Project Manager · Pampanga Industrial Hub</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bilingual chatbot teaser */}
      <section className="border-b border-orange-200/40">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#EA580C] mb-3 flex items-center gap-2">
              <MessageCircle size={13} /> Bilingual AI Assistant
            </div>
            <h2 className="text-5xl font-bold tracking-tight leading-[1.05] mb-6" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              Mag-tanong ka sa wika mong<br />
              <em className="italic font-light text-[#7C2D12]">komportable.</em>
            </h2>
            <p className="text-lg text-[#5B4631] leading-relaxed max-w-xl">
              Ask in English. Or in Tagalog. Or switch mid-sentence — our AI assistant understands both. It answers questions about lead times, profiles, gauges, and delivery 24/7, then connects you to a real engineer when you&rsquo;re ready.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="bg-white rounded-2xl border border-orange-200/60 p-5 shadow-lg space-y-3">
              <div className="flex gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EA580C] shrink-0" />
                <div className="bg-orange-50 px-3.5 py-2.5 rounded-2xl rounded-bl-sm text-sm leading-relaxed">
                  Kumusta! Ano po ang proyekto ninyo?
                </div>
              </div>
              <div className="flex gap-2.5 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-[#1F1410] shrink-0" />
                <div className="bg-[#1F1410] text-white px-3.5 py-2.5 rounded-2xl rounded-br-sm text-sm leading-relaxed">
                  Magkano per sheet ng Hi Rib for 800 sqm warehouse?
                </div>
              </div>
              <div className="flex gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EA580C] shrink-0" />
                <div className="bg-orange-50 px-3.5 py-2.5 rounded-2xl rounded-bl-sm text-sm leading-relaxed">
                  Para sa 800 sqm, mga 220–260 sheets po ang kailangan. Halagang ₱228,000–₱285,000 (with delivery sa Luzon). Gusto niyo bang i-connect ko kayo sa sales team?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="bg-[#1F1410] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.0] mb-6" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              Let&rsquo;s build<br />
              <em className="italic font-light text-[#F59E0B]">something Filipino.</em>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
              Three locations, one promise: a real person on the other end, ready to help your project move.
            </p>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3"><Phone size={16} className="text-[#F59E0B]" /><span>(02) 8351-8338</span></div>
              <div className="flex items-center gap-3"><Mail size={16} className="text-[#F59E0B]" /><span>inquiries@unimaxsteel.com</span></div>
              <div className="flex items-start gap-3"><MapPin size={16} className="text-[#F59E0B] mt-0.5" /><span>QC HQ · Pampanga Warehouse · Pangasinan Warehouse</span></div>
            </div>
          </div>
          <div className="bg-white text-[#1F1410] rounded-2xl p-7">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#EA580C] mb-2">Send a message · Magpadala ng mensahe</div>
            <div className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>We reply within 1 business day.</div>
            <div className="space-y-3">
              <input placeholder="Pangalan / Name" className="w-full px-4 py-3 rounded-lg bg-orange-50 border border-orange-200 focus:border-[#EA580C] focus:outline-none text-sm" />
              <input placeholder="Email or phone number" className="w-full px-4 py-3 rounded-lg bg-orange-50 border border-orange-200 focus:border-[#EA580C] focus:outline-none text-sm" />
              <textarea placeholder="Tell us about your project — sa Filipino o English, parehas okay." rows={3} className="w-full px-4 py-3 rounded-lg bg-orange-50 border border-orange-200 focus:border-[#EA580C] focus:outline-none text-sm resize-none" />
              <button className="w-full bg-[#7C2D12] hover:bg-[#EA580C] text-white py-3 rounded-lg font-semibold text-sm">
                Send my inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1F1410] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-white/40">
          <div>© {new Date().getFullYear()} Unimax Steel Resources, Inc. · Concept 3 — Filipino Pride</div>
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
