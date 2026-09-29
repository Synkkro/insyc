"use client";

import React, { useState } from "react";

export default function DistilledOS() {
  const [screenMode, setScreenMode] = useState<"focus" | "studio">("focus");

  return (
    <section id="distilled-os" className="py-24 relative overflow-hidden bg-[#090a0f] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400">
            InSync OS // v4.2
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
            Software that respects your mind.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Engineered to remove dopamine loops and notification noise. InSync OS replaces infinite feeds with calm typography, intentional tooling, and on-device privacy.
          </p>

          {/* Mode Switcher */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
            <button
              onClick={() => setScreenMode("focus")}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                screenMode === "focus"
                  ? "bg-white text-black font-bold shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Focus Monochrome Mode
            </button>
            <button
              onClick={() => setScreenMode("studio")}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                screenMode === "studio"
                  ? "bg-white text-black font-bold shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Pro Studio 120Hz Color
            </button>
          </div>
        </div>

        {/* Interactive OS Screen Simulator */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Simulated Phone Bezel & Screen */}
          <div className="md:col-span-6 flex justify-center">
            <div className="w-[300px] h-[580px] rounded-[44px] p-3 bg-[#13151e] border-2 border-zinc-700 shadow-2xl relative flex flex-col justify-between overflow-hidden">
              {/* Top Speaker Ear-piece */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3 bg-black rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 ml-auto mr-1"></div>
              </div>

              {/* Inner Screen Display */}
              <div
                className={`w-full h-full rounded-[34px] p-6 pt-10 flex flex-col justify-between transition-colors duration-500 font-mono ${
                  screenMode === "focus"
                    ? "bg-[#09090b] text-zinc-300"
                    : "bg-gradient-to-br from-indigo-950/60 via-[#0d101d] to-black text-white"
                }`}
              >
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] text-zinc-500">
                  <span>10:09</span>
                  <span>INSYNC OS • 84%</span>
                </div>

                {/* Minimalist Center Clock */}
                <div className="text-center my-auto space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                    {screenMode === "focus" ? "Intentional Mode" : "Pro Studio Display"}
                  </span>
                  <p className="text-5xl font-light tracking-tighter text-white">10:09</p>
                  <p className="text-xs text-zinc-400">Tuesday, 26 October</p>

                  {/* Batched Briefing Pill */}
                  <div className="mt-6 p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-left">
                    <span className="text-[9px] uppercase tracking-widest text-amber-400 block mb-1">
                      Daily Briefing (1/2)
                    </span>
                    <p className="text-[11px] text-zinc-300 leading-snug font-sans">
                      3 urgent messages from Studio Team. Flight boarding at 14:30. Zero notifications pending.
                    </p>
                  </div>
                </div>

                {/* Bottom Intentional App Drawer */}
                <div className="grid grid-cols-4 gap-2 pt-4 border-t border-white/[0.06] text-center text-[10px] text-zinc-400">
                  <div className="py-2 rounded-lg bg-white/[0.03]">Phone</div>
                  <div className="py-2 rounded-lg bg-white/[0.03]">Optics</div>
                  <div className="py-2 rounded-lg bg-white/[0.03]">Notes</div>
                  <div className="py-2 rounded-lg bg-white/[0.03]">Studio</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: OS Pillars */}
          <div className="md:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0e1017] border border-white/[0.08] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                01. Calm Architecture
              </span>
              <h3 className="text-lg font-bold text-white">Zero Infinite Feeds by Default</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Social algorithms are structurally disabled in the kernel. Open apps deliberately without endless scroll traps or algorithmic recommendations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e1017] border border-white/[0.08] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                02. Intelligent Digest
              </span>
              <h3 className="text-lg font-bold text-white">Batched Attention Summaries</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Rather than buzzing 120 times a day, on-device AI synthesizes low-priority notifications into 2 calm morning & evening briefing digests.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e1017] border border-white/[0.08] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                03. Absolute Privacy
              </span>
              <h3 className="text-lg font-bold text-white">100% Local Neural Processing</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Your photos, texts, voice memos, and calendar events never leave the hardware. Zero cloud tracking, zero telemetry profiling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
