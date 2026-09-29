"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Configurator() {
  const [selectedFinish, setSelectedFinish] = useState("obsidian");
  const [selectedStorage, setSelectedStorage] = useState("512");
  const [satelliteAddon, setSatelliteAddon] = useState(true);

  const finishes = [
    {
      id: "obsidian",
      name: "Obsidian Black",
      material: "Matte PVD Grade-5 Titanium",
      colorClass: "bg-[#18191f]",
      borderClass: "border-zinc-700",
      accent: "#262833",
    },
    {
      id: "raw-titanium",
      name: "Raw Satin Titanium",
      material: "Bead-Blasted Brushed Natural Alloy",
      colorClass: "bg-[#9da3af]",
      borderClass: "border-zinc-400",
      accent: "#bfc5d2",
    },
    {
      id: "ceramic-chalk",
      name: "Ceramic Chalk",
      material: "Dual-Layer Anti-Glare White Zirconia",
      colorClass: "bg-[#e5e1d8]",
      borderClass: "border-amber-200",
      accent: "#f3f0e8",
    },
  ];

  const storageOptions = [
    { size: "256", ram: "12GB LPDDR5X", price: 899, label: "256 GB" },
    { size: "512", ram: "16GB LPDDR5X", price: 999, label: "512 GB", popular: true },
    { size: "1024", ram: "16GB LPDDR5X", price: 1199, label: "1 TB" },
  ];

  const currentStorage = storageOptions.find((s) => s.size === selectedStorage) || storageOptions[1];
  const totalPrice = currentStorage.price + (satelliteAddon ? 50 : 0);

  return (
    <section id="configurator" className="py-24 relative overflow-hidden bg-[#0a0b10] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500">
            Precision Customizer
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
            Build your instrument.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Choose your chassis material, unified storage capacity, and global satellite telemetry module.
          </p>
        </div>

        {/* Customizer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Device Visual Showcase */}
          <div className="lg:col-span-7 bg-[#0f1118] border border-white/[0.08] rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[460px]">
            {/* Ambient Backlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/[0.03] blur-[90px] rounded-full pointer-events-none" />

            <div className="flex items-center justify-between z-10 text-xs font-mono text-zinc-400">
              <span>INSYNC PHONE (1) // {finishes.find((f) => f.id === selectedFinish)?.name}</span>
              <span className="text-amber-400">BATCH 01</span>
            </div>

            {/* Simulated Device Render Canvas */}
            <div className="my-8 relative w-full h-[280px] sm:h-[320px] flex items-center justify-center">
              <div className="relative w-full h-full max-w-[480px] rounded-xl overflow-hidden border border-white/[0.1] shadow-2xl">
                <Image
                  src="/images/phone-hero.jpg"
                  alt="Configured InSync Phone (1)"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/[0.08]">
                  <div>
                    <span className="text-zinc-400">Chassis:</span> {finishes.find((f) => f.id === selectedFinish)?.material}
                  </div>
                  <div>
                    <span className="text-zinc-400">Memory:</span> {currentStorage.ram}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-4 border-t border-white/[0.06] z-10">
              <span>Milled in Kyoto, Japan</span>
              <span>100% Recycled Rare Earth Elements</span>
            </div>
          </div>

          {/* Right: Options Selector */}
          <div className="lg:col-span-5 space-y-6">
            {/* 1. Finish Selection */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center justify-between">
                <span>1. Select Finish</span>
                <span className="text-white font-sans font-medium text-xs">
                  {finishes.find((f) => f.id === selectedFinish)?.name}
                </span>
              </label>

              <div className="grid grid-cols-3 gap-3">
                {finishes.map((finish) => {
                  const isSelected = selectedFinish === finish.id;
                  return (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-white/[0.06] border-white text-white shadow-md"
                          : "bg-white/[0.02] border-white/[0.08] text-zinc-400 hover:border-white/[0.2]"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full ${finish.colorClass} border ${finish.borderClass} mb-2`} />
                      <p className="text-xs font-semibold text-white leading-tight">{finish.name}</p>
                      <p className="text-[10px] text-zinc-500 mt-0.5 line-clamp-1">{finish.material}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Storage & RAM */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center justify-between">
                <span>2. Storage & RAM</span>
                <span className="text-white font-sans font-medium text-xs">{currentStorage.label}</span>
              </label>

              <div className="grid grid-cols-3 gap-3">
                {storageOptions.map((opt) => {
                  const isSelected = selectedStorage === opt.size;
                  return (
                    <button
                      key={opt.size}
                      onClick={() => setSelectedStorage(opt.size)}
                      className={`p-3 rounded-xl border text-left transition-all relative ${
                        isSelected
                          ? "bg-white/[0.06] border-white text-white shadow-md"
                          : "bg-white/[0.02] border-white/[0.08] text-zinc-400 hover:border-white/[0.2]"
                      }`}
                    >
                      {opt.popular && (
                        <span className="absolute -top-2 right-2 px-1.5 py-0.2 rounded bg-amber-400 text-black text-[9px] font-mono font-bold">
                          POPULAR
                        </span>
                      )}
                      <p className="text-sm font-bold text-white">{opt.label}</p>
                      <p className="text-[10px] text-zinc-400 mt-0.5">{opt.ram.split(" ")[0]} RAM</p>
                      <p className="text-xs font-mono text-zinc-300 mt-1.5">${opt.price}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Global Satellite Emergency Link */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-white">Global LEO Satellite SOS Module</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">Off-grid direct-to-satellite messaging & emergency SOS anywhere on Earth.</p>
              </div>
              <button
                onClick={() => setSatelliteAddon(!satelliteAddon)}
                className={`w-11 h-6 rounded-full transition-colors relative shrink-0 ${
                  satelliteAddon ? "bg-white" : "bg-zinc-800"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full bg-black absolute top-1 transition-transform ${
                    satelliteAddon ? "right-1" : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* Total Price & Reservation CTA */}
            <div className="p-5 rounded-2xl bg-[#0f1118] border border-white/[0.12] space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase">Estimated Total</span>
                  <p className="text-2xl sm:text-3xl font-bold font-mono text-white">${totalPrice}</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-amber-400">Batch 01 Delivery</span>
                  <p className="text-xs text-zinc-300">November 2026</p>
                </div>
              </div>

              <a
                href="#reserve"
                className="w-full py-3.5 rounded-lg text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all flex items-center justify-center text-center shadow-lg active:scale-98"
              >
                Reserve Selected Configuration ($50 Deposit)
              </a>

              <p className="text-[11px] text-zinc-500 text-center">
                Fully refundable anytime prior to shipment. Zero commitment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
