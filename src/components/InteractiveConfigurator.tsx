"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function InteractiveConfigurator() {
  const [selectedFinish, setSelectedFinish] = useState("obsidian");
  const [selectedStorage, setSelectedStorage] = useState("512");
  const [tradeInActive, setTradeInActive] = useState(true);

  const finishes = [
    {
      id: "obsidian",
      name: "Cosmic Obsidian",
      material: "Matte PVD Grade-5 Titanium",
      colorClass: "bg-gradient-to-tr from-black to-zinc-800",
      glowColor: "rgba(14, 165, 233, 0.2)",
      tag: "Stealth Classic",
    },
    {
      id: "silver",
      name: "Cyber Silver",
      material: "Brushed Natural Titanium",
      colorClass: "bg-gradient-to-tr from-zinc-400 to-slate-200",
      glowColor: "rgba(226, 232, 240, 0.25)",
      tag: "Raw Aerospace",
    },
    {
      id: "aurora",
      name: "Aurora Opal",
      material: "Dual-layer Iridescent Ceramic",
      colorClass: "bg-gradient-to-tr from-cyan-400 via-indigo-400 to-purple-400",
      glowColor: "rgba(168, 85, 247, 0.3)",
      tag: "Special Edition",
    },
    {
      id: "amber",
      name: "Solar Amber",
      material: "Warm Champagne Gold Titanium",
      colorClass: "bg-gradient-to-tr from-amber-500 to-yellow-200",
      glowColor: "rgba(245, 158, 11, 0.25)",
      tag: "Limited Run",
    },
  ];

  const storages = [
    { size: "256", ram: "12GB LPDDR5X", price: 899, label: "256 GB" },
    { size: "512", ram: "16GB LPDDR5X", price: 999, label: "512 GB", popular: true },
    { size: "1024", ram: "16GB LPDDR5X", price: 1199, label: "1 TB", extreme: true },
  ];

  const currentStorage = storages.find((s) => s.size === selectedStorage) || storages[1];
  const activeFinishObj = finishes.find((f) => f.id === selectedFinish) || finishes[0];
  const tradeInDiscount = tradeInActive ? 350 : 0;
  const finalPrice = currentStorage.price - tradeInDiscount;

  return (
    <section id="configurator" className="py-24 relative overflow-hidden bg-[#06070c] border-t border-white/[0.08]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-cyan-500/10">
            <span>🎨 3D Interactive Configurator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Customize Your <span className="neon-gradient-text">InSync Ultra</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed">
            Select your aerospace finish, unified RAM & high-speed storage tier, and trade-in discount.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Device Canvas */}
          <div className="lg:col-span-7 glass-box rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[480px] shadow-2xl bg-[#0b0d17]/95">
            <div className="flex items-center justify-between z-10 text-xs font-mono">
              <span className="text-cyan-300 font-bold">INSYNC ULTRA // {activeFinishObj.name.toUpperCase()}</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                BATCH 01 IN STOCK
              </span>
            </div>

            {/* Canvas Image Container */}
            <div className="my-6 relative w-full h-[280px] sm:h-[320px] flex items-center justify-center">
              <div className="relative w-full h-full max-w-[480px] rounded-2xl overflow-hidden border border-white/[0.15] shadow-2xl group">
                <Image
                  src="/images/phone-hero.jpg"
                  alt="InSync Ultra Preview"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Live Floating Specs Card */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white bg-black/70 backdrop-blur-xl p-3.5 rounded-xl border border-white/[0.12]">
                  <div>
                    <span className="text-zinc-400 block text-[10px]">FINISH</span>
                    <span className="font-bold text-cyan-300">{activeFinishObj.material}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[10px]">SPEED</span>
                    <span className="font-bold text-purple-300">{currentStorage.ram}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pt-4 border-t border-white/[0.08] z-10">
              <span>Milled from Grade-5 Titanium</span>
              <span>100% Recycled Elements</span>
            </div>
          </div>

          {/* Right: Customization Controls */}
          <div className="lg:col-span-5 space-y-6">
            {/* 1. Finishes */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 flex items-center justify-between">
                <span className="font-bold text-white">1. Select Aerospace Finish</span>
                <span className="text-cyan-400 font-bold">{activeFinishObj.name}</span>
              </label>

              <div className="grid grid-cols-2 gap-3">
                {finishes.map((f) => {
                  const isSelected = selectedFinish === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFinish(f.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/20 scale-102"
                          : "bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:border-white/[0.2] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-5 h-5 rounded-full ${f.colorClass} border border-white/40 shadow-sm`} />
                        <span className="text-[10px] font-mono uppercase text-zinc-400">{f.tag}</span>
                      </div>
                      <p className="text-xs font-bold text-white leading-tight">{f.name}</p>
                      <p className="text-[10px] text-zinc-400 mt-0.5 line-clamp-1">{f.material}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Storage */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 flex items-center justify-between">
                <span className="font-bold text-white">2. Storage & Memory Tier</span>
                <span className="text-purple-400 font-bold">{currentStorage.label}</span>
              </label>

              <div className="grid grid-cols-3 gap-3">
                {storages.map((s) => {
                  const isSelected = selectedStorage === s.size;
                  return (
                    <button
                      key={s.size}
                      onClick={() => setSelectedStorage(s.size)}
                      className={`p-3.5 rounded-2xl border text-left transition-all relative ${
                        isSelected
                          ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/20"
                          : "bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:border-white/[0.2] hover:text-white"
                      }`}
                    >
                      {s.popular && (
                        <span className="absolute -top-2.5 right-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-[9px] font-mono font-black shadow-md">
                          POPULAR
                        </span>
                      )}
                      <p className="text-base font-extrabold text-white">{s.label}</p>
                      <p className="text-[10px] text-zinc-400 mt-0.5">{s.ram.split(" ")[0]}</p>
                      <p className="text-xs font-mono font-bold text-cyan-300 mt-2">${s.price}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Trade-in Toggle */}
            <div
              onClick={() => setTradeInActive(!tradeInActive)}
              className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.1] hover:border-cyan-500/40 cursor-pointer flex items-center justify-between transition-all"
            >
              <div>
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>📱 Trade-in Old Device Discount</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                    SAVE $350
                  </span>
                </span>
                <p className="text-[11px] text-zinc-400 mt-0.5">Instant credit applied upon mail-in kit verification.</p>
              </div>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                  tradeInActive ? "bg-cyan-500 border-cyan-400 text-black font-bold" : "border-zinc-600 bg-black/40"
                }`}
              >
                {tradeInActive ? "✓" : ""}
              </div>
            </div>

            {/* Total Price Card */}
            <div className="glass-box rounded-3xl p-6 border border-white/[0.15] bg-[#0f1220]/95 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase font-bold">Total with Trade-In</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <p className="text-3xl sm:text-4xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
                      ${finalPrice}
                    </p>
                    {tradeInActive && (
                      <span className="text-xs font-mono text-zinc-500 line-through">${currentStorage.price}</span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-amber-400 font-bold">Batch 01 Shipping</span>
                  <p className="text-xs text-zinc-300">November 2026</p>
                </div>
              </div>

              <a
                href="#pre-order"
                className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:opacity-95 shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center text-center hover:scale-102 active:scale-98"
              >
                Reserve This Setup ($50 Deposit)
              </a>

              <p className="text-[11px] text-zinc-400 text-center font-mono">
                ✓ 100% Refundable Deposit • 30-Day In-Hand Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
