"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function CameraShowcase() {
  const [selectedLens, setSelectedLens] = useState("24mm");

  const lenses = [
    {
      id: "24mm",
      focal: "24mm",
      title: "1-Inch Sony LYT-900 Sensor",
      badge: "Flagship Primary",
      aperture: "f/1.6 Variable Iris",
      resolution: "50 MP 3.2μm Quad-Bayer",
      description:
        "The largest optical sensor ever fitted to an ultra-thin smartphone. Captures unprecedented dynamic range, ultra-low noise in candlelight, and natural optical depth-of-field without artificial digital cutouts.",
      color: "from-amber-400 to-orange-500",
    },
    {
      id: "70mm",
      focal: "70mm",
      title: "3x Optical Periscope Telephoto",
      badge: "Portrait Master",
      aperture: "f/2.4 Floating Prism",
      resolution: "50 MP with 3D OIS",
      description:
        "Engineered with floating lens groups for breathtaking facial compression and macro focusing as close as 10cm. Up to 120x Ultra-Resolution AI zoom.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: "14mm",
      focal: "14mm",
      title: "Ultra-Wide Architectural Lens",
      badge: "122° Field of View",
      aperture: "f/2.2 Freeform Optics",
      resolution: "50 MP 2.5cm Super Macro",
      description:
        "Zero edge distortion freeform glass elements with 2cm extreme macro autofocus. Perfect for majestic landscape vistas and micro-detail textures.",
      color: "from-purple-400 to-pink-500",
    },
  ];

  const currentLens = lenses.find((l) => l.id === selectedLens) || lenses[0];

  return (
    <section id="optics" className="py-24 relative overflow-hidden bg-[#07080f] border-t border-white/[0.08]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-amber-500/10">
            <span>✨ 1-Inch Studio Optics Array</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Cinematic Glass. <span className="gold-gradient-text">True Optical Depth.</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed">
            Move beyond artificial computational blur. InSync Ultra pairs physical 1.0-inch silicon with coated sapphire elements for organic photographic perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Macro Studio Lens Image */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0c0e18] shadow-2xl group">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/phone-camera.jpg"
                alt="InSync Ultra Camera Module"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Glowing Overlay Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-zinc-200 bg-black/70 backdrop-blur-xl p-3.5 rounded-2xl border border-white/[0.1]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                  <span className="font-bold text-white">Milled Titanium Bezel</span>
                </div>
                <span className="text-amber-300 font-bold">16-Bit ProRAW DNG</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Lens Selector */}
          <div className="lg:col-span-6 space-y-6">
            {/* Focal Length Tab Pills */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              {lenses.map((l) => {
                const isActive = l.id === selectedLens;
                return (
                  <button
                    key={l.id}
                    onClick={() => setSelectedLens(l.id)}
                    className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-102"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <span className="text-base font-extrabold">{l.focal}</span>
                    <span className="text-[10px] opacity-80 uppercase">{l.badge.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Lens Detail Card */}
            <div className="glass-box rounded-3xl p-7 space-y-4 border border-white/[0.12] bg-[#0e111d]/90">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                  {currentLens.badge}
                </span>
                <span className="text-xs font-mono text-zinc-400">{currentLens.focal} Optical Glass</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">{currentLens.title}</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{currentLens.description}</p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.08] text-xs font-mono">
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05]">
                  <span className="text-zinc-400 block text-[10px] uppercase font-bold">Aperture</span>
                  <span className="text-white font-bold text-sm mt-0.5 block">{currentLens.aperture}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05]">
                  <span className="text-zinc-400 block text-[10px] uppercase font-bold">Resolution & Binning</span>
                  <span className="text-white font-bold text-sm mt-0.5 block">{currentLens.resolution}</span>
                </div>
              </div>
            </div>

            {/* Video & RAW Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-xs font-bold text-cyan-400 font-mono">8K 60FPS</span>
                <p className="text-[10px] text-zinc-400 mt-0.5">Dolby Vision HDR</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-xs font-bold text-purple-400 font-mono">16-Bit RAW</span>
                <p className="text-[10px] text-zinc-400 mt-0.5">Apple ProRes Log</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-xs font-bold text-emerald-400 font-mono">0.0s Lag</span>
                <p className="text-[10px] text-zinc-400 mt-0.5">Zero Shutter Delay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
