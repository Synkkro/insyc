"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Hotspot {
  id: string;
  title: string;
  badge: string;
  detail: string;
  x: string;
  y: string;
  color: string;
}

export default function Hero() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>("camera");

  const hotspots: Hotspot[] = [
    {
      id: "titanium",
      title: "Grade 5 Cyber-Titanium",
      badge: "Aerospace Alloy",
      detail: "Cold-forged under 800 metric tons of pressure with micro-blasted satin PVD coating for extreme rigidity.",
      x: "15%",
      y: "48%",
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: "camera",
      title: "1.0-inch Sony LYT-900 Sensor",
      badge: "50MP Dual Native ISO",
      detail: "Custom 8P sapphire optical array capturing 210% more photons than standard smartphone cameras.",
      x: "24%",
      y: "38%",
      color: "from-amber-400 to-orange-500",
    },
    {
      id: "display",
      title: "144Hz Quantum AMOLED",
      badge: "4,500 Nits Peak",
      detail: "1-144Hz LTPO 4.0 dynamic adaptive refresh with Dolby Vision HDR & 100% DCI-P3 color gamut.",
      x: "52%",
      y: "45%",
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "shutter",
      title: "Dual-Stage Tactile Shutter",
      badge: "Haptic Actuator",
      detail: "Dedicated mechanical physical key for instant autofocus tracking and zero-lag raw burst captures.",
      x: "33%",
      y: "62%",
      color: "from-emerald-400 to-cyan-500",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#06070c]">
      {/* Radiant Aurora Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] ambient-aurora blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/15 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-purple-600/15 blur-[110px] rounded-full pointer-events-none -z-10" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f243818_1px,transparent_1px),linear-gradient(to_bottom,#1f243818_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glowing Pill Badge */}
        <div className="flex justify-center mb-6">
          <a
            href="#pre-order"
            className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 border border-cyan-500/30 hover:border-cyan-400 backdrop-blur-xl text-xs font-semibold text-cyan-300 transition-all shadow-lg shadow-cyan-500/10 hover:scale-105"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 -ml-3" />
            <span>✨ InSync Ultra Phone (1) is officially unveiled</span>
            <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            The Future of Mobile Intelligence in{" "}
            <span className="neon-gradient-text block sm:inline">
              Your Palm
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Precision cyber-forged titanium, 1-inch Sony LYT-900 optics, 120W HyperCharge, and a 54 TOPS on-device quantum neural engine.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#pre-order"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:opacity-95 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>Pre-Order VIP Allocation ($50 Deposit)</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="#configurator"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl text-sm font-semibold text-zinc-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-cyan-400/40 transition-all flex items-center justify-center gap-2 backdrop-blur-xl"
            >
              <span>Interactive Customizer</span>
            </a>
          </div>
        </div>

        {/* Studio Product Render with Glowing Interactive Hotspots */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Glowing backlight */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-indigo-600/30 to-purple-600/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 -z-10" />

          <div className="glass-box rounded-3xl border border-white/[0.12] overflow-hidden shadow-2xl bg-[#0b0d17]/95">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-black/40 border-b border-white/[0.08] text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400/80 inline-block animate-pulse"></span>
                <span className="text-zinc-300 font-bold">INSYNC ULTRA // LIVE 3D TELEMETRY</span>
              </div>
              <div className="flex items-center gap-3 text-cyan-400">
                <span>54 TOPS NEURAL CORE</span>
                <span className="text-zinc-600">|</span>
                <span className="text-emerald-400">100% HEALTH</span>
              </div>
            </div>

            {/* Photo Canvas with Hotspot Pins */}
            <div className="relative w-full aspect-[16/9] overflow-hidden group">
              <Image
                src="/images/phone-hero.jpg"
                alt="InSync Ultra Flagship Phone"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Glowing Interactive Pins */}
              {hotspots.map((hs) => {
                const isActive = activeHotspot === hs.id;
                return (
                  <button
                    key={hs.id}
                    onClick={() => setActiveHotspot(isActive ? null : hs.id)}
                    style={{ left: hs.x, top: hs.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin focus:outline-none"
                    aria-label={hs.title}
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-8 h-8 rounded-full bg-cyan-400/30 animate-ping" />
                      <span
                        className={`w-7 h-7 rounded-full transition-all duration-300 flex items-center justify-center border-2 ${
                          isActive
                            ? "bg-cyan-400 text-black border-white scale-125 shadow-lg shadow-cyan-400/50"
                            : "bg-black/70 text-cyan-400 border-cyan-400/60 hover:scale-110 hover:border-cyan-300"
                        }`}
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-current"></span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Detail Bar */}
            <div className="p-6 bg-[#0e111d] border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {activeHotspot ? (
                (() => {
                  const current = hotspots.find((h) => h.id === activeHotspot);
                  return (
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-[10px] uppercase font-bold">
                          {current?.badge}
                        </span>
                        <h4 className="text-base font-bold text-white">{current?.title}</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-2xl">{current?.detail}</p>
                    </div>
                  );
                })()
              ) : (
                <div className="text-xs text-zinc-400 font-mono">
                  Click any glowing pulse node above to inspect hardware components.
                </div>
              )}

              <div className="flex items-center gap-2 shrink-0">
                {hotspots.map((hs) => (
                  <button
                    key={hs.id}
                    onClick={() => setActiveHotspot(hs.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                      activeHotspot === hs.id
                        ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/30"
                        : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.08]"
                    }`}
                  >
                    {hs.title.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rapid Telemetry Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/[0.08]">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/40 transition-all">
            <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">1.0&quot; Sensor</span>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1">Sony LYT-900</p>
            <p className="text-xs text-zinc-400 mt-1">50MP with dual native ISO</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/40 transition-all">
            <span className="text-xs font-mono text-indigo-400 uppercase font-semibold">Quantum AMOLED</span>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1">144 Hz</p>
            <p className="text-xs text-zinc-400 mt-1">4,500 nits peak HDR</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/40 transition-all">
            <span className="text-xs font-mono text-purple-400 uppercase font-semibold">Silicon-Carbon</span>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1">5,500 mAh</p>
            <p className="text-xs text-zinc-400 mt-1">Over 2.5 days of endurance</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-pink-500/40 transition-all">
            <span className="text-xs font-mono text-pink-400 uppercase font-semibold">HyperCharge</span>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1">120 W</p>
            <p className="text-xs text-zinc-400 mt-1">0 to 100% in 15 minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
