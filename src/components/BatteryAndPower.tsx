"use client";

import React, { useState, useEffect } from "react";

export default function BatteryAndPower() {
  const [chargePercent, setChargePercent] = useState(68);
  const [isCharging, setIsCharging] = useState(true);

  useEffect(() => {
    if (!isCharging) return;
    const interval = setInterval(() => {
      setChargePercent((prev) => (prev >= 100 ? 20 : prev + 2));
    }, 800);
    return () => clearInterval(interval);
  }, [isCharging]);

  return (
    <section id="battery" className="py-24 relative overflow-hidden bg-[#07080f] border-t border-white/[0.08]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-cyan-500/10">
            <span>⚡️ 120W HyperCharge & 5,500 mAh Cell</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Infinite Endurance. <span className="neon-gradient-text">Instant Power.</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed">
            Silicon-Carbon high-density chemistry paired with 120W dual-cell charge pumps refuels your phone in the time it takes to brew an espresso.
          </p>
        </div>

        {/* Interactive Charging Simulation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Battery Gauge Box */}
          <div className="lg:col-span-6 glass-box rounded-3xl p-8 border border-cyan-500/30 bg-[#0c0f1d]/95 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="text-xs font-mono font-bold text-cyan-300">120W HYPERCHARGE TELEMETRY</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                DUAL-PUMP ACTIVE
              </span>
            </div>

            {/* Big Animated Battery Indicator */}
            <div className="my-8 text-center space-y-4">
              <div className="relative inline-flex items-center justify-center">
                {/* Outer Glow Ring */}
                <div className="w-48 h-48 rounded-full border-4 border-cyan-500/20 flex items-center justify-center relative shadow-2xl shadow-cyan-500/30">
                  <div
                    className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                  <div className="text-center">
                    <span className="text-5xl sm:text-6xl font-black font-mono text-white tracking-tighter">
                      {chargePercent}%
                    </span>
                    <span className="block text-xs font-mono text-cyan-300 uppercase mt-1 font-bold">
                      120W Super Fast
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-black/60 rounded-full h-3 p-0.5 border border-white/[0.1] max-w-md mx-auto">
                <div
                  className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 h-full rounded-full transition-all duration-300 shadow-md shadow-cyan-500/50"
                  style={{ width: `${chargePercent}%` }}
                />
              </div>

              <div className="flex items-center justify-center gap-4 text-xs font-mono text-zinc-400 pt-2">
                <span>0 to 100%: <strong className="text-white">15 minutes</strong></span>
                <span>•</span>
                <span>Cell Temp: <strong className="text-emerald-400">31.4°C Safe</strong></span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
              <button
                onClick={() => setIsCharging(!isCharging)}
                className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 border border-white/[0.1] transition-all text-xs"
              >
                {isCharging ? "Pause Simulation" : "Resume Charging Demo"}
              </button>
              <span className="text-cyan-300 font-bold">1,600 Long-Life Cycles</span>
            </div>
          </div>

          {/* Right: Power Capabilities */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-box rounded-3xl p-6 border border-white/[0.1] space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">5,500 mAh Silicon-Carbon Cell</span>
              <h3 className="text-xl font-bold text-white">2.5 Days of Extreme Endurance</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Higher energy density allows 15% more battery capacity packed inside an ultra-slim 7.2mm chassis without adding bulky weight.
              </p>
            </div>

            <div className="glass-box rounded-3xl p-6 border border-white/[0.1] space-y-2">
              <span className="text-xs font-mono text-purple-400 font-bold uppercase">50W Qi2 Magnetic Wireless</span>
              <h3 className="text-xl font-bold text-white">Snap & Fast Charge Wireless</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Compatible with all universal magnetic accessories. Refill to 100% in 35 minutes completely wire-free.
              </p>
            </div>

            <div className="glass-box rounded-3xl p-6 border border-white/[0.1] space-y-2">
              <span className="text-xs font-mono text-pink-400 font-bold uppercase">15W Reverse Power Share</span>
              <h3 className="text-xl font-bold text-white">Charge Earbuds & Accessories</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Place your wireless earbuds, smartwatches, or friends&apos; phones on the back ceramic plate to transfer instant power on the go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
